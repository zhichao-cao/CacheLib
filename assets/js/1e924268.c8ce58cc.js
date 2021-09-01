"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8614],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||l;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9382:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],r={title:"Installation",id:"installation"},s="Building CacheLib",p={unversionedId:"installation/installation",id:"installation/installation",isDocsHomePage:!1,title:"Installation",description:"Dependencies",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/installation",permalink:"/docs/installation/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation/installation.md",version:"current",frontMatter:{title:"Installation",id:"installation"},sidebar:"installationSidebar",next:{title:"Testing",permalink:"/docs/installation/testing"}},c=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Build Script",id:"build-script",children:[]},{value:"Build Process Details",id:"build-process-details",children:[]},{value:"Development Cycle",id:"development-cycle",children:[]},{value:"Updating to latest source code version",id:"updating-to-latest-source-code-version",children:[]},{value:"Downloading the source code without building",id:"downloading-the-source-code-without-building",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"building-cachelib"},"Building CacheLib"),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"CacheLib depends on multiple libraries and programs.\nSome are available as system packages, and others need\nto be build from source."),(0,l.kt)("p",null,"The primary dependecies are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a C++17 compiler (tested with GCC, CLANG)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cmake.org/"},"CMake")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/folly"},"folly")," - Facebook's Open Source library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/fbthrift"},"FBThrift")," - Facebook Thrift")),(0,l.kt)("p",null,"These dependencies further require multiple libraries:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/fizz"},"fizz")," - Facebook's TLS 1.3 implementation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/wangle"},"wangle")," - C++ Networking Library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/glog"},"glog")," - Google Log Library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gflags/gflags"},"gflags")," - Google Command-line flags Library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/googletest.git"},"googletest")," - Google Testing Framework"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fmtlib/fmt.git"},"fmt")," - open-source formatting library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Tessil/sparse-map.git"},"sparse-map")," - memory efficient hash map and hash set"),(0,l.kt)("li",{parentName:"ul"},"And many more libraries, commonly available as installable packages, e.g:\n",(0,l.kt)("inlineCode",{parentName:"li"},"boost"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"libevent"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"lz4"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"snappy"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"zlib"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ssl"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"libunwind"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"libsodium"))),(0,l.kt)("p",null,"Currently, some dependencies can be easily installed using the system's\npackage manager (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"dnf"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"yum"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"apt"),"), while others need to be rebuild\nfrom source code."),(0,l.kt)("h2",{id:"build-script"},"Build Script"),(0,l.kt)("p",null,"CacheLib provides a build script which prepares and installs all\ndependencies and prerequisites, then builds CacheLib.\nThe build script has been tested to work on CentOS 8,\nUbuntu 18.04, 20.04, and Debian 10, 11."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/facebook/CacheLib\ncd CacheLib\n./contrib/build.sh -d -j -v -T\n\n# The resulting library and executables:\n./opt/cachelib/bin/cachebench --help\n")),(0,l.kt)("p",null,"Re-running ",(0,l.kt)("inlineCode",{parentName:"p"},"./contrib/build.sh")," will update CacheLib and its dependencies\nto their latest versions and rebuild them."),(0,l.kt)("p",null,"The build script supports the following options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build.sh -h\nCacheLib dependencies builder\n\nusage: build.sh [-BdhijOStv]\n\noptions:\n  -B    skip build - just download packages and git source                                          \n  -d    build with DEBUG configuration\n        (default is RELEASE with debug information)\n  -h    This help screen\n  -j    build using all available CPUs ('make -j')\n        (default is to use single CPU)\n  -O    skip OS package installation (apt/yum/dnf)\n  -S    skip git-clone/git-pull step\n  -t    build tests\n        (default is to skip tests if supported by the package)\n  -T    build only CacheLib tests\n  -v    verbose build\n")),(0,l.kt)("h2",{id:"build-process-details"},"Build Process Details"),(0,l.kt)("p",null,"The build process involves the following steps.\nThese steps can be run manually for troubleshooting and/or\nadapting the build to a new system. The wrapper script ",(0,l.kt)("inlineCode",{parentName:"p"},"./contrib/build.sh"),"\nperforms them one by one:"),(0,l.kt)("h4",{id:"step-1---system-packages"},"Step 1 - System packages"),(0,l.kt)("p",null,"Installs the suitable tools and packages for the operating\nsystem flavor and version (e.g. Debian 10).\nThis step requires ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo"),", and uses one of the following scripts:\n",(0,l.kt)("inlineCode",{parentName:"p"},"contrib/prerequisites-centos8.sh"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"contrib/prerequisites-debian10.sh"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"contrib/prerequisites-ubuntu18.sh"),"."),(0,l.kt)("p",null,"For Debian/Ubuntu it is a simple matter of running ",(0,l.kt)("inlineCode",{parentName:"p"},"apt-get")," with\na known list of packages. For CentOS, the script first adds\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"Power Tools")," repository (required for some of the packages)."),(0,l.kt)("p",null,"It is safe to re-run these scripts - if the required packages are\nalready installed, the script will terminate quickly."),(0,l.kt)("h4",{id:"step-2---update-git-submodules"},"Step 2 - Update Git-Submodules"),(0,l.kt)("p",null,"The CacheLib project includes several library as git-submodules\n(folly,fbthrift,wangle,fizz).\nDue to the way internal facebook projects are\nconverted to git and exported to github, the updating process\nis slightly more complicated than a simple ",(0,l.kt)("inlineCode",{parentName:"p"},"git submodule update"),"."),(0,l.kt)("p",null,"The script ",(0,l.kt)("inlineCode",{parentName:"p"},"./contrib/update-submodules.sh")," performs the required steps\nto synchronize the required git revisions."),(0,l.kt)("p",null,"It is safe to re-run the ",(0,l.kt)("inlineCode",{parentName:"p"},"update-submodules.sh")," script - it will simply\npull the latest changes (if any)."),(0,l.kt)("h4",{id:"step-3---build-libraries-from-source-code"},"Step 3 - Build libraries from source code"),(0,l.kt)("p",null,"Downloads the latest source code version of the following libraries,\nbuilds and installs them (using ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo"),"):\n",(0,l.kt)("inlineCode",{parentName:"p"},"googleflags"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"googlelog"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sparsemap"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fmt"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"folly"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fizz"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"wangle"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fbthrift"),"."),(0,l.kt)("p",null,"In some cases the operating system has a pre-packaged version of some\nof these libraries, but they are too old. In these cases the library\nis rebuilt from source code."),(0,l.kt)("p",null,"Building each library is performed using the following script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build-package.sh -h\nCacheLib dependencies builder\n\nusage: build-package.sh [-BdhijStv] NAME\n\noptions:\n  -B    skip build step\n        (default is to build with cmake & make)\n  -d    build with DEBUG configuration\n        (default is RELEASE with debug information)\n  -h    This help screen\n  -i    install after build using 'sudo make install'\n        (default is to build but not install)\n  -j    build using all available CPUs ('make -j')\n        (default is to use single CPU)\n  -S    skip git-clone/git-pull step\n        (default is to get the latest source)\n  -t    build tests\n        (default is to skip tests if supported by the package)\n  -v    verbose build\n\nNAME: the dependency to build supported values are:\n  googlelog, googleflags, googletest,\n  fmt, sparsemap,\n  folly, fizz, wangle, fbthrift,\n  cachelib\n")),(0,l.kt)("p",null,"All the required packages use ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake"),", and will be built in a new subdirectory\nnamed ",(0,l.kt)("inlineCode",{parentName:"p"},"build-[PACKAGE]")," (e.g. running ",(0,l.kt)("inlineCode",{parentName:"p"},"./contrib/build-package.sh fmt")," will\ncreate the ",(0,l.kt)("inlineCode",{parentName:"p"},"build-fmt")," subdirectory)."),(0,l.kt)("p",null,"Example:\nRunning the command ",(0,l.kt)("inlineCode",{parentName:"p"},"./contrib/build-package.sh -i -j -d -t fmt"),"\nis equivalent to the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd cachelib/external\ngit clone https://github.com/fmtlib/fmt.git\ncd ../..\nmkdir build-fmt\ncmake ../cachelib/external/fmt -DCMAKE_BUILD_TYPE=Debug\nmake -j\nsudo make install\n")),(0,l.kt)("h4",{id:"step-4---build-cachelib"},"Step 4 - Build CacheLib"),(0,l.kt)("p",null,"Building CacheLib is identical to installing packages (above),"),(0,l.kt)("p",null,"To build cachelib, run:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./contrib/build-package.sh -j -i -d -v -t cachelib"),"."),(0,l.kt)("p",null,"The installed files will be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Header files in ",(0,l.kt)("inlineCode",{parentName:"li"},"./opt/cachelib/include")),(0,l.kt)("li",{parentName:"ul"},"Library files in ",(0,l.kt)("inlineCode",{parentName:"li"},"./opt/cachelib/lib")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"./opt/cachelib/lib64")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cachebench")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"cachebench-util")," executables in ",(0,l.kt)("inlineCode",{parentName:"li"},"./opt/cachelib/bin"))),(0,l.kt)("h2",{id:"development-cycle"},"Development Cycle"),(0,l.kt)("p",null,"When working on CacheLib itself (e.g. tweaking caching algorithms or adding\nfeatures to ",(0,l.kt)("inlineCode",{parentName:"p"},"cachebench"),"), the following is recommended:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"./contrib/build.sh -j -d -v")," to install dependencies and\nbuild ",(0,l.kt)("inlineCode",{parentName:"li"},"cachelib"),"."),(0,l.kt)("li",{parentName:"ul"},"The resulting cachelib files will be stored in the ",(0,l.kt)("inlineCode",{parentName:"li"},"build-cachelib"),"\nsubdirectory."),(0,l.kt)("li",{parentName:"ul"},"Modify source code files in ",(0,l.kt)("inlineCode",{parentName:"li"},"./cachelib/")),(0,l.kt)("li",{parentName:"ul"},"Rebuild the modified files in ",(0,l.kt)("inlineCode",{parentName:"li"},"build-cachelib")," using ",(0,l.kt)("inlineCode",{parentName:"li"},"make"),".")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build.sh -d -j -v\n[... after build is complete ...]\n\n$ cd build-cachelib\n$ make\n[... cachelib and cachebench are rebuild ...]\n\n$ touch touch ../cachelib/cachebench/main.cpp\n$ make\n[... cachelib and cachebench are rebuild ...]\n")),(0,l.kt)("h2",{id:"updating-to-latest-source-code-version"},"Updating to latest source code version"),(0,l.kt)("p",null,"Facebook internal development cycle tightly couples\ncachelib with its dependencies (e.g. folly, fbthrifth, wangle, fizz),\nand all are frequently updated.\nParticularly, the folly library does not provide stable API,\nand using mismatched version can cause compilation errors."),(0,l.kt)("p",null,"Therefore, it is recommended to ",(0,l.kt)("em",{parentName:"p"},"always")," update (and rebuild)\nall dependencies before updating cachelib. That is,\na simple ",(0,l.kt)("inlineCode",{parentName:"p"},"git pull")," for cachelib alone can often lead to failed builds."),(0,l.kt)("p",null,"Running the ",(0,l.kt)("inlineCode",{parentName:"p"},"contrib/build.sh")," script takes care of first updating\nand rebuilding all dependencies, and then updating and rebuilding cachelib.\nUse the ",(0,l.kt)("inlineCode",{parentName:"p"},"-O")," option to skip the installation of system packages, e.g.\n",(0,l.kt)("inlineCode",{parentName:"p"},"./contrib/build.sh -d -v -j -O"),"."),(0,l.kt)("p",null,"As all dependencies use ",(0,l.kt)("inlineCode",{parentName:"p"},"git/cmake/make"),", rebuilding the same code (if there\nwere no updates) will be very fast."),(0,l.kt)("h2",{id:"downloading-the-source-code-without-building"},"Downloading the source code without building"),(0,l.kt)("p",null,"The default ",(0,l.kt)("inlineCode",{parentName:"p"},"build.sh")," wrapper script requires internet connection\n(for package installation and github updates)."),(0,l.kt)("p",null,"For special build circumstances where internet connection is not available,\nit is possible to download the source code on one machine, then copy it\nand build it on another."),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"build-package.sh -B")," option to only download the latest source code\n(using ",(0,l.kt)("inlineCode",{parentName:"p"},"git clone/git pull"),") without building."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./contrib/build-package.sh -B googlelog\n./contrib/build-package.sh -B googleflags\n./contrib/build-package.sh -B googletest\n./contrib/build-package.sh -B fmt\n./contrib/build-package.sh -B sparsemap\n./contrib/build-package.sh -B folly\n./contrib/build-package.sh -B fizz\n./contrib/build-package.sh -B wangle\n./contrib/build-package.sh -B fbthrift\n./contrib/build-package.sh -B cachelib\n")),(0,l.kt)("p",null,"Will download the latest source code of all libraries under\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"./cachelib/external")," subdirectory."),(0,l.kt)("p",null,"Then the entire build tree can be copied to another machine\n(one that does not have internet connectivity).\nCacheLib can then be build be adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"-S")," option to ",(0,l.kt)("inlineCode",{parentName:"p"},"build.sh"),"\n(meaning: skip the ",(0,l.kt)("inlineCode",{parentName:"p"},"git clone/git pull")," step):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build.sh -d -j -v -S\n")))}u.isMDXComponent=!0}}]);