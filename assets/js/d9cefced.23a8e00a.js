"use strict";(self.webpackChunksnxdocs=self.webpackChunksnxdocs||[]).push([[964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(a),y=n,m=d["".concat(p,".").concat(y)]||d[y]||s[y]||l;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},3165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:4},o="Update Playerdata",c={unversionedId:"wc-core/playerdata/updateplayerdata",id:"wc-core/playerdata/updateplayerdata",title:"Update Playerdata",description:"Update player / character data",source:"@site/docs/wc-core/playerdata/updateplayerdata.md",sourceDirName:"wc-core/playerdata",slug:"/wc-core/playerdata/updateplayerdata",permalink:"/docs/wc-core/playerdata/updateplayerdata",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get Playerdata",permalink:"/docs/wc-core/playerdata/getplayerdata"},next:{title:"Commands",permalink:"/docs/wc-core/commands"}},p={},i=[{value:"Update player / character data",id:"update-player--character-data",level:3}],u={toc:i},d="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"update-playerdata"},"Update Playerdata"),(0,n.kt)("h3",{id:"update-player--character-data"},"Update player / character data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"local success = exports['wc_core']:updatePlayerData(source, value)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"source: ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},"value: ",(0,n.kt)("inlineCode",{parentName:"li"},"table")),(0,n.kt)("li",{parentName:"ul"},"return: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"is player data updated successfully?")))),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"local player = exports['wc_core']:getPlayer(source)\nplayer.char_job.name = 'newjob'\nplayer.char_job.grade = 2\n\nlocal success = exports['wc_core']:updatePlayerData(source, player)\nif not success then return end\n")))}s.isMDXComponent=!0}}]);