(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))},c=n(18),i=n(16),r=n(2),a=n(38).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c4158ed8-d0fa-48f5-978e-b07ad1bf0132"}}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},l=function(e){return a.delete("follow/".concat(e))},u=function(e){return a.get("profile/".concat(e))},j=function(){return a.get("auth/me")},d="ADD_POST",b="UPDATE_NEW_POST_TEXT",h="SET_USER_PROFILE",g={postsData:[{id:1,message:"Hi, who are u?",likes:12},{id:2,message:"Hi, who are u Doe?",likes:1},{id:3,message:"Hi, who are John?",likes:129}],newPostText:"it-roman",profile:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:5,message:e.newPostText,likes:0};return Object(r.a)(Object(r.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[n]),newPostText:""});case b:return Object(r.a)(Object(r.a)({},e),{},{newPostText:t.newText});case h:return Object(r.a)(Object(r.a)({},e),{},{profile:t.profile});default:return e}},O="UPDATE_NEW_MESSAGE_BODY",f="SEND_MESSAGE",m={dialogsData:[{id:1,name:"Roman"},{id:2,name:"Dimych"},{id:3,name:"Petro"},{id:4,name:"Andrey"}],messagesData:[{id:1,message:"Hi world!"},{id:2,message:"Hi wrld!"},{id:3,message:"Yo"}],newMessageBody:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(r.a)(Object(r.a)({},e),{},{newMessageBody:t.body});case f:var n=e.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{newMessageBody:"",messagesData:[].concat(Object(i.a)(e.messagesData),[{id:6,message:n}])});default:return e}},v={sidebar:{}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return e},P="FOLLOW",_="UNFOLLOW",y="SET_USERS",N="SET_CURRENT_PAGE",k="SET_TOTAL_USERS_COUNT",S="SET_TOTAL_USERS_COUNT",C="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[4,5]},E=function(e){return{type:S,isFetching:e}},U=function(e,t){return{type:C,isFetching:e,userId:t}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case _:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case y:return Object(r.a)(Object(r.a)({},e),{},{users:Object(i.a)(t.users)});case N:return Object(r.a)(Object(r.a)({},e),{},{currentPage:t.currentPage});case k:return Object(r.a)(Object(r.a)({},e),{},{totalUsersCount:t.count});case S:return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.isFetching});case C:return Object(r.a)(Object(r.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},I="SET_USER_DATA",A={userId:null,email:null,login:null,isAuth:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(r.a)(Object(r.a)(Object(r.a)({},e),t.data),{},{isAuth:!0});default:return e}},M=n(39),L=Object(c.c)({profilePage:p,dialogsPage:x,sidebar:w,usersPage:D,auth:F}),R=Object(c.d)(L,Object(c.a)(M.a));window.store=R;var z=R,B=n(20),G=n.n(B),H=n(1),W=n.n(H),J=n(5),Y=n(4),K=(n(65),n(66),n(0)),X=function(){return Object(K.jsx)("nav",{className:"menu",children:Object(K.jsxs)("ul",{className:"menu__list",children:[Object(K.jsx)("li",{className:"menu__item",children:Object(K.jsx)(J.b,{to:"/home",className:"menu__item-link",children:"Home"})}),Object(K.jsx)("li",{children:Object(K.jsx)(J.b,{to:"/profile",className:"menu__item-link",children:"Profile"})}),Object(K.jsx)("li",{children:Object(K.jsx)(J.b,{to:"/dialogs",className:"menu__item-link",children:"Messages"})}),Object(K.jsx)("li",{children:Object(K.jsx)(J.b,{to:"/users",className:"menu__item-link",children:"Users"})})]})})},q=n(12),Q=n(13),V=n(15),Z=n(14),$=n(6),ee=(n(72),function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<t;s++)n.push(s);return Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:n.map((function(t){return Object(K.jsx)("span",{className:"user__page-number ".concat(e.currentPage===t&&"user__page-select"),onClick:function(n){e.onPageChanged(t)},children:t})}))}),e.users.map((function(t){return Object(K.jsxs)("div",{className:"user",children:[Object(K.jsxs)("span",{children:[Object(K.jsx)("div",{children:Object(K.jsx)(J.b,{to:"/profile/"+t.id,children:Object(K.jsx)("img",{className:"user__avatar",src:"".concat(null!=t.photos.small?t.photos.small:"https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"),alt:""})})}),Object(K.jsx)("div",{children:t.followed?Object(K.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"UnFollow"}):Object(K.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(K.jsxs)("span",{children:[Object(K.jsxs)("span",{children:[Object(K.jsx)("div",{children:t.fullName}),Object(K.jsx)("div",{children:t.status})]}),Object(K.jsxs)("span",{children:[Object(K.jsx)("div",{children:t.id}),Object(K.jsx)("div",{children:"user.location.country"}),Object(K.jsx)("div",{children:"user.location.city"})]})]})]},t.id)}))]})}),te=n.p+"static/media/preloader.3ad5b43f.svg",ne=function(e){return Object(K.jsx)("div",{children:Object(K.jsx)("img",{src:te,alt:"Preloader"})})},se=function(e){return{isAuth:e.auth.isAuth}},ce=function(e){var t=function(t){Object(V.a)(s,t);var n=Object(Z.a)(s);function s(){return Object(q.a)(this,s),n.apply(this,arguments)}return Object(Q.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(K.jsx)(e,Object(r.a)({},this.props)):Object(K.jsx)(Y.a,{to:"/login"})}}]),s}(H.Component);return Object($.b)(se)(t)},ie=function(e){Object(V.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(q.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(K.jsxs)(K.Fragment,{children:[this.props.isFetching?Object(K.jsx)(ne,{}):null,Object(K.jsx)(ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(H.Component),re=ce(Object($.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(U(!0,e)),l(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:P,userId:e}}(e)),t(U(!1,e))}))}},unfollow:function(e){return function(t){t(U(!0,e)),l(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:_,userId:e}}(e)),t(U(!1,e))}))}},setCurrentPage:function(e){return{type:N,currentPage:e}},toggleFollowingProgress:U,getUsers:function(e,t){return function(n){n(E(!0)),o(e,t).then((function(e){var t;n(E(!1)),n(function(e){return{type:y,users:e}}(e.items)),n((t=e.totalCount,{type:k,count:t}))}))}}})(ie)),ae=(n(36),n(73),function(e){return Object(K.jsx)("div",{className:"dialogs__item",children:Object(K.jsxs)(J.b,{to:"dialogs/".concat(e.id),children:[e.name," "]})})}),oe=(n(74),function(e){return Object(K.jsx)("div",{className:"messages__item",children:Object(K.jsx)("span",{children:e.message})})}),le=ce((function(e){var t=e.dialogsPage,n=t.dialogsData.map((function(e){return Object(K.jsx)(ae,{name:e.name,id:e.id},e.id)})),s=t.messagesData.map((function(e){return Object(K.jsx)(oe,{message:e.message},e.id)})),c=t.newMessageBody;return e.isAuth?Object(K.jsxs)("div",{className:"dialogs",children:[Object(K.jsx)("div",{className:"dialogs__items",children:n}),Object(K.jsxs)("div",{className:"messages",children:[Object(K.jsx)("div",{children:s}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:Object(K.jsx)("textarea",{value:c,onChange:function(t){var n=t.target.value;e.updateNewMessageBody(n)},placeholder:"Enter your message"})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]}):Object(K.jsx)(Y.a,{to:"/login"})})),ue=Object($.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:O,body:e}}(t))},sendMessage:function(){e({type:f})}}}))(le),je=(n(37),n(75),function(e){return e.profile?Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:Object(K.jsx)("img",{className:"content__img",src:"https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",alt:""})}),Object(K.jsxs)("div",{className:"description-block",children:[Object(K.jsx)("img",{src:e.profile.photos.large,alt:""}),Object(K.jsx)("div",{className:"description-block__contact",children:Object(K.jsxs)("ul",{children:[Object(K.jsx)("li",{children:e.profile.contacts.facebook}),Object(K.jsx)("li",{children:e.profile.contacts.website}),Object(K.jsx)("li",{children:e.profile.contacts.vk}),Object(K.jsx)("li",{children:e.profile.contacts.twitter}),Object(K.jsx)("li",{children:e.profile.contacts.instagram}),Object(K.jsx)("li",{children:e.profile.contacts.youtube}),Object(K.jsx)("li",{children:e.profile.contacts.github})]})}),"ava + descr"]})]}):Object(K.jsx)(ne,{})}),de=(n(76),n(77),function(e){return Object(K.jsxs)("div",{className:"post__item",children:[Object(K.jsx)("img",{className:"post__item_img",src:"https://www.serietotaal.nl/images/nieuws/t/6fbi52rzy3ly-full.jpg",alt:""}),Object(K.jsx)("span",{children:e.message}),Object(K.jsxs)("div",{children:[Object(K.jsx)("span",{children:"like"}),Object(K.jsx)("span",{children:e.likes})]})]})}),be=function(e){var t=e.postsData.map((function(e){return Object(K.jsx)(de,{message:e.message,likes:e.likes},e.id)})),n=W.a.createRef();return Object(K.jsxs)("div",{className:"post",children:[Object(K.jsx)("h3",{children:"my post"}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:Object(K.jsx)("textarea",{onChange:function(){var t=n.current.value;e.updateNewPostText(t)},ref:n,value:e.newPostText})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(){e.addPosts()},children:"Add post"})})]}),Object(K.jsx)("div",{className:"posts",children:t})]})},he=Object($.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var n=function(e){return{type:b,newText:e}}(t);e(n)},addPosts:function(){e({type:d})}}}))(be),ge=function(e){return Object(K.jsxs)("div",{className:"content",children:[Object(K.jsx)(je,{profile:e.profile}),Object(K.jsx)(he,{})]})},pe=ce(function(e){Object(V.a)(n,e);var t=Object(Z.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return Object(K.jsx)(ge,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile}))}}]),n}(H.Component)),Oe=Object(Y.g)(pe),fe=Object($.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){u(e).then((function(e){t(function(e){return{type:h,profile:e}}(e.data))}))}}})(Oe),me=(n(78),function(e){return Object(K.jsxs)("header",{className:"header",children:[Object(K.jsx)("img",{className:"logo",src:"https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png",alt:"Logo header"}),Object(K.jsx)("div",{className:"login-block",children:e.isAuth?e.login:Object(K.jsx)(J.b,{className:"login-block__link",to:"/login",children:"Login"})})]})}),xe=function(e){Object(V.a)(n,e);var t=Object(Z.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(K.jsx)(me,Object(r.a)({},this.props))}}]),n}(H.Component),ve=Object($.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){j().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,c=n.email,i=n.login;e(function(e,t,n){return{type:I,data:{userId:e,email:t,login:n}}}(s,c,i))}}))}}})(xe),we=(n(79),function(e){return Object(K.jsx)("div",{children:Object(K.jsx)("h1",{children:"login"})})}),Pe=function(){return Object(K.jsx)(J.a,{children:Object(K.jsxs)("div",{className:"app__wrapper",children:[Object(K.jsx)(ve,{}),Object(K.jsx)(X,{}),Object(K.jsx)("div",{className:"app__wrapper_content",children:Object(K.jsxs)(Y.d,{children:[Object(K.jsx)(Y.b,{path:"/dialogs",children:Object(K.jsx)(ue,{})}),Object(K.jsx)(Y.b,{path:"/profile/:userId?",children:Object(K.jsx)(fe,{})}),Object(K.jsx)(Y.b,{path:"/users",children:Object(K.jsx)(re,{})}),Object(K.jsx)(Y.b,{path:"/login",children:Object(K.jsx)(we,{})})]})})]})})};G.a.render(Object(K.jsx)(W.a.StrictMode,{children:Object(K.jsx)($.a,{store:z,children:Object(K.jsx)(Pe,{})})}),document.getElementById("root")),s()}},[[80,1,2]]]);
//# sourceMappingURL=main.142a71d0.chunk.js.map