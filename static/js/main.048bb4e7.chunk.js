(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[0],{106:function(e,t,s){},193:function(e,t,s){},194:function(e,t,s){},200:function(e,t,s){},201:function(e,t,s){},202:function(e,t,s){},240:function(e,t,s){},241:function(e,t,s){},242:function(e,t,s){},243:function(e,t,s){},244:function(e,t,s){},245:function(e,t,s){},246:function(e,t,s){"use strict";s.r(t);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,250)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),i(e),r(e)}))},c=s(8),i=s(30),r=s(4),a=s(107).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c4158ed8-d0fa-48f5-978e-b07ad1bf0132"}}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},u=function(e){return a.delete("follow/".concat(e))},l=function(e){return console.warn("Obsolete method. Please profileAPI object."),j.getProfile(e)},j={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status/",{status:e})}},d=function(){return a.get("auth/me")},b="ADD_POST",p="SET_USER_PROFILE",h="SET_STATUS",O={postsData:[{id:1,message:"Hi, who are u?",likes:12},{id:2,message:"Hi, who are u Doe?",likes:1},{id:3,message:"Hi, who are John?",likes:129}],profile:null,status:""},f=function(e){return{type:h,status:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var s={id:5,message:t.newPostText,likes:0};return Object(r.a)(Object(r.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[s]),newPostText:""});case p:return Object(r.a)(Object(r.a)({},e),{},{profile:t.profile});case h:return Object(r.a)(Object(r.a)({},e),{},{status:t.status});default:return e}},m="SEND_MESSAGE",x={dialogsData:[{id:1,name:"Roman"},{id:2,name:"Dimych"},{id:3,name:"Petro"},{id:4,name:"Andrey"}],messagesData:[{id:1,message:"Hi world!"},{id:2,message:"Hi wrld!"},{id:3,message:"Yo"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var s=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(i.a)(e.messagesData),[{id:6,message:s}])});default:return e}},P={sidebar:{}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return e},S="FOLLOW",_="UNFOLLOW",y="SET_USERS",N="SET_CURRENT_PAGE",k="SET_TOTAL_USERS_COUNT",C="SET_TOTAL_USERS_COUNT",T="TOGGLE_IS_FOLLOWING_PROGRESS",I={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[4,5]},U=function(e){return{type:C,isFetching:e}},A=function(e,t){return{type:T,isFetching:e,userId:t}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case _:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case y:return Object(r.a)(Object(r.a)({},e),{},{users:Object(i.a)(t.users)});case N:return Object(r.a)(Object(r.a)({},e),{},{currentPage:t.currentPage});case k:return Object(r.a)(Object(r.a)({},e),{},{totalUsersCount:t.count});case C:return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.isFetching});case T:return Object(r.a)(Object(r.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},D="SET_USER_DATA",F={userId:null,email:null,login:null,isAuth:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(r.a)(Object(r.a)(Object(r.a)({},e),t.data),{},{isAuth:!0});default:return e}},L=s(108),R=s(249),z=Object(c.c)({profilePage:g,dialogsPage:v,sidebar:w,usersPage:E,auth:M,form:R.a}),G=Object(c.e)(z,Object(c.a)(L.a));window.store=G;var H=G,B=s(49),J=s.n(B),W=s(1),Y=s.n(W),K=s(11),q=s(9),Q=(s(193),s(194),s(0)),V=function(){return Object(Q.jsx)("nav",{className:"menu",children:Object(Q.jsxs)("ul",{className:"menu__list",children:[Object(Q.jsx)("li",{className:"menu__item",children:Object(Q.jsx)(K.b,{to:"/home",className:"menu__item-link",children:"Home"})}),Object(Q.jsx)("li",{children:Object(Q.jsx)(K.b,{to:"/profile",className:"menu__item-link",children:"Profile"})}),Object(Q.jsx)("li",{children:Object(Q.jsx)(K.b,{to:"/dialogs",className:"menu__item-link",children:"Messages"})}),Object(Q.jsx)("li",{children:Object(Q.jsx)(K.b,{to:"/users",className:"menu__item-link",children:"Users"})})]})})},X=s(21),Z=s(22),$=s(24),ee=s(23),te=s(10),se=(s(200),function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<t;n++)s.push(n);return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{children:s.map((function(t){return Object(Q.jsx)("span",{className:"user__page-number ".concat(e.currentPage===t&&"user__page-select"),onClick:function(s){e.onPageChanged(t)},children:t})}))}),e.users.map((function(t){return Object(Q.jsxs)("div",{className:"user",children:[Object(Q.jsxs)("span",{children:[Object(Q.jsx)("div",{children:Object(Q.jsx)(K.b,{to:"/profile/"+t.id,children:Object(Q.jsx)("img",{className:"user__avatar",src:"".concat(null!=t.photos.small?t.photos.small:"https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"),alt:""})})}),Object(Q.jsx)("div",{children:t.followed?Object(Q.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"UnFollow"}):Object(Q.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(Q.jsxs)("span",{children:[Object(Q.jsxs)("span",{children:[Object(Q.jsx)("div",{children:t.fullName}),Object(Q.jsx)("div",{children:t.status})]}),Object(Q.jsxs)("span",{children:[Object(Q.jsx)("div",{children:t.id}),Object(Q.jsx)("div",{children:"user.location.country"}),Object(Q.jsx)("div",{children:"user.location.city"})]})]})]},t.id)}))]})}),ne=s.p+"static/media/preloader.3ad5b43f.svg",ce=function(e){return Object(Q.jsx)("div",{children:Object(Q.jsx)("img",{src:ne,alt:"Preloader"})})},ie=function(e){return{isAuth:e.auth.isAuth}},re=function(e){var t=function(t){Object($.a)(n,t);var s=Object(ee.a)(n);function n(){return Object(X.a)(this,n),s.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(Q.jsx)(e,Object(r.a)({},this.props)):Object(Q.jsx)(q.a,{to:"/login"})}}]),n}(W.Component);return Object(te.b)(ie)(t)},ae=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){var e;Object(X.a)(this,s);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Q.jsxs)(Q.Fragment,{children:[this.props.isFetching?Object(Q.jsx)(ce,{}):null,Object(Q.jsx)(se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(W.Component),oe=Object(c.d)(Object(te.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(A(!0,e)),u(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:S,userId:e}}(e)),t(A(!1,e))}))}},unfollow:function(e){return function(t){t(A(!0,e)),u(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:_,userId:e}}(e)),t(A(!1,e))}))}},setCurrentPage:function(e){return{type:N,currentPage:e}},toggleFollowingProgress:A,getUsers:function(e,t){return function(s){s(U(!0)),o(e,t).then((function(e){var t;s(U(!1)),s(function(e){return{type:y,users:e}}(e.items)),s((t=e.totalCount,{type:k,count:t}))}))}}}),re)(ae),ue=(s(95),s(201),function(e){return Object(Q.jsx)("div",{className:"dialogs__item",children:Object(Q.jsxs)(K.b,{to:"dialogs/".concat(e.id),children:[e.name," "]})})}),le=(s(202),function(e){return Object(Q.jsx)("div",{className:"messages__item",children:Object(Q.jsx)("span",{children:e.message})})}),je=s(248),de=s(247),be=Object(de.a)({form:"dialogAddMessageForm"})((function(e){return Object(Q.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Q.jsx)("div",{children:Object(Q.jsx)(je.a,{component:"textarea",name:"newPostText",placeholder:"Enter your message"})}),Object(Q.jsx)("div",{children:Object(Q.jsx)("button",{children:"Send"})})]})})),pe=function(e){var t=e.dialogsPage,s=t.dialogsData.map((function(e){return Object(Q.jsx)(ue,{name:e.name,id:e.id},e.id)})),n=t.messagesData.map((function(e){return Object(Q.jsx)(le,{message:e.message},e.id)}));return e.isAuth?Object(Q.jsxs)("div",{className:"dialogs",children:[Object(Q.jsx)("div",{className:"dialogs__items",children:s}),Object(Q.jsxs)("div",{className:"messages",children:[Object(Q.jsx)("div",{children:n}),Object(Q.jsx)(be,{onSubmit:function(t){e.sendMessage(t.newPostText)}})]})]}):Object(Q.jsx)(q.a,{to:"/login"})},he=Object(c.d)(Object(te.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:m,newMessageBody:e}}(t))}}})),re)(pe),Oe=(s(106),s(240),s(241),function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){var e;Object(X.a)(this,s);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={editMode:!1,status:e.props.status},e.activeEditMode=function(){e.setState({editMode:!0})},e.deactiveEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(Z.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(Q.jsxs)("div",{className:"profile-status",children:[!this.state.editMode&&Object(Q.jsx)("div",{children:Object(Q.jsx)("span",{onDoubleClick:this.activeEditMode,children:this.props.status||"No status"})}),this.state.editMode&&Object(Q.jsx)("div",{children:Object(Q.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactiveEditMode,type:"text",value:this.state.status})})]})}}]),s}(W.Component)),fe=function(e){return e.profile?Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{children:Object(Q.jsx)("img",{className:"content__img",src:"https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",alt:""})}),Object(Q.jsxs)("div",{className:"description-block",children:[Object(Q.jsx)("img",{src:e.profile.photos.large,alt:""}),Object(Q.jsx)("div",{className:"description-block__contact",children:Object(Q.jsxs)("ul",{children:[Object(Q.jsx)("li",{children:e.profile.contacts.facebook}),Object(Q.jsx)("li",{children:e.profile.contacts.website}),Object(Q.jsx)("li",{children:e.profile.contacts.vk}),Object(Q.jsx)("li",{children:e.profile.contacts.twitter}),Object(Q.jsx)("li",{children:e.profile.contacts.instagram}),Object(Q.jsx)("li",{children:e.profile.contacts.youtube}),Object(Q.jsx)("li",{children:e.profile.contacts.github})]})}),Object(Q.jsx)(Oe,{status:e.status,updateStatus:e.updateStatus})]})]}):Object(Q.jsx)(ce,{})},ge=(s(242),s(243),function(e){return Object(Q.jsxs)("div",{className:"post__item",children:[Object(Q.jsx)("img",{className:"post__item_img",src:"https://www.serietotaal.nl/images/nieuws/t/6fbi52rzy3ly-full.jpg",alt:""}),Object(Q.jsx)("span",{children:e.message}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("span",{children:"like"}),Object(Q.jsx)("span",{children:e.likes})]})]})}),me=Object(de.a)({form:"profileAddNewPostForm"})((function(e){return Object(Q.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Q.jsx)("div",{children:Object(Q.jsx)(je.a,{component:"textarea",name:"newPostText",placeholder:e.value})}),Object(Q.jsx)("div",{children:Object(Q.jsx)("button",{children:"Add post"})})]})})),xe=function(e){var t=e.postsData.map((function(e){return Object(Q.jsx)(ge,{message:e.message,likes:e.likes},e.id)}));return Object(Q.jsxs)("div",{className:"post",children:[Object(Q.jsx)("h3",{children:"my post"}),Object(Q.jsx)(me,{onSubmit:function(t){e.addPosts(t.newPostText)}}),Object(Q.jsx)("div",{className:"posts",children:t})]})},ve=Object(te.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPosts:function(t){e(function(e){return{type:b,newPostText:e}}(t))}}}))(xe),Pe=function(e){return Object(Q.jsxs)("div",{className:"content",children:[Object(Q.jsx)(fe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(Q.jsx)(ve,{})]})},we=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){return Object(X.a)(this,s),t.apply(this,arguments)}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(Q.jsx)(Pe,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(W.Component),Se=Object(c.d)(Object(te.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){l(e).then((function(e){t(function(e){return{type:p,profile:e}}(e.data))}))}},getStatus:function(e){return function(t){j.getStatus(e).then((function(e){t(f(e.data))}))}},updateStatus:function(e){return function(t){j.getProfile(e).then((function(s){0===s.data.resutCode&&t(f(e))}))}}}),q.g,re)(we),_e=(s(244),function(e){return Object(Q.jsxs)("header",{className:"header",children:[Object(Q.jsx)("img",{className:"logo",src:"https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png",alt:"Logo header"}),Object(Q.jsx)("div",{className:"login-block",children:e.isAuth?e.login:Object(Q.jsx)(K.b,{className:"login-block__link",to:"/login",children:"Login"})})]})}),ye=function(e){Object($.a)(s,e);var t=Object(ee.a)(s);function s(){return Object(X.a)(this,s),t.apply(this,arguments)}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(Q.jsx)(_e,Object(r.a)({},this.props))}}]),s}(W.Component),Ne=Object(te.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){d().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,c=s.email,i=s.login;e(function(e,t,s){return{type:D,data:{userId:e,email:t,login:s}}}(n,c,i))}}))}}})(ye),ke=(s(245),Object(de.a)({form:"login"})((function(e){return Object(Q.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Q.jsx)("div",{children:Object(Q.jsx)(je.a,{placeholder:"Login",name:"login",component:"input"})}),Object(Q.jsx)("div",{children:Object(Q.jsx)(je.a,{placeholder:"Password",name:"password",component:"input"})}),Object(Q.jsx)("div",{children:Object(Q.jsxs)("label",{children:[Object(Q.jsx)(je.a,{name:"rememberMe",type:"checkbox",component:"input"}),Object(Q.jsx)("span",{children:"remember me"})]})}),Object(Q.jsx)("div",{children:Object(Q.jsx)("button",{children:"Login"})})]})}))),Ce=function(e){return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h1",{children:"login"}),Object(Q.jsx)(ke,{onSubmit:function(e){console.log(e)}})]})},Te=function(){return Object(Q.jsx)(K.a,{children:Object(Q.jsxs)("div",{className:"app__wrapper",children:[Object(Q.jsx)(Ne,{}),Object(Q.jsx)(V,{}),Object(Q.jsx)("div",{className:"app__wrapper_content",children:Object(Q.jsxs)(q.d,{children:[Object(Q.jsx)(q.b,{path:"/dialogs",children:Object(Q.jsx)(he,{})}),Object(Q.jsx)(q.b,{path:"/profile/:userId?",children:Object(Q.jsx)(Se,{})}),Object(Q.jsx)(q.b,{path:"/users",children:Object(Q.jsx)(oe,{})}),Object(Q.jsx)(q.b,{path:"/login",children:Object(Q.jsx)(Ce,{})})]})})]})})};J.a.render(Object(Q.jsx)(Y.a.StrictMode,{children:Object(Q.jsx)(te.a,{store:H,children:Object(Q.jsx)(Te,{})})}),document.getElementById("root")),n()},95:function(e,t,s){}},[[246,1,2]]]);
//# sourceMappingURL=main.048bb4e7.chunk.js.map