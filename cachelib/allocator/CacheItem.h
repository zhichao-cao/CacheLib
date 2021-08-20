/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#pragma once

#include <folly/CPortability.h>
#include <folly/String.h>

#include <atomic>
#include <utility>

#include "cachelib/allocator/Cache.h"
#include "cachelib/allocator/CacheChainedItemIterator.h"
#include "cachelib/allocator/Handle.h"
#include "cachelib/allocator/KAllocation.h"
#include "cachelib/allocator/Refcount.h"
#include "cachelib/allocator/TypedHandle.h"
#include "cachelib/allocator/datastruct/SList.h"
#include "cachelib/allocator/memory/CompressedPtr.h"
#include "cachelib/allocator/memory/MemoryAllocator.h"
#include "cachelib/common/CompilerUtils.h"
#include "cachelib/common/Exceptions.h"
#include "cachelib/common/Mutex.h"

namespace facebook {

namespace cachelib {

namespace tests {
template <typename AllocatorT>
class BaseAllocatorTest;

template <typename AllocatorT>
class AllocatorHitStatsTest;

template <typename AllocatorT>
class MapTest;

class CacheAllocatorTestWrapper;
} // namespace tests

// forward declaration
template <typename CacheTrait>
class CacheAllocator;

template <typename CacheTrait>
class CacheChainedItem;

template <typename CacheTrait>
class ChainedItemPayload;

template <typename C>
class NvmCache;

template <typename Cache>
class CacheChainedAllocs;

template <typename K, typename V, typename C>
class Map;

// This is the actual representation of the cache item. It has two member
// hooks of type MMType::Hook and AccessType::Hook to ensure that the CacheItem
// can be put in the MMType::Container and AccessType::Container.
template <typename CacheTrait>
class CACHELIB_PACKED_ATTR CacheItem {
 public:
  /**
   * CacheAllocator is what the user will be interacting to cache
   * anything. NvmCache is an abstraction that abstracts away NVM
   * devices. It is abstracted inside CacheAllocator and user does
   * not deal with it directly. An item in NVM takes longer to fetch
   * than one that resides in RAM.
   */
  using CacheT = CacheAllocator<CacheTrait>;
  using NvmCacheT = NvmCache<CacheT>;
  using Flags = RefcountWithFlags::Flags;

  /**
   * Currently there are two types of items that can be cached.
   * A ChainedItem is a dependent item on a regular item. A chained
   * item does not have a real key but is instead associated with
   * a regular item (its parent item). Multiple chained items can be
   * linked to the same regular item and together they can cache data
   * much bigger that of a single item.
   */
  using Item = CacheItem<CacheTrait>;
  using ChainedItem = CacheChainedItem<CacheTrait>;

  /**
   * A cache item is roughly consisted of the following parts:
   *
   *  ---------------------
   *  | Intrusive Hooks   |
   *  | Reference & Flags |
   *  | Creation Time     |
   *  | Expiry Time       |
   *  | Payload           |
   *  ---------------------
   *
   * Intrusive hooks are used for access/mm containers. They contain
   * compressed pointers that link an item to said container in addition
   * to other metadata that the container itself deems useful to keep.
   *
   * Payload in this case is KAllocation which contains its own metadata
   * that describes the length of the payload, the size of the key in
   * addition to the actual key and the data.
   */
  using AccessHook = typename CacheTrait::AccessType::template Hook<Item>;
  using MMHook = typename CacheTrait::MMType::template Hook<Item>;
  using Key = KAllocation::Key;

  /**
   * User primarily interacts with an item through its handle.
   * An item handle is essentially a std::shared_ptr like structure
   * that ensures the item's refcount is properly maintained and ensures
   * the item is freed when it is not linked to access/mm containers
   * and its refcount drops to 0.
   */
  using Handle = detail::HandleImpl<CacheItem>;
  using HandleMaker = std::function<Handle(CacheItem*)>;

  /**
   * Item* and ChainedItem* are represented in this compressed form
   * inside the access and mm containers. They are more efficient to
   * store than raw pointers and can be leveraged to allow the cache
   * to be mapped to different addresses on shared memory.
   */
  using CompressedPtr = facebook::cachelib::CompressedPtr;
  using PtrCompressor = MemoryAllocator::PtrCompressor<Item>;

  // Get the required size for a cache item given the size of memory
  // user wants to allocate and the key size for the item
  //
  // @return required size if it's within the max size of uint32_t,
  //         0 otherwise
  static uint32_t getRequiredSize(Key key, uint32_t size) noexcept;

  // Get the number of maximum outstanding handles there can be at any given
  // time for an item
  static uint64_t getRefcountMax() noexcept;

  // Copying or moving this can launch a nuclear missile and blow up everything
  CacheItem(const CacheItem&) = delete;
  CacheItem(CacheItem&&) = delete;
  void operator=(const CacheItem&) = delete;
  void operator=(CacheItem&&) = delete;

