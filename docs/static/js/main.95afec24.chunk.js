(window["webpackJsonpreact-bootstrap-validation-form"]=window["webpackJsonpreact-bootstrap-validation-form"]||[]).push([[0],{15:function(e,a,t){e.exports=t(39)},20:function(e,a,t){},21:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),o=t.n(r),c=(t(20),t(21),t(9)),i=t(1),d=t.n(i),m=t(14),p=t.n(m);t(22);function u(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),i=Object(c.a)(o,2),m=i[0],u=i[1];return l.a.createElement(d.a,{noValidate:!0,validated:t,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),r(!0)}},l.a.createElement(d.a.Label,null,"First name"),l.a.createElement(d.a.Control,{required:!0,type:"text",placeholder:"First name",pattern:"^[a-zA-Z .]{2,40}$",name:"firstName",value:m,onChange:function(e){var a=e.target,t=a.value;a.name;u(t);var n=btoa(t);console.log(n)}}),l.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please enter a valid name"),l.a.createElement(d.a.Label,null,"Last name"),l.a.createElement(d.a.Control,{required:!0,type:"text",placeholder:"Last name"}),l.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please enter a valid surname"),l.a.createElement(d.a.Label,null,"Email"),l.a.createElement(d.a.Control,{type:"email",placeholder:"Username",pattern:"^[^@]+@[^@]+.[^@]$",required:!0}),l.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please enter an email."),l.a.createElement(d.a.Label,null,"Booking Code"),l.a.createElement(d.a.Control,{type:"text",placeholder:"booking code",pattern:"^[a-zA-z0-9]{6}",required:!0}),l.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please provide a valid booking code."),l.a.createElement(d.a.Label,null,"Telephone Number"),l.a.createElement(d.a.Control,{type:"tel",placeholder:"phone",pattern:"(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?)) *[)]?[- .]?[(]?[0-9]{1,3}[)]?([- .]?[0-9]{3})([- .]?[0-9]{3,4})",required:!0}),l.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please provide a valid state."),l.a.createElement(d.a.Label,null,"Zip"),l.a.createElement(d.a.Control,{type:"text",placeholder:"Zip",required:!0}),l.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please provide a valid zip."),l.a.createElement(d.a.Check,{type:"switch",id:"custom-switch",label:"Check this switch"}),l.a.createElement(p.a,{type:"submit"},"Submit form"))}var s=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null))};o.a.render(l.a.createElement(s,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.95afec24.chunk.js.map