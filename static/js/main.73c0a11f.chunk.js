(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(9),r=n.n(c),s=(n(23),n(10)),l=n(11),i=n(15),u=n(12),p=n(16),d=n(13),m=n.n(d),h=(n(25),"https://192.168.1.4:8989:5001"),f=n(14),v=n.n(f),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).sendLocalRequest=function(){v.a.get(h+"/api/values").then(function(e){n.setState({resp:e})}).catch(function(e){alert("Error")})},n.state={resp:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("div",{className:"App-link",onClick:this.sendLocalRequest},"Learn React"),o.a.createElement("h1",{className:"responce"},this.state.resp)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.73c0a11f.chunk.js.map