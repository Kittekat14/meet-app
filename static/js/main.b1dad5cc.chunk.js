(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(22),o=n.n(s),i=(n(28),n(3)),c=n(4),u=n(6),l=n(5),d=(n(29),n(30),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).detailsHandler=function(e){a.setState({show:!a.state.show})},a.state={show:!0},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h3",{children:t.summary}),this.state.show&&Object(d.jsxs)("div",{className:"summary",children:[Object(d.jsx)("p",{className:"name",children:t.summary}),Object(d.jsx)("p",{className:"startTime",children:t.start.dateTime}),Object(d.jsx)("p",{className:"endTime",children:t.end.dateTime}),Object(d.jsx)("p",{className:"location",children:t.location})]}),!this.state.show&&Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("p",{className:"name",children:t.summary}),Object(d.jsx)("p",{className:"startTime",children:t.start.dateTime}),Object(d.jsx)("p",{className:"endTime",children:t.end.dateTime}),Object(d.jsx)("p",{className:"timeZone",children:t.start.timeZone}),Object(d.jsx)("p",{className:"location",children:t.location}),Object(d.jsx)("p",{className:"decription",children:t.description}),Object(d.jsx)("p",{className:"organizerEmail",children:t.organizer.email}),Object(d.jsx)("p",{className:"status",children:t.status})]}),Object(d.jsx)("button",{type:"button",onClick:function(t){return e.detailsHandler(t)},className:"showDetailsButton",children:this.state.show&&"Show Details"}),Object(d.jsx)("button",{type:"button",onClick:function(t){return e.detailsHandler(t)},className:"hideDetailsButton",children:!this.state.show&&"Hide Details"})]})}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),p=h,f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value,n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));a.setState({query:t,suggestions:n})},a.handleItemClicked=function(e){a.setState({query:e,showSuggestions:!1}),a.props.updateEvents(e)},a.state={query:"",suggestions:[],showSuggestions:void 0},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){var t=e.target.value;isNaN(t)||t<1?a.setState({eventCounter:"",infoText:"Please write a number"}):a.setState({eventCounter:t,infoText:""})},a.state={eventCounter:32,infoText:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.eventCounter,n=e.infoText;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"numberOfEventsInput",children:[" Number of Events on Page:",Object(d.jsx)("input",{id:"numberOfEventsInput",type:"number",className:"numberInput",value:t,onChange:this.handleInputChange})]}),Object(d.jsx)("p",{className:"infoText",children:n})]})}}]),n}(a.Component),j=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-25T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-26T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-27T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],b=j=JSON.parse(JSON.stringify(j)),g=n(7),w=n.n(g),x=n(8),y=n(23),O=n(13),k=n.n(O),T=n(11),S=n.n(T),Z=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},N=function(){var e=Object(x.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(x.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(x.a)(w.a.mark((function e(){var t,n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return S.a.done(),e.abrupt("return",b);case 4:return e.next=7,E();case 7:if(!(t=e.sent)){e.next=17;break}return C(),n="https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=13,k.a.get(n);case 13:return(a=e.sent).data&&(r=Z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),S.a.done(),e.abrupt("return",a.data.events);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(w.a.mark((function e(){var t,n,a,r,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://vpdug6jj84.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).updateEvents=function(e){q().then((function(t){var n="all"===e?t:t.filter((function(t){return t.location===e}));a.setState({events:n})}))},a.state={events:b,locations:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,q().then((function(t){e.mounted&&e.setState({events:t,locations:Z(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(p,{events:this.state.events}),Object(d.jsx)(v,{})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),W()}},[[51,1,2]]]);
//# sourceMappingURL=main.b1dad5cc.chunk.js.map