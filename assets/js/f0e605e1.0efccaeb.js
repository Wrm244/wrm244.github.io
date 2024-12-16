"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7027],{5979:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var c=t(74848),r=t(28453);const s={id:"js-implement-function-cache",slug:"/js-implement-function-cache",title:"JS\u5b9e\u73b0\u51fd\u6570\u7f13\u5b58",date:new Date("2021-11-22T00:00:00.000Z"),authors:"RiverMountain",tags:["javascript"],keywords:["javascript"]},a=void 0,i={id:"stack/js/\u6280\u5de7\u7bc7/js-implement-function-cache",title:"JS\u5b9e\u73b0\u51fd\u6570\u7f13\u5b58",description:"\u539f\u7406",source:"@site/docs/stack/js/\u6280\u5de7\u7bc7/JS\u5b9e\u73b0\u51fd\u6570\u7f13\u5b58.md",sourceDirName:"stack/js/\u6280\u5de7\u7bc7",slug:"/js-implement-function-cache",permalink:"/docs/js-implement-function-cache",draft:!1,unlisted:!1,tags:[{inline:!0,label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",frontMatter:{id:"js-implement-function-cache",slug:"/js-implement-function-cache",title:"JS\u5b9e\u73b0\u51fd\u6570\u7f13\u5b58",date:"2021-11-22T00:00:00.000Z",authors:"RiverMountain",tags:["javascript"],keywords:["javascript"]},sidebar:"stack",previous:{title:"JS\u5982\u4f55\u83b7\u53d6\u5f53\u5929\u96f6\u70b9\u65f6\u95f4\u6233",permalink:"/docs/how-does-js-get-today-zero-timestamp"},next:{title:"JS\u8f93\u51fa\u51fd\u6570\u8c03\u7528\u6808",permalink:"/docs/js-print-stack-of-function"}},l={},d=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f8b\u5b50\uff1a\u6c42\u548c",id:"\u4f8b\u5b50\u6c42\u548c",level:2},{value:"\u4f7f\u7528\u51fd\u6570\u7f13\u5b58",id:"\u4f7f\u7528\u51fd\u6570\u7f13\u5b58",level:3},{value:"\u4ee3\u7406\u6a21\u5f0f",id:"\u4ee3\u7406\u6a21\u5f0f",level:3},{value:"\u521b\u5efa\u7f13\u5b58\u4ee3\u7406\u7684\u5de5\u5382",id:"\u521b\u5efa\u7f13\u5b58\u4ee3\u7406\u7684\u5de5\u5382",level:4}];function o(n){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u95ed\u5305"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u67ef\u91cc\u5316"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u9ad8\u9636\u51fd\u6570"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4f8b\u5b50\u6c42\u548c",children:"\u4f8b\u5b50\uff1a\u6c42\u548c"}),"\n",(0,c.jsx)(e.p,{children:"\u6b63\u5e38\u7684\u5faa\u73af\u7d2f\u52a0\u4ee3\u7801"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function add() {\n  let sum = 0\n  for (let i = 0; i < arguments.length; i++) {\n    sum += arguments[i]\n  }\n  return sum\n}\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528\u6570\u7ec4\u7684 reduce \u65b9\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function add() {\n  var arr = Array.prototype.slice.call(arguments)\n  return arr.reduce(function (prev, cur) {\n    return prev + cur\n  }, 0)\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4f46\u591a\u6b21\u4f20\u5165\u540c\u6837\u7684\u53c2\u6570 \u5982 ",(0,c.jsx)(e.code,{children:"add(1, 2, 3)"})," \u90fd\u5c06\u6267\u884c\u8fd0\u7b97\u5bf9\u5e94\u7684\u6b21\u6570\uff0c\u5c06\u4f1a\u8017\u8d39\u4e00\u5b9a\u7684\u6027\u80fd\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u4f7f\u7528\u51fd\u6570\u7f13\u5b58",children:"\u4f7f\u7528\u51fd\u6570\u7f13\u5b58"}),"\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528\u95ed\u5305\uff0c\u5c06\u6bcf\u6b21\u8fd0\u7b97\u7684\u53c2\u6570\u4e0e\u7ed3\u679c\u5b58\u5165\u7f6e cache \u5bf9\u8c61\u4e2d\uff0c\u5982\u679c cache \u4e2d\u6709\uff0c\u4fbf\u76f4\u63a5\u83b7\u53d6\uff0c\u6765\u8fbe\u5230\u7f13\u5b58\u7684\u76ee\u7684"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let add = (function () {\n  let cache = {}\n\n  return function () {\n    let args = Array.prototype.join.call(arguments, ',')\n    if (cache[args]) {\n      return cache[args]\n    }\n    let sum = 0\n    for (let i = 0; i < arguments.length; i++) {\n      sum += arguments[i]\n    }\n    return (cache[args] = sum)\n  }\n})()\n\nadd(1, 2, 3) // \u8f93\u51fa6\nadd(1, 2, 3) // \u76f4\u63a5\u4ececache\u4e2d\u83b7\u53d6\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5df2\u7ecf\u8fbe\u5230\u7f13\u5b58\u7684\u76ee\u7684\u4e86\uff0c\u4f46\u8fd9\u65f6\u6211\u60f3\u5c06\u4e58\u6cd5\u4e5f\u60f3\u5b9e\u73b0\u7f13\u5b58\u7684\u76ee\u7684\uff0c\u90a3\u4e48\u53c8\u5f97\u5199\u4e00\u5927\u884c\u8fd9\u6837\u7684\u4ee3\u7801\uff0c\u540c\u65f6\u539f\u672c\u6c42\u548c\u7684\u4ee3\u7801\u53c8\u60f3\u5355\u72ec\u5206\u79bb\u51fa\u6765\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u6a21\u5f0f\uff0c\u5177\u4f53\u6f14\u793a\u5982\u4e0b"}),"\n",(0,c.jsx)(e.h3,{id:"\u4ee3\u7406\u6a21\u5f0f",children:"\u4ee3\u7406\u6a21\u5f0f"}),"\n",(0,c.jsx)(e.h4,{id:"\u521b\u5efa\u7f13\u5b58\u4ee3\u7406\u7684\u5de5\u5382",children:"\u521b\u5efa\u7f13\u5b58\u4ee3\u7406\u7684\u5de5\u5382"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let memoize = function (fn) {\n  let cache = {}\n  return function () {\n    let args = Array.prototype.join.call(arguments, ',')\n    if (args in cache) {\n      return cache[args]\n    }\n    return (cache[args] = fn.apply(this.arguments))\n  }\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u90a3\u4e48\u901a\u8fc7",(0,c.jsx)(e.code,{children:"memoize"})," \u5c31\u80fd\u5c06\u51fd\u6570\u8fd0\u884c\u540e\u7684\u7ed3\u679c\u7ed9\u7f13\u5b58\u8d77\u6765\uff0c\u5982"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"let add1 = memoize(add)\n\nadd1(1, 2, 3) // \u8f93\u51fa6\nadd1(1, 2, 3) // \u76f4\u63a5\u4ececache\u4e2d\u83b7\u53d6\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u4eec\u53ea\u9700\u8981\u7f16\u5199\u6211\u4eec\u6b63\u5e38\u7684\u4e1a\u52a1\u903b\u8f91\uff08\u52a0\u6cd5\uff0c\u4e58\u6cd5\u7b49\uff09\uff0c\u7136\u540e\u901a\u8fc7 memoize \u8c03\u7528 \u4fbf\u53ef\u8fbe\u5230\u7f13\u5b58\u7684\u76ee\u7684"}),"\n",(0,c.jsx)(e.p,{children:"\u540c\u7406\u4e58\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function mult() {\n  let a = 0\n  for (let i = 0; i < arguments.length; i++) {\n    a *= arguments[i]\n  }\n  return a\n}\n\nlet mult1 = memoize(mult)\n\nmult1(1, 2, 3) // \u8f93\u51fa6\nmult1(1, 2, 3) // \u76f4\u63a5\u4ececache\u4e2d\u83b7\u53d6\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>i});var c=t(96540);const r={},s=c.createContext(r);function a(n){const e=c.useContext(s);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);