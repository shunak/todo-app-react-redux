(this["webpackJsonptodo-app-react-redux"]=this["webpackJsonptodo-app-react-redux"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),o=n.n(a),i=n(5),r=n.n(i),s=(n(20),n(21),n(3)),d=n(13),u=n(7),l=Object(u.b)({name:"task",initialState:{idCount:3,tasks:[{id:3,title:"TASK C",completed:!1},{id:2,title:"TASK B",completed:!0},{id:1,title:"TASK A",completed:!1}]},reducers:{newTask:function(t,e){t.idCount++;var n={id:t.idCount,title:e.payload,completed:!1};t.tasks=[n].concat(Object(d.a)(t.tasks))},completeTask:function(t,e){var n=t.tasks.find((function(t){return t.id===e.payload.id}));n&&(n.completed=!n.completed)},deleteTask:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e.payload.id}))}}}),j=l.actions,p=j.newTask,b=j.completeTask,k=j.deleteTask,h=function(t){return t.task.tasks},f=l.reducer,O=function(t){var e=t.task,n=Object(s.b)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"checkbox",onClick:function(){return n(b(e))},defaultChecked:e.completed}),Object(c.jsxs)("span",{children:[" ",e.title," "]}),Object(c.jsx)("button",{onClick:function(){return n(k(e))},children:"DELETE"})]})},m=function(){var t=Object(s.c)(h);return Object(c.jsx)(c.Fragment,{children:t.map((function(t){return Object(c.jsx)(O,{task:t},t.id)}))})},x=n(14),v=function(){var t=Object(s.b)(),e=Object(a.useState)(""),n=Object(x.a)(e,2),o=n[0],i=n[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(p(o)),i("")},children:[Object(c.jsx)("input",{type:"text",value:o,onChange:function(t){i(t.target.value)},placeholder:"Input New Task"}),Object(c.jsx)("button",{children:"NEW"})]})};var w=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)(v,{}),Object(c.jsx)(m,{})]})})},T=Object(u.a)({reducer:{task:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(s.a,{store:T,children:Object(c.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.3def81d5.chunk.js.map