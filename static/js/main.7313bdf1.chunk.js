(this.webpackJsonpsignalr_client=this.webpackJsonpsignalr_client||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(9),c=n.n(s),a=n(16),r=n.n(a),i=(n(21),n(2)),u=n.n(i),o=n(6),l=n(14),j=n(8),b=n(32),m=(n(23),n(5)),h=function(e){return Object(m.jsxs)("div",{className:"message",children:[Object(m.jsx)("p",{className:"userName",children:Object(m.jsx)("strong",{children:e.user})}),Object(m.jsx)("p",{className:"userMessage",children:e.message}),Object(m.jsx)("hr",{})]})},d=function(e){var t=e.chat.map((function(e){return Object(m.jsx)(h,{user:e.user,message:e.message},Date.now()*Math.random())}));return Object(m.jsx)("div",{children:t})},O=(n(25),function(e){var t=Object(s.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),u=i[0],o=i[1];return Object(m.jsx)("div",{className:"input",children:Object(m.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),c&&""!==c&&(u&&""!==u))return e.sendMessage(c,u);alert("Informe o usu\xe1rio e a mensagem")},children:[Object(m.jsx)("label",{className:"lblUsuario",htmlFor:"user",children:"Usu\xe1rio:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{placeholder:"Digite seu nome",className:"inputUsuario",id:"user",name:"user",value:c,onChange:function(e){a(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"lblMensagem",htmlFor:"message",children:"Mensagem:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{placeholder:"Digite sua mensagem",className:"inputMessage",type:"text",id:"message",name:"message",value:u,onChange:function(e){o(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btnInput",type:"submit",children:"Enviar"})]})})}),g=(n(26),function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),r=Object(j.a)(a,2),i=r[0],h=r[1],g=Object(s.useRef)(null);g.current=i,Object(s.useEffect)((function(){var e=(new b.a).withUrl("https://chatservidor20211213145151.azurewebsites.net/chat").withAutomaticReconnect().build();c(e)}),[]),Object(s.useEffect)((function(){n&&n.start().then((function(){console.log("Conectado! "),n.on("ReceiveMessage",(function(e){var t=Object(l.a)(g.current);t.push(e),h(t)}))})).catch((function(e){console.log("Falha na conex\xe3o: "+e)}))}),[n]);var f=function(){var e=Object(o.a)(u.a.mark((function e(t,s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={user:t,message:s},!n.connection._connectionStarted){e.next=13;break}return e.prev=2,console.log("Enviando mensagem..."),e.next=6,n.send("SendMessage",c);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:e.next=14;break;case 13:alert("Nenhuma conex\xe3o estabelecida ainda!");case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"messageContainer",children:[Object(m.jsx)(O,{sendMessage:f}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(d,{chat:i})]})});n(29);var f=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(g,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.7313bdf1.chunk.js.map