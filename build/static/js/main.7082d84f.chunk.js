(this.webpackJsonpclickpoints=this.webpackJsonpclickpoints||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/button.59b7af70.png"},32:function(e,t,n){e.exports=n.p+"static/media/win.02f1227a.mp3"},39:function(e,t,n){e.exports=n(78)},44:function(e,t,n){},73:function(e,t){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(29),i=n.n(c),s=(n(44),n(3)),l=n(30),r=n.n(l),u=n(31),p=n.n(u)()("/clickpoints"),m=function(e,t){var n=e.setShowWinMsg,a=e.setWinPoints,o=e.points,c=e.setPoints,i=e.setNextWin,s=e.setShowNextWin;p.emit("click"),p.on("nextWin",(function(e){i(e.nextWin),s(!0),setTimeout((function(){s(!1)}),1e3)})),p.on("win",(function(e){t(),console.log("You won ".concat(e.points," points!")),c(o-1+e.points),a(e.points),n(!0),setTimeout((function(){n(!1)}),1e3)}))},f=n(32),d=n.n(f),b=function(e){var t=function(){document.getElementsByClassName("audio-element")[0].play()};return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:r.a,className:"App-button",alt:"button",onClick:function(){m(e,t),e.points>0?e.setPoints(e.points-1):alert("Cannot click, you are out of points.")}}),o.a.createElement("audio",{className:"audio-element"},o.a.createElement("source",{src:d.a})))},E=(n(76),n(33));function w(){var e=Object(E.a)(["\n  color: yellow;\n  border: 1px solid yellow;\n  padding: 15px;\n  border-radius: 15px;\n  margin: 0 auto;\n"]);return w=function(){return e},e}var x=n(34).a.div(w()),y=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{style:e.style},o.a.createElement("div",null,e.content)))},g=function(){var e=Object(a.useState)(20),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),r=l[0],u=l[1],p=Object(a.useState)(!1),m=Object(s.a)(p,2),f=m[0],d=m[1],E=Object(a.useState)(0),w=Object(s.a)(E,2),x=w[0],g=w[1],j=Object(a.useState)(0),N=Object(s.a)(j,2),O=N[0],h=N[1],k={opacity:0},v={opacity:100};return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,r?o.a.createElement(y,{style:v,content:"You won ".concat(x," points!")}):o.a.createElement(y,{style:k,content:"You won ".concat(x," points!")})),o.a.createElement("p",null,"Press the button !"),o.a.createElement("p",null,"Your points: ",n),f?o.a.createElement("p",{style:v},"Next win: ",O," clicks"):o.a.createElement("p",{style:k},"Next win: ",O," clicks"),o.a.createElement(b,{points:n,setPoints:c,setWinPoints:g,setShowWinMsg:u,setShowNextWin:d,setNextWin:h})))};i.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7082d84f.chunk.js.map