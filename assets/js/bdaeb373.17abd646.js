"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5074],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4528:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"Configure_HashTable",title:"Configure HashTable"},s=void 0,u={unversionedId:"Cache_Library_User_Guides/Configure_HashTable",id:"Cache_Library_User_Guides/Configure_HashTable",isDocsHomePage:!1,title:"Configure HashTable",description:"When you use a cache instance, it comes with a hash table that the find() method uses to look up an item in cache by its key. The current implementation uses a chained, open addressable hash table for keeping the lookup performance as small as possible. There are a few knobs to tune that will impact the lookup and insert cost of the cache. For this reason, the default parameters for this are left as the most-unoptimized state. To tune the HashTable, you need configure two important parameters in the AccessConfig type in your cache.",source:"@site/docs/Cache_Library_User_Guides/Configure_HashTable.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Configure_HashTable",permalink:"/docs/Cache_Library_User_Guides/Configure_HashTable",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Configure_HashTable.md",version:"current",frontMatter:{id:"Configure_HashTable",title:"Configure HashTable"},sidebar:"userguideSidebar",previous:{title:"Partition cache into pools",permalink:"/docs/Cache_Library_User_Guides/Partition_cache_into_pools"},next:{title:"Remove callback",permalink:"/docs/Cache_Library_User_Guides/Remove_callback"}},c=[{value:"Choosing a good bucketspower",id:"choosing-a-good-bucketspower",children:[]},{value:"Detecting a bad bucketspower",id:"detecting-a-bad-bucketspower",children:[]},{value:"locksPower",id:"lockspower",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you use a cache instance, it comes with a hash table that the ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," method uses to look up an item in cache by its key. The current implementation uses a chained, open addressable hash table for keeping the lookup performance as small as possible. There are a few knobs to tune that will impact the lookup and insert cost of the cache. For this reason, the default parameters for this are left as the most-unoptimized state. To tune the ",(0,o.kt)("inlineCode",{parentName:"p"},"HashTable"),", you need configure two important parameters in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessConfig")," type in your cache."),(0,o.kt)("h1",{id:"bucketspower"},"BucketsPower"),(0,o.kt)("p",null,"BucketsPower, an exponent to base 2, is used to configure the number of buckets in the hash table. It is a good idea to set this to twice the number of elements you roughly expect to store in cache. For example, setting it to 21 creates a hash table of 2 million buckets and size 8 MB. For production use cases dealing with millions of items, set this to values around 26-28. If you are dealing with billions of items in cache, set this to 30+. Note for tests, you might want to lower this value so that the memory foot print of tests running concurrently is not an issue."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Set cache to have 15 million items using 32 million buckets.\nCache::Config cfg;\ncfg.accessConfig.bucketsPower = 25;\n")),(0,o.kt)("h2",{id:"choosing-a-good-bucketspower"},"Choosing a good bucketspower"),(0,o.kt)("p",null,"For a fast lookup/insert performance in a chained hash table, keep the chaining at minimum. A good rule of thumb for such a hash table is to ensure there are no more than 50% of buckets occupied with any elements. However, that also means that you will need a bigger hash table and waste memory from unused buckets. You can use the following table to estimate a good approximate bucket power to start with. If you can tolerate the lookup performance and memory usage is important, you can go down by one factor in your bucket power."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Max number of items in millions"),(0,o.kt)("th",{parentName:"tr",align:null},"Bucket power"),(0,o.kt)("th",{parentName:"tr",align:null},"Memory overhead"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tests"),(0,o.kt)("td",{parentName:"tr",align:null},"20"),(0,o.kt)("td",{parentName:"tr",align:null},"4 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"<32"),(0,o.kt)("td",{parentName:"tr",align:null},"26"),(0,o.kt)("td",{parentName:"tr",align:null},"256 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"32 - 64"),(0,o.kt)("td",{parentName:"tr",align:null},"27"),(0,o.kt)("td",{parentName:"tr",align:null},"512 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"64 - 128"),(0,o.kt)("td",{parentName:"tr",align:null},"28"),(0,o.kt)("td",{parentName:"tr",align:null},"1 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"128 - 256"),(0,o.kt)("td",{parentName:"tr",align:null},"29"),(0,o.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"256 - 512"),(0,o.kt)("td",{parentName:"tr",align:null},"30"),(0,o.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"512 - 1024"),(0,o.kt)("td",{parentName:"tr",align:null},"31"),(0,o.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1024+"),(0,o.kt)("td",{parentName:"tr",align:null},"32"),(0,o.kt)("td",{parentName:"tr",align:null},"16 GB")))),(0,o.kt)("h2",{id:"detecting-a-bad-bucketspower"},"Detecting a bad bucketspower"),(0,o.kt)("p",null,"The following helps you find out whether your hash table size is misconfigured:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Note that the latency for ",(0,o.kt)("inlineCode",{parentName:"li"},"find()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"insertOrReplace()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"allocate()")," is too much."),(0,o.kt)("li",{parentName:"ol"},"Running strobelight or perf shows that most of the cycles are spent on a function in ",(0,o.kt)("inlineCode",{parentName:"li"},"ChainedHashtable"),"."),(0,o.kt)("li",{parentName:"ol"},"Look at Stats from a production instance. To figure out in production how bad your hash table chaining is, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"getAccessContainerDistributionStats()")," API to see the distribution of buckets by their occupancy.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessDistribution")," stats contains the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Stats describing the distribution of items (keys) in the hash table.\nstruct DistributionStats {\n  uint64_t numKeys{0};\n  uint64_t numBuckets{0};\n  std::map<unsigned int, uint64_t> itemDistribution{};\n};\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"itemDistribution")," map contains the distribution of buckets by their occupancy of items; i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"itemDistribution[0]")," contains the number of buckets with 0 elements, ",(0,o.kt)("inlineCode",{parentName:"p"},"itemDistribution[1]")," contains the buckets with one element, etc. A lower number of buckets with 0 will indicate that your cache will suffer from a bad bucket power."),(0,o.kt)("h2",{id:"lockspower"},"locksPower"),(0,o.kt)("p",null,"This parameter controls the concurrency of accessing the hash table from multiple threads. To optimize for concurrent lookups, cachelib shard's the hash table by locks across the keys. Most likely you do not have to configure this parameter from its default value of 10 unless you notice perf/strobelight samples showing SharedMutex stack in cachelib code path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Set cache to be sharded by 1 K locks for the hash table.\nCache::Config cfg;\ncfg.accessConfig.locksPower = 10;\n")))}h.isMDXComponent=!0}}]);