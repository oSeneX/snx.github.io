"use strict";(self.webpackChunksnxdocs=self.webpackChunksnxdocs||[]).push([[302],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>h});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=o(l),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return l?a.createElement(h,i(i({ref:t},s),{},{components:l})):a.createElement(h,i({ref:t},s))}));function h(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var o=2;o<n;o++)i[o]=l[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},7341:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var a=l(7462),r=(l(7294),l(3905));const n={sidebar_position:5},i="WestCoast Vehicle",c={unversionedId:"vehicle",id:"vehicle",title:"WestCoast Vehicle",description:"Server",source:"@site/docs/vehicle.md",sourceDirName:".",slug:"/vehicle",permalink:"/docs/vehicle",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"WestCoast Appearance",permalink:"/docs/appearance"},next:{title:"WestCoast MDW",permalink:"/docs/mdw"}},p={},o=[{value:"Server",id:"server",level:3},{value:"Get Player Vehicles",id:"get-player-vehicles",level:3},{value:"Get Vehicle Data",id:"get-vehicle-data",level:3},{value:"Is Vehicle Owned",id:"is-vehicle-owned",level:3},{value:"Set Vehicle Stored",id:"set-vehicle-stored",level:3},{value:"Update Vehicle Properties",id:"update-vehicle-properties",level:3},{value:"Update Vehicles Table",id:"update-vehicles-table",level:3}],s={toc:o},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"westcoast-vehicle"},"WestCoast Vehicle"),(0,r.kt)("h3",{id:"server"},"Server"),(0,r.kt)("h3",{id:"get-player-vehicles"},"Get Player Vehicles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local playerVehicles = exports['wc_vehicle']:getPlayerVehicles(key, onlyPlate)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"key: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"table")),(0,r.kt)("li",{parentName:"ul"},"onlyPlate: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local playerVehicles = exports['wc_vehicle']:getPlayerVehicles(soucre, true)\nlocal playerVehicles = exports['wc_vehicle']:getPlayerVehicles(char_identifier, true)\n")),(0,r.kt)("h3",{id:"get-vehicle-data"},"Get Vehicle Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local playerVehicles = exports['wc_vehicle']:getVehicleData(value)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"table"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local vehicles = exports['wc_vehicle']:getVehicleData(vehiclePlate)\nlocal vehicles = exports['wc_vehicle']:getVehicleData({plate1, plate2})\n")),(0,r.kt)("h3",{id:"is-vehicle-owned"},"Is Vehicle Owned"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local isOwned = exports['wc_vehicle']:isVehicleOwned(source, plate)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"plate: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))))),(0,r.kt)("h3",{id:"set-vehicle-stored"},"Set Vehicle Stored"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local success = exports['wc_vehicle']:setVehicleStored(source, plate, location)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"plate: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"location: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local success = exports['wc_vehicle']:setVehicleStored(source, '54VFE5A', 'impound')\n")),(0,r.kt)("h3",{id:"update-vehicle-properties"},"Update Vehicle Properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local success = exports['wc_vehicle']:updateVehicleProperties(source, plate, properties)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"plate: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"properties: ",(0,r.kt)("inlineCode",{parentName:"li"},"table"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local success = exports['wc_vehicle']:updateVehicleProperties(source, '54VFE5A', properties)\n")),(0,r.kt)("h3",{id:"update-vehicles-table"},"Update Vehicles Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local success = exports['wc_vehicle']:updateVehiclesTable(identifier, plate, model, properties)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"identifier: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"plate: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"model: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"properties: ",(0,r.kt)("inlineCode",{parentName:"li"},"table"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"local success = exports['wc_vehicle']:updateVehiclesTable(char_identifier, '54VFE5A', 'adder', properties)\n")))}d.isMDXComponent=!0}}]);