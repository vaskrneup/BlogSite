(this.webpackJsonpblog_site_react=this.webpackJsonpblog_site_react||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r);a(9),a(10);var c=function(){return l.a.createElement("nav",null,l.a.createElement("h1",{className:"logo colorTheme4"},"Vaskr"),l.a.createElement("ul",{className:"nav__links"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"ABOUT")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"PROJECTS")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"CONTACT"))))},i=a(1);a(11);var m=function(){var e=Object(n.useState)("Site is under construction, Please come back later."),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),m=c[0];return c[1],Object(n.useEffect)((function(){var e;(window.location.pathname.startsWith("/r-")||window.location.pathname.startsWith("r-"))&&(e="https://google.com",document.getElementsByTagName("body")[0].innerHTML="<h1 style='color:#989898;'>Please Wait, You will be redirected in few seconds...</h1>>",window.location.replace(e)),function(){var e=5e3;["No wait, it's going to complete.","No it isn't, Come back later \ud83d\ude02","Thanks for coming, hope to see you soon \ud83d\ude0a"].forEach((function(t){setTimeout((function(){r(t)}),e),e+=5e3}))}()}),[]),l.a.createElement("div",{className:"home"},l.a.createElement("br",null),l.a.createElement("div",{className:"home__header"},l.a.createElement("h1",null,a)),l.a.createElement("hr",null),l.a.createElement("div",{className:"home__header colorTheme4"},l.a.createElement("h1",null,"But You may shorten your link right now.")),l.a.createElement("br",null),l.a.createElement("form",{className:"link_header",id:"linkSubmissionForm",action:"",method:"POST",onSubmit:function(e){e.preventDefault(),document.getElementById("linkSubmissionForm")}},l.a.createElement("input",{type:"text",className:"link_input",width:"100%",placeholder:"Link to shorten",required:!0}),l.a.createElement("input",{type:"text",className:"link_input",width:"100%",required:!0,placeholder:"Shortened Link (After https://vaskr.ml/r-<YOUR LINK>)"}),l.a.createElement("input",{type:"submit",className:"submit_btn link_input",value:"Shorten My Link"}),m?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"error_msg"},"Seems like we have some error (Please Correct the info before submitting again)"),l.a.createElement("div",{style:{marginLeft:"30px"}},l.a.createElement("ul",{className:"error_msg"},l.a.createElement("li",null,l.a.createElement("small",null,"First Error")),l.a.createElement("li",null,l.a.createElement("small",null,"Second Error")),l.a.createElement("li",null,l.a.createElement("small",null,"Third Error")))),l.a.createElement("div",{className:"borderBottom"})):"",m?"haha":l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{onClick:function(){navigator.clipboard.writeText("https://vaskr.ml/r-haha").then((function(e){return alert("Link copied to clipboard.")}))}},'Your New Link is "',l.a.createElement("span",{id:"newLink"},"https://vaskr.ml/r-haha")),l.a.createElement("div",{className:"borderBottom"}))))};a(12),a(13);var s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement(c,null)),l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.6e9d8326.chunk.js.map