(function(e){function t(t){for(var o,s,r=t[0],a=t[1],l=t[2],d=0,b=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);p&&p(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},c={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var p=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0194":function(e,t,n){},"0b51":function(e,t,n){"use strict";n("dfc6")},1474:function(e,t,n){e.exports=n.p+"img/rating-desktop.acb28c67.png"},"16bf":function(e,t,n){e.exports=n.p+"img/nft-desktop-2.c7bbb509.png"},"1dd2":function(e,t,n){e.exports=n.p+"img/expense-chart-mobile.281985f4.png"},"30b9":function(e,t,n){e.exports=n.p+"img/rating-mobile.01da9b17.png"},"340a":function(e,t,n){},"36e0":function(e,t,n){"use strict";n("d061")},"45e6":function(e,t,n){e.exports=n.p+"img/nft-mobile.b450f83e.png"},"4cb6":function(e,t,n){e.exports=n.p+"img/rating-desktop-2.36e953a7.png"},"4e54":function(e,t,n){e.exports=n.p+"img/3-column-mobile.e1a03d38.png"},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c={class:"main top-shadow"},i=Object(o["f"])("h2",null,"About the Project:",-1),s=Object(o["f"])("h2",null,"Techniques Applied:",-1),r=["href"],a=Object(o["g"])("see project"),l=["href"],p=Object(o["g"])("see code"),d=Object(o["f"])("footer",{class:"footer"},null,-1);function b(e,t,n,b,u,f){const g=Object(o["q"])("Title"),m=Object(o["q"])("Bar"),j=Object(o["q"])("ThumbView"),h=Object(o["q"])("ImgView"),v=Object(o["q"])("Pagination"),O=Object(o["q"])("Button"),k=Object(o["q"])("ProjectDescription"),x=Object(o["q"])("View");return Object(o["l"])(),Object(o["e"])("div",null,[Object(o["h"])(g,{class:"top-shadow"}),Object(o["h"])(m,{title:f.activeProj.title,onLeft:t[0]||(t[0]=e=>f.left()),onRight:t[1]||(t[1]=e=>f.right())},null,8,["title"]),Object(o["h"])(x,null,{img:Object(o["t"])(()=>[Object(o["h"])(v,{range:u.projects.length,active:u.index,onJump:t[3]||(t[3]=e=>f.jump(e))},{default:Object(o["t"])(()=>[Object(o["f"])("div",c,[Object(o["h"])(j,{class:"main__side",onActivated:t[2]||(t[2]=e=>u.pictureIndex=e),urls:f.activeProj.img},null,8,["urls"]),Object(o["h"])(h,{class:"main__primary top-shadow",screenshot:f.getScreenshotType(),src:f.src,link:f.setLink()},null,8,["screenshot","src","link"])])]),_:1},8,["range","active"])]),desc:Object(o["t"])(()=>[Object(o["h"])(k,null,{desc:Object(o["t"])(()=>[i,Object(o["f"])("p",null,Object(o["r"])(f.activeProj.description),1)]),tech:Object(o["t"])(()=>[s,Object(o["f"])("ul",null,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["o"])(f.activeProj.tech,(e,t)=>(Object(o["l"])(),Object(o["e"])("li",{key:t},Object(o["r"])(e),1))),128))])]),cta:Object(o["t"])(()=>[Object(o["f"])("a",{href:f.setLink(),target:"_blank"},[Object(o["h"])(O,{class:"btn"},{default:Object(o["t"])(()=>[a]),_:1})],8,r),Object(o["f"])("a",{href:f.activeProj.repository,target:"_blank"},[Object(o["h"])(O,{class:"btn"},{default:Object(o["t"])(()=>[p]),_:1})],8,l)]),_:1})]),_:1}),d])}const u={class:"bar"},f={key:1,class:"bar-title"};function g(e,t,n,c,i,s){const r=Object(o["q"])("font-awesome-icon"),a=Object(o["q"])("ScrollingText");return Object(o["l"])(),Object(o["e"])("div",u,[Object(o["f"])("div",{class:"bar-btn no-selection",onClick:t[0]||(t[0]=t=>e.$emit("left"))},[Object(o["h"])(r,{icon:"fa-solid fa-angle-left"})]),n.title.length>40?(Object(o["l"])(),Object(o["d"])(a,{key:0,class:"bar-title"},{default:Object(o["t"])(()=>[Object(o["p"])(e.$slots,"default",{},()=>[Object(o["g"])(Object(o["r"])(n.title),1)],!0)]),_:3})):(Object(o["l"])(),Object(o["e"])("div",f,Object(o["r"])(n.title),1)),Object(o["f"])("div",{class:"bar-btn no-selection",onClick:t[1]||(t[1]=t=>e.$emit("right"))},[Object(o["h"])(r,{icon:"fa-solid fa-angle-right"})])])}const m={class:"scrolling-text__container"},j={class:"scrolling-text"};function h(e,t,n,c,i,s){return Object(o["l"])(),Object(o["e"])("div",m,[Object(o["f"])("div",j,[Object(o["p"])(e.$slots,"default",{},void 0,!0)])])}var v={},O=(n("9e30"),n("6b0d")),k=n.n(O);const x=k()(v,[["render",h],["__scopeId","data-v-2356985e"]]);var w=x,_={components:{ScrollingText:w},created(){console.log(this.$slots)},props:["title"]};n("7325");const y=k()(_,[["render",g],["__scopeId","data-v-7b0620a1"]]);var I=y;function P(e,t,n,c,i,s){return Object(o["l"])(),Object(o["e"])("button",{onClick:t[0]||(t[0]=t=>e.$emit("triggered"))},[Object(o["p"])(e.$slots,"default",{},void 0,!0)])}var C={};n("ea15");const S=k()(C,[["render",P],["__scopeId","data-v-fb399eb4"]]);var q=S;const T={class:"img-container-c"},$={class:"img-container",target:"_blank"},V=["src"];function L(e,t,c,i,s,r){return Object(o["l"])(),Object(o["e"])("div",T,[Object(o["f"])("div",$,[Object(o["f"])("img",{src:n("bb6e")("./"+c.src),alt:""},null,8,V)])])}var M={props:["src","link"]};n("80d9");const A=k()(M,[["render",L],["__scopeId","data-v-fc0e2fd2"]]);var D=A;function R(e,t,n,c,i,s){return Object(o["l"])(),Object(o["e"])("h2",null,[Object(o["p"])(e.$slots,"default",{},void 0,!0)])}var E={};n("0b51");const B=k()(E,[["render",R],["__scopeId","data-v-343b3d08"]]);var J=B;const N={class:"project-desc"},F={class:"project-desc__section"},H={class:"project-desc__section"},U={class:"project-desc__cta"};function Q(e,t,n,c,i,s){return Object(o["l"])(),Object(o["e"])("div",N,[Object(o["f"])("div",F,[Object(o["p"])(e.$slots,"desc")]),Object(o["f"])("div",H,[Object(o["p"])(e.$slots,"tech")]),Object(o["f"])("div",U,[Object(o["p"])(e.$slots,"cta")])])}var W={};n("7540");const z=k()(W,[["render",Q]]);var G=z;const K=e=>(Object(o["n"])("data-v-d37913fa"),e=e(),Object(o["m"])(),e),X={class:"bg"},Y=Object(o["g"])("Sinjin Lyon"),Z=K(()=>Object(o["f"])("div",{class:"nudge"},"A small portfolio",-1));function ee(e,t,n,c,i,s){const r=Object(o["q"])("Name");return Object(o["l"])(),Object(o["e"])("div",X,[Object(o["h"])(r,null,{default:Object(o["t"])(()=>[Y]),_:1}),Z])}var te={components:{Name:J}};n("dead");const ne=k()(te,[["render",ee],["__scopeId","data-v-d37913fa"]]);var oe=ne;function ce(e,t,n,c,i,s){return Object(o["l"])(),Object(o["e"])("div",null,[Object(o["p"])(e.$slots,"img"),Object(o["p"])(e.$slots,"desc")])}var ie={};const se=k()(ie,[["render",ce]]);var re=se;const ae={class:"pagination-container"},le={class:"dot-container"},pe=["onClick"];function de(e,t,n,c,i,s){return Object(o["l"])(),Object(o["e"])("div",ae,[Object(o["p"])(e.$slots,"default",{},void 0,!0),Object(o["f"])("div",le,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["o"])(n.range,(e,t)=>(Object(o["l"])(),Object(o["e"])("div",{onClick:e=>s.jump(t),key:t,class:"dot-clickable"},[Object(o["f"])("div",{class:Object(o["k"])(["dot-graphic",n.active===t?"--active":""])},null,2)],8,pe))),128))])])}var be={props:["active","range"],methods:{jump(e){this.$emit("jump",e)}}};n("36e0");const ue=k()(be,[["render",de],["__scopeId","data-v-5a525952"]]);var fe=ue;const ge={class:"thumb-container"},me=["onClick"],je=["src"];function he(e,t,c,i,s,r){return Object(o["l"])(),Object(o["e"])("div",ge,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["o"])(c.urls,(e,t)=>(Object(o["l"])(),Object(o["e"])("div",{class:Object(o["k"])(["thumb-box",s.active===t?"--active":""]),onClick:e=>r.clickHandler(t),key:t},[Object(o["f"])("img",{src:n("bb6e")("./"+e),alt:""},null,8,je)],10,me))),128))])}var ve={props:["urls"],data(){return{active:0}},watch:{urls(){this.active=0}},methods:{clickHandler(e){this.active=e,this.$emit("activated",e)}}};n("fefc");const Oe=k()(ve,[["render",he],["__scopeId","data-v-4e7fec47"]]);var ke=Oe;class xe{constructor(e,t,n,o,c,i){if(!e||!t||!n||!o||!c)throw console.log("received"),console.log(e),console.log(t),console.log(n),console.log(o),console.log(c),"Improper project format";this.title=e,this.description=t,this.tech=n,this.href=o,this.img=c,this.repository=i||"https://github.com/sinjin25/front-end-mentor-problems"}}const we=["HTML","CSS","Responsive design"],_e=new xe("QR Code Card Component","Implementing a card-like design for a QR Code. Provided a single image asset and a mobile and desktop design.",[...we],"front-end-mentor-problems/qr-code.html",["qr-mobile.png","qr-desktop.png"]),ye=new xe("Perfume Product Card","Implementing a detailed card design for a perfume product. Implementation involved modifying typography (letter-spacing, etc.) and aligning different elements relative to each other.",["Typography","Flexbox","BEM naming conventions",...we],"front-end-mentor-problems/product-preview.html",["perfume-mobile.png","perfume-desktop.png"]),Ie=new xe("Mult-Part Rating Component","Implementing a multi-page rating form. Involved JavaScript DOM manipulation and event handling in addition to visual design aspects.",["JavaScript","DOM manipulation","event handling",...we],"front-end-mentor-problems/rating-component.html",["rating-mobile.png","rating-mobile-2.png","rating-desktop.png","rating-desktop-2.png"]),Pe=new xe("NFT Product Card w/ Active States","Implementing a product card with hover/active states. Unlike other cards, this has more tacticle feedback as well as the use of SVG icons",["pseudo-elements","svg icons",...we],"front-end-mentor-problems/nft-preview-card.html",["nft-mobile.png","nft-mobile-2.png","nft-desktop-2.png","nft-desktop.png"]),Ce=new xe("Statistics Eye-Catch","Implementing a flexible eye-catch component with supporting statistics. Flexbox is used to adjust card to a side-by-side design suited to higher resolution screens.",[...we,"BEM naming conventions","Responsive design","Flexbox"],"front-end-mentor-problems/stats-preview.html",["stats-preview-mobile.png","stats-preview-desktop.png"]),Se=new xe("Three-Column Product Card w/ Reusable Components","Implementing a three-column design powered by Vue slots. This allows the components to be easily recreated and modified as necessary. This project was done with a single flexible Vue component utilized three times. Switches to a side-by-side display on wider screens.",["Vue.js","JS Components","Slots","responsive design",...we],"front-end-mentor-problems/3-column-card.html",["3-column-mobile.png","3-column-desktop.png"]),qe=new xe("Expenses Chart w/ Vue CLI",'Implementing a week long expense graph with Vue.js. This is done with Vue CLI so it\'s being compiled using Webpack. Each "element" is its own component which are kept generic for possible reusability. A lot of slots are used to help with this.',["Vue.js","Webpack","SPA Deployment","Slots","Responsive Design"],"fme-expenses-chart/",["expense-chart-mobile.png","expense-chart-desktop.png"],"https://github.com/sinjin25/fme-expenses-chart"),Te=[ye,qe,Ie,Pe,_e,Ce,Se];var $e={name:"App",components:{Button:q,Name:J,Bar:I,ImgView:D,View:re,ProjectDescription:G,Title:oe,Pagination:fe,ThumbView:ke},data(){return{projects:Te,index:0,pictureIndex:0,devLinks:!0}},watch:{index(){this.pictureIndex=0}},computed:{activeProj(){const e=this.projects[this.index];return e},src(){const e=this.activeProj;return this.pictureIndex>e.img.length&&(this.pictureIndex=0),e.img[this.pictureIndex]}},methods:{left(){0===this.index?this.index=this.projects.length-1:this.index--},right(){this.index===this.projects.length-1?this.index=0:this.index++},jump(e){this.index=e},setLink(){let e=this.activeProj.href;return this.devLinks?"https://sinjin25.github.io/"+e:(console.log("In dev mode"),"http://localhost:3000/"+e)},getScreenshotType(){const e=this.activeProj.img[this.pictureIndex];return e&&-1===e.search("mobile")?"desktop view":"mobile view"}}};n("da39");const Ve=k()($e,[["render",b]]);var Le=Ve,Me=(n("b059"),n("73ec"),n("ecee")),Ae=n("ad3d"),De=n("c074");Me["c"].add(De["a"],De["b"]),Object(o["c"])(Le).component("font-awesome-icon",Ae["a"]).mount("#app")},"6a34":function(e,t,n){e.exports=n.p+"img/perfume-desktop.fcf7d7a9.png"},7325:function(e,t,n){"use strict";n("eacb")},"73ec":function(e,t,n){},7540:function(e,t,n){"use strict";n("81a4")},7821:function(e,t,n){},"7a3a":function(e,t,n){e.exports=n.p+"img/expense-chart-desktop.54105dc0.png"},"80d9":function(e,t,n){"use strict";n("340a")},"81a4":function(e,t,n){},"8db7":function(e,t,n){},"8ea5":function(e,t,n){e.exports=n.p+"img/rating-mobile-2.950f64ef.png"},9001:function(e,t,n){e.exports=n.p+"img/3-column-desktop.cd85ced9.png"},9019:function(e,t,n){},"9e30":function(e,t,n){"use strict";n("c6dd")},a284:function(e,t,n){e.exports=n.p+"img/qr-mobile.e620923b.png"},b059:function(e,t,n){},b770:function(e,t,n){e.exports=n.p+"img/nft-desktop.e50a57b2.png"},bb6e:function(e,t,n){var o={"./3-column-desktop.png":"9001","./3-column-mobile.png":"4e54","./expense-chart-desktop.png":"7a3a","./expense-chart-mobile.png":"1dd2","./nft-desktop-2.png":"16bf","./nft-desktop.png":"b770","./nft-mobile-2.png":"e208","./nft-mobile.png":"45e6","./perfume-desktop.png":"6a34","./perfume-mobile.png":"ea8a","./qr-desktop.png":"e263","./qr-mobile.png":"a284","./rating-desktop-2.png":"4cb6","./rating-desktop.png":"1474","./rating-mobile-2.png":"8ea5","./rating-mobile.png":"30b9","./stats-preview-desktop.png":"d166","./stats-preview-mobile.png":"cac5"};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}c.keys=function(){return Object.keys(o)},c.resolve=i,e.exports=c,c.id="bb6e"},c6dd:function(e,t,n){},cac5:function(e,t,n){e.exports=n.p+"img/stats-preview-mobile.080d4691.png"},d061:function(e,t,n){},d166:function(e,t,n){e.exports=n.p+"img/stats-preview-desktop.c6919139.png"},da39:function(e,t,n){"use strict";n("8db7")},dead:function(e,t,n){"use strict";n("7821")},dfc6:function(e,t,n){},e208:function(e,t,n){e.exports=n.p+"img/nft-mobile-2.b762dfe7.png"},e263:function(e,t,n){e.exports=n.p+"img/qr-desktop.24e97a93.png"},ea15:function(e,t,n){"use strict";n("0194")},ea8a:function(e,t,n){e.exports=n.p+"img/perfume-mobile.deb6eac2.png"},eacb:function(e,t,n){},fefc:function(e,t,n){"use strict";n("9019")}});
//# sourceMappingURL=app.d2830dd0.js.map