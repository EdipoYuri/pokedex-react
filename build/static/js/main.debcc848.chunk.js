(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{26:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(21),o=t.n(c),u=t(2),i=t(3),l=t(14),s=t(1);function p(){var n=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  color: white;\n\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  \n  text-decoration: none;\n  \n  &:hover {\n    background-color: rgba(148, 31, 39, 0.5);\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 100%;\n  height: 50px;\n  background-color: #E12B38;\n  color: #F5F7FA;\n  font-size: 20px;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return f=function(){return n},n}var d=i.a.div(f()),m=Object(i.a)(l.b)(p()),b=function(){return a.a.createElement(d,null,a.a.createElement(m,{to:"/"},"Pok\xe9dex"),a.a.createElement(m,{to:"/about"},"About"))},g=t(6),x=t.n(g),h=t(25),v=t(11),k=t(12);function w(){var n=Object(u.a)(["\n  width: 200px;\n  height: 40px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n\n  border: none;\n  border-radius: 10px;\n\n  background-color: red;\n  box-shadow: 2px 2px 3px black;\n\n  font-weight: bold;\n  font-size: 20px;\n\n  &:hover {\n    color: white;\n    background-color: #851b1b;\n    box-shadow: 3px 3px 4px black;\n  }\n  &:focus {\n    outline: 0;\n  }\n"]);return w=function(){return n},n}function E(){var n=Object(u.a)(["\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return E=function(){return n},n}function y(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return y=function(){return n},n}var j=i.a.div(y()),O=i.a.div(E()),I=i.a.button(w()),A="https://pokeapi.co/api/v2",F=function(){var n=Object(v.a)(x.a.mark((function n(e,t){var r,a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(A,"/").concat(e,"/").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}();function B(){var n=Object(u.a)(["\n  color: white;\n  text-shadow: 2px 2px #000;\n  text-transform: capitalize;\n"]);return B=function(){return n},n}function S(){var n=Object(u.a)(["\n  width: 200px;\n  height: 200px;\n\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n\n  border-radius: 10px;\n  box-shadow: 3px 3px 3px black;\n\n  cursor: pointer;\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n\n  ","\n\n  &:hover {\n    ","\n  }\n\n  @media(max-width: 1024px) {\n    ","\n  }\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n"]);return S=function(){return n},n}var z=function(n){switch(n.type.name){case"bug":return"#A8B820";case"dark":return"#705848";case"dragon":return"#7038F8";case"eletric":return"#F8D030";case"fairy":return"#9B6470";case"fighting":return"#C03028";case"fire":return"#F08030";case"flying":return"#A890F0";case"ghost":return"#493963";case"grass":return"#539665";case"ground":return"#E0C068";case"ice":return"#98D8D8";case"normal":return"#A8A878";case"poison":return"#A040A0";case"psychic":return"#F85888";case"rock":return"#B8A038";case"steel":return"#B8B8D0";case"water":return"#6890F0";default:return"#68A090"}},C=i.a.div(S(),(function(n){return void 0===n.types[1]?"\n        background-color: ".concat(z(n.types[0]),";\n        background-image: url(").concat(n.backImage,");\n      "):"\n        background-image: \n          url(".concat(n.backImage,"), \n          linear-gradient(to right, ").concat(n.types.map((function(n,e){return"".concat(z(n)," 50%")})),");                                \n      ")}),(function(n){return void 0===n.types[1]?"background-image: url(".concat(n.frontImage,");"):"\n          background-image: \n            url(".concat(n.frontImage,"), \n            linear-gradient(to right, ").concat(n.types.map((function(n,e){return"".concat(z(n)," 50%")})),");\n        ")}),(function(n){return void 0===n.types[1]?"\n          background-color: ".concat(z(n.types[0]),";\n          background-image: url(").concat(n.frontImage,");\n        "):"\n          background-image: \n            url(".concat(n.frontImage,"), \n            linear-gradient(to right, ").concat(n.types.map((function(n,e){return"".concat(z(n)," 50%")})),");                                \n        ")})),D=i.a.h2(B()),J=function(n){return a.a.createElement(C,{frontImage:n.frontImage,backImage:n.backImage,types:n.types,onClick:function(){return alert("Em breve :)")}},a.a.createElement(D,null,n.name))},L=function(){var n=Object(r.useState)([]),e=Object(k.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(!0),u=Object(k.a)(o,2),i=u[0],l=u[1],s=Object(r.useState)(1),p=Object(k.a)(s,2),f=p[0],d=p[1],m=Object(r.useState)(1),b=Object(k.a)(m,2),g=b[0],w=b[1];Object(r.useEffect)((function(){E()}),[]);var E=function(){var n=Object(v.a)(x.a.mark((function n(){var e,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w(20*f),d(f+1),n.prev=2,e=x.a.mark((function n(e){var t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F("pokemon","".concat(e));case 2:return t=n.sent,n.next=5,c((function(n){return[].concat(Object(h.a)(n),[t])}));case 5:case"end":return n.stop()}}),n)})),t=g;case 5:if(!(t<=20*f)){n.next=10;break}return n.delegateYield(e(t),"t0",7);case 7:t++,n.next=5;break;case 10:l(!1),n.next=16;break;case 13:n.prev=13,n.t1=n.catch(2),console.error(n.t1);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(j,null,a.a.createElement("h2",null,"Pok\xe9dex"),a.a.createElement(O,null,i?a.a.createElement("div",null,"Loading..."):t.map((function(n,e){return a.a.createElement("div",{key:e},a.a.createElement(J,{name:n.name,frontImage:n.sprites.front_default,backImage:n.sprites.back_default,types:n.types}))}))),a.a.createElement(I,{onClick:function(){return E()}},"Load more"))};function P(){var n=Object(u.a)(["\n  width: 100%;\n"]);return P=function(){return n},n}var _=i.a.div(P()),M=function(){return a.a.createElement(_,null,a.a.createElement("h2",null,"About"))};function Y(){var n=Object(u.a)(["\n  width: 100vw;\n  min-height:100vh;\n  height: 100%;\n  background-color: aliceblue;\n"]);return Y=function(){return n},n}var q=i.a.div(Y());var G=function(){return a.a.createElement(l.a,null,a.a.createElement(q,null,a.a.createElement(b,null),a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/about"},a.a.createElement(M,null)),a.a.createElement(s.a,{exact:!0,path:"/"},a.a.createElement(L,null)))))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.debcc848.chunk.js.map