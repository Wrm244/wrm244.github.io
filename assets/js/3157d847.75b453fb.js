"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5068],{38655:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),l=s(28453);const r={id:"Flowable",slug:"/Flowable",title:"Flowable",author:"RiverMountain",date:"2024/08/06",tags:["Java","\u6846\u67b6"],keywords:["\u6d41\u7a0b\u8bbe\u8ba1"],description:"Flowable\u662f\u4e00\u4e2a\u4f7f\u7528Java\u7f16\u5199\u7684\u8f7b\u91cf\u7ea7\u4e1a\u52a1\u6d41\u7a0b\u5f15\u64ce\u3002",last_update:{date:"2024/08/07"}},t=void 0,a={id:"stack/java/\u9879\u76ee/Flowable/Flowable",title:"Flowable",description:"Flowable\u662f\u4e00\u4e2a\u4f7f\u7528Java\u7f16\u5199\u7684\u8f7b\u91cf\u7ea7\u4e1a\u52a1\u6d41\u7a0b\u5f15\u64ce\u3002",source:"@site/docs/stack/java/\u9879\u76ee/Flowable/Flowable.md",sourceDirName:"stack/java/\u9879\u76ee/Flowable",slug:"/Flowable",permalink:"/docs/Flowable",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Java",permalink:"/docs/tags/java"},{inline:!0,label:"\u6846\u67b6",permalink:"/docs/tags/\u6846\u67b6"}],version:"current",frontMatter:{id:"Flowable",slug:"/Flowable",title:"Flowable",author:"RiverMountain",date:"2024/08/06",tags:["Java","\u6846\u67b6"],keywords:["\u6d41\u7a0b\u8bbe\u8ba1"],description:"Flowable\u662f\u4e00\u4e2a\u4f7f\u7528Java\u7f16\u5199\u7684\u8f7b\u91cf\u7ea7\u4e1a\u52a1\u6d41\u7a0b\u5f15\u64ce\u3002",last_update:{date:"2024/08/07"}},sidebar:"stack",previous:{title:"\u81ea\u5b9a\u4e49Spring\u6846\u67b6",permalink:"/docs/DP_7"},next:{title:"Nacos\u66f4\u6362\u8fbe\u68a6\u6570\u636e\u5e93",permalink:"/docs/Nacos-dm8"}},c={},d=[{value:"flowable \u4efb\u52a1\u591a\u5b9e\u4f8b",id:"flowable-\u4efb\u52a1\u591a\u5b9e\u4f8b",level:2},{value:"\u6982\u5ff5\u90e8\u5206",id:"\u6982\u5ff5\u90e8\u5206",level:3},{value:"\u4ee3\u7801\u90e8\u5206",id:"\u4ee3\u7801\u90e8\u5206",level:3},{value:"\u8bbe\u7f6e\u6d41\u7a0b\u53d8\u91cf\u7684\u56db\u79cd\u65b9\u5f0f",id:"\u8bbe\u7f6e\u6d41\u7a0b\u53d8\u91cf\u7684\u56db\u79cd\u65b9\u5f0f",level:2},{value:"\u5168\u5c40\u6d41\u7a0b\u53d8\u91cf\u8bbe\u8ba1",id:"\u5168\u5c40\u6d41\u7a0b\u53d8\u91cf\u8bbe\u8ba1",level:3},{value:"\u542f\u52a8\u524d\u8bbe\u7f6e",id:"\u542f\u52a8\u524d\u8bbe\u7f6e",level:4},{value:"\u901a\u8fc7 Task \u8bbe\u7f6e(\u542f\u52a8\u6210\u529f\u540e\u8bbe\u7f6e)",id:"\u901a\u8fc7-task-\u8bbe\u7f6e\u542f\u52a8\u6210\u529f\u540e\u8bbe\u7f6e",level:4},{value:"\u5b8c\u6210\u4efb\u52a1\u65f6\u8bbe\u7f6e",id:"\u5b8c\u6210\u4efb\u52a1\u65f6\u8bbe\u7f6e",level:4},{value:"\u901a\u8fc7RuntimeService\u8bbe\u7f6e",id:"\u901a\u8fc7runtimeservice\u8bbe\u7f6e",level:4},{value:"\u672c\u5730\u6d41\u7a0b\u53d8\u91cf",id:"\u672c\u5730\u6d41\u7a0b\u53d8\u91cf",level:3},{value:"Task\u4efb\u52a1\u70b9\u76d1\u542c",id:"task\u4efb\u52a1\u70b9\u76d1\u542c",level:2},{value:"\u4efb\u52a1\u76d1\u542c\u5668\u7c7b\u578b",id:"\u4efb\u52a1\u76d1\u542c\u5668\u7c7b\u578b",level:3},{value:"\u5b9e\u4f8b\u5220\u9664\u601d\u8def",id:"\u5b9e\u4f8b\u5220\u9664\u601d\u8def",level:3}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",input:"input",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Flowable\u662f\u4e00\u4e2a\u4f7f\u7528Java\u7f16\u5199\u7684\u8f7b\u91cf\u7ea7\u4e1a\u52a1\u6d41\u7a0b\u5f15\u64ce\u3002Flowable\u6d41\u7a0b\u5f15\u64ce\u53ef\u7528\u4e8e\u90e8\u7f72BPMN 2.0\u6d41\u7a0b\u5b9a\u4e49\uff08\u7528\u4e8e\u5b9a\u4e49\u6d41\u7a0b\u7684\u884c\u4e1aXML\u6807\u51c6\uff09\uff0c \u521b\u5efa\u8fd9\u4e9b\u6d41\u7a0b\u5b9a\u4e49\u7684\u6d41\u7a0b\u5b9e\u4f8b\uff0c\u8fdb\u884c\u67e5\u8be2\uff0c\u8bbf\u95ee\u8fd0\u884c\u4e2d\u6216\u5386\u53f2\u7684\u6d41\u7a0b\u5b9e\u4f8b\u4e0e\u76f8\u5173\u6570\u636e\u3002"})}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD\nA[\u521d\u59cb\u5316\u6d41\u7a0b\u5f15\u64ce\uff08ProcessEngine\uff09] --\x3e B[\u8bbe\u8ba1\u5b9a\u4e49\u6d41\u7a0b\uff08BPMN 2.0\uff09]\nB --\x3e C[\u90e8\u7f72\u6d41\u7a0b\u5b9a\u4e49\uff08RepositoryService\uff09]\nC --\x3e D[\u542f\u52a8\u6d41\u7a0b\u5b9e\u4f8b]\nD --\x3e E[\u8bbe\u7f6e\u6d41\u7a0b\u53d8\u91cf\uff08Kv\uff09]\nE --\x3e F[\u6267\u884c\u6d41\u7a0b\u5b9e\u4f8b\u751f\u547d\u5468\u671f]\nF --\x3e G[\u4efb\u52a1\u5b8c\u6210]\nG --\x3e H[\u6d41\u7a0b\u7ed3\u675f]"}),"\n",(0,i.jsxs)(n.p,{children:["\u8282\u70b9\u7ed8\u56fe\u6d41\u7a0b\uff1a\n",(0,i.jsx)(n.img,{src:s(96291).A+"",width:"1769",height:"585"})]}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD \nA[\u5f00\u59cb] --\x3e B[\u521d\u59cb\u5316\u6d41\u7a0b\u5f15\u64ce] \nB --\x3e C[\u6839\u636e\u5b9e\u4f8bID\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b] \nC --\x3e D[\u901a\u8fc7\u5b9e\u4f8b\u83b7\u53d6\u6d41\u7a0b\u5b9a\u4e49] \nD --\x3e E[\u7ed8\u5236\u6d41\u7a0b\u56fe] \nE --\x3e F[\u9ad8\u4eae\u6d3b\u52a8\u8282\u70b9] \nF --\x3e G[ServletOutputStream\u8f93\u51fa\u56fe] \nG --\x3e H[\u7ed3\u675f]"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u7684\u529f\u80fd\uff1a"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u6d41\u7a0b\u5b9a\u4e49\u8bbe\u8ba1"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u6d41\u7a0b\n\u7f3a\u5931\u6216\u5f85\u6539\u8fdb\u7684\u529f\u80fd\uff1a"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5b9a\u4e49\u6d41\u7a0b\u6a21\u578b\u65f6\uff0c\u53ea\u80fd\u7528",(0,i.jsx)(n.code,{children:"${}"}),"\u53d8\u91cf\u63d2\u503c\u7b26\u53f7\u6765\u5f15\u5165\uff0c\u8fd9\u6d89\u53ca\u5230\u9700\u8981\u4fee\u6539\u540e\u7aef\u7f16\u7801"]}),"\n",(0,i.jsx)(n.li,{children:"\u53d1\u8d77\u4e8b\u52a1\u540e\u6ca1\u6709\u64a4\u9500\u5b9e\u4f8b\u7684\u63a5\u53e3\u6216\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"flowable-\u4efb\u52a1\u591a\u5b9e\u4f8b",children:"flowable \u4efb\u52a1\u591a\u5b9e\u4f8b"}),"\n",(0,i.jsx)(n.h3,{id:"\u6982\u5ff5\u90e8\u5206",children:"\u6982\u5ff5\u90e8\u5206"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f1a\u7b7e\uff1a\u6307\u540c\u4e00\u4e2a\u5ba1\u6279\u8282\u70b9\u8bbe\u7f6e\u591a\u4e2a\u4eba\uff0c\u5982ABC\u4e09\u4eba\uff0c\u4e09\u4eba\u4f1a\u540c\u65f6\u6536\u5230\u5ba1\u6279\uff0c\u9700\u5168\u90e8\u540c\u610f\u4e4b\u540e\uff0c\u5ba1\u6279\u624d\u53ef\u5230\u4e0b\u4e00\u5ba1\u6279\u8282\u70b9\uff1b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6216\u7b7e\uff1a\u6307\u540c\u4e00\u4e2a\u5ba1\u6279\u8282\u70b9\u8bbe\u7f6e\u591a\u4e2a\u4eba\uff0c\u5982ABC\u4e09\u4eba\uff0c\u4e09\u4eba\u4f1a\u540c\u65f6\u6536\u5230\u5ba1\u6279\uff0c\u53ea\u8981\u5176\u4e2d\u4efb\u610f\u4e00\u4eba\u5ba1\u6279\u5373\u53ef\u5230\u4e0b\u4e00\u5ba1\u6279\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e00\u4e2a\u6d3b\u52a8\u662f\u591a\u5b9e\u4f8b\uff0c\u5c06\u901a\u8fc7\u5728\u8be5\u6d3b\u52a8\u5e95\u90e8\u7684\u4e09\u6761\u77ed\u7ebf\u8868\u793a\u3002\u4e09\u6761\u7ad6\u7ebf\u4ee3\u8868\u5b9e\u4f8b\u4f1a\u5e76\u884c\u6267\u884c\uff0c\u800c\u4e09\u6761\u6a2a\u7ebf\u4ee3\u8868\u987a\u5e8f\u6267\u884c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(82392).A+"",width:"903",height:"381"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\u4e0a\u9762\u6d41\u7a0b\uff0c\u5728\u8bbe\u7f6e\u4e00\u7ea7\u90e8\u95e8\u521d\u5ba1\u65f6\uff0c\u8bbe\u7f6e\u5168\u5c40\u6d41\u7a0b\u53d8\u91cf\u4e3a\u5217\u8868\uff0c\u5bf9\u6216\u7b7e\u7684\u5ba1\u6838\u4eba\u5458\u8fdb\u884c\u5b89\u6392\u3002",(0,i.jsx)(n.strong,{children:"\u5176\u4e2d\u9700\u8981\u6ce8\u610f\u7684\u662f\u5b8c\u6210\u6761\u4ef6\u8bbe\u7f6e\u4e3a1\uff0c\u4ee3\u8868\u53ea\u8981\u5217\u8868\u7528\u6237\u4e2d\u5b58\u5728\u4e00\u4eba\u901a\u8fc7\u5ba1\u6838\u5373\u53ef\u8fdb\u884c\u4e0b\u4e2a\u6d41\u7a0b\u3002\u4f1a\u7b7e\u9009\u62e9100%\u5373\u53ef"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7801\u90e8\u5206",children:"\u4ee3\u7801\u90e8\u5206"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'if (Func.isEmpty(guideScreen.getId())) {\n            // \u4fdd\u5b58guideScreen\uff0c\u5199\u5165id,createUser\u7b49\u57fa\u672c\u8868\u4fe1\u606f\n            save(guideScreen);\n            List<String> taskUserList = new ArrayList<>();\n            Method method;\n            //\u8bfb\u53d6\u5bf9\u8c61\u4e2d\u7684taskUser1,taskUser2,taskUser3\n            for (int i = 1; i <= 3; i++) {\n                try {\n                    method = guideScreen.getClass().getMethod("getTaskUser" + i);\n                    //\u83b7\u53d6taskUser1,taskUser2,taskUser3\n                    if (Func.isNotEmpty(method.invoke(guideScreen))) {\n                        taskUserList.add(TaskUtil.getTaskUser(method.invoke(guideScreen).toString()));\n                    } else {\n                        break;\n                    }\n                } catch (Exception e) {\n                    log.error("\u83b7\u53d6taskUser{}\u5931\u8d25", i);\n                    e.printStackTrace();\n                }\n            }\n            // \u542f\u52a8\u6d41\u7a0b\n            Kv variables = Kv.create()\n                .set(ProcessConstant.TASK_VARIABLE_CREATE_USER, AuthUtil.getUserName())\n                .set("taskUserList", taskUserList)\n                .set("auditUser", TaskUtil.getTaskUser(Func.toStr(guideScreen.getAuditUser())));\n            R<BladeFlow> result = flowClient.startProcessInstanceById(guideScreen.getProcessDefinitionId(), FlowUtil.getBusinessKey(businessTable, String.valueOf(guideScreen.getId())), variables);\n            if (result.isSuccess()) {\n                log.debug("\u5f15\u5bfc\u5c4f\u5ba1\u6838\u6d41\u7a0b\u5df2\u542f\u52a8,\u6d41\u7a0bID:{}", result.getData().getProcessInstanceId());\n                // \u8fd4\u56de\u6d41\u7a0bid\u5199\u5165guideScreen\n                guideScreen.setProcessInstanceId(result.getData().getProcessInstanceId());\n                updateById(guideScreen);\n            } else {\n                System.out.println(result.getMsg());\n                throw new ServiceException("\u5f00\u542f\u5f15\u5bfc\u5c4f\u5ba1\u6838\u6d41\u7a0b\u5931\u8d25");\n            }\n        }else {\n            updateById(guideScreen);\n        }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u4ee3\u7801\u7684\u529f\u80fd\u662f\u4ece ",(0,i.jsx)(n.code,{children:"guideScreen"})," \u5bf9\u8c61\u4e2d\u8bfb\u53d6 ",(0,i.jsx)(n.code,{children:"taskUser1"}),", ",(0,i.jsx)(n.code,{children:"taskUser2"}),", ",(0,i.jsx)(n.code,{children:"taskUser3"})," \u8fd9\u4e09\u4e2a\u5c5e\u6027\u7684\u503c\uff0c\u5e76\u5c06\u8fd9\u4e9b\u503c\u5904\u7406\u540e\u6dfb\u52a0\u5230 ",(0,i.jsx)(n.code,{children:"taskUserList"})," \u4e2d\u3002\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u58f0\u660e Method \u5bf9\u8c61"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"Method method;//Method \u662f Java \u53cd\u5c04\uff08Reflection\uff09API \u4e2d\u7684\u4e00\u4e2a\u7c7b\uff0c\u5c5e\u4e8e java.lang.reflect \u5305\u3002\u5b83\u8868\u793a\u7684\u662f\u7c7b\u6216\u63a5\u53e3\u4e2d\u7684\u67d0\u4e2a\u5177\u4f53\u65b9\u6cd5\u7684\u62bd\u8c61\u3002\u901a\u8fc7 Method \u5bf9\u8c61\uff0c\u7a0b\u5e8f\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u5730\u8c03\u7528\u67d0\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u800c\u4e0d\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u660e\u786e\u5730\u77e5\u9053\u8fd9\u4e2a\u65b9\u6cd5\u7684\u540d\u79f0\u6216\u7b7e\u540d\u3002\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u91cc\u58f0\u660e\u4e86\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"Method"})," \u5bf9\u8c61\uff0c\u7528\u4e8e\u540e\u7eed\u52a8\u6001\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"guideScreen"})," \u5bf9\u8c61\u7684 ",(0,i.jsx)(n.code,{children:"getTaskUserX"})," \u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["\u5faa\u73af\u83b7\u53d6 ",(0,i.jsx)(n.code,{children:"taskUser1"}),", ",(0,i.jsx)(n.code,{children:"taskUser2"}),", ",(0,i.jsx)(n.code,{children:"taskUser3"})]}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"for (int i = 1; i <= 3; i++) {\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u5faa\u73af\u4ece ",(0,i.jsx)(n.code,{children:"i=1"})," \u5f00\u59cb\uff0c\u76f4\u5230 ",(0,i.jsx)(n.code,{children:"i=3"}),"\uff0c\u4e5f\u5c31\u662f\u5faa\u73af\u4e09\u6b21\uff0c\u7528\u6765\u4f9d\u6b21\u5904\u7406 ",(0,i.jsx)(n.code,{children:"taskUser1"}),", ",(0,i.jsx)(n.code,{children:"taskUser2"}),", \u548c ",(0,i.jsx)(n.code,{children:"taskUser3"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u52a8\u6001\u83b7\u53d6\u65b9\u6cd5\u5e76\u8c03\u7528"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'method = guideScreen.getClass().getMethod("getTaskUser" + i);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5faa\u73af\u5185\u90e8\uff0c\u901a\u8fc7\u5b57\u7b26\u4e32\u62fc\u63a5\u7684\u65b9\u5f0f\u52a8\u6001\u751f\u6210\u65b9\u6cd5\u540d\uff0c\u6bd4\u5982\u5f53 ",(0,i.jsx)(n.code,{children:"i=1"})," \u65f6\uff0c\u65b9\u6cd5\u540d\u5c31\u662f ",(0,i.jsx)(n.code,{children:"getTaskUser1"}),"\u3002\u63a5\u7740\u4f7f\u7528\u53cd\u5c04\u673a\u5236\u83b7\u53d6\u8fd9\u4e2a\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8c03\u7528\u65b9\u6cd5\u5e76\u5904\u7406\u7ed3\u679c"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"if (Func.isNotEmpty(method.invoke(guideScreen))) {\n    taskUserList.add(TaskUtil.getTaskUser(method.invoke(guideScreen).toString()));\n} else {\n    break;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"method.invoke(guideScreen)"})," \u8c03\u7528\u83b7\u53d6\u7684 ",(0,i.jsx)(n.code,{children:"getTaskUserX"})," \u65b9\u6cd5\uff0c\u53d6\u5f97\u8fd4\u56de\u503c\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8be5\u8fd4\u56de\u503c\u4e0d\u4e3a\u7a7a\uff08\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Func.isNotEmpty()"})," \u5224\u65ad\uff09\uff0c\u5219\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"TaskUtil.getTaskUser()"})," \u8fdb\u884c\u5904\u7406\uff0c\u5e76\u5c06\u7ed3\u679c\u6dfb\u52a0\u5230 ",(0,i.jsx)(n.code,{children:"taskUserList"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8be5\u8fd4\u56de\u503c\u4e3a\u7a7a\uff0c\u5219\u8df3\u51fa\u5faa\u73af\uff0c\u4e0d\u518d\u5904\u7406\u540e\u7eed\u7684 ",(0,i.jsx)(n.code,{children:"taskUserX"})," \u5c5e\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5f02\u5e38\u5904\u7406"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'} catch (Exception e) {\n    log.error("\u83b7\u53d6taskUser{}\u5931\u8d25", i);\n    e.printStackTrace();\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u5728\u83b7\u53d6\u65b9\u6cd5\u6216\u8c03\u7528\u65b9\u6cd5\u7684\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4efb\u4f55\u5f02\u5e38\uff0c\u4ee3\u7801\u4f1a\u6355\u83b7\u5e76\u8bb0\u5f55\u9519\u8bef\u65e5\u5fd7\uff0c\u65e5\u5fd7\u4fe1\u606f\u4e2d\u4f1a\u6807\u660e\u662f\u54ea\u4e2a ",(0,i.jsx)(n.code,{children:"taskUser"})," \u8bfb\u53d6\u5931\u8d25\uff0c\u540c\u65f6\u6253\u5370\u5f02\u5e38\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbe\u7f6e\u6d41\u7a0b\u53d8\u91cf\u7684\u56db\u79cd\u65b9\u5f0f",children:"\u8bbe\u7f6e\u6d41\u7a0b\u53d8\u91cf\u7684\u56db\u79cd\u65b9\u5f0f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6d41\u7a0b\u8bbe\u8ba1\u5206\u4e3a\u4e09\u79cd\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5168\u5c40\u6d41\u7a0b\u53d8\u91cf\uff1a\u5728\u6574\u4e2a\u6d41\u7a0b\u6267\u884c\u671f\u95f4\uff0c\u8fd9\u4e2a\u6d41\u7a0b\u53d8\u91cf\u90fd\u662f\u6709\u6548\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u672c\u5730\u6d41\u7a0b\u53d8\u91cf\uff1a\u8fd9\u4e2a\u53ea\u9488\u5bf9\u6d41\u7a0b\u4e2d\u67d0\u4e00\u4e2a\u5177\u4f53\u7684 Task\uff08\u4efb\u52a1\uff09\u6709\u6548\uff0c\u8fd9\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u8fd9\u4e2a\u6d41\u7a0b\u53d8\u91cf\u5c31\u5931\u6548\u4e86\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e34\u65f6\u6d41\u7a0b\u53d8\u91cf\uff1a\u987e\u540d\u601d\u4e49\u5c31\u662f\u4e34\u65f6\u7684\uff0c\u8fd9\u4e2a\u4e0d\u4f1a\u5b58\u5165\u5230\u6570\u636e\u5e93\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5168\u5c40\u6d41\u7a0b\u53d8\u91cf\u8bbe\u8ba1",children:"\u5168\u5c40\u6d41\u7a0b\u53d8\u91cf\u8bbe\u8ba1"}),"\n",(0,i.jsx)(n.h4,{id:"\u542f\u52a8\u524d\u8bbe\u7f6e",children:"\u542f\u52a8\u524d\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'Kv variables = Kv.create()\n                .set(ProcessConstant.TASK_VARIABLE_CREATE_USER, AuthUtil.getUserName())\n                .set("taskUserList", taskUserList)\n                .set("auditUser", TaskUtil.getTaskUser(User.toString));\nR<BladeFlow> result = flowClient.startProcessInstanceById(Id,variables);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u53d8\u91cf\u662f\u5bf9\u8c61\u65f6\u5019\u8bb0\u5f97\u4f20\u80fd\u591f\u5e8f\u5217\u5316\uff0c\u5373\u5b9e\u73b0\u4e86 Serializable \u63a5\u53e3\uff0c\u5177\u4f53\u53d8\u91cf\u5b58\u50a8\u8868\u4f4d\u7f6e\u5728",(0,i.jsx)(n.code,{children:"ACT_HI_VARINST"})," \u662f\u5b58\u50a8\u6d41\u7a0b\u6267\u884c\u7684\u5386\u53f2\u4fe1\u606f\u7684\uff0c",(0,i.jsx)(n.code,{children:"ACT_RU_VARIABLE"})," \u5219\u662f\u4fdd\u5b58\u6d41\u7a0b\u8fd0\u884c\u65f6\u5019\u7684\u4fe1\u606f\u7684\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u5173\u67e5\u8be2\u67e5\u9605\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.csdn.net/sinat_40572875/article/details/127883227",children:"Flowable \u8bbe\u7f6e\u6d41\u7a0b\u53d8\u91cf\u7684\u56db\u79cd\u65b9\u5f0f\u8be6\u89e3_flowable \u6d41\u7a0b\u53d8\u91cf-CSDN\u535a\u5ba2"})}),"\n",(0,i.jsx)(n.h4,{id:"\u901a\u8fc7-task-\u8bbe\u7f6e\u542f\u52a8\u6210\u529f\u540e\u8bbe\u7f6e",children:"\u901a\u8fc7 Task \u8bbe\u7f6e(\u542f\u52a8\u6210\u529f\u540e\u8bbe\u7f6e)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"taskService.setVariables(task.getId(),variables);//\u8bfb\u53d6Task\u7528set\u65b9\u6cd5\u5373\u53ef\u8bbe\u7f6e\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u5b8c\u6210\u4efb\u52a1\u65f6\u8bbe\u7f6e",children:"\u5b8c\u6210\u4efb\u52a1\u65f6\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"Map<String, Object> variables = flow.getVariables();\nif (variables == null) {\n    variables = Kv.create();\n}\nvariables.put(ProcessConstant.PASS_KEY, flow.isPass());\n// \u5b8c\u6210\u4efb\u52a1\ntaskService.complete(taskId, variables);//\u4f7f\u7528complete\u51fd\u6570\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u901a\u8fc7runtimeservice\u8bbe\u7f6e",children:"\u901a\u8fc7RuntimeService\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'Execution execution = runtimeService.createExecutionQuery().singleResult();\nruntimeService.setVariable(execution.getId(), "days", 10);\nMap<String, Object> variables = new HashMap<>();\nvariables.put("reason", "\u4f11\u606f\u4e00\u4e0b");\nvariables.put("startTime", new Date());\nruntimeService.setVariables(execution.getId(), variables);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u672c\u5730\u6d41\u7a0b\u53d8\u91cf",children:"\u672c\u5730\u6d41\u7a0b\u53d8\u91cf"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u5730\u6d41\u7a0b\u4e5f\u5c31\u662f\u6bcf\u4e2aTask\u7684\u4e13\u5c5e\u53d8\u91cf\uff0c\u901a\u8fc7\u8fd9\u4e2aTask\u4f1a\u91ca\u653e\u8fd9\u4e2a\u53d8\u91cf"}),"\n",(0,i.jsx)(n.h2,{id:"task\u4efb\u52a1\u70b9\u76d1\u542c",children:"Task\u4efb\u52a1\u70b9\u76d1\u542c"}),"\n",(0,i.jsx)(n.h3,{id:"\u4efb\u52a1\u76d1\u542c\u5668\u7c7b\u578b",children:"\u4efb\u52a1\u76d1\u542c\u5668\u7c7b\u578b"}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"create\uff1a\u5728\u4efb\u52a1\u521b\u5efa\u4e14\u6240\u6709\u4efb\u52a1\u5c5e\u6027\u8bbe\u7f6e\u5b8c\u6210\u4e4b\u540e\u624d\u89e6\u53d1\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"assignment\uff1a\u5728\u4efb\u52a1\u88ab\u5206\u914d\u7ed9\u67d0\u4e2a\u73ed\u91cc\u4eba\u4e4b\u540e\u89e6\u53d1\uff0c\u5b83\u662f\u5728create\u4e8b\u4ef6\u89e6\u53d1\u524d\u88ab\u89e6\u53d1\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"complete\uff1a\u5728\u914d\u7f6e\u4e86\u76d1\u542c\u5668\u7684\u4efb\u52a1\u5b8c\u6210\u65f6\u89e6\u53d1\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fd0\u884c\u671f\u4efb\u52a1\u5220\u9664\u4e4b\u524d\u89e6\u53d1\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"delete\uff1a\u4efb\u52a1\u5220\u9664\u89e6\u53d1"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u4f8b\u5220\u9664\u601d\u8def",children:"\u5b9e\u4f8b\u5220\u9664\u601d\u8def"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'public boolean deleteProcessGuideScreen(String processInstanceId) {\n        // \u83b7\u53d6\u4e1a\u52a1\u8868\n        String businessTable = FlowUtil.getBusinessTable(ProcessConstant.GUIDE_SCREEN_KEY);\n\n        if (Func.isNotEmpty(businessTable)) {\n            // \u5220\u9664\u4e1a\u52a1\u6570\u636e\uff0c\u5e76\u68c0\u67e5\u662f\u5426\u6210\u529f\n            int rowsAffected = baseMapper.deleteByProcessInstanceId(processInstanceId);\n\n            if (rowsAffected <= 0) {\n                log.error("\u5220\u9664\u4e1a\u52a1\u6570\u636e\u5931\u8d25\uff0c\u6d41\u7a0b\u5b9e\u4f8bID: {}", processInstanceId);\n                return false;\n                // \u5220\u9664\u4e1a\u52a1\u6570\u636e\u5931\u8d25\uff0c\u8fd4\u56defalse\n            }\n\n            // \u5220\u9664\u6d41\u7a0b\u6570\u636e\n            R result = flowClient.deleteProcessInstance(processInstanceId, "\u5220\u9664\u6d41\u7a0b\u5b9e\u4f8b");\n\n            if (result.isSuccess()) {\n                log.info("\u5220\u9664\u6d41\u7a0b\u5b9e\u4f8b\u6210\u529f\uff0c\u6d41\u7a0b\u5b9e\u4f8bID: {}", processInstanceId);\n                return true;\n                // \u6210\u529f\u5220\u9664\u6d41\u7a0b\u5b9e\u4f8b\uff0c\u8fd4\u56detrue\n            } else {\n                log.error("\u5220\u9664\u6d41\u7a0b\u5b9e\u4f8b\u5931\u8d25\uff0c\u6d41\u7a0b\u5b9e\u4f8bID: {}", processInstanceId);\n                return false;\n                // \u5220\u9664\u6d41\u7a0b\u5b9e\u4f8b\u5931\u8d25\uff0c\u8fd4\u56defalse\n            }\n        }\n\n        // \u5982\u679c\u4e1a\u52a1\u8868\u4e3a\u7a7a\uff0c\u76f4\u63a5\u8fd4\u56detrue\n        return true;\n    }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},96291:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240808100040-e9167d1c7e7260ef62022972adc091df.png"},82392:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240827095230-6ff3b919fcf51f986fdfcc391746a3a5.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);