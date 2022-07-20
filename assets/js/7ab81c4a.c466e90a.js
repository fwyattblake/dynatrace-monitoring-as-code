"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[7964],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3867:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"intro",sidebar_position:1,title:"Monaco Documentation",slug:"/"},i={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Welcome to the Monaco docs",description:'Monaco is a "monitoring as code" tool that allows you to create, update and version your monitoring configurations in Dynatrace efficiently and at scale.',source:"@site/docs/documentation.md",sourceDirName:".",slug:"/",permalink:"/dynatrace-monitoring-as-code/next/",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/documentation.md",version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,title:"Monaco Documentation",slug:"/"},sidebar:"tutorialSidebar",next:{title:"What is Monaco?",permalink:"/dynatrace-monitoring-as-code/next/Get-started/intro"}},l=[],c={toc:l};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Monaco is a "monitoring as code" tool that allows you to create, update and version your monitoring configurations in Dynatrace efficiently and at scale.'),(0,a.kt)("div",{class:"container-fluid"},(0,a.kt)("p",null),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col-md-6 col sm-12"},(0,a.kt)("p",null),(0,a.kt)("h3",{id:"get-started"},(0,a.kt)("a",{name:"get-started",class:"anchor",href:"#get-started"},"\xbb"),"Get started"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Get-started/intro"},"What is Monaco?"))),(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Get-started/installation"},"Install Monaco"))),(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./configuration/deploy_configuration"},"Deploy configuration"))))),(0,a.kt)("div",{class:"col-md-6 col sm-12"},(0,a.kt)("p",null),(0,a.kt)("h3",{id:"get-started"},(0,a.kt)("a",{name:"get-started",class:"anchor",href:"#get-started"},"\xbb"),"Guides"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./configuration/delete_config"},"Delete configuration"))),(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Guides/add_new_api"},"Add a new API"))),(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./commands/experimental-new-cli"},"Activate the new CLI"))))),(0,a.kt)("div",{class:"col-md-6 col sm-12"},(0,a.kt)("p",null),(0,a.kt)("h3",{id:"get-started"},(0,a.kt)("a",{name:"get-started",class:"anchor",href:"#get-started"},"\xbb"),"Quick links"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases"},"What's new"))),(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Useful-links/bill-of-materials"},"License and bill of materials"),"  ")))))))}s.isMDXComponent=!0}}]);