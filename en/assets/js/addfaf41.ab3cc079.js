"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9974],{55006:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var c=n(74848),s=n(28453);const r={id:"docker-compose",slug:"/docker-compose",title:"Docker Compose",date:new Date("2021-05-26T00:00:00.000Z"),authors:"RiverMountain",tags:["docker"],keywords:["docker"]},d=void 0,l={id:"stack/docker/docker-compose",title:"Docker Compose",description:"\u7b80\u4ecb",source:"@site/docs/stack/docker/Docker Compose.md",sourceDirName:"stack/docker",slug:"/docker-compose",permalink:"/en/docs/docker-compose",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/en/docs/tags/docker"}],version:"current",frontMatter:{id:"docker-compose",slug:"/docker-compose",title:"Docker Compose",date:"2021-05-26T00:00:00.000Z",authors:"RiverMountain",tags:["docker"],keywords:["docker"]},sidebar:"stack",previous:{title:"Docker",permalink:"/en/docs/category/docker"},next:{title:"Docker\u7b14\u8bb0",permalink:"/en/docs/docker"}},i={},t=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"YAML \u89c4\u5219",id:"yaml-\u89c4\u5219",level:3}];function a(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,c.jsx)(o.p,{children:"dockerfile \u80fd\u8ba9\u7a0b\u5e8f\u5728\u4efb\u4f55\u5730\u65b9\u8fd0\u884c \u6bd4\u5982 web \u670d\u52a1 redis mysql nginx \u4f46\u9700\u8981\u542f\u52a8\u591a\u4e2a\u5bb9\u5668 \u5e76\u4e14\u90fd\u9700\u8981 run \u4e00\u4e0b ,\u800c\u901a\u8fc7 Docker Compose \u5219\u53ef\u4ee5\u4e00\u952e\u5b8c\u6210\u4e0a\u9762\u4efb\u52a1 \u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72"}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.strong,{children:"\u4e00\u53e5\u8bdd:\u5c06\u591a\u4e2a\u5bb9\u5668\u878d\u5408\u5728\u4e00\u8d77"})}),"\n",(0,c.jsx)(o.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,c.jsx)(o.p,{children:"\u524d\u63d0\u9700\u8981\u5b89\u88c5 docker"}),"\n",(0,c.jsx)(o.p,{children:"1\u3001\u4e0b\u8f7d"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-shell",children:'sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n\n# \u4e0a\u4e3a\u5b98\u65b9\u7684\u5730\u5740 \u53ef\u80fd\u6709\u4e9b\u6162 \u4e0b\u4e3adaocloud\nsudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\n\n'})}),"\n",(0,c.jsx)(o.p,{children:"2\u3001\u6388\u6743\u6587\u4ef6\u6743\u9650"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-shell",children:"sudo chmod +x /usr/local/bin/docker-compose\n"})}),"\n",(0,c.jsx)(o.p,{children:"3\u3001\u6d4b\u8bd5\u5b89\u88c5\u7ed3\u679c"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:"docker-compose --version\n"})}),"\n",(0,c.jsx)(o.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:"docker-compose up\n"})}),"\n",(0,c.jsx)(o.h3,{id:"yaml-\u89c4\u5219",children:"YAML \u89c4\u5219"}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.a,{href:"https://docs.docker.com/compose/compose-file/compose-file-v3/#compose-file-structure-and-examples",children:"Compose file version 3 reference | Docker Documentation"})}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.code,{children:"Compose"})," \u4e2d\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\uff1a"]}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["\u670d\u52a1 (",(0,c.jsx)(o.code,{children:"service"}),")\uff1a\u4e00\u4e2a\u5e94\u7528\u7684\u5bb9\u5668\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u5305\u62ec\u82e5\u5e72\u8fd0\u884c\u76f8\u540c\u955c\u50cf\u7684\u5bb9\u5668\u5b9e\u4f8b\u3002"]}),"\n",(0,c.jsxs)(o.li,{children:["\u9879\u76ee (",(0,c.jsx)(o.code,{children:"project"}),")\uff1a\u7531\u4e00\u7ec4\u5173\u8054\u7684\u5e94\u7528\u5bb9\u5668\u7ec4\u6210\u7684\u4e00\u4e2a\u5b8c\u6574\u4e1a\u52a1\u5355\u5143\uff0c\u5728 ",(0,c.jsx)(o.code,{children:"docker-compose.yml"})," \u6587\u4ef6\u4e2d\u5b9a\u4e49\u3002"]}),"\n"]}),"\n",(0,c.jsx)(o.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684 YAML \u914d\u7f6e\u6587\u4ef6\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837\u3002"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-yaml",children:"version: '3' # compose\u7248\u672c \u6839\u636edocker\u7684\u7248\u672c\u6765\u5339\u914d\n\nservices: # \u670d\u52a1\n  \u670d\u52a11:\n    # \u670d\u52a1\u914d\u7f6e\n    images:\n    build:\n    ports:\n    network:\n    environment:\n    depends_on:\n  \u670d\u52a12:\nnetworks:\nvolumes:\n"})})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>l});var c=n(96540);const s={},r=c.createContext(s);function d(e){const o=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(r.Provider,{value:o},e.children)}}}]);