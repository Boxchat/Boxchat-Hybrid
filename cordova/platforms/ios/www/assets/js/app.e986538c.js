(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],f=0,d=[];f<r.length;f++)o=r[f],a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"025b":function(t,e,n){},"02ff":function(t,e,n){"use strict";var s=n("a41f"),a=n.n(s);a.a},1268:function(t,e,n){"use strict";var s=n("c4c4"),a=n.n(s);a.a},1360:function(t,e,n){"use strict";var s=n("3f54"),a=n.n(s);a.a},2412:function(t,e,n){"use strict";var s=n("025b"),a=n.n(s);a.a},3987:function(t,e,n){},"3d29":function(t,e,n){"use strict";var s=n("3987"),a=n.n(s);a.a},"3f54":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=n("2877"),r={},c=Object(o["a"])(r,a,i,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("box-navbar"),n("box-tabbar"),n("box-left-menu"),n("router-view",{staticClass:"main"})],1)},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabbar",{attrs:{route:"","active-color":"#ae5da1","inactive-color":"gray"}},[n("van-tabbar-item",{attrs:{to:"/chat",icon:"chat"}},[t._v("\n    聊天\n  ")]),n("van-tabbar-item",{attrs:{to:"/radio",icon:"live"}},[t._v("\n    电台\n  ")])],1)},h=[],v={},g=Object(o["a"])(v,m,h,!1,null,null,null),p=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-nav-bar",{staticClass:"navbar",attrs:{title:"Boxchat","left-text":"menuLogo",fixed:""},on:{"click-left":t.onClickLeft}})},_=[],x={methods:{onClickLeft:function(){this.$store.commit("change_leftMenu")}}},C=x,w=(n("1360"),Object(o["a"])(C,b,_,!1,null,"e6cbec5c",null)),y=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{style:{height:"100%",width:"80%"},attrs:{position:"left"},on:{closed:t.onClosedLeft},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("box-usermsg"),n("box-menu-list")],1)},O=[],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"usermsg"},[n("div",{staticClass:"user-header"},[n("div",{staticClass:"user-header-img"})]),n("div",{staticClass:"user-content"},[n("div",{staticClass:"user-content-name"},[t._v("Mathon")]),n("div",{staticClass:"user-content-phone"},[t._v("+86 150-1234-1234")])])])}],M={},$=M,E=(n("9754"),Object(o["a"])($,k,L,!1,null,"19234981",null)),B=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu-list"}},[n("div",{staticClass:"for"},t._l(t.menuContent,function(e,s){return n("div",{key:s,staticClass:"group van-hairline--bottom"},t._l(e.list,function(e,s){return n("div",{key:s,staticClass:"list"},[n("van-icon",{attrs:{name:e.icon,size:"21px",color:"gray"}}),n("div",{staticClass:"list-content"},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)}),0)}),0)])},P=[],R={data:function(){return{menuContent:[{group:1,list:[{name:"新建群组",icon:"friends-o"},{name:"新建电台",icon:"tv-o"}]},{group:2,list:[{name:"联系人",icon:"user-circle-o"},{name:"收藏夹",icon:"label-o"},{name:"邀请朋友",icon:"smile-o"},{name:"设置",icon:"setting-o"},{name:"软件声明",icon:"info-o"}]}]}},computed:{len_menuContent:function(){return this.menuContent.length}}},T=R,z=(n("ae17"),Object(o["a"])(T,S,P,!1,null,"4dd52848",null)),N=z.exports,A={data:function(){return{show:""}},methods:{onClosedLeft:function(){this.$store.commit("change_leftMenu")}},computed:{mode_leftMenu:function(){return this.$store.state.mode_leftMenu}},watch:{mode_leftMenu:function(t){this.show=t}},created:function(){this.show=this.mode_leftMenu},components:{BoxUsermsg:B,BoxMenuList:N}},G=A,q=Object(o["a"])(G,j,O,!1,null,null,null),F=q.exports,J={components:{BoxTabbar:p,BoxNavbar:y,BoxLeftMenu:F}},D=J,U=(n("02ff"),Object(o["a"])(D,f,d,!1,null,"5dba7a60",null)),H=U.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-chat"},[n("van-pull-refresh",{staticClass:"refresh",on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.msg,function(e,s){return n("chat-list",{key:s,attrs:{msg:t.msg,index:s}})}),1)],1)},K=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"chat-list"}},[n("van-swipe-cell",{staticClass:"swipe-cell",attrs:{"right-width":80}},[n("van-button",{staticClass:"button--del",attrs:{slot:"right",square:"",type:"danger",text:"删除"},slot:"right"}),n("div",{staticClass:"main"},[n("div",{staticClass:"header"},[n("img",{staticClass:"header-img",attrs:{src:this.msg[this.index].user.icon}}),"radio"==this.tag?n("van-tag",{staticClass:"tag",attrs:{round:"",type:"success"}},[t._v("\n            Radio\n          ")]):t._e()],1),n("div",{staticClass:"msg"},[n("div",{staticClass:"base"},[n("div",{staticClass:"username"},[t._v(t._s(this.msg[this.index].user.names))]),n("div",{staticClass:"content"},[t._v(t._s(this.msg[this.index].message.content))])]),n("div",{staticClass:"more"},[n("div",{staticClass:"time"},[t._v(t._s(this.msg[this.index].message.time))]),n("div",{staticClass:"number"},[this.msg[this.index].message.number<=99?n("van-tag",{attrs:{round:"",type:"danger"}},[t._v(t._s(this.msg[this.index].message.number))]):n("van-tag",{attrs:{round:"",type:"danger"}},[t._v("99+")])],1)])])])],1)],1)},V=[],W={props:["tag","msg","index"],created:function(){console.log(this.msg[this.index].user.names)}},X=W,Y=(n("2412"),Object(o["a"])(X,Q,V,!1,null,"4342c44a",null)),Z=Y.exports,tt={data:function(){return{isLoading:!0,msg:[{user:{names:"游乐王子",icon:"https://img.fengz.me/images/2019/06/30/Gk4E.th.jpg"},message:{content:"我戴不戴面罩真的雨女无瓜！小朋友就要有小朋友的亚子！",time:"23:59",number:5}},{user:{names:"皮卡丘",icon:"https://img.fengz.me/images/2019/06/30/Gjgm.th.jpg"},message:{content:"皮卡！皮卡皮卡皮卡！皮卡丘！",time:"23:59",number:74}},{user:{names:"埋桑",icon:"https://img.fengz.me/images/2019/06/28/GlDp.th.jpg"},message:{content:"我实在不敢承认我这帅的一塌糊涂的事实！怎么办？！",time:"23:59",number:500}}]}},methods:{onRefresh:function(){var t=this;setTimeout(function(){t.isLoading=!1},1e3)}},components:{ChatList:Z}},et=tt,nt=(n("cada"),Object(o["a"])(et,I,K,!1,null,"09e24d8d",null)),st=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-radio"},[n("van-pull-refresh",{staticClass:"refresh",on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("chat-list",{attrs:{tag:"radio"}}),n("chat-list",{attrs:{tag:"radio"}}),n("chat-list",{attrs:{tag:"radio"}}),n("chat-list",{attrs:{tag:"radio"}}),n("chat-list",{attrs:{tag:"radio"}})],1)],1)},it=[],ot={data:function(){return{isLoading:!0}},methods:{onRefresh:function(){}},components:{ChatList:Z}},rt=ot,ct=(n("1268"),n("3d29"),Object(o["a"])(rt,at,it,!1,null,"7689a96f",null)),ut=ct.exports;s["a"].use(l["a"]);var lt=new l["a"]({base:"",routes:[{path:"/",name:"home",component:H,children:[{path:"/chat",component:st},{path:"/radio",component:ut}]}]}),ft=n("2f62");s["a"].use(ft["a"]);var dt=new ft["a"].Store({strict:!0,state:{mode_leftMenu:!1},mutations:{change_leftMenu:function(t){t.mode_leftMenu=!t.mode_leftMenu}},actions:{}}),mt=n("9483");Object(mt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ht=n("b970");n("157a");s["a"].use(ht["a"]),s["a"].config.productionTip=!1,new s["a"]({router:lt,store:dt,render:function(t){return t(u)}}).$mount("#app")},"729d":function(t,e,n){},9754:function(t,e,n){"use strict";var s=n("a153"),a=n.n(s);a.a},a153:function(t,e,n){},a41f:function(t,e,n){},ae17:function(t,e,n){"use strict";var s=n("e6a3"),a=n.n(s);a.a},c4c4:function(t,e,n){},cada:function(t,e,n){"use strict";var s=n("729d"),a=n.n(s);a.a},e6a3:function(t,e,n){}});
//# sourceMappingURL=app.e986538c.js.map