  // Fetch the key corresponding to the allocation
  const Key getKey() const noexcept;

  // Readonly memory for this allocation.
  // TODO: switch the return type to 'const void*' once all the callsites
  // are modified to use getMemory() and getWritableMemory() correctly
  void* getMemory() const noexcept;

  // Writable memory for this allocation. The caller is free to do whatever he
  // wants with it and needs to ensure thread sage for access into this
  // piece of memory.
  void* getWritableMemory() const;

  // Cast item's readonly memory to a readonly user type
  // TODO: switch the return type to 'const T*' once all the callsites
  // are modified to use getMemory() and getWritableMemory() correctly
  template <typename T>
  T* getMemoryAs() const noexcept {
    return reinterpret_cast<T*>(getMemory());
  }

  // Cast item's writable memory to a writable user type
  template <typename T>
  T* getWritableMemoryAs() noexcept {
    return reinterpret_cast<T*>(getWritableMemory());
  }

  // This is the size of the memory allocation requested by the user.
  // The memory range [getMemory(), getMemory() + getSize()) is usable.
  uint32_t getSize() const noexcept;

  // Return timestamp of when this item was created
  uint32_t getCreationTime() const noexcept;

  // return the original configured time to live in seconds.
  std::chrono::seconds getConfiguredTTL() const noexcept;

  // Return the last time someone accessed this item
  uint32_t getLastAccessTime() const noexcept;

  // Convenience method for debug purposes.
  std::string toString() const;

  // return the expiry time of the item
  uint32_t getExpiryTime() const noexcept;

  // check if the item reaches the expiry timestamp
  // expiryTime_ == 0 means no time limitation for this Item
  bool isExpired() const noexcept;

  // Check if the item is expired relative to the provided timestamp.
  bool isExpired(uint32_t currentTimeSecs) const noexcept;

  /**
   * Access specific flags for an item
   *
   * These flags are set atomically and any of the APIs here will give a
   * consistent view on all the flags that are set or unset at that moment.
   *
   * However the content of the flag can be changed after any of these calls
   * are returned, so to reliably rely on them, the user needs to make sure
   * they're either the sole owner of this item or every one accessing this
   * item is only reading its content.
   */
  bool isUnevictable() const noexcept;
  bool isEvictable() const noexcept;
  bool isChainedItem() const noexcept;
  bool hasChainedItem() const noexcept;

  /**
   * Keep track of whether the item was modified while in ram cache
   */
  bool isNvmClean() const noexcept;
  void markNvmClean() noexcept;
  void unmarkNvmClean() noexcept;

  /**
   * Marks that the item was potentially evicted from the nvmcache and might
   * need to be rewritten even if it was nvm-clean
   */
  void markNvmEvicted() noexcept;
  void unmarkNvmEvicted() noexcept;
  bool isNvmEvicted() const noexcept;

  /**
   * Function to set the timestamp for when to expire an item
   * Employs a best-effort approach to update the expiryTime. Item's expiry
   * time can only be updated when the item is a regular item and is part of
   * the cache and not in the moving state.
   *
   * @param expiryTime the expiryTime value to update to
   *
   * @return boolean indicating whether expiry time was successfully updated
   */
  bool updateExpiryTime(uint32_t expiryTimeSecs) noexcept;

  // Same as @updateExpiryTime, but sets expiry time to @ttl seconds from now.
  //
  // @param ttl   TTL (from now)
  // @return Boolean indicating whether expiry time was successfully updated.
  bool extendTTL(std::chrono::seconds ttl) noexcept;

  // Return the refcount of an item
  RefcountWithFlags::Value getRefCount() const noexcept;

  // Returns true if the item is in access container, false otherwise
  bool isAccessible() const noexcept;

 protected:
  // construct an item without expiry timestamp.
  CacheItem(Key key, uint32_t size, uint32_t creationTime);

  // @param key           Key for this item
  // @param size          Size allocated by the user. This may be smaller than
  //                      the full usable size
  // @param creationTime  Timestamp when this item was created
  // @param expiryTime    Timestamp when this item will be expired.
  CacheItem(Key key, uint32_t size, uint32_t creationTime, uint32_t expiryTime);

  // changes the item's key. This is only supported for ChainedItems. For
  // regular items, the key does not change with the lifetime of the item. For
  // ChainedItems since the key is the parent item, the key can change when
  // the parent item is being moved or tranferred.
  //
  // @throw std::invalid_argument if item is not a chained item or the key
  //        size does not match with the current key
  void changeKey(Key key);

