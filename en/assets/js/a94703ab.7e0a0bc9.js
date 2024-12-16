"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9048],{62283:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(96540),i=t(34164),o=t(23230),r=t(18630),s=t(24245),l=t(54067);const c={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=t(74848);function u(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),i=t[0],o=t[1],r=(0,a.useRef)(!1),c=(0,s.gk)(),d=c.startScroll,u=c.cancelScroll;return(0,s.Mq)((function(e,t){var a=e.scrollY,i=null==t?void 0:t.scrollY;i&&(r.current?r.current=!1:a>=i?(u(),o(!1)):a<n?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,l.$)((function(e){e.location.hash&&(r.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,d.jsx)("button",{"aria-label":(0,o.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",r.G.common.backToTopButton,c.backToTopButton,n&&c.backToTopButtonShow),type:"button",onClick:t})}},69837:(e,n,t)=>{t.r(n),t.d(n,{default:()=>xe});var a=t(96540),i=t(34164),o=t(94239),r=t(18630),s=t(22514),l=t(403),c=t(62283),d=t(36350),u=t(56347),m=t(82216),b=t(86957),h=t(20020),p=t(23230),x=t(74848);function v(e){return(0,x.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const f={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function j(e){var n=e.onClick;return(0,x.jsx)("button",{type:"button",title:(0,p.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",f.collapseSidebarButton),onClick:n,children:(0,x.jsx)(v,{className:f.collapseSidebarButtonIcon})})}var g=t(40002),A=t(24245),_=t(98587),k=t(42439),C=Symbol("EmptyContext"),S=a.createContext(C);function T(e){var n=e.children,t=(0,a.useState)(null),i=t[0],o=t[1],r=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:o}}),[i]);return(0,x.jsx)(S.Provider,{value:r,children:n})}var I=t(94549),N=t(80260),B=t(14783),y=t(11062),w=["item","onItemClick","activePath","level","index"];function L(e){var n=e.collapsed,t=e.categoryLabel,a=e.onClick;return(0,x.jsx)("button",{"aria-label":n?(0,p.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,p.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),"aria-expanded":!n,type:"button",className:"clean-btn menu__caret",onClick:a})}function E(e){var n=e.item,t=e.onItemClick,o=e.activePath,l=e.level,c=e.index,d=(0,_.A)(e,w),u=n.items,m=n.label,h=n.collapsible,p=n.className,v=n.href,f=(0,b.p)().docs.sidebar.autoCollapseCategories,j=function(e){var n=(0,y.A)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!n&&e.collapsible?(0,s.Nr)(e):void 0}),[e,n])}(n),g=(0,s.w8)(n,o),A=(0,N.ys)(v,o),T=(0,I.u)({initialState:function(){return!!h&&(!g&&n.collapsed)}}),E=T.collapsed,M=T.setCollapsed,H=function(){var e=(0,a.useContext)(S);if(e===C)throw new k.dV("DocSidebarItemsExpandedStateProvider");return e}(),G=H.expandedItem,P=H.setExpandedItem,W=function(e){void 0===e&&(e=!E),P(e?null:c),M(e)};return function(e){var n=e.isActive,t=e.collapsed,i=e.updateCollapsed,o=(0,k.ZC)(n);(0,a.useEffect)((function(){n&&!o&&t&&i(!1)}),[n,o,t,i])}({isActive:g,collapsed:E,updateCollapsed:W}),(0,a.useEffect)((function(){h&&null!=G&&G!==c&&f&&M(!0)}),[h,G,c,M,f]),(0,x.jsxs)("li",{className:(0,i.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":E},p),children:[(0,x.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,x.jsx)(B.A,Object.assign({className:(0,i.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!v&&h,"menu__link--active":g}),onClick:h?function(e){null==t||t(n),v?W(!1):(e.preventDefault(),W())}:function(){null==t||t(n)},"aria-current":A?"page":void 0,role:h&&!v?"button":void 0,"aria-expanded":h&&!v?!E:void 0,href:h?null!=j?j:"#":j},d,{children:m})),v&&h&&(0,x.jsx)(L,{collapsed:E,categoryLabel:m,onClick:function(e){e.preventDefault(),W()}})]}),(0,x.jsx)(I.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:E,children:(0,x.jsx)(Y,{items:u,tabIndex:E?-1:0,onItemClick:t,activePath:o,level:l+1})})]})}var M=t(40877),H=t(90716);const G={menuExternalLink:"menuExternalLink_NmtK"};var P=["item","onItemClick","activePath","level","index"];function W(e){var n=e.item,t=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,_.A)(e,P)),c=n.href,d=n.label,u=n.className,m=n.autoAddBaseUrl,b=(0,s.w8)(n,a),h=(0,M.A)(c);return(0,x.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,x.jsxs)(B.A,Object.assign({className:(0,i.A)("menu__link",!h&&G.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:c},h&&{onClick:t?function(){return t(n)}:void 0},l,{children:[d,!h&&(0,x.jsx)(H.A,{})]}))},d)}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function O(e){var n=e.item,t=e.level,a=e.index,o=n.value,s=n.defaultStyle,l=n.className;return(0,x.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(t),s&&[R.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},a)}var D=["item"];function F(e){var n=e.item,t=(0,_.A)(e,D);switch(n.type){case"category":return(0,x.jsx)(E,Object.assign({item:n},t));case"html":return(0,x.jsx)(O,Object.assign({item:n},t));default:return(0,x.jsx)(W,Object.assign({item:n},t))}}var U=["items"];function V(e){var n=e.items,t=(0,_.A)(e,U),a=(0,s.Y)(n,t.activePath);return(0,x.jsx)(T,{children:a.map((function(e,n){return(0,x.jsx)(F,Object.assign({item:e,index:n},t),n)}))})}const Y=(0,a.memo)(V),K={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function z(e){var n=e.path,t=e.sidebar,o=e.className,s=function(){var e=(0,g.M)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,A.Mq)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,x.jsx)("nav",{"aria-label":(0,p.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",K.menu,s&&K.menuWithAnnouncementBar,o),children:(0,x.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(Y,{items:t,activePath:n,level:1})})})}const q="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",X="sidebarLogo_isFc";function Z(e){var n=e.path,t=e.sidebar,a=e.onCollapse,o=e.isHidden,r=(0,b.p)(),s=r.navbar.hideOnScroll,l=r.docs.sidebar.hideable;return(0,x.jsxs)("div",{className:(0,i.A)(q,s&&J,o&&Q),children:[s&&(0,x.jsx)(h.A,{tabIndex:-1,className:X}),(0,x.jsx)(z,{path:n,sidebar:t}),l&&(0,x.jsx)(j,{onClick:a})]})}const $=a.memo(Z);var ee=t(70763),ne=t(61938),te=function(e){var n=e.sidebar,t=e.path,a=(0,ne.M)();return(0,x.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(Y,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ae(e){return(0,x.jsx)(ee.GX,{component:te,props:e})}const ie=a.memo(ae);function oe(e){var n=(0,m.l)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)($,Object.assign({},e)),a&&(0,x.jsx)(ie,Object.assign({},e))]})}const re={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function se(e){var n=e.toggleSidebar;return(0,x.jsx)("div",{className:re.expandButton,title:(0,p.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n,children:(0,x.jsx)(v,{className:re.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function ce(e){var n,t=e.children,i=(0,l.t)();return(0,x.jsx)(a.Fragment,{children:t},null!=(n=null==i?void 0:i.name)?n:"noSidebar")}function de(e){var n=e.sidebar,t=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,s=(0,u.zy)().pathname,l=(0,a.useState)(!1),c=l[0],m=l[1],b=(0,a.useCallback)((function(){c&&m(!1),!c&&(0,d.O)()&&m(!0),o((function(e){return!e}))}),[o,c]);return(0,x.jsx)("aside",{className:(0,i.A)(r.G.docs.docSidebarContainer,le.docSidebarContainer,t&&le.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(le.docSidebarContainer)&&t&&m(!0)},children:(0,x.jsx)(ce,{children:(0,x.jsxs)("div",{className:(0,i.A)(le.sidebarViewport,c&&le.sidebarViewportHidden),children:[(0,x.jsx)(oe,{sidebar:n,path:s,onCollapse:b,isHidden:c}),c&&(0,x.jsx)(se,{toggleSidebar:b})]})})})}const ue={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function me(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,l.t)();return(0,x.jsx)("main",{className:(0,i.A)(ue.docMainContainer,(n||!a)&&ue.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,n&&ue.docItemWrapperEnhanced),children:t})})}const be={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function he(e){var n=e.children,t=(0,l.t)(),i=(0,a.useState)(!1),o=i[0],r=i[1];return(0,x.jsxs)("div",{className:be.docsWrapper,children:[(0,x.jsx)(c.A,{}),(0,x.jsxs)("div",{className:be.docRoot,children:[t&&(0,x.jsx)(de,{sidebar:t.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,x.jsx)(me,{hiddenSidebarContainer:o,children:n})]})]})}var pe=t(83510);function xe(e){var n=(0,s.B5)(e);if(!n)return(0,x.jsx)(pe.A,{});var t=n.docElement,a=n.sidebarName,c=n.sidebarItems;return(0,x.jsx)(o.e3,{className:(0,i.A)(r.G.page.docsDocPage),children:(0,x.jsx)(l.V,{name:a,items:c,children:(0,x.jsx)(he,{children:t})})})}},83510:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164),i=t(23230),o=t(85225),r=t(74848);function s(e){var n=e.className;return(0,r.jsx)("main",{className:(0,a.A)("container margin-vert--xl",n),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(o.A,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);