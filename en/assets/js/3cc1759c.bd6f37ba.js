"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[381],{19940:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var t=n(74848),l=n(28453);const a={id:"mysql-replace-function",slug:"/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",date:new Date("2021-01-07T00:00:00.000Z"),tags:["mysql","database"],keywords:["mysql","database"]},c=void 0,r={id:"stack/database/mysql/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",description:"1\u3001\u524d\u8a00",source:"@site/docs/stack/database/mysql/Mysql\u66ff\u6362\u51fd\u6570replace.md",sourceDirName:"stack/database/mysql",slug:"/mysql-replace-function",permalink:"/en/docs/mysql-replace-function",draft:!1,unlisted:!1,tags:[{inline:!0,label:"mysql",permalink:"/en/docs/tags/mysql"},{inline:!0,label:"database",permalink:"/en/docs/tags/database"}],version:"current",frontMatter:{id:"mysql-replace-function",slug:"/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",date:"2021-01-07T00:00:00.000Z",tags:["mysql","database"],keywords:["mysql","database"]},sidebar:"stack",previous:{title:"MySql\u7b14\u8bb0",permalink:"/en/docs/database/mysql"},next:{title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",permalink:"/en/docs/mysql-like-optimization"}},i={},o=[{value:"1\u3001\u524d\u8a00",id:"1\u524d\u8a00",level:2},{value:"2\u3001\u66ff\u6362\u51fd\u6570 replace()",id:"2\u66ff\u6362\u51fd\u6570-replace",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"1\u524d\u8a00",children:"1\u3001\u524d\u8a00"}),"\n",(0,t.jsx)(s.p,{children:"\u5f53\u521d\u8bbe\u8ba1\u9898\u5e93\u6570\u636e\u5e93\u65f6\uff0c\u6ca1\u8003\u8651\u5468\u5168\uff0c\u5b58\u5728\u591a\u9898\u76ee\uff0c\u9898\u76ee\u4e0d\u6807\u51c6\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u6837"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"\u66ff\u6362\u51fd\u6570",src:n(98170).A+"",width:"769",height:"527"})}),"\n",(0,t.jsx)(s.p,{children:"\u9898\u76ee\u524d\u9762\u7684\u3010\u5355\u9009\u9898\u3011\u3010\u5224\u65ad\u9898\u3011\u600e\u4e48\u80fd\u5fcd\uff0c\u4e8e\u662f\u5c31\u767e\u5ea6 mysql \u6587\u672c\u66ff\u6362 \u7b2c\u4e00\u7bc7\u6587\u7ae0\u5c31\u89e3\u51b3\u4e86\u6211\u7684\u95ee\u9898\uff0c\u4e8e\u662f\u6211\u4e5f\u987a\u624b\u8bb0\u5f55\u4e00\u4e0b\uff0c\u4ee5\u9632\u4e0b\u6b21\u4f7f\u7528"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["\u53c2\u8003\u94fe\u63a5 ",(0,t.jsx)(s.a,{href:"https://blog.csdn.net/qq_36663951/article/details/78791138",children:"mysql \u66ff\u6362\u51fd\u6570 replace()\u5b9e\u73b0 mysql \u66ff\u6362\u6307\u5b9a\u5b57\u6bb5\u4e2d\u7684\u5b57\u7b26\u4e32"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"2\u66ff\u6362\u51fd\u6570-replace",children:"2\u3001\u66ff\u6362\u51fd\u6570 replace()"}),"\n",(0,t.jsx)(s.p,{children:"\u6700\u5173\u952e\u7684\u4e5f\u5c31\u662f\u8fd9\u4e2a\u51fd\u6570\u4e86\uff0c\u5148\u770b\u770b\u6211\u7684 SQL \u8bed\u53e5\u662f\u600e\u4e48\u5199\u7684"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"UPDATE `kz_answer` SET `topic` = replace (`topic`,'\u3010\u5355\u9009\u9898\u3011','') WHERE `topic` LIKE '%\u3010\u5355\u9009\u9898\u3011%'\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u5176\u5b9e\u4e5f\u5c31\u662f UPDATE \u66f4\u65b0\u8bed\u53e5\uff0c\u7136\u540e\u901a\u8fc7 WHERE \u5b50\u53e5\u4e0e LIKE \u6a21\u7cca\u5224\u65ad\uff0c\u6700\u540e\u5c06\u5b57\u6bb5\u7ed9\u4fee\u6539\u4e86\u3002\u4f1a\u70b9 MySQL \u7684\u4e0a\u9762\u4ee3\u7801\u4e00\u773c\u5c31\u61c2\uff0c\u4e0d\u5199\u4e86\uff0c\u8fd8\u8981\u6298\u817e\u9898\u5e93\u63a5\u53e3\u548c\u9898\u5e93\u5b58\u50a8\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u8be5\u51fd\u6570\u662f\u591a\u5b57\u8282\u5b89\u5168\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f60\u4e0d\u7528\u8003\u8651\u662f\u4e2d\u6587\u5b57\u7b26\u8fd8\u662f\u82f1\u6587\u5b57\u7b26\u3002"})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},98170:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230426204154-2e28fb1e26e96f449f994aa2fde40a2c.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var t=n(96540);const l={},a=t.createContext(l);function c(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);