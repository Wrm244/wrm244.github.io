"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2200],{19399:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=r(74848),t=r(28453),a=r(49489),i=r(7227);const l={id:"Docusaurus-\u641c\u7d22\u914d\u7f6e",slug:"/Docusaurus-search-configure",title:"\u641c\u7d22\u914d\u7f6e",date:"2023/01/20",authors:"RiverMountain",last_update:{date:"2023/02/07"},keywords:["docusaurus","algolia","Docsearch"]},o=void 0,c={id:"blog/Docusaurus/Docusaurus-\u641c\u7d22\u914d\u7f6e",title:"\u641c\u7d22\u914d\u7f6e",description:"\u641c\u7d22\u529f\u80fd\u662f\u57fa\u4e8e algolia \u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u65b9\u5f0f\u6709\u4e24\u79cd:",source:"@site/docs/blog/Docusaurus/\u641c\u7d22\u914d\u7f6e.md",sourceDirName:"blog/Docusaurus",slug:"/Docusaurus-search-configure",permalink:"/en/docs/Docusaurus-search-configure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Docusaurus-\u641c\u7d22\u914d\u7f6e",slug:"/Docusaurus-search-configure",title:"\u641c\u7d22\u914d\u7f6e",date:"2023/01/20",authors:"RiverMountain",last_update:{date:"2023/02/07"},keywords:["docusaurus","algolia","Docsearch"]},sidebar:"blog",previous:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",permalink:"/en/docs/Docusaurus-Custom-Components"},next:{title:"\u8bc4\u8bba\u7cfb\u7edf",permalink:"/en/docs/Docusaurus-Discussions"}},u={},d=[{value:"\u7b2c\u4e00\u79cd\u65b9\u6848",id:"\u7b2c\u4e00\u79cd\u65b9\u6848",level:2},{value:"\u7b2c\u4e8c\u79cd\u65b9\u6848",id:"\u7b2c\u4e8c\u79cd\u65b9\u6848",level:2},{value:"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f",id:"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f",level:3},{value:"\u914d\u7f6e docsearch.json",id:"\u914d\u7f6e-docsearchjson",level:3},{value:"\u914d\u7f6e docusaurus.config.js",id:"\u914d\u7f6e-docusaurusconfigjs",level:3},{value:"\u53c2\u8003\u4e0e\u81f4\u8c22",id:"\u53c2\u8003\u4e0e\u81f4\u8c22",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h5:"h5",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u641c\u7d22\u529f\u80fd\u662f\u57fa\u4e8e ",(0,s.jsx)(n.code,{children:"algolia"})," \u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u65b9\u5f0f\u6709\u4e24\u79cd:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8ba9 ",(0,s.jsx)(n.code,{children:"Docsearch"})," \u6bcf\u5468\u722c\u4e00\u6b21\u4f60\u7684\u7f51\u7ad9\uff0c\u524d\u63d0\u6761\u4ef6\u662f\u4f60\u7684\u9879\u76ee\u5fc5\u987b\u662f\u5f00\u6e90\u7684\uff0c\u5426\u5219\u8981\u8fdb\u884c\u6536\u8d39\uff0c\u597d\u5904\u662f\u6ca1\u6709\u989d\u5916\u7684\u914d\u7f6e\uff0c\u53ea\u4e0d\u8fc7\u7533\u8bf7\u6bd4\u8f83\u7e41\u7410\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u81ea\u5df1\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"Docsearch"})," \u722c\u866b\uff0c\u6839\u636e\u81ea\u5df1\u5fc3\u60c5\u968f\u65f6\u722c\u53d6\uff0c\u4f46\u662f\u9700\u8981\u81ea\u884c\u6ce8\u518c\u8d26\u53f7\u548c\u642d\u5efa\u722c\u866b\u73af\u5883\uff08docker\uff09\uff0c\u8fd9\u4e5f\u662f\u6211\u76ee\u524d\u9009\u62e9\u7684\u65b9\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\ud83d\udcac",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5728\u5f00\u59cb\u4ee5\u4e0b\u6b65\u9aa4\u4e4b\u524d\u8bf7\u5148\u9605\u8bfb ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/zh-CN/docs/search",children:"\u641c\u7d22|Docusaurus"})})," \u8fdb\u884c\u57fa\u672c\u7684\u914d\u7f6e"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u9762\u53ea\u4ecb\u7ecd\u6211\u6240\u91c7\u7528\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u539f\u672c\u91c7\u7528\u7684\u662f\u7b2c\u4e00\u79cd\u65b9\u6848\uff0c\u540e\u6765\u56e0\u7533\u8bf7\u65f6\u95f4\u6709\u70b9\u4e45\u8fb9\u9009\u62e9\u4e86",(0,s.jsx)(n.strong,{children:"\u7b2c\u4e8c\u79cd\u65b9\u6848"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u7b2c\u4e00\u79cd\u65b9\u6848",children:"\u7b2c\u4e00\u79cd\u65b9\u6848"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5148\u8bd5\u7740\u7528\u7b2c\u4e00\u79cd\u65b9\u6848\u7533\u8bf7\u4e00\u4e0b\uff0c\u8fdb\u5165 Algolia DocSearch \u7684",(0,s.jsx)(n.a,{href:"https://docsearch.algolia.com/apply/",children:"\u7533\u8bf7\u5730\u5740"}),"\uff0c\u586b\u5199\u76f8\u5173\u4fe1\u606f\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7f51\u7ad9\u8981\u53ef\u4ee5",(0,s.jsx)(n.strong,{children:"\u516c\u5f00\u8bbf\u95ee"}),"\u7684"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(52144).A+"",width:"750",height:"1009"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7533\u8bf7\u7684\u8fc7\u7a0b\u53ef\u80fd\u6bd4\u8f83\u9ebb\u70e6\u548c\u8017\u65f6\uff0c\u4f46\u4ed6\u662f\u514d\u8d39\u7684\uff0c\u800c\u4e14\u4e00\u52b3\u6c38\u9038\uff08\u5982\u679c\u4f60\u4e0d\u60f3\u6298\u817e\u81ea\u5df1\u8fd0\u884c\u722c\u866b\u7684\u8bdd\uff09",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u800c\u7533\u8bf7\u7ed3\u679c\u90ae\u4ef6\uff0c\u6700\u7ec8\u662f\u7b49\u4e86\u4e09\u56db\u5929\u624d\u6536\u5230"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(96449).A+"",width:"1578",height:"700"})}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u7740\u5fc3\u6025\uff0c\u6211\u53c8\u7533\u8bf7\u4e86\u4e00\u4e24\u6b21 ",(0,s.jsx)(n.strong,{children:"\uff08\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\uff0c\u56e0\u4e3a\u5ba1\u662f\u4eba\u5de5\u4e2a\u5ba1\u6838\u7684\uff0c\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u53ef\u80fd\u4f1a\u5ef6\u957f\u5ba1\u6838\u5468\u671f\uff0c\u6700\u957f\u7684\u53ef\u80fd\u4f1a\u5230\u4e24\u5468\uff01\uff09"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u7b2c\u4e8c\u79cd\u65b9\u6848",children:"\u7b2c\u4e8c\u79cd\u65b9\u6848"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e8e\u662f\u6211\u53c8\u5bfb\u627e\u5230\u4e86\u66f4\u597d\u4e5f\u66f4\u9002\u5408\u6211\u7684\u65b9\u6848\uff0c\u4e5f\u5c31\u662f\u4e0a\u9762\u8bf4\u7684\u7b2c\u4e8c\u79cd\u65b9\u6848\uff0c\u5982\u4e0b\uff1a",(0,s.jsx)("br",{}),"\n\u4e3b\u8981\u53c2\u8003\u6559\u7a0b\u7684\u535a\u4e3b\u5f55\u5236\u4e86\u4e2a",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=cykGdsbe6f0",children:"\u89c6\u9891\u6559\u7a0b"}),"\uff0c\u53ef\u4ee5\u7ed3\u5408\u6587\u6863\u4e00\u8d77\u53c2\u8003\uff0c\u4e0d\u8fc7\u4f60\u5f97\u9700\u8981\u53bb\u5916\u9762\u7684\u4e16\u754c\u770b\u770b"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u6b65\u9aa4\u7684\u524d\u63d0\u662f\u5df2\u7ecf\u521b\u5efa\u4e86 ",(0,s.jsx)(n.a,{href:"https://www.algolia.com/",children:"algolia"})," \u8d26\u53f7\uff0c\u4ed3\u5e93\u4e2d\u4e5f\u521b\u5efa\u4e86 Action\uff0c\u7136\u540e\u4e0b\u9762\u4e09\u4e2a algolia \u7684 Key \u503c\u662f\u5f85\u4f1a\u9700\u8981\u7528\u5230\u7684"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(13358).A+"",width:"1903",height:"913"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u4e0b\u9762\u4e3b\u8981\u8bf4\u5176\u4e2d\u4e24\u949f\u89e6\u53d1\u6761\u4ef6\uff0c\u533a\u522b\u5728\u4e8e ",(0,s.jsx)(n.code,{children:"yml"})," \u6587\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"on"})," \u5b57\u6bb5\u5185\u5bb9\u4e0d\u4e00\u6837\uff0c\u5176\u4ed6\u4e00\u81f4\uff0c\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9"]}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f",children:"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"submit",values:[{label:"\u63d0\u4ea4\u4ee3\u7801\u89e6\u53d1",value:"submit"},{label:"\u90e8\u7f72\u89e6\u53d1",value:"deployment"},{label:"\u5b9a\u65f6\u89e6\u53d1",value:"timer"}],children:[(0,s.jsxs)(i.A,{value:"submit",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"on:\n  push:\n    branches:\n      - main\n"})}),(0,s.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,s.jsx)(n.p,{children:"\u63d0\u4ea4\u4ee3\u7801\u89e6\u53d1\u76f8\u5f53\u4e8e\u8fd8\u6ca1\u90e8\u7f72\u66f4\u65b0\u7684\u5185\u5bb9\u5c31\u5f00\u59cb\u8fd0\u884c\u722c\u866b\u4e86\uff0c\u5c31\u662f\u8bf4\u722c\u53d6\u7684\u662f\u4e0a\u4e00\u6b21\u90e8\u7f72\u6210\u529f\u7684\u5185\u5bb9"})})]}),(0,s.jsxs)(i.A,{value:"deployment",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"on:\n  deployment\n"})}),(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u90e8\u7f72\u65b9\u5f0f\u548c\u6211\u7684\u4e00\u6837\uff08\u53c2\u8003",(0,s.jsx)(n.a,{href:"/en/docs/Docusaurus-dpeloy",children:(0,s.jsx)(n.strong,{children:"\u8fd9\u7bc7\u6587\u7ae0"})}),"\uff09\uff0c\u5e76\u4e14\u89e6\u53d1 docsearch \u7684\u65b9\u5f0f\u9009\u62e9\u90e8\u7f72\u89e6\u53d1\u7684\u8bdd\uff0c\u53ea\u9700\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u5e76\u6dfb\u52a0\u5230 deploy.yml \u5e95\u4e0b\u5373\u53ef,\u6ce8\u610f\u548c\u7d27\u63a5\u7684 ",(0,s.jsx)(n.code,{children:"-name"})," \u5b57\u6bb5\u5bf9\u9f50\uff0c\u7136\u540e\u8df3\u5230",(0,s.jsx)(n.a,{href:"#Action_secrets",children:"\u4e0b\u4e00\u6b65"})]})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title="deploy.yml"',children:'      - name: Get the content of docsearch.json as config\n        id: algolia_config\n        run: echo "::set-output name=config::$(cat docsearch.json | jq -r tostring)"\n\n      - name: Run algolia/docsearch-scraper image\n        env:\n          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}\n          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}\n          CONFIG: ${{ steps.algolia_config.outputs.config }}\n        run: |\n          docker run \\\n            --env APPLICATION_ID=${ALGOLIA_APP_ID} \\\n            --env API_KEY=${ALGOLIA_API_KEY} \\\n            --env "CONFIG=${CONFIG}" \\\n            algolia/docsearch-scraper\n'})})]}),(0,s.jsx)(i.A,{value:"timer",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"on:\n  schedule:\n    # \u7ea6\u6bcf\u5929\u65e9\u4e0a8\u70b9\u89e6\u53d1\uff08UTC\u65f6\u95f40\u70b9\uff09\n    - cron: '0 0 * * *'\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6839\u76ee\u5f55\u4e0b ",(0,s.jsx)(n.code,{children:".github/workflows/"})," \u4e0b\u521b\u5efa ",(0,s.jsx)(n.code,{children:"docsearch.yml"})," \u6587\u4ef6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'{6-7} title="docsearch.yml"',children:'# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node\n# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions\n\nname: docsearch\n\non:\n#  The way you choose\n\njobs:\n  algolia:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Get the content of docsearch.json as config\n        id: algolia_config\n        run: echo "::set-output name=config::$(cat docsearch.json | jq -r tostring)"\n\n      - name: Run algolia/docsearch-scraper image\n        env:\n          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}\n          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}\n          CONFIG: ${{ steps.algolia_config.outputs.config }}\n        run: |\n          docker run \\\n            --env APPLICATION_ID=${ALGOLIA_APP_ID} \\\n            --env API_KEY=${ALGOLIA_API_KEY} \\\n            --env "CONFIG=${CONFIG}" \\\n            algolia/docsearch-scraper\n'})}),"\n",(0,s.jsx)(n.h5,{id:"Action_secrets"}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u5728\u9879\u76ee\u4ed3\u5e93\uff08\u6211\u7684\u662f\u6e90\u7801\u4ed3\u5e93\uff09\u4e2d\u65b0\u5efa\u4e24\u4e2a ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Action secrets"})})," \uff0c\u8f93\u5165 algolia \u7684\u76f8\u5173 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Key"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(14011).A+"",width:"988",height:"750"})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e-docsearchjson",children:"\u914d\u7f6e docsearch.json"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,s.jsx)(n.code,{children:"docsearch.json"})," \u6587\u4ef6\uff0c\u5e76\u5c06\u4ee3\u7801\u9ad8\u4eae\u7684\u90e8\u5206\u66ff\u6362\u6210\u81ea\u5df1\u7684\u4fe1\u606f"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'{2-4} title="docsearch.json"',children:'{\n  "index_name": "Shake",\n  "start_urls": ["https://www.shaking.site/"],\n  "sitemap_urls": ["https://www.shaking.site/sitemap.xml"],\n  "selectors": {\n    "lvl0": {\n      "selector": "(//ul[contains(@class,\'menu__list\')]//a[contains(@class, \'menu__link menu__link--sublist menu__link--active\')]/text() | //nav[contains(@class, \'navbar\')]//a[contains(@class, \'navbar__link--active\')]/text())[last()]",\n      "type": "xpath",\n      "global": true,\n      "default_value": "Documentation"\n    },\n    "lvl1": "header h1, article h1",\n    "lvl2": "article h2",\n    "lvl3": "article h3",\n    "lvl4": "article h4",\n    "lvl5": "article h5, article td:first-child",\n    "lvl6": "article h6",\n    "text": "article p, article li, article td:last-child"\n  },\n  "custom_settings": {\n    "attributesForFaceting": [\n      "type",\n      "lang",\n      "language",\n      "version",\n      "docusaurus_tag"\n    ],\n    "attributesToRetrieve": [\n      "hierarchy",\n      "content",\n      "anchor",\n      "url",\n      "url_without_anchor",\n      "type"\n    ],\n    "attributesToHighlight": ["hierarchy", "content"],\n    "attributesToSnippet": ["content:10"],\n    "camelCaseAttributes": ["hierarchy", "content"],\n    "searchableAttributes": [\n      "unordered(hierarchy.lvl0)",\n      "unordered(hierarchy.lvl1)",\n      "unordered(hierarchy.lvl2)",\n      "unordered(hierarchy.lvl3)",\n      "unordered(hierarchy.lvl4)",\n      "unordered(hierarchy.lvl5)",\n      "unordered(hierarchy.lvl6)",\n      "content"\n    ],\n    "distinct": true,\n    "attributeForDistinct": "url",\n    "customRanking": [\n      "desc(weight.pageRank)",\n      "desc(weight.level)",\n      "asc(weight.position)"\n    ],\n    "ranking": [\n      "words",\n      "filters",\n      "typo",\n      "attribute",\n      "proximity",\n      "exact",\n      "custom"\n    ],\n    "highlightPreTag": "<span class=\'algolia-docsearch-suggestion--highlight\'>",\n    "highlightPostTag": "</span>",\n    "minWordSizefor1Typo": 3,\n    "minWordSizefor2Typos": 7,\n    "allowTyposOnNumericTokens": false,\n    "minProximity": 1,\n    "ignorePlurals": true,\n    "advancedSyntax": true,\n    "attributeCriteriaComputedByMinProximity": true,\n    "removeWordsIfNoResults": "allOptional",\n    "separatorsToIndex": "_",\n    "synonyms": [\n      ["js", "javascript"],\n      ["ts", "typescript"]\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e-docusaurusconfigjs",children:"\u914d\u7f6e docusaurus.config.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  themeConfig: {\n    algolia: {\n      appId: 'YOUR_APP_ID',          // Application ID\n      apiKey: 'YOUR_SEARCH_API_KEY', // Search-Only API Key\n      indexName: 'YOUR_INDEX_NAME'   // Index name\n    }\n  }\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5b8c\u6210\u4ee5\u4e0a\u6240\u6709\u6b65\u9aa4\u4e4b\u540e\u5373\u53ef\u5728\u81ea\u5df1\u7684\u9879\u76ee\u91cc\u8fdb\u884c\u641c\u7d22\u6d4b\u8bd5\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"Brows"})," \u91cc\u6709\u6570\u636e\u8bf4\u660e\u5df2\u7ecf\u6b63\u5e38\u722c\u53d6\u4e86"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(13893).A+"",width:"1053",height:"515"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"\u5982\u679c\u6709\u5176\u4ed6\u7684\u95ee\u9898\u53ef\u4ee5\u53bb\u901b\u901b\u5e95\u4e0b\u7684\u53c2\u8003\u94fe\u63a5\uff0c\u8bf4\u4e0d\u5b9a\u4f1a\u6709\u5bf9\u5e94\u7684\u89e3\u51b3\u65b9\u6848\u3002"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003\u4e0e\u81f4\u8c22",children:"\u53c2\u8003\u4e0e\u81f4\u8c22"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/zh-CN/docs/search",children:"\u641c\u7d22 | Docusaurus"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://www.alanwang.site/posts/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E7%B3%BB%E5%88%97/Docusaurus-%E6%90%9C%E7%B4%A2",children:"Docusaurus DocSearch \u642d\u5efa"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/jiudenggushijingguo/article/details/125909267",children:"docsearchplugin"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://ouch1978.github.io/docs/docusaurus/configuration/automatically-run-docsearch-scraper-from-github-action",children:"\u900f\u904e GitHub Action \u81ea\u52d5\u57f7\u884c DocSearch \u7684\u722c\u87f2"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://weiyun0912.github.io/Wei-Docusaurus/docs/Docusaurus/Algolia/",children:"\u5728 Docusaurus \u4e2d\u4f7f\u7528 Algolia \u5be6\u4f5c\u641c\u5c0b\u529f\u80fd"})})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:n})}},49489:(e,n,r)=>{r.d(n,{A:()=>y});var s=r(96540),t=r(34164),a=r(24245),i=r(56347),l=r(36494),o=r(62814),c=r(45167),u=r(69900);function d(e){var n,r;return null!=(n=null==(r=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,a=(0,i.W6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:r,groupId:t});return[(0,o.aZ)(l),(0,s.useCallback)((function(e){if(l){var n=new URLSearchParams(a.location.search);n.set(l,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[l,a])]}function m(e){var n,r,t,a,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),f=(0,s.useState)((function(){return function(e){var n,r=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!g({value:r,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:m})})),j=f[0],x=f[1],v=p({queryString:c,groupId:d}),b=v[0],A=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Dv)(n),t=r[0],a=r[1],[t,(0,s.useCallback)((function(e){n&&a.set(e)}),[n,a])]),_=y[0],I=y[1],w=function(){var e=null!=b?b:_;return g({value:e,tabValues:m})?e:null}();return(0,l.A)((function(){w&&x(w)}),[w]),{selectedValue:j,selectValue:(0,s.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),A(e),I(e)}),[A,I,m]),tabValues:m}}var f=r(11062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){var n=e.className,r=e.block,s=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,a.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=o.indexOf(n),t=l[r].value;t!==s&&(c(n),i(t))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var s,t=o.indexOf(e.currentTarget)+1;r=null!=(s=o[t])?s:o[0];break;case"ArrowLeft":var a,i=o.indexOf(e.currentTarget)-1;r=null!=(a=o[i])?a:o[o.length-1]}null==(n=r)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},a,{className:(0,t.A)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===n}),children:null!=r?r:n}),n)}))})}function b(e){var n=e.lazy,r=e.children,t=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=a.find((function(e){return e.props.value===t}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function A(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,Object.assign({},n,e)),(0,x.jsx)(b,Object.assign({},n,e))]})}function y(e){var n=(0,f.A)();return(0,x.jsx)(A,Object.assign({},e,{children:d(e.children)}),String(n))}},52144:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/image-20230426201530-b5c2bcf4160241f0c9043080bf5aac0a.png"},96449:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/image-20230426201540-976d092881adf761492471579bc73b68.png"},13358:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/image-20230426201547-a5f91dd657f7d7850e9366cd36c5f76c.png"},14011:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/image-20230426201649-d580bb145887a4d79bdf18acfdb49b63.png"},13893:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/image-20230426201702-3ab9a66ed6bb266d9b7c6328f3a551d2.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);