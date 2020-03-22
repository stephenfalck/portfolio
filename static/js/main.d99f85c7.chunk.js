(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{104:function(e,t,a){e.exports=a(116)},109:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),c=(a(109),a(38)),l=a(32),s=a(93),m=a(177),p=a(92),u=a.n(p),d=a(91),g=a.n(d),h=a(15),f=a(8),b=a(156),E=a(14),x=a(159),w=a(160),v=a(161),y=Object(b.a)((function(e){return{root:{flexGrow:1},appBar:{boxShadow:"none",maxWidth:"100vw",left:0},appBarMobile:Object(f.a)({},e.breakpoints.down("xs"),{backgroundColor:"rgb(25,25,25)"}),appBarScrolled:{boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",transition:"box-shadow .5s ease-in-out;",maxWidth:"100vw",left:0},toolbar:{display:"flex",justifyContent:"flex-end",paddingTop:"8px",paddingBottom:"8px",transition:"background-color .5s ease-in-out, padding .5s ease-in-out;"},list:{display:"flex",listStyleType:"none",width:"30%",justifyContent:"space-around"},listMobile:{display:"flex",listStyleType:"none",width:"100%",justifyContent:"space-around",padding:0},links:{color:"white",textDecoration:"none","&:hover":{fontWeight:"bold"}},activeLink:{fontWeight:"bold",color:e.palette.primary.main},scrolled:{backgroundColor:"rgb(25,25,25)",paddingTop:"5px",paddingBottom:"5px"}}}));var k=function(){var e=y(),t=Object(E.a)(),a=Object(x.a)(t.breakpoints.up("sm")),r=i.a.useState(!0),o=Object(h.a)(r,2),l=o[0],s=o[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<64;e!==l&&s(e)}))})),i.a.createElement("div",{className:e.root},i.a.createElement(w.a,{className:l?e.appBar:e.appBarScrolled,classes:{root:e.appBarMobile},position:a?"fixed":"absolute",color:a?"transparent":"default"},i.a.createElement(v.a,{className:e.toolbar+" "+(l?"not-scrolled":e.scrolled)},i.a.createElement("ul",{className:a?e.list:e.listMobile},i.a.createElement("li",null,i.a.createElement(c.b,{exact:!0,to:"/portfolio",activeClassName:e.activeLink,className:e.links},"Home")),i.a.createElement("li",null,i.a.createElement(c.b,{exact:!0,to:"/projects",activeClassName:e.activeLink,className:e.links},"Portfolio")),i.a.createElement("li",null,i.a.createElement(c.b,{exact:!0,to:"/contact",activeClassName:e.activeLink,className:e.links},"Contact"))))))},j=a(163),O=a(162),N=a(73),S=a.n(N),C=a(74),I=a.n(C),A=a(94),B=Object(b.a)({container:{height:"100vh",backgroundImage:"url(".concat(S.a,")"),backgroundSize:"cover",backgroundPosition:"center"},overlay:{background:"rgba(33,33,33, 0.7)",height:"inherit",width:"inherit"},header:{marginTop:"15%"},headerMobile:{marginTop:"20%",padding:"10px",textAlign:"center"},name:{fontSize:"50px",color:"#f06292"},learnMore:{fontSize:60,"&:hover":{transform:"translateY(5px)",color:"#f06292",cursor:"pointer"}}});var M=function(e){var t=B(),a=Object(E.a)(),n=Object(x.a)(a.breakpoints.up("sm"));return i.a.createElement(O.a,{container:!0,direction:"row",wrap:"wrap",justify:"center",alignItems:"center",className:t.container},i.a.createElement(O.a,{container:!0,className:t.overlay,wrap:"wrap",direction:"row",justify:"center",alignItems:"center"},i.a.createElement(O.a,{item:!0,container:!0,justify:"center",className:n?t.header:t.headerMobile},i.a.createElement(j.a,{in:!0,timeout:3e3},i.a.createElement(A.a,{variant:"h4"},i.a.createElement("span",{className:t.name},"Stephen Falck"),i.a.createElement("br",null),"Full-stack web developer"))),i.a.createElement(O.a,{item:!0,container:!0,justify:"center",direction:"column",alignItems:"center"},i.a.createElement(j.a,{in:!0,timeout:6e3},i.a.createElement(A.a,{variant:"h6"},"Learn more")),i.a.createElement(j.a,{in:!0,timeout:6e3},i.a.createElement(I.a,{onClick:e.scroll,className:t.learnMore,fontSize:"large"})))))},L=a(75),H=a.n(L),_=a(76),q=a.n(_),F=a(164),T=a(165),W=Object(b.a)((function(e){var t;return{section:Object(f.a)({minHeight:"100vh",padding:"0px 50px 0px 50px"},e.breakpoints.down("xs"),{padding:"0px 15px 0px 15px"}),icons:(t={fontSize:"5rem"},Object(f.a)(t,e.breakpoints.down("xs"),{marginBottom:"15px"}),Object(f.a)(t,"color","#f06292"),t),icon1:Object(f.a)({},e.breakpoints.down("xs"),{order:-1})}}));var D=function(e){var t=W(),a=e.scrolled,r=e.resetScroll,o=i.a.useState({title1:!1,title2:!1,paragraph1:!1,paragraph2:!1,icon1:!1,icon2:!1}),c=Object(h.a)(o,2),l=c[0],s=c[1],m=function(){for(var e=document.querySelectorAll(".hiddenAboutAnimations"),t={},a=0;a<e.length;a++){var n=e[a].id;e[a].getBoundingClientRect().top-window.innerHeight<=0&&(t[n]=!0)}s(t)};return Object(n.useEffect)((function(){var e;return e="about",!0===a&&document.getElementById(e).scrollIntoView({behavior:"smooth"}),r(),window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[a,r]),i.a.createElement(O.a,{container:!0,alignItems:"center",id:"about",className:t.section},i.a.createElement(O.a,{container:!0,item:!0,xs:12},i.a.createElement(O.a,{item:!0,sm:6,xs:12},i.a.createElement(F.a,{in:l.title1,unmountOnExit:!1,timeout:2e3},i.a.createElement(A.a,{variant:"h5",className:"hiddenAboutAnimations",id:"title1"}," A little more about me")),i.a.createElement(F.a,{in:l.paragraph1,unmountOnExit:!1,timeout:2e3},i.a.createElement("p",{className:"hiddenAboutAnimations",id:"paragraph1"},"I'm a law graduate turned web developer based in London. My focus is on writing clean, elegant and efficient code, to help turn your ideas into a finished product."))),i.a.createElement(O.a,{item:!0,container:!0,sm:6,xs:12,justify:"center",alignItems:"center",className:t.icon1},i.a.createElement(T.a,{in:l.icon1},i.a.createElement(H.a,{className:t.icons+" hiddenAboutAnimations",id:"icon1"})))),i.a.createElement(O.a,{container:!0,item:!0,xs:12},i.a.createElement(O.a,{item:!0,container:!0,sm:6,xs:12,justify:"center",alignItems:"center"},i.a.createElement(T.a,{direction:"right",in:l.icon2,timeout:1e3},i.a.createElement(q.a,{className:t.icons+" hiddenAboutAnimations",id:"icon2"}))),i.a.createElement(O.a,{item:!0,sm:6,xs:12},i.a.createElement(F.a,{direction:"right",in:l.title2,timeout:2e3},i.a.createElement(A.a,{variant:"h5",className:"hiddenAboutAnimations",id:"title2"},"Skills & Experience")),i.a.createElement(F.a,{direction:"right",in:l.paragraph2,timeout:2e3},i.a.createElement("p",{className:"hiddenAboutAnimations",id:"paragraph2"},"My greatest strength is Front end Development. HTML, CSS, JS, with my greatest passion being building interactive web apps using the React.JS framework. I also have experience working Full stack, utilising Ruby on Rails on the server side and PostgreSQL as a relational database")))))},R=Object(b.a)({container:{width:"100vw",minHeight:"200vh",background:"#212121"}});var P=function(){var e=R(),t=i.a.useState(!1),a=Object(h.a)(t,2),n=a[0],r=a[1];return i.a.createElement("div",{className:e.container},i.a.createElement(M,{scroll:function(){r(!0)}}),i.a.createElement(D,{scrolled:n,resetScroll:function(){r(!1)}}))},z=a(180),J=a(118),G=a(166),K=a(58),U=a.n(K),Y=a(59),$=a.n(Y),Q=Object(b.a)((function(e){return{root:{maxWidth:"100%",flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(3),paddingRight:e.spacing(3),backgroundColor:e.palette.background.default},img:{height:350,maxWidth:"100%",overflow:"hidden",display:"block",width:"100%"}}}));var V=function(e){var t=Q(),a=e.gallery,n=Object(E.a)(),r=i.a.useState(0),o=Object(h.a)(r,2),c=o[0],l=o[1],s=a.length;return i.a.createElement("div",{className:t.root},i.a.createElement(J.a,{square:!0,elevation:0,className:t.header},i.a.createElement(A.a,null,a[c].description)),i.a.createElement("img",{className:t.img,src:a[c].image,alt:a[c].description}),i.a.createElement(z.a,{steps:s,position:"static",variant:"text",activeStep:c,nextButton:i.a.createElement(G.a,{size:"small",onClick:function(){l((function(e){return e+1}))},disabled:c===s-1},"Next","rtl"===n.direction?i.a.createElement(U.a,null):i.a.createElement($.a,null)),backButton:i.a.createElement(G.a,{size:"small",onClick:function(){l((function(e){return e-1}))},disabled:0===c},"rtl"===n.direction?i.a.createElement($.a,null):i.a.createElement(U.a,null),"Back")}))},X=a(167),Z=a(77),ee=a.n(Z),te=a(168),ae=a(181),ne=a(172),ie=a(170),re=a(171),oe=a(169),ce=a(78),le=a.n(ce),se=Object(b.a)((function(e){return{tile:{maxWidth:"100vw"},icon:{color:"rgba(255, 255, 255, 0.54)"},link:{color:e.palette.secondary.main},github:{fontWeight:"bold"}}}));var me=function(e){var t=se(),a=i.a.useState(!1),r=Object(h.a)(a,2),o=r[0],c=r[1],l=function(){c(!1)};return i.a.createElement(n.Fragment,null,i.a.createElement(X.a,{title:e.title,subtitle:i.a.createElement("span",null,"Stack: ",e.stack),actionIcon:i.a.createElement(te.a,{"aria-label":"info about ".concat(e.title),className:t.icon,onClick:function(){c(!0)}},i.a.createElement(ee.a,null))}),i.a.createElement(ae.a,{open:o,onClose:l,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",scroll:"body"},i.a.createElement(oe.a,{id:"scroll-dialog-title"},e.title),i.a.createElement(V,{gallery:e.gallery}),i.a.createElement(ie.a,null,i.a.createElement(re.a,{className:t.github},"View repository on: ",i.a.createElement("a",{href:e.github,className:t.link,rel:"noopener noreferrer",target:"blank_"},"Github")),i.a.createElement(re.a,null,e.description)),i.a.createElement(ne.a,null,i.a.createElement(G.a,{onClick:l,color:"primary"},i.a.createElement(le.a,null)))))},pe=a(174),ue=a(175),de=a(173),ge=a(79),he=a.n(ge),fe=a(80),be=a.n(fe),Ee=a(81),xe=a.n(Ee),we=a(82),ve=a.n(we),ye=a(83),ke=a.n(ye),je=a(84),Oe=a.n(je),Ne=a(85),Se=a.n(Ne),Ce=a(86),Ie=a.n(Ce),Ae=a(87),Be=a.n(Ae),Me=a(88),Le=a.n(Me),He=function(){var e=(Math.random()+3).toString();return"".concat(e,"s")},_e=Object(b.a)((function(e){return{section:{minHeight:"100vh",background:"#212121",paddingBottom:"20px"},heading:{marginTop:"100px"},hr:{width:"10%",marginBottom:"30px"},"@keyframes fadein":{from:{opacity:0},to:{opacity:1}},"@keyframes grow":{from:{transform:"scale(0)"},to:{transform:"scale(1)"}},tile:{maxWidth:"100vw",animation:"$fadein ".concat(He(),", $grow 2s")},gridList:Object(f.a)({},e.breakpoints.up("md"),{padding:"0px 20px 0px 20px"}),root:{margin:0}}})),qe=[{title:"Informative website for a Cattery",stack:"React.JS, MDBootstrap",description:"The client required a basic informative website including: an about page, a gallery displaying relevant pictures, a conditions page and a contact page with their details. I was tasked with designing the website, as well as creating and deploying it. Using React paired with MDBootstrap for the styling, i was able to quickly create a site they were happy with and deployed it to their desired hosting platform as well as connecting their custom domain.",github:"https://github.com/stephenfalck/kattehaugen",gallery:[{image:he.a,description:"Home page"},{image:be.a,description:"An about page, displaying relevant pictures and information"},{image:ve.a,description:"Conditions page"},{image:ke.a,description:"Gallery poge, displaying tabbed gallery with two sections"},{image:xe.a,description:"Footer with relative links and other useful information, such as opening times"}]},{title:"Local Aid Platform Concept",stack:"Ruby on Rails, React.JS, Material-UI, PostgreSQL",description:"A concept for a  web app which allows users to sign up and post requests which other users can offer to help with. Concept includes authenticating users, a map to display the requests geographically, a chat page to allow users to communicate with each other and a page for users to manage their requests. To keep users authenticated after logging in, as they navigate the site, it uses a cookie to store an authentication token. Once logged in users are taken to a map of their area, which includes using the Google Maps API to geolocate the user as well as to display the map in the app. Here users can respond to requests or post their own, which are added to the database via an AJAX call to the server. I then created a chat page, which interacted with the database in the same way.",github:"https://github.com/stephenfalck/aid-platform",gallery:[{image:Oe.a,description:"Landing page showing a log in form"},{image:Se.a,description:"Google map accessed using their API, geographically displaying user requests"},{image:Ie.a,description:"Form modal for users to add requests to the map"},{image:Be.a,description:"Messaging page, allowing users to communicate with each other"},{image:Le.a,description:"Modal allowing user to send initial response to request"}]}];var Fe=function(){var e=_e(),t=Object(E.a)(),a=Object(x.a)(t.breakpoints.up("md")),r=i.a.useState(!1),o=Object(h.a)(r,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){l(!0)}),[]),i.a.createElement(O.a,{container:!0,direction:"column",className:e.section},i.a.createElement(O.a,{container:!0,justify:"center",alignItems:"center",item:!0,xs:12,className:e.heading,direction:"column"},i.a.createElement(de.a,{direction:"right",in:c,timeout:500,mountOnEnter:!0},i.a.createElement(A.a,{variant:"h2"},"Portfolio")),i.a.createElement(de.a,{direction:"left",in:c,timeout:1e3,mountOnEnter:!0},i.a.createElement("hr",{className:e.hr}))),i.a.createElement(pe.a,{cellHeight:350,spacing:0,className:e.gridList},qe.map((function(t){return i.a.createElement(ue.a,{cols:a?1:2,style:{padding:"3px"},key:t.gallery[0].image,className:e.tile},i.a.createElement("img",{src:t.gallery[0].image,alt:t.title}),i.a.createElement(me,{title:t.title,stack:t.stack,description:t.description,github:t.github,gallery:t.gallery}))}))))},Te=a(37),We=a(23),De=a(52),Re=a(53),Pe=a(54),ze=a(4),Je=a(178),Ge=function(e){function t(){var e,a;Object(Te.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(De.a)(this,(e=Object(Re.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",email:"",message:"",transition:!1},a.componentDidMount=function(){a.setState({transition:!0})},a.handleChange=function(e){return function(t){a.setState(Object(f.a)({},e,t.target.value))}},a.handleSubmit=function(e){e.preventDefault();a.props.submitForm(),a.sendEmail("template_e464IIMb",a.state),a.setState({name:"",email:"",message:""})},a.sendEmail=function(e,t){window.emailjs.send("default_service",e,t).then((function(e){console.log("SUCCESS!",e.status,e.text),201===e.status&&this.setState({submitted:!0})}),(function(e){console.log("FAILED...",e)}))},a}return Object(Pe.a)(t,e),Object(We.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(n.Fragment,null,i.a.createElement(O.a,{item:!0,container:!0,justify:"center",className:e.subHeading},i.a.createElement(j.a,{in:this.state.transition,timeout:3e3},i.a.createElement(A.a,{variant:"h6",align:"center"},"Have a question or want to work together?"))),i.a.createElement(O.a,{item:!0,container:!0,justify:"center",className:e.formContainer},i.a.createElement(F.a,{in:this.state.transition,timeout:3e3},i.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit},i.a.createElement(Je.a,{classes:{root:e.input},className:"formInput",id:"name",label:"Name",value:this.state.name,fullWidth:!0,variant:"filled",onChange:this.handleChange("name"),color:"primary",required:!0}),i.a.createElement(Je.a,{classes:{root:e.input},className:"formInput",id:"email",label:"Email",value:this.state.email,fullWidth:!0,variant:"filled",type:"email",onChange:this.handleChange("email"),color:"primary",required:!0}),i.a.createElement(Je.a,{classes:{root:e.input},className:"formInput",id:"message",label:"Message",value:this.state.message,fullWidth:!0,variant:"filled",multiline:!0,rows:"5",onChange:this.handleChange("message"),color:"primary",required:!0}),i.a.createElement(G.a,{variant:"contained",color:"secondary",type:"submit",form:"contact-form",className:e.submitButton},"Submit")))))}}]),t}(i.a.Component),Ke=Object(ze.a)({formContainer:{margin:"30px 10px 20px 10px"},formContainerMobile:{display:"flex",flexDirection:"column",alignItems:"center",width:"76%",padding:"30px 10px 20px 10px"},subHeading:{color:"#f06292",margin:"0px 10px 0px 10px"},input:{backgroundColor:"#424242",marginBottom:"5px","& label":{color:"#e0e0e0"},"& div":{color:"white"}},submitButton:{marginTop:"5px"}})(Ge),Ue=a(176),Ye=Object(b.a)({messageContainer:{height:"400px",paddingLeft:"15%",paddingRight:"15%"},message:{textAlign:"center",color:"#f06292"}});var $e=function(e){var t=Ye(),a=i.a.useState(!1),r=Object(h.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){c(!0)}),[]),i.a.createElement(O.a,{item:!0,container:!0,justify:"center",alignItems:"center",className:t.messageContainer},i.a.createElement(Ue.a,{in:o,timeout:1e3},i.a.createElement(A.a,{variant:"h3",className:t.message},"Thank you for your message, I will get back to you as soon as possible!")))},Qe=function(e){function t(){var e,a;Object(Te.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(De.a)(this,(e=Object(Re.a)(t)).call.apply(e,[this].concat(r)))).state={submitted:!1,transition:!1},a.componentDidMount=function(){a.setState({transition:!0})},a.submitForm=function(){a.setState({submitted:!0})},a.renderComponent=function(e){return!1===e?i.a.createElement(Ke,{submitted:a.state.submitted,submitForm:a.submitForm}):i.a.createElement($e,null)},a}return Object(Pe.a)(t,e),Object(We.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(O.a,{container:!0,className:e.container,alignContent:"flex-start"},i.a.createElement(O.a,{item:!0,container:!0,justify:"center",alignItems:"center",direction:"column",className:e.heading},i.a.createElement(de.a,{direction:"right",in:this.state.transition,timeout:500,mountOnEnter:!0},i.a.createElement(A.a,{variant:"h2"},"Contact")),i.a.createElement(de.a,{direction:"left",in:this.state.transition,timeout:1e3,mountOnEnter:!0},i.a.createElement("hr",{className:e.hr}))),this.renderComponent(this.state.submitted))}}]),t}(i.a.Component),Ve=Object(ze.a)({container:{minHeight:"100vh",background:"#212121"},heading:{marginTop:"100px"},hr:{width:"10%",marginBottom:"30px"},formContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:"76%"},input:{backgroundColor:"white",marginBottom:"5px"},label:{color:"white"}})(Qe),Xe=a(89),Ze=a.n(Xe),et=a(90),tt=a.n(et),at=Object(b.a)({footerContainer:{minHeight:"75px",background:"rgb(25,25,25)",padding:"0px 20px 0px 20px"},footerItems:{height:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",color:"white",padding:"0px 5px 0px 5px",minHeight:"inherit"},icons:{display:"flex",width:"75px",justifyContent:"space-around"},footerLinks:{color:"white","&:hover":{transform:"translateY(-5px)"}}});var nt=function(){var e=at();return i.a.createElement("div",{className:e.footerContainer},i.a.createElement("div",{className:e.footerItems},i.a.createElement("p",null,"Stephen Falck \xa9 2020"),i.a.createElement("div",{className:e.icons},i.a.createElement("a",{href:"https://github.com/stephenfalck",rel:"noopener noreferrer",target:"_blank",className:e.footerLinks},i.a.createElement(Ze.a,null)),i.a.createElement("a",{href:"https://www.linkedin.com/in/stephen-falck/",rel:"noopener noreferrer",target:"_blank",className:e.footerLinks},i.a.createElement(tt.a,null)))))},it=Object(s.a)({palette:{type:"dark",primary:{main:g.a[700]},secondary:{main:u.a[300]}}});var rt=function(){return i.a.createElement(m.a,{theme:it},i.a.createElement(c.a,null,i.a.createElement(k,null),i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/portfolio",component:P}),i.a.createElement(l.a,{path:"/projects",component:Fe}),i.a.createElement(l.a,{path:"/contact",component:Ve})),i.a.createElement(nt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/jc-gellidon-EH9f0TI5wco-unsplash_cropped.ce06fd59.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/Screenshot 2020-03-01 at 16.44.12.c904e7d1.png"},80:function(e,t,a){e.exports=a.p+"static/media/image_original_KH.78c1243b.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/image_original (1)_KH.a9e49946.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/image_original (2)_KH.cc4f5ab0.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/image_original (3)_KH.ffcf770f.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/Screenshot 2020-03-01 at 19.56.33.775cfa93.png"},85:function(e,t,a){e.exports=a.p+"static/media/image_original.352aa910.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/image_original (1).08b21e94.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/image_original (2).3cf3db50.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/image_original (3).cbe9210a.jpg"}},[[104,1,2]]]);
//# sourceMappingURL=main.d99f85c7.chunk.js.map