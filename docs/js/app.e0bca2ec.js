(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"48b8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),i=n("5f5b"),o=n("b1e0"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"nav"}},[r("b-container",[r("b-navbar-brand",{attrs:{href:"/"}},[t._v("Penny Vault")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/portfolio"}},[t._v("Portfolios")]),r("b-nav-item",{attrs:{to:"/strategies"}},[t._v("Strategies")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[t.$auth.isAuthenticated?r("b-nav-item-dropdown",{attrs:{right:""}},[r("template",{slot:"button-content"},[r("b-icon-person-circle")],1),t.$auth.isAuthenticated?r("b-dropdown-item",{attrs:{to:"/profile"}},[t._v("Profile")]):t._e(),t.$auth.isAuthenticated?r("b-dropdown-item",{on:{click:t.logout}},[t._v("Sign Out")]):t._e()],2):t._e()],1)],1)],1)],1),r("img",{attrs:{id:"logo",src:n("cf05"),alt:"Penny Vault Logo"}}),r("router-view")],1)},u=[],c={name:"App",methods:{login:function(){this.$auth.loginWithRedirect({scope:"read:current_user_metadata"})},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},l=c,d=(n("5c0b"),n("2877")),p=Object(d["a"])(l,s,u,!1,null,null,null),h=p.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"background"}),n("Portfolio"),n("div",{staticClass:"banner"},[t._v(" Welcome to Penny Vault, "),t.$auth.loading?t._e():n("span",[t.$auth.isAuthenticated?t._e():n("span",[n("p",[t._v(" please login to get started: "),n("b-button",{staticClass:"helvetica",attrs:{variant:"dark",size:"lg"},on:{click:t.login}},[t._v("Login")])],1)])])])],1)},g=[],b=(n("96cf"),n("1da1")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portfolio"})},y=[],w={name:"Portfolio"},x=w,_=Object(d["a"])(x,v,y,!1,null,"38d5dc58",null),k=_.exports,O={name:"Home",components:{Portfolio:k},mounted:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("/");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},S=O,C=(n("8c47"),Object(d["a"])(S,m,g,!1,null,"d4eea32a",null)),j=C.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("img",{attrs:{src:t.$auth.user.picture}}),n("h2",[t._v(t._s(t.$auth.user.name))]),n("p",[t._v(t._s(t.$auth.user.email))])]),n("div",[n("pre",[t._v(t._s(JSON.stringify(t.$auth.user,null,2)))])])])},R=[],P={},E=Object(d["a"])(P,$,R,!1,null,null,null),A=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("h1",[t._v("Available Strategies")])]),t.loading?n("b-row",[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://media.giphy.com/media/jAYUbVXgESSti/source.gif"}})]):t._e(),n("b-row",{staticClass:"left"},[n("b-card-group",{attrs:{columns:""}},t._l(t.items,(function(e){return n("b-card",{key:e.shortcode,attrs:{header:e.name,"header-bg-variant":"primary","header-text-variant":"white",align:"left"},scopedSlots:t._u([{key:"footer",fn:function(){return[n("em",[n("b-icon-arrow-up"),t._v(" "+t._s(e.ytd_gain)+"% YTD")],1)]},proxy:!0}],null,!0)},[n("p",[t._v(" "+t._s(e.description)+" ")]),n("b-button",{attrs:{to:"/strategy/"+e.shortcode,variant:"nav"}},[t._v("Launch")])],1)})),1)],1)],1)},U=[],D={name:"StrategyCards",data:function(){return{items:[],loading:!0}},mounted:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,this.$axios.get("/strategy",{headers:{Authorization:"Bearer ".concat(e)}});case 5:n=t.sent,r=n.data,this.items=r,this.loading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),components:{}},J=D,B=Object(d["a"])(J,T,U,!1,null,null,null),W=B.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("b-col",[n("b-card",{staticClass:"ml-0",attrs:{header:"Strategy Parameters","header-bg-variant":"primary","header-text-variant":"white",align:"left"}},[n("b-form",{ref:"params",on:{submit:t.onSubmit,reset:t.onReset}},[t._l(t.args,(function(e){return n("b-form-group",{key:e.id,attrs:{label:e.name,description:e.description,"label-for":e.inpid}},[n("b-form-input",{attrs:{id:e.inpid,type:e.inptype,required:e.required},model:{value:t.form[e.arg],callback:function(n){t.$set(t.form,e.arg,n)},expression:"form[item.arg]"}})],1)})),n("b-form-group",{attrs:{label:"Start Date","label-for":"simulationBegin"}},[n("b-form-datepicker",{attrs:{id:"simulationBegin","date-format-options":{year:"numeric",month:"short"}},model:{value:t.simulationBegin,callback:function(e){t.simulationBegin=e},expression:"simulationBegin"}})],1),n("b-form-group",{attrs:{label:"End Date","label-for":"simulationEnd"}},[n("b-form-datepicker",{attrs:{id:"simulationEnd","date-format-options":{year:"numeric",month:"short"}},model:{value:t.simulationEnd,callback:function(e){t.simulationEnd=e},expression:"simulationEnd"}})],1),n("b-button",{staticClass:"mr-2",attrs:{type:"submit",variant:"info"}},[t._v("Submit")])],2)],1)],1),n("b-col",{staticClass:"left",attrs:{cols:"9"}},[n("h3",[t._v(t._s(t.strategy.name))]),n("h5",[t._v("Jan 1990 - Dec 2020")]),n("p",[t._v("Tactical asset allocation model results from Jan 1990 to Dec 2020 are based on dual momentum model holding the best performing asset. Absolute momentum based trend following filter is used to switch any selected assets that have a negative excess return over the risk free rate to cash. The model uses a single performance window of 10 calendar month(s). Tactical asset allocation model trades are executed using the end of month close price each month based on the end of month signals. The time period was constrained by the available data for T. Rowe Price International Discovery (PRIDX) [Jan 1989 - Dec 2020].")]),n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"Summary",active:""}},[n("apexchart",{ref:"valueChart",attrs:{width:"100%",height:"300",type:"area",options:t.options,series:t.series}})],1)],1)],1)],1)],1)},I=[],M=(n("a4d3"),n("e01a"),n("4160"),n("a15b"),n("b0c0"),n("4fad"),n("ac1f"),n("1276"),n("159b"),n("3835")),N={name:"Strategy",data:function(){return{strategy:{name:""},form:{},performance:{},simulationBegin:new Date(1980,0,1),simulationEnd:new Date,options:{chart:{id:"value-chart",zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"}},dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{labels:{formatter:function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}},title:{text:"Price"}},xaxis:{type:"datetime"},tooltip:{shared:!1,y:{formatter:function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}}}},series:[{name:"strategy",data:[]}],args:[]}},mounted:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,this.$axios.get("/strategy/"+this.$route.params.id,{headers:{Authorization:"Bearer ".concat(e)}});case 5:n=t.sent,r=n.data,this.strategy=r,Object.entries(this.strategy.arguments).forEach((function(t){var e=Object(M["a"])(t,2),n=e[0],r=e[1],i={arg:n,name:r.name,description:r.description,id:r.name+"_id",inpid:r.name+"_inp_id",inptype:"text",inpdefault:r.default,required:!0};"[]string"==r.typecode?(i.inpdefault=JSON.parse(r.default).join(" "),a.form[i.arg]=JSON.parse(r.default).join(" ")):a.form[i.arg]=r.default,a.args.push(i)}));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),components:{},methods:{onSubmit:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.preventDefault(),n=Object.assign({},this.form),Object.entries(this.strategy.arguments).forEach((function(t){var e=Object(M["a"])(t,2),r=e[0],a=e[1];"[]string"==a.typecode&&(n[r]=n[r].split(" "))})),t.next=5,this.$auth.getTokenSilently();case 5:return r=t.sent,t.next=8,this.$axios.post("/strategy/"+this.strategy.shortcode,n,{headers:{Authorization:"Bearer ".concat(r)}});case 8:a=t.sent,i=a.data,this.performance=i,o=[],this.performance.value.forEach((function(t){o.push([1e3*t.time,t.value])})),this.series.data={name:"strategy",data:o},this.$refs.valueChart.updateSeries([{data:o}],!1,!0),console.log(o);case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onReset:function(){}}},F=N,L=Object(d["a"])(F,z,I,!1,null,null,null),V=L.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.callApi}},[t._v("Call")]),n("p",[t._v(t._s(t.apiMessage))])])},X=[],Y={name:"external-api",data:function(){return{apiMessage:""}},methods:{callApi:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.getTokenSilently();case 2:return n=e.sent,e.next=5,t.$axios.get("/strategy",{headers:{Authorization:"Bearer ".concat(n)}});case 5:r=e.sent,a=r.data,t.apiMessage=a;case 8:case"end":return e.stop()}}),e)})))()}}},H=Y,G=Object(d["a"])(H,q,X,!1,null,null,null),K=G.exports,Z=(n("caad"),n("2532"),n("841c"),n("5530")),Q=n("15fd"),tt=n("9767"),et=function(){return window.history.replaceState({},document.title,window.location.pathname)},nt=function(){return r},rt=function(t){var e=t.onRedirectCallback,n=void 0===e?et:e,i=t.redirectUri,o=void 0===i?window.location.origin:i,s=Object(Q["a"])(t,["onRedirectCallback","redirectUri"]);return r||(r=new a["default"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t,e){var n=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.popupOpen=!0,r.prev=1,r.next=4,n.auth0Client.loginWithPopup(t,e);case 4:return r.next=6,n.auth0Client.getUser();case 6:return n.user=r.sent,r.next=9,n.auth0Client.isAuthenticated();case 9:n.isAuthenticated=r.sent,n.error=null,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](1),n.error=r.t0,console.error(r.t0);case 17:return r.prev=17,n.popupOpen=!1,r.finish(17);case 20:return r.next=22,n.auth0Client.getUser();case 22:n.user=r.sent,n.isAuthenticated=!0;case 24:case"end":return r.stop()}}),r,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,t.error=null,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(tt["a"])(Object(Z["a"])(Object(Z["a"])({},s),{},{client_id:s.clientId,redirect_uri:o}));case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=11;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:r=e.sent,a=r.appState,t.error=null,n(a);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),t.error=e.t0;case 16:return e.prev=16,e.next=19,t.auth0Client.isAuthenticated();case 19:return t.isAuthenticated=e.sent,e.next=22,t.auth0Client.getUser();case 22:return t.user=e.sent,t.loading=!1,e.finish(16);case 25:case"end":return e.stop()}}),e,null,[[3,13,16,25]])})))()}}),console.log(r),r)},at={install:function(t,e){t.prototype.$auth=rt(e)}},it=function(t,e,n){var r=nt(),a=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!r.loading)return a();r.$watch("loading",(function(t){if(!1===t)return a()}))};a["default"].use(f["a"]);var ot=[{path:"/",name:"Home",component:j},{path:"/profile",name:"profile",component:A,beforeEnter:it},{path:"/strategies",name:"strategies",component:W,beforeEnter:it},{path:"/strategy/:id",name:"strategy",component:V,beforeEnter:it},{path:"/management-api",name:"management-api",component:K,beforeEnter:it}],st=new f["a"]({mode:"history",base:"/",routes:ot}),ut=st,ct=n("bc3a"),lt=n.n(ct),dt=n("1321"),pt=n.n(dt),ht=n("8160");n("7049");a["default"].use(at,{domain:ht["c"],clientId:ht["b"],audience:ht["a"],onRedirectCallback:function(t){ut.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),a["default"].use(i["a"]),a["default"].use(o["a"]),a["default"].component("apexchart",pt.a),a["default"].config.productionTip=!1;var ft={baseURL:"https://penny-vault.herokuapp.com/v1",timeout:3e4};a["default"].prototype.$axios=lt.a.create(ft),new a["default"]({router:ut,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7049:function(t,e,n){},8160:function(t){t.exports=JSON.parse('{"c":"penny-vault.us.auth0.com","b":"z8Sv7bJmSJuKP4REpFUdZXFJGMCR7u3D","a":"https://api.pennyvault.com/v1"}')},"8c47":function(t,e,n){"use strict";n("48b8")},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.f1a381ad.png"}});
//# sourceMappingURL=app.e0bca2ec.js.map