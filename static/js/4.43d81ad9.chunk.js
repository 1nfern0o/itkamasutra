(this.webpackJsonpitkamasutra=this.webpackJsonpitkamasutra||[]).push([[4],{290:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n(5),i=n(34),a=n(35),c=n(38),r=n(37),o=n(0),u=n(11),j=n(16),d=n(1),b=function(e){return{isAuth:e.auth.isAuth}},l=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(r.a)(o);function o(){return Object(i.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(s.a)({},this.props)):Object(d.jsx)(u.a,{to:"/login"})}}]),o}(o.Component);return Object(j.b)(b)(t)}},291:function(e,t,n){},293:function(e,t,n){},294:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);n(291);var s=n(124),i=(n(0),n(293),n(20)),a=n(1),c=function(e){return Object(a.jsx)("div",{className:"dialogs__item",children:Object(a.jsxs)(i.b,{to:"dialogs/".concat(e.id),children:[e.name," "]})})},r=(n(294),function(e){return Object(a.jsx)("div",{className:"messages__item",children:Object(a.jsx)("span",{children:e.message})})}),o=n(11),u=n(86),j=n(125),d=n(33),b=n(82),l=Object(b.a)(50),m=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{component:d.b,validate:[b.b,l],name:"newPostText",placeholder:"Enter your message"})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Send"})})]})})),O=function(e){var t=e.dialogsPage,n=t.dialogsData.map((function(e){return Object(a.jsx)(c,{name:e.name,id:e.id},e.id)})),s=t.messagesData.map((function(e){return Object(a.jsx)(r,{message:e.message},e.id)}));return e.isAuth?Object(a.jsxs)("div",{className:"dialogs",children:[Object(a.jsx)("div",{className:"dialogs__items",children:n}),Object(a.jsxs)("div",{className:"messages",children:[Object(a.jsx)("div",{children:s}),Object(a.jsx)(m,{onSubmit:function(t){e.sendMessage(t.newPostText)}})]})]}):Object(a.jsx)(o.a,{to:"/login"})},h=n(16),f=n(290),g=n(9);t.default=Object(g.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(Object(s.b)(t))}}})),f.a)(O)}}]);
//# sourceMappingURL=4.43d81ad9.chunk.js.map