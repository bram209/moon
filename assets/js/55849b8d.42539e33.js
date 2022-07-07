"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1168],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9538:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=["components"],l={title:"query"},s=void 0,u={unversionedId:"commands/query",id:"commands/query",title:"query",description:"The query command can be used to query information about moon, its projects, their tasks, the",source:"@site/docs/commands/query.mdx",sourceDirName:"commands",slug:"/commands/query",permalink:"/docs/commands/query",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/query.mdx",tags:[],version:"current",frontMatter:{title:"query"},sidebar:"docs",previous:{title:"project-graph",permalink:"/docs/commands/project-graph"},next:{title:"run",permalink:"/docs/commands/run"}},c={},p=[{value:"Projects",id:"projects",level:2},{value:"Options",id:"options",level:3},{value:"Touched files",id:"touched-files",level:2},{value:"Options",id:"options-1",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," command can be used to query information about moon, its projects, their tasks, the\nenvironment, the pipeline, and many other aspects of the workspace."),(0,i.kt)("p",null,"Querying is divided into multiple sub-commands, each serving a specific purpose. Each sub-command\nwill return JSON, allowing for easy parsing and readability."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This command is a work in progress, and will continue to evolve over time!"))),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"query projects")," sub-command to query about all projects in the project graph. The project\nlist can be filtered by passing ",(0,i.kt)("a",{parentName:"p",href:"#options"},"options"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Find all projects\n$ moon query projects\n\n# Find all projects with an id that matches \"react\"\n$ moon query projects --id react\n\n# Find all projects with a `lint` or `build` task\n$ moon query projects --tasks 'lint|build'\n")),(0,i.kt)("p",null,"This will return a list of project objects with the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    projects: Project[],\n    options: QueryOptions,\n}\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--id <regex>")," - Filter projects that match this ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--source <regex>")," - Filter projects that match this source path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--tasks <regex>")," - Filter projects that have the following tasks.")),(0,i.kt)("h2",{id:"touched-files"},"Touched files"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"query touched-files")," sub-command to query for a list of touched files (added, modified,\ndeleted, etc) using the current VCS state. These are the same queries that ",(0,i.kt)("a",{parentName:"p",href:"./ci"},(0,i.kt)("inlineCode",{parentName:"a"},"moon ci"))," and\n",(0,i.kt)("a",{parentName:"p",href:"./run"},(0,i.kt)("inlineCode",{parentName:"a"},"moon run"))," use under the hood."),(0,i.kt)("p",null,"Touches files are determined using the following logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"--defaultBranch")," is provided, and the current branch is the\n",(0,i.kt)("a",{parentName:"li",href:"../config/workspace#defaultbranch"},(0,i.kt)("inlineCode",{parentName:"a"},"vcs.defaultBranch")),", then compare against the previous\nrevision of the default branch (",(0,i.kt)("inlineCode",{parentName:"li"},"HEAD~1"),"). This is what ",(0,i.kt)("a",{parentName:"li",href:"../guides/ci"},"continuous integration"),"\nuses."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"--local")," is provided, touched files are based on your local index only (",(0,i.kt)("inlineCode",{parentName:"li"},"git status"),")."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, then compare the defined base (",(0,i.kt)("inlineCode",{parentName:"li"},"--base"),") against head (",(0,i.kt)("inlineCode",{parentName:"li"},"--head"),").")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Return all files\n$ moon query touched-files\n\n# Return deleted files\n$ moon query touched-files --status deleted\n\n# Return all files between 2 revisions\n$ moon query touched-files --base <branch> --head <commit>\n")),(0,i.kt)("p",null,"This will return a list of absolute file paths with the following stsructure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    files: string[],\n    options: QueryOptions,\n}\n")),(0,i.kt)("h3",{id:"options-1"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--defaultBranch")," - When on the default branch, compare against the previous revision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--base <rev>")," - Base branch, commit, or revision to compare against. Defaults to\n",(0,i.kt)("a",{parentName:"li",href:"../config/workspace#defaultbranch"},(0,i.kt)("inlineCode",{parentName:"a"},"vcs.defaultBranch")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--head <rev>")," - Current branch, commit, or revision to compare with. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"HEAD"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--local")," - Gather files from you local state instead of upstream."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--status <type>")," - Filter files based on a touched status.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Types: ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," (default), ",(0,i.kt)("inlineCode",{parentName:"li"},"added"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deleted"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"modified"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"staged"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"unstaged"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"untracked"))))))}m.isMDXComponent=!0}}]);