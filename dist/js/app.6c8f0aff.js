(function(e){function t(t){for(var a,o,s=t[0],u=t[1],i=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return l.push.apply(l,i||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(l.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},o={app:0},n={app:0},l=[];function s(e){return u.p+"js/"+({"auto-sales":"auto-sales",carro1:"carro1",carro2:"carro2"}[e]||e)+"."+{"auto-sales":"7db219c3",carro1:"89803dab",carro2:"c39ebbb9"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"auto-sales":1,carro1:1,carro2:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var a="css/"+({"auto-sales":"auto-sales",carro1:"carro1",carro2:"carro2"}[e]||e)+"."+{"auto-sales":"2905d30e",carro1:"f558868a",carro2:"8d29787f"}[e]+".css",n=u.p+a,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var i=l[s],c=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(c===a||c===n))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],c=i.getAttribute("data-href");if(c===a||c===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete o[e],f.parentNode.removeChild(f),r(l)},f.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=l);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var d=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}n[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=c;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1208:function(e,t,r){},1913:function(e,t,r){e.exports=r.p+"media/file.404c2daa.mp4"},"1d4d":function(e,t,r){},"2d6d":function(e,t,r){e.exports=r.p+"img/facebook-icon.56d06d2d.png"},"363d":function(e,t,r){e.exports=r.p+"img/findurdreamcar-menu.cddc8d45.png"},3772:function(e,t,r){e.exports=r.p+"img/findurdreamcar.fbfd2c3f.png"},"48f3":function(e,t,r){"use strict";var a=r("1d4d"),o=r.n(a);o.a},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],l=(r("f9e3"),r("2dd8"),{}),s=l,u=(r("5c0b"),r("2877")),i=Object(u["a"])(s,o,n,!1,null,null,null),c=i.exports,d=r("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("video",{attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[a("source",{attrs:{src:r("1913"),type:"video/mp4"}})]),e._m(0),a("div",{staticClass:"nav1"},[a("img",{attrs:{src:r("363d"),alt:"JJ"}}),a("nav",[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/autosales"}},[e._v("Auto Sales")])],1),e._m(1)])])]),e._v(" "),a("FindUrDreamCar",{staticClass:"dream",attrs:{id:"dreamcar"}}),a("Footer")],1)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"findur"},[a("img",{attrs:{id:"mouse",src:r("a43e"),alt:"mouse"}}),a("img",{attrs:{id:"find-image",src:r("3772"),alt:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"#dreamcar"}},[e._v("findurdreamcar")])])}],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),e._v(" "),r("div",{staticClass:"form1"},[r("h2",[e._v("Find ur dream car:")]),r("form",{attrs:{action:"enviaemail.php",method:"post"}},[r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Make:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"mark",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Model:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"model",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Color:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"color",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Year:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"year",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"5","label-cols-lg":"2",label:"Max price:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"maxprice",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"5","label-cols-lg":"2",label:"Your Name:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"yourname",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"5","label-cols-lg":"2",label:"Your cellphone:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"cellphone",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"5","label-cols-lg":"2",label:"Your email:","label-for":"input-default"}},[r("b-form-input",{attrs:{name:"email",id:"input-default"}})],1),r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Comments:","label-for":"input-default"}},[r("b-form-textarea",{attrs:{name:"comments",id:"textarea-no-resize",placeholder:"comments here",rows:"4","no-resize":""}})],1),r("b-button",{attrs:{type:"submit",variant:"outline-primary"}},[e._v("Send")])],1)])])},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"invite"},[r("h3",[e._v("Looking for a specific vehicle?")]),r("h3",{attrs:{id:"findIt"}},[e._v(" We'll find it for you...")]),r("br"),r("p",[e._v("We can access auto auctions that aren't open to the public, and we also have access to dealers all over the country. We will track down exactly what you're looking for, we’ll inspect it, and then can arrange for shipping to your door.")]),r("br"),r("p",[e._v("Just fill out our easy Vehicle Finder form on our website. If there's something specific you're looking for beyond make and model, make sure you let us know in the comments box at the bottom of the form. Once you submit the form, one of our expert team members will call you to go over your request -")]),r("h2",[e._v("Be welcome to Find Ur Dream Car")])])}],h={},v=h,g=(r("7db2"),Object(u["a"])(v,p,b,!1,null,"7516c9e8",null)),y=g.exports,_=r("fd2d"),w={name:"Home",components:{FindUrDreamCar:y,Footer:_["a"]}},C=w,x=(r("9b1d"),Object(u["a"])(C,f,m,!1,null,"77eca7cc",null)),k=x.exports;a["default"].use(d["a"]);const E=[{path:"/",name:"Home",component:k},{path:"/#dreamcar",name:"findurdreamcar",component:k},{path:"/autosales",name:"AutoSales",component:()=>r.e("auto-sales").then(r.bind(null,"ad40"))},{path:"/carro1",name:"Carro1",component:()=>r.e("carro1").then(r.bind(null,"8ccc"))},{path:"/carro2",name:"Carro2",component:()=>r.e("carro2").then(r.bind(null,"c25d"))}],O=new d["a"]({mode:"history",routes:E});var j=O,S=r("2f62");a["default"].use(S["a"]);var P=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=r("0a63"),F=r.n(A),$=r("5f5b"),M=r("b1e0");a["default"].use($["a"]),a["default"].use(M["a"]),a["default"].use(F.a),a["default"].config.productionTip=!1,new a["default"]({router:j,store:P,VueCarousel:F.a,render:e=>e(c)}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),o=r.n(a);o.a},"7db2":function(e,t,r){"use strict";var a=r("8efc"),o=r.n(a);o.a},"8efc":function(e,t,r){},"9b02":function(e,t,r){e.exports=r.p+"img/youtube-icon.87dc5ee1.png"},"9b1d":function(e,t,r){"use strict";var a=r("1208"),o=r.n(a);o.a},"9c0c":function(e,t,r){},a43e:function(e,t,r){e.exports=r.p+"img/mouse.261aa481.gif"},d3cb:function(e,t,r){e.exports=r.p+"img/instagram-icon.c0b7aa03.png"},fd2d:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"conteudo"},[r("div",{staticClass:"endereco"},[r("h6",[e._v("Contact:")]),r("h6",[e._v("JJ Auto Sales")]),r("h6",[e._v("Find Ur Dream Car")]),r("Address",[r("h6",[e._v("Address: 20 Kings")]),r("h6",[e._v(" Hwy, New Rochelle, NY 10801")])]),r("h6",[e._v("Marcos")]),r("h6",[e._v("Phone: (914) 291-7211 - (914) 760-0161")])],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"social-midia"},[a("img",{attrs:{src:r("2d6d"),alt:""}}),a("img",{attrs:{src:r("d3cb"),alt:""}}),a("img",{attrs:{id:"youtube",src:r("9b02"),alt:""}})])}],n={},l=n,s=(r("48f3"),r("2877")),u=Object(s["a"])(l,a,o,!1,null,"e38e978e",null);t["a"]=u.exports}});
//# sourceMappingURL=app.6c8f0aff.js.map