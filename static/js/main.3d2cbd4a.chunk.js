(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},106:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.3ad5b43f.svg",c=n(1);t.a=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r,alt:"Preloader"})})}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return h}));var r=n(14),c=n.n(r),a=n(31),i=n(70),s=n(8),u=n(24),o=n(63),l={postsData:[{id:1,message:"Hi, who are u?",likes:12},{id:2,message:"Hi, who are u Doe?",likes:1},{id:3,message:"Hi, who are John?",likes:129}],profile:null,status:""},d={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},j=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.getProfile(e);case 2:r=t.sent,n(d.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.getStatus(e);case 2:r=t.sent,n(d.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.e.updateStatus(e);case 3:0===t.sent.resultCode&&n(d.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(d.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,u.e.saveProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(j(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(o.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n={id:5,message:t.newPostText,likes:0};return Object(s.a)(Object(s.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[n])});case"SN/PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SN/PROFILE/DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},152:function(e,t,n){},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(70),c=n(8),a={dialogsData:[{id:1,name:"Roman"},{id:2,name:"Dimych"},{id:3,name:"Petro"},{id:4,name:"Andrey"}],messagesData:[{id:1,message:"Hi world!"},{id:2,message:"Hi wrld!"},{id:3,message:"Yo"}]},i={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/SEND_MESSAGE"===t.type){var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,message:n}])})}return e}},24:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return o}));var r,c,a=n(192),i={getCaptchaUrl:function(){return l.get("security/get-captcha-url")}},s={getProfile:function(e){return l.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return l.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return l.put("profile/status/",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),l.put("profile/status/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return l.put("profile",e).then((function(e){return e.data}))}},u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return l.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return l.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return l.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={me:function(){return l.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return l.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return l.delete("auth/login")}},l=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c4158ed8-d0fa-48f5-978e-b07ad1bf0132"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},240:function(e,t,n){},248:function(e,t,n){},333:function(e,t,n){},334:function(e,t,n){},374:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,392)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},c=n(38),a=n.n(c),i=n(0),s=n.n(i),u=n(150),o=n(151),l=n(186),d=n(184),j=n(37),b=n(20),f=(n(240),n(241),n(15)),O=n(106),h=n(188),p=Object(h.a)((function(e){return e.usersPage.users.filter((function(e){return!0}))}),(function(e){return e.filter((function(e){return!0}))})),g=function(e){return e.usersPage.pageSize},S=function(e){return e.usersPage.totalUsersCount},x=function(e){return e.usersPage.currentPage},m=function(e){return e.usersPage.isFetching},v=function(e){return e.usersPage.followingInProgress},E=function(e){return e.usersPage.filter},P=n(8),w=(n(152),n(148)),y=(n(248),n(1)),_=function(e){for(var t=e.totalItemsCount,n=e.currentPage,r=void 0===n?1:n,c=e.onPageChanged,a=void 0===c?function(e){return e}:c,s=e.pageSize,u=e.portionSize,o=void 0===u?10:u,l=Math.ceil(t/s),d=[],j=1;j<=l;j++)d.push(j);var b=Math.ceil(l/o),f=Object(i.useState)(1),O=Object(w.a)(f,2),h=O[0],p=O[1],g=(h-1)*o+1,S=h*o;return Object(y.jsxs)("div",{className:"paginator",children:[h>1&&Object(y.jsx)("button",{onClick:function(){p(h-1)},children:"PREV"}),d.filter((function(e){return e>=g&&e<=S})).map((function(e){return Object(y.jsx)("span",{className:"".concat(r===e?"user__page-select":""," user__page-number"),onClick:function(){a(e)},children:e},e)})),b>h&&Object(y.jsx)("button",{onClick:function(){p(h+1)},children:"NEXT"})]})},I=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(y.jsxs)("div",{className:"user",children:[Object(y.jsxs)("span",{children:[Object(y.jsx)("div",{children:Object(y.jsx)(j.c,{to:"/profile/"+t.id,children:Object(y.jsx)("img",{className:"user__avatar",src:"".concat(null!=t.photos.small?t.photos.small:"https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"),alt:""})})}),Object(y.jsx)("div",{children:t.followed?Object(y.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"UnFollow"}):Object(y.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(y.jsxs)("span",{children:[Object(y.jsxs)("span",{children:[Object(y.jsx)("div",{children:t.name}),Object(y.jsx)("div",{children:t.status})]}),Object(y.jsxs)("span",{children:[Object(y.jsx)("div",{children:t.id}),Object(y.jsx)("div",{children:"user.location.country"}),Object(y.jsx)("div",{children:"user.location.city"})]})]})]})},C=n(92),T=function(e){return{}},N=Object(i.memo)((function(e){var t=Object(f.d)(E);return Object(y.jsx)("div",{children:Object(y.jsx)(C.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:T,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(y.jsxs)(C.b,{children:[Object(y.jsx)(C.a,{name:"term",type:"text"}),Object(y.jsxs)(C.a,{name:"friend",as:"select",children:[Object(y.jsx)("option",{value:"null",children:"All"}),Object(y.jsx)("option",{value:"true",children:"Only followed"}),Object(y.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(y.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),U=n(14),R=n.n(U),L=n(31),k=n(70),A=n(24),F=function(e,t,n,r){return e.map((function(e){return e[n]===t.userId?Object(P.a)(Object(P.a)({},e),r):e}))},D={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},G=function(e){return{type:"SN/USERS/SET_USERS",users:e}},z=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},M=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},H=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},V=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},q=function(e,t,n){return function(){var r=Object(L.a)(R.a.mark((function r(c){var a;return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(V(!0)),c(z(e)),c(M(n)),r.next=5,A.g.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(V(!1)),c(G(a.items)),c(H(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:F(e.users,t.userId,"id",{follow:!0})});case"SN/USERS/UNFOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:F(e.users,t.userId,"id",{follow:!1})});case"SN/USERS/SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(P.a)(Object(P.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(k.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},W=n(142),J=function(){var e=Object(f.d)(p),t=Object(f.d)(S),n=Object(f.d)(x),r=Object(f.d)(g),c=Object(f.d)(E),a=Object(f.d)(v),s=Object(f.c)(),u=Object(b.g)(),o=function e(t){s(e(t))},l=function e(t){s(e(t))};return Object(i.useEffect)((function(){var e=W.parse(u.location.search.substr(1)),t=n,a=c;switch(e.page&&(t=Number(e.page)),e.page&&(a=Object(P.a)(Object(P.a)({},a),{},{term:e.term})),e.friend){case"null":a=Object(P.a)(Object(P.a)({},a),{},{friend:null});break;case"true":a=Object(P.a)(Object(P.a)({},a),{},{friend:!0});break;case"false":a=Object(P.a)(Object(P.a)({},a),{},{friend:!1})}s(q(t,r,a))}),[]),Object(i.useEffect)((function(){var e={};c.term&&(e.term=c.term),null!==c.friend&&(e.friend=String(c.friend)),1!==n&&(e.page=String(n)),u.push({pathname:"/developers",search:W.stringify(e)})}),[c,n]),Object(y.jsxs)("div",{children:[Object(y.jsx)(N,{onFilterChanged:function(e){s(q(1,r,e))}}),Object(y.jsx)(_,{currentPage:n,onPageChanged:function(e){s(q(e,r,c))},totalItemsCount:t,pageSize:r}),Object(y.jsx)("div",{children:e.map((function(e){return Object(y.jsx)(I,{user:e,followingInProgress:a,follow:o,unfollow:l},e.id)}))})]})},K=function(e){var t=Object(f.d)(m);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h2",{children:e.pageTitle}),t?Object(y.jsx)(O.a,{}):null,Object(y.jsx)(J,{})]})},X=n(19),Y=n(63),Z={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Q=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},$=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ee=function(){return function(){var e=Object(L.a)(R.a.mark((function e(t){var n,r,c,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.c.me();case 2:(n=e.sent).resultCode===A.b.Success&&(r=n.data,c=r.id,a=r.email,i=r.login,t(Q(c,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=function(){return function(){var e=Object(L.a)(R.a.mark((function e(t){var n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.f.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t($(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},re={initialized:!1},ce=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;return"SN/APP/INITIALIZED_SUCCESS"===t.type?Object(P.a)(Object(P.a)({},e),{},{initialized:!0}):e},ie=n(149),se=n(162),ue={sidebar:{}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;return e},le=n(193),de=n(185),je=Object(X.c)({profilePage:ie.b,dialogsPage:se.b,sidebar:oe,usersPage:B,auth:ne,form:de.a,app:ae}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,fe=Object(X.e)(je,be(Object(X.a)(le.a)));window.__store__=fe;var Oe=fe;function he(e){return function(t){return Object(y.jsx)(i.Suspense,{fallback:Object(y.jsx)("h1",{children:"Loading profile..."}),children:Object(y.jsx)(e,Object(P.a)({},t))})}}n(333);var pe=n(183),ge=n(53),Se=n(104),xe=Object(pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(y.jsxs)("form",{onSubmit:t,children:[Object(ge.c)("Email","email",[Se.b],ge.a),Object(ge.c)("Password","password",[Se.b],ge.a,{type:"password"}),Object(ge.c)(void 0,"rememberMe",[],ge.a,{type:"checkbox"},"remember me"),r&&Object(y.jsx)("img",{src:r,alt:r}),r&&Object(ge.c)("Symbols from image","captcha",[Se.b],ge.a,{}),n&&Object(y.jsx)("div",{className:"form-summary-error",children:n}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{children:"Login"})})]})})),me=function(){var e=Object(f.d)((function(e){return e.auth.captchaUrl})),t=Object(f.d)((function(e){return e.auth.isAuth})),n=Object(f.c)();return t?Object(y.jsx)(b.a,{to:"/profile"}):Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"login"}),Object(y.jsx)(xe,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(L.a)(R.a.mark((function e(n){var i,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.c.login(t,r,c,a);case 2:(i=e.sent).resultCode===A.b.Success?n(ee()):(i.resultCode===A.a.CaptchaIsRequired&&n(te()),s=i.messages.length>0?i.messages[0]:"Some error",n(Object(Y.a)("login",{_error:s})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})},ve=n(147),Ee=n(378),Pe=n(379),we=n(383),ye=(n(374),n(381)),_e=n(382),Ie=n(380),Ce=n(123),Te=function(e){return e.auth.isAuth},Ne=function(e){return e.auth.login},Ue=function(){var e=Object(f.d)(Te),t=Object(f.d)(Ne),n=Object(f.c)(),r=Ee.a.Header;return Object(y.jsx)(r,{children:Object(y.jsxs)(ye.a,{children:[Object(y.jsx)(_e.a,{span:18,children:Object(y.jsx)(ve.a,{theme:"dark",mode:"horizontal",children:Object(y.jsx)(ve.a.Item,{children:Object(y.jsx)(j.b,{to:"/developers",children:"Developers"})},"1")})}),e?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(_e.a,{span:1,children:Object(y.jsx)(Ie.a,{alt:t||"",style:{backgroundColor:"#87d068"},icon:Object(y.jsx)(we.a,{})})}),Object(y.jsx)(_e.a,{span:5,children:Object(y.jsx)(Ce.a,{onClick:function(){n(function(){var e=Object(L.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.c.logout();case 2:0===e.sent.data.resultCode&&t(Q(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(y.jsx)(_e.a,{span:6,children:Object(y.jsx)(Ce.a,{children:Object(y.jsx)(j.b,{to:"/login",children:"Login"})})})]})})},Re=ve.a.SubMenu,Le=Ee.a.Content,ke=Ee.a.Footer,Ae=Ee.a.Sider,Fe=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,395))})),De=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,394))})),Ge=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,393))})),ze=he(Fe),Me=he(De),He=he(Ge),Ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){alert("Some error occured ")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(y.jsxs)(Ee.a,{children:[Object(y.jsx)(Ue,{}),Object(y.jsxs)(Le,{style:{padding:"0 50px"},children:[Object(y.jsxs)(Pe.a,{style:{margin:"16px 0"},children:[Object(y.jsx)(Pe.a.Item,{children:"Home"}),Object(y.jsx)(Pe.a.Item,{children:"List"}),Object(y.jsx)(Pe.a.Item,{children:"App"})]}),Object(y.jsxs)(Ee.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(y.jsx)(Ae,{className:"site-layout-background",width:200,children:Object(y.jsxs)(ve.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},children:[Object(y.jsxs)(Re,{icon:Object(y.jsx)(we.a,{}),title:"My Profile",children:[Object(y.jsx)(ve.a.Item,{children:Object(y.jsx)(j.b,{to:"/profile",children:"Profile"})},"1"),Object(y.jsx)(ve.a.Item,{children:Object(y.jsx)(j.b,{to:"/dialogs",children:"Messages"})},"2")]},"sub1"),Object(y.jsx)(Re,{icon:Object(y.jsx)(we.a,{}),title:"Developer",children:Object(y.jsx)(ve.a.Item,{children:Object(y.jsx)(j.b,{to:"/developers",children:"Developers"})},"3")},"sub2"),Object(y.jsx)(Re,{icon:Object(y.jsx)(we.a,{}),title:"Chat",children:Object(y.jsx)(ve.a.Item,{children:Object(y.jsx)(j.b,{to:"/chat",children:"Chat"})},"4")},"sub3")]})}),Object(y.jsx)(Le,{style:{padding:"0 24px",minHeight:280},children:Object(y.jsxs)(b.d,{children:[Object(y.jsx)(b.b,{exact:!0,path:"/",children:function(){return Object(y.jsx)(b.a,{to:"/profile"})}}),Object(y.jsx)(b.b,{path:"/dialogs",children:Object(y.jsx)(ze,{})}),Object(y.jsx)(b.b,{path:"/profile/:userId?",children:Object(y.jsx)(Me,{})}),Object(y.jsx)(b.b,{path:"/developers",children:Object(y.jsx)(K,{pageTitle:"Page Title"})}),Object(y.jsx)(b.b,{path:"/login",children:Object(y.jsx)(me,{})}),Object(y.jsx)(b.b,{path:"/chat",children:Object(y.jsx)(He,{})}),Object(y.jsx)(b.b,{path:"*",children:Object(y.jsx)("div",{children:"404 NOT FOUND"})})]})})]})]}),Object(y.jsx)(ke,{children:"Samurai Social Network @2021 Create by Inferno"})]}):Object(y.jsx)(O.a,{})}}]),n}(i.Component),qe=Object(X.d)(b.h,Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(ee()).then((function(){e(ce())}))}}}))(Ve),Be=function(){return Object(y.jsx)(j.a,{children:Object(y.jsx)(f.a,{store:Oe,children:Object(y.jsx)(qe,{})})})};a.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(Be,{})}),document.getElementById("root")),r()},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(8),c=n(140),a=(n(0),n(334),n(139)),i=n(1),s=["input","meta"],u=["input","meta"],o=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(i.jsxs)("div",{className:"form-control ".concat(a?"error":""),children:[Object(i.jsx)("div",{children:c}),Object(i.jsx)("div",{children:a&&Object(i.jsx)("span",{children:r})})]})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,s));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,u));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function j(e,t,n,c){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(a.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},s)),u]})}}},[[376,1,2]]]);
//# sourceMappingURL=main.3d2cbd4a.chunk.js.map