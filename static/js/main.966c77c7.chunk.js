(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[0],{101:function(e,t,n){},12:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l}));var r,a,c=n(125),s=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c4158ed8-d0fa-48f5-978e-b07ad1bf0132"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e))},unfollow:function(e){return s.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return s.get("profile/".concat(e))},getStatus:function(e){return s.get("profile/status/".concat(e))},updateStatus:function(e){return s.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),s.put("profile/status/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return s.put("profile",e)}};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var u={me:function(){return s.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return s.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return s.delete("auth/login")}};u.me().then((function(e){return e.data}));var l={getCaptchaUrl:function(){return s.get("security/get-captcha-url")}}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(40),a=n(3),c="SEND_MESSAGE",s={dialogsData:[{id:1,name:"Roman"},{id:2,name:"Dimych"},{id:3,name:"Petro"},{id:4,name:"Andrey"}],messagesData:[{id:1,message:"Hi world!"},{id:2,message:"Hi wrld!"},{id:3,message:"Yo"}]},o=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,message:n}])});default:return e}}},158:function(e,t,n){},159:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),a=n(53),c=(n(0),n(187),n(85)),s=n(1),o=["input","meta","child"],i=["input","meta","child"],u=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(s.jsxs)("div",{className:"form-control ".concat(c?"error":""),children:[Object(s.jsx)("div",{children:a}),Object(s.jsx)("div",{children:c&&Object(s.jsx)("span",{children:r})})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,o));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,i));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},o)),i]})}},287:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,297)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(62),c=n.n(a),s=n(0),o=n.n(s),i=n(34),u=n(35),l=n(38),d=n(37),f=n(11),j=n(21),p=(n(158),n(159),n(1)),h=function(){return Object(p.jsx)("nav",{className:"menu",children:Object(p.jsxs)("ul",{className:"menu__list",children:[Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/profile",className:"menu__item-link",children:"Profile"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/dialogs",className:"menu__item-link",children:"Messages"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/users",className:"menu__item-link",children:"Users"})})]})})},b=n(17),g=n(8),O=n.n(g),m=n(14),v=n(40),x=n(3),w=n(12),P=function(e,t,n,r){return e.map((function(e){return e[n]===t.userId?Object(x.a)(Object(x.a)({},e),r):e}))},S="FOLLOW",y="UNFOLLOW",_="SET_USERS",C="SET_CURRENT_PAGE",k="SET_TOTAL_USERS_COUNT",E="TOGGLE_IS_FETCHING",I="TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},T=function(e){return{type:S,userId:e}},N=function(e){return{type:y,userId:e}},A=function(e){return{type:E,isFetching:e}},D=function(e,t){return{type:I,isFetching:e,userId:t}},F=function(){var e=Object(m.a)(O.a.mark((function e(t,n,r,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(D(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(x.a)(Object(x.a)({},e),{},{users:P(e.users,t.userId,"id",{follow:!0})});case y:return Object(x.a)(Object(x.a)({},e),{},{users:P(e.users,t.userId,"id",{follow:!1})});case _:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case C:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case k:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.count});case E:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case I:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},z=n(53),R=(n(101),n(91)),M=(n(184),function(e){for(var t=e.totalItemsCount,n=e.currentPage,r=e.onPageChanged,a=e.pageSize,c=e.portionSize,o=void 0===c?10:c,i=Math.ceil(t/a),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),f=Object(s.useState)(1),j=Object(R.a)(f,2),h=j[0],b=j[1],g=(h-1)*o+1,O=h*o;return Object(p.jsxs)("div",{className:"paginator",children:[h>1&&Object(p.jsx)("button",{onClick:function(){b(h-1)},children:"PREV"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(p.jsx)("span",{className:"".concat(n===e?"user__page-select":""," user__page-number"),onClick:function(){r(e)},children:e},e)})),d>h&&Object(p.jsx)("button",{onClick:function(){b(h+1)},children:"NEXT"})]})}),G=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(p.jsxs)("div",{className:"user",children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{className:"user__avatar",src:"".concat(null!=t.photos.small?t.photos.small:"https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"),alt:""})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"UnFollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.fullName}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.id}),Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]})},H=["currentPage","onPageChanged","totalUsersCount","pageSize","users","followingInProgress","unfollow","follow"],q=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,c=e.users,s=e.followingInProgress,o=e.unfollow,i=e.follow;Object(z.a)(e,H);return Object(p.jsxs)("div",{children:[Object(p.jsx)(M,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)(G,{user:e,followingInProgress:s,follow:i,unfollow:o},e.id)}))})]})},B=n(65),W=n(10),J=n(126),V=Object(J.a)((function(e){return e.usersPage.users.filter((function(e){return!0}))}),(function(e){return e.filter((function(e){return!0}))})),X=function(e){return e.usersPage.pageSize},Y=function(e){return e.usersPage.totalUsersCount},K=function(e){return e.usersPage.currentPage},Z=function(e){return e.usersPage.isFetching},Q=function(e){return e.usersPage.followingInProgress},$=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:this.props.pageTitle}),this.props.isFetching?Object(p.jsx)(B.a,{}):null,Object(p.jsx)(q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.Component),ee=Object(W.d)(Object(b.b)((function(e){return{users:V(e),pageSize:X(e),totalUsersCount:Y(e),currentPage:K(e),isFetching:Z(e),followingInProgress:Q(e)}}),{follow:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F(n,e,w.f.follow.bind(w.f),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F(n,e,w.f.unfollow.bind(w.f),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var n=Object(m.a)(O.a.mark((function n(r,a){var c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(A(!0)),r({type:C,currentPage:e}),n.next=4,w.f.getUsers(e,t);case 4:c=n.sent,r(A(!1)),r((s=c.items,{type:_,users:s})),r((a=c.totalCount,{type:k,count:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))($),te=(n(185),function(e){return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"logo",src:"https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png",alt:"Logo header"}),Object(p.jsx)("div",{className:"login-block",children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(j.b,{className:"login-block__link",to:"/login",children:"Login"})})]})}),ne=n(30),re="samurai-network/auth/SET_USER_DATA",ae="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",ce={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},se=function(e,t,n,r){return{type:re,payload:{userId:e,email:t,login:n,isAuth:r}}},oe=function(e){return{type:ae,payload:{captchaUrl:e}}},ie=function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var n,r,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.me();case 2:(n=e.sent).resultCode===w.b.Success&&(r=n.data,a=r.id,c=r.email,s=r.login,t(se(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ue=function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.e.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(oe(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:case ae:return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},de=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(te,Object(x.a)({},this.props))}}]),n}(s.Component),fe=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.logout();case 2:0===e.sent.data.resultCode&&t(se(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(de),je=(n(186),n(123)),pe=n(25),he=n(63),be=Object(je.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(pe.c)("Email","email",[he.b],pe.a),Object(pe.c)("Password","password",[he.b],pe.a,{type:"password"}),Object(pe.c)(null,"rememberMe",[],pe.a,{type:"checkbox"},"remember me"),r&&Object(p.jsx)("img",{src:r,alt:r}),r&&Object(pe.c)("Symbols from image","captcha",[he.b],pe.a,{}),n&&Object(p.jsx)("div",{className:"form-summary-error",children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),ge=Object(b.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(m.a)(O.a.mark((function a(c){var s,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.c.login(e,t,n,r);case 2:(s=a.sent).resultCode===w.b.Success?c(ie()):(s.resultCode===w.a.CaptchaIsRequired&&c(ue()),o=s.messages.length>0?s.messages[0]:"Some error",c(Object(ne.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(f.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"login"}),Object(p.jsx)(be,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Oe="INITIALIZED_SUCCESS",me={initialized:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(x.a)(Object(x.a)({},e),{},{initialized:!0});default:return e}},xe=n(90),we=n(122),Pe={sidebar:{}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;return e},ye=n(128),_e=n(124),Ce=Object(W.c)({profilePage:xe.b,dialogsPage:we.a,sidebar:Se,usersPage:L,auth:le,form:_e.a,app:ve}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,Ee=Object(W.e)(Ce,ke(Object(W.a)(ye.a)));window.__store__=Ee;var Ie=Ee,Ue=function(e){return function(t){return Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("h1",{children:"Loading profile..."}),children:Object(p.jsx)(e,Object(x.a)({},t))})}},Te=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,299))})),Ne=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,298))})),Ae=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){alert("Some error occured "),console.log("reason",e),console.log("promise",t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app__wrapper",children:[Object(p.jsx)(fe,{}),Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"app__wrapper_content",children:Object(p.jsxs)(f.d,{children:[Object(p.jsx)(f.b,{exact:!0,path:"/",children:function(){return Object(p.jsx)(f.a,{to:"/profile"})}}),Object(p.jsx)(f.b,{path:"/dialogs",children:Ue(Te)}),Object(p.jsx)(f.b,{path:"/profile/:userId?",children:Ue(Ne)}),Object(p.jsx)(f.b,{path:"/users",children:Object(p.jsx)(ee,{pageTitle:"Page Title"})}),Object(p.jsx)(f.b,{path:"/login",children:Object(p.jsx)(ge,{})}),Object(p.jsx)(f.b,{path:"*",children:Object(p.jsx)("div",{children:"404 NOT FOUND"})})]})})]}):Object(p.jsx)(B.a,{})}}]),n}(s.Component),De=Object(W.d)(f.g,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(ie()).then((function(){e({type:Oe})}))}}}))(Ae),Fe=function(e){return Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{store:Ie,children:Object(p.jsx)(De,{})})})};c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(Fe,{})}),document.getElementById("root")),r()},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},65:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.3ad5b43f.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"Preloader"})})}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(14),s=n(40),o=n(3),i=n(12),u=n(30),l="ADD_POST",d="SET_USER_PROFILE",f="SET_STATUS",j="DELETE_POST",p="SAVE_PHOTO_SUCCESS",h={postsData:[{id:1,message:"Hi, who are u?",likes:12},{id:2,message:"Hi, who are u Doe?",likes:1},{id:3,message:"Hi, who are John?",likes:129}],profile:null,status:"",newPostText:""},b=function(e){return{type:l,newPostText:e}},g=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.f.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.d.getProfile(e);case 3:0===t.sent.data.resutCode&&n(g(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.savePhoto(e);case 2:0===(r=t.sent).data.resutCode&&n((a=r.data.date.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.d.saveProfile(e);case 3:if(0!==(s=t.sent).data.resutCode){t.next=8;break}n(O(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:s.data.message[0]})),t.abrupt("return",Promise.reject(s.data.message[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likes:0};return Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(s.a)(e.postsData),[n]),newPostText:""});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[287,1,2]]]);
//# sourceMappingURL=main.966c77c7.chunk.js.map