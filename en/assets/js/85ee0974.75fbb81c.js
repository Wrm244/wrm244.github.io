"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9324],{45432:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(74848),t=i(28453);const r={id:"DesignPattern2",slug:"/DP_2",title:"\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",author:"RiverMountain",date:"2023/06/01",tags:["Design_Pattern"],keywords:["Design_Pattern"],description:"Java\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",last_update:{date:"2023/06/01"}},c="\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",a={id:"stack/java/\u8bbe\u8ba1\u6a21\u5f0f/DesignPattern2",title:"\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",description:"Java\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",source:"@site/docs/stack/java/\u8bbe\u8ba1\u6a21\u5f0f/DP02.md",sourceDirName:"stack/java/\u8bbe\u8ba1\u6a21\u5f0f",slug:"/DP_2",permalink:"/en/docs/DP_2",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Design_Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"DesignPattern2",slug:"/DP_2",title:"\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",author:"RiverMountain",date:"2023/06/01",tags:["Design_Pattern"],keywords:["Design_Pattern"],description:"Java\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",last_update:{date:"2023/06/01"}},sidebar:"stack",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f\u6982\u8ff0",permalink:"/en/docs/DP_1"},next:{title:"\u521b\u5efa\u8005\u6a21\u5f0f",permalink:"/en/docs/DP_3"}},l={},d=[{value:"\u5f00\u95ed\u539f\u5219",id:"\u5f00\u95ed\u539f\u5219",level:2},{value:"\u91cc\u6c0f\u4ee3\u6362\u539f\u5219",id:"\u91cc\u6c0f\u4ee3\u6362\u539f\u5219",level:2},{value:"\u4f9d\u8d56\u5012\u8f6c\u539f\u5219",id:"\u4f9d\u8d56\u5012\u8f6c\u539f\u5219",level:2},{value:"\u63a5\u53e3\u9694\u79bb\u539f\u5219",id:"\u63a5\u53e3\u9694\u79bb\u539f\u5219",level:2},{value:"\u8fea\u7c73\u7279\u6cd5\u5219",id:"\u8fea\u7c73\u7279\u6cd5\u5219",level:2},{value:"\u5408\u6210\u590d\u7528\u539f\u5219",id:"\u5408\u6210\u590d\u7528\u539f\u5219",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",children:"\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u8f6f\u4ef6\u5f00\u53d1\u4e2d\uff0c\u4e3a\u4e86\u63d0\u9ad8\u8f6f\u4ef6\u7cfb\u7edf\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u590d\u7528\u6027\uff0c\u589e\u52a0\u8f6f\u4ef6\u7684\u53ef\u6269\u5c55\u6027\u548c\u7075\u6d3b\u6027\uff0c\u7a0b\u5e8f\u5458\u8981\u5c3d\u91cf\u6839\u636e6\u6761\u539f\u5219\u6765\u5f00\u53d1\u7a0b\u5e8f\uff0c\u4ece\u800c\u63d0\u9ad8\u8f6f\u4ef6\u5f00\u53d1\u6548\u7387\u3001\u8282\u7ea6\u8f6f\u4ef6\u5f00\u53d1\u6210\u672c\u548c\u7ef4\u62a4\u6210\u672c\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5f00\u95ed\u539f\u5219",children:"\u5f00\u95ed\u539f\u5219"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5bf9\u6269\u5c55\u5f00\u653e\uff0c\u5bf9\u4fee\u6539\u5173\u95ed"}),"\u3002\u5728\u7a0b\u5e8f\u9700\u8981\u8fdb\u884c\u62d3\u5c55\u7684\u65f6\u5019\uff0c\u4e0d\u80fd\u53bb\u4fee\u6539\u539f\u6709\u7684\u4ee3\u7801\uff0c\u5b9e\u73b0\u4e00\u4e2a\u70ed\u63d2\u62d4\u7684\u6548\u679c\u3002\u7b80\u8a00\u4e4b\uff0c\u662f\u4e3a\u4e86\u4f7f\u7a0b\u5e8f\u7684\u6269\u5c55\u6027\u597d\uff0c\u6613\u4e8e\u7ef4\u62a4\u548c\u5347\u7ea7\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u60f3\u8981\u8fbe\u5230\u8fd9\u6837\u7684\u6548\u679c\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u4e3a\u62bd\u8c61\u7075\u6d3b\u6027\u597d\uff0c\u9002\u5e94\u6027\u5e7f\uff0c\u53ea\u8981\u62bd\u8c61\u7684\u5408\u7406\uff0c\u53ef\u4ee5\u57fa\u672c\u4fdd\u6301\u8f6f\u4ef6\u67b6\u6784\u7684\u7a33\u5b9a\u3002\u800c\u8f6f\u4ef6\u4e2d\u6613\u53d8\u7684\u7ec6\u8282\u53ef\u4ee5\u4ece\u62bd\u8c61\u6d3e\u751f\u6765\u7684\u5b9e\u73b0\u7c7b\u6765\u8fdb\u884c\u6269\u5c55\uff0c\u5f53\u8f6f\u4ef6\u9700\u8981\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u53ea\u9700\u8981\u6839\u636e\u9700\u6c42\u91cd\u65b0\u6d3e\u751f\u4e00\u4e2a\u5b9e\u73b0\u7c7b\u6765\u6269\u5c55\u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u4ee5 ",(0,s.jsx)(e.code,{children:"\u641c\u72d7\u8f93\u5165\u6cd5"})," \u7684\u76ae\u80a4\u4e3a\u4f8b\u4ecb\u7ecd\u5f00\u95ed\u539f\u5219\u7684\u5e94\u7528\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u3010\u4f8b\u3011",(0,s.jsx)(e.code,{children:"\u641c\u72d7\u8f93\u5165\u6cd5"})," \u7684\u76ae\u80a4\u8bbe\u8ba1\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5206\u6790\uff1a",(0,s.jsx)(e.code,{children:"\u641c\u72d7\u8f93\u5165\u6cd5"})," \u7684\u76ae\u80a4\u662f\u8f93\u5165\u6cd5\u80cc\u666f\u56fe\u7247\u3001\u7a97\u53e3\u989c\u8272\u548c\u58f0\u97f3\u7b49\u5143\u7d20\u7684\u7ec4\u5408\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u559c\u7231\u66f4\u6362\u81ea\u5df1\u7684\u8f93\u5165\u6cd5\u7684\u76ae\u80a4\uff0c\u4e5f\u53ef\u4ee5\u4ece\u7f51\u4e0a\u4e0b\u8f7d\u65b0\u7684\u76ae\u80a4\u3002\u8fd9\u4e9b\u76ae\u80a4\u6709\u5171\u540c\u7684\u7279\u70b9\uff0c\u53ef\u4ee5\u4e3a\u5176\u5b9a\u4e49\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff08AbstractSkin\uff09\uff0c\u800c\u6bcf\u4e2a\u5177\u4f53\u7684\u76ae\u80a4\uff08DefaultSpecificSkin\u548cHeimaSpecificSkin\uff09\u662f\u5176\u5b50\u7c7b\u3002\u7528\u6237\u7a97\u4f53\u53ef\u4ee5\u6839\u636e\u9700\u8981\u9009\u62e9\u6216\u8005\u589e\u52a0\u65b0\u7684\u4e3b\u9898\uff0c\u800c\u4e0d\u9700\u8981\u4fee\u6539\u539f\u4ee3\u7801\uff0c\u6240\u4ee5\u5b83\u662f\u6ee1\u8db3\u5f00\u95ed\u539f\u5219\u7684\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(26741).A+"",width:"736",height:"278"})}),"\n",(0,s.jsx)(e.h2,{id:"\u91cc\u6c0f\u4ee3\u6362\u539f\u5219",children:"\u91cc\u6c0f\u4ee3\u6362\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u91cc\u6c0f\u4ee3\u6362\u539f\u5219\u662f\u9762\u5411\u5bf9\u8c61\u8bbe\u8ba1\u7684\u57fa\u672c\u539f\u5219\u4e4b\u4e00\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u91cc\u6c0f\u4ee3\u6362\u539f\u5219\uff1a\u4efb\u4f55\u57fa\u7c7b\u53ef\u4ee5\u51fa\u73b0\u7684\u5730\u65b9\uff0c\u5b50\u7c7b\u4e00\u5b9a\u53ef\u4ee5\u51fa\u73b0\u3002\u901a\u4fd7\u7406\u89e3\uff1a\u5b50\u7c7b\u53ef\u4ee5\u6269\u5c55\u7236\u7c7b\u7684\u529f\u80fd\uff0c\u4f46\u4e0d\u80fd\u6539\u53d8\u7236\u7c7b\u539f\u6709\u7684\u529f\u80fd\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u65f6\uff0c\u9664\u6dfb\u52a0\u65b0\u7684\u65b9\u6cd5\u5b8c\u6210\u65b0\u589e\u529f\u80fd\u5916\uff0c\u5c3d\u91cf",(0,s.jsx)(e.strong,{children:"\u4e0d\u8981\u91cd\u5199\u7236\u7c7b\u975e\u62bd\u8c61\u7684\u65b9\u6cd5"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u901a\u8fc7\u91cd\u5199\u7236\u7c7b\u7684\u65b9\u6cd5\u6765\u5b8c\u6210\u65b0\u7684\u529f\u80fd\uff0c\u8fd9\u6837\u5199\u8d77\u6765\u867d\u7136\u7b80\u5355\uff0c\u4f46\u662f\u6574\u4e2a\u7ee7\u627f\u4f53\u7cfb\u7684\u53ef\u590d\u7528\u6027\u4f1a\u6bd4\u8f83\u5dee\uff0c\u7279\u522b\u662f\u8fd0\u7528\u591a\u6001\u6bd4\u8f83\u9891\u7e41\u65f6\uff0c\u7a0b\u5e8f\u8fd0\u884c\u51fa\u9519\u7684\u6982\u7387\u4f1a\u975e\u5e38\u5927\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u770b\u4e00\u4e2a\u91cc\u6c0f\u66ff\u6362\u539f\u5219\u4e2d\u7ecf\u5178\u7684\u4e00\u4e2a\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.p,{children:"\u3010\u4f8b\u3011\u6b63\u65b9\u5f62\u4e0d\u662f\u957f\u65b9\u5f62\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6570\u5b66\u9886\u57df\u91cc\uff0c\u6b63\u65b9\u5f62\u6beb\u65e0\u7591\u95ee\u662f\u957f\u65b9\u5f62\uff0c\u5b83\u662f\u4e00\u4e2a\u957f\u5bbd\u76f8\u7b49\u7684\u957f\u65b9\u5f62\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u5f00\u53d1\u7684\u4e00\u4e2a\u4e0e\u51e0\u4f55\u56fe\u5f62\u76f8\u5173\u7684\u8f6f\u4ef6\u7cfb\u7edf\uff0c\u5c31\u53ef\u4ee5\u987a\u7406\u6210\u7ae0\u7684\u8ba9\u6b63\u65b9\u5f62\u7ee7\u627f\u81ea\u957f\u65b9\u5f62\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(55746).A+"",width:"796",height:"358"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u957f\u65b9\u5f62\u7c7b\uff08Rectangle\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public class Rectangle {\n    private double length;\n    private double width;\n\n    public double getLength() {\n        return length;\n    }\n\n    public void setLength(double length) {\n        this.length = length;\n    }\n\n    public double getWidth() {\n        return width;\n    }\n\n    public void setWidth(double width) {\n        this.width = width;\n    }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6b63\u65b9\u5f62\uff08Square\uff09\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4e8e\u6b63\u65b9\u5f62\u7684\u957f\u548c\u5bbd\u76f8\u540c\uff0c\u6240\u4ee5\u5728\u65b9\u6cd5setLength\u548csetWidth\u4e2d\uff0c\u5bf9\u957f\u5ea6\u548c\u5bbd\u5ea6\u90fd\u9700\u8981\u8d4b\u76f8\u540c\u503c\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public class Square extends Rectangle {\n    \n    public void setWidth(double width) {\n        super.setLength(width);\n        super.setWidth(width);\n    }\n\n    public void setLength(double length) {\n        super.setLength(length);\n        super.setWidth(length);\n    }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7c7bRectangleDemo\u662f\u6211\u4eec\u7684\u8f6f\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u6709\u4e00\u4e2aresize\u65b9\u6cd5\u4f9d\u8d56\u57fa\u7c7bRectangle\uff0cresize\u65b9\u6cd5\u662fRectandleDemo\u7c7b\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u6765\u5b9e\u73b0\u5bbd\u5ea6\u9010\u6e10\u589e\u957f\u7684\u6548\u679c\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class RectangleDemo {\n    \n    public static void resize(Rectangle rectangle) {\n        while (rectangle.getWidth() <= rectangle.getLength()) {\n            rectangle.setWidth(rectangle.getWidth() + 1);\n        }\n    }\n\n    //\u6253\u5370\u957f\u65b9\u5f62\u7684\u957f\u548c\u5bbd\n    public static void printLengthAndWidth(Rectangle rectangle) {\n        System.out.println(rectangle.getLength());\n        System.out.println(rectangle.getWidth());\n    }\n\n    public static void main(String[] args) {\n        Rectangle rectangle = new Rectangle();\n        rectangle.setLength(20);\n        rectangle.setWidth(10);\n        resize(rectangle);\n        printLengthAndWidth(rectangle);\n\n        System.out.println("============");\n\n        Rectangle rectangle1 = new Square();\n        rectangle1.setLength(10);\n        resize(rectangle1);\n        printLengthAndWidth(rectangle1);\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u8fd0\u884c\u4e00\u4e0b\u8fd9\u6bb5\u4ee3\u7801\u5c31\u4f1a\u53d1\u73b0\uff0c\u5047\u5982\u6211\u4eec\u628a\u4e00\u4e2a\u666e\u901a\u957f\u65b9\u5f62\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165resize\u65b9\u6cd5\uff0c\u5c31\u4f1a\u770b\u5230\u957f\u65b9\u5f62\u5bbd\u5ea6\u9010\u6e10\u589e\u957f\u7684\u6548\u679c\uff0c\u5f53\u5bbd\u5ea6\u5927\u4e8e\u957f\u5ea6,\u4ee3\u7801\u5c31\u4f1a\u505c\u6b62\uff0c\u8fd9\u79cd\u884c\u4e3a\u7684\u7ed3\u679c\u7b26\u5408\u6211\u4eec\u7684\u9884\u671f\uff1b\u5047\u5982\u6211\u4eec\u518d\u628a\u4e00\u4e2a\u6b63\u65b9\u5f62\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165resize\u65b9\u6cd5\u540e\uff0c\u5c31\u4f1a\u770b\u5230\u6b63\u65b9\u5f62\u7684\u5bbd\u5ea6\u548c\u957f\u5ea6\u90fd\u5728\u4e0d\u65ad\u589e\u957f\uff0c\u4ee3\u7801\u4f1a\u4e00\u76f4\u8fd0\u884c\u4e0b\u53bb\uff0c\u76f4\u81f3\u7cfb\u7edf\u4ea7\u751f\u6ea2\u51fa\u9519\u8bef\u3002\u6240\u4ee5\uff0c\u666e\u901a\u7684\u957f\u65b9\u5f62\u662f\u9002\u5408\u8fd9\u6bb5\u4ee3\u7801\u7684\uff0c\u6b63\u65b9\u5f62\u4e0d\u9002\u5408\u3002\n\u6211\u4eec\u5f97\u51fa\u7ed3\u8bba\uff1a\u5728resize\u65b9\u6cd5\u4e2d\uff0cRectangle\u7c7b\u578b\u7684\u53c2\u6570\u662f\u4e0d\u80fd\u88abSquare\u7c7b\u578b\u7684\u53c2\u6570\u6240\u4ee3\u66ff\uff0c\u5982\u679c\u8fdb\u884c\u4e86\u66ff\u6362\u5c31\u5f97\u4e0d\u5230\u9884\u671f\u7ed3\u679c\u3002\u56e0\u6b64\uff0cSquare\u7c7b\u548cRectangle\u7c7b\u4e4b\u95f4\u7684\u7ee7\u627f\u5173\u7cfb\u8fdd\u53cd\u4e86\u91cc\u6c0f\u4ee3\u6362\u539f\u5219\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u7ee7\u627f\u5173\u7cfb\u4e0d\u6210\u7acb\uff0c\u6b63\u65b9\u5f62\u4e0d\u662f\u957f\u65b9\u5f62\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u4f55\u6539\u8fdb\u5462\uff1f\u6b64\u65f6\u6211\u4eec\u9700\u8981\u91cd\u65b0\u8bbe\u8ba1\u4ed6\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u62bd\u8c61\u51fa\u6765\u4e00\u4e2a\u56db\u8fb9\u5f62\u63a5\u53e3(Quadrilateral)\uff0c\u8ba9Rectangle\u7c7b\u548cSquare\u7c7b\u5b9e\u73b0Quadrilateral\u63a5\u53e3"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(32238).A+"",width:"865",height:"358"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f9d\u8d56\u5012\u8f6c\u539f\u5219",children:"\u4f9d\u8d56\u5012\u8f6c\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u9ad8\u5c42\u6a21\u5757\u4e0d\u5e94\u8be5\u4f9d\u8d56\u4f4e\u5c42\u6a21\u5757\uff0c\u4e24\u8005\u90fd\u5e94\u8be5\u4f9d\u8d56\u5176\u62bd\u8c61\uff1b\u62bd\u8c61\u4e0d\u5e94\u8be5\u4f9d\u8d56\u7ec6\u8282\uff0c\u7ec6\u8282\u5e94\u8be5\u4f9d\u8d56\u62bd\u8c61\u3002\u7b80\u5355\u7684\u8bf4\u5c31\u662f\u8981\u6c42\u5bf9\u62bd\u8c61\u8fdb\u884c\u7f16\u7a0b\uff0c\u4e0d\u8981\u5bf9\u5b9e\u73b0\u8fdb\u884c\u7f16\u7a0b\uff0c\u8fd9\u6837\u5c31\u964d\u4f4e\u4e86\u5ba2\u6237\u4e0e\u5b9e\u73b0\u6a21\u5757\u95f4\u7684\u8026\u5408\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50\u6765\u7406\u89e3\u4f9d\u8d56\u5012\u8f6c\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u3010\u4f8b\u3011\u7ec4\u88c5\u7535\u8111"}),"\n",(0,s.jsx)(e.p,{children:"\u73b0\u8981\u7ec4\u88c5\u4e00\u53f0\u7535\u8111\uff0c\u9700\u8981\u914d\u4ef6cpu\uff0c\u786c\u76d8\uff0c\u5185\u5b58\u6761\u3002\u53ea\u6709\u8fd9\u4e9b\u914d\u7f6e\u90fd\u6709\u4e86\uff0c\u8ba1\u7b97\u673a\u624d\u80fd\u6b63\u5e38\u7684\u8fd0\u884c\u3002\u9009\u62e9cpu\u6709\u5f88\u591a\u9009\u62e9\uff0c\u5982Intel\uff0cAMD\u7b49\uff0c\u786c\u76d8\u53ef\u4ee5\u9009\u62e9\u5e0c\u6377\uff0c\u897f\u6570\u7b49\uff0c\u5185\u5b58\u6761\u53ef\u4ee5\u9009\u62e9\u91d1\u58eb\u987f\uff0c\u6d77\u76d7\u8239\u7b49\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7c7b\u56fe\u5982\u4e0b\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(7133).A+"",width:"793",height:"455"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5e0c\u6377\u786c\u76d8\u7c7b\uff08XiJieHardDisk\uff09:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class XiJieHardDisk implements HardDisk {\n\n    public void save(String data) {\n        System.out.println("\u4f7f\u7528\u5e0c\u6377\u786c\u76d8\u5b58\u50a8\u6570\u636e" + data);\n    }\n\n    public String get() {\n        System.out.println("\u4f7f\u7528\u5e0c\u6377\u5e0c\u6377\u786c\u76d8\u53d6\u6570\u636e");\n        return "\u6570\u636e";\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Intel\u5904\u7406\u5668\uff08IntelCpu\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class IntelCpu implements Cpu {\n\n    public void run() {\n        System.out.println("\u4f7f\u7528Intel\u5904\u7406\u5668");\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u91d1\u58eb\u987f\u5185\u5b58\u6761\uff08KingstonMemory\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class KingstonMemory implements Memory {\n\n    public void save() {\n        System.out.println("\u4f7f\u7528\u91d1\u58eb\u987f\u4f5c\u4e3a\u5185\u5b58\u6761");\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7535\u8111\uff08Computer\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class Computer {\n\n    private XiJieHardDisk hardDisk;\n    private IntelCpu cpu;\n    private KingstonMemory memory;\n\n    public IntelCpu getCpu() {\n        return cpu;\n    }\n\n    public void setCpu(IntelCpu cpu) {\n        this.cpu = cpu;\n    }\n\n    public KingstonMemory getMemory() {\n        return memory;\n    }\n\n    public void setMemory(KingstonMemory memory) {\n        this.memory = memory;\n    }\n\n    public XiJieHardDisk getHardDisk() {\n        return hardDisk;\n    }\n\n    public void setHardDisk(XiJieHardDisk hardDisk) {\n        this.hardDisk = hardDisk;\n    }\n\n    public void run() {\n        System.out.println("\u8ba1\u7b97\u673a\u5de5\u4f5c");\n        cpu.run();\n        memory.save();\n        String data = hardDisk.get();\n        System.out.println("\u4ece\u786c\u76d8\u4e2d\u83b7\u53d6\u7684\u6570\u636e\u4e3a\uff1a" + data);\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6d4b\u8bd5\u7c7b\uff08TestComputer\uff09\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u6d4b\u8bd5\u7c7b\u7528\u6765\u7ec4\u88c5\u7535\u8111\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public class TestComputer {\n    public static void main(String[] args) {\n        Computer computer = new Computer();\n        computer.setHardDisk(new XiJieHardDisk());\n        computer.setCpu(new IntelCpu());\n        computer.setMemory(new KingstonMemory());\n\n        computer.run();\n    }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u7ec4\u88c5\u4e86\u4e00\u53f0\u7535\u8111\uff0c\u4f46\u662f\u4f3c\u4e4e\u7ec4\u88c5\u7684\u7535\u8111\u7684cpu\u53ea\u80fd\u662fIntel\u7684\uff0c\u5185\u5b58\u6761\u53ea\u80fd\u662f\u91d1\u58eb\u987f\u7684\uff0c\u786c\u76d8\u53ea\u80fd\u662f\u5e0c\u6377\u7684\uff0c\u8fd9\u5bf9\u7528\u6237\u80af\u5b9a\u662f\u4e0d\u53cb\u597d\u7684\uff0c\u7528\u6237\u6709\u4e86\u673a\u7bb1\u80af\u5b9a\u662f\u60f3\u6309\u7167\u81ea\u5df1\u7684\u559c\u597d\uff0c\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u914d\u4ef6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u4f9d\u8d56\u5012\u8f6c\u539f\u5219\u8fdb\u884c\u6539\u8fdb\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee3\u7801\u6211\u4eec\u53ea\u9700\u8981\u4fee\u6539Computer\u7c7b\uff0c\u8ba9Computer\u7c7b\u4f9d\u8d56\u62bd\u8c61\uff08\u5404\u4e2a\u914d\u4ef6\u7684\u63a5\u53e3\uff09\uff0c\u800c\u4e0d\u662f\u4f9d\u8d56\u4e8e\u5404\u4e2a\u7ec4\u4ef6\u5177\u4f53\u7684\u5b9e\u73b0\u7c7b\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7c7b\u56fe\u5982\u4e0b\uff1a"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{src:i(64521).A+"",width:"859",height:"596"}),"\n",(0,s.jsx)(e.strong,{children:"\u7535\u8111\uff08Computer\uff09\uff1a"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class Computer {\n\n    private HardDisk hardDisk;\n    private Cpu cpu;\n    private Memory memory;\n\n    public HardDisk getHardDisk() {\n        return hardDisk;\n    }\n\n    public void setHardDisk(HardDisk hardDisk) {\n        this.hardDisk = hardDisk;\n    }\n\n    public Cpu getCpu() {\n        return cpu;\n    }\n\n    public void setCpu(Cpu cpu) {\n        this.cpu = cpu;\n    }\n\n    public Memory getMemory() {\n        return memory;\n    }\n\n    public void setMemory(Memory memory) {\n        this.memory = memory;\n    }\n\n    public void run() {\n        System.out.println("\u8ba1\u7b97\u673a\u5de5\u4f5c");\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9762\u5411\u5bf9\u8c61\u7684\u5f00\u53d1\u5f88\u597d\u7684\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u62bd\u8c61\u7684\u53d8\u5316\u6982\u7387\u5f88\u5c0f\uff0c\u8ba9\u7528\u6237\u7a0b\u5e8f\u4f9d\u8d56\u4e8e\u62bd\u8c61\uff0c\u5b9e\u73b0\u7684\u7ec6\u8282\u4e5f\u4f9d\u8d56\u4e8e\u62bd\u8c61\u3002\u5373\u4f7f\u5b9e\u73b0\u7ec6\u8282\u4e0d\u65ad\u53d8\u52a8\uff0c\u53ea\u8981\u62bd\u8c61\u4e0d\u53d8\uff0c\u5ba2\u6237\u7a0b\u5e8f\u5c31\u4e0d\u9700\u8981\u53d8\u5316\u3002\u8fd9\u5927\u5927\u964d\u4f4e\u4e86\u5ba2\u6237\u7a0b\u5e8f\u4e0e\u5b9e\u73b0\u7ec6\u8282\u7684\u8026\u5408\u5ea6\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u63a5\u53e3\u9694\u79bb\u539f\u5219",children:"\u63a5\u53e3\u9694\u79bb\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u5ba2\u6237\u7aef\u4e0d\u5e94\u8be5\u88ab\u8feb\u4f9d\u8d56\u4e8e\u5b83\u4e0d\u4f7f\u7528\u7684\u65b9\u6cd5\uff1b\u4e00\u4e2a\u7c7b\u5bf9\u53e6\u4e00\u4e2a\u7c7b\u7684\u4f9d\u8d56\u5e94\u8be5\u5efa\u7acb\u5728\u6700\u5c0f\u7684\u63a5\u53e3\u4e0a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50\u6765\u7406\u89e3\u63a5\u53e3\u9694\u79bb\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u3010\u4f8b\u3011\u5b89\u5168\u95e8\u6848\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"\u9ed1\u9a6c"}),"\u54c1\u724c\u7684\u5b89\u5168\u95e8\uff0c\u8be5\u5b89\u5168\u95e8\u5177\u6709\u9632\u706b\u3001\u9632\u6c34\u3001\u9632\u76d7\u7684\u529f\u80fd\u3002\u53ef\u4ee5\u5c06\u9632\u706b\uff0c\u9632\u6c34\uff0c\u9632\u76d7\u529f\u80fd\u63d0\u53d6\u6210\u4e00\u4e2a\u63a5\u53e3\uff0c\u5f62\u6210\u4e00\u5957\u89c4\u8303\u3002\u7c7b\u56fe\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(57605).A+"",width:"671",height:"158"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u7684\u8bbe\u8ba1\u6211\u4eec\u53d1\u73b0\u4e86\u5b83\u5b58\u5728\u7684\u95ee\u9898\uff0c\u9ed1\u9a6c\u54c1\u724c\u7684\u5b89\u5168\u95e8\u5177\u6709\u9632\u76d7\uff0c\u9632\u6c34\uff0c\u9632\u706b\u7684\u529f\u80fd\u3002\u73b0\u5728\u5982\u679c\u6211\u4eec\u8fd8\u9700\u8981\u518d\u521b\u5efa\u4e00\u4e2a\u4f20\u667a\u54c1\u724c\u7684\u5b89\u5168\u95e8\uff0c\u800c\u8be5\u5b89\u5168\u95e8\u53ea\u5177\u6709\u9632\u76d7\u3001\u9632\u6c34\u529f\u80fd\u5462\uff1f\u5f88\u663e\u7136\u5982\u679c\u5b9e\u73b0SafetyDoor\u63a5\u53e3\u5c31\u8fdd\u80cc\u4e86\u63a5\u53e3\u9694\u79bb\u539f\u5219\uff0c\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u8fdb\u884c\u4fee\u6539\u5462\uff1f\u770b\u5982\u4e0b\u7c7b\u56fe\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(16760).A+"",width:"617",height:"277"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"AntiTheft\uff08\u63a5\u53e3\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public interface AntiTheft {\n    void antiTheft();\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Fireproof\uff08\u63a5\u53e3\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public interface Fireproof {\n    void fireproof();\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Waterproof\uff08\u63a5\u53e3\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public interface Waterproof {\n    void waterproof();\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"HeiMaSafetyDoor\uff08\u7c7b\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class HeiMaSafetyDoor implements AntiTheft,Fireproof,Waterproof {\n    public void antiTheft() {\n        System.out.println("\u9632\u76d7");\n    }\n\n    public void fireproof() {\n        System.out.println("\u9632\u706b");\n    }\n\n\n    public void waterproof() {\n        System.out.println("\u9632\u6c34");\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"ItcastSafetyDoor\uff08\u7c7b\uff09\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class ItcastSafetyDoor implements AntiTheft,Fireproof {\n    public void antiTheft() {\n        System.out.println("\u9632\u76d7");\n    }\n\n    public void fireproof() {\n        System.out.println("\u9632\u706b");\n    }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u8fea\u7c73\u7279\u6cd5\u5219",children:"\u8fea\u7c73\u7279\u6cd5\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u8fea\u7c73\u7279\u6cd5\u5219\u53c8\u53eb\u6700\u5c11\u77e5\u8bc6\u539f\u5219\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53ea\u548c\u4f60\u7684\u76f4\u63a5\u670b\u53cb\u4ea4\u8c08\uff0c\u4e0d\u8ddf\u201c\u964c\u751f\u4eba\u201d\u8bf4\u8bdd\uff08Talk only to your immediate friends and not to strangers\uff09\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u542b\u4e49\u662f\uff1a\u5982\u679c\u4e24\u4e2a\u8f6f\u4ef6\u5b9e\u4f53\u65e0\u987b\u76f4\u63a5\u901a\u4fe1\uff0c\u90a3\u4e48\u5c31\u4e0d\u5e94\u5f53\u53d1\u751f\u76f4\u63a5\u7684\u76f8\u4e92\u8c03\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u65b9\u8f6c\u53d1\u8be5\u8c03\u7528\u3002\u5176\u76ee\u7684\u662f\u964d\u4f4e\u7c7b\u4e4b\u95f4\u7684\u8026\u5408\u5ea6\uff0c\u63d0\u9ad8\u6a21\u5757\u7684\u76f8\u5bf9\u72ec\u7acb\u6027\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8fea\u7c73\u7279\u6cd5\u5219\u4e2d\u7684\u201c\u670b\u53cb\u201d\u662f\u6307\uff1a\u5f53\u524d\u5bf9\u8c61\u672c\u8eab\u3001\u5f53\u524d\u5bf9\u8c61\u7684\u6210\u5458\u5bf9\u8c61\u3001\u5f53\u524d\u5bf9\u8c61\u6240\u521b\u5efa\u7684\u5bf9\u8c61\u3001\u5f53\u524d\u5bf9\u8c61\u7684\u65b9\u6cd5\u53c2\u6570\u7b49\uff0c\u8fd9\u4e9b\u5bf9\u8c61\u540c\u5f53\u524d\u5bf9\u8c61\u5b58\u5728\u5173\u8054\u3001\u805a\u5408\u6216\u7ec4\u5408\u5173\u7cfb\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u8fd9\u4e9b\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50\u6765\u7406\u89e3\u8fea\u7c73\u7279\u6cd5\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u3010\u4f8b\u3011\u660e\u661f\u4e0e\u7ecf\u7eaa\u4eba\u7684\u5173\u7cfb\u5b9e\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u660e\u661f\u7531\u4e8e\u5168\u8eab\u5fc3\u6295\u5165\u827a\u672f\uff0c\u6240\u4ee5\u8bb8\u591a\u65e5\u5e38\u4e8b\u52a1\u7531\u7ecf\u7eaa\u4eba\u8d1f\u8d23\u5904\u7406\uff0c\u5982\u548c\u7c89\u4e1d\u7684\u89c1\u9762\u4f1a\uff0c\u548c\u5a92\u4f53\u516c\u53f8\u7684\u4e1a\u52a1\u6d3d\u6de1\u7b49\u3002\u8fd9\u91cc\u7684\u7ecf\u7eaa\u4eba\u662f\u660e\u661f\u7684\u670b\u53cb\uff0c\u800c\u7c89\u4e1d\u548c\u5a92\u4f53\u516c\u53f8\u662f\u964c\u751f\u4eba\uff0c\u6240\u4ee5\u9002\u5408\u4f7f\u7528\u8fea\u7c73\u7279\u6cd5\u5219\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7c7b\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(60800).A+"",width:"885",height:"418"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u660e\u661f\u7c7b\uff08Star\uff09"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public class Star {\n    private String name;\n\n    public Star(String name) {\n        this.name=name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7c89\u4e1d\u7c7b\uff08Fans\uff09"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public class Fans {\n    private String name;\n\n    public Fans(String name) {\n        this.name=name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5a92\u4f53\u516c\u53f8\u7c7b\uff08Company\uff09"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public class Company {\n    private String name;\n\n    public Company(String name) {\n        this.name=name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7ecf\u7eaa\u4eba\u7c7b\uff08Agent\uff09"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public class Agent {\n    private Star star;\n    private Fans fans;\n    private Company company;\n\n    public void setStar(Star star) {\n        this.star = star;\n    }\n\n    public void setFans(Fans fans) {\n        this.fans = fans;\n    }\n\n    public void setCompany(Company company) {\n        this.company = company;\n    }\n\n    public void meeting() {\n        System.out.println(fans.getName() + "\u4e0e\u660e\u661f" + star.getName() + "\u89c1\u9762\u4e86\u3002");\n    }\n\n    public void business() {\n        System.out.println(company.getName() + "\u4e0e\u660e\u661f" + star.getName() + "\u6d3d\u6de1\u4e1a\u52a1\u3002");\n    }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u5408\u6210\u590d\u7528\u539f\u5219",children:"\u5408\u6210\u590d\u7528\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u5408\u6210\u590d\u7528\u539f\u5219\u662f\u6307\uff1a\u5c3d\u91cf\u5148\u4f7f\u7528\u7ec4\u5408\u6216\u8005\u805a\u5408\u7b49\u5173\u8054\u5173\u7cfb\u6765\u5b9e\u73b0\uff0c\u5176\u6b21\u624d\u8003\u8651\u4f7f\u7528\u7ee7\u627f\u5173\u7cfb\u6765\u5b9e\u73b0\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u5e38\u7c7b\u7684\u590d\u7528\u5206\u4e3a\u7ee7\u627f\u590d\u7528\u548c\u5408\u6210\u590d\u7528\u4e24\u79cd\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7ee7\u627f\u590d\u7528\u867d\u7136\u6709\u7b80\u5355\u548c\u6613\u5b9e\u73b0\u7684\u4f18\u70b9\uff0c\u4f46\u5b83\u4e5f\u5b58\u5728\u4ee5\u4e0b\u7f3a\u70b9\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u7ee7\u627f\u590d\u7528\u7834\u574f\u4e86\u7c7b\u7684\u5c01\u88c5\u6027\u3002\u56e0\u4e3a\u7ee7\u627f\u4f1a\u5c06\u7236\u7c7b\u7684\u5b9e\u73b0\u7ec6\u8282\u66b4\u9732\u7ed9\u5b50\u7c7b\uff0c\u7236\u7c7b\u5bf9\u5b50\u7c7b\u662f\u900f\u660e\u7684\uff0c\u6240\u4ee5\u8fd9\u79cd\u590d\u7528\u53c8\u79f0\u4e3a\u201c\u767d\u7bb1\u201d\u590d\u7528\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5b50\u7c7b\u4e0e\u7236\u7c7b\u7684\u8026\u5408\u5ea6\u9ad8\u3002\u7236\u7c7b\u7684\u5b9e\u73b0\u7684\u4efb\u4f55\u6539\u53d8\u90fd\u4f1a\u5bfc\u81f4\u5b50\u7c7b\u7684\u5b9e\u73b0\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u4e0d\u5229\u4e8e\u7c7b\u7684\u6269\u5c55\u4e0e\u7ef4\u62a4\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5b83\u9650\u5236\u4e86\u590d\u7528\u7684\u7075\u6d3b\u6027\u3002\u4ece\u7236\u7c7b\u7ee7\u627f\u800c\u6765\u7684\u5b9e\u73b0\u662f\u9759\u6001\u7684\uff0c\u5728\u7f16\u8bd1\u65f6\u5df2\u7ecf\u5b9a\u4e49\uff0c\u6240\u4ee5\u5728\u8fd0\u884c\u65f6\u4e0d\u53ef\u80fd\u53d1\u751f\u53d8\u5316\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u91c7\u7528\u7ec4\u5408\u6216\u805a\u5408\u590d\u7528\u65f6\uff0c\u53ef\u4ee5\u5c06\u5df2\u6709\u5bf9\u8c61\u7eb3\u5165\u65b0\u5bf9\u8c61\u4e2d\uff0c\u4f7f\u4e4b\u6210\u4e3a\u65b0\u5bf9\u8c61\u7684\u4e00\u90e8\u5206\uff0c\u65b0\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u5df2\u6709\u5bf9\u8c61\u7684\u529f\u80fd\uff0c\u5b83\u6709\u4ee5\u4e0b\u4f18\u70b9\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u5b83\u7ef4\u6301\u4e86\u7c7b\u7684\u5c01\u88c5\u6027\u3002\u56e0\u4e3a\u6210\u5206\u5bf9\u8c61\u7684\u5185\u90e8\u7ec6\u8282\u662f\u65b0\u5bf9\u8c61\u770b\u4e0d\u89c1\u7684\uff0c\u6240\u4ee5\u8fd9\u79cd\u590d\u7528\u53c8\u79f0\u4e3a\u201c\u9ed1\u7bb1\u201d\u590d\u7528\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5bf9\u8c61\u95f4\u7684\u8026\u5408\u5ea6\u4f4e\u3002\u53ef\u4ee5\u5728\u7c7b\u7684\u6210\u5458\u4f4d\u7f6e\u58f0\u660e\u62bd\u8c61\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u590d\u7528\u7684\u7075\u6d3b\u6027\u9ad8\u3002\u8fd9\u79cd\u590d\u7528\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u8fdb\u884c\uff0c\u65b0\u5bf9\u8c61\u53ef\u4ee5\u52a8\u6001\u5730\u5f15\u7528\u4e0e\u6210\u5206\u5bf9\u8c61\u7c7b\u578b\u76f8\u540c\u7684\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50\u6765\u7406\u89e3\u5408\u6210\u590d\u7528\u539f\u5219"}),"\n",(0,s.jsx)(e.p,{children:"\u3010\u4f8b\u3011\u6c7d\u8f66\u5206\u7c7b\u7ba1\u7406\u7a0b\u5e8f"}),"\n",(0,s.jsx)(e.p,{children:"\u6c7d\u8f66\u6309\u201c\u52a8\u529b\u6e90\u201d\u5212\u5206\u53ef\u5206\u4e3a\u6c7d\u6cb9\u6c7d\u8f66\u3001\u7535\u52a8\u6c7d\u8f66\u7b49\uff1b\u6309\u201c\u989c\u8272\u201d\u5212\u5206\u53ef\u5206\u4e3a\u767d\u8272\u6c7d\u8f66\u3001\u9ed1\u8272\u6c7d\u8f66\u548c\u7ea2\u8272\u6c7d\u8f66\u7b49\u3002\u5982\u679c\u540c\u65f6\u8003\u8651\u8fd9\u4e24\u79cd\u5206\u7c7b\uff0c\u5176\u7ec4\u5408\u5c31\u5f88\u591a\u3002\u7c7b\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(91041).A+"",width:"777",height:"454"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ece\u4e0a\u9762\u7c7b\u56fe\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4f7f\u7528\u7ee7\u627f\u590d\u7528\u4ea7\u751f\u4e86\u5f88\u591a\u5b50\u7c7b\uff0c\u5982\u679c\u73b0\u5728\u53c8\u6709\u65b0\u7684\u52a8\u529b\u6e90\u6216\u8005\u65b0\u7684\u989c\u8272\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u518d\u5b9a\u4e49\u65b0\u7684\u7c7b\u3002\u6211\u4eec\u8bd5\u7740\u5c06\u7ee7\u627f\u590d\u7528\u6539\u4e3a\u805a\u5408\u590d\u7528\u770b\u4e00\u4e0b\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(19276).A+"",width:"734",height:"308"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},26741:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/open-close-ab872325a7b01109f09f1d5ed802fcd6.png"},7133:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u4f9d\u8d56\u5012\u8f6c\u539f\u5219-4de69549cfafece30fade4c660a9ab87.png"},64521:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u4f9d\u8d56\u5012\u8f6c\u539f\u5219\u6539\u8fdb-e220cf04178af73a04818b41b36f36f0.png"},91041:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u5408\u6210\u590d\u7528\u539f\u5219-80f6c9c238493e58f838f14fbd80cc5e.png"},19276:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u5408\u6210\u590d\u7528\u539f\u52191-aabbb306b277ee698643a60f368a2417.png"},57605:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u63a5\u53e3\u9694\u79bb\u539f\u5219-764831a7160d32c8651053f5926c7e02.png"},16760:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u63a5\u53e3\u9694\u79bb\u539f\u52191-e44a18f294c6f9b608e0ec6dc578cbc2.png"},55746:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u6b63\u65b9\u5f62\u4e0d\u662f\u957f\u65b9\u5f62-09e04e8a22f962447ccfe5075b07e709.png"},32238:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u6b63\u65b9\u5f62\u4e0d\u662f\u957f\u65b9\u5f62\u6539\u8fdb-ac3dae4cdd8fc7c5e738c8552841c19c.png"},60800:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/\u8fea\u7c73\u7279\u6cd5\u5219-19980459e8c72d4e57d2007bc57aa1bc.png"},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);