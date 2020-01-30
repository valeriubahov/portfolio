(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,n,t){e.exports=t(85)},45:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(32),l=t.n(o),c=(t(45),t(38)),i=t(14),u=t(13),m=t(15),s=t(2),p=t(3);function f(){var e=Object(s.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return f=function(){return e},e}var d=Object(p.a)(m.SideNav)(f()),E=[{name:"About me",path:"/portfolio"},{name:"Experience",path:"/portfolio/work"},{name:"Projects",path:"/portfolio/projects"},{name:"Eduction",path:"/portfolio/education"}],b=function(){var e=Object(u.f)();return a.a.createElement(d,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},a.a.createElement(m.SideNavItems,null,E.map((function(n){return a.a.createElement(m.SideNavLink,{isActive:"/portfolio"===e.pathname&&"/portfolio"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(8);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return O=function(){return e},e}var x=p.a.div(O(),(function(e){return e.isHome?"flex":"none"})),y=p.a.div(j()),w=p.a.img(g()),k=p.a.a(h()),I=function(e){var n=e.user,t=Object(u.f)();return a.a.createElement(x,{isHome:"/"===t.pathname},a.a.createElement(y,null,a.a.createElement(w,{src:n.basics.picture}),a.a.createElement("div",null,a.a.createElement("h2",null,n.basics.name),a.a.createElement("h4",null,a.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),a.a.createElement("p",null,n.basics.label),a.a.createElement("p",null,"Location ",n.basics.region),a.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a Software Developer"),a.a.createElement("p",null,n.basics.headline))),a.a.createElement("div",null,a.a.createElement(k,{href:"https://drive.google.com/open?id=1959FAnB_5RAOQFvMSWlw6YZ5jl3GtRVP",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",null,"View R\xe9sum\xe9"),a.a.createElement(v.ArrowRight16,null))))},P=t(37),S=t.n(P);function A(){var e=Object(s.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return A=function(){return e},e}function D(){var e=Object(s.a)(["\n  width: 25%;\n"]);return D=function(){return e},e}function F(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return F=function(){return e},e}function N(){var e=Object(s.a)(["\n  height: 48px;\n"]);return N=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: none;\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return R=function(){return e},e}var _=p.a.div(R()),B=p.a.div(N()),C=p.a.div(F()),H=Object(p.a)(i.b)(D()),W=Object(p.a)(S.a)(A()),z=function(){return a.a.createElement(_,null,a.a.createElement(B,null),a.a.createElement(C,null,a.a.createElement(H,{to:"/portfolio"},a.a.createElement(W,{hasIconOnly:!0,renderIcon:v.User32,iconDescription:"About me",tooltipPosition:"bottom"})),a.a.createElement(H,{to:"/work"},a.a.createElement(W,{hasIconOnly:!0,renderIcon:v.Portfolio32,iconDescription:"Experience",tooltipPosition:"bottom"})),a.a.createElement(H,{to:"/projects"},a.a.createElement(W,{hasIconOnly:!0,renderIcon:v.Code32,iconDescription:"Projects",tooltipPosition:"bottom"})),a.a.createElement(H,{to:"/education"},a.a.createElement(W,{hasIconOnly:!0,renderIcon:v.Education32,iconDescription:"Education",tooltipPosition:"bottom"}))))};function J(){var e=Object(s.a)(["\n  min-height: 100vh;\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return J=function(){return e},e}var L=Object(p.a)(m.Content)(J()),M=function(e){var n=e.user,t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,null),a.a.createElement(b,null),a.a.createElement(L,null,a.a.createElement(I,{user:n}),a.a.createElement("div",null,t)))},V=t(10);function G(){var e=Object(s.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return G=function(){return e},e}function Q(){var e=Object(s.a)(["\n  white-space: pre-wrap;\n"]);return Q=function(){return e},e}function T(){var e=Object(s.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return T=function(){return e},e}var U=p.a.h3(T()),Y=p.a.p(Q()),Z=p.a.span(G(),V.a[20],V.a[70],V.a[70]);function $(){var e=Object(s.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return $=function(){return e},e}var q=p.a.li($()),K=function(e){var n=e.user;return a.a.createElement(M,{user:n},a.a.createElement("div",null,a.a.createElement(U,null,"About Me"),a.a.createElement(Y,null,n.basics.summary)),a.a.createElement("div",null,a.a.createElement(U,null,"Skills"),a.a.createElement("div",null,n.skills.map((function(e){return a.a.createElement(Z,{key:e.name},e.name)})))),a.a.createElement("div",null,a.a.createElement(U,null,"Profiles"),a.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return a.a.createElement(q,{key:e.network},0!==n&&" | ",a.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},X=t(27);function ee(){var e=Object(s.a)(["\n  margin-top: 1.2rem;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return te=function(){return e},e}var re=p.a.li(te(),V.b),ae=p.a.h4(ne()),oe=p.a.div(ee()),le=function(e){var n=e.user;return a.a.createElement(M,{user:n},a.a.createElement("div",null,a.a.createElement(U,null,"Projects"),a.a.createElement("ul",null,n.projects.map((function(e,n){return a.a.createElement(re,{key:n},a.a.createElement(ae,null,e.name),a.a.createElement("p",null,e.summary),a.a.createElement(oe,null,[].concat(Object(X.a)(e.languages),Object(X.a)(e.libraries)).map((function(e,n){return a.a.createElement(Z,{key:n},e)}))))})))))};function ce(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return ce=function(){return e},e}function ie(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ie=function(){return e},e}function ue(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ue=function(){return e},e}var me=p.a.li(ue(),V.b),se=p.a.h4(ie()),pe=p.a.p(ce()),fe=function(e){var n=e.user;return a.a.createElement(M,{user:n},a.a.createElement("div",null,a.a.createElement(U,null,"Experience"),a.a.createElement("ul",null,n.work.map((function(e,n){return a.a.createElement(me,{key:n},a.a.createElement(se,null,e.position),a.a.createElement("div",null,a.a.createElement(pe,null,e.company)," ",a.a.createElement("span",null,e.location),a.a.createElement("span",null," \u22c5 "),a.a.createElement("span",null,e.start.month,"/",e.start.year," to  ",e.end.month,"/",e.end.year)),a.a.createElement(Y,null,e.summary))})))))};function de(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return de=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return Ee=function(){return e},e}function be(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return be=function(){return e},e}var ve=p.a.li(be(),V.b),he=p.a.h4(Ee()),ge=p.a.p(de()),je=function(e){var n=e.user;return a.a.createElement(M,{user:n},a.a.createElement("div",null,a.a.createElement(U,null,"Education"),a.a.createElement("ul",null,n.education.map((function(e,n){return a.a.createElement(ve,{key:n},a.a.createElement(he,null,e.position),a.a.createElement("div",null,a.a.createElement(ge,null,e.studyType,", ",e.area)," ",a.a.createElement("span",null," \u22c5 "),a.a.createElement("span",null,e.start.year," to ",e.end.year)),a.a.createElement(Y,null,e.description.replace("\n\n","\n")))})))))},Oe=function(e){var n=e.user;return a.a.createElement(i.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/portfolio"},a.a.createElement(K,{user:n})),a.a.createElement(u.a,{path:"/portfolio/projects"},a.a.createElement(le,{user:n})),a.a.createElement(u.a,{path:"/portfolio/work"},a.a.createElement(fe,{user:n})),a.a.createElement(u.a,{path:"/portfolio/education"},a.a.createElement(je,{user:n}))))};var xe=function(){var e=Object(r.useState)(null),n=Object(c.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/valeriubahov").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),t?a.a.createElement(Oe,{user:t}):a.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.c16bd8cb.chunk.js.map