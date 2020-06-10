(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{39:function(e,a,t){e.exports=t(59)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),m=(t(44),t(45),t(9)),s=t(65),o=t(8),i=(t(46),t(60),function(){return l.a.createElement("div",{id:"header-area"},l.a.createElement(s.a,{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement(m.b,{to:"/",className:"navbar-brand"},l.a.createElement("img",{src:"/logo.png",height:"60",width:"250",alt:"Vijay Mishra"})),l.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(s.a,{className:"collapse navbar-collapse",id:"navbarCollapse"},l.a.createElement(s.a,{className:"navbar-nav"},l.a.createElement(m.b,{to:"/",className:"nav-item nav-link active"},"Home"),l.a.createElement(m.b,{to:"/resume",className:"nav-item nav-link"},"Resume"),l.a.createElement(m.b,{to:"/projects",className:"nav-item nav-link"},"Projects"),l.a.createElement(m.b,{to:"/skills",className:"nav-item nav-link"},"Skills"),l.a.createElement(m.b,{to:"/connect",className:"nav-item nav-link"},"Connect")),l.a.createElement(s.a,{className:"navbar-nav ml-auto social-icon"},l.a.createElement(s.a.Link,{href:"https://stackoverflow.com/users/6382704/vijay-mishra",target:"_blank",className:"nav-link"},l.a.createElement(o.f,null)),l.a.createElement(s.a.Link,{href:"https://github.com/vkm193",target:"_blank",className:"nav-link"},l.a.createElement(o.d,null)),l.a.createElement(s.a.Link,{href:"https://www.linkedin.com/in/vijay-mishra-27934062/",target:"_blank",className:"nav-link"},l.a.createElement(o.e,null)),l.a.createElement(s.a.Link,{href:"https://www.facebook.com/vkm139/",target:"_blank",className:"nav-link"},l.a.createElement(o.b,null)),l.a.createElement(s.a.Link,{href:"https://twitter.com/vkm193",target:"_blank",className:"nav-link"},l.a.createElement(o.g,null))))))}),u=t(64),E=(t(55),function(){return l.a.createElement("div",{id:"footer-area"},l.a.createElement(u.a,{expand:"lg",sticky:"bottom",className:"navbar-light"},l.a.createElement(s.a,{className:"mr-auto"},"\xa9 ",(new Date).getFullYear()," Vijay Mishra"),l.a.createElement(s.a,{className:"nav navbar-nav ml-auto social-icon"},l.a.createElement(s.a.Link,{href:"https://stackoverflow.com/users/6382704/vijay-mishra",target:"_blank",className:"nav-link"},l.a.createElement(o.f,null)),l.a.createElement(s.a.Link,{href:"https://github.com/vkm193",target:"_blank",className:"nav-link"},l.a.createElement(o.d,null)),l.a.createElement(s.a.Link,{href:"https://www.linkedin.com/in/vijay-mishra-27934062/",target:"_blank",className:"nav-link"},l.a.createElement(o.e,null)),l.a.createElement(s.a.Link,{href:"https://www.facebook.com/vkm139/",target:"_blank",className:"nav-link"},l.a.createElement(o.b,null)),l.a.createElement(s.a.Link,{href:"https://twitter.com/vkm193",target:"_blank",className:"nav-link"},l.a.createElement(o.g,null)))))}),d=(t(56),t(62)),p=t(63),v=(t(57),function(){var e=(new Date).getFullYear()-2014;return l.a.createElement("div",{id:"home"},l.a.createElement("section",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Vijay Mishra"),l.a.createElement("h6",null,"Developer/Travel enthusiast")),l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement("div",{className:"profile-pic"})),l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"greetings"},"Hello,"),l.a.createElement("h5",null,"let me introduce myself: ")),l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(m.b,{to:"/resume",className:"nav-item nav-link"},l.a.createElement("div",{className:"my-resume sm-circle red-circle"},"<My Resume />")),l.a.createElement(m.b,{to:"/project",className:"nav-item nav-link"},l.a.createElement("div",{className:"my-work sm-circle cyan-circle"},"<My Work />")),l.a.createElement(m.b,{to:"/resume#skills",className:"nav-item nav-link"},l.a.createElement("div",{className:"my-skills sm-circle yellow-circle"},"<My Skills />"))),l.a.createElement("p",{className:"brief-intro"},"I am a full stack software developer, having ",e,"+ years of solid experience in enterprise web development. During this tenure I have used many tools and got exposed to different technologies. I am capable of working on backend as well as front end development, nevertheless I feel more enthusiastic while working on frontend tech. This site is developed solely by me and used React."))))))}),h=t(18),f=t(19),g=t(38),k=t(37),w=(t(58),function(e){Object(g.a)(t,e);var a=Object(k.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).state={repos:[]},n}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=[],t=["vijaymishra"];fetch("https://api.github.com/users/vkm193/repos").then((function(n){n.json().then((function(n){n&&(n.forEach((function(e){t.includes(e.name)||a.push({id:e.id,name:e.name,url:e.html_url})})),e.setState({repos:a}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"resume"},l.a.createElement("section",null,l.a.createElement("div",{className:"section-title page-title"},l.a.createElement("span",null,"Resume"))),l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"col-md-9"},l.a.createElement("article",{id:"purpose-statement"},l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"col-md-4"},l.a.createElement("div",{className:"sm-circle red-circle"},"Purpose Statement")),l.a.createElement(p.a,{className:"col-md-8"},l.a.createElement("p",{className:"purpose-statement-text"},"Having ",(new Date).getFullYear()-2014,"+ years of experience in software development, maintenance and implementation with object-oriented design. Have worked on technologies like .NET framework with good knowledge of MVC, ASP.Net, C#.Net, jQuery, Angular, SQL Server for commercial application development. Eager to learn and implement new technologies and trends which are introduced for better software development process.")))),l.a.createElement("article",{id:"professional-snapshot"},l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"col-md-4"},l.a.createElement("div",{className:"sm-circle red-circle"},"Professional Snapshot")),l.a.createElement(p.a,{className:"col-md-8"},l.a.createElement("article",null,l.a.createElement("section",null,l.a.createElement("div",{className:"section-title"},l.a.createElement("span",null,"Technical Consultant")),l.a.createElement("a",{href:"https://www.healthlevel.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h6",null,"Health Level Inc.")),l.a.createElement("span",{className:"tenure-text"},"(Jan 2020 to Present)"),l.a.createElement("div",{className:"role-details"},l.a.createElement("ul",{className:"dashed"},l.a.createElement("li",null,l.a.createElement("p",null,"Development, bug fixing, peer code review, deployment.")),l.a.createElement("li",null,l.a.createElement("p",null,"Participate in recruitment program.")))))),l.a.createElement("article",null,l.a.createElement("section",null,l.a.createElement("div",{className:"section-title"},l.a.createElement("span",null,"Associate Lead Technology")),l.a.createElement("a",{href:"https://www.nagarro.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h6",null,"Nagarro Software")),l.a.createElement("span",{className:"tenure-text"},"(Apr 2018 to Jan 2020)"),l.a.createElement("div",{className:"role-details"},l.a.createElement("ul",{className:"dashed"},l.a.createElement("li",null,l.a.createElement("p",null,"Writing frontend code, bug fixing, peer code review, deployment, post deployment support, documentation.")),l.a.createElement("li",null,l.a.createElement("p",null,"Co-ordination with client based in UK.")))))),l.a.createElement("article",null,l.a.createElement("section",null,l.a.createElement("div",{className:"section-title"},l.a.createElement("span",null,"Software Development Engineer")),l.a.createElement("a",{href:"https://www.emtecinc.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h6",null,"Emtec Technologies Pvt. Ltd.")),l.a.createElement("span",{className:"tenure-text"},"(Dec 2014 to Mar 2018)"),l.a.createElement("div",{className:"role-details"},l.a.createElement("ul",{className:"dashed"},l.a.createElement("li",null,l.a.createElement("p",null,"Wrote code for backend as well as frontend, wrote unit test, bug fixing, peer code review, post deployment support, documentation.")),l.a.createElement("li",null,l.a.createElement("p",null,"Co-ordination with US based Client\xa0",l.a.createElement("a",{href:"https://www.coyote.com",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement("strong",null,"Coyote"),". Taking requirement and analysis to suggest better approach.")),l.a.createElement("li",null,l.a.createElement("p",null,"Working in Agile model gives me opportunity to participate in sprint planning and scrum meeting and standup")))))),l.a.createElement("article",null,l.a.createElement("section",null,l.a.createElement("div",{className:"section-title"},l.a.createElement("span",null,"Software Developer")),l.a.createElement("a",{href:"http://fortytwo.co.in/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h6",null,"Fortytwo Software")),l.a.createElement("span",{className:"tenure-text"},"(Nov 2013 to Nov 2014)"),l.a.createElement("div",{className:"role-details"},l.a.createElement("ul",{className:"dashed"},l.a.createElement("li",null,l.a.createElement("p",null,"Wrote code, bug fixing and participated in deployment process.")))))),l.a.createElement("section",null,l.a.createElement("p",null,"Developed Blog for a travel blogger \xa0",l.a.createElement("a",{href:"http://www.roohyatri.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("strong",null,"Rooh Yatri")),"."))))),l.a.createElement("article",{id:"education"},l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"col-md-4"},l.a.createElement("div",{className:"sm-circle red-circle"},"Education")),l.a.createElement(p.a,{className:"col-md-8"},l.a.createElement("ul",{className:"dashed"},l.a.createElement("li",null,l.a.createElement("p",null,"Master in Computer Application from Pune University")),l.a.createElement("li",null,l.a.createElement("p",null,"Bachelor in Computer Application from IGNOU"))))))),l.a.createElement(p.a,{className:"col-md-3"},l.a.createElement("section",{id:"side-panel"},l.a.createElement("div",{className:"file-details"},l.a.createElement("div",{className:"section-title"},l.a.createElement("span",null,l.a.createElement(o.c,null)," Download Resume")),l.a.createElement("div",{className:"download-file  side-item-inside"},l.a.createElement("a",{href:"https://doc-0c-10-docs.googleusercontent.com/docs/securesc/q4l6619og4khdqt347pinf2jsvn4ts6b/7ri0tf07cgtnojgm5epg7d7k030sclcg/1591821375000/12075885254220225052/12075885254220225052/1EIl9GdkOpYDCE-nZpSuayn6zvxza_xGJ?e=download&authuser=1&nonce=lfbruqlre44ce&user=12075885254220225052&hash=u400baugjttvjq9u39c4tr0l8ueij5ek",download:"vijay-mishra",rel:"noopener noreferrer"},l.a.createElement(o.a,null)))),l.a.createElement("div",{className:"git-details side-item"},this.state.repos.length>0?l.a.createElement("div",{className:"section-title"},l.a.createElement("span",null,l.a.createElement(o.d,null)," GIT Repos")):"",l.a.createElement("ul",null,this.state.repos.length>0?this.state.repos.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.url,rel:"noopener noreferrer"},e.name))})):""))))))}}]),t}(n.Component)),N=t(5),b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{path:"/",exact:!0,component:v}),l.a.createElement(N.a,{path:"/resume",component:w}))},y=function(){return l.a.createElement("div",{id:"main-area"},l.a.createElement(b,null))};var j=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{id:"app"},l.a.createElement(i,null),l.a.createElement("div",{className:"container fluid app"},l.a.createElement(y,null)),l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.afc6f43e.chunk.js.map