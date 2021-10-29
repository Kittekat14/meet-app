(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{204:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},226:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(69),s=n.n(o),i=(n(204),n(27)),c=n.n(i),l=n(53),u=n(23),d=n(32),h=n(24),m=n(25),f=(n(206),n(207),n(2)),p=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).detailsHandler=function(e){a.setState({show:!a.state.show})},a.state={show:!0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h3",{children:t.summary}),this.state.show&&Object(f.jsxs)("div",{className:"summary",children:[Object(f.jsx)("p",{className:"name",children:t.summary}),Object(f.jsxs)("p",{className:"startTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"From:"}),new Date(t.start.dateTime).toString().slice(4,21)," (",t.start.timeZone,")"]}),Object(f.jsxs)("p",{className:"endTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"To:"}),new Date(t.end.dateTime).toString().slice(4,21)," (",t.end.timeZone,")"]}),Object(f.jsx)("p",{className:"location",children:t.location})]}),!this.state.show&&Object(f.jsxs)("div",{className:"details",children:[Object(f.jsx)("p",{className:"name",children:t.summary}),Object(f.jsxs)("p",{className:"startTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"From:"}),new Date(t.start.dateTime).toString().slice(4,21)," (",t.start.timeZone,")"]}),Object(f.jsxs)("p",{className:"endTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"To:"}),new Date(t.end.dateTime).toString().slice(4,21)," (",t.end.timeZone,")"]}),Object(f.jsx)("p",{className:"location",children:t.location}),Object(f.jsx)("p",{className:"decription",children:t.description}),Object(f.jsxs)("p",{className:"organizerEmail",children:["@",t.organizer.email]}),Object(f.jsx)("p",{className:"status",children:t.status})]}),this.state.show&&Object(f.jsx)("button",{type:"button",onClick:function(t){return e.detailsHandler(t)},className:"showDetailsButton button",children:"Show Details"}),!this.state.show&&Object(f.jsx)("button",{type:"button",onClick:function(t){return e.detailsHandler(t)},className:"hideDetailsButton button",children:"Hide Details"})]})}}]),n}(a.Component),b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,backgroundColor:a.backgroundColor,fontSize:a.fontSize,fontWeight:a.fontWeight,maxWidth:a.maxWidth,margin:a.margin}},a.color=null,a.backgroundColor=null,a.fontSize=null,a.fontWeight=null,a.maxWidth=null,a.margin=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.backgroundColor="#cdcdcd",a.fontSize="14px",a.fontWeight="500",a.maxWidth="600px",a.margin="0 auto",a.fontStyle="italic",a}return n}(b),v=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.backgroundColor="#fff",a.fontSize="16px",a.fontWeight="700",a.margin="0 auto",a}return n}(b),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#f3f72f",a.backgroundColor="#000",a.fontSize="16px",a.fontWeight="700",a}return n}(b),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={warningText:"This event list was cached and you're currently offline."},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsxs)("div",{children:[navigator.onLine?null:Object(f.jsx)(g,{text:this.state.warningText}),Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(p,{event:e})},e.id)}))})]})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value;a.setState({showSuggestions:!0});var n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));if(0!==n.length)return a.setState({query:t,suggestions:n,showSuggestions:!0,infoText:""});a.setState({query:t,infoText:"We can not find the city you are looking for. Please try another city"})},a.handleItemClicked=function(e){a.setState({query:e,suggestions:[],showSuggestions:!1,infoText:""}),a.props.updateEvents(e)},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{className:"infoAlert",text:this.state.infoText}),Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)("input",{type:"text",placeholder:"Find Events in your City",className:"city",value:this.state.query,onChange:function(t){return e.handleInputChanged(t)},onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})]})}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value;return a.props.updateEventNumber(t),isNaN(t)||t<=0?a.setState({errorText:"Please write a number bigger than 0"}):t>32?a.setState({errorText:"Please select a number from 1 to 32"}):a.setState({numberOfEvents:t,errorText:""})},a.state={errorText:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"EventNumberComponent",children:[Object(f.jsxs)("label",{htmlFor:"numberOfEventsInput",children:[" Number of Events on Page:",Object(f.jsx)("input",{id:"numberOfEventsInput",type:"text",className:"numberInput",value:this.props.numberOfEvents,onChange:function(t){return e.handleInputChanged(t)}})]}),Object(f.jsx)(v,{className:"errorAlert",text:this.state.errorText})]})}}]),n}(a.Component),y=n(193),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=k=JSON.parse(JSON.stringify(k)),T=n(122),N=n.n(T),W=n(78),E=n.n(W),C=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},Z=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,D(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,N.a.get("https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&L(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=10;break}return e.next=7,localStorage.getItem("lastEvents");case 7:return t=e.sent,E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=12,Z();case 12:if(!(n=e.sent)){e.next=22;break}return I(),a="https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=18,N.a.get(a);case 18:return(r=e.sent).data&&(o=C(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),E.a.done(),e.abrupt("return",r.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=n.p+"static/media/MEET2.9b07cb60.png",M=(n(226),n(363)),B=n(364),z=n(365);var F=function(e){return e.showWelcomeScreen?Object(f.jsx)("div",{className:"WelcomeScreen",children:Object(f.jsxs)(M.a,{children:[Object(f.jsx)(B.a,{children:Object(f.jsxs)(z.a,{children:[Object(f.jsx)("h1",{children:"Welcome to the Meet app"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"})]})}),Object(f.jsx)(B.a,{children:Object(f.jsx)(z.a,{children:Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:"Sign in with google"})]})})})}),Object(f.jsx)(B.a,{children:Object(f.jsx)("a",{href:"https://kittekat14.github.io/meet-app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})})]})}):null},R=n(366),q=n(370),U=n(371),H=n(189),_=n(190),P=n(81),G=n(194),Y=n(18),V=n(373),K=n(184),X=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(Y.a)(n,2),o=r[0],s=r[1],i=["React","JavaScript","Node","jQuery","AngularJS"];return Object(a.useEffect)((function(){s((function(){return function(){var e=i.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e.filter((function(e){return e.value}))}()}))}),[t]),Object(f.jsx)("div",{children:Object(f.jsx)(R.a,{height:400,children:Object(f.jsx)(V.a,{width:400,height:400,children:Object(f.jsx)(K.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})})},Q=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).updateEvents=function(e,t){J().then((function(n){var r=("all"===e?n:n.filter((function(t){return t.location===e}))).slice(0,t);a.setState({events:r,currentLocation:e})}))},a.updateEventNumber=function(e){a.setState({numberOfEvents:e}),a.updateEvents(a.state.currentLocation,a.state.numberOfEvents)},a.getData=function(){var e=a.state,t=e.locations,n=e.events;return t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},a.state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",showWelcomeScreen:void 0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("access_token"),e.next=3,D(t);case 3:if(!e.sent.error){e.next=7;break}e.t0=!1,e.next=8;break;case 7:e.t0=!0;case 8:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&J().then((function(e){o.setState({events:e,locations:C(e)})}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("img",{src:A,alt:"Logo",width:"250"}),Object(f.jsx)(x,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(X,{events:this.state.events}),Object(f.jsx)(R.a,{height:400,className:"scattered-chart",children:Object(f.jsxs)(q.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(f.jsx)(U.a,{}),Object(f.jsx)(H.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(_.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(f.jsx)(P.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(G.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(f.jsx)(w,{events:this.state.events}),Object(f.jsx)(O,{numberOfEvents:this.state.numberOfEvents,updateEventNumber:function(t){return e.updateEventNumber(t)}}),Object(f.jsx)(F,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){return Z()}})]})}}]),n}(a.Component),$=Q,ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,374)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(191).config("8616c2112d0e4b399b938fe9cb63e9b3").install(),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ne()}},[[361,1,2]]]);
//# sourceMappingURL=main.814b48dc.chunk.js.map