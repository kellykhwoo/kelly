(this.webpackJsonptheblog=this.webpackJsonptheblog||[]).push([[5],{156:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(15),a=t(20),i=function(){function n(){Object(r.a)(this,n)}return Object(a.a)(n,[{key:"dateFormatNumber",value:function(n){var e=new Date(n),t=e.getFullYear(),r="0"+e.getMonth(),a="0"+e.getDate();return this.dateFormat("".concat(t).concat(r.slice(-2)).concat(a.slice(-2)))}},{key:"dateFormat",value:function(e){if("number"===typeof e)return this.dateFormatNumber(e);var t=e.slice(0,4),r=e.slice(4,6),a=e.slice(6,8),i="jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dep".split(",").map((function(n){return"".concat(n[0].toUpperCase()).concat(n.slice(1))}));return t===n.THIS_YEAR?"".concat(i[+r-1]," . ").concat(a):"".concat(i[+r-1]," . ").concat(a," . ").concat(t)}}]),n}();i.THIS_YEAR=(new Date).getFullYear().toString();var o=new i},160:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(0),a=t.n(r),i=function(n){var e=n.type;return(a.a.createElement("span",{role:"img","aria-label":e,className:"emoji-".concat(e)}))}},161:function(n,e,t){"use strict";e.a=["bath_tub","first_commit","happy_birthday","hello_me","if_ryan","mac_env","the_9_habits_of_highly_ineffective_programmers","the_best_engineering_advice_I_ever_got","utterances","video_cam"].reduce((function(n,e){return n[e]=function(){return t(162)("./".concat(e,".jsx"))},n}),{})},162:function(n,e,t){var r={"./bath_tub.jsx":[166,12],"./first_commit.jsx":[167,13],"./happy_birthday.jsx":[168,14],"./hello_me.jsx":[169,15],"./if_ryan.jsx":[174,16],"./mac_env.jsx":[170,7],"./the_9_habits_of_highly_ineffective_programmers.jsx":[159,10],"./the_best_engineering_advice_I_ever_got.jsx":[171,11],"./utterances.jsx":[172,8],"./video_cam.jsx":[173,9]};function a(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],a=e[0];return t.e(e[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=162,n.exports=a},163:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(23),a=t(0),i=t.n(a),o=t(42),c=function(n){var e=n.loader,t=n.children,c=n.name,u=Object(a.useState)(null),l=Object(r.a)(u,2),m=l[0],f=l[1];if(Object(a.useEffect)((function(){var n=!0;return f(null),e().then((function(e){n&&f({component:e.default})}),(function(e){n&&f("failed")})),function(){n=!1}}),[e]),"failed"===m)return null;if(null===m||!m.component)return i.a.createElement(o.a,null);var s=m.component.summaryInfo;return s?t({summary:s,Comp:m.component,name:c}):null}},164:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(2);function a(){var n=Object(r.a)(["\n  text-align: center;\n  margin: 5rem auto;\n  padding: 1rem;\n  max-width: 400px;\n  font-size: 2rem;\n"]);return a=function(){return n},n}var i=t(1).d.div(a())},179:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(6),o=t(2),c=t(1),u=t(5),l=t(156),m=t(41);function f(){var n=Object(o.a)(["\n  display: block;\n  flex: 0;\n  white-space: nowrap;\n"]);return f=function(){return n},n}function s(){var n=Object(o.a)(["\n  padding: 0 1rem;\n  font-size: 1.2rem;\n  display: block;\n  color: ",";\n  margin-right: 5px;\n  border-radius: 3px;\n  font-style: normal;\n  text-transform: capitalize;\n  flex: 1;\n"]);return s=function(){return n},n}function d(){var n=Object(o.a)(["\n  font-size: 1.2rem;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  border-left: 2px solid ",";\n  color: ",";\n  margin: 0 5px 10px 0;\n"]);return d=function(){return n},n}function p(){var n=Object(o.a)(["\n  font-size: 1.8rem;\n  font-weight: 600;\n  letter-spacing: 0;\n  ","\n"]);return p=function(){return n},n}function g(){var n=Object(o.a)(["\n  position: relative;\n  padding: 1.5rem 5px;\n"]);return g=function(){return n},n}function h(){var n=Object(o.a)(["\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 300px;\n  width: 100%;\n  box-shadow: inset 0 0 0 1px ",";\n"]);return h=function(){return n},n}function x(){var n=Object(o.a)(["\n  text-align: left;\n  position: relative;\n  border-radius: 5px;\n  transition: transform 0.3s ease-in-out;\n  padding: 10px 10px 0;\n  &:hover {\n    box-shadow: 0 2px 8px 1px ",";\n  }\n  &:focus {\n    outline: 2px solid ",";\n  }\n  cursor: pointer;\n"]);return x=function(){return n},n}var b=c.d.div(x(),(function(n){var e=n.theme;return Object(u.i)(e.color.light,.8)}),(function(n){return n.theme.color.light})),v=c.d.span(h(),(function(n){var e=n.theme;return Object(u.i)(e.color.light,.4)})),j=c.d.div(g()),y=c.d.h4(p(),u.f.ellipsis(2,1.4,!0)),E=c.d.div(d(),(function(n){return n.theme.color.sub}),(function(n){return n.theme.color.asideText})),O=c.d.em(s(),(function(n){return n.theme.color.sub})),w=c.d.time(f()),_=function(n){var e=n.item,t=Object(i.g)();return a.a.createElement(b,{role:"link",tabIndex:0,"aria-label":"Jump to read article: ".concat(e.title),onClick:function(){return t.push("/view/".concat(e.fileName))}},a.a.createElement(v,{style:m.a.getBackgroundWithDefaultImage(e.imageUrl)}),a.a.createElement(j,null,a.a.createElement(E,null,a.a.createElement(O,null,e.tags[0]),a.a.createElement(w,null,l.a.dateFormat(e.time))),a.a.createElement(y,null,e.title)))};function k(){var n=Object(o.a)(["\n  width: 240px;\n  max-width: 100%;\n  margin: 0 3px 2rem;\n"]);return k=function(){return n},n}function z(){var n=Object(o.a)(["\n  width: 100%;\n  max-width: 1024px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5rem;\n  padding: 0 20px;\n"]);return z=function(){return n},n}var N=c.d.ul(z()),C=c.d.li(k()),F=function(n){var e=n.list;return(a.a.createElement(N,null,e.map((function(n){return a.a.createElement(C,{key:n.title.toString()},a.a.createElement(_,{item:n}))}))))};function I(){var n=Object(o.a)(["\n  margin: 1rem 0 0.5rem;\n  font-size: 1.2rem;\n  color: ",";\n  letter-spacing: 0.5px;\n  word-spacing: -2px;\n  "," {\n    margin-top: 0;\n  }\n"]);return I=function(){return n},n}function T(){var n=Object(o.a)(["\n  display: inline-block;\n  font-size: 1.5rem;\n  font-style: normal;\n  text-transform: capitalize;\n  font-family: ",";\n  padding: 1px 2px;\n  margin: -2px 3px 5px;\n  letter-spacing: 0.5px;\n  color: ",";\n  text-decoration: underline ",";\n  word-spacing: -3px;\n  &::before {\n    content: '#';\n    font-family: ",";\n    color: ",";\n    margin-right: 2px;\n    padding: 0 2px;\n    font-family: ",";\n    display: inline-block;\n    border-radius: 0.5em 0 0.5em 0;\n    line-height: 0.7;\n    border: 1px solid ",";\n  }\n  &:first-child {\n    margin-left: 0;\n  }\n"]);return T=function(){return n},n}function S(){var n=Object(o.a)(["\n  font-size: 1.4rem;\n  white-space: nowrap;\n  overflow: hidden;\n  color: ",";\n  "," {\n    display: none;\n  }\n"]);return S=function(){return n},n}function M(){var n=Object(o.a)(["\n  font-size: 1.7rem;\n  font-weight: normal;\n  color: ",";\n  ","\n  overflow: hidden;\n  position: relative;\n  letter-spacing: 1px;\n"]);return M=function(){return n},n}function D(){var n=Object(o.a)(["\n  margin-bottom: 1rem;\n  font-size: 2.5rem;\n  font-weight: 600;\n  color: ",";\n  font-family: ",";\n  ","\n  "," {\n    font-size: 1.8rem;\n    margin-bottom: 0.5em;\n  }\n  "," {\n    margin-bottom: 1rem;\n    ","\n  }\n"]);return D=function(){return n},n}function U(){var n=Object(o.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  flex: 1;\n"]);return U=function(){return n},n}function Y(){var n=Object(o.a)(["\n  & > cite {\n    display: flex;\n    font-size: 3.5rem;\n    position: absolute;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(\n      ","\n    );\n    color: rgba(255, 255, 255, 0.8);\n    "," {\n      font-size: 2rem;\n    }\n  }\n"]);return Y=function(){return n},n}function J(){var n=Object(o.a)(["\n  display: block;\n  position: relative;\n  border: 1px solid ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  font-size: 1.5rem;\n  height: 10em;\n  width: 13em;\n  margin: 0 0 0 1em;\n  flex: 0 0 auto;\n  box-shadow: inset 0 -5px 20px 1px rgba(0, 0, 0, 0.125);\n  "," {\n    width: 9em;\n    height: 8em;\n    font-size: 1.5rem;\n  }\n  "," {\n    width: 6em;\n    height: 6em;\n  }\n"]);return J=function(){return n},n}function W(){var n=Object(o.a)(["\n  padding: 12px 12px 12px 15px;\n  text-align: left;\n  position: relative;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  outline: none;\n  cursor: pointer;\n  &:hover {\n    h4 {\n      text-decoration: underline;\n    }\n  }\n"]);return W=function(){return n},n}var L=c.d.div(W()),A=c.d.div(J(),(function(n){var e=n.theme;return Object(u.i)(e.color.light,.3)}),u.d.max(u.h.m.max),u.d.max(u.h.s.max)),B=Object(c.d)(A)(Y(),(function(n){var e=n.theme;return"".concat(e.color.pastelGreen,", ").concat(e.color.point,", ").concat(e.color.main)}),u.d.max(u.h.m.max)),H=c.d.div(U()),P=c.d.h4(D(),(function(n){return n.theme.color.main}),u.c.code,u.f.ellipsis(2,1.2),u.d.max(u.h.m.max),u.d.max(u.h.sx.max),u.f.ellipsis(1,1.2)),R=c.d.p(M(),(function(n){return n.theme.color.subText}),u.f.ellipsis(2,1.4,!0)),G=c.d.div(S(),(function(n){return n.theme.color.asideText}),u.d.max(u.h.sx.max)),q=c.d.em(T(),u.c.code,(function(n){return n.theme.color.subText}),(function(n){return n.theme.color.sub}),u.c.basic,(function(n){return n.theme.color.sub}),u.c.code,(function(n){return n.theme.color.sub})),K=c.d.div(I(),(function(n){return n.theme.color.asideText}),u.d.max(u.h.s.max)),Q=function(n){var e=n.item,t=Object(i.g)();return a.a.createElement(L,{role:"link",tabIndex:0,"aria-label":"Jump to read article: ".concat(e.title),onClick:function(){return t.push("/view/".concat(e.fileName))}},e.imageName?a.a.createElement(B,null,a.a.createElement("cite",null,e.imageName)):a.a.createElement(A,{style:m.a.getBackgroundWithDefaultImage(e.imageUrl)}),a.a.createElement(H,null,a.a.createElement(G,null,e.tags.map((function(n){return a.a.createElement(q,{key:n},n)}))),a.a.createElement(P,null,e.title),a.a.createElement(R,null,e.desc),a.a.createElement(K,null,a.a.createElement("time",null,l.a.dateFormat(e.time)))))};function V(){var n=Object(o.a)(["\n  "," {\n    padding: 1rem 0rem;\n  }\n  &:hover {\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n  }\n  margin: 3rem 0;\n"]);return V=function(){return n},n}function X(){var n=Object(o.a)(["\n  margin: 2rem auto 5rem;\n  max-width: ","px;\n  "," {\n    margin: 0 auto;\n  }\n"]);return X=function(){return n},n}var Z=c.d.ul(X(),u.e.contentMaxWidth-40,u.d.max(u.h.m.max)),$=c.d.li(V(),u.d.max(u.h.m.max)),nn=function(n){var e=n.list;return(a.a.createElement(Z,null,e.map((function(n){return a.a.createElement($,{key:n.title.toString()},a.a.createElement(Q,{item:n}))}))))},en=t(163),tn=t(161);function rn(){var n=Object(o.a)(["\n  margin-left: 5px;\n  font-size: 3rem;\n"]);return rn=function(){return n},n}function an(){var n=Object(o.a)(["\n  font-size: 1.4rem;\n  font-style: normal;\n  text-transform: capitalize;\n  color: ",";\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(o.a)(["\n  margin-top: 4rem;\n  & > dd {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    flex-direction: row;\n    font-size: 1.4rem;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(o.a)(["\n  margin-bottom: 2rem;\n  font-size: 1.8rem;\n  line-height: 1.75;\n  font-weight: normal;\n  color: ",";\n"]);return cn=function(){return n},n}function un(){var n=Object(o.a)(["\n  padding: 3px 0 2rem;\n  font-size: 3rem;\n  display: block;\n  font-weight: 600;\n  color: ",";\n"]);return un=function(){return n},n}function ln(){var n=Object(o.a)(["\n  font-size: 1.8rem;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  line-height: 1.4;\n  margin-bottom: 1em;\n  border-left: 5px solid currentColor;\n  padding: 0 0 0 1rem;\n  margin-left: -1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: ",";\n"]);return ln=function(){return n},n}function mn(){var n=Object(o.a)(["\n  text-align: left;\n  position: relative;\n"]);return mn=function(){return n},n}var fn=c.d.div(mn()),sn=c.d.div(ln(),(function(n){return n.theme.color.sub})),dn=c.d.div(un(),(function(n){return n.theme.color.main})),pn=c.d.div(cn(),(function(n){return n.theme.color.asideText})),gn=c.d.dl(on()),hn=c.d.em(an(),(function(n){return n.theme.color.sub})),xn=c.d.span(rn()),bn=function(n){var e=n.summary,t=n.Comp;return(a.a.createElement(fn,null,a.a.createElement(sn,null,l.a.dateFormat(e.time),e.emoji&&a.a.createElement(xn,{className:"emoji-"+e.emoji})),a.a.createElement(dn,null,e.title),a.a.createElement(pn,null,e.desc),a.a.createElement("div",{className:"editor"},a.a.createElement(t,null)),a.a.createElement(gn,null,a.a.createElement("dt",{className:"off-grid"},"tags"),a.a.createElement("dd",null,e.tags.map((function(n){return a.a.createElement(hn,{key:n},"#",n)}))))))},vn=Object(r.memo)((function(n){var e=n.item.fileName,t=tn.a[e];return t?a.a.createElement(en.a,{loader:t,name:e},bn):null}));vn.displayName="OpenListItem";var jn=t(23);function yn(){var n=Object(o.a)(["\n  border-radius: 3px;\n"]);return yn=function(){return n},n}c.d.button(yn());var En=function(n){var e=n.list,t=n.Comp,i=n.pp,o=e.length,c=(Math.ceil(o/i),Object(r.useState)(1)),u=Object(jn.a)(c,2),l=u[0],m=(u[1],Object(r.useMemo)((function(){var n=(l-1)*i;return e.slice(n,n+i).map((function(n,e){return a.a.createElement(t,{key:e.toString(),item:n})}))}),[i,l,o]));return a.a.createElement("div",{className:"pagination-wrapper"},m)};function On(){var n=Object(o.a)(["\n  & + li {\n    margin-top: 5rem;\n    padding-top: 10rem;\n    border-top: 1px dashed ",";\n  }\n"]);return On=function(){return n},n}function wn(){var n=Object(o.a)(["\n  max-width: ","px;\n  margin: 5rem auto 10rem;\n  padding: 0 2rem;\n"]);return wn=function(){return n},n}var _n=c.d.ul(wn(),Math.min(600,u.e.contentMaxWidth)),kn=c.d.li(On(),(function(n){return n.theme.color.light})),zn=function(n){var e=n.item;return(a.a.createElement(kn,null,a.a.createElement(vn,{item:e})))},Nn=function(n){var e=n.list;return(a.a.createElement(_n,null,a.a.createElement(En,{list:e,pp:3,Comp:zn})))},Cn=t(84),Fn=t(29),In=t(28),Tn=t(164),Sn=t(160),Mn=t(42);t.d(e,"PostListContent",(function(){return Un}));var Dn=function(){return a.a.createElement(Tn.a,null,"Yet no record, See you soon.\xa0",a.a.createElement(Sn.a,{type:"no-list"}))},Un=function(n){var e=n.type,t=Object(Cn.c)(e),r=Object(Fn.b)().menu;if(Object(Cn.b)(e),!t)return a.a.createElement(Mn.a,null);if(!t.length)return a.a.createElement(Dn,null);var i=r.find((function(n){return n.path===e}));switch(i&&i.listType||e){case"card":return a.a.createElement(F,{list:t});case"open":return a.a.createElement(Nn,{list:t});default:return a.a.createElement(nn,{list:t})}};e.default=function(){var n=Object(In.b)().listMatch,e=n&&n.params.type;return e?a.a.createElement(Un,{type:e}):a.a.createElement(i.a,{to:"/landing"})}}}]);