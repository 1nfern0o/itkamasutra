(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[0],{21:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))},a=s(11),c="ADD-POST",i="UPDATE-NEW-POST-TEXT",o={postsData:[{id:1,message:"Hi, who are u?",likes:12},{id:2,message:"Hi, who are u Doe?",likes:1},{id:3,message:"Hi, who are John?",likes:129}],newPostText:"it-roman"},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var s={id:5,message:e.newPostText,likes:0};return e.postsData.push(s),e.newPostText="",e;case i:return e.newPostText=t.newText,e;default:return e}},d="UPDATE_NEW_MESSAGE_BODY",l="SEND_MESSAGE",j={dialogsData:[{id:1,name:"Roman"},{id:2,name:"Dimych"},{id:3,name:"Petro"},{id:4,name:"Andrey"}],messagesData:[{id:1,message:"Hi world!"},{id:2,message:"Hi wrld!"},{id:3,message:"Yo"}],newMessageBody:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return e.newMessageBody=t.body,e;case l:var s=e.newMessageBody;return e.newMessageBody="",e.messagesData.push({id:6,message:s}),e;default:return e}},m={sidebar:{}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return e},g=Object(a.b)({profilePage:r,dialogsPage:u,sidebar:b}),h=Object(a.c)(g),x=s(13),p=s.n(x),O=s(0),f=s.n(O),v=s(8),w=s(3),_=(s(29),s(30),s(1)),N=function(){return Object(_.jsx)("header",{className:"header",children:Object(_.jsx)("img",{className:"logo",src:"https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png",alt:"Logo header"})})},P=(s(32),function(){return Object(_.jsx)("nav",{className:"menu",children:Object(_.jsxs)("ul",{className:"menu__list",children:[Object(_.jsx)("li",{className:"menu__item",children:Object(_.jsx)(v.b,{to:"/home",className:"menu__item-link",children:"Home"})}),Object(_.jsx)("li",{children:Object(_.jsx)(v.b,{to:"/profile",className:"menu__item-link",children:"Profile"})}),Object(_.jsx)("li",{children:Object(_.jsx)(v.b,{to:"/dialogs",className:"menu__item-link",children:"Messages"})})]})})}),y=(s(37),s(38),function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"content__img",src:"https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",alt:""})}),Object(_.jsx)("div",{className:"description-block",children:"ava + descr"})]})}),D=(s(39),s(40),function(e){return Object(_.jsxs)("div",{className:"post__item",children:[Object(_.jsx)("img",{className:"post__item_img",src:"https://www.serietotaal.nl/images/nieuws/t/6fbi52rzy3ly-full.jpg",alt:""}),Object(_.jsx)("span",{children:e.message}),Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{children:"like"}),Object(_.jsx)("span",{children:e.likes})]})]})}),T=function(e){var t=e.postsData.map((function(e){return Object(_.jsx)(D,{message:e.message,likes:e.likes})})),s=f.a.createRef();return Object(_.jsxs)("div",{className:"post",children:[Object(_.jsx)("h3",{children:"my post"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("textarea",{ref:s,value:e.newPostText,onChange:function(){var t=s.current.value;e.updateNewPostText(t)}})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:function(){e.addPosts()},children:"Add post"})})]}),Object(_.jsx)("div",{className:"posts",children:t})]})},k=s(10),M=Object(k.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:i,newText:e}}(t);e(s)},addPosts:function(){e({type:c})}}}))(T),E=function(){return Object(_.jsxs)("div",{className:"content",children:[Object(_.jsx)(y,{}),Object(_.jsx)(M,{})]})},S=(s(21),s(41),function(e){return Object(_.jsx)("div",{className:"dialogs__item",children:Object(_.jsxs)(v.b,{to:"dialogs/".concat(e.id),children:[e.name," "]})})}),B=(s(42),function(e){return Object(_.jsx)("div",{className:"messages__item",children:Object(_.jsx)("span",{children:e.message})})}),A=function(e){var t=e.dialogsPage,s=t.dialogsData.map((function(e){return Object(_.jsx)(S,{name:e.name,id:e.id})})),n=t.messagesData.map((function(e){return Object(_.jsx)(B,{message:e.message})})),a=t.newMessageBody;return Object(_.jsxs)("div",{className:"dialogs",children:[Object(_.jsx)("div",{className:"dialogs__items",children:s}),Object(_.jsxs)("div",{className:"messages",children:[Object(_.jsx)("div",{children:n}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("textarea",{value:a,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},placeholder:"Enter your message"})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})},C=Object(k.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(){e({type:l})},sendMessage:function(t){e(function(e){return{type:d,body:e}}(t))}}}))(A);var H=function(e){return Object(_.jsx)(v.a,{children:Object(_.jsxs)("div",{className:"app__wrapper",children:[Object(_.jsx)(N,{}),Object(_.jsx)(P,{}),Object(_.jsx)("div",{className:"app__wrapper_content",children:Object(_.jsxs)(w.c,{children:[Object(_.jsx)(w.a,{exact:!0,path:"/profile",children:Object(_.jsx)(E,{})}),Object(_.jsx)(w.a,{exact:!0,path:"/dialogs",children:Object(_.jsx)(C,{})})]})})]})})},F=function(){p.a.render(Object(_.jsx)(f.a.StrictMode,{children:Object(_.jsxs)(k.a,{store:h,children:["   ",Object(_.jsx)(H,{})]})}),document.getElementById("root"))};F(h.getState()),h.subscribe((function(){h.getState();F()})),n()}},[[43,1,2]]]);
//# sourceMappingURL=main.76105f09.chunk.js.map