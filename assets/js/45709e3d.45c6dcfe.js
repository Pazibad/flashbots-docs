"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4170],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(r),f=a,m=h["".concat(i,".").concat(f)]||h[f]||p[f]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7109:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],c={title:"searcher sponsored tx"},i=void 0,l={unversionedId:"flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",id:"flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",isDocsHomePage:!1,title:"searcher sponsored tx",description:'searcher-sponsored-tx is a repository that contains a simple Flashbots "searcher" for submitting a transaction from account X, but paying for the transaction from account Y. This is accomplished by submitting a Flashbots transaction bundle, with the first transaction(s) executing from account X, and the last, single transaction calling a contract which verifies the early transactions ran successfully, then pays the miner.',source:"@site/docs/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx.md",sourceDirName:"flashbots-auction/searchers/example-searchers",slug:"/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",permalink:"/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",tags:[],version:"current",frontMatter:{title:"searcher sponsored tx"},sidebar:"docs",previous:{title:"simple arbitrage bot",permalink:"/flashbots-auction/searchers/example-searchers/simple-arbitrage-bot"},next:{title:"searcher minter",permalink:"/flashbots-auction/searchers/example-searchers/searcher-minter"}},u=[],p={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'searcher-sponsored-tx is a repository that contains a simple Flashbots "searcher" for submitting a transaction from account X, but paying for the transaction from account Y. This is accomplished by submitting a Flashbots transaction bundle, with the first transaction(s) executing from account X, and the last, single transaction calling a contract which verifies the early transactions ran successfully, then pays the miner.'),(0,s.kt)("p",null,"We hope you will use this repository as an example of how to integrate Flashbots into your own Flashbot searcher (bot). Access the searcher-sponsored-tx repo ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/flashbots/searcher-sponsored-tx"},"here"),"."))}h.isMDXComponent=!0}}]);