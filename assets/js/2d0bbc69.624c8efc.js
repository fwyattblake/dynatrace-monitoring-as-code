"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[7758],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(d,".").concat(u)]||m[u]||l[u]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2,title:"Migrating deprecated configuration types"},i=void 0,s={unversionedId:"Guides/deprecated_migration",id:"version-1.8.3/Guides/deprecated_migration",title:"Migrating deprecated configuration types",description:"This guide shows you how to migrate deprecated configuration types.",source:"@site/versioned_docs/version-1.8.3/Guides/deprecated_migration.md",sourceDirName:"Guides",slug:"/Guides/deprecated_migration",permalink:"/dynatrace-monitoring-as-code/Guides/deprecated_migration",draft:!1,editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.8.3/Guides/deprecated_migration.md",tags:[],version:"1.8.3",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Migrating deprecated configuration types"},sidebar:"version-1.8.2/tutorialSidebar",previous:{title:"Add a new API",permalink:"/dynatrace-monitoring-as-code/Guides/add_new_api"},next:{title:"License and Bill of Materials",permalink:"/dynatrace-monitoring-as-code/Useful-links/bill-of-materials"}},d={},p=[{value:"<em>dashboard</em>, <em>request-naming-service</em>, <em>app-detection-rule</em>",id:"dashboard-request-naming-service-app-detection-rule",level:2}],c={toc:p};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide shows you how to migrate deprecated configuration types."),(0,r.kt)("h2",{id:"dashboard-request-naming-service-app-detection-rule"},(0,r.kt)("em",{parentName:"h2"},"dashboard"),", ",(0,r.kt)("em",{parentName:"h2"},"request-naming-service"),", ",(0,r.kt)("em",{parentName:"h2"},"app-detection-rule")),(0,r.kt)("p",null,"Initial ",(0,r.kt)("em",{parentName:"p"},"dashboard"),", ",(0,r.kt)("em",{parentName:"p"},"request-naming-service"),", ",(0,r.kt)("em",{parentName:"p"},"app-detection-rule")," configurations were all affected by conflicts between their DT entities name attributes."),(0,r.kt)("p",null,"Dashboards for example (same applies to ",(0,r.kt)("em",{parentName:"p"},"request-naming-service"),", ",(0,r.kt)("em",{parentName:"p"},"app-detection-rule"),") don't have a unique name within a Dynatrace environment. Unfortunately, Monaco depends on name uniqueness in order to identify resources. In the case of dashboards, this resulted in missed/invalid downloads and conflicts during deployments. The solution to this was generating custom UUIDs based on Monaco configuration metadata. As many advantages this brings, the one downside is that Monaco lost track of already deployed dashboards. A dashboard deployment would therefore result in a redeployment (and duplicating - isn't it ironic) of potentially dozens of dashboards in Dynatrace."),(0,r.kt)("p",null,"The following guide is referencing ",(0,r.kt)("em",{parentName:"p"},"dashboard")," configurations. However, the same applies to ",(0,r.kt)("em",{parentName:"p"},"request-naming-service")," and ",(0,r.kt)("em",{parentName:"p"},"app-detection-rule")," configurations."),(0,r.kt)("p",null,"1) Existing ",(0,r.kt)("em",{parentName:"p"},"dashboard")," configurations usually look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'*config.yaml*\n```\n---\nconfig:\n- DashboardConfigId: config.json\n\nDashboardConfigId:\n- name: Monaco Test\n- owner: Monaco User\n- isShared: true\n```\n\nWith *DashboardConfigId* as the user defined key that links configuration details and config.json. *name*, *owner* and *isShared* are custom properties which are subsituted in config.json:\n\n*config.json*\n```\n{\n  "dashboardMetadata": {\n    "dashboardFilter": null,\n    "name": "{{ .name }}",\n    "owner": "{{ .owner }}",\n    "shared": {{ .isShared }},\n    "tilesNameSize": null\n  },\n  "tiles": [\n    ...\n  ]\n}\n```\n\nIn a folder structure similar to this:\n```\nworkdir/\n  project/\n    app-detection-rule/\n      ...\n    dashboard/\n      config.json\n      config.yaml\n  environment.yaml\n```\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Recommended: Since the user defined key (",(0,r.kt)("em",{parentName:"p"},"DashboardConfigId")," in our example) is used to automatically generate DT entity ids in version 2, the easiest way to migrate existing configuration is to substitute it with the actual Dynatrace enitity id. Dashboard entity ids can be looked up either via API or UI:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"config.yaml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"---\nconfig:\n- <DT entity UUID>: config.json\n\n<DT entity UUID>:\n- name: Monaco Test\n- owner: Monaco User\n- isShared: true\n")),(0,r.kt)("p",{parentName:"li"},"The configuration is now compatible with version 2 of the dashboard configuration type."),(0,r.kt)("p",{parentName:"li"},"Alternatively: Once a configuration is deprecated and a new version provided, all subsequent downloads create configurations of the new version. Existing configuration is kept, but not updated anymore:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"workdir/\n  project/\n    app-detection-rule-v2/\n      ...\n    dashboard/\n      config.json\n      config.yaml\n    dashboard-v2/\n      config.json\n      config.yaml\n  environment.yaml\n")),(0,r.kt)("p",{parentName:"li"},"Although the newly downloaded ",(0,r.kt)("em",{parentName:"p"},"config.yaml")," includes valid configuration keys, other custom properties (e.g. owner, ...) are dropped:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"dashboard-v2/config.yaml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"---\nconfig:\n- <DT entity UUID>: config.json\n\n<DT entity UUID>:\n- name: Monaco Test\n")),(0,r.kt)("p",{parentName:"li"},"This method however allows us to identify configuration instances by their name property and copy/paste their existing DT entity ids instead of retrieving them by API or UI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In order for Monaco to recognize version 2 configurations as such, the incremental version has to be appended to the config folder, ",(0,r.kt)("em",{parentName:"p"},"dashboard")," becomes ",(0,r.kt)("em",{parentName:"p"},"dashboard-v2"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"workdir/\n  project/\n    app-detection-rule-v2/\n      ...\n    dashboard-v2/\n      config.json\n      config.yaml\n  environment.yaml\n")))))}l.isMDXComponent=!0}}]);