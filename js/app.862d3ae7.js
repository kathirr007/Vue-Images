(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Vue-Images/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("AppHeader"),n("div",{staticClass:"ui container"},[n("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui secondary pointing menu"},[n("router-link",{staticClass:"active item",attrs:{to:"/"}},[e._v("\n    Image Storage\n  ")]),n("div",{staticClass:"right menu"},[e.isLoggedIn?n("div",{staticClass:"horizontal"},[n("router-link",{staticClass:"item",attrs:{to:"/"}},[e._v("Galleries")]),n("router-link",{staticClass:"item",attrs:{to:"/upload"}},[e._v("Upload")]),n("a",{staticClass:"item",on:{click:e.logout}},[e._v("Logout")])],1):n("a",{staticClass:"ui item",attrs:{href:"#"},on:{click:e.login}},[e._v("\n      Login\n    ")])])],1)},s=[],u=n("2f62"),l={name:"AppHeader",computed:Object(u["c"])(["isLoggedIn"]),methods:Object(u["b"])(["login","logout"])},f=l,p=(n("def5"),n("2877")),d=Object(p["a"])(f,c,s,!1,null,"305497a8",null),m=d.exports,g={name:"App",components:{AppHeader:m}},h=g,v=Object(p["a"])(h,r,i,!1,null,null,null),b=v.exports,_=(n("a481"),n("795b")),w=n.n(_),I=(n("ac6a"),n("5df3"),n("774e")),k=n.n(I),y=n("4328"),O=n.n(y),j=n("bc3a"),x=n.n(j),L="fbb60590d660043",S="https://kathirr007.github.io/Vue-Images",C={login:function(){var e={client_id:L,response_type:"token"};window.location="".concat(S,"/oauth2/authorize?").concat(O.a.stringify(e))},fetchImages:function(e){return x.a.get("".concat(S,"/3/account/me/images"),{headers:{Authorization:"Bearer ".concat(e)}})},uploadImages:function(e,t){var n=k()(e).map(function(e){var n=new FormData;return n.append("image",e),x.a.post("".concat(S,"/3/image"),n,{headers:{Authorization:"Bearer ".concat(t)}})});return w.a.all(n)}},z={token:window.localStorage.getItem("imgur_token")},A={isLoggedIn:function(e){return!!e.token}},P={login:function(){C.login()},finalizeLogin:function(e,t){var n=e.commit,a=O.a.parse(t.replace("#",""));n("setToken",a.access_token),window.localStorage.setItem("imgur_token",a.access_token),ie.push("/")},logout:function(e){var t=e.commit;t("setToken",null),window.localStorage.removeItem("imgur_token"),ie.push("/")}},$={setToken:function(e,t){e.token=t}},E={state:z,getters:A,actions:P,mutations:$},T=(n("96cf"),n("3b8d")),H={images:[]},M={allImages:function(e){return e.images}},R={fetchImages:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var n,a,o,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.rootState,a=t.commit,o=n.auth.token,e.next=4,C.fetchImages(o);case 4:r=e.sent,a("setImages",r.data.data);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),uploadImages:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,n){var a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.rootState,o=a.auth.token,e.next=4,C.uploadImages(n,o);case 4:ie.push("/");case 5:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},V={setImages:function(e,t){e.images=t}},B={state:H,getters:M,actions:R,mutations:V};a["a"].use(u["a"]);var D=new u["a"].Store({modules:{auth:E,images:B}}),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Please wait...\n")])},J=[],U={name:"AuthHandler",methods:Object(u["b"])(["finalizeLogin"]),created:function(){this.finalizeLogin(window.location.hash)}},G=U,q=Object(p["a"])(G,F,J,!1,null,null,null),K=q.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLoggedIn?n("div",{staticClass:"image-container"},e._l(e.allImages,function(e){return n("img",{key:e.id,attrs:{src:e.link}})}),0):n("h2",[e._v("Log in to get started!")])])},Q=[],W={name:"ImageList",computed:Object(u["c"])(["allImages","isLoggedIn"]),methods:Object(u["b"])(["fetchImages"]),created:function(){this.fetchImages()},mounted:function(){console.log(this.allImages)},updated:function(){console.log(this.allImages)}},X=W,Y=(n("d3a2"),Object(p["a"])(X,N,Q,!1,null,"2aa844de",null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropper"},[n("input",{attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:function(t){return e.uploadImages(t.target.files)}}}),n("span",[e._v("Drag files here!")])])},te=[],ne={name:"UploadForm",methods:Object(u["b"])(["uploadImages"])},ae=ne,oe=(n("b417"),Object(p["a"])(ae,ee,te,!1,null,"0e5f4acd",null)),re=oe.exports;n.d(t,"router",function(){return ie}),a["a"].use(o["a"]);var ie=new o["a"]({mode:"history",base:"/Vue-Images/",routes:[{path:"/",component:Z},{path:"/upload",component:re},{path:"/oauth2/callback",component:K}]});new a["a"]({router:ie,store:D,render:function(e){return e(b)}}).$mount("#app")},"6cab":function(e,t,n){},"6d3d":function(e,t,n){},b417:function(e,t,n){"use strict";var a=n("6d3d"),o=n.n(a);o.a},b9bb:function(e,t,n){},d3a2:function(e,t,n){"use strict";var a=n("6cab"),o=n.n(a);o.a},def5:function(e,t,n){"use strict";var a=n("b9bb"),o=n.n(a);o.a}});
//# sourceMappingURL=app.862d3ae7.js.map