  /**
   * CacheItem's refcount contain admin references, access referneces, and
   * flags, refer to Refcount.h for details.
   *
   * Currently we support up to 2^18 references on any given item.
   * Increment and decrement may throw the following due to over/under-flow.
   *  cachelib::exception::RefcountOverflow
   *  cachelib::exception::RefcountUnderflow
   */
  RefcountWithFlags::Value getRefCountAndFlagsRaw() const noexcept;

  FOLLY_ALWAYS_INLINE void incRef() {
    if (LIKELY(ref_.incRef())) {
      return;
    }
    throw exception::RefcountOverflow(
        folly::sformat("Refcount maxed out. item: {}", toString()));
  }

  FOLLY_ALWAYS_INLINE RefcountWithFlags::Value decRef() {
    return ref_.decRef();
  }

  // Whether or not an item is completely drained of all references including
  // the internal ones. This means there is no access refcount bits and zero
  // admin bits set. I.e. refcount is 0 and the item is not linked, accessible,
  // nor moving
  bool isDrained() const noexcept;

  // Whether or not we hold the last exclusive access to this item
  // Refcount is 1 and the item is not linked, accessible, nor moving
  bool isExclusive() const noexcept;

  /**
   * The following three functions correspond to the state of the allocation
   * in the memory management container. This is protected by the
   * MMContainer's internal locking. Inspecting this outside the mm
   * container will be racy.
   */
  void markInMMContainer() noexcept;
  void unmarkInMMContainer() noexcept;
  bool isInMMContainer() const noexcept;

  /**
   * The following three functions correspond to the state of the allocation
   * in the access container. This will be protected by the access container
   * lock. Depending on their state outside of the access container might be
   * racy
   */
  void markAccessible() noexcept;
  void unmarkAccessible() noexcept;

  /**
   * The following two functions corresond to whether or not an item is
   * currently in the process of being moved. This happens during a slab
   * rebalance or resize operation.
   *
   * An item can only be marked moving when `isInMMContainer` returns true.
   * This operation is atomic.
   *
   * User can also query if an item "isOnlyMoving". This returns true only
   * if the refcount is 0 and only the moving bit is set.
   *
   * Unmarking moving does not depend on `isInMMContainer`
   */
  bool markMoving() noexcept;
  void unmarkMoving() noexcept;
  bool isMoving() const noexcept;
  bool isOnlyMoving() const noexcept;

  /**
   * The following correspond to the evictable state of the item
   * An unevictable item unevictable item may prevent the slab it
   * belongs to from being released if it cannot be moved
   */
  void markUnevictable() noexcept;
  void unmarkUnevictable() noexcept;

  /**
   * Item cannot be marked both chained allocation and
   * marked as having chained allocations at the same time
   */
  void markIsChainedItem() noexcept;
  void unmarkIsChainedItem() noexcept;
  void markHasChainedItem() noexcept;
  void unmarkHasChainedItem() noexcept;
  ChainedItem& asChainedItem() noexcept;
  const ChainedItem& asChainedItem() const noexcept;

  // Returns the offset of the beginning of usable memory for an item
  uint32_t getOffsetForMemory() const noexcept;

  /**
   * Functions to set, unset and get bits
   */
  template <RefcountWithFlags::Flags flagBit>
  void setFlag() noexcept;
  template <RefcountWithFlags::Flags flagBit>
  void unSetFlag() noexcept;
  template <RefcountWithFlags::Flags flagBit>
  bool isFlagSet() const noexcept;

  /**
   * The following are the data members of CacheItem
   *
   * Hooks to access and mm containers are public since other parts of the
   * code need access to them. Everything else should be private.
   */
 public:
  // Hook for the access type
  AccessHook accessHook_;

  using AccessContainer = typename CacheTrait::AccessType::template Container<
      Item,
      &Item::accessHook_,
      typename CacheTrait::AccessTypeLocks>;

  // Hook for the mm type
  MMHook mmHook_;

  using MMContainer =
      typename CacheTrait::MMType::template Container<Item, &Item::mmHook_>;

 protected:
  // Refcount for the item and also flags on the items state
  RefcountWithFlags ref_;

  // Time when this cache item is created
  const uint32_t creationTime_{0};

  // Expiry timestamp for the item
  // 0 means no time limitation
  uint32_t expiryTime_{0};

  // The actual allocation.
  KAllocation alloc_;

  friend ChainedItem;
  friend CacheT;
  friend AccessContainer;
  friend MMContainer;
  friend NvmCacheT;
  friend CacheChainedAllocs<CacheAllocator<CacheTrait>>;
  friend CacheChainedItemIterator<CacheAllocator<CacheTrait>>;
  friend class facebook::cachelib::tests::CacheAllocatorTestWrapper;
  template <typename K, typename V, typename C>
  friend class Map;

