"use strict";(self.webpackChunksnxdocs=self.webpackChunksnxdocs||[]).push([[42],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(a),m=l,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||n;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var r=a(7462),l=(a(7294),a(3905));const n={sidebar_position:3},i="Get Playerdata",p={unversionedId:"snx-core/getplayerdata",id:"snx-core/getplayerdata",title:"Get Playerdata",description:"Get Player",source:"@site/docs/snx-core/getplayerdata.md",sourceDirName:"snx-core",slug:"/snx-core/getplayerdata",permalink:"/docs/snx-core/getplayerdata",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/snx-core/events"},next:{title:"Update Playerdata",permalink:"/docs/snx-core/updateplayerdata"}},c={},o=[{value:"Get Player",id:"get-player",level:3},{value:"Player",id:"player",level:2},{value:"Get player license",id:"get-player-license",level:3},{value:"Get player groups",id:"get-player-groups",level:3},{value:"Character",id:"character",level:2},{value:"Get character identifier",id:"get-character-identifier",level:3},{value:"Get character identity",id:"get-character-identity",level:3},{value:"Get character job",id:"get-character-job",level:3},{value:"Get character vitality",id:"get-character-vitality",level:3}],u={toc:o},s="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-playerdata"},"Get Playerdata"),(0,l.kt)("h3",{id:"get-player"},"Get Player"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"local player = exports['wc_core']:getPlayer(source)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"))),(0,l.kt)("h2",{id:"player"},"Player"),(0,l.kt)("h3",{id:"get-player-license"},"Get player license"),(0,l.kt)("p",null,"Player identifier / rockstar license"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"player.player_license\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ",(0,l.kt)("inlineCode",{parentName:"li"},"license:xxxxxx"))),(0,l.kt)("h3",{id:"get-player-groups"},"Get player groups"),(0,l.kt)("p",null,"Player groups"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"player.player_groups\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Player groups such as player, admin etc")))),(0,l.kt)("h2",{id:"character"},"Character"),(0,l.kt)("h3",{id:"get-character-identifier"},"Get character identifier"),(0,l.kt)("p",null,"Character identifier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"player.char_identifier\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Number as string")))),(0,l.kt)("h3",{id:"get-character-identity"},"Get character identity"),(0,l.kt)("p",null,"Character identifier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"player.char_identity\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"firstname: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"lastname: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"dateofbirth: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"sex: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"))))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"local firstname = player.char_identity.firstname\nlocal dateofbirth = player.char_identity.dateofbirth\n")),(0,l.kt)("h3",{id:"get-character-job"},"Get character job"),(0,l.kt)("p",null,"Character job"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"player.char_job\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"name: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"grade: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"duty: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"local name = player.char_job.name\nlocal duty = player.char_job.duty\n")),(0,l.kt)("h3",{id:"get-character-vitality"},"Get character vitality"),(0,l.kt)("p",null,"Character vitality"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"player.char_vitality\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"health: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"armor: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"hunger: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"thirst: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"local health = player.char_vitality.health\nlocal hunger = player.char_vitality.hunger\n")))}d.isMDXComponent=!0}}]);