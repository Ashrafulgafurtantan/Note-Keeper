(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{33:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),o=n.n(c),r=n(18),u=n(26),i=n.n(u);var m=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(i.a,null),"Keeper"))};var s=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},E=n(28),p=n.n(E);var f=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(p.a,null)))},d=n(24),h=n(29),b=n.n(h),v=n(61),g=n(62);var k=function(e){const t=l.a.useState(!1),n=Object(r.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(r.a)(u,2),m=i[0],s=i[1];function E(e){const t=e.target,n=t.name,a=t.value;s(e=>Object(d.a)(Object(d.a)({},e),{},{[n]:a}))}function p(t){0===m.title.length&&0===m.content.length||(e.onAdd(m),s({title:"",content:""})),t.preventDefault()}function f(e){"Enter"===e.key&&p(e)}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},l.a.createElement("input",{name:"title",autoComplete:"off",onKeyDown:f,style:{display:!c&&"none",fontWeight:"bold",fontSize:"25px"},onChange:E,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onKeyDown:f,onChange:E,onClick:()=>{o(!0)},value:m.content,placeholder:"Take a note...",rows:c?"3":"1"}),l.a.createElement(g.a,{in:!!c},l.a.createElement(v.a,{onClick:p},l.a.createElement(b.a,null)))))};var y=function(){const e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];function o(e){c(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(k,{onAdd:function(e){c(t=>[...t,e])}}),n.map((e,t)=>l.a.createElement(f,{key:t,id:t,title:e.title,content:e.content,onDelete:o})),l.a.createElement(s,null))};o.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1779dc4e.chunk.js.map