(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{69:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(1),s=n.n(a),r=n(14),i=n.n(r),o=(n(69),n(18)),l=["Developer","Programmer","Creator","Problem Solver."];function j(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),j=i[0],d=i[1],b=Object(a.useState)(!0),u=Object(o.a)(b,2),m=u[0],h=u[1],f=Object(a.useState)(!1),O=Object(o.a)(f,2),p=O[0],x=O[1];return Object(a.useEffect)((function(){if(n!==l.length){if(j!==l[n].length+1||n===l.length-1||p){if(0===j&&p)return x(!1),void s((function(e){return e+1}));var e=setTimeout((function(){d((function(e){return e+(p?-1:1)}))}),Math.max(p?75:j===l[n].length?1e3:150,parseInt(350*Math.random())));return function(){return clearTimeout(e)}}x(!0)}}),[j,n,p]),Object(a.useEffect)((function(){var e=setTimeout((function(){h((function(e){return!e}))}),500);return function(){return clearTimeout(e)}}),[m]),Object(c.jsx)("div",{className:"home",id:"home",children:Object(c.jsxs)("div",{className:"home__content",children:[Object(c.jsxs)("div",{className:"top-line",children:[Object(c.jsxs)("h1",{className:"name",children:["Abdul ",Object(c.jsx)("span",{className:"name__last",children:"Salam"})]}),Object(c.jsxs)("h1",{className:"top-line__typed",children:["The ","".concat(l[n].substring(0,j)).concat(m?"|":" ")]})]}),Object(c.jsx)("h2",{children:"Welcome to my Website"})]})})}var d=n(31),b=n.n(d),u=n(51),m=n(39),h=n(34),f=n(58),O=n(47);O.a.initializeApp({apiKey:"AIzaSyAeTYgbjow7714i7DOKFIDnixm2BqOojNE",authDomain:"portfolio-one4.firebaseapp.com",databaseURL:"https://portfolio-one4.firebaseio.com",projectId:"portfolio-one4",storageBucket:"portfolio-one4.appspot.com",messagingSenderId:"582711364657",appId:"1:582711364657:web:842759b563b46147a7d910",measurementId:"G-S0Q6MS7M5F"});var p=O.a,x=[{ref:"#home",name:"Home"},{ref:"#about",name:"About"},{ref:"#projects",name:"projects"},{ref:"#blog",name:"blog"},{ref:"#contact",name:"contact"},{ref:"https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing",name:"resume"}],_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(a.useState)([]),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(!0),l=Object(o.a)(i,2),j=l[0],d=l[1],u=function(){var n=Object(m.a)(b.a.mark((function n(){var c,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=p.firestore().collection(e),0!==t.length&&(a=(c=a).orderBy.apply(c,Object(f.a)(t))),a.get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),r(t),d(!1)}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),{data:s,loading:j}};function g(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],d=_("projects"),f=d.data,O=d.loading,p=function(){var e=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/abecus/repos");case 2:return t=e.sent,e.next=5,t.json();case 5:n=(n=e.sent).filter((function(e){var t,n=Object(u.a)(f);try{for(n.s();!(t=n.n()).done;){if(t.value.name===e.name)return!0}}catch(c){n.e(c)}finally{n.f()}return!1})),s(n),j(O);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[O]),Object(c.jsxs)("div",{className:"projects",id:"projects",children:[Object(c.jsx)("div",{className:"projects__bio-image",children:Object(c.jsx)("h1",{className:"text-secondary",children:"My Projects"})}),Object(c.jsx)("div",{className:"projects__items",children:l?"Loading...":n.map((function(e,t){var n=e.id,a=e.name,s=e.html_url,r=e.description;return Object(c.jsxs)("div",{className:"projects__items__item",children:[Object(c.jsx)("h2",{className:"title",children:a.replaceAll("-"," ")}),Object(c.jsx)("p",{className:"description",children:r}),Object(c.jsx)("div",{className:"projects__btns",children:Object(c.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"projects__btn",children:Object(c.jsx)(h.a,{className:"projects__btn__git",size:30})})})]},n)}))})]})}var v=n(52),N=n(53),y=n.n(N),k=n(54),w=n(113),I=n(114);function S(){var e=Object(v.a)(["\n  label.Mui-focused {\n    color: darkgreen;\n  }\n  .MuiOutlinedInput-root {\n    fieldset {\n      border-color: black;\n    }\n    &:hover fieldset {\n      border-color: green;\n    }\n    &.Mui-focused fieldset {\n      border-color: green;\n    }\n  }\n"]);return S=function(){return e},e}function E(e){e.preventDefault(),console.log(e.target),y.a.sendForm("service_za8xfiy","template_llglw1m",e.target,"user_u9kbKA9qD1pCitF7kXiPE").then((function(e){console.log(e),alert("Massage Sent!")}),(function(e){console.log(e.text)}))}var M=Object(k.a)(w.a)(S());function A(){return Object(c.jsxs)("div",{className:"contact",children:[Object(c.jsx)("h2",{className:"secondary-text",children:"Contact Me..."}),Object(c.jsxs)("div",{className:"contact__container",id:"contact",children:[Object(c.jsx)("div",{className:"contact__container__left-side",children:Object(c.jsxs)("form",{className:"form",onSubmit:E,children:[Object(c.jsx)(M,{InputLabelProps:{required:!1},required:!0,className:"text_input",label:"Name",name:"user_name",variant:"outlined"}),Object(c.jsx)("br",{}),Object(c.jsx)(M,{InputLabelProps:{required:!1},required:!0,className:"text_input",label:"Email Id",rows:2,name:"user_email",type:"email",variant:"outlined"}),Object(c.jsx)("br",{}),Object(c.jsx)(M,{InputLabelProps:{required:!1},required:!0,className:"text_input",label:"Message",name:"message",multiline:!0,variant:"outlined"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"button-container",children:Object(c.jsx)(I.a,{className:"submit-button",variant:"contained",type:"submit",children:"Send"})})]})}),Object(c.jsx)("div",{className:"contact__container__right-side",children:Object(c.jsx)("p",{children:"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email."})})]})]})}function L(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"social-icons",children:[Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link footer-link",href:"https://github.com/abecus",children:Object(c.jsx)(h.a,{size:30})}),Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link footer-link",href:"https://www.linkedin.com/in/abdulsalamone/",children:Object(c.jsx)(h.b,{size:30})}),Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link footer-link",href:"https://medium.com/@sleepingFish",children:Object(c.jsx)(h.c,{size:30})})]}),Object(c.jsxs)("footer",{children:["\xa9 Copyright ",(new Date).getFullYear()]})]})}function P(){var e=_("jobs",["date","asc"]),t=e.data,n=e.loading;return Object(c.jsxs)("section",{className:"about",id:"about",children:[Object(c.jsx)("div",{className:"about__boi-image",children:Object(c.jsxs)("div",{className:"about__bio",children:[Object(c.jsx)("h1",{className:"text-secondary",children:"WHOAMI"}),Object(c.jsx)("p",{children:"I'm Abdul Salam."}),Object(c.jsx)("p",{children:"I graduated from Delhi Technological University, India with a degree in Engineering Physics with major in Electronics and minor in Robotics."}),Object(c.jsx)("p",{children:"I'm always in for learning new stuff. I enjoy Solving complex problems and have sound background knowledge of different fields such as Robotics, Mathematics, and Physics."}),Object(c.jsx)("p",{children:"I have maintained and developed multiple projects from scratch, carrying the development of its' back-end and front-end codebase."}),Object(c.jsx)("p",{children:"If you are trying to solve something complex, let's work together to solve that. Also, don\u2019t hesitate if you want to ask me anything or if you just want to contact me."})]})}),Object(c.jsx)("div",{className:"jobs",children:n?"Loading...":t.map((function(e,t){return Object(c.jsxs)("div",{className:"jobs__job",children:[Object(c.jsx)("h2",{className:"text-secondary",children:e.title}),Object(c.jsx)("h3",{children:e.date}),Object(c.jsx)("h4",{children:e.company}),Object(c.jsx)("p",{children:e.desc})]},t)}))})]})}function q(){var e=_("blogs",["id","asc"]),t=e.data,n=e.loading;return Object(c.jsxs)("div",{className:"blogs",id:"blog",children:[Object(c.jsx)("div",{className:"blogs__bio-image",children:Object(c.jsx)("h1",{className:"text-secondary",children:"My Blogs"})}),Object(c.jsx)("div",{className:"blogs__items",children:n?"Loading...":t.map((function(e,t){var n=e.title,a=e.link,s=e.img,r=e.desc;return Object(c.jsxs)("article",{className:"blogs__items__item",children:[Object(c.jsxs)("div",{className:"text-container",children:[Object(c.jsx)("h2",{className:"blogs__items__item__title",children:n}),Object(c.jsxs)("p",{className:"blogs__items__item__description",children:[r.substring(0,270),"...",Object(c.jsx)("a",{href:a,target:"_",className:"blogs__items__item__link text-secondary",children:"read more"})]})]}),Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)("img",{className:"blogs__items__item__img",src:s,alt:n})})]},t)}))})]})}var D=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],d=function(){var e=window.pageYOffset;j(e>50)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",d,{passive:!0}),function(){window.removeEventListener("scroll",d)}}),[]),Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"menu-btn",onClick:function(){return s((function(e){return!e}))},children:Object(c.jsx)("span",{className:"menu-btn__burger".concat(n?" open":"")})}),Object(c.jsx)("nav",{className:"nav".concat(n?" open":"").concat(l?" scrolled":""),children:Object(c.jsx)("ul",{className:"menu-nav".concat(n?" open":""),children:x.map((function(e,t){var a=e.ref,r=e.name;return Object(c.jsx)("li",{className:"menu-nav__item".concat(n?" open":""),onClick:function(){return s((function(e){return!e}))},children:"resume"===r?Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"menu-nav__link",href:a,children:r}):Object(c.jsx)("a",{className:"menu-nav__link",href:a,onClick:function(){return document.getElementById("".concat(a.substring(1,a.length))).scrollIntoView({behavior:"smooth"})},children:r})},t)}))})})]})};var F=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(D,{}),Object(c.jsx)(j,{}),Object(c.jsx)(P,{}),Object(c.jsx)(g,{}),Object(c.jsx)(q,{}),Object(c.jsx)(A,{}),Object(c.jsx)(L,{})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.4c235096.chunk.js.map