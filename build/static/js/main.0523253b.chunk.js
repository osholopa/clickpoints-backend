(this.webpackJsonpclickpoints=this.webpackJsonpclickpoints||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/button.59b7af70.png"},32:function(e,t,n){e.exports=n.p+"static/media/win.02f1227a.mp3"},40:function(e,t,n){e.exports=n(79)},45:function(e,t,n){},74:function(e,t){},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(29),i=n.n(c),s=(n(45),n(3)),l=n(30),r=n.n(l),u=n(31),p=n.n(u)()("/"),m=function(e,t){var n=e.setShowWinMsg,a=e.setWinPoints,o=e.points,c=e.setPoints,i=e.setNextWin;p.emit("click"),p.on("nextWin",(function(e){i(e.nextWin)})),p.on("win",(function(e){t(),console.log("You won ".concat(e.points," points!")),c(o-1+e.points),a(e.points),n(!0),setTimeout((function(){n(!1)}),1e3)}))},f=n(32),E=n.n(f),d=n(33);n.n(d)()();var b=function(e){var t=function(){document.getElementsByClassName("audio-element")[0].play()};return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:r.a,className:"App-button",alt:"button",onClick:function(){m(e,t),e.points>0?e.setPoints(e.points-1):window.confirm("Oops, you're out of points. Restart game?")&&e.setPoints(20)}}),o.a.createElement("audio",{className:"audio-element"},o.a.createElement("source",{src:E.a})))},g=(n(77),n(34));function w(){var e=Object(g.a)(["\n  color: yellow;\n  border: 1px solid yellow;\n  padding: 15px;\n  border-radius: 15px;\n  margin: 0 auto;\n"]);return w=function(){return e},e}var y=n(35).a.div(w()),k=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{style:e.style},o.a.createElement("div",null,e.content)))},O=function(){var e=Object(a.useState)(20),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),r=l[0],u=l[1],p=Object(a.useState)(0),m=Object(s.a)(p,2),f=m[0],E=m[1],d=Object(a.useState)(0),g=Object(s.a)(d,2),w=g[0],y=g[1];return Object(a.useEffect)((function(){isNaN(parseInt(localStorage.getItem("points")))||c(parseInt(localStorage.getItem("points")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("points",n)}),[n]),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,r?o.a.createElement(k,{style:{opacity:100},content:"You won ".concat(f," points!")}):o.a.createElement(k,{style:{opacity:0},content:"You won ".concat(f," points!")})),o.a.createElement("h1",null,"Clickpoints"),o.a.createElement("p",null,"Multiplayer button click game"),o.a.createElement("p",null,"Press the button !"),o.a.createElement("p",null,"Your points: ",n),o.a.createElement("p",null,"Next win: ",w," clicks"),o.a.createElement(b,{points:n,setPoints:c,setWinPoints:E,setShowWinMsg:u,setNextWin:y}),o.a.createElement("p",null,"10 clicks: 5 points"),o.a.createElement("p",null,"100 clicks: 40 points"),o.a.createElement("p",null,"500 clicks: 250 points")))};i.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0523253b.chunk.js.map