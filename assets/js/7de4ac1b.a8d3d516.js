"use strict";(self.webpackChunksnxdocs=self.webpackChunksnxdocs||[]).push([[410],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,f=u["".concat(i,".").concat(y)]||u[y]||d[y]||c;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=y;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6149:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const c={sidebar_position:2},o="Events",l={unversionedId:"wc-core/events",id:"wc-core/events",title:"Events",description:"wc_core:playerReady (client/server)",source:"@site/docs/wc-core/events.md",sourceDirName:"wc-core",slug:"/wc-core/events",permalink:"/docs/wc-core/events",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"WestCoast Core",permalink:"/docs/category/westcoast-core"},next:{title:"Functions",permalink:"/docs/wc-core/functions"}},i={},s=[{value:"wc_core:playerReady (client/server)",id:"wc_coreplayerready-clientserver",level:3},{value:"wc_core:playerData (client)",id:"wc_coreplayerdata-client",level:3}],p={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h3",{id:"wc_coreplayerready-clientserver"},"wc_core:playerReady (client/server)"),(0,a.kt)("p",null,"Triggered after player and it's character is fully loaded and playable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"AddEventHandler('wc_core:playerReady', function(source) \n    --run code\nend)\n")),(0,a.kt)("h3",{id:"wc_coreplayerdata-client"},"wc_core:playerData (client)"),(0,a.kt)("p",null,"Triggered on every player data change."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"AddEventHandler('wc_core:playerData', function(playerData) \n    --run code\nend)\n")))}d.isMDXComponent=!0}}]);