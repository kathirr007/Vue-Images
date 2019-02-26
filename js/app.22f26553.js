(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Vue-Images/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ff0":function(t,e,n){"use strict";var a=n("329b"),r=n.n(a);r.a},"329b":function(t,e,n){},4776:function(t,e,n){"use strict";var a=n("5787"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("b860"),o=n.n(r),i=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AppHeader"),n("div",{staticClass:"ui container"},[n("router-view")],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui secondary pointing menu"},[n("router-link",{staticClass:"item",attrs:{to:"/"}},[t._v("\n    Image Storage\n  ")]),n("div",{staticClass:"right menu"},[t.isLoggedIn?n("div",{staticClass:"horizontal"},[n("router-link",{staticClass:"item",attrs:{to:"/galleries"}},[t._v("Galleries")]),n("router-link",{staticClass:"item",attrs:{to:"/upload"}},[t._v("Upload")]),n("a",{staticClass:"item",on:{click:t.logout}},[t._v("Logout")])],1):n("a",{staticClass:"ui item",attrs:{href:"#"},on:{click:t.login}},[t._v("\n      Login\n    ")])])],1)},l=[],f=n("2f62"),p={name:"AppHeader",computed:Object(f["c"])(["isLoggedIn"]),methods:Object(f["b"])(["login","logout"])},d=p,m=(n("4776"),n("2877")),g=Object(m["a"])(d,u,l,!1,null,"0522eff6",null),h=g.exports,v={name:"App",components:{AppHeader:h},mounted:function(){},updated:function(){}},b=v,_=Object(m["a"])(b,s,c,!1,null,null,null),w=_.exports,k=(n("a481"),n("795b")),I=n.n(k),y=(n("ac6a"),n("5df3"),n("774e")),j=n.n(y),O=n("4328"),x=n.n(O),C=n("bc3a"),L=n.n(C),S="2565faab6b356c2",z="https://api.imgur.com",A={login:function(){var t={client_id:S,response_type:"token"};window.location="".concat(z,"/oauth2/authorize?").concat(x.a.stringify(t))},fetchImages:function(t){return L.a.get("".concat(z,"/3/account/me/images"),{headers:{Authorization:"Bearer ".concat(t)}})},uploadImages:function(t,e){var n=j()(t).map(function(t){var n=new FormData;return n.append("image",t),L.a.post("".concat(z,"/3/image"),n,{headers:{Authorization:"Bearer ".concat(e)}})});return I.a.all(n)}},P={token:window.localStorage.getItem("imgur_token")},$={isLoggedIn:function(t){return!!t.token}},E={login:function(){A.login()},finalizeLogin:function(t,e){var n=t.commit,a=x.a.parse(e.replace("#",""));n("setToken",a.access_token),window.localStorage.setItem("imgur_token",a.access_token),ct.push("/")},logout:function(t){var e=t.commit;e("setToken",null),window.localStorage.removeItem("imgur_token"),ct.push("/")}},T={setToken:function(t,e){t.token=e}},H={state:P,getters:$,actions:E,mutations:T},M=(n("96cf"),n("3b8d")),R={images:[]},B={allImages:function(t){return t.images}},D={fetchImages:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootState,a=e.commit,r=n.auth.token,t.next=4,A.fetchImages(r);case 4:o=t.sent,a("setImages",o.data.data);case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),uploadImages:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e,n){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.rootState,r=a.auth.token,t.next=4,A.uploadImages(n,r);case 4:ct.push("/");case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},F={setImages:function(t,e){t.images=e}},J={state:R,getters:B,actions:D,mutations:F};a["a"].use(f["a"]);var U=new f["a"].Store({modules:{auth:H,images:J}}),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Please wait...\n")])},G=[],q={name:"AuthHandler",methods:Object(f["b"])(["finalizeLogin"]),created:function(){this.finalizeLogin(window.location.hash)}},K=q,N=Object(m["a"])(K,V,G,!1,null,null,null),Q=N.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[t.isLoggedIn?n("div",{staticClass:"image-container",attrs:{id:"imageContainer"}},[n("v-gallery",{attrs:{images:t.allImages,dark:!0,caption:!0}},t._l(t.allImages,function(t){return n("a",{key:t.id,attrs:{href:"javascript:void(0);","data-image":t.link,title:t.title}},[n("div",{staticClass:"bgbox"},[n("img",{attrs:{src:t.link}}),n("span",{staticClass:"dark-overlay"})])])}),0)],1):n("h2",[t._v("Log in to get started!")])])},X=[],Y={name:"ImageList",computed:Object(f["c"])(["allImages","isLoggedIn"]),methods:Object(f["b"])(["fetchImages"]),data:function(){return{index:null}},created:function(){this.fetchImages()},mounted:function(){console.log(this.allImages)},updated:function(){}},Z=Y,tt=(n("2ff0"),Object(m["a"])(Z,W,X,!1,null,"ab1cc972",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropper"},[n("input",{attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:function(e){return t.uploadImages(e.target.files)}}}),n("span",[t._v("Drag files here!")])])},at=[],rt={name:"UploadForm",methods:Object(f["b"])(["uploadImages"])},ot=rt,it=(n("b417"),Object(m["a"])(ot,nt,at,!1,null,"0e5f4acd",null)),st=it.exports;n.d(e,"router",function(){return ct}),a["a"].use(i["a"]),a["a"].use(o.a);var ct=new i["a"]({mode:"history",base:"/Vue-Images/",routes:[{path:"/",component:et},{path:"/galleries",component:et},{path:"/upload",component:st},{path:"/oauth2/callback",component:Q}]});new a["a"]({router:ct,store:U,render:function(t){return t(w)}}).$mount("#app")},5787:function(t,e,n){},"6d3d":function(t,e,n){},b417:function(t,e,n){"use strict";var a=n("6d3d"),r=n.n(a);r.a}});
//# sourceMappingURL=app.22f26553.js.map