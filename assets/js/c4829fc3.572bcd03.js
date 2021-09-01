"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6587],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1566:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"Structured_Cache",title:"Structured Cache"},s="General approach",p={unversionedId:"Cache_Library_User_Guides/Structured_Cache",id:"Cache_Library_User_Guides/Structured_Cache",isDocsHomePage:!1,title:"Structured Cache",description:"Cachelib enables you to build structured data on top of a cache instead of treating it as just a blob-cache. Data structures let you focus on the actual logic instead of being worried about where a memory allocation comes from. Of course, we're still bound by physical limits such as the 4 MB ceiling for any single piece of allocations, but in practice we rarely need to make use of that big an allocation. We provide a generic memory allocator that can take in one or more buffers of memory (one buffer correspond to an item type in cache). Cachelib data types are built by making use of this memory allocator.",source:"@site/docs/Cache_Library_User_Guides/Structured_Cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Structured_Cache",permalink:"/docs/Cache_Library_User_Guides/Structured_Cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Structured_Cache.md",version:"current",frontMatter:{id:"Structured_Cache",title:"Structured Cache"},sidebar:"userguideSidebar",previous:{title:"Compact cache",permalink:"/docs/Cache_Library_User_Guides/compact_cache"},next:{title:"Tuning DRAM cache efficiency",permalink:"/docs/Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency"}},c=[{value:"Prerequisites for Key and Value",id:"prerequisites-for-key-and-value",children:[]},{value:"FixedSizeArray APIs",id:"fixedsizearray-apis",children:[]},{value:"Prerequisites for Key and Value",id:"prerequisites-for-key-and-value-1",children:[]},{value:"Map APIs",id:"map-apis",children:[]},{value:"Map architecture",id:"map-architecture",children:[]},{value:"Prerequisites for Key and Value",id:"prerequisites-for-key-and-value-2",children:[]},{value:"RangeMap APIs",id:"rangemap-apis",children:[]},{value:"RangeMap architecture",id:"rangemap-architecture",children:[]}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general-approach"},"General approach"),(0,i.kt)("p",null,"Cachelib enables you to build structured data on top of a cache instead of treating it as just a blob-cache. Data structures let you focus on the actual logic instead of being worried about where a memory allocation comes from. Of course, we're still bound by physical limits such as the 4 MB ceiling for any single piece of allocations, but in practice we rarely need to make use of that big an allocation. We provide a generic memory allocator that can take in one or more buffers of memory (one buffer correspond to an item type in cache). Cachelib data types are built by making use of this memory allocator."),(0,i.kt)("h1",{id:"fixedsizearray"},"FixedSizeArray"),(0,i.kt)("h2",{id:"prerequisites-for-key-and-value"},"Prerequisites for Key and Value"),(0,i.kt)("p",null,"Both key and value must be POD and fixed size."),(0,i.kt)("h2",{id:"fixedsizearray-apis"},"FixedSizeArray APIs"),(0,i.kt)("p",null,"For a complete list of FixedSizeArray APIs, see ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib/datatype/FixedSizeArray.h"),"."),(0,i.kt)("p",null,"User must specify the size of the array before creating it. Creating the array does NOT initialize any data. Users are responsible for initializing the values in the array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Construct a fixed size array from an ItemHandle\n// This modifies the item's memory\n// @throw std::invalid_argument  if the item does not have enough memory\ntemplate <typename SizeT>\nFixedSizeArray(ItemHandle handle, SizeT numElements)\n\n// Undefined behavior if index is out of range\nElement& operator[](uint32_t index) { return (*layout_)[index]; }\nconst Element& operator[](uint32_t index) const { return (*layout_)[index]; }\n\n// Throw std::out_of_range if index is out of range\nElement& at(uint32_t index) { return layout_->at(index); }\nconst Element& at(uint32_t index) const { return layout_->at(index); }\n")),(0,i.kt)("h1",{id:"map"},"Map"),(0,i.kt)("p",null,"The following sections discuss the ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," data structure."),(0,i.kt)("h2",{id:"prerequisites-for-key-and-value-1"},"Prerequisites for Key and Value"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib::Map")," is a hash map implementation that can store fixed size key to variable size value. Our map implementation currently has more limitations than ",(0,i.kt)("inlineCode",{parentName:"p"},"std::unordered_map")," due to the nature of cachelib's memory model. The following describes what is required of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," types."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," must be fixed size and memcpy-able. This means it can be an integer, or any fixed size structures, such as the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Key {\n  char id1[12];\n  int id2;\n  char id3[4];\n  double id4;\n};\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," must be memcpy-able. It also cannot contain any pointers to other data structures on heap, which means structures such as ",(0,i.kt)("inlineCode",{parentName:"p"},"std::map")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"std::string")," are not allowed. All the data for ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," must live in a flat buffer. If it is an integer or a fixed size structure, you don't need to provide any additional method. If it is a variable sized structure, you must provide the method ",(0,i.kt)("inlineCode",{parentName:"p"},"uint32_t getStorageSize()"),". We'll call the method to know how much data we'll need to copy into the map. Here's an example for a variable size ",(0,i.kt)("inlineCode",{parentName:"p"},"Value"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Value {\n  uint32_t getStorageSize() const { return sizeof(Value) + size_; }\n  uint32_t size_;\n  uint8_t data[];\n};\n")),(0,i.kt)("h2",{id:"map-apis"},"Map APIs"),(0,i.kt)("p",null,"For a complete list of the Map APIs, see cachelib/datatype/Map.h."),(0,i.kt)("p",null,"To create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),", call the ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// @cache: Your cache object. (I.e. CacheAllocator)\n// @pid: This is the pool that you would store this map in.\n// @key: Key to look up your map from cache. Note this is not\n//       the same key as the key for your map.\n// @numEntries: Optional. This specifies the number of keys the map\n//              is reserved for.\n// @numBytes: Optional. This specifies how many bytes the map will\n//            initially reserve for values.\nstatic Map create(\n  CacheType& cache,\n  PoolId pid,\n  typename CacheType::Key key,\n  uint32_t numEntries = kDefaultNumEntries,\n  uint32_t numBytes = kDefaultNumBytes\n);\n")),(0,i.kt)("p",null,"To convert an existing ItemHandle from cache into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),", call the following method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// @cache: Your cache object (i.e. CacheAllocator)\n// @handle: Item handle that you just looked up using the\n//           same key as when you called Map::create()\nstatic Map fromItemHandle(CacheType& cache, ItemHandle handle);\n")),(0,i.kt)("p",null,"Call these methods to find out how big a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// How many bytes this map occupies in memory.\nsize_t sizeInBytes() const;\n\n// Return number of entries in this map\nuint32_t size() const;\n")),(0,i.kt)("p",null,"To find an entry in an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),", call these methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Return nullptr if not found. If found, returns a pointer\n// to EntryValue which contains Key and Value.\nEntryValue* find(const EntryKey& key);\nconst EntryValue* find(const EntryKey& key) const;\n")),(0,i.kt)("p",null,"There're two APIs for insertion. The ",(0,i.kt)("inlineCode",{parentName:"p"},"insert()")," method will only succeed if the key does not exist in the Map, whereas the ",(0,i.kt)("inlineCode",{parentName:"p"},"insertOrReplace()")," method will always succeed and return either ",(0,i.kt)("inlineCode",{parentName:"p"},"kInserted")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kReplaced"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool insert(const EntryKey& key, const EntryValue& value);\n\nenum InsertOrReplaceResult {\n  kInserted,\n  kReplaced,\n};\nInsertOrReplaceResult insertOrReplace(\n  const EntryKey& key,\n  const EntryValue& value\n);\n")),(0,i.kt)("p",null,"To erase an existing key, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"erase()")," method and pass in the key to be deleted from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),". Note that this does not free up any storage. A ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"'s storage is lazily reclaimed during an insertion or can be triggered by your calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"compact()")," directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool erase(const EntryKey& key);\n")),(0,i.kt)("p",null,"To run compaction explicitly, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"compact()")," method. This operation may take up to O(M + N) time, where M is the number of entries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," and N is the number of buffers of memory used underneath this ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),". In practice, M >> N."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void compact();\n")),(0,i.kt)("h2",{id:"map-architecture"},"Map architecture"),(0,i.kt)("p",null,"Our map implementation uses robin-hood hash table to achieve high load factor and a stack allocator for simplicity. In terms of memory layout, ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib::Map")," always makes use of at least two buffers (cachelib items). The first buffer (parent item) is used for hash table and the second (and third, and fourth, etc.) is used to store values. Our design (like any data structures) comes with a fixed up-front cost in storage and also per-entry storage overhead. The numbers currently are 16 bytes per entry (12 bytes for the hash table and 4 bytes for each value allocation), and 20 bytes of fixed cost. Each additional value buffer (which can fit multiple values) adds another 12 bytes."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8006).Z})),(0,i.kt)("p",null,"Each of the item is allocated through ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheAllocator"),". But the map itself doesn't care about where the memory comes from; it only cares that it has a number of preallocated fixed size buffers to work with. When looking up a key, first we locate the key in the hash table where we store an address offset for the value. Then we use this address offset to locate which buffer the value is in and the relative offset in that buffer it is at. When we're near capacity for the hash table, we will expand the buffer (parent item) for the hash table and rehash the keys. When we're near capacity for value storage, we'll add another buffer (chained item) and allocate from the new buffer."),(0,i.kt)("p",null,"This design introduces an extra complexity not found in something like ",(0,i.kt)("inlineCode",{parentName:"p"},"std::unordered_map"),". Namely in a multi-threaded environment, as the map expands its storage in one thread, it may leave the map in another thread stale. This is because when we first look up the map from cache, we compute some states regarding the map storage and store them on the stack (inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," object itself). Whenever storage expands, we must recompute these stats. To avoid a situation where one thread triggers a storage expansion and make the other thread's instance of the same map invalid, we fork (copy the entire content in the map to a new set of buffers) when it is necessary to expand the underlying storage. What this means is that if another thread inserts a few items into the map that triggers a storage expansion, the current thread's map copy becomes stale (it is still valid to read from, but you may be reading stale data. And if you write, your writes will be lost.)."),(0,i.kt)("p",null,"So to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib::Map")," properly in a multi-threaded environment, follow these rules:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Read")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Look up item handle from cache and convert it to an instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"cachelib::Map"),"."),(0,i.kt)("li",{parentName:"ol"},"Grab the read lock."),(0,i.kt)("li",{parentName:"ol"},"Read.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Write")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Grab the write lock (note: must always grab the write lock before looking up for the map in cache)."),(0,i.kt)("li",{parentName:"ol"},"Look up item handle from cache and convert it to an instance of cachelib::Map."),(0,i.kt)("li",{parentName:"ol"},"Write.")),(0,i.kt)("h1",{id:"rangemap"},"RangeMap"),(0,i.kt)("p",null,"The following sections discuss the ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap")," data structure."),(0,i.kt)("h2",{id:"prerequisites-for-key-and-value-2"},"Prerequisites for Key and Value"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap")," have the exact same requirements for ",(0,i.kt)("a",{parentName:"p",href:"#Map"},"Map"),". In addition, ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," must support the equality and comparison operators (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"operator=="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"operator!="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"operator<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"operator>"),", etc.)."),(0,i.kt)("h2",{id:"rangemap-apis"},"RangeMap APIs"),(0,i.kt)("p",null,"For a complete list of the RangeMap APIs, see ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib/datatype/RangeMap.h"),"."),(0,i.kt)("p",null,"To create a RangeMap, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Create a new cachelib::RangeMap\n// @param cache   cache allocator to allocate from\n// @param pid     pool where we'll allocate the map from\n// @param key     key for the item in cache\n// @param numEntries   number of entries this map can contain initially\n// @param numBytes     number of bytes allocated for value storage initially\n// @return  valid cachelib::RangeMap on success,\n//          cachelib::RangeMap::isNullItemHandle() == true on failure\nstatic RangeMap create(\n  Cache& cache,\n  PoolId pid,\n  typename Cache::Key key,\n  uint32_t numEntries = kDefaultNumEntries,\n  uint32_t numBytes = kDefaultNumBytes\n);\n")),(0,i.kt)("p",null,"To convert an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemHandle")," from cache into a ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap"),", call the following method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Convert a item handle to a cachelib::RangeMap\n// @param cache   cache allocator to allocate from\n// @param handle  parent handle for this cachelib::RangeMap\n// @return cachelib::RangeMap\nstatic RangeMap fromItemHandle(Cache& cache, ItemHandle handle);\n")),(0,i.kt)("p",null,"To find out a RangeMap's size and get the capacity of the index (how many entries can fit before we have to expand the index size), call these methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Return number of bytes this map is using for hash table and\n// the buffers. This doesn't include cachelib item overhead.\nsize_t sizeInBytes() const;\n\n// Return number of elements in this map.\nuint32_t size() const {\n  return handle_->template getMemoryAs<BinaryIndex>()->numEntries();\n}\n\n// Return capacity of the index in this map.\nuint32_t capacity() const {\n  return handle_->template getMemoryAs<BinaryIndex>()->capacity();\n}\n")),(0,i.kt)("p",null,"There're two APIs for insertion. The ",(0,i.kt)("inlineCode",{parentName:"p"},"insert()")," method will only succeed if the key does not exist in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap"),", whereas the ",(0,i.kt)("inlineCode",{parentName:"p"},"insertOrReplace()")," method  will always succeed and return either ",(0,i.kt)("inlineCode",{parentName:"p"},"kInserted")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kReplaced"),". The cost of insert is typically O(N) as we have to insert data into the binary index. This means the insertion performance will degrade rapidly if the index size grows too large (e.g., beyond 1000s)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool insert(const EntryKey& key, const EntryValue& value);\n\nenum InsertOrReplaceResult {\n  kInserted,\n  kReplaced,\n};\nInsertOrReplaceResult insertOrReplace(\n  const EntryKey& key,\n  const EntryValue& value\n);\n")),(0,i.kt)("p",null,"To remove an existing key, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"remove()")," method and pass in the key to be deleted from the ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap"),". Note that this does not free up any storage. The ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap"),"'s storage is lazily reclaimed during an insertion or can be triggered by your calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"compact()")," method directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool remove(const EntryKey& key);\n")),(0,i.kt)("p",null,"To run compaction explicitly, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"compact()")," method. This operation may take up to O(M + N*LOG(N)) time,  where N is the number of entries in the map and M is the number of buffers of memory used underneath this map. In practice, N >> M."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void compact();\n")),(0,i.kt)("p",null,"Up until now, the ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap")," API looks very similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib::Map"),"\u2019s API. However, lookups in a ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap")," work differently. A ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeMap")," is an ordered map and supports point-lookup, range-lookup, and approximate range-lookup. The APIs typically return an iterator or a range of iterator. The cost of lookup is usually log(N)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Return an iterator for this key. Can iterate in sorted order.\n// itr == end() if not found.\nItr lookup(const EntryKey& key);\nConstItr lookup(const EntryKey& key) const;\n\n// Return an exact range or null if not found. [key1, key2] are inclusive.\nfolly::Range<Itr> rangeLookup(const EntryKey& key1, const EntryKey& key2);\nfolly::Range<ConstItr> rangeLookup(\n  const EntryKey& key1,\n  const EntryKey& key2\n) const;\n\n// Return cloest range to requested [key1, key2]. Null if nothing is in map.\n// I.e. for input [5, 10], we might return [6, 9].\nfolly::Range<Itr> rangeLookupApproximate(\n  const EntryKey& key1,\n  const EntryKey& key2\n);\nfolly::Range<ConstItr> rangeLookupApproximate(\n  const EntryKey& key1,\n  const EntryKey& key2\n) const;\n")),(0,i.kt)("h2",{id:"rangemap-architecture"},"RangeMap architecture"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," storage is identical to ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib::Map"),". The main difference is in the index. We use a binary index to support efficient range lookups and ordered iteration. The index itself is just a sorted array of ",(0,i.kt)("inlineCode",{parentName:"p"},"{key, compressed ptr}"),". The cost of a lookup is O(LOG(N)). The cost of an insert is typically O(N) as we have to insert data into the binary index. This means the insertion performance will degrade rapidly if the index size grows too large (e.g., beyond 1000s)."),(0,i.kt)("p",null,"For read and write operations, you must use locks the way they're used for cachelib::Map. It means to use range map properly in a multi-threaded environment, you have to follow the following rules:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Read")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Look up an item handle from cache and convert it to an instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"RangeMap"),"."),(0,i.kt)("li",{parentName:"ol"},"Grab the read lock."),(0,i.kt)("li",{parentName:"ol"},"Read.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Write")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Grab the write lock (note: must always grab write lock before looking up for the map in cache)."),(0,i.kt)("li",{parentName:"ol"},"Look up the item handle from cache and convert it to an instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"RangeMap"),"."),(0,i.kt)("li",{parentName:"ol"},"Write.")))}d.isMDXComponent=!0},8006:function(e,t,a){t.Z=a.p+"assets/images/hashtable-bbb7241416549634ca94eacf582a764a.png"}}]);