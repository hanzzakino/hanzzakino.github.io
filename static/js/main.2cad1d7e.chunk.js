(this.webpackJsonphanzzakino=this.webpackJsonphanzzakino||[]).push([[0],[,,,,,,,,,,function(e,t,s){},function(e,t){},,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(10),s(11),s(12);var i=s(1),n=s.n(i),c=s(9),a=s.n(c),l=s(3),r=s(4),o=s(6),u=s(5),m=(s(17),s(2)),d=(s(18),s.p+"static/media/hz-logo (2).955c0ce7.svg"),j=s(0),h=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).listenToScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=e/(document.documentElement.scrollHeight-document.documentElement.clientHeight);i.setState({scrollTopPX:e,scrollTopPT:t}),i.state.scrollTopPX<5?i.setState({onPageTop:!0}):i.setState({onPageTop:!1})},i.state={myName:"HANZ",myFullName:"HANZ AQUINO",toggledDown:!1,testClick:null,onPageTop:!0,scrollingToTop:!1,scrollTopPX:0,scrollTopPT:0,Skills:{Programming:{Web:"#web",Desktop:"#desktop",Algorithms:"#mathnalgo"},"Computer Graphics":{"2D Arts":"#2d","3D Arts":"#3d",Designs:"#design"},Mathematics:{Physics:"#physics",Geometry:"#geometry",Math:"#math"},Engineering:{"Circuit Designs":"#circuits","Logic Designs":"#logic",Research:"#research"}}},i.toggleCliked=i.toggleCliked.bind(Object(m.a)(i)),i.handleNavClick=i.handleNavClick.bind(Object(m.a)(i)),i}return Object(r.a)(s,[{key:"handleNavClick",value:function(e){console.log(e.target.name),this.toggleCliked()}},{key:"toggleCliked",value:function(){this.setState({toggledDown:!this.state.toggledDown})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){var e=null,t=[],s=[],i=[];for(var n in this.state.Skills){for(var c in(e=[]).push(Object(j.jsx)("p",{className:"H-NvLink-head hz-navbar-item-title",children:n},n+"_a")),this.state.Skills[n])e.push(Object(j.jsx)("a",{name:c,onClick:this.handleNavClick,className:"hz-nvlink hz-navbar-item",href:this.state.Skills[n][c],children:Object(j.jsx)("span",{className:"H-NvLink",children:c},c+"_c")},c+"_b"));t.push(Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"hz-navbar-list",children:e},n+"_e"),Object(j.jsx)("hr",{style:{opacity:"10%"}},n+"_f")]},n+"_d"))}for(var a=0;a<t.length;a++)a%2===0?s.push(t[a]):i.push(t[a]);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"hz-row-unresponsive",children:[Object(j.jsx)("div",{className:"hz-column",children:Object(j.jsxs)("a",{href:"#home",className:this.state.onPageTop&&!this.state.toggledDown?"hz-navbar-brand-topped":"hz-navbar-brand",children:[Object(j.jsx)("img",{className:this.state.onPageTop&&!this.state.toggledDown?"hz-navbar-logo-topped":"hz-navbar-logo",src:d,alt:"Hanz Aquino Brand Logo"}),this.state.myName]})}),Object(j.jsxs)("div",{className:"hz-column",children:[Object(j.jsxs)("div",{className:"hz-navbar-agroup",children:[Object(j.jsxs)("a",{href:"#resume",className:this.state.onPageTop||this.state.toggledDown?"hz-navbar-agroup-link hz-hover-underline":"hz-navbar-agroup-link-scrolled hz-hover-underline",children:[Object(j.jsx)("i",{className:"bi-file-earmark-text"}),Object(j.jsx)("span",{children:"\xa0Resume"}),"\xa0"]}),Object(j.jsxs)("a",{href:"#contactme",className:this.state.onPageTop||this.state.toggledDown?"hz-navbar-agroup-link hz-hover-underline":"hz-navbar-agroup-link-scrolled hz-hover-underline",children:[Object(j.jsx)("i",{className:"bi-telephone"}),Object(j.jsx)("span",{children:"\xa0Contact"}),"\xa0"]})]}),Object(j.jsx)("button",{className:"hz-navbar-toggle H-NvToggle",onClick:this.toggleCliked,children:Object(j.jsx)("span",{children:Object(j.jsx)("div",{className:this.state.toggledDown?"hz-navbar-chevron-animated":"hz-navbar-chevron",children:Object(j.jsx)("span",{className:"bi-chevron-down"})})})})]}),"\xa0"]}),Object(j.jsx)("div",{className:"hz-navbar H-Navbar",id:"hzNavBar",style:this.state.toggledDown?{height:"100%"}:{height:this.state.onPageTop||this.state.scrollingToTop?"0%":"48px"},children:Object(j.jsxs)("div",{className:"hz-navbar-collapse",children:[Object(j.jsx)("div",{className:this.state.toggledDown?"hz-column navCol1":"hz-column",align:"center",children:s}),Object(j.jsx)("div",{className:this.state.toggledDown?"hz-column navCol2":"hz-column",align:"center",children:i})]})})]})}}]),s}(n.a.Component),b=s(7),x=(s(20),s.p+"static/media/hz-header-bg.50f3aca8.jpg"),p=s.p+"static/media/hz-me.d18f4fb0.png",g=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).listenToScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=e/(document.documentElement.scrollHeight-document.documentElement.clientHeight);i.setState({scrollTopPX:e,scrollTopPT:t})},i.state={myName:"Hanz Aquino",myFullName:"Hanz Christian C. Aquino",activeDiv:"",scrollTopPX:0,scrollTopPT:0},i.Footer=i.Footer(Object(m.a)(i)),i.Header=i.Header(Object(m.a)(i)),i.AboutMe=i.AboutMe(Object(m.a)(i)),i.Content=i.Content(Object(m.a)(i)),i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"Header",value:function(){var e={backgroundImage:"url("+x+")",backgroundColor:"rgb(37,40,47)",backgroundBlendMode:"overlay",backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"-58px",height:"90vh"};return Object(j.jsx)("div",{style:e,children:Object(j.jsx)("div",{className:"hz-row hz-fullcentered",children:Object(j.jsxs)("div",{className:"hz-column",align:"center",children:[Object(j.jsx)(b.a,{rootMargin:"-50px 0px",triggerOnce:!0,children:function(e){var t=e.inView,s=e.ref;e.entry;return Object(j.jsxs)("p",{ref:s,className:t?"H-CtnMSlogan-shw":"H-CtnMSlogan-hid",children:[Object(j.jsx)("span",{className:"H-CtnSlogan-creative"}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"H-CtnSlogan",children:"H E"})," ",Object(j.jsx)("span",{className:"H-CtnSlogan2",children:"A R T"})]})}}),Object(j.jsx)("p",{className:"H-Ctn-Scrolldowntext",children:"Scroll down"})]})})})}},{key:"Content",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"hz-row",align:"center",children:Object(j.jsxs)("div",{className:"hz-column",children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"hz-transparent",onClick:function(){var e=document.getElementById("content-1");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},children:Object(j.jsx)("span",{className:"bi-chevron-down hz-cv-scrolldowncehvron"})})]})}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"content-1",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),this.AboutMe,Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"hz-container",children:Object(j.jsxs)("div",{className:"hz-row-unresponsive",children:[Object(j.jsx)("div",{className:"hz-column-fit",children:Object(j.jsx)("div",{className:"hz-line-curved H-Ctn-line2"})}),Object(j.jsx)("div",{className:"hz-column-fit",children:Object(j.jsx)("div",{className:"hz-line-curved-tip"})}),Object(j.jsxs)("div",{className:"hz-column-fit-height",children:[Object(j.jsx)("h1",{className:"hz-content-projects-title",children:"My Projects"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"hz-container",children:Object(j.jsxs)("div",{className:"hz-row-unresponsive",children:[Object(j.jsx)("div",{className:"hz-column-fit",children:Object(j.jsxs)("div",{className:"hz-line-ci",children:[Object(j.jsx)("div",{className:"hz-circle H-Ctn-circle1"}),Object(j.jsx)("div",{className:"hz-line H-Ctn-line1"})]})}),Object(j.jsxs)("div",{className:"hz-column",children:[Object(j.jsx)("h2",{className:"hz-content-programminng-title",children:"Programming"}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{className:"hz-content-programminng-web-title",children:"Web Development"}),Object(j.jsxs)("div",{className:"hz-row hz-fullcentered",children:[Object(j.jsx)("div",{className:"hz-column",children:Object(j.jsx)("div",{className:"hz-test-sample-image"})}),Object(j.jsx)("div",{className:"hz-column",children:Object(j.jsxs)("p",{className:"hz-content-text",id:"web",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque.",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})]})})]}),Object(j.jsx)("p",{className:"hz-content-text",children:"Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus."}),Object(j.jsx)("h3",{className:"hz-content-programminng-web-title",children:"Desktop App Development"}),Object(j.jsxs)("p",{className:"hz-content-text",id:"web",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. Pellentesque malesuada ipsum in orci lobortis, et ullamcorper quam interdum. Fusce volutpat, mauris et convallis maximus, odio massa interdum dui, ut tempus tellus arcu ut velit. Aenean placerat et purus id semper. Ut interdum eleifend pellentesque. Aenean ac malesuada augue. Mauris tempus ex vitae ante interdum, id sodales ipsum congue.",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus."]}),Object(j.jsx)("h3",{className:"hz-content-programminng-web-title",children:"Algorithms"}),Object(j.jsxs)("p",{className:"hz-content-text",id:"web",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. Pellentesque malesuada ipsum in orci lobortis, et ullamcorper quam interdum. Fusce volutpat, mauris et convallis maximus, odio massa interdum dui, ut tempus tellus arcu ut velit. Aenean placerat et purus id semper. Ut interdum eleifend pellentesque. Aenean ac malesuada augue. Mauris tempus ex vitae ante interdum, id sodales ipsum congue.",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus."]})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}},{key:"AboutMe",value:function(){var e=this,t={color:"#1877f2"},s={color:"#1DA1F2"},i={color:"white"},n={color:"white"},c={fontSize:"13px",opacity:"60%"};return Object(j.jsx)("div",{className:"hz-container",children:Object(j.jsxs)("div",{className:"hz-row hz-fullcentered",children:[Object(j.jsxs)("div",{className:"hz-column",children:[Object(j.jsxs)("div",{className:"hz-row hz-fullcentered",children:[Object(j.jsx)("div",{className:"hz-column-fit",children:Object(j.jsx)(b.a,{rootMargin:"-100px 0px",triggerOnce:"true",children:function(e){var t=e.inView,s=e.ref;e.entry;return Object(j.jsx)("div",{ref:s,children:Object(j.jsx)("span",{children:Object(j.jsx)("img",{className:t?"H-CtnImgMe-shw":"H-CtnImgMe-hid",src:p,width:"150",alt:"me"})})})}})}),Object(j.jsx)("div",{className:"hz-column",children:Object(j.jsx)(b.a,{rootMargin:"0px 0px",triggerOnce:"true",children:function(a){var l=a.inView,r=a.ref;a.entry;return Object(j.jsxs)("p",{ref:r,className:l?"hz-content-aboutme-nametag":"hz-content-aboutme-nametag-hidden",children:[Object(j.jsxs)("b",{className:"H-Ctn-aboutme-nametxt",children:[e.state.myFullName," "]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{style:c,children:["BS in Computer Engineering",Object(j.jsx)("br",{}),Object(j.jsx)("i",{children:"Creator"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://facebook.com/hanzz.akino",children:Object(j.jsx)("i",{style:t,className:"bi-facebook hz-content-soclinks"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("a",{className:"",href:"https://twitter.com/HanzzAquino",children:Object(j.jsx)("i",{style:s,className:"bi-twitter hz-content-soclinks"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("a",{href:"https://github.com/hanzzakino",children:Object(j.jsx)("i",{style:i,className:"bi-github hz-content-soclinks"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("a",{href:"mailto:emperornezl50@gmail.com",children:Object(j.jsx)("i",{style:n,className:"bi-envelope-fill hz-content-soclinks"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"})]})]})}})})]}),Object(j.jsx)("br",{})]}),Object(j.jsx)(b.a,{rootMargin:"0px 0px",triggerOnce:"true",children:function(e){var t=e.inView,s=e.ref;e.entry;return Object(j.jsxs)("div",{ref:s,className:t?"hz-column-fit-height hz-slidein":"hz-column-fit-height hz-slidein-hidden",children:[Object(j.jsx)("h2",{className:"H-Ctn-hitxt",children:"Hi! I'm Hanz,"}),Object(j.jsx)("p",{className:"hz-content-intro-message",children:"I'm currently a Computer Engineering student and I put my Heart and Soul into converting ideas and creativity into a reliable, convenient, and user-friendly piece of technology that can help create a better functionality."})]})}})]})})}},{key:"Footer",value:function(){var e={color:"rgb(180,180,180)"};return Object(j.jsx)("div",{className:"hz-container",children:Object(j.jsxs)("div",{className:"hz-content-footer hz-light-text",children:[Object(j.jsx)("div",{className:"hz-column",align:"left",children:Object(j.jsx)("p",{children:"Copyright \xa9 2021 Hanz Aquino. All rights reserved."})}),Object(j.jsx)("div",{className:"hz-column",align:"right",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("a",{href:"https://facebook.com/hanzz.akino",children:Object(j.jsx)("i",{style:e,className:"bi-facebook"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("a",{className:"",href:"https://twitter.com/HanzzAquino",children:Object(j.jsx)("i",{style:e,className:"bi-twitter"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("a",{href:"https://github.com/hanzzakino",children:Object(j.jsx)("i",{style:e,className:"bi-github"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("a",{href:"mailto:emperornezl50@gmail.com",children:Object(j.jsx)("i",{style:e,className:"bi-envelope-fill"})}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("i",{className:"bi-heart-fill",style:e})]})})]})})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[this.Header,Object(j.jsxs)("div",{children:[this.Content,Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(b.a,{rootMargin:"-200px 0px",children:function(e){var t=e.inView,s=e.ref;e.entry;return Object(j.jsx)("div",{ref:s,children:t?Object(j.jsx)("div",{children:"Viewed"}):Object(j.jsx)("div",{children:"Not viewed"})})}})]}),Object(j.jsx)("hr",{})]}),Object(j.jsx)("br",{}),this.Footer]})}}]),s}(n.a.Component),O=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={myName:"Hanz Aquino"},i}return Object(r.a)(s,[{key:"render",value:function(){return document.title="Hanz Aquino",Object(j.jsxs)("div",{className:"MainView",children:[Object(j.jsx)(h,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(g,{})]})}}]),s}(n.a.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(O,{}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.2cad1d7e.chunk.js.map