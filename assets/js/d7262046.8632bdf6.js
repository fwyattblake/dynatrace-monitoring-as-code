"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[9594],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,g=m["".concat(l,".").concat(p)]||m[p]||s[p]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5201:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1},i={unversionedId:"commands/validating-configuration",id:"commands/validating-configuration",isDocsHomePage:!1,title:"Validating configuration",description:"Monaco validates configuration files in a directory by performing a dry run.",source:"@site/docs/commands/validating-configuration.md",sourceDirName:"commands",slug:"/commands/validating-configuration",permalink:"/dynatrace-monitoring-as-code/next/commands/validating-configuration",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/commands/validating-configuration.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install Monaco",permalink:"/dynatrace-monitoring-as-code/next/Get-started/installation"},next:{title:"Deploy projects",permalink:"/dynatrace-monitoring-as-code/next/commands/deploying-projects"}},c=[{value:"Validating your configuration using the new CLI",id:"validating-your-configuration-using-the-new-cli",children:[]}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Monaco validates configuration files in a directory by performing a dry run.\nIt will check whether your Dynatrace config files are in a valid JSON format and\nwhether your tool configuration YAML files can be parsed and used."),(0,o.kt)("p",null,"To validate the configuration, execute a ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco --dry-run")," on a YAML file as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Validating your configuration"',title:'"Validating',your:!0,'configuration"':!0},"monaco --dry-run --environments=environments.yaml\n")),(0,o.kt)("h2",{id:"validating-your-configuration-using-the-new-cli"},"Validating your configuration using the new CLI"),(0,o.kt)("p",null,"To validate your configuration ",(0,o.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/next/commands/experimental-new-cli"},"using the new CLI"),", add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag to the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Validating your configuration using the new CLI"',title:'"Validating',your:!0,configuration:!0,using:!0,the:!0,new:!0,'CLI"':!0},"NEW_CLI=1 monaco deploy --dry-run --environments=environments.yaml\n")))}u.isMDXComponent=!0}}]);