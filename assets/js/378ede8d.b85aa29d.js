"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7525],{49057:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var s=i(74848),r=i(28453);const c={id:"Conventional-Commits",slug:"/conventional-commits",title:"\u89c4\u5b9a\u5f0f\u63d0\u4ea4",date:"2023-4-22",authors:"RiverMountain",tags:["git","github"],keywords:["git","gitcommit"]},d="\u7ea6\u5b9a\u5f0f\u63d0\u4ea4",l={id:"stack/git/Conventional-Commits",title:"\u89c4\u5b9a\u5f0f\u63d0\u4ea4",description:"\u6982\u8ff0",source:"@site/docs/stack/git/\u7ea6\u5b9a\u5f0f\u63d0\u4ea4.md",sourceDirName:"stack/git",slug:"/conventional-commits",permalink:"/docs/conventional-commits",draft:!1,unlisted:!1,tags:[{inline:!0,label:"git",permalink:"/docs/tags/git"},{inline:!0,label:"github",permalink:"/docs/tags/github"}],version:"current",frontMatter:{id:"Conventional-Commits",slug:"/conventional-commits",title:"\u89c4\u5b9a\u5f0f\u63d0\u4ea4",date:"2023-4-22",authors:"RiverMountain",tags:["git","github"],keywords:["git","gitcommit"]},sidebar:"stack",previous:{title:"Git\u57fa\u7840",permalink:"/docs/Git\u57fa\u7840"},next:{title:"JavaScript",permalink:"/docs/category/javascript"}},o={},t=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5305\u542b\u4e86\u63cf\u8ff0\u5e76\u4e14\u811a\u6ce8\u4e2d\u6709\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e",id:"\u5305\u542b\u4e86\u63cf\u8ff0\u5e76\u4e14\u811a\u6ce8\u4e2d\u6709\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e",level:3},{value:"\u5305\u542b\u4e86 <code>!</code> \u5b57\u7b26\u4ee5\u63d0\u9192\u6ce8\u610f\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e",id:"\u5305\u542b\u4e86--\u5b57\u7b26\u4ee5\u63d0\u9192\u6ce8\u610f\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e",level:3},{value:"\u5305\u542b\u4e86\u8303\u56f4\u548c\u7834\u574f\u6027\u53d8\u66f4 <code>!</code> \u7684\u63d0\u4ea4\u8aaa\u660e",id:"\u5305\u542b\u4e86\u8303\u56f4\u548c\u7834\u574f\u6027\u53d8\u66f4--\u7684\u63d0\u4ea4\u8aaa\u660e",level:3},{value:"\u5305\u542b\u4e86 <code>!</code> \u548c BREAKING CHANGE \u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e",id:"\u5305\u542b\u4e86--\u548c-breaking-change-\u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e",level:3},{value:"\u4e0d\u5305\u542b\u6b63\u6587\u7684\u63d0\u4ea4\u8bf4\u660e",id:"\u4e0d\u5305\u542b\u6b63\u6587\u7684\u63d0\u4ea4\u8bf4\u660e",level:3},{value:"\u5305\u542b\u8303\u56f4\u7684\u63d0\u4ea4\u8bf4\u660e",id:"\u5305\u542b\u8303\u56f4\u7684\u63d0\u4ea4\u8bf4\u660e",level:3},{value:"\u5305\u542b\u591a\u884c\u6b63\u6587\u548c\u591a\u884c\u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e",id:"\u5305\u542b\u591a\u884c\u6b63\u6587\u548c\u591a\u884c\u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e",level:3},{value:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303",id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u5728\u521d\u59cb\u5f00\u53d1\u9636\u6bb5\u6211\u8be5\u5982\u4f55\u5904\u7406\u63d0\u4ea4\u8bf4\u660e\uff1f",id:"\u5728\u521d\u59cb\u5f00\u53d1\u9636\u6bb5\u6211\u8be5\u5982\u4f55\u5904\u7406\u63d0\u4ea4\u8bf4\u660e",level:3},{value:"\u63d0\u4ea4\u6807\u9898\u4e2d\u7684\u7c7b\u578b\u662f\u5927\u5199\u8fd8\u662f\u5c0f\u5199?",id:"\u63d0\u4ea4\u6807\u9898\u4e2d\u7684\u7c7b\u578b\u662f\u5927\u5199\u8fd8\u662f\u5c0f\u5199",level:3},{value:"\u5982\u679c\u63d0\u4ea4\u7b26\u5408\u591a\u79cd\u7c7b\u578b\u6211\u8be5\u5982\u4f55\u64cd\u4f5c\uff1f",id:"\u5982\u679c\u63d0\u4ea4\u7b26\u5408\u591a\u79cd\u7c7b\u578b\u6211\u8be5\u5982\u4f55\u64cd\u4f5c",level:3},{value:"\u8fd9\u4e0d\u4f1a\u963b\u788d\u5feb\u901f\u5f00\u53d1\u548c\u8fed\u4ee3\u5417\uff1f",id:"\u8fd9\u4e0d\u4f1a\u963b\u788d\u5feb\u901f\u5f00\u53d1\u548c\u8fed\u4ee3\u5417",level:3},{value:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u4f1a\u8ba9\u5f00\u53d1\u8005\u53d7\u9650\u4e8e\u63d0\u4ea4\u7684\u7c7b\u578b\u5417\uff08\u56e0\u4e3a\u4ed6\u4eec\u4f1a\u60f3\u7740\u5df2\u63d0\u4f9b\u7684\u7c7b\u578b\uff09\uff1f",id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u4f1a\u8ba9\u5f00\u53d1\u8005\u53d7\u9650\u4e8e\u63d0\u4ea4\u7684\u7c7b\u578b\u5417\u56e0\u4e3a\u4ed6\u4eec\u4f1a\u60f3\u7740\u5df2\u63d0\u4f9b\u7684\u7c7b\u578b",level:3},{value:"\u8fd9\u548c SemVer \u6709\u4ec0\u4e48\u5173\u8054\u5462\uff1f",id:"\u8fd9\u548c-semver-\u6709\u4ec0\u4e48\u5173\u8054\u5462",level:3},{value:"\u6211\u5bf9\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u505a\u4e86\u5f62\u5982 <code>@jameswomack/conventional-commit-spec</code> \u7684\u6269\u5c55\uff0c\u8be5\u5982\u4f55\u7248\u672c\u5316\u7ba1\u7406\u8fd9\u4e9b\u6269\u5c55\u5462\uff1f",id:"\u6211\u5bf9\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u505a\u4e86\u5f62\u5982-jameswomackconventional-commit-spec-\u7684\u6269\u5c55\u8be5\u5982\u4f55\u7248\u672c\u5316\u7ba1\u7406\u8fd9\u4e9b\u6269\u5c55\u5462",level:3},{value:"\u5982\u679c\u6211\u4e0d\u5c0f\u5fc3\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u63d0\u4ea4\u7c7b\u578b\uff0c\u8be5\u600e\u4e48\u529e\u5462\uff1f",id:"\u5982\u679c\u6211\u4e0d\u5c0f\u5fc3\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u63d0\u4ea4\u7c7b\u578b\u8be5\u600e\u4e48\u529e\u5462",level:3},{value:"\u5f53\u4f60\u4f7f\u7528\u4e86\u5728\u89c4\u8303\u4e2d\u4f46\u9519\u8bef\u7684\u7c7b\u578b\u65f6\uff0c\u4f8b\u5982\u5c06 <code>feat</code> \u5199\u6210\u4e86 <code>fix</code>",id:"\u5f53\u4f60\u4f7f\u7528\u4e86\u5728\u89c4\u8303\u4e2d\u4f46\u9519\u8bef\u7684\u7c7b\u578b\u65f6\u4f8b\u5982\u5c06-feat-\u5199\u6210\u4e86-fix",level:4},{value:"\u5f53\u4f7f\u7528\u4e86 <em>\u4e0d\u5728</em> \u89c4\u8303\u4e2d\u7684\u7c7b\u578b\u65f6\uff0c\u4f8b\u5982\u5c06 <code>feat</code> \u5199\u6210\u4e86 <code>feet</code>",id:"\u5f53\u4f7f\u7528\u4e86-\u4e0d\u5728-\u89c4\u8303\u4e2d\u7684\u7c7b\u578b\u65f6\u4f8b\u5982\u5c06-feat-\u5199\u6210\u4e86-feet",level:4},{value:"\u6240\u6709\u7684\u8d21\u732e\u8005\u90fd\u9700\u8981\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u5417\uff1f",id:"\u6240\u6709\u7684\u8d21\u732e\u8005\u90fd\u9700\u8981\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u5417",level:3},{value:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u4e2d\u5982\u4f55\u5904\u7406\u8fd8\u539f\uff08revert\uff09\u63d0\u4ea4?",id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u4e2d\u5982\u4f55\u5904\u7406\u8fd8\u539frevert\u63d0\u4ea4",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4",children:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4"}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u662f\u4e00\u79cd\u57fa\u4e8e\u63d0\u4ea4\u4fe1\u606f\u7684\u8f7b\u91cf\u7ea7\u7ea6\u5b9a\u3002\n\u5b83\u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u89c4\u5219\u6765\u521b\u5efa\u6e05\u6670\u7684\u63d0\u4ea4\u5386\u53f2\uff1b\n\u8fd9\u66f4\u6709\u5229\u4e8e\u7f16\u5199\u81ea\u52a8\u5316\u5de5\u5177\u3002\n\u901a\u8fc7\u5728\u63d0\u4ea4\u4fe1\u606f\u4e2d\u63cf\u8ff0\u529f\u80fd\u3001\u4fee\u590d\u548c\u7834\u574f\u6027\u53d8\u66f4\uff0c\n\u4f7f\u8fd9\u79cd\u60ef\u4f8b\u4e0e ",(0,s.jsx)(n.a,{href:"http://semver.org/lang/zh-CN",children:"SemVer"})," \u76f8\u4e92\u5bf9\u5e94\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u4ea4\u8bf4\u660e\u7684\u7ed3\u6784\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\u539f\u6587\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<type>[optional scope]: <description>\n[optional body]\n[optional footer(s)]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bd1\u6587\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<\u7c7b\u578b>[\u53ef\u9009 \u8303\u56f4]: <\u63cf\u8ff0>\n[\u53ef\u9009 \u6b63\u6587]\n[\u53ef\u9009 \u811a\u6ce8]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u4ea4\u8bf4\u660e\u5305\u542b\u4e86\u4e0b\u9762\u7684\u7ed3\u6784\u5316\u5143\u7d20\uff0c\u4ee5\u5411\u7c7b\u5e93\u4f7f\u7528\u8005\u8868\u660e\u5176\u610f\u56fe\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fix:"})," ",(0,s.jsx)(n.em,{children:"\u7c7b\u578b"})," \u4e3a ",(0,s.jsx)(n.code,{children:"fix"})," \u7684\u63d0\u4ea4\u8868\u793a\u5728\u4ee3\u7801\u5e93\u4e2d\u4fee\u590d\u4e86\u4e00\u4e2a bug\uff08\u8fd9\u548c\u8bed\u4e49\u5316\u7248\u672c\u4e2d\u7684 ",(0,s.jsx)(n.a,{href:"https://semver.org/lang/zh-CN/#%E6%91%98%E8%A6%81",children:(0,s.jsx)(n.code,{children:"PATCH"})})," \u76f8\u5bf9\u5e94\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat:"})," ",(0,s.jsx)(n.em,{children:"\u7c7b\u578b"})," \u4e3a ",(0,s.jsx)(n.code,{children:"feat"})," \u7684\u63d0\u4ea4\u8868\u793a\u5728\u4ee3\u7801\u5e93\u4e2d\u65b0\u589e\u4e86\u4e00\u4e2a\u529f\u80fd\uff08\u8fd9\u548c\u8bed\u4e49\u5316\u7248\u672c\u4e2d\u7684 ",(0,s.jsx)(n.a,{href:"https://semver.org/lang/zh-CN/#%E6%91%98%E8%A6%81",children:(0,s.jsx)(n.code,{children:"MINOR"})})," \u76f8\u5bf9\u5e94\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BREAKING CHANGE:"})," \u5728\u811a\u6ce8\u4e2d\u5305\u542b ",(0,s.jsx)(n.code,{children:"BREAKING CHANGE:"})," \u6216 ",(0,s.jsx)(n.code,{children:"<\u7c7b\u578b>(\u8303\u56f4) "}),"\u540e\u9762\u6709\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"!"})," \u7684\u63d0\u4ea4\uff0c\u8868\u793a\u5f15\u5165\u4e86\u7834\u574f\u6027 API \u53d8\u66f4\uff08\u8fd9\u548c\u8bed\u4e49\u5316\u7248\u672c\u4e2d\u7684 ",(0,s.jsx)(n.a,{href:"https://semver.org/lang/zh-CN/#%E6%91%98%E8%A6%81",children:(0,s.jsx)(n.code,{children:"MAJOR"})})," \u76f8\u5bf9\u5e94\uff09\u3002\n\u7834\u574f\u6027\u53d8\u66f4\u53ef\u4ee5\u662f\u4efb\u610f ",(0,s.jsx)(n.em,{children:"\u7c7b\u578b"})," \u63d0\u4ea4\u7684\u4e00\u90e8\u5206\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9664 ",(0,s.jsx)(n.code,{children:"fix:"})," \u548c ",(0,s.jsx)(n.code,{children:"feat:"})," \u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u5b83\u63d0\u4ea4 ",(0,s.jsx)(n.em,{children:"\u7c7b\u578b"})," \uff0c\u4f8b\u5982 ",(0,s.jsx)(n.a,{href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional",children:"@commitlint/config-conventional"}),"\uff08\u57fa\u4e8e ",(0,s.jsx)(n.a,{href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",children:"Angular \u7ea6\u5b9a"}),"\uff09\u4e2d\u63a8\u8350\u7684 ",(0,s.jsx)(n.code,{children:"build:"}),"\u3001",(0,s.jsx)(n.code,{children:"chore:"}),"\u3001\n",(0,s.jsx)(n.code,{children:"ci:"}),"\u3001",(0,s.jsx)(n.code,{children:"docs:"}),"\u3001",(0,s.jsx)(n.code,{children:"style:"}),"\u3001",(0,s.jsx)(n.code,{children:"refactor:"}),"\u3001",(0,s.jsx)(n.code,{children:"perf:"}),"\u3001",(0,s.jsx)(n.code,{children:"test:"}),"\uff0c\u7b49\u7b49\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u811a\u6ce8\u4e2d\u9664\u4e86 ",(0,s.jsx)(n.code,{children:"BREAKING CHANGE: <description>"})," \uff0c\u5176\u5b83\u6761\u76ee\u5e94\u8be5\u91c7\u7528\u7c7b\u4f3c\n",(0,s.jsx)(n.a,{href:"https://git-scm.com/docs/git-interpret-trailers",children:"git trailer format"})," \u8fd9\u6837\u7684\u60ef\u4f8b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u5b83\u63d0\u4ea4\u7c7b\u578b\u5728\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u4e2d\u5e76\u6ca1\u6709\u5f3a\u5236\u9650\u5236\uff0c\u5e76\u4e14\u5728\u8bed\u4e49\u5316\u7248\u672c\u4e2d\u6ca1\u6709\u9690\u5f0f\u5f71\u54cd\uff08\u9664\u975e\u5b83\u4eec\u5305\u542b BREAKING CHANGE\uff09\u3002"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4e3a\u63d0\u4ea4\u7c7b\u578b\u6dfb\u52a0\u4e00\u4e2a\u56f4\u5728\u5706\u62ec\u53f7\u5185\u7684\u8303\u56f4\uff0c\u4ee5\u4e3a\u5176\u63d0\u4f9b\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"feat(parser): adds ability to parse arrays."}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u5305\u542b\u4e86\u63cf\u8ff0\u5e76\u4e14\u811a\u6ce8\u4e2d\u6709\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e",children:"\u5305\u542b\u4e86\u63cf\u8ff0\u5e76\u4e14\u811a\u6ce8\u4e2d\u6709\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"feat: allow provided config object to extend other configs\nBREAKING CHANGE: `extends` key in config file is now used for extending other config files\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5305\u542b\u4e86--\u5b57\u7b26\u4ee5\u63d0\u9192\u6ce8\u610f\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e",children:["\u5305\u542b\u4e86 ",(0,s.jsx)(n.code,{children:"!"})," \u5b57\u7b26\u4ee5\u63d0\u9192\u6ce8\u610f\u7834\u574f\u6027\u53d8\u66f4\u7684\u63d0\u4ea4\u8bf4\u660e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"feat!: send an email to the customer when a product is shipped\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5305\u542b\u4e86\u8303\u56f4\u548c\u7834\u574f\u6027\u53d8\u66f4--\u7684\u63d0\u4ea4\u8aaa\u660e",children:["\u5305\u542b\u4e86\u8303\u56f4\u548c\u7834\u574f\u6027\u53d8\u66f4 ",(0,s.jsx)(n.code,{children:"!"})," \u7684\u63d0\u4ea4\u8aaa\u660e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"feat(api)!: send an email to the customer when a product is shipped\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5305\u542b\u4e86--\u548c-breaking-change-\u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e",children:["\u5305\u542b\u4e86 ",(0,s.jsx)(n.code,{children:"!"})," \u548c BREAKING CHANGE \u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"chore!: drop support for Node 6\nBREAKING CHANGE: use JavaScript features not available in Node 6.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0d\u5305\u542b\u6b63\u6587\u7684\u63d0\u4ea4\u8bf4\u660e",children:"\u4e0d\u5305\u542b\u6b63\u6587\u7684\u63d0\u4ea4\u8bf4\u660e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docs: correct spelling of CHANGELOG\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5305\u542b\u8303\u56f4\u7684\u63d0\u4ea4\u8bf4\u660e",children:"\u5305\u542b\u8303\u56f4\u7684\u63d0\u4ea4\u8bf4\u660e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"feat(lang): add polish language\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5305\u542b\u591a\u884c\u6b63\u6587\u548c\u591a\u884c\u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e",children:"\u5305\u542b\u591a\u884c\u6b63\u6587\u548c\u591a\u884c\u811a\u6ce8\u7684\u63d0\u4ea4\u8bf4\u660e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"fix: prevent racing of requests\nIntroduce a request id and a reference to latest request. Dismiss\nincoming responses other than from latest request.\nRemove timeouts which were used to mitigate the racing issue but are\nobsolete now.\nReviewed-by: Z\nRefs: #123\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303",children:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u6587\u4e2d\u7684\u5173\u952e\u8bcd \u201c\u5fc5\u987b\uff08MUST\uff09\u201d\u3001\u201c\u7981\u6b62\uff08MUST NOT\uff09\u201d\u3001\u201c\u5fc5\u8981\uff08REQUIRED\uff09\u201d\u3001\u201c\u5e94\u5f53\uff08SHALL\uff09\u201d\u3001\u201c\u4e0d\u5e94\u5f53\uff08SHALL NOT\uff09\u201d\u3001\u201c\u5e94\u8be5\uff08SHOULD\uff09\u201d\u3001\u201c\u4e0d\u5e94\u8be5\uff08SHOULD NOT\uff09\u201d\u3001\u201c\u63a8\u8350\uff08RECOMMENDED\uff09\u201d\u3001\u201c\u53ef\u4ee5\uff08MAY\uff09\u201d \u548c \u201c\u53ef\u9009\uff08OPTIONAL\uff09\u201d \uff0c\u5176\u76f8\u5173\u89e3\u91ca\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://www.ietf.org/rfc/rfc2119.txt",children:"RFC 2119"})," \u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6bcf\u4e2a\u63d0\u4ea4\u90fd",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u4f7f\u7528\u7c7b\u578b\u5b57\u6bb5\u524d\u7f00\uff0c\u5b83\u7531\u4e00\u4e2a\u540d\u8bcd\u6784\u6210\uff0c\u8bf8\u5982 ",(0,s.jsx)(n.code,{children:"feat"})," \u6216 ",(0,s.jsx)(n.code,{children:"fix"})," \uff0c\n\u5176\u540e\u63a5",(0,s.jsx)(n.strong,{children:"\u53ef\u9009\u7684"}),"\u8303\u56f4\u5b57\u6bb5\uff0c",(0,s.jsx)(n.strong,{children:"\u53ef\u9009\u7684"})," ",(0,s.jsx)(n.code,{children:"!"}),"\uff0c\u4ee5\u53ca",(0,s.jsx)(n.strong,{children:"\u5fc5\u8981\u7684"}),"\u5192\u53f7\uff08\u82f1\u6587\u534a\u89d2\uff09\u548c\u7a7a\u683c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u4e00\u4e2a\u63d0\u4ea4\u4e3a\u5e94\u7528\u6216\u7c7b\u5e93\u5b9e\u73b0\u4e86\u65b0\u529f\u80fd\u65f6\uff0c",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"feat"})," \u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u4e00\u4e2a\u63d0\u4ea4\u4e3a\u5e94\u7528\u4fee\u590d\u4e86 bug \u65f6\uff0c",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"fix"})," \u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8303\u56f4\u5b57\u6bb5",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u8ddf\u968f\u5728\u7c7b\u578b\u5b57\u6bb5\u540e\u9762\u3002\u8303\u56f4",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u662f\u4e00\u4e2a\u63cf\u8ff0\u67d0\u90e8\u5206\u4ee3\u7801\u7684\u540d\u8bcd\uff0c\u5e76\u7528\u5706\u62ec\u53f7\u5305\u56f4\uff0c\u4f8b\u5982\uff1a ",(0,s.jsx)(n.code,{children:"fix(parser):"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u63cf\u8ff0\u5b57\u6bb5",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u76f4\u63a5\u8ddf\u5728 ",(0,s.jsx)(n.code,{children:"<\u7c7b\u578b>(\u8303\u56f4)"})," \u524d\u7f00\u7684\u5192\u53f7\u548c\u7a7a\u683c\u4e4b\u540e\u3002\n\u63cf\u8ff0\u6307\u7684\u662f\u5bf9\u4ee3\u7801\u53d8\u66f4\u7684\u7b80\u77ed\u603b\u7ed3\uff0c\u4f8b\u5982\uff1a ",(0,s.jsx)(n.em,{children:"fix: array parsing issue when multiple spaces were contained in string"})," \u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u7b80\u77ed\u63cf\u8ff0\u4e4b\u540e\uff0c",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u7f16\u5199\u8f83\u957f\u7684\u63d0\u4ea4\u6b63\u6587\uff0c\u4e3a\u4ee3\u7801\u53d8\u66f4\u63d0\u4f9b\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u6b63\u6587",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u8d77\u59cb\u4e8e\u63cf\u8ff0\u5b57\u6bb5\u7ed3\u675f\u7684\u4e00\u4e2a\u7a7a\u884c\u540e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63d0\u4ea4\u7684\u6b63\u6587\u5185\u5bb9\u81ea\u7531\u7f16\u5199\uff0c\u5e76",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u4f7f\u7528\u7a7a\u884c\u5206\u9694\u4e0d\u540c\u6bb5\u843d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u6b63\u6587\u7ed3\u675f\u7684\u4e00\u4e2a\u7a7a\u884c\u4e4b\u540e\uff0c",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u7f16\u5199\u4e00\u884c\u6216\u591a\u884c\u811a\u6ce8\u3002\u6bcf\u884c\u811a\u6ce8\u90fd",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u5305\u542b\n\u4e00\u4e2a\u4ee4\u724c\uff08token\uff09\uff0c\u540e\u9762\u7d27\u8ddf ",(0,s.jsx)(n.code,{children:":<space>"})," \u6216 ",(0,s.jsx)(n.code,{children:"<space>#"})," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u540e\u9762\u518d\u7d27\u8ddf\u4ee4\u724c\u7684\u503c\uff08\u53d7\n",(0,s.jsx)(n.a,{href:"https://git-scm.com/docs/git-interpret-trailers",children:"git trailer convention"})," \u542f\u53d1\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u811a\u6ce8\u7684\u4ee4\u724c",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-"})," \u4f5c\u4e3a\u8fde\u5b57\u7b26\uff0c\u6bd4\u5982 ",(0,s.jsx)(n.code,{children:"Acked-by"})," (\u8fd9\u6837\u6709\u52a9\u4e8e\n\u533a\u5206\u811a\u6ce8\u548c\u591a\u884c\u6b63\u6587)\u3002\u6709\u4e00\u79cd\u4f8b\u5916\u60c5\u51b5\u5c31\u662f ",(0,s.jsx)(n.code,{children:"BREAKING CHANGE"}),"\uff0c\u5b83",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u4ee4\u724c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u811a\u6ce8\u7684\u503c",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u5305\u542b\u7a7a\u683c\u548c\u6362\u884c\uff0c\u503c\u7684\u89e3\u6790\u8fc7\u7a0b",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u76f4\u5230\u4e0b\u4e00\u4e2a\u811a\u6ce8\u7684\u4ee4\u724c/\u5206\u9694\u7b26\u51fa\u73b0\u4e3a\u6b62\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7834\u574f\u6027\u53d8\u66f4",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u5728\u63d0\u4ea4\u4fe1\u606f\u4e2d\u6807\u8bb0\u51fa\u6765\uff0c\u8981\u4e48\u5728 ",(0,s.jsx)(n.code,{children:"<\u7c7b\u578b>"}),"(\u8303\u56f4) \u524d\u7f00\u4e2d\u6807\u8bb0\uff0c\u8981\u4e48\u4f5c\u4e3a\u811a\u6ce8\u7684\u4e00\u9879\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5305\u542b\u5728\u811a\u6ce8\u4e2d\u65f6\uff0c\u7834\u574f\u6027\u53d8\u66f4",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u5305\u542b\u5927\u5199\u7684\u6587\u672c ",(0,s.jsx)(n.code,{children:"BREAKING CHANGE"}),"\uff0c\u540e\u9762\u7d27\u8ddf\u7740\u5192\u53f7\u3001\u7a7a\u683c\uff0c\u7136\u540e\u662f\u63cf\u8ff0\uff0c\u4f8b\u5982\uff1a\n",(0,s.jsx)(n.em,{children:"BREAKING CHANGE: environment variables now take precedence over config files"})," \u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5305\u542b\u5728 ",(0,s.jsx)(n.code,{children:"<\u7c7b\u578b>"}),"(\u8303\u56f4) \u524d\u7f00\u65f6\uff0c\u7834\u574f\u6027\u53d8\u66f4",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u901a\u8fc7\u628a ",(0,s.jsx)(n.code,{children:"!"})," \u76f4\u63a5\u653e\u5728 ",(0,s.jsx)(n.code,{children:":"})," \u524d\u9762\u6807\u8bb0\u51fa\u6765\u3002\n\u5982\u679c\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"!"}),"\uff0c\u90a3\u4e48\u811a\u6ce8\u4e2d",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u4e0d\u5199 ",(0,s.jsx)(n.code,{children:"BREAKING CHANGE:"}),"\uff0c\n\u540c\u65f6\u63d0\u4ea4\u4fe1\u606f\u7684\u63cf\u8ff0\u4e2d",(0,s.jsx)(n.strong,{children:"\u5e94\u8be5"}),"\u7528\u6765\u63cf\u8ff0\u7834\u574f\u6027\u53d8\u66f4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u63d0\u4ea4\u8bf4\u660e\u4e2d\uff0c",(0,s.jsx)(n.strong,{children:"\u53ef\u4ee5"}),"\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"feat"})," \u548c ",(0,s.jsx)(n.code,{children:"fix"})," \u4e4b\u5916\u7684\u7c7b\u578b\uff0c\u6bd4\u5982\uff1a",(0,s.jsx)(n.em,{children:"docs: updated ref docs."})," \u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5de5\u5177\u7684\u5b9e\u73b0\u5fc5\u987b",(0,s.jsx)(n.strong,{children:"\u4e0d\u533a\u5206"}),"\u5927\u5c0f\u5199\u5730\u89e3\u6790\u6784\u6210\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u7684\u4fe1\u606f\u5355\u5143\uff0c\u53ea\u6709 ",(0,s.jsx)(n.code,{children:"BREAKING CHANGE"})," ",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u662f\u5927\u5199\u7684\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["BREAKING-CHANGE \u4f5c\u4e3a\u811a\u6ce8\u7684\u4ee4\u724c\u65f6",(0,s.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u662f BREAKING CHANGE \u7684\u540c\u4e49\u8bcd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u81ea\u52a8\u5316\u751f\u6210 CHANGELOG\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e\u63d0\u4ea4\u7684\u7c7b\u578b\uff0c\u81ea\u52a8\u51b3\u5b9a\u8bed\u4e49\u5316\u7684\u7248\u672c\u53d8\u66f4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5411\u540c\u4e8b\u3001\u516c\u4f17\u4e0e\u5176\u4ed6\u5229\u76ca\u5173\u7cfb\u8005\u4f20\u8fbe\u53d8\u5316\u7684\u6027\u8d28\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u89e6\u53d1\u6784\u5efa\u548c\u90e8\u7f72\u6d41\u7a0b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8ba9\u4eba\u4eec\u63a2\u7d22\u4e00\u4e2a\u66f4\u52a0\u7ed3\u6784\u5316\u7684\u63d0\u4ea4\u5386\u53f2\uff0c\u4ee5\u4fbf\u964d\u4f4e\u5bf9\u4f60\u7684\u9879\u76ee\u505a\u51fa\u8d21\u732e\u7684\u96be\u5ea6\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"\u5728\u521d\u59cb\u5f00\u53d1\u9636\u6bb5\u6211\u8be5\u5982\u4f55\u5904\u7406\u63d0\u4ea4\u8bf4\u660e",children:"\u5728\u521d\u59cb\u5f00\u53d1\u9636\u6bb5\u6211\u8be5\u5982\u4f55\u5904\u7406\u63d0\u4ea4\u8bf4\u660e\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5efa\u8bae\u4f60\u6309\u7167\u5047\u8bbe\u4f60\u5df2\u53d1\u5e03\u4e86\u4ea7\u54c1\u90a3\u6837\u6765\u5904\u7406\u3002\u56e0\u4e3a\u901a\u5e38\u603b ",(0,s.jsx)(n.em,{children:"\u6709\u4eba"})," \u4f7f\u7528\u4f60\u7684\u8f6f\u4ef6\uff0c\u5373\u4fbf\u90a3\u662f\u4f60\u8f6f\u4ef6\u5f00\u53d1\u7684\u540c\u4e8b\u4eec\u3002\u4ed6\u4eec\u4f1a\u5e0c\u671b\u77e5\u9053\u8bf8\u5982\u4fee\u590d\u4e86\u4ec0\u4e48\u3001\u54ea\u91cc\u4e0d\u517c\u5bb9\u7b49\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u63d0\u4ea4\u6807\u9898\u4e2d\u7684\u7c7b\u578b\u662f\u5927\u5199\u8fd8\u662f\u5c0f\u5199",children:"\u63d0\u4ea4\u6807\u9898\u4e2d\u7684\u7c7b\u578b\u662f\u5927\u5199\u8fd8\u662f\u5c0f\u5199?"}),"\n",(0,s.jsx)(n.p,{children:"\u5927\u5c0f\u5199\u90fd\u53ef\u4ee5\uff0c\u4f46\u6700\u597d\u662f\u4e00\u81f4\u7684\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5982\u679c\u63d0\u4ea4\u7b26\u5408\u591a\u79cd\u7c7b\u578b\u6211\u8be5\u5982\u4f55\u64cd\u4f5c",children:"\u5982\u679c\u63d0\u4ea4\u7b26\u5408\u591a\u79cd\u7c7b\u578b\u6211\u8be5\u5982\u4f55\u64cd\u4f5c\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u56de\u9000\u5e76\u5c3d\u53ef\u80fd\u521b\u5efa\u591a\u6b21\u63d0\u4ea4\u3002\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u7684\u597d\u5904\u4e4b\u4e00\u662f\u80fd\u591f\u4fc3\u4f7f\u6211\u4eec\u505a\u51fa\u66f4\u6709\u7ec4\u7ec7\u7684\u63d0\u4ea4\u548c PR\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8fd9\u4e0d\u4f1a\u963b\u788d\u5feb\u901f\u5f00\u53d1\u548c\u8fed\u4ee3\u5417",children:"\u8fd9\u4e0d\u4f1a\u963b\u788d\u5feb\u901f\u5f00\u53d1\u548c\u8fed\u4ee3\u5417\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u5b83\u963b\u788d\u7684\u662f\u4ee5\u6742\u4e71\u65e0\u7ae0\u7684\u65b9\u5f0f\u5feb\u901f\u524d\u8fdb\u3002\u5b83\u52a9\u4f60\u80fd\u5728\u6a2a\u8de8\u591a\u4e2a\u9879\u76ee\u4ee5\u53ca\u548c\u591a\u4e2a\u8d21\u732e\u8005\u534f\u4f5c\u65f6\u957f\u671f\u5730\u5feb\u901f\u6f14\u8fdb\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u4f1a\u8ba9\u5f00\u53d1\u8005\u53d7\u9650\u4e8e\u63d0\u4ea4\u7684\u7c7b\u578b\u5417\u56e0\u4e3a\u4ed6\u4eec\u4f1a\u60f3\u7740\u5df2\u63d0\u4f9b\u7684\u7c7b\u578b",children:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u4f1a\u8ba9\u5f00\u53d1\u8005\u53d7\u9650\u4e8e\u63d0\u4ea4\u7684\u7c7b\u578b\u5417\uff08\u56e0\u4e3a\u4ed6\u4eec\u4f1a\u60f3\u7740\u5df2\u63d0\u4f9b\u7684\u7c7b\u578b\uff09\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u9f13\u52b1\u6211\u4eec\u66f4\u591a\u5730\u4f7f\u7528\u67d0\u4e9b\u7c7b\u578b\u7684\u63d0\u4ea4\uff0c\u6bd4\u5982 ",(0,s.jsx)(n.code,{children:"fixes"}),"\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u7684\u7075\u6d3b\u6027\u4e5f\u5141\u8bb8\u4f60\u7684\u56e2\u961f\u4f7f\u7528\u81ea\u5df1\u7684\u7c7b\u578b\uff0c\u5e76\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u66f4\u6539\u8fd9\u4e9b\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8fd9\u548c-semver-\u6709\u4ec0\u4e48\u5173\u8054\u5462",children:"\u8fd9\u548c SemVer \u6709\u4ec0\u4e48\u5173\u8054\u5462\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"fix"})," \u7c7b\u578b\u63d0\u4ea4\u5e94\u5f53\u5bf9\u5e94\u5230 ",(0,s.jsx)(n.code,{children:"PATCH"})," \u7248\u672c\u3002",(0,s.jsx)(n.code,{children:"feat"})," \u7c7b\u578b\u63d0\u4ea4\u5e94\u8be5\u5bf9\u5e94\u5230 ",(0,s.jsx)(n.code,{children:"MINOR"})," \u7248\u672c\u3002\u5e26\u6709 ",(0,s.jsx)(n.code,{children:"BREAKING CHANGE"})," \u7684\u63d0\u4ea4\u4e0d\u7ba1\u7c7b\u578b\u5982\u4f55\uff0c\u90fd\u5e94\u8be5\u5bf9\u5e94\u5230 ",(0,s.jsx)(n.code,{children:"MAJOR"})," \u7248\u672c\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u6211\u5bf9\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u505a\u4e86\u5f62\u5982-jameswomackconventional-commit-spec-\u7684\u6269\u5c55\u8be5\u5982\u4f55\u7248\u672c\u5316\u7ba1\u7406\u8fd9\u4e9b\u6269\u5c55\u5462",children:["\u6211\u5bf9\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u505a\u4e86\u5f62\u5982 ",(0,s.jsx)(n.code,{children:"@jameswomack/conventional-commit-spec"})," \u7684\u6269\u5c55\uff0c\u8be5\u5982\u4f55\u7248\u672c\u5316\u7ba1\u7406\u8fd9\u4e9b\u6269\u5c55\u5462\uff1f"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 SemVer \u6765\u53d1\u5e03\u4f60\u5bf9\u4e8e\u8fd9\u4e2a\u89c4\u8303\u7684\u6269\u5c55\uff08\u5e76\u9f13\u52b1\u4f60\u521b\u5efa\u8fd9\u4e9b\u6269\u5c55\uff01\uff09"}),"\n",(0,s.jsx)(n.h3,{id:"\u5982\u679c\u6211\u4e0d\u5c0f\u5fc3\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u63d0\u4ea4\u7c7b\u578b\u8be5\u600e\u4e48\u529e\u5462",children:"\u5982\u679c\u6211\u4e0d\u5c0f\u5fc3\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u63d0\u4ea4\u7c7b\u578b\uff0c\u8be5\u600e\u4e48\u529e\u5462\uff1f"}),"\n",(0,s.jsxs)(n.h4,{id:"\u5f53\u4f60\u4f7f\u7528\u4e86\u5728\u89c4\u8303\u4e2d\u4f46\u9519\u8bef\u7684\u7c7b\u578b\u65f6\u4f8b\u5982\u5c06-feat-\u5199\u6210\u4e86-fix",children:["\u5f53\u4f60\u4f7f\u7528\u4e86\u5728\u89c4\u8303\u4e2d\u4f46\u9519\u8bef\u7684\u7c7b\u578b\u65f6\uff0c\u4f8b\u5982\u5c06 ",(0,s.jsx)(n.code,{children:"feat"})," \u5199\u6210\u4e86 ",(0,s.jsx)(n.code,{children:"fix"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5408\u5e76\u6216\u53d1\u5e03\u8fd9\u4e2a\u9519\u8bef\u4e4b\u524d\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"git rebase -i"})," \u6765\u7f16\u8f91\u63d0\u4ea4\u5386\u53f2\u3002\u800c\u5728\u53d1\u5e03\u4e4b\u540e\uff0c\u6839\u636e\u4f60\u4f7f\u7528\u7684\u5de5\u5177\u548c\u6d41\u7a0b\u4e0d\u540c\uff0c\u4f1a\u6709\u4e0d\u540c\u7684\u6e05\u7406\u65b9\u6848\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u5f53\u4f7f\u7528\u4e86-\u4e0d\u5728-\u89c4\u8303\u4e2d\u7684\u7c7b\u578b\u65f6\u4f8b\u5982\u5c06-feat-\u5199\u6210\u4e86-feet",children:["\u5f53\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.em,{children:"\u4e0d\u5728"})," \u89c4\u8303\u4e2d\u7684\u7c7b\u578b\u65f6\uff0c\u4f8b\u5982\u5c06 ",(0,s.jsx)(n.code,{children:"feat"})," \u5199\u6210\u4e86 ",(0,s.jsx)(n.code,{children:"feet"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6700\u574f\u7684\u573a\u666f\u4e0b\uff0c\u5373\u4fbf\u63d0\u4ea4\u6ca1\u6709\u6ee1\u8db3\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u7684\u89c4\u8303\uff0c\u4e5f\u4e0d\u4f1a\u662f\u4e16\u754c\u672b\u65e5\u3002\u8fd9\u53ea\u610f\u5473\u7740\u8fd9\u4e2a\u63d0\u4ea4\u4f1a\u88ab\u57fa\u4e8e\u89c4\u8303\u7684\u5de5\u5177\u9519\u8fc7\u800c\u5df2\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6240\u6709\u7684\u8d21\u732e\u8005\u90fd\u9700\u8981\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u5417",children:"\u6240\u6709\u7684\u8d21\u732e\u8005\u90fd\u9700\u8981\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u5417\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u5e76\u4e0d\uff01\u5982\u679c\u4f60\u4f7f\u7528\u57fa\u4e8e squash \u7684 Git \u5de5\u4f5c\u6d41\uff0c\u4e3b\u7ba1\u7ef4\u62a4\u8005\u53ef\u4ee5\u5728\u5408\u5e76\u65f6\u6e05\u7406\u63d0\u4ea4\u4fe1\u606f\u2014\u2014\u8fd9\u4e0d\u4f1a\u5bf9\u666e\u901a\u63d0\u4ea4\u8005\u4ea7\u751f\u989d\u5916\u7684\u8d1f\u62c5\u3002\n\u6709\u79cd\u5e38\u89c1\u7684\u5de5\u4f5c\u6d41\u662f\u8ba9 git \u7cfb\u7edf\u81ea\u52a8\u4ece pull request \u4e2d squash \u51fa\u63d0\u4ea4\uff0c\u5e76\u5411\u4e3b\u7ba1\u7ef4\u62a4\u8005\u63d0\u4f9b\u4e00\u4efd\u8868\u5355\uff0c\u7528\u4ee5\u5728\u5408\u5e76\u65f6\u8f93\u5165\u5408\u9002\u7684 git \u63d0\u4ea4\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u4e2d\u5982\u4f55\u5904\u7406\u8fd8\u539frevert\u63d0\u4ea4",children:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303\u4e2d\u5982\u4f55\u5904\u7406\u8fd8\u539f\uff08revert\uff09\u63d0\u4ea4?"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd8\u539f\u63d0\u4ea4\uff08Reverting\uff09\u4f1a\u6bd4\u8f83\u590d\u6742\uff1a\u4f60\u8fd8\u539f\u7684\u662f\u591a\u4e2a\u63d0\u4ea4\u5417\uff1f\u5982\u679c\u4f60\u8fd8\u539f\u4e86\u4e00\u4e2a\u529f\u80fd\u6a21\u5757\uff0c\u4e0b\u6b21\u53d1\u5e03\u7684\u5e94\u8be5\u662f\u8865\u4e01\u5417\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u4e0d\u80fd\u660e\u786e\u7684\u5b9a\u4e49\u8fd8\u539f\u884c\u4e3a\u3002\u6240\u4ee5\u6211\u4eec\u628a\u8fd9\u4e2a\u95ee\u9898\u7559\u7ed9\u5de5\u5177\u5f00\u53d1\u8005\uff0c\n\u57fa\u4e8e ",(0,s.jsx)(n.em,{children:"\u7c7b\u578b"})," \u548c ",(0,s.jsx)(n.em,{children:"\u811a\u6ce8"})," \u7684\u7075\u6d3b\u6027\u6765\u5f00\u53d1\u4ed6\u4eec\u81ea\u5df1\u7684\u8fd8\u539f\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u79cd\u5efa\u8bae\u662f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"revert"})," \u7c7b\u578b\uff0c\u548c\u4e00\u4e2a\u6307\u5411\u88ab\u8fd8\u539f\u63d0\u4ea4\u6458\u8981\u7684\u811a\u6ce8\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"revert: let us never again speak of the noodle incident\nRefs: 676104e, a215868\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(96540);const r={},c=s.createContext(r);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);