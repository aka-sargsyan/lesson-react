(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/avatarka.4db376fa.jpg"},function(e,a,t){e.exports={Navbar:"NavbarStyle_Navbar__1oSGK",textDecorationNone:"NavbarStyle_textDecorationNone__axyB9",activeClass:"NavbarStyle_activeClass__3YL-g",visitedClass:"NavbarStyle_visitedClass__27zdb"}},function(e,a,t){e.exports={dialogs:"DialogsStyle_dialogs__38M-u"}},,,,function(e,a,t){e.exports={widthImg:"ProfileStyle_widthImg__2_zMQ",p16:"ProfileStyle_p16__39Rh5"}},function(e,a,t){e.exports={widthImg:"ProfileInformationStyle_widthImg__1A0CT"}},function(e,a,t){e.exports={p16:"PostStyle_p16__3IQIi"}},function(e,a,t){e.exports={textAlignLeft:"MessageStyle_textAlignLeft__1QG4K",textAlignRight:"MessageStyle_textAlignRight__x8RKM"}},,,,function(e,a,t){e.exports={header:"HeaderStyle_header__1Gr8X"}},function(e,a,t){e.exports=t.p+"static/media/logo.80c19cf7.png"},,function(e,a,t){e.exports=t.p+"static/media/profile.01723588.jpg"},function(e,a,t){e.exports={p16:"MyPostsStyle_p16__cLOVn"}},function(e,a,t){e.exports=t.p+"static/media/name1.6d5980cf.png"},function(e,a,t){e.exports=t.p+"static/media/name2.3be9eee2.png"},function(e,a,t){e.exports=t.p+"static/media/name3.28d0feff.png"},function(e,a,t){e.exports=t.p+"static/media/name4.4f701104.png"},function(e,a,t){e.exports=t.p+"static/media/name5.1d78c416.png"},function(e,a,t){e.exports=t.p+"static/media/name6.c1a07ddb.png"},function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(21),s=t.n(i),o=(t(38),t(6)),l=t(1),c=(t(39),t(22)),m=t.n(c),d=t(23),u=t.n(d),p=function(){return r.a.createElement("div",{className:m.a.header},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:u.a,alt:"",width:"70"})))},g=t(10),v=t.n(g),f=[{id:1,to:"profile",name:"Profile"},{id:2,to:"dialogs",name:"Dialogs"},{id:3,to:"news",name:"News"},{id:4,to:"music",name:"Music"},{id:5,to:"settings",name:"Settings"},{id:6,to:"users",name:"Users"}],E=function(){return r.a.createElement("div",{className:v.a.Navbar},r.a.createElement("div",null,f.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(o.b,{to:"/".concat(e.to),activeClassName:v.a.activeClass,className:"".concat(v.a.visitedClass," textDecorationNone")},e.name))}))))},_=t(15),h=t.n(_),k=t(16),x=t.n(k),N=t(25),y=t.n(N),w=function(){return r.a.createElement("div",{className:x.a.profileInformation},r.a.createElement("div",{className:x.a.widthImg},r.a.createElement("img",{src:y.a,alt:""})),r.a.createElement("div",null,r.a.createElement("p",null,"ava+dicription")))},I=t(26),b=t.n(I),S=t(17),C=t.n(S),P=function(e){return r.a.createElement("div",{className:C.a.Post},r.a.createElement("div",{className:C.a.p16},r.a.createElement("img",{src:e.avatarka,alt:"",width:"60",height:"60"}),r.a.createElement("span",null,e.post),r.a.createElement("div",null,r.a.createElement("span",null,"Like"),r.a.createElement("span",null,e.likeCount))))},A=function(e){var a=e.posts.map((function(e){return r.a.createElement(P,{avatarka:e.avatarka,post:e.post,likeCount:e.likeCount})}));return r.a.createElement("div",{className:b.a.myPosts},r.a.createElement("div",null,r.a.createElement("p",{className:"m0"},"My posts"),r.a.createElement("textarea",{name:"",id:"",cols:"30",rows:"1"}),r.a.createElement("div",null,r.a.createElement("button",null,"Add post"))),a)},M=function(e){return r.a.createElement("div",{className:h.a.Profile},r.a.createElement("div",{className:h.a.app_wraper_content},r.a.createElement(w,null),r.a.createElement(A,{posts:e.state.posts})))},D=t(11),L=t.n(D),G=(t(45),function(e){var a="/dialogs/"+e.id,t=e.name;return console.log(e.avatarka),r.a.createElement("div",null,r.a.createElement("img",{src:e.avatarka,alt:"",width:"50"}),r.a.createElement(o.b,{to:a,className:"textDecorationNone"},t))}),R=t(18),B=t.n(R),K=function(e){return r.a.createElement("div",{className:777==e.userId?B.a.textAlignRight:B.a.textAlignLeft},r.a.createElement("span",null,e.message))},O=function(e){var a=e.state.dialogs,t=e.state.messages,n=a.map((function(e){return r.a.createElement(G,{id:e.id,name:e.name,avatarka:e.avatarka})})),i=t.map((function(e){return r.a.createElement(K,{id:e.id,message:e.message,userId:e.userId})}));return r.a.createElement("div",{className:L.a.dialogs},r.a.createElement("div",{className:L.a.dialogItem},n),r.a.createElement("div",{className:L.a.messages},i))};var Q=function(e){var a=function(){return r.a.createElement(M,{state:e.state.profilePage})};return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(p,null),r.a.createElement(E,null),r.a.createElement("div",{className:"app_wraper_content"},r.a.createElement(l.a,{path:"/",exact:!0,render:a}),r.a.createElement(l.a,{path:"/profile",render:a}),r.a.createElement(l.a,{path:"/dialogs",render:function(){return r.a.createElement(O,{state:e.state.dialogPage})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(9),z=t.n(j),H=t(27),J=t.n(H),W=t(28),T=t.n(W),U=t(29),V=t.n(U),X=t(30),Y=t.n(X),$=t(31),q=t.n($),F=t(32),Z=t.n(F),ee={dialogPage:{dialogs:[{id:1,name:"name1",avatarka:J.a},{id:2,name:"name2",avatarka:T.a},{id:3,name:"name3",avatarka:V.a},{id:4,name:"name4",avatarka:Y.a},{id:5,name:"name5",avatarka:q.a},{id:6,name:"name6",avatarka:Z.a}],messages:[{id:1,userId:777,message:"hello"},{id:2,userId:445,message:"how are you"},{id:3,userId:777,message:"it is ok"},{id:3,userId:445,message:"Good buy...."}]},profilePage:{posts:[{id:1,avatarka:z.a,post:"I'am ak and you",likeCount:3},{id:2,avatarka:z.a,post:"How are you",likeCount:2},{id:3,avatarka:z.a,post:"Do you happy",likeCount:5},{id:4,avatarka:z.a,post:"I'm GOOD...",likeCount:6}]}};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,{state:ee})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.29f98f23.chunk.js.map