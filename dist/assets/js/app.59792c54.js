(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"03ba":function(t,e,o){"use strict";var n=o("8c39"),a=o.n(n);a.a},"0d66":function(t,e,o){var n=o("c80a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("85cb").default;a("6ed838a0",n,!0,{sourceMap:!1,shadowMode:!1})},1:function(t,e){},"16a2":function(t,e,o){"use strict";var n=o("0d66"),a=o.n(n);a.a},"28b4":function(t,e,o){var n=o("fe27");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("85cb").default;a("19239bb1",n,!0,{sourceMap:!1,shadowMode:!1})},"2e03":function(t,e,o){t.exports=o.p+"assets/img/iconfont.7cb1a18f.svg"},"3b85":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[t._m(0),o("div",{staticClass:"title"},[t._v("遊戲選單")]),o("div",{staticClass:"content"},[o("Row",t._l(t.category,(function(e,n){return o("Col",{key:e.id,attrs:{span:"6"}},[o("router-link",{attrs:{to:"/search/index?id="+e.id}},[o("div",{staticClass:"content-item"},[o("div",{staticClass:"item-img"},[o("img",{attrs:{src:t.imageHost+e.image}})]),o("div",{staticClass:"content-item-title"},[t._v(t._s(e.title))])])])],1)})),1)],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"top"},[t._v("\n        石頭網路 卡牌遊戲 自助查詢平台\n        "),o("div",{staticClass:"top-number"},[t._v("8591商家編號:No.1139934")])])}],i=o("eecb"),r=o("599f"),s={components:{},mixins:[i["a"]],data:()=>({imageHost:r["a"].imageHost,category:[]}),created(){this.handleCategory()},methods:{handleCategory:function(){this.request({url:"/api/category",method:"POST",data:{},success:t=>{this.category=t},error:t=>{},complete:t=>{}})},handleGoItem(){this.$router.push({path:"/search/index"})}}},c=s,l=(o("4e59"),o("623f")),d=Object(l["a"])(c,n,a,!1,null,"3a9ab41f",null),u=d.exports;e["default"]=[{path:"/home/index",component:u,meta:{requireAuth:!1}}]},"41c7":function(t,e,o){"use strict";o.r(e),e["default"]={state:{search:{testName:""},pageIndex:1,pageSize:10},mutations:{test(t,e){t=Object.assign(t,e)}}}},"45cf":function(t,e,o){var n={"./about/router.js":"f0c3","./home/router.js":"3b85","./search/router.js":"a872"};function a(t){var e=i(t);return o(e)}function i(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="45cf"},"46d2":function(t,e,o){var n=o("83d9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("85cb").default;a("7b6b5cdc",n,!0,{sourceMap:!1,shadowMode:!1})},"4be8":function(t,e,o){(function(e,o){"use strict";"object"===typeof t.exports?t.exports=e.document?o(e,!0):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return o(t)}:o(e)})("undefined"!==typeof window?window:this,(function(t,e){"use strict";if("undefined"===typeof t)throw new Error("Geetest requires browser environment");var o=t.document,n=t.Math,a=o.getElementsByTagName("head")[0];function i(t){this._obj=t}function r(t){var e=this;new i(t)._each((function(t,o){e[t]=o}))}i.prototype={_each:function(t){var e=this._obj;for(var o in e)e.hasOwnProperty(o)&&t(o,e[o]);return this}},r.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){var t=this;return c(t.type)?t.fallback_config[t.type]:t.new_captcha?t.fallback_config.fullpage:t.fallback_config.slide},_extend:function(t){var e=this;new i(t)._each((function(t,o){e[t]=o}))}};var s=function(t){return"number"===typeof t},c=function(t){return"string"===typeof t},l=function(t){return"boolean"===typeof t},d=function(t){return"object"===typeof t&&null!==t},u=function(t){return"function"===typeof t},f={},m={},h=function(){return parseInt(1e4*n.random())+(new Date).valueOf()},p=function(t,e){var n=o.createElement("script");n.charset="UTF-8",n.async=!0,n.onerror=function(){e(!0)};var i=!1;n.onload=n.onreadystatechange=function(){i||n.readyState&&"loaded"!==n.readyState&&"complete"!==n.readyState||(i=!0,setTimeout((function(){e(!1)}),0))},n.src=t,a.appendChild(n)},b=function(t){return t.replace(/^https?:\/\/|\/$/g,"")},g=function(t){return t=t.replace(/\/+/g,"/"),0!==t.indexOf("/")&&(t="/"+t),t},v=function(t){if(!t)return"";var e="?";return new i(t)._each((function(t,o){(c(o)||s(o)||l(o))&&(e=e+encodeURIComponent(t)+"="+encodeURIComponent(o)+"&")})),"?"===e&&(e=""),e.replace(/&$/,"")},A=function(t,e,o,n){e=b(e);var a=g(o)+v(n);return e&&(a=t+e+a),a},y=function(t,e,o,n,a){var i=function(r){var s=A(t,e[r],o,n);p(s,(function(t){t?r>=e.length-1?a(!0):i(r+1):a(!1)}))};i(0)},w=function(e,o,n,a){if(d(n.getLib))return n._extend(n.getLib),void a(n);if(n.offline)a(n._get_fallback_config());else{var i="geetest_"+h();t[i]=function(e){"success"===e.status?a(e.data):e.status?a(n._get_fallback_config()):a(e),t[i]=void 0;try{delete t[i]}catch(o){}},y(n.protocol,e,o,{gt:n.gt,callback:i},(function(t){t&&a(n._get_fallback_config())}))}},x=function(t,e){var o={networkError:"网络错误"};if("function"!==typeof e.onError)throw new Error(o[t]);e.onError(o[t])},k=function(){return!!t.Geetest};k()&&(m.slide="loaded");var C=function(e,o){var n=new r(e);e.https?n.protocol="https://":e.protocol||(n.protocol=t.location.protocol+"//"),w([n.api_server||n.apiserver],n.type_path,n,(function(e){var a=e.type,i=function(){n._extend(e),o(new t.Geetest(n))};f[a]=f[a]||[];var r=m[a]||"init";"init"===r?(m[a]="loading",f[a].push(i),y(n.protocol,e.static_servers||e.domains,e[a]||e.path,null,(function(t){if(t)m[a]="fail",x("networkError",n);else{m[a]="loaded";for(var e=f[a],o=0,i=e.length;o<i;o+=1){var r=e[o];u(r)&&r()}f[a]=[]}}))):"loaded"===r?i():"fail"===r?x("networkError",n):"loading"===r&&f[a].push(i)}))};return t.initGeetest=C,C}))},"4e59":function(t,e,o){"use strict";var n=o("46d2"),a=o.n(n);a.a},"506b":function(t,e,o){"use strict";o.r(e),e["default"]={state:{search:{testName:""},pageIndex:1,pageSize:10},mutations:{test(t,e){t=Object.assign(t,e)}}}},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("0261"),a=o("1bee"),i=o("8876"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"body"},[o("router-view")],1)},s=[],c=o("eecb"),l={components:{},mixins:[c["a"]],data:()=>({}),created(){this.handleLoad()},mounted(){},methods:{handleLoad:function(){this.request({url:"/api/category",method:"POST",data:{},success:t=>{localStorage.setItem("token_key",JSON.stringify(t))},error:t=>{},complete:t=>{}})}}},d=l,u=(o("b415"),o("623f")),f=Object(u["a"])(d,r,s,!1,null,"57fc1578",null),m=f.exports,h=(o("cbcd"),o("f33e"),o("0414")),p=o.n(h),b=(o("d69a"),o("b15f")),g=o.n(b),v=o("82ae"),A=o.n(v),y=o("9306"),w=o.n(y);const x="token_1.0.0",k="user_1.0.0",C="wallet_code_1.0.0";function _(){let t=localStorage.getItem(x);return null===t||"undefined"===typeof t?"":t}function z(t){localStorage.setItem(x,t)}function E(){let t=localStorage.getItem(k);return t}function S(t){localStorage.setItem(k,t)}function O(){let t=localStorage.getItem(C);return t}function j(t){localStorage.setItem(C,t)}var Y={getToken:_,setToken:z,getUser:E,setUser:S,getWalletCode:O,setWalletCode:j};n["default"].use(p.a),n["default"].prototype.$notification=g.a,n["default"].prototype.$storage=Y,n["default"].config.productionTip=!1,n["default"].use(w.a),n["default"].prototype.axios=A.a,o("4be8"),n["default"].prototype.$initGeet=initGeetest,n["default"].use(a["a"]);var T=[],I=o("45cf");I.keys().map(t=>{T=T.concat(I(t).default)});var M=new a["a"]({mode:"history",base:"/",routes:T}),q="/home/index";M.beforeEach((t,e,o)=>{"/"==t.path&&o({path:q}),t.meta.requireAuth?Y.getToken()?o():o("/login"):o(),o()}),n["default"].use(i["a"]);var G={},B=o("abb5");B.keys().map(t=>{for(var e in B(t).default.mutations)G[e]=B(t).default});var P=new i["a"].Store({modules:G});new n["default"]({router:M,store:P,render:t=>t(m)}).$mount("#app")},"599f":function(t,e,o){"use strict";e["a"]={host:"http://api.sticweb.com",imageHost:"http://api.sticweb.com/adminFile/"}},"61b5":function(t,e,o){t.exports=o.p+"assets/img/logo.a423d1bb.jpeg"},"673c":function(t,e,o){"use strict";o.r(e),e["default"]={state:{search:{testName:""},pageIndex:1,pageSize:10},mutations:{test(t,e){t=Object.assign(t,e)}}}},"6e21":function(t,e,o){var n=o("c58f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("85cb").default;a("373dba9e",n,!0,{sourceMap:!1,shadowMode:!1})},7523:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"top"},[o("span",{staticClass:"top-back"},[o("Icon",{attrs:{type:"md-menu"},on:{click:function(e){t.isShow=!t.isShow}}})],1),t._v("\n        "+t._s(t.title)+"\n        "),o("div",{staticClass:"top-number"},[t._v("8591商家編號:No.1139934")])]),t.isShow?o("div",{staticClass:"menu"},[o("div",{staticClass:"menu-header"},[o("Icon",{staticClass:"menu-header-icon",attrs:{type:"md-close"},on:{click:function(e){t.isShow=!t.isShow}}}),t._v("\n            遊戲選單\n        ")],1),o("div",{staticClass:"menu-body"},[o("p",{on:{click:t.handleIndex}},[t._v("返回首页")]),t._l(t.list,(function(e){return o("p",{key:e.id,on:{click:function(o){return t.handleCategory(e.id)}}},[t._v(t._s(e.title))])})),o("p",{on:{click:t.handleAbout}},[t._v("關于我們")])],2)]):t._e(),t.isShow?o("div",{staticClass:"masl",on:{click:function(e){t.isShow=!t.isShow}}}):t._e()])},a=[],i={components:{},props:{title:{required:!0}},data:()=>({isShow:!1,list:[]}),mounted(){this.list=JSON.parse(localStorage.getItem("token_key"))},methods:{handleIndex:function(){this.$router.push({path:"/home/index"})},handleAbout:function(){"/about"!=this.$route.path?this.$router.push({path:"/about"}):this.isShow=!1},handleCategory:function(t){"/search/index"==this.$route.path?window.location.href="http://"+window.location.host+"/search/index?id="+t:this.$router.push({path:"/search/index",query:{id:t}})},handleRightText:function(){this.$emit("handleRightText")}}},r=i,s=(o("16a2"),o("623f")),c=Object(s["a"])(r,n,a,!1,null,"441a9444",null);e["a"]=c.exports},"83d9":function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,".top[data-v-3a9ab41f]{background-color:#000;height:4.375rem;z-index:3;box-shadow:.125rem .125rem .375rem rgba(0,0,0,.2);position:fixed;left:0;right:0;top:0;font-size:1.875rem;line-height:4.375rem;font-weight:700;color:#fff;text-align:center}.top-number[data-v-3a9ab41f]{height:4.375rem;max-width:71.25rem;padding:0 1.25rem;margin:-4.375rem auto auto auto;text-align:right;font-size:.75rem}.title[data-v-3a9ab41f]{font-size:1.75rem;line-height:2rem;font-weight:700;color:#000;text-align:center;margin-bottom:1.5625rem;margin-top:6.25rem}.content[data-v-3a9ab41f]{max-width:71.25rem;padding:0 .625rem;margin:auto;overflow:hidden}.content-item[data-v-3a9ab41f]{margin:.625rem;border:.0625rem solid grey;position:relative;background-color:#f0f0f0}.item-img[data-v-3a9ab41f]{position:relative;width:100%;height:0;padding-bottom:100%;overflow:hidden;background:#fff}.item-img img[data-v-3a9ab41f]{position:absolute;width:100%;height:100%;top:0;left:0;object-fit:cover}.content-item-title[data-v-3a9ab41f]{text-align:center;height:3rem;margin:.3125rem 0;padding:0 1rem;color:#1e1e1e;font-size:1.25rem;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",""])},"8c39":function(t,e,o){var n=o("fc93");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("85cb").default;a("99cbb1fc",n,!0,{sourceMap:!1,shadowMode:!1})},"92f6":function(t,e,o){t.exports=o.p+"assets/fonts/iconfont.fc8fb588.eot"},a374:function(t,e,o){var n=o("5454");e=t.exports=o("690e")(!1),e.push([t.i,"@font-face{font-family:iconfont;src:url("+n(o("92f6"))+");src:url("+n(o("92f6"))+'#iefix) format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff"),url('+n(o("c1b5"))+') format("truetype"),url('+n(o("2e03"))+'#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:1rem;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-check-circle:before{content:"\\E77D"}.icon-close-circle:before{content:"\\E77E"}.icon-left-circle:before{content:"\\E77F"}.icon-plus-circle:before{content:"\\E781"}.icon-poweroff:before{content:"\\E78C"}.icon-setting:before{content:"\\E78E"}.icon-eye:before{content:"\\E78F"}.icon-appstore:before{content:"\\E792"}.icon-team:before{content:"\\E7AE"}.icon-barchart:before{content:"\\E7AF"}.icon-database:before{content:"\\E7B0"}.icon-filedone:before{content:"\\E7B4"}.icon-file-excel:before{content:"\\E7B7"}.icon-file-pdf:before{content:"\\E7B8"}.icon-delete:before{content:"\\E7C3"}.icon-home:before{content:"\\E7C6"}.icon-shop:before{content:"\\E7CE"}.icon-shopping:before{content:"\\E7CF"}.icon-edit:before{content:"\\E7E1"}.icon-search:before{content:"\\E7E3"}',""])},a872:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("Header",{attrs:{title:"石頭網路 卡牌遊戲 自助查詢平台"}}),o("div",{staticClass:"search"},[o("div",{staticClass:"search-box"},t._l(t.key,(function(e,n){return o("span",{key:n+"s"},[n>0?o("span",[t._v("+")]):t._e(),t._v("\n                "+t._s(e.title)+"\n            ")])})),0),o("div",{staticClass:"search-footer"},[o("a",{attrs:{href:"#miao"}},[o("span",{staticClass:"search-footer-item",on:{click:t.handleGroup}},[t._v("搜 尋")])]),o("span",{staticClass:"search-footer-item",on:{click:t.handleBack0}},[t._v("重 選")])])]),o("div",{staticClass:"content"},t._l(t.card.data,(function(e,n){return o("div",{key:e.id+"l",staticClass:"content-item",on:{click:function(o){return t.handleAdd(e,n)}}},[o("div",{staticClass:"item-img"},[o("img",{attrs:{src:t.imageHost+e.image}})]),o("div",{staticClass:"content-item-title"},[t._v(t._s(e.title))]),e.active?o("div",{staticClass:"mask"}):t._e(),e.active?o("Icon",{staticClass:"icon",attrs:{size:"56",type:"md-checkmark-circle-outline"}}):t._e()],1)})),0),o("div",{staticClass:"return",attrs:{id:"miao"}},[t.group.length>0?o("div",{staticClass:"return-tab"},[o("span",{staticClass:"return-tab-item",class:t.isItemTab?"on":"",on:{click:function(e){t.isItemTab=!0}}},[o("Icon",{attrs:{type:"ios-images-outline"}}),t._v("\n                圖片顯示2\n            ")],1),o("span",{staticClass:"return-tab-item",class:t.isItemTab?"":"on",on:{click:function(e){t.isItemTab=!1}}},[o("Icon",{attrs:{type:"ios-grid-outline"}}),t._v("\n                名稱顯示\n            ")],1)]):t._e(),o("div",{staticClass:"return-content"},t._l(t.group,(function(e,n){return o("div",{key:n+"e",staticClass:"return-content-box"},[o("div",{staticClass:"return-content-right"},[o("div",{staticClass:"return-content-right-title"},[t._v(t._s(e.title))]),o("div",{staticClass:"return-content-right-box"},[t._l(e.cards,(function(e,n){return t.isItemTab?o("div",{key:n+"z",staticClass:"item"},[o("img",{attrs:{src:t.imageHost+e.image}}),o("p",[t._v(t._s(e.title))])]):t._e()})),t._l(e.cards,(function(e,n){return t.isItemTab?t._e():o("span",{key:n+"q"},[n>0?o("storn",[t._v("|")]):t._e(),t._v(t._s(e.title)+"\n                    ")],1)}))],2)])])})),0)])],1)},a=[],i=o("eecb"),r=o("7523"),s=o("599f"),c={components:{Header:r["a"]},mixins:[i["a"]],data:()=>({key:[],isItemTab:!0,imageHost:s["a"].imageHost,card:{},total:0,size:80,group:[]}),created(){this.handleLoad()},methods:{handleBack0(){this.isItemTab=!0,this.key=[],this.group=[],this.handleLoad()},handleAdd:function(t,e){this.card.data[e].active?(this.card.data[e].active=!1,this.key.map((e,o)=>{e.id==t.id&&this.key.splice(o,1)})):(this.card.data[e].active=!0,this.key.push(t)),console.log(this.key)},handleLoad:function(){this.request({url:"/api/card",method:"GET",data:{id:this.$route.query.id,size:this.size},success:t=>{this.card=t,this.card.data.map(t=>{t.active=!1}),this.total=t.total},error:t=>{},complete:t=>{}})},handleGroup:function(){let t=[];this.key.map(e=>{t.push(e.id)}),0!=t.length?this.request({url:"/api/group",method:"POST",data:{id:t},success:t=>{this.group=t},error:t=>{},complete:t=>{}}):this.$Message.error({content:"搜尋不能爲空",duration:3})}}},l=c,d=(o("03ba"),o("623f")),u=Object(d["a"])(l,n,a,!1,null,"2b56bc3e",null),f=u.exports;e["default"]=[{path:"/search/index",component:f,meta:{requireAuth:!1}}]},abb5:function(t,e,o){var n={"./about/store.js":"41c7","./home/store.js":"506b","./search/store.js":"673c"};function a(t){var e=i(t);return o(e)}function i(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="abb5"},b15f:function(t,e){var o={};function n(t,e,n){var a=[e,n],i=o[t];Array.isArray(i)?i.push(a):o[t]=[a]}function a(t,e){var n=o[t];Array.isArray(n)&&(o[t]=n.filter(t=>t[0]!=e))}function i(t,e){var n=o[t];Array.isArray(n)&&n.map(t=>{var o=t[0],n=t[1];n.call(o,e)})}e.on=n,e.remove=a,e.emit=i},b415:function(t,e,o){"use strict";var n=o("6e21"),a=o.n(n);a.a},b484:function(t,e,o){"use strict";var n=o("28b4"),a=o.n(n);a.a},c1b5:function(t,e,o){t.exports=o.p+"assets/fonts/iconfont.00cbb671.ttf"},c58f:function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,"",""])},c80a:function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,".top[data-v-441a9444]{background-color:#000;height:4.375rem;z-index:3;box-shadow:.125rem .125rem .375rem rgba(0,0,0,.2);position:fixed;left:0;right:0;top:0;font-size:1.875rem;line-height:4.375rem;font-weight:700;color:#fff;text-align:center}.top-number[data-v-441a9444]{height:4.375rem;max-width:71.25rem;padding:0 1.25rem;margin:-4.375rem auto auto auto;text-align:right;font-size:.75rem}.top-back[data-v-441a9444]{float:left;margin-left:.625rem}.masl[data-v-441a9444]{right:0;bottom:0;background:#000;opacity:.6;z-index:998}.masl[data-v-441a9444],.menu[data-v-441a9444]{position:fixed;top:0;left:0}.menu[data-v-441a9444]{width:18.75rem;background:#fff;font-size:1.1875rem;z-index:999;height:100vh;overflow-y:scroll}.menu-header[data-v-441a9444]{background-color:#000;height:4.375rem;line-height:4.375rem;text-align:center;color:#fff;font-weight:700;position:relative}.menu-header-icon[data-v-441a9444]{position:absolute;font-size:1.875rem;top:1.25rem;left:.625rem}.menu-body p[data-v-441a9444]{color:#1e1e1e;cursor:pointer;padding:1.25rem .625rem;border-bottom-width:.0625rem;border-bottom-style:solid;border-bottom-color:#e6e6e6;box-shadow:0 .0625rem .0625rem #fff}",""])},cbcd:function(t,e,o){var n=o("a374");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("85cb").default;a("7e943801",n,!0,{sourceMap:!1,shadowMode:!1})},cfdd:function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,"*{font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body,dd,div,dl,dt,form,img,input,li,ol,p,pre,span,strong,td,tr,ul{margin:0;padding:0;border:0;background-repeat:no-repeat}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}img{border:0;max-width:100%}li,ul{list-style:none}em{font-style:normal}a{outline:none}a,a:hover{text-decoration:none}a:hover{background-repeat:no-repeat}a,area{blr:expression(this.onFocus=this.blur())}body,html{margin:0;padding:0;width:100%;height:100%;color:#333}.no-data{text-align:center;padding-top:15rem}.no-data-image-icon{width:3.75rem}.no-data-text{color:#666;font-size:.875rem}.van-swipe-cell__right{width:4.125rem}.van-dialog__confirm,.van-dialog__confirm:active{color:#b20004}.van-swipe__indicator--active{background-color:#b20004!important}.van-swipe__indicator{width:.625rem;height:.125rem;border-radius:0!important}",""])},eecb:function(t,e,o){"use strict";var n=o("a79b"),a=o.n(n),i=o("599f");e["a"]={data(){return{}},components:{},created(){},methods:{request(t){t.url.startsWith("http")||(t.url=i["a"].host+t.url);let e={Accept:"application/vnd.guest.v1+json",Authorization:this.$storage.getToken()};t.headers=t.headers?Object.assign(t.headers,e):e,t.method=t.method?t.method:"POST",t.url.startsWith("http")||(t.url=this.host+t.url),a()({url:t.url,type:"json",method:t.method,crossOrigin:!0,headers:t.headers,data:t.data,success:e=>{t.success(e)},error:e=>{t.error(e)},complete:e=>{t.complete(e)}})},handleBack:function(){this.$router.back(-1)}}}},f0c3:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("Header",{attrs:{title:"石頭網路 卡牌遊戲 自助查詢平台"}}),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-body"},[n("h2",[t._v("關于我們")]),n("img",{staticClass:"logo",attrs:{src:o("61b5"),alt:""}}),n("div",{staticClass:"main-body-box"},[n("div",{staticClass:"main-body-item"},[n("h3",[t._v("手遊端遊技術開發")]),n("p",[t._v("石頭遊戲團隊與業界多位大型遊戲作者合作，可訂製任何遊戲腳本，讓人工智能發輝最大極限")])]),n("div",{staticClass:"main-body-item"},[n("h3",[t._v("海內外銷售")]),n("p",[t._v("提供海內外各大國家銷售 韓國、日本、美國、台灣、香港")]),n("p",[t._v("可代售任何遊戲相關物品")]),n("p",[t._v("可代儲台灣、大陸遊戲 (皆為正規)")])]),n("div",{staticClass:"main-body-item"},[n("h3",[t._v("服務時間及聯絡方式")]),n("p",[t._v("聯絡方式:LINE:stones1126 (石頭遊戲客服)")]),n("p",[t._v("服務時間:早上8點-晚上12點(人在隨時回復)")])])])])}],i=o("eecb"),r=o("7523"),s={components:{Header:r["a"]},mixins:[i["a"]],data:()=>({}),created(){},methods:{handleWallet:function(){this.request({url:"/api/user/wallet-info",method:"POST",data:{code:this.$route.query.code?this.$route.query.code:this.$storage.getWalletCode()},success:t=>{this.wallet=t;let e=0;this.wallet.total=t.map(t=>{e+=t.currency.rmb_price*t.balance}),this.wallet.total=e},error:t=>{},complete:t=>{}})}}},c=s,l=(o("b484"),o("623f")),d=Object(l["a"])(c,n,a,!1,null,"0b39e3f6",null),u=d.exports;e["default"]=[{path:"/about",component:u,meta:{requireAuth:!1}}]},f33e:function(t,e,o){var n=o("cfdd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("85cb").default;a("7545a8c2",n,!0,{sourceMap:!1,shadowMode:!1})},fc93:function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,".main[data-v-2b56bc3e]{margin-bottom:2.5rem}.search[data-v-2b56bc3e]{max-width:71.25rem;padding:6.25rem 1.25rem 0 1.25rem;margin:auto}.search-box[data-v-2b56bc3e]{background-color:#f0f0f0;padding:1.875rem;border-radius:.3125rem;font-size:1.25rem}.search-box storn[data-v-2b56bc3e]{color:#f0f0f0}.search-footer[data-v-2b56bc3e]{text-align:center;margin:1.875rem 1.25rem}.search-footer .search-footer-item[data-v-2b56bc3e]{display:inline-block;height:3rem;line-height:3rem;color:#fff;margin:0 .75rem;cursor:pointer;padding:0 3.125rem;font-size:1.25rem;border-radius:.25rem;background-color:#000}.content[data-v-2b56bc3e]{max-width:71.25rem;padding:0 .625rem;margin:auto;overflow:hidden}.content-item[data-v-2b56bc3e]{width:8.75rem;margin:.625rem;border:.0625rem solid grey;position:relative;background-color:#f0f0f0;cursor:pointer;float:left}.content-item[data-v-2b56bc3e]:nth-child(7n){margin-right:0}.content-item .mask[data-v-2b56bc3e]{position:absolute;top:0;right:0;bottom:0;left:0;background:#000;opacity:.6}.content-item .icon[data-v-2b56bc3e]{position:absolute;top:40%;right:0;left:0;color:#f0f0f0}.item-img img[data-v-2b56bc3e]{width:8.75rem;height:18.375rem;object-fit:cover}.content-item-title[data-v-2b56bc3e]{text-align:center;height:3rem;margin:.3125rem 0;padding:0 1rem;color:#1e1e1e;font-size:1.25rem;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.return[data-v-2b56bc3e]{padding:4.375rem .625rem 0 .625rem}.return-tab[data-v-2b56bc3e]{font-size:1.25rem}.return-tab .on[data-v-2b56bc3e]{color:#fff;background:#000}.return-tab-item[data-v-2b56bc3e]{height:2.5rem;line-height:2.5rem;display:inline-block;background:#f0f0f0;margin-right:.0625rem;padding:0 1.875rem;cursor:pointer}.return-content-box[data-v-2b56bc3e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:.25rem}.return-content-left[data-v-2b56bc3e]{width:12.5rem;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:.25rem;font-size:1.25rem}.return-content-left[data-v-2b56bc3e],.return-content-right[data-v-2b56bc3e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:.0625rem solid #c8c8c8}.return-content-right[data-v-2b56bc3e]{padding:.625rem;overflow:hidden}.return-content-right[data-v-2b56bc3e],.return-content-right-box[data-v-2b56bc3e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.return-content-right-title[data-v-2b56bc3e]{width:7.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-right:.0625rem solid #c8c8c8;margin-right:1rem;padding-right:.625rem;color:#1e1e1e;font-size:1.25rem;margin-bottom:.625rem}.return-content-right .item[data-v-2b56bc3e]{width:6.375rem;float:left;margin-right:.625rem;margin-bottom:.625rem;text-align:center}.return-content-right .item img[data-v-2b56bc3e]{width:6.375rem;height:13.375rem}.return-content-right .item p[data-v-2b56bc3e]{height:2.125rem;font-size:1.125rem;line-height:1.125rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.return-content-right span[data-v-2b56bc3e]{font-size:1.125rem;display:inline-block;margin:.25rem 0}.return-content-right storn[data-v-2b56bc3e]{display:inline-block;margin:0 .5rem}",""])},fe27:function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,".main-body[data-v-0b39e3f6]{text-align:center;margin-top:9.375rem}.main-body h2[data-v-0b39e3f6]{font-size:2.5rem}.main-body .logo[data-v-0b39e3f6]{display:block;max-width:71.25rem;margin:auto}.main-body p[data-v-0b39e3f6]{font-size:1.25rem}.main-body-box[data-v-0b39e3f6]{max-width:71.25rem;margin:auto;overflow:hidden;padding-top:2.5rem}.main-body-item[data-v-0b39e3f6]{width:33%;float:left;text-align:left;box-sizing:border-box;padding:.625rem}.main-body-item h3[data-v-0b39e3f6]{font-size:1.375rem;padding-left:.625rem}.main-body-item p[data-v-0b39e3f6]{padding:.625rem}",""])}});