"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6300],{6124:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=s(74848),t=s(28453);s(84690);const o={id:"Hexo-\u90e8\u7f72",slug:"/Hexo-deployment",title:"\u90e8\u7f72",date:"2022/12/14",authors:"RiverMountain",last_update:{date:"2022/12/14"}},c=void 0,d={id:"blog/Hexo/Hexo-\u90e8\u7f72",title:"\u90e8\u7f72",description:"\u521d\u59cb\u5316 Hexo",source:"@site/docs/blog/Hexo/\u90e8\u7f72.md",sourceDirName:"blog/Hexo",slug:"/Hexo-deployment",permalink:"/docs/Hexo-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Hexo-\u90e8\u7f72",slug:"/Hexo-deployment",title:"\u90e8\u7f72",date:"2022/12/14",authors:"RiverMountain",last_update:{date:"2022/12/14"}},sidebar:"blog",previous:{title:"\u73af\u5883\u914d\u7f6e",permalink:"/docs/Hexo-env"},next:{title:"Vercel\u90e8\u7f72",permalink:"/docs/Hexo-Vercel"}},l={},r=[{value:"\u521d\u59cb\u5316 Hexo",id:"\u521d\u59cb\u5316-hexo",level:2},{value:"\u5c06\u535a\u5ba2\u6302\u5230 Github Pages",id:"\u5c06\u535a\u5ba2\u6302\u5230-github-pages",level:2},{value:"\u5b89\u88c5 hexo-deployer-git",id:"\u5b89\u88c5-hexo-deployer-git",level:3},{value:"\u4fee\u6539 _config.yml \u6587\u4ef6",id:"\u4fee\u6539-_configyml-\u6587\u4ef6",level:3},{value:"\u90e8\u7f72\u5230 Github",id:"\u90e8\u7f72\u5230-github",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u521d\u59cb\u5316-hexo",children:"\u521d\u59cb\u5316 Hexo"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u535a\u5ba2\u6839\u76ee\u5f55\u8def\u5f84\u6253\u5f00 CMD \u7a97\u53e3\uff0c\u5e76\u6267\u884c\u5982\u4e0b\u547d\u4ee4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hexo init blog-demo(\u9879\u76ee\u540d\uff0c\u81ea\u5b9a\u4e49)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(77252).A+"",width:"612",height:"278"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fdb\u5165\u9879\u76ee\u76ee\u5f55\uff0c\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd blog-demo  //\u8fdb\u5165blog-demo\u6587\u4ef6\u5939\nnpm i\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(92305).A+"",width:"993",height:"519"})}),"\n",(0,i.jsx)(n.p,{children:"\u521d\u59cb\u5316\u9879\u76ee\u540e\uff0c\u4f1a\u51fa\u73b0\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(53638).A+"",width:"694",height:"298"})}),"\n",(0,i.jsx)(n.p,{children:"\u542f\u52a8 Hexo \u9879\u76ee"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hexo s\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5f00\u6d4f\u89c8\u5668\u5e76\u8bbf\u95ee  ",(0,i.jsx)(n.code,{children:"http://localhost:4000/"}),"\uff0c\u663e\u793a\u521d\u59cb\u754c\u9762\u5c31\u8bf4\u660e\u5df2\u7ecf\u521d\u6b65\u642d\u5efa\u6210\u529f"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(27544).A+"",width:"1928",height:"1024"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5c06\u535a\u5ba2\u6302\u5230-github-pages",children:"\u5c06\u535a\u5ba2\u6302\u5230 Github Pages"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u628a\u535a\u5ba2\u6302\u5728\u5230 GitHub Pages \u7684\u524d\u63d0\u662f\u521b\u5efa\u4e86 \u4ed3\u5e93\u5e76\u914d\u7f6e\u4e86 SSH key\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5-hexo-deployer-git",children:"\u5b89\u88c5 hexo-deployer-git"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install hexo-deployer-git --save\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4fee\u6539-_configyml-\u6587\u4ef6",children:"\u4fee\u6539 _config.yml \u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u9879\u76ee\u8def\u5f84\u7684\u76ee\u5f55\u4e0b\u7684 _config.yml\uff0c\u5c31\u662f\u6574\u4e2a Hexo \u6846\u67b6\u7684\u914d\u7f6e\u6587\u4ef6\u4e86\u3002\n\u53ef\u4ee5\u5728\u91cc\u9762\u4fee\u6539\u5927\u90e8\u5206\u914d\u7f6e\u6587\u4ef6\uff0c\u8be6\u7ec6\u7684\u6559\u7a0b\u53ef\u53c2\u8003 Hexo \u5b98\u65b9\u6587\u6863\u7684",(0,i.jsx)(n.a,{href:"https://hexo.io/zh-cn/docs/configuration",children:"\u914d\u7f6e\u63cf\u8ff0"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539\u6700\u540e\u4e00\u884c\u7684\u914d\u7f6e\uff0c\u5c06 ",(0,i.jsx)(n.code,{children:"repository"})," \u4fee\u6539\u4e3a\u4f60\u81ea\u5df1\u7684 GitHub \u9879\u76ee\u5730\u5740\u5373\u53ef\u3002\n\uff08\u6ce8\u610f\u68c0\u67e5\u81ea\u5df1\u7684\u4e3b\u5206\u652f\u662f ",(0,i.jsx)(n.strong,{children:"main"})," \u8fd8\u662f ",(0,i.jsx)(n.strong,{children:"master\uff09"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(29302).A+"",width:"872",height:"205"})}),"\n",(0,i.jsx)(n.h3,{id:"\u90e8\u7f72\u5230-github",children:"\u90e8\u7f72\u5230 Github"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hexg cl\nhexo g\nhexo d\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u51fa\u73b0\u4e86 Deploy Done \u8bf4\u660e\u90e8\u7f72\u6210\u529f\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u53bb\u6ce1\u4e00\u676f\u5496\u5561\uff0c\u7a0d\u7b49\u51e0\u5206\u949f\u5728\u8fdb\u884c\u4e0b\u4e00\u6b65\u3002\n",(0,i.jsx)(n.img,{src:s(7373).A+"",width:"993",height:"519"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(54400).A+"",width:"1928",height:"955"})}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728\u535a\u5ba2\u7f51\u7ad9\u5730\u5740\u662f ",(0,i.jsx)(n.code,{children:"{username}.github.io"}),"\uff0c\u4e5f\u53ef\u4ee5\u53bb\u5b9a\u5236\u4e00\u4e2a\u4e13\u5c5e\u4e0e\u4f60\u81ea\u5df1\u7684\u57df\u540d\u52a0\u4e0a\u4e2aCDN\uff0c\u9700\u8981\u8d2d\u4e70\uff0c\u4f46\u4e0d\u662f\u5fc5\u987b\u7684\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},84690:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);const i="displayFlex_asPq";var t=s(74848);const o=function(e){return(0,t.jsx)("figure",{children:(0,t.jsx)("div",{className:i,children:e.children})})}},77252:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20230423005039-b1a97d291ca44263291454a338c62dd8.png"},92305:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20230423005126-f1df5e5bab0cadd2b8c2cd7f662da8b9.png"},53638:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20230423005334-fb0d76477f9802654c553d071132c378.png"},27544:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20230423005512-cc1e6e6bf0fa4cd727233eb360820b6e.png"},29302:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20230423010808-843f3ad0b469e78584ca64f117d294f8.png"},7373:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20230423010850-943638709628a49a700c277c0c73667d.png"},54400:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20230423010855-501c9213be0b4462e4c856d3916aecf4.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(96540);const t={},o=i.createContext(t);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);