  // tests
  template <typename AllocatorT>
  friend class facebook::cachelib::tests::BaseAllocatorTest;
  friend class facebook::cachelib::tests::MapTest<CacheAllocator<CacheTrait>>;
  FRIEND_TEST(LruAllocatorTest, ItemSampling);
  FRIEND_TEST(LruAllocatorTest, AddChainedAllocationSimple);
  FRIEND_TEST(ItemTest, ChangeKey);
  FRIEND_TEST(ItemTest, ToString);
  FRIEND_TEST(ItemTest, CreationTime);
  FRIEND_TEST(ItemTest, ExpiryTime);
  FRIEND_TEST(ItemTest, ChainedItemConstruction);
  FRIEND_TEST(ItemTest, NonStringKey);
  template <typename AllocatorT>
  friend class facebook::cachelib::tests::AllocatorHitStatsTest;
};

// A chained item has a hook pointing to the next chained item. The hook is
// a compressed pointer stored at the beginning of KAllocation's data.
// A chained item's key is a compressed pointer to its parent item.
//
// Memory layout:
// | --------------------- |
// | AccessHook            |
// | MMHook                |
// | RefCountWithFlags     |
// | creationTime_         |
// | --------------------- |
// |  K | size_            |
// |  A | ---------------- |
// |  l |       | keyData  | <-- sizeof(CompressedPtr)
// |  l |       | -------- |
// |  o |       | P | hook | <-- sizeof(SlistHook<ChainedItem>)
// |  c | data_ | a | data |
// |  a |       | y |      |
// |  t |       | l |      |
// |  i |       | o |      |
// |  o |       | d |      |
// |  n |       |   |      |
// | --------------------- |
template <typename CacheTrait>
class CACHELIB_PACKED_ATTR CacheChainedItem : public CacheItem<CacheTrait> {
 public:
  using Item = CacheItem<CacheTrait>;
  using ChainedItem = CacheChainedItem<CacheTrait>;
  using Payload = ChainedItemPayload<CacheTrait>;
  using CompressedPtr = typename Item::CompressedPtr;
  using PtrCompressor = typename Item::PtrCompressor;

  /**
   * Key for CacheChainedItem is the raw pointer to the parent item,
   * so it is 8 bytes big.
   */
  using Key = typename Item::Key;
  static constexpr uint32_t kKeySize = sizeof(CompressedPtr);

  // Get the required size for a cache item given the size of memory
  // user wants to allocate
  //
  // @return required size if it's within the max size of uint32_t,
  //         0 otherwise
  static uint32_t getRequiredSize(uint32_t size) noexcept;

  // Get the parent item this chained allocation is associated with
  Item& getParentItem(const PtrCompressor& compressor) const noexcept;

  // Usable memory for this allocation. The caller is free to do whatever he
  // wants with it and needs to ensure concurrency for access into this
  // piece of memory.
  void* getMemory() const noexcept;

  // This is the size of the memory allocation requested by the user.
  // The memory range [getMemory(), getMemory() + getSize()) is usable.
  uint32_t getSize() const noexcept;

  // Convenience method for debug purposes.
  std::string toString() const;

 protected:
  // The key of a chained allocation is the address of its parent item
  //
  // @param ptr         Compressed ptr to parent item
  // @param allocSize   This is the size of the entire allocation for
  //                    constructing this item
  // @param creationTime  Timestamp when this item was created
  CacheChainedItem(CompressedPtr key, uint32_t size, uint32_t creationTime);

  // reset the key of the ChainedItem. For regular Items, we dont allow doing
  // this. However for chained items since the parent is the key, we need to
  // allow this for transferring the ownership from one parent to another.
  //
  // @throw std::invalid_argument if the chained item is still in accessible
  //        state.
  void changeKey(CompressedPtr newKey);

  // Append chain to this item. The new chain can contain one or more items
  // but this item to which the new chain is being appended must be a single
  // item, or the last item of an existing chain
  //
  // @throw std::invalid_argument  if this item is already part of a chain
  //                               and is not the last item
  void appendChain(ChainedItem& newChain, const PtrCompressor& compressor);

  // get the next in the chain for this chained item.
  ChainedItem* getNext(const PtrCompressor& compressor) const noexcept;

  // set the next in chain for this chained Item
  void setNext(const ChainedItem* next,
               const PtrCompressor& compressor) noexcept;

  Payload& getPayload();
  const Payload& getPayload() const;

  friend Payload;
  friend CacheAllocator<CacheTrait>;
  friend CacheChainedAllocs<CacheAllocator<CacheTrait>>;
  friend CacheChainedItemIterator<CacheAllocator<CacheTrait>>;
  template <typename AllocatorT>
  friend class facebook::cachelib::tests::BaseAllocatorTest;
  FRIEND_TEST(ItemTest, ChainedItemConstruction);
  FRIEND_TEST(ItemTest, ToString);
  FRIEND_TEST(ItemTest, ChangeKey);
};
} // namespace cachelib
} // namespace facebook

#include "cachelib/allocator/CacheItem-inl.h"