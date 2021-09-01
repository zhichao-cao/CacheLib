"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2715],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Github Repository Synchronization (after cleanup)",id:"github-squash-sync"},s=void 0,l={unversionedId:"installation/github-squash-sync",id:"installation/github-squash-sync",isDocsHomePage:!1,title:"Github Repository Synchronization (after cleanup)",description:"In preparation of making CacheLib public, the CacheLib github repository",source:"@site/docs/installation/github-squash-sync.md",sourceDirName:"installation",slug:"/installation/github-squash-sync",permalink:"/docs/installation/github-squash-sync",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation/github-squash-sync.md",version:"current",frontMatter:{title:"Github Repository Synchronization (after cleanup)",id:"github-squash-sync"},sidebar:"installationSidebar",previous:{title:"Testing",permalink:"/docs/installation/testing"}},p=[{value:"Advanced topic: updated a forked repository on github",id:"advanced-topic-updated-a-forked-repository-on-github",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In preparation of making ",(0,a.kt)("strong",{parentName:"p"},"CacheLib")," public, the CacheLib github repository\nhas a new branch ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," (instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"), and all previous commits\nhave been squashed (merged into one)."),(0,a.kt)("p",null,"If you cloned/forked the ",(0,a.kt)("strong",{parentName:"p"},"CacheLib")," repository ",(0,a.kt)("strong",{parentName:"p"},"after September 2021"),", there\nis no need to run the commands below - your repository is up-to-date."),(0,a.kt)("p",null,"When trying to update an existing cloned CacheLib repository (e.g. on\nyour local work computer), The following error might appear:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git pull\nfatal: refusing to merge unrelated histories\n")),(0,a.kt)("p",null,"Use the following instructions to synchronize your local repository with CacheLib's.\nNOTES about the commands;"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"This assumes you have no local changes"),(0,a.kt)("li",{parentName:"ol"},'This assumes the "origin" remote is ',(0,a.kt)("inlineCode",{parentName:"li"},"git@github.com:facebook/CacheLib.git")," .")),(0,a.kt)("p",null,"First, fetch all the remote updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git fetch --all\nFetching origin\nremote: Enumerating objects: 174, done.\nremote: Counting objects: 100% (174/174), done.\nremote: Compressing objects: 100% (75/75), done.\nremote: Total 174 (delta 54), reused 174 (delta 54), pack-reused 0\nReceiving objects: 100% (174/174), 398.69 KiB | 1.28 MiB/s, done.\nResolving deltas: 100% (54/54), completed with 5 local objects.\nFrom github.com:facebook/CacheLib\n+ eb0a8b64...45eb4ad3 main       -> origin/main  (forced update) #### This indicates the branch was squashed\nd12f6273..3d6e81b8  gh-pages   -> origin/gh-pages\n")),(0,a.kt)("p",null,"Second, checkout the updated remote 'main' branch, and overwrite any\nexisting local 'main' branches (",(0,a.kt)("inlineCode",{parentName:"p"},"-B"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git checkout -B main -t origin/main\nBranch 'main' set up to track remote branch 'main' from 'origin'.\nReset branch 'main'\n")),(0,a.kt)("p",null,"Your branch is up to date with 'origin/main'."),(0,a.kt)("p",null,"Third, verify you have the updated branch, with only few commits (as\nof Aug 13, 2021):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git log --pretty=oneline\n45eb4ad36b2b94b223319ee11326c3bb9a560bf5 (HEAD -> main, origin/main) Updating submodules\na0cf7942cae3f83e60fe3bca5b2ffc87fb1572fe Initial commit\n")),(0,a.kt)("h2",{id:"advanced-topic-updated-a-forked-repository-on-github"},"Advanced topic: updated a forked repository on github"),(0,a.kt)("p",null,"If you created a forked repository on Github, it is very likely that\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"origin")," git remote points to YOUR forked repository, not to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"facebook/CacheLib")," repository."),(0,a.kt)("p",null,"In such cases it is customary to locally add a second git-remote\nsource and name it ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream"),", so that ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"origin")," gets\nyour private changes (and similarly, ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"origin")," uploads\nyou changes to GitHub), and ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," gets the latest\nchanges from the CacheLib team."),(0,a.kt)("p",null,"First step, check which remote sources are defined in your local repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git remote show\norigin\n\n$ git remote show origin | grep Fetch\nFetch URL: git@github.com:agordon/CacheLib.git\n")),(0,a.kt)("p",null,"In the above example, there is only one remote source (named ",(0,a.kt)("inlineCode",{parentName:"p"},"origin"),")\nand it points to a personal (",(0,a.kt)("em",{parentName:"p"},"agordon"),"'s) forked repository."),(0,a.kt)("p",null,"To add a second remote source, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git remote add upstream git@github.com:facebook/CacheLib.git\n$ git remote show\norigin\nupstream\n")),(0,a.kt)("p",null,"Synchronize all remote sources:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git fetch --all\nFetching origin\nFetching upstream\nFrom github.com:facebook/CacheLib\n* [new branch]        gh-pages                         -> upstream/gh-pages\n* [new branch]        main                             -> upstream/main\n")),(0,a.kt)("p",null,"Checkout the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch from the upstream source, overwriting the\nexisting local ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch (if it exists):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git checkout -B main upstream/main\nReset branch 'main'\nYour branch is up to date with 'upstream/main'.\n")),(0,a.kt)("p",null,"Now update (",(0,a.kt)("inlineCode",{parentName:"p"},"git push --force"),') your github fork, with the updated "main" branch content:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git push --force --set-upstream origin main:main\nTotal 0 (delta 0), reused 0 (delta 0)\nremote:\nremote: Create a pull request for 'main' on GitHub by visiting:\nremote:      https://github.com/agordon/CacheLib/pull/new/main\nremote:\nTo github.com:agordon/CacheLib.git\n* [new branch]        main -> main\n")),(0,a.kt)("p",null,'You can now delete the old "master" branch from your forked repository.'),(0,a.kt)("p",null,"The following command deletes a remote branch. If it fails with the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git push --delete origin master\nTo github.com:agordon/CacheLib.git\n! [remote rejected]   master (refusing to delete the current branch: refs/heads/master)\nerror: failed to push some refs to 'git@github.com:agordon/CacheLib.git'\n")),(0,a.kt)("p",null,'This means that on your local github forked repository, you did not\nyet change the default branch from "master" to "main" (as the CacheLib\nrepository did on August 12, 2021).'),(0,a.kt)("p",null,'Go to the "settings" page of your forked CacheLib github repository\n(i.e. ',(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/USERNAME/CacheLib/settings/branches"),'),\nselect "branches" (from the left-side menu bar), then change the\n"Default Branch" settings from "master" to "main".'),(0,a.kt)("p",null,"Now try the command again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git push --delete myfork master\nTo github.com:agordon/CacheLib.git\n- [deleted]           master\n")),(0,a.kt)("p",null,'You can also delete the local "master" branch, as it is no longer needed:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git branch -D master\nDeleted branch master (was a19b4c0a).\n")))}m.isMDXComponent=!0}}]);