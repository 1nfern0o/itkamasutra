(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){"use strict";s.r(t);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,80)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),i(e),r(e)}))},c=s(19),i=s(12),r=s(2),a="ADD_POST",o="UPDATE_NEW_POST_TEXT",l="SET_USER_PROFILE",u={postsData:[{id:1,message:"Hi, who are u?",likes:12},{id:2,message:"Hi, who are u Doe?",likes:1},{id:3,message:"Hi, who are John?",likes:129}],newPostText:"it-roman",profile:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var s={id:5,message:e.newPostText,likes:0};return Object(r.a)(Object(r.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[s]),newPostText:""});case o:return Object(r.a)(Object(r.a)({},e),{},{newPostText:t.newText});case l:return Object(r.a)(Object(r.a)({},e),{},{profile:t.profile});default:return e}},d="UPDATE_NEW_MESSAGE_BODY",b="SEND_MESSAGE",p={dialogsData:[{id:1,name:"Roman"},{id:2,name:"Dimych"},{id:3,name:"Petro"},{id:4,name:"Andrey"}],messagesData:[{id:1,message:"Hi world!"},{id:2,message:"Hi wrld!"},{id:3,message:"Yo"}],newMessageBody:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(r.a)(Object(r.a)({},e),{},{newMessageBody:t.body});case b:var s=e.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{newMessageBody:"",messagesData:[].concat(Object(i.a)(e.messagesData),[{id:6,message:s}])});default:return e}},g={sidebar:{}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return e},f=s(14),m=f.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c4158ed8-d0fa-48f5-978e-b07ad1bf0132"}}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return m.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},v=function(e){return m.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))},w="FOLLOW",P="UNFOLLOW",_="SET_USERS",y="SET_CURRENT_PAGE",N="SET_TOTAL_USERS_COUNT",k="SET_TOTAL_USERS_COUNT",S="TOGGLE_IS_FOLLOWING_PROGRESS",C={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[4,5]},T=function(e){return{type:k,isFetching:e}},E=function(e,t){return{type:S,isFetching:e,userId:t}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case P:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case _:return Object(r.a)(Object(r.a)({},e),{},{users:Object(i.a)(t.users)});case y:return Object(r.a)(Object(r.a)({},e),{},{currentPage:t.currentPage});case N:return Object(r.a)(Object(r.a)({},e),{},{totalUsersCount:t.count});case k:return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.isFetching});case S:return Object(r.a)(Object(r.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},D="SET_USER_DATA",I={userId:null,email:null,login:null,isAuth:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(r.a)(Object(r.a)(Object(r.a)({},e),t.data),{},{isAuth:!0});default:return e}},F=s(39),M=Object(c.c)({profilePage:j,dialogsPage:h,sidebar:O,usersPage:U,auth:A}),L=Object(c.d)(M,Object(c.a)(F.a));window.store=L;var R=L,z=s(21),B=s.n(z),G=s(1),H=s.n(G),W=s(5),J=s(4),Y=(s(65),s(66),s(0)),K=function(){return Object(Y.jsx)("nav",{className:"menu",children:Object(Y.jsxs)("ul",{className:"menu__list",children:[Object(Y.jsx)("li",{className:"menu__item",children:Object(Y.jsx)(W.b,{to:"/home",className:"menu__item-link",children:"Home"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(W.b,{to:"/profile",className:"menu__item-link",children:"Profile"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(W.b,{to:"/dialogs",className:"menu__item-link",children:"Messages"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(W.b,{to:"/users",className:"menu__item-link",children:"Users"})})]})})},X=s(15),q=s(16),Q=s(18),V=s(17),Z=s(10),$=(s(72),function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<t;n++)s.push(n);return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:s.map((function(t){return Object(Y.jsx)("span",{className:"user__page-number ".concat(e.currentPage===t&&"user__page-select"),onClick:function(s){e.onPageChanged(t)},children:t})}))}),e.users.map((function(t){return Object(Y.jsxs)("div",{className:"user",children:[Object(Y.jsxs)("span",{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(W.b,{to:"/profile/"+t.id,children:Object(Y.jsx)("img",{className:"user__avatar",src:"".concat(null!=t.photos.small?t.photos.small:"https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"),alt:""})})}),Object(Y.jsx)("div",{children:t.followed?Object(Y.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"UnFollow"}):Object(Y.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(Y.jsxs)("span",{children:[Object(Y.jsxs)("span",{children:[Object(Y.jsx)("div",{children:t.fullName}),Object(Y.jsx)("div",{children:t.status})]}),Object(Y.jsxs)("span",{children:[Object(Y.jsx)("div",{children:t.id}),Object(Y.jsx)("div",{children:"user.location.country"}),Object(Y.jsx)("div",{children:"user.location.city"})]})]})]},t.id)}))]})}),ee=s.p+"static/media/preloader.3ad5b43f.svg",te=function(e){return Object(Y.jsx)("div",{children:Object(Y.jsx)("img",{src:ee,alt:"Preloader"})})},se=function(e){Object(Q.a)(s,e);var t=Object(V.a)(s);function s(){var e;Object(X.a)(this,s);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(q.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[this.props.isFetching?Object(Y.jsx)(te,{}):null,Object(Y.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(G.Component),ne=Object(Z.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(E(!0,e)),v(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:w,userId:e}}(e)),t(E(!1,e))}))}},unfollow:function(e){return function(t){t(E(!0,e)),v(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:P,userId:e}}(e)),t(E(!1,e))}))}},setCurrentPage:function(e){return{type:y,currentPage:e}},toggleFollowingProgress:E,getUsers:function(e,t){return function(s){s(T(!0)),x(e,t).then((function(e){var t;s(T(!1)),s(function(e){return{type:_,users:e}}(e.items)),s((t=e.totalCount,{type:N,count:t}))}))}}})(se),ce=(s(37),s(73),function(e){return Object(Y.jsx)("div",{className:"dialogs__item",children:Object(Y.jsxs)(W.b,{to:"dialogs/".concat(e.id),children:[e.name," "]})})}),ie=(s(74),function(e){return Object(Y.jsx)("div",{className:"messages__item",children:Object(Y.jsx)("span",{children:e.message})})}),re=function(e){var t=e.dialogsPage,s=t.dialogsData.map((function(e){return Object(Y.jsx)(ce,{name:e.name,id:e.id},e.id)})),n=t.messagesData.map((function(e){return Object(Y.jsx)(ie,{message:e.message},e.id)})),c=t.newMessageBody;return Object(Y.jsxs)("div",{className:"dialogs",children:[Object(Y.jsx)("div",{className:"dialogs__items",children:s}),Object(Y.jsxs)("div",{className:"messages",children:[Object(Y.jsx)("div",{children:n}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("textarea",{value:c,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},placeholder:"Enter your message"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})},ae=Object(Z.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:d,body:e}}(t))},sendMessage:function(){e({type:b})}}}))(re),oe=(s(38),s(75),function(e){return e.profile?Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("img",{className:"content__img",src:"https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",alt:""})}),Object(Y.jsxs)("div",{className:"description-block",children:[Object(Y.jsx)("img",{src:e.profile.photos.large,alt:""}),Object(Y.jsx)("div",{className:"description-block__contact",children:Object(Y.jsxs)("ul",{children:[Object(Y.jsx)("li",{children:e.profile.contacts.facebook}),Object(Y.jsx)("li",{children:e.profile.contacts.website}),Object(Y.jsx)("li",{children:e.profile.contacts.vk}),Object(Y.jsx)("li",{children:e.profile.contacts.twitter}),Object(Y.jsx)("li",{children:e.profile.contacts.instagram}),Object(Y.jsx)("li",{children:e.profile.contacts.youtube}),Object(Y.jsx)("li",{children:e.profile.contacts.github})]})}),"ava + descr"]})]}):Object(Y.jsx)(te,{})}),le=(s(76),s(77),function(e){return Object(Y.jsxs)("div",{className:"post__item",children:[Object(Y.jsx)("img",{className:"post__item_img",src:"https://www.serietotaal.nl/images/nieuws/t/6fbi52rzy3ly-full.jpg",alt:""}),Object(Y.jsx)("span",{children:e.message}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("span",{children:"like"}),Object(Y.jsx)("span",{children:e.likes})]})]})}),ue=function(e){var t=e.postsData.map((function(e){return Object(Y.jsx)(le,{message:e.message,likes:e.likes},e.id)})),s=H.a.createRef();return Object(Y.jsxs)("div",{className:"post",children:[Object(Y.jsx)("h3",{children:"my post"}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("textarea",{onChange:function(){var t=s.current.value;e.updateNewPostText(t)},ref:s,value:e.newPostText})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{onClick:function(){e.addPosts()},children:"Add post"})})]}),Object(Y.jsx)("div",{className:"posts",children:t})]})},je=Object(Z.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:o,newText:e}}(t);e(s)},addPosts:function(){e({type:a})}}}))(ue),de=function(e){return Object(Y.jsxs)("div",{className:"content",children:[Object(Y.jsx)(oe,{profile:e.profile}),Object(Y.jsx)(je,{})]})},be=function(e){Object(Q.a)(s,e);var t=Object(V.a)(s);function s(){return Object(X.a)(this,s),t.apply(this,arguments)}return Object(q.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=1),f.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(t)).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(Y.jsx)(de,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(G.Component),pe=Object(J.f)(be),he=Object(Z.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:l,profile:e}}})(pe),ge=(s(78),function(e){return Object(Y.jsxs)("header",{className:"header",children:[Object(Y.jsx)("img",{className:"logo",src:"https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png",alt:"Logo header"}),Object(Y.jsx)("div",{className:"login-block",children:e.isAuth?e.login:Object(Y.jsx)(W.b,{className:"login-block__link",to:"/login",children:"Login"})})]})}),Oe=function(e){Object(Q.a)(s,e);var t=Object(V.a)(s);function s(){return Object(X.a)(this,s),t.apply(this,arguments)}return Object(q.a)(s,[{key:"componentDidMount",value:function(){var e=this;f.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,c=s.email,i=s.login;e.props.setAuthUserData(n,c,i)}}))}},{key:"render",value:function(){return Object(Y.jsx)(ge,Object(r.a)({},this.props))}}]),s}(G.Component),fe=Object(Z.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:function(e,t,s){return{type:D,data:{userId:e,email:t,login:s}}}})(Oe),me=function(){return Object(Y.jsx)(W.a,{children:Object(Y.jsxs)("div",{className:"app__wrapper",children:[Object(Y.jsx)(fe,{}),Object(Y.jsx)(K,{}),Object(Y.jsx)("div",{className:"app__wrapper_content",children:Object(Y.jsxs)(J.c,{children:[Object(Y.jsx)(J.a,{path:"/dialogs",children:Object(Y.jsx)(ae,{})}),Object(Y.jsx)(J.a,{path:"/profile/:userId?",children:Object(Y.jsx)(he,{})}),Object(Y.jsx)(J.a,{path:"/users",children:Object(Y.jsx)(ne,{})})]})})]})})};B.a.render(Object(Y.jsx)(H.a.StrictMode,{children:Object(Y.jsx)(Z.a,{store:R,children:Object(Y.jsx)(me,{})})}),document.getElementById("root")),n()}},[[79,1,2]]]);
//# sourceMappingURL=main.164f1468.chunk.js.map