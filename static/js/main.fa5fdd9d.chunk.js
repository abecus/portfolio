(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),i=n(4),c=n.n(i);n(13),n(14);function o(){return Object(s.jsx)("div",{className:"home",id:"home",children:Object(s.jsx)("h1",{children:"Abdul Salam"})})}var l=n(3),h=n.n(l),d=n(5),m=n(7),j=[{title:"All Pythagorean Triplets Less Than Equal to N in Optimal Time Complexity",img:"https://miro.medium.com/max/700/0*kQfRs44MJgeLqkx5",desc:"Pythagorean Triplets are set of three ordered positive integers (x,y,z) such that x^2 + y^2 = z^2, where, x < y < z <= N",link:"https://levelup.gitconnected.com/all-pythagorean-triplets-less-than-equal-n-in-optimal-time-complexity-babfbe742337"},{title:"Mandelbrot Set with Python",img:"https://miro.medium.com/max/555/1*3NMRrHfC0BMw_BggU8GPvg.png",desc:"A Mandelbrot set marks the set of points in the complex plane such that the corresponding Julia set is connected and not computable. The Mandelbrot set is the set obtained from the recurrence relation, Z_(n) = Z\xb2_(n-1) + c, where, Z_(0) = c. where c is a complex number\u201d \u2014 Wolfram Mathworld.Mandelbrot set  created using python script The colors in a Mandelbrot set represents the iterations at which that complex number diverges to infinity (we can use here some threshold instead of infinity).",link:"https://levelup.gitconnected.com/mandelbrot-set-with-python-983e9fc47f56"},{title:"Search Technique on Graphs: Breadth-First Search",img:"https://miro.medium.com/max/700/1*p4bHowcZgckG1dNjACgPWg.jpeg",desc:"Breadth-first search (BFS) is a common search technique on graphs. BFS is a companion of depth-first search (DFS). While DFS traverses the graph depth-wise, BFS does it breadth-wise. It\u2019s used to find a node in a graph. It may also be used to get the path to that node from a given node or to just traverse all the nodes and edges in a graph.",link:"https://medium.com/better-programming/search-technique-on-graphs-breadth-first-search-dab467f73ff8"},{title:"Search Technique on Graphs: Depth-First Search",img:"https://miro.medium.com/max/1000/0*Sufk8bfmJcaFJz1e",desc:"Depth-First Search (DFS) is a common search technique on graphs. It is used to find a node in a graph and may also be used to get the path to that node from a given node or to just traverse all the nodes and edges in a graph.",link:"https://medium.com/swlh/vanilla-search-techniques-on-graphs-dfs-and-bfs-c5cff5d0937d"},{title:"Graph Theory Algorithms \u201cSimplified\u201d",img:"https://miro.medium.com/max/700/1*3wUddlYo5oG7r_qpuxs55g.png",desc:"Graph theory is a very broad branch of mathematics and it is highly applicable in real-world problems. Originally, graph theory was \u201cinvented\u201d to solve real-world problems and after that, it was hijacked by abstract mathematicians like all other branches of mathematics.",link:"https://medium.com/better-programming/graph-theory-algorithms-simplified-9a6868cc222"}],b=["AI-Chess-Engine","Artificial-Intelligence","DIP","connect-4","Django-React-Todo-WebApp","DS-and-Algorithms","LCTestSuit","Pong-GoDot","React-Django-AI-TicTacToe","Typing-Bolt-Hack"];function u(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/abecus/repos");case 2:return t=e.sent,e.next=5,t.json();case 5:n=(n=e.sent).filter((function(e){return b.includes(e.name)})),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(s.jsx)("div",{className:"projects",id:"projects",children:n.map((function(e,t){var n=e.name,a=e.html_url,r=e.description;return Object(s.jsxs)("article",{className:"single-project",children:[Object(s.jsx)("a",{href:a,className:"link title",children:n}),Object(s.jsx)("p",{children:r})]},t)}))})}var p=n(6),f=n.n(p);function g(){return Object(s.jsxs)("div",{className:"contact",id:"contact",children:[Object(s.jsx)("p",{children:"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email."}),Object(s.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),f.a.sendForm("service_za8xfiy","template_llglw1m",e.target,"user_u9kbKA9qD1pCitF7kXiPE").then((function(e){console.log(e),alert("Massage Sent!")}),(function(e){console.log(e.text)}))},children:Object(s.jsxs)("p",{children:[Object(s.jsx)("label",{className:"label",children:"Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"user_name",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{className:"label",children:"Email"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"user_email",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{className:"label",children:"Message"}),Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{id:"text",rows:"1",name:"message",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"submit-button",type:"submit",value:"Submit"})]})}),Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link footer-link",href:"https://github.com/abecus",children:"GitHub"}),Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link footer-link",href:"https://www.linkedin.com/in/abdulsalamone/",children:"LinkedIn"}),Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link footer-link",href:"https://medium.com/@sleepingFish",children:"Medium"})]})]})}function x(){return Object(s.jsx)("div",{className:"about",id:"about",children:Object(s.jsx)("p",{children:"Having diverse fields of knowledge and skills ranging from Robotics, Artificial Intelligence, Game Development, Advanced Mathematics, Advanced Physics, Taekwondo, Calisthenics, etc. Research-oriented mindset and always open to learning, including Interesting Logical stuff and some times, Phycological and Historical stuff. Feel free to ask any related questions."})})}function O(){return Object(s.jsxs)("div",{className:"blogs",id:"blog",children:[Object(s.jsx)("h3",{className:"blog-title",children:"My Blogs"}),j.map((function(e,t){var n=e.title,a=e.link,r=e.img,i=e.desc;return Object(s.jsxs)("article",{className:"single-blog",children:[Object(s.jsx)("a",{href:a,target:"_",className:"link title",children:n}),Object(s.jsx)("img",{src:r,alt:n}),Object(s.jsx)("p",{children:i})]},t)}))]})}var v=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"link",href:"https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",download:!0,children:"Resume"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"link",href:"#blog",children:"Blog"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"link",href:"#projects",children:"Projects"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"link",href:"#about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"link",href:"#contact",children:"Contact"})})]})})})};var y=function(e){var t=e.text;return Object(s.jsx)("div",{children:Object(s.jsx)("h2",{className:"mid-line",children:Object(s.jsx)("span",{children:t})})})};var k=function(){function e(){var e=Math.min(1,window.innerWidth/1e3+.1),t=Math.min(1.5,window.innerWidth/1e3-.5);document.documentElement.style.setProperty("--font-size","".concat(e,"rem")),document.documentElement.style.setProperty("--tab","".concat(t,"rem"))}return Object(a.useEffect)((function(){return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(o,{}),Object(s.jsx)(v,{}),Object(s.jsx)(y,{text:"About Me"}),Object(s.jsx)(x,{}),Object(s.jsx)(y,{text:"My Projects"}),Object(s.jsx)(u,{}),Object(s.jsx)(y,{text:"My Blogs"}),Object(s.jsx)(O,{}),Object(s.jsx)(y,{text:"Contact Me"}),Object(s.jsx)(g,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),w()}},[[18,1,2]]]);
//# sourceMappingURL=main.fa5fdd9d.chunk.js.map