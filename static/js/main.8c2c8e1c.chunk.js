(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(30),s=n.n(o),i=(n(37),n(8)),c=n.n(i),l=n(11),u=n(2),d=n(7),h=n(4),m=n(3),f=(n(39),n(40),n(0)),p=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).detailsHandler=function(e){a.setState({show:!a.state.show})},a.state={show:!0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h3",{children:t.summary}),this.state.show&&Object(f.jsxs)("div",{className:"summary",children:[Object(f.jsx)("p",{className:"name",children:t.summary}),Object(f.jsxs)("p",{className:"startTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"From:"}),new Date(t.start.dateTime).toString().slice(4,21)," (",t.start.timeZone,")"]}),Object(f.jsxs)("p",{className:"endTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"To:"}),new Date(t.end.dateTime).toString().slice(4,21)," (",t.end.timeZone,")"]}),Object(f.jsx)("p",{className:"location",children:t.location})]}),!this.state.show&&Object(f.jsxs)("div",{className:"details",children:[Object(f.jsx)("p",{className:"name",children:t.summary}),Object(f.jsxs)("p",{className:"startTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"From:"}),new Date(t.start.dateTime).toString().slice(4,21)," (",t.start.timeZone,")"]}),Object(f.jsxs)("p",{className:"endTime",children:[Object(f.jsx)("span",{className:"timeLabel",children:"To:"}),new Date(t.end.dateTime).toString().slice(4,21)," (",t.end.timeZone,")"]}),Object(f.jsx)("p",{className:"location",children:t.location}),Object(f.jsx)("p",{className:"decription",children:t.description}),Object(f.jsxs)("p",{className:"organizerEmail",children:["@",t.organizer.email]}),Object(f.jsx)("p",{className:"status",children:t.status})]}),this.state.show&&Object(f.jsx)("button",{type:"button",onClick:function(t){return e.detailsHandler(t)},className:"showDetailsButton button",children:"Show Details"}),!this.state.show&&Object(f.jsx)("button",{type:"button",onClick:function(t){return e.detailsHandler(t)},className:"hideDetailsButton button",children:"Hide Details"})]})}}]),n}(a.Component),b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,backgroundColor:a.backgroundColor,fontSize:a.fontSize,fontWeight:a.fontWeight,maxWidth:a.maxWidth,margin:a.margin}},a.color=null,a.backgroundColor=null,a.fontSize=null,a.fontWeight=null,a.maxWidth=null,a.margin=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.backgroundColor="#cdcdcd",a.fontSize="14px",a.fontWeight="500",a.maxWidth="600px",a.margin="0 auto",a.fontStyle="italic",a}return n}(b),j=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.backgroundColor="#fff",a.fontSize="16px",a.fontWeight="700",a.margin="0 auto",a}return n}(b),v=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#f3f72f",a.backgroundColor="#000",a.fontSize="16px",a.fontWeight="700",a}return n}(b),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={warningText:"This event list was cached and you're currently offline."},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsxs)("div",{children:[navigator.onLine?null:Object(f.jsx)(v,{text:this.state.warningText}),Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(p,{event:e})},e.id)}))})]})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value;a.setState({showSuggestions:!0});var n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));if(0!==n.length)return a.setState({query:t,suggestions:n,showSuggestions:!1,infoText:""});a.setState({query:t,infoText:"We can not find the city you are looking for. Please try another city"})},a.handleItemClicked=function(e){a.setState({query:e,suggestions:[],showSuggestions:!1,infoText:""}),a.props.updateEvents(e)},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{className:"infoAlert",text:this.state.infoText}),Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)("input",{type:"text",placeholder:"Find Events in your City",className:"city",value:this.state.query,onChange:function(t){return e.handleInputChanged(t)},onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})]})}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value;return a.props.updateEventNumber(t),isNaN(t)||t<=0?a.setState({errorText:"Please write a number bigger than 0"}):t>32?a.setState({errorText:"Please select a number from 1 to 32"}):a.setState({numberOfEvents:t,errorText:""})},a.state={errorText:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"EventNumberComponent",children:[Object(f.jsxs)("label",{htmlFor:"numberOfEventsInput",children:[" Number of Events on Page:",Object(f.jsx)("input",{id:"numberOfEventsInput",type:"number",className:"numberInput",value:this.props.numberOfEvents,onChange:function(t){return e.handleInputChanged(t)}})]}),Object(f.jsx)(j,{className:"errorAlert",text:this.state.errorText})]})}}]),n}(a.Component),k=n(32),y=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-25T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-26T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-27T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=y=JSON.parse(JSON.stringify(y)),T=n(20),N=n.n(T),W=n(14),Z=n.n(W),C=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},E=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,N.a.get("https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&L(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=10;break}return e.next=7,localStorage.getItem("lastEvents");case 7:return t=e.sent,Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=12,E();case 12:if(!(n=e.sent)){e.next=22;break}return q(),a="https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=18,N.a.get(a);case 18:return(r=e.sent).data&&(o=C(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=n.p+"static/media/MEET2.9b07cb60.png",A=(n(59),n(63)),R=n(64),B=n(65);var J=function(e){return e.showWelcomeScreen?Object(f.jsx)("div",{className:"WelcomeScreen",children:Object(f.jsxs)(A.a,{children:[Object(f.jsx)(R.a,{children:Object(f.jsxs)(B.a,{children:[Object(f.jsx)("h1",{children:"Welcome to the Meet app"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"})]})}),Object(f.jsx)(R.a,{children:Object(f.jsx)(B.a,{children:Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:"Sign in with google"})]})})})}),Object(f.jsx)(R.a,{children:Object(f.jsx)("a",{href:"https://kittekat14.github.io/meet-app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})})]})}):null},z=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).updateEvents=function(e,t){M().then((function(n){var r=("all"===e?n:n.filter((function(t){return t.location===e}))).slice(0,t);a.mounted&&a.setState({events:r,currentLocation:e})}))},a.updateEventNumber=function(e){a.setState({numberOfEvents:e}),a.updateEvents(a.state.currentLocation,a.state.numberOfEvents)},a.state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",showWelcomeScreen:void 0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,I(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&M().then((function(e){o.mounted&&o.setState({events:e,locations:C(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("img",{src:D,alt:"Logo",width:"250"}),Object(f.jsx)(x,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(w,{events:this.state.events}),Object(f.jsx)(O,{numberOfEvents:this.state.numberOfEvents,updateEventNumber:function(t){return e.updateEventNumber(t)}}),Object(f.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){return E()}})]})}}]),n}(a.Component),F=z,U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(31).config("8616c2112d0e4b399b938fe9cb63e9b3").install(),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),_()}},[[61,1,2]]]);
//# sourceMappingURL=main.8c2c8e1c.chunk.js.map