"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1984],{93435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(74848),r=t(28453);const i={id:"commonly-used-util.js",slug:"/commonly-used-util.js",title:"\u5e38\u7528util.js",date:new Date("2020-10-21T00:00:00.000Z"),authors:"RiverMountain",tags:["js","util"],keywords:["js","util"]},o=void 0,l={id:"stack/js/\u6280\u5de7\u7bc7/commonly-used-util.js",title:"\u5e38\u7528util.js",description:"\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u5728 js \u5b66\u4e60\u4e2d\u5e38\u7528\u5230\u7684\u4e00\u4e9b\u65b9\u6cd5\uff0c\u8fdb\u884c\u5c01\u88c5\u4f7f\u7528",source:"@site/docs/stack/js/\u6280\u5de7\u7bc7/\u5e38\u7528util.js.md",sourceDirName:"stack/js/\u6280\u5de7\u7bc7",slug:"/commonly-used-util.js",permalink:"/docs/commonly-used-util.js",draft:!1,unlisted:!1,tags:[{inline:!0,label:"js",permalink:"/docs/tags/js"},{inline:!0,label:"util",permalink:"/docs/tags/util"}],version:"current",frontMatter:{id:"commonly-used-util.js",slug:"/commonly-used-util.js",title:"\u5e38\u7528util.js",date:"2020-10-21T00:00:00.000Z",authors:"RiverMountain",tags:["js","util"],keywords:["js","util"]},sidebar:"stack",previous:{title:"TypeScript\u9ad8\u7ea7\u8bed\u6cd5",permalink:"/docs/typescript-advanced-grammar"},next:{title:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0eJSON\u4e92\u8f6c",permalink:"/docs/querystring-and-json-convert"}},c={},a=[{value:"1.\u65f6\u95f4\u683c\u5f0f\u89e3\u6790",id:"1\u65f6\u95f4\u683c\u5f0f\u89e3\u6790",level:2},{value:"2.\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee",id:"2\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee",level:2},{value:"3.\u53d6\u968f\u673a\u6570\uff0c\u5b57\u6bcd",id:"3\u53d6\u968f\u673a\u6570\u5b57\u6bcd",level:2},{value:"4.\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e json \u4e92\u8f6c",id:"4\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e-json-\u4e92\u8f6c",level:2},{value:"5.\u63d0\u53d6 url \u4e2d\u7684 Query \u5bf9\u8c61",id:"5\u63d0\u53d6-url-\u4e2d\u7684-query-\u5bf9\u8c61",level:2},{value:"6.\u6df1\u62f7\u8d1d",id:"6\u6df1\u62f7\u8d1d",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u5728 js \u5b66\u4e60\u4e2d\u5e38\u7528\u5230\u7684\u4e00\u4e9b\u65b9\u6cd5\uff0c\u8fdb\u884c\u5c01\u88c5\u4f7f\u7528"}),"\n",(0,s.jsx)(n.h2,{id:"1\u65f6\u95f4\u683c\u5f0f\u89e3\u6790",children:"1.\u65f6\u95f4\u683c\u5f0f\u89e3\u6790"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5f53\u5176\u51b2\u7684\u5c31\u662f\u8fd9\u4e2a\u65f6\u95f4\u683c\u5f0f\u89e3\u6790\u4e86\uff0cjs \u7684 Date \u4e2d\u6709\u4e00\u4e2a\u65b9\u6cd5",(0,s.jsx)(n.code,{children:"toLocaleString()"})," \u8fd4\u56de\u7684\u7ed3\u679c\u4e3a\u672c\u5730\u65f6\u95f4\uff0c\u5982",(0,s.jsx)(n.code,{children:"new Date().toLocaleString()"}),"\u8fd4\u56de\u4e3a",(0,s.jsx)(n.code,{children:"2020/10/21 \u4e0a\u53481:03:17"}),"\uff0c\u597d\u50cf\u770b\u7740\u5e76\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u662f\u6211\u5982\u679c\u8981\u5c06",(0,s.jsx)(n.code,{children:"2020/10/21 \u4e0a\u53481:03:17"}),"\u8f6c\u4e3a\u65f6\u95f4\u6233\u7684\u8bdd\uff0c\u4e5f\u5c31\u662f\u6267\u884c",(0,s.jsx)(n.code,{children:'new Date("2020/10/21 \u4e0a\u53485:03:17").getTime()'}),"\uff0c\u7136\u800c\u5b83\u5374\u8fd4\u56de",(0,s.jsx)(n.code,{children:"NaN"}),"\uff0c\u4e0d\u5408\u7406\u554a\uff0c\u65f6\u95f4\u683c\u5f0f\u96be\u9053\u4e0d\u662f\u8fd9\u6837\u7684\u5417\uff0c\u65f6\u95f4\u683c\u5f0f\u8fd8\u771f\u4e0d\u662f\u8fd9\u6837\uff0c\u4e0a\u9762\u53ea\u662f\u663e\u793a\u4e3a\u672c\u5730\u7684\u65f6\u95f4\uff0c\u7136\u800c\u5bf9\u4e8e js \u800c\u8a00\uff0c\u5b83\u53ea\u8bc6\u522b",(0,s.jsx)(n.code,{children:"yyyy-MM-dd HH:mm:ss"}),"\u8fd9\u6837\u7684\u65f6\u95f4\u683c\u5f0f\u3002\u4e8e\u662f\u5c31\u9700\u8981\u5bf9\u8fd4\u56de\u7684\u65f6\u95f4\u683c\u5f0f\u8fdb\u884c\u64cd\u4f5c\u4e86\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u4e0b\u65b9\u7684\u89e3\u6790\u51fd\u6570\uff0c\u5e76\u5e26\u4e0a\u5bf9\u5e94\u7684\u65f6\u95f4\u683c\u5f0f\u8fd4\u56de\u7ed9\u6211\u5bf9\u5e94\u7684\u65f6\u95f4\uff0c\u4ee3\u7801\u5c31\u4e0d\u5206\u6790\u4e86\uff0c\u6211\u4e5f\u662f\u501f\u9274\u7f51\u7edc\u4e0a\u7684\u4e00\u4e9b\u683c\u5f0f\u5316\u65f6\u95f4\u4ee3\u7801\uff0c\u4fee\u6539\u800c\u6765\u7684\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function parseTime(time, cFormat) {\n  if (arguments.length === 0 || !time) {\n    return null\n  }\n  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'\n  let date\n  if (typeof time === 'object') {\n    date = time\n  } else {\n    if (typeof time === 'string') {\n      if (/^[0-9]+$/.test(time)) {\n        time = parseInt(time)\n      } else {\n        time = time.replace(new RegExp(/-/gm), '/')\n      }\n    }\n\n    if (typeof time === 'number' && time.toString().length === 10) {\n      time = time * 1000\n    }\n    date = new Date(time)\n  }\n  const formatObj = {\n    y: date.getFullYear(),\n    m: date.getMonth() + 1,\n    d: date.getDate(),\n    h: date.getHours(),\n    i: date.getMinutes(),\n    s: date.getSeconds(),\n    a: date.getDay(),\n  }\n  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {\n    const value = formatObj[key]\n    if (key === 'a') {\n      return ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'][value]\n    }\n    return value.toString().padStart(2, '0')\n  })\n  return time_str\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee",children:"2.\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u9762\u8bf4\u5230\u7684\u662f\u65f6\u95f4\u7ed3\u6784\u7684\u89e3\u6790\uff0c\u4f46\u6709\u65f6\u5019\u9700\u8981\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u4e0e\u73b0\u5728\u7684\u65f6\u95f4\u5dee\uff0c\u6bd4\u5982\u8ba1\u7b97\u8bc4\u8bba\u53d1\u5e03\u7684\u65f6\u95f4\u3002\u8fd9\u4e2a\u6211\u4e5f\u653e\u4e00\u4e2a\u5bf9\u5e94\u7684\u76f8\u5173\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function formatTime(time, option) {\n  if (('' + time).length === 10) {\n    time = parseInt(time) * 1000\n  } else {\n    time = +time\n  }\n  const d = new Date(time)\n  const now = Date.now()\n\n  const diff = (now - d) / 1000\n\n  if (diff < 30) {\n    return '\u521a\u521a'\n  } else if (diff < 3600) {\n    // less 1 hour\n    return Math.ceil(diff / 60) + '\u5206\u949f\u524d'\n  } else if (diff < 3600 * 24) {\n    return Math.ceil(diff / 3600) + '\u5c0f\u65f6\u524d'\n  } else if (diff < 3600 * 24 * 2) {\n    return '1\u5929\u524d'\n  }\n  if (option) {\n    return parseTime(time, option)\n  } else {\n    return d.getFullYear() + '\u5e74' + (d.getMonth() + 1) + '\u6708' + d.getDate() + '\u65e5' + d.getHours() + '\u65f6' + d.getMinutes() + '\u5206'\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u63d0\u4e00\u4e0b",(0,s.jsx)(n.code,{children:"moment.js"}),"\uff0c\u4e00\u4e2a js \u65e5\u671f\u5904\u7406\u7684\u7c7b\u5e93\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u53bb\u4e86\u89e3\u4e00\u4e0b ",(0,s.jsx)(n.a,{href:"http://momentjs.cn/",children:"moment.js"})]}),"\n",(0,s.jsx)(n.h2,{id:"3\u53d6\u968f\u673a\u6570\u5b57\u6bcd",children:"3.\u53d6\u968f\u673a\u6570\uff0c\u5b57\u6bcd"}),"\n",(0,s.jsxs)(n.p,{children:["js \u63d0\u4f9b\u4e86\u83b7\u53d6\u968f\u673a\u6570\u7684\u65b9\u6cd5",(0,s.jsx)(n.code,{children:"Math.random()"})," \uff0c\u4f46\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u83b7\u53d6 0-1 \u4e4b\u95f4\u7684\u968f\u673a\u6570\uff0c\u5982",(0,s.jsx)(n.code,{children:"0.8790767725487598"}),"\uff0c\u5f53\u7136\uff0c\u8fd9\u80af\u5b9a\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\uff0c\u6211\u8981\u7684\u53ea\u662f\u4e00\u4e2a 0-9 \u6570\u5b57\uff0c\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5c06\u4e0a\u9762\u83b7\u53d6\u5230\u7684\u968f\u673a\u6570\u4e58 10\uff0c\u7136\u540e\u53d6\u4e2a\u4f4d\u6570\u4e0d\u5c31\u6210\u4e86\u3002\u5bf9\u5e94\u7684\u4e5f\u5c31\u662f"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"parseInt(Math.random() * 10)"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u65f6\u5019\u80af\u5b9a\u4e0d\u53ea\u662f\u8981 0-9 \u4e4b\u95f4\uff0c\u53ef\u80fd\u662f\u8981 0-100 \u7684\uff0c\u539f\u7406\u4e00\u6837\uff0c\u5bf9\u5e94\u7684\u6362\u7b97\u516c\u5f0f\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.p,{children:["\u83b7\u53d6 N-M \u7684\u968f\u673a\u6570 ",(0,s.jsx)(n.code,{children:"parseInt(Math.random() * (M - N + 1) + N)"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5c01\u88c5\u6210\u5982\u4e0b\u5bf9\u5e94\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function ranNum(min, max) {\n  if (arguments.length === 0) {\n    return parseInt(Math.random() * 10)\n  }\n  return parseInt(Math.random() * (max - min + 1) + min)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u5e94\u7684\u83b7\u53d6\u968f\u673a\u5b57\u6bcd\u4e5f\u7b80\u5355,\u53ea\u8981\u901a\u8fc7 ASCII \u7801 A \u4e3a 65\uff0cZ \u4e3a 90\uff0c\u7136\u540e\u83b7\u53d6\u968f\u673a\u6570 0-25\uff0c\u901a\u8fc7",(0,s.jsx)(n.code,{children:"String.fromCharCode"}),"\u4f20\u5165\u5bf9\u5e94\u7684 ASCII \u7801\u5373\u53ef\uff0c\u5982\u4e0b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function ranChar() {\n  return String.fromCharCode(65 + parseInt(Math.random() * 25))\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"4\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e-json-\u4e92\u8f6c",children:"4.\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e json \u4e92\u8f6c"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u5728\u6211\u7684\u53e6\u4e00\u7bc7\u6587\u7ae0 ",(0,s.jsx)(n.a,{href:"/docs/querystring-and-json-convert",children:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e JSON \u4e92\u8f6c"})," \u4e2d\u6709\u5199\u5230\u4e86\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u505a\u8fc7\u591a\u53d9\u8ff0\u4e86"]}),"\n",(0,s.jsx)(n.h2,{id:"5\u63d0\u53d6-url-\u4e2d\u7684-query-\u5bf9\u8c61",children:"5.\u63d0\u53d6 url \u4e2d\u7684 Query \u5bf9\u8c61"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function getQueryObject(url) {\n  url = url == null ? window.location.href : url\n  const search = url.substring(url.lastIndexOf('?') + 1)\n  const obj = {}\n  const reg = /([^?&=]+)=([^?&=]*)/g\n  search.replace(reg, (rs, $1, $2) => {\n    const name = decodeURIComponent($1)\n    let val = decodeURIComponent($2)\n    val = String(val)\n    obj[name] = val\n    return rs\n  })\n  return obj\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"6\u6df1\u62f7\u8d1d",children:"6.\u6df1\u62f7\u8d1d"}),"\n",(0,s.jsxs)(n.p,{children:["\u6d45\u62f7\u8d1d\u5c31\u4e0d\u8bf4\u4e86\uff0c",(0,s.jsx)(n.code,{children:"Object.assign"}),"\u5c31\u80fd\u89e3\u51b3\u4e86\uff0c\u6709\u5173 js \u5bf9\u8c61\u62f7\u8d1d\u8fd9\u91cc\u4e5f\u4e0d\u505a\u8fc7\u591a\u7684\u8d58\u8ff0\uff0c\u968f\u4fbf\u4e00\u641c\u5c31\u6709\u5404\u79cd\u76f8\u5173\u7684\u3002\u8fd9\u91cc\u5c31\u8d34\u4e00\u4e2a\u6df1\u62f7\u8d1d\u7684\u76f8\u5173\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function deepClone(source) {\n  if (!source && typeof source !== 'object') {\n    throw new Error('error arguments', 'deepClone')\n  }\n  const targetObj = source.constructor === Array ? [] : {}\n  Object.keys(source).forEach((keys) => {\n    if (source[keys] && typeof source[keys] === 'object') {\n      targetObj[keys] = deepClone(source[keys])\n    } else {\n      targetObj[keys] = source[keys]\n    }\n  })\n  return targetObj\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);