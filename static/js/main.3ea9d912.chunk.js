(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[0],{101:function(e,t,n){},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"c",(function(){return u}));var r,c,a=n(125),s={getCaptchaUrl:function(){return l.get("security/get-captcha-url")}},o={getProfile:function(e){return l.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return l.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return l.put("profile/status/",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),l.put("profile/status/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return l.put("profile",e).then((function(e){return e.data}))}},i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return l.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return l.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={me:function(){return l.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return l.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return l.delete("auth/login")}},l=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c4158ed8-d0fa-48f5-978e-b07ad1bf0132"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(39),c=n(3),a={dialogsData:[{id:1,name:"Roman"},{id:2,name:"Dimych"},{id:3,name:"Petro"},{id:4,name:"Andrey"}],messagesData:[{id:1,message:"Hi world!"},{id:2,message:"Hi wrld!"},{id:3,message:"Yo"}]},s={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,message:n}])});default:return e}}},158:function(e,t,n){},159:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(3),c=n(49),a=(n(0),n(187),n(85)),s=n(1),o=["input","meta"],i=["input","meta"],u=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(s.jsxs)("div",{className:"form-control ".concat(a?"error":""),children:[Object(s.jsx)("div",{children:c}),Object(s.jsx)("div",{children:a&&Object(s.jsx)("span",{children:r})})]})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,o));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,i));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function d(e,t,n,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(a.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},o)),i]})}},287:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},c=n(62),a=n.n(c),s=n(0),o=n.n(s),i=n(35),u=n(36),l=n(40),f=n(38),d=n(11),j=n(21),p=(n(158),n(159),n(1)),h=function(){return Object(p.jsx)("nav",{className:"menu",children:Object(p.jsxs)("ul",{className:"menu__list",children:[Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/profile",className:"menu__item-link",children:"Profile"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/dialogs",className:"menu__item-link",children:"Messages"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/users",className:"menu__item-link",children:"Users"})})]})})},b=n(17),O=n(8),g=n.n(O),S=n(14),m=n(39),v=n(3),x=n(12),w=function(e,t,n,r){return e.map((function(e){return e[n]===t.userId?Object(v.a)(Object(v.a)({},e),r):e}))},E={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},P=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},_=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},U=function(e){return{type:"SN/USERS/SET_USERS",users:e}},C=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},N=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},I=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},y=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T=function(){var e=Object(S.a)(g.a.mark((function e(t,n,r,c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(y(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:w(e.users,t.userId,"id",{follow:!0})});case"SN/USERS/UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:w(e.users,t.userId,"id",{follow:!1})});case"SN/USERS/SET_USERS":return Object(v.a)(Object(v.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(v.a)(Object(v.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(v.a)(Object(v.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(v.a)(Object(v.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(m.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},L=n(49),k=(n(101),n(91)),A=(n(184),function(e){for(var t=e.totalItemsCount,n=e.currentPage,r=void 0===n?1:n,c=e.onPageChanged,a=void 0===c?function(e){return e}:c,o=e.pageSize,i=e.portionSize,u=void 0===i?10:i,l=Math.ceil(t/o),f=[],d=1;d<=l;d++)f.push(d);var j=Math.ceil(l/u),h=Object(s.useState)(1),b=Object(k.a)(h,2),O=b[0],g=b[1],S=(O-1)*u+1,m=O*u;return Object(p.jsxs)("div",{className:"paginator",children:[O>1&&Object(p.jsx)("button",{onClick:function(){g(O-1)},children:"PREV"}),f.filter((function(e){return e>=S&&e<=m})).map((function(e){return Object(p.jsx)("span",{className:"".concat(r===e?"user__page-select":""," user__page-number"),onClick:function(){a(e)},children:e},e)})),j>O&&Object(p.jsx)("button",{onClick:function(){g(O+1)},children:"NEXT"})]})}),F=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(p.jsxs)("div",{className:"user",children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{className:"user__avatar",src:"".concat(null!=t.photos.small?t.photos.small:"https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"),alt:""})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"UnFollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.id}),Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]})},D=["currentPage","onPageChanged","totalUsersCount","pageSize","users","followingInProgress","unfollow","follow"],z=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,c=e.pageSize,a=e.users,s=e.followingInProgress,o=e.unfollow,i=e.follow;Object(L.a)(e,D);return Object(p.jsxs)("div",{children:[Object(p.jsx)(A,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:c}),Object(p.jsx)("div",{children:a.map((function(e){return Object(p.jsx)(F,{user:e,followingInProgress:s,follow:i,unfollow:o},e.id)}))})]})},G=n(65),M=n(10),H=n(126),q=Object(H.a)((function(e){return e.usersPage.users.filter((function(e){return!0}))}),(function(e){return e.filter((function(e){return!0}))})),W=function(e){return e.usersPage.pageSize},B=function(e){return e.usersPage.totalUsersCount},V=function(e){return e.usersPage.currentPage},J=function(e){return e.usersPage.isFetching},X=function(e){return e.usersPage.followingInProgress},Y=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:this.props.pageTitle}),this.props.isFetching?Object(p.jsx)(G.a,{}):null,Object(p.jsx)(z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.Component),Z=Object(M.d)(Object(b.b)((function(e){return{users:q(e),pageSize:W(e),totalUsersCount:B(e),currentPage:V(e),isFetching:J(e),followingInProgress:X(e)}}),{follow:function(e){return function(){var t=Object(S.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,x.g.follow.bind(x.g),P);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,x.g.unfollow.bind(x.g),_);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var n=Object(S.a)(g.a.mark((function n(r){var c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),r(C(e)),n.next=4,x.g.getUsers(e,t);case 4:c=n.sent,r(I(!1)),r(U(c.items)),r(N(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Y),K=(n(185),function(e){return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"logo",src:"https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png",alt:"Logo header"}),Object(p.jsx)("div",{className:"login-block",children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(j.b,{className:"login-block__link",to:"/login",children:"Login"})})]})}),Q=n(30),$={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ee=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},te=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ne=function(){return function(){var e=Object(S.a)(g.a.mark((function e(t){var n,r,c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.c.me();case 2:(n=e.sent).resultCode===x.b.Success&&(r=n.data,c=r.id,a=r.email,s=r.login,t(ee(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},re=function(){return function(){var e=Object(S.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.f.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(te(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(v.a)(Object(v.a)({},e),t.payload);default:return e}},ae=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(K,Object(v.a)({},this.props))}}]),n}(s.Component),se=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(S.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.c.logout();case 2:0===e.sent.data.resultCode&&t(ee(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ae),oe=(n(186),n(123)),ie=n(25),ue=n(63),le=Object(oe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(ie.c)("Email","email",[ue.b],ie.a),Object(ie.c)("Password","password",[ue.b],ie.a,{type:"password"}),Object(ie.c)(void 0,"rememberMe",[],ie.a,{type:"checkbox"},"remember me"),r&&Object(p.jsx)("img",{src:r,alt:r}),r&&Object(ie.c)("Symbols from image","captcha",[ue.b],ie.a,{}),n&&Object(p.jsx)("div",{className:"form-summary-error",children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),fe=Object(b.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var c=Object(S.a)(g.a.mark((function c(a){var s,o;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.c.login(e,t,n,r);case 2:(s=c.sent).resultCode===x.b.Success?a(ne()):(s.resultCode===x.a.CaptchaIsRequired&&a(re()),o=s.messages.length>0?s.messages[0]:"Some error",a(Object(Q.a)("login",{_error:o})));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(d.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"login"}),Object(p.jsx)(le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),de={initialized:!1},je=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},he=n(90),be=n(122),Oe={sidebar:{}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe;return e},Se=n(128),me=n(124),ve=Object(M.c)({profilePage:he.b,dialogsPage:be.b,sidebar:ge,usersPage:R,auth:ce,form:me.a,app:pe}),xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d,we=Object(M.e)(ve,xe(Object(M.a)(Se.a)));window.__store__=we;var Ee=we;function Pe(e){return function(t){return Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("h1",{children:"Loading profile..."}),children:Object(p.jsx)(e,Object(v.a)({},t))})}}var _e=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,298))})),Ue=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,297))})),Ce=Pe(_e),Ne=Pe(Ue),Ie=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){alert("Some error occured ")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app__wrapper",children:[Object(p.jsx)(se,{}),Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"app__wrapper_content",children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/",children:function(){return Object(p.jsx)(d.a,{to:"/profile"})}}),Object(p.jsx)(d.b,{path:"/dialogs",children:Object(p.jsx)(Ce,{})}),Object(p.jsx)(d.b,{path:"/profile/:userId?",children:Object(p.jsx)(Ne,{})}),Object(p.jsx)(d.b,{path:"/users",children:Object(p.jsx)(Z,{pageTitle:"Page Title"})}),Object(p.jsx)(d.b,{path:"/login",children:Object(p.jsx)(fe,{})}),Object(p.jsx)(d.b,{path:"*",children:Object(p.jsx)("div",{children:"404 NOT FOUND"})})]})})]}):Object(p.jsx)(G.a,{})}}]),n}(s.Component),ye=Object(M.d)(d.g,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(ne()).then((function(){e(je())}))}}}))(Ie),Te=function(){return Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{store:Ee,children:Object(p.jsx)(ye,{})})})};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(Te,{})}),document.getElementById("root")),r()},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},65:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.3ad5b43f.svg",c=n(1);t.a=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r,alt:"Preloader"})})}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return b}));var r=n(8),c=n.n(r),a=n(14),s=n(39),o=n(3),i=n(12),u=n(30),l={postsData:[{id:1,message:"Hi, who are u?",likes:12},{id:2,message:"Hi, who are u Doe?",likes:1},{id:3,message:"Hi, who are John?",likes:129}],profile:null,status:""},f={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},d=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.e.getProfile(e);case 2:r=t.sent,n(f.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.e.getStatus(e);case 2:r=t.sent,n(f.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.e.updateStatus(e);case 3:0===t.sent.resultCode&&n(f.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.e.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(f.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,i.e.saveProfile(e);case 3:if(0!==(s=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(d(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(u.a)("edit-profile",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n={id:5,message:t.newPostText,likes:0};return Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(s.a)(e.postsData),[n])});case"SN/PROFILE/SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"SN/PROFILE/DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[287,1,2]]]);
//# sourceMappingURL=main.3ea9d912.chunk.js.map