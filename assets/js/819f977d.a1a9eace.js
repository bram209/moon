"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1622],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6243:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7378),r=n(8944),o="tabItem_lLGn";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},637:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5773),r=n(7378),o=n(6457),i=n(784),l=n(9947),s=n(3457),u=n(8944),c="tabList_lSCs",p="tabItem_WhCL";function d(e){var t,n,o,d=e.lazy,m=e.block,f=e.defaultValue,h=e.values,g=e.groupId,k=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),x=w.tabGroupChoices,C=w.setTabGroupChoices,E=(0,r.useState)(N),j=E[0],O=E[1],T=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var I=x[g];null!=I&&I!==j&&v.some((function(e){return e.value===I}))&&O(I)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==j&&(Z(t),O(a),null!=g&&C(g,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7915:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7378),r=n(5268),o=n(9619);function i(e){var t=e.text;return a.createElement(o.Z,{text:t,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7378),r=n(1884),o=n(5773),i=n(808),l=n(7765),s=n(5268),u=n(8896),c=["name"],p={discord:l.omb,github:l.zhw,"new-project":s.g6h,"new-task":s.EQ8,project:s.pL1,"project-config":s.dhu,"project-config-global":s.YdP,"project-graph":s.Bkj,"run-task":s.sl_,task:s.diR,"task-config":s.o$R,token:s.BwA,toolchain:s.AlB,twitter:l.mdU,workspace:s.emM,"workspace-config":s.cRF};function d(e){var t=e.name,n=(0,i.Z)(e,c);return a.createElement(u.Z,(0,o.Z)({},n,{icon:p[t]}))}function m(e){var t=e.links;return a.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((function(e){return a.createElement(r.Z,{key:e.url,href:e.url,className:"focus:outline-none"},a.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},a.createElement("div",{className:"flex-shrink-0"},a.createElement(d,{size:"lg",name:e.icon})),a.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label)))})))}},9619:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7378),r=n(8944),o=n(8896),i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){var t=e.className,n=e.icon,l=e.text,s=e.variant;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?i[s]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(o.Z,{icon:n,className:"mr-1"}),l)}},4102:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(5773),r=n(808),o=(n(7378),n(5318)),i=(n(637),n(6243),n(7915)),l=n(9634),s=["components"],u={title:"Run a task"},c=void 0,p={unversionedId:"run-task",id:"run-task",title:"Run a task",description:"Even though we've created a task, it's not useful unless we run it, which is done",source:"@site/docs/run-task.mdx",sourceDirName:".",slug:"/run-task",permalink:"/docs/run-task",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/run-task.mdx",tags:[],version:"current",frontMatter:{title:"Run a task"},sidebar:"docs",previous:{title:"Create a task",permalink:"/docs/create-task"},next:{title:"Guides",permalink:"/docs/guides"}},d={},m=[{value:"Running dependents",id:"running-dependents",level:2},{value:"Running based on affected files only",id:"running-based-on-affected-files-only",level:2},{value:"Using upstream changes",id:"using-upstream-changes",level:3},{value:"Filtering based on change status",id:"filtering-based-on-change-status",level:3},{value:"Passing arguments to the underlying command",id:"passing-arguments-to-the-underlying-command",level:2},{value:"Next steps",id:"next-steps",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{text:"1 min",mdxType:"HeaderLabel"}),(0,o.kt)("p",null,"Even though we've ",(0,o.kt)("a",{parentName:"p",href:"./create-task"},"created a task"),", it's not useful unless we ",(0,o.kt)("em",{parentName:"p"},"run it"),", which is done\nwith the ",(0,o.kt)("a",{parentName:"p",href:"./commands/run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run <target>"))," command. This command requires a single argument, a\n",(0,o.kt)("a",{parentName:"p",href:"./concepts/target"},"primary target"),", which is the pairing of a project ID and task ID. In the\nexample below, our project is ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),", the task is ",(0,o.kt)("inlineCode",{parentName:"p"},"typecheck"),", and the target is ",(0,o.kt)("inlineCode",{parentName:"p"},"app:typecheck"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:typecheck\n")),(0,o.kt)("p",null,"When this command is ran, it will do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate a directed acyclic graph, known as the action graph."),(0,o.kt)("li",{parentName:"ul"},"Insert ",(0,o.kt)("a",{parentName:"li",href:"./config/project#deps"},(0,o.kt)("inlineCode",{parentName:"a"},"deps"))," as targets into the graph."),(0,o.kt)("li",{parentName:"ul"},"Insert the primary target into the graph."),(0,o.kt)("li",{parentName:"ul"},"Run all tasks in the graph in parallel and in topological order (the dependency chain)."),(0,o.kt)("li",{parentName:"ul"},"For each task, calculate ",(0,o.kt)("a",{parentName:"li",href:"./concepts/cache"},"hashes")," and either:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On cache hit, exit early and return the last run."),(0,o.kt)("li",{parentName:"ul"},"On cache miss, run the task and generate a new cache.")))),(0,o.kt)("h2",{id:"running-dependents"},"Running dependents"),(0,o.kt)("p",null,"moon will ",(0,o.kt)("em",{parentName:"p"},"always")," run upstream dependencies (",(0,o.kt)("a",{parentName:"p",href:"./config/project#deps"},(0,o.kt)("inlineCode",{parentName:"a"},"deps")),") before running the\nprimary target, as their outputs may be required for the primary target to function correctly."),(0,o.kt)("p",null,"However, if you're working on a project that is shared and consumed by other projects, you may want\nto verify that downstream dependents have not been indirectly broken by any changes. This can be\nachieved by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dependents")," option, which will run dependent targets (of the same task\nID) ",(0,o.kt)("em",{parentName:"p"},"after")," the primary target."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:typecheck --dependents\n")),(0,o.kt)("h2",{id:"running-based-on-affected-files-only"},"Running based on affected files only"),(0,o.kt)("p",null,"By default ",(0,o.kt)("a",{parentName:"p",href:"./commands/run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run"))," will ",(0,o.kt)("em",{parentName:"p"},"always")," run the target, regardless if files have\nactually changed. However, this is typically fine because of our\n",(0,o.kt)("a",{parentName:"p",href:"./concepts/cache"},"smart hashing & cache layer"),". With that being said, if you'd like to ",(0,o.kt)("em",{parentName:"p"},"only")," run a\ntarget if files have changed, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--affected")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:typecheck --affected\n")),(0,o.kt)("p",null,"Under the hood, we extract locally touched (created, modified, staged, etc) files from your\nconfigured ",(0,o.kt)("a",{parentName:"p",href:"./config/workspace#vcs"},"VCS"),", and exit early if no files intersect with the task's\n",(0,o.kt)("a",{parentName:"p",href:"./config/project#inputs"},"inputs"),"."),(0,o.kt)("h3",{id:"using-upstream-changes"},"Using upstream changes"),(0,o.kt)("p",null,"If you'd like to determine affected files based on upstream changes instead of local changes, pass\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--upstream")," flag. This will extract touched files by comparing the current ",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD")," against the\n",(0,o.kt)("a",{parentName:"p",href:"./config/workspace#defaultbranch"},(0,o.kt)("inlineCode",{parentName:"a"},"vcs.defaultBranch")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:typecheck --affected --upstream\n")),(0,o.kt)("h3",{id:"filtering-based-on-change-status"},"Filtering based on change status"),(0,o.kt)("p",null,"We can take this a step further by filtering down affected files based on a change status, using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--status")," option. This option accepts the following values: ",(0,o.kt)("inlineCode",{parentName:"p"},"added"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"deleted"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"modified"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"staged"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"unstaged"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"untracked"),". If not provided, the option defaults to all."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:typecheck --affected --status deleted\n")),(0,o.kt)("h2",{id:"passing-arguments-to-the-underlying-command"},"Passing arguments to the underlying command"),(0,o.kt)("p",null,"If you'd like to pass arbitrary arguments to the underlying task command, in addition to the already\ndefined ",(0,o.kt)("a",{parentName:"p",href:"./config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args")),", you can pass them after ",(0,o.kt)("inlineCode",{parentName:"p"},"--"),". These arguments are ",(0,o.kt)("em",{parentName:"p"},"appended\nas-is"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run app:typecheck -- --force\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," delimiter and any arguments ",(0,o.kt)("em",{parentName:"p"},"must")," be defined last on the command line.")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"By this point, you should have a fully integrated and functional moon! Jump into ",(0,o.kt)("a",{parentName:"p",href:"./guides"},"guides"),"\nfor advanced use cases or ",(0,o.kt)("a",{parentName:"p",href:"./concepts"},"concepts")," for a deeper understanding."),(0,o.kt)(l.Z,{links:[{icon:"discord",label:"Community help & support",url:"https://discord.gg/qCh9MEynv2"},{icon:"twitter",label:"Releases & updates",url:"https://twitter.com/tothemoonrepo"}],mdxType:"NextSteps"}))}h.isMDXComponent=!0}}]);