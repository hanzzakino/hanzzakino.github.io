(this.webpackJsonphanzzakino=this.webpackJsonphanzzakino||[]).push([[0],[,,,,,,,,,,function(e,t,s){},function(e,t){},,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(10),s(11),s(12);var i=s(1),n=s.n(i),c=s(9),a=s.n(c),r=s(3),l=s(4),o=s(6),u=s(5),j=(s(17),s(2)),b=(s(18),s(0)),d=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(r.a)(this,s),(i=t.call(this,e)).listenToScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=e/(document.documentElement.scrollHeight-document.documentElement.clientHeight);i.setState({scrollTopPX:e,scrollTopPT:t}),i.state.scrollTopPX<5?i.setState({onPageTop:!0}):i.setState({onPageTop:!1})},i.state={myName:"HANZ",toggledDown:!1,testClick:null,onPageTop:!0,scrollingToTop:!1,scrollTopPX:0,scrollTopPT:0,Skills:{PROGRAMMING:{WEB:"#web",DESKTOP:"#desktop",ALGORITHMS:"#mathnalgo"},"COMPUTER GRAPHICS":{"2D ARTS":"#2d","3D ARTS":"#3d",DESIGNS:"#design"},MATHEMATICS:{PHYSICS:"#physics",GEOMETRY:"#geometry",MATH:"#math"},ENGINEERING:{"CIRCUIT DESIGN":"#circuits","LOGIC DESIGN":"#logic",RESEARCH:"#research"}}},i.toggleCliked=i.toggleCliked.bind(Object(j.a)(i)),i.handleNavClick=i.handleNavClick.bind(Object(j.a)(i)),i}return Object(l.a)(s,[{key:"handleNavClick",value:function(e){console.log(e.target.name),this.toggleCliked()}},{key:"toggleCliked",value:function(){this.setState({toggledDown:!this.state.toggledDown})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){var e=null,t=[],s=[],i=[];for(var n in this.state.Skills){for(var c in(e=[]).push(Object(b.jsx)("p",{className:"H-NvLink-head",children:n},n+"_a")),this.state.Skills[n])e.push(Object(b.jsx)("a",{name:c,onClick:this.handleNavClick,className:"hz-nvlink",href:this.state.Skills[n][c],children:Object(b.jsx)("span",{className:"H-NvLink",children:c},c+"_c")},c+"_b"));t.push(Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"hz-navbar-list",children:e},n+"_e"),Object(b.jsx)("hr",{style:{opacity:"10%"}},n+"_f")]},n+"_d"))}for(var a=0;a<t.length;a++)a%2===0?s.push(t[a]):i.push(t[a]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"hz-row-unresponsive",children:[Object(b.jsx)("div",{className:"hz-column",children:Object(b.jsx)("h2",{className:this.state.onPageTop&&!this.state.toggledDown?"hz-navbar-brand-topped":"hz-navbar-brand",children:this.state.myName})}),Object(b.jsx)("div",{className:"hz-column",children:Object(b.jsx)("button",{className:"hz-navbar-toggle H-NvToggle",onClick:this.toggleCliked,children:Object(b.jsx)("span",{children:Object(b.jsx)("div",{className:this.state.toggledDown?"hz-navbar-chevron-animated":"hz-navbar-chevron",children:Object(b.jsx)("span",{className:"bi-chevron-down"})})})})}),"\xa0"]}),Object(b.jsx)("div",{className:"hz-navbar H-Navbar",id:"hzNavBar",style:this.state.toggledDown?{height:"100%"}:{height:this.state.onPageTop||this.state.scrollingToTop?"0%":"48px"},children:Object(b.jsxs)("div",{className:"hz-navbar-collapse",children:[Object(b.jsx)("div",{className:this.state.toggledDown?"hz-column navCol1":"hz-column",align:"center",children:s}),Object(b.jsx)("div",{className:this.state.toggledDown?"hz-column navCol2":"hz-column",align:"center",children:i})]})})]})}}]),s}(n.a.Component),m=s(7),h=(s(20),s.p+"static/media/hz-header-bg.50f3aca8.jpg"),O=s.p+"static/media/hz-me.d18f4fb0.png",x=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(r.a)(this,s),(i=t.call(this,e)).listenToScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=e/(document.documentElement.scrollHeight-document.documentElement.clientHeight);i.setState({scrollTopPX:e,scrollTopPT:t})},i.state={myName:"Hanz Aquino",myFullName:"Hanz Christian C. Aquino",activeDiv:""},i.Footer=i.Footer(Object(j.a)(i)),i.Header=i.Header(Object(j.a)(i)),i.AboutMe=i.AboutMe(Object(j.a)(i)),i.Content=i.Content(Object(j.a)(i)),i}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"Header",value:function(){var e={backgroundImage:"url("+h+")",backgroundColor:"rgb(37,40,47)",backgroundBlendMode:"overlay",backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"cover",marginTop:"-58px",height:"90vh"};return Object(b.jsxs)("div",{style:e,children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"hz-row hz-fullcentered",children:Object(b.jsx)("div",{className:"hz-column",align:"center",children:Object(b.jsx)(m.a,{rootMargin:"-50px 0px",triggerOnce:!0,children:function(e){var t=e.inView,s=e.ref;e.entry;return Object(b.jsxs)("p",{ref:s,className:t?"H-CtnMSlogan-shw":"H-CtnMSlogan-hid",children:["A\xa0\xa0\xa0C R E A T I V E\xa0\xa0\xa0H E ",Object(b.jsx)("span",{className:"H-CtnSlogan",children:"A R T ."})]})}})})})]})}},{key:"Content",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"hz-row",align:"center",children:Object(b.jsxs)("div",{className:"hz-column",children:[Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){var e=document.getElementById("content-1");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},className:"hz-transparent",children:Object(b.jsx)("span",{className:"bi-chevron-down hz-cv-scrolldowncehvron"})})]})}),Object(b.jsx)("div",{className:"hz-container",id:"content-1",children:Object(b.jsx)("div",{className:"hz-row",align:"center",children:Object(b.jsxs)("div",{className:"hz-column",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. Pellentesque malesuada ipsum in orci lobortis, et ullamcorper quam interdum. Fusce volutpat, mauris et convallis maximus, odio massa interdum dui, ut tempus tellus arcu ut velit. Aenean placerat et purus id semper. Ut interdum eleifend pellentesque. Aenean ac malesuada augue. Mauris tempus ex vitae ante interdum, id sodales ipsum congue.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"Vestibulum fermentum vulputate posuere. In fermentum magna eu suscipit faucibus. Suspendisse augue nibh, ultricies sit amet orci in, suscipit posuere dui. Sed at turpis in libero mattis lacinia. Sed quis posuere ex. In vitae finibus tortor, quis finibus massa. In velit metus, dictum id semper vitae, feugiat a risus. Aenean venenatis pretium risus tempus tincidunt. Aliquam venenatis sodales mi, non auctor arcu. Fusce malesuada elit ante, non sagittis tortor tincidunt at. Fusce nec mauris tincidunt, ultrices purus id, maximus purus. Etiam et dui dictum, sollicitudin libero non, porta felis. Ut faucibus consequat justo eu mattis.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"Nam et sodales eros, a imperdiet elit. Morbi purus nibh, rutrum non tempus id, condimentum ac quam. Suspendisse potenti. Pellentesque ut massa eu neque placerat vehicula et mattis erat. Duis facilisis nec enim quis imperdiet. Phasellus blandit ante vel leo pretium consequat. Phasellus sem massa, luctus vitae faucibus vel, venenatis non elit. Proin scelerisque eu magna a tincidunt.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"Cras semper dolor ut magna maximus, vestibulum finibus elit cursus. Nullam id nulla eget orci vestibulum hendrerit. Fusce facilisis tincidunt quam, nec fermentum magna maximus et. Aliquam sed sagittis ante. Mauris vestibulum enim venenatis rutrum lobortis. Suspendisse sollicitudin congue tincidunt. Quisque id volutpat nibh."]})]})})})]})}},{key:"AboutMe",value:function(){return Object(b.jsx)("div",{className:"hz-container",children:Object(b.jsxs)("div",{className:"hz-row",children:[Object(b.jsxs)("div",{className:"hz-column",children:[Object(b.jsxs)("div",{className:"hz-row hz-fullcentered",children:[Object(b.jsx)("div",{className:"hz-column",children:Object(b.jsx)(m.a,{rootMargin:"-100px 0px",children:function(e){var t=e.inView,s=e.ref;e.entry;return Object(b.jsx)("div",{ref:s,children:Object(b.jsx)("span",{children:Object(b.jsx)("img",{className:t?"H-CtnImgMe-shw":"H-CtnImgMe-hid",src:O,width:"150",alt:"me"})})})}})}),Object(b.jsx)("div",{className:"hz-column",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:this.state.myFullName}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{style:{fontSize:"13px",opacity:"60%"},children:["BS in Computer Engineering",Object(b.jsx)("br",{}),Object(b.jsx)("i",{children:"Creator"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://facebook.com/hanzz.akino",children:Object(b.jsx)("i",{style:{color:"#1877f2"},className:"bi-facebook"})}),Object(b.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(b.jsx)("a",{className:"",href:"https://twitter.com/HanzzAquino",children:Object(b.jsx)("i",{style:{color:"#1DA1F2"},className:"bi-twitter"})}),Object(b.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(b.jsx)("a",{href:"https://github.com/hanzzakino",children:Object(b.jsx)("i",{style:{color:"white"},className:"bi-github"})}),Object(b.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(b.jsx)("a",{href:"mailto:emperornezl50@gmail.com",children:Object(b.jsx)("i",{style:{color:"white"},className:"bi-envelope-fill"})}),Object(b.jsx)("span",{children:"\xa0\xa0\xa0"})]})]})})]}),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{className:"hz-column",children:Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("h2",{children:"Hi, I'm Hanz"})}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"I'm  a Computer Engineering student who enjoys converting ideas and creativity into a reliable, convenient, and user-friendly Software that can be utilized to aid your productivity."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})})]})})}},{key:"Footer",value:function(){return Object(b.jsx)("div",{className:"hz-container",children:Object(b.jsxs)("div",{className:"hz-unresponsive",children:[Object(b.jsx)("div",{className:"hz-column",align:"left",children:Object(b.jsx)("p",{children:" \xa9 2021"})}),Object(b.jsx)("div",{className:"hz-column",align:"right",children:Object(b.jsxs)("p",{children:["By: \xa0 ",this.state.myName," \xa0",Object(b.jsx)("i",{className:"bi-heart-fill"}),"\xa0"]})})]})})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[this.Header,Object(b.jsxs)("div",{children:[this.Content,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{rootMargin:"-200px 0px",children:function(e){var t=e.inView,s=e.ref;e.entry;return Object(b.jsx)("div",{ref:s,children:t?Object(b.jsx)("div",{children:"Viewed"}):Object(b.jsx)("div",{children:"Not viewed"})})}})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{})]}),this.AboutMe,this.Footer]})}}]),s}(n.a.Component),v=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(r.a)(this,s),(i=t.call(this,e)).state={myName:"Hanz Aquino"},i}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"MainView",children:[Object(b.jsx)(d,{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(x,{})]})}}]),s}(n.a.Component),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(v,{}),document.getElementById("root")),p()}],[[21,1,2]]]);
//# sourceMappingURL=main.65694caa.chunk.js.map