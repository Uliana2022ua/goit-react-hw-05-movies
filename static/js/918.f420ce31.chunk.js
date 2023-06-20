"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[918],{3918:function(n,e,t){t.r(e),t.d(e,{Icon:function(){return $},Image:function(){return T},Item:function(){return R},LinkBack:function(){return B},Paragraph:function(){return z},SubTitle:function(){return S},Title:function(){return C},Votes:function(){return I},default:function(){return U}});var r,i,o,c,a,u,s,h,d=t(5861),p=t(9439),f=t(4687),l=t.n(f),m=t(2791),g=t(7689),x=t(7596),b=t(9630),k=t(4476),v=t(7822),j=t(164),Z=t(670),w=t(168),_=t(82),y=t(1087),P=t(8494),T=_.ZP.img(r||(r=(0,w.Z)(["\n  border-radius: ",";\n  width: 500px;\n  height: auto;\n"])),(function(n){return n.theme.radii.textBlock})),C=_.ZP.h2(i||(i=(0,w.Z)(["\n  margin-bottom: ","px;\n  text-transform: uppercase;\n  color: ","; ;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.title})),S=_.ZP.h3(o||(o=(0,w.Z)(["\n  margin-bottom: ","px;\n  margin-right: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.subTitle})),z=_.ZP.p(c||(c=(0,w.Z)(["\n  margin-bottom: ","px;\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.subTitle}),(function(n){return n.theme.fontSizes.text})),I=_.ZP.span(a||(a=(0,w.Z)(["\n  display: inline-block;\n  margin-left: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  font-size: ",";\n  font-weight: bold;\n  color: white;\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.title}),(function(n){return n.theme.radii.primary}),(function(n){return n.theme.colors.bgDark})),R=_.ZP.li(u||(u=(0,w.Z)(["\n  margin-bottom: ","px;\n  text-align: right;\n"])),(function(n){return n.theme.space[4]})),B=(0,_.ZP)(y.OL)(s||(s=(0,w.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  padding: ","px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]})),$=(0,_.ZP)(P.AHc)(h||(h=(0,w.Z)(["\n  width: ",";\n  height: ",";\n  color: ",";\n"])),(function(n){return n.theme.sizes.backIcon}),(function(n){return n.theme.sizes.backIcon}),(function(n){return n.theme.colors.bgDark})),A=t(184),D=0,L=1,H=2,O=3,U=function(){var n=(0,g.TH)(),e=(0,m.useRef)(),t=(0,g.UO)().movieId,r=(0,m.useState)(null),i=(0,p.Z)(r,2),o=i[0],c=i[1],a=(0,m.useState)(D),u=(0,p.Z)(a,2),s=u[0],h=u[1];if(e.current||(e.current=n.state?n.state.from:"/"),(0,m.useEffect)((function(){var n=new AbortController,e=n.signal;function r(){return(r=(0,d.Z)(l().mark((function n(){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(L),n.next=4,(0,b.TP)({id:t,signal:e});case 4:r=n.sent,c(r),h(H),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),h(O),(0,x.Am)(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){n.abort()}}),[t]),o){var f=[];o.genres&&(f=o.genres.map((function(n){return n.name})).join(", "));var w=o.poster_path,_=o.title,y=o.vote_average,P=o.overview;return(0,A.jsx)(k.x,{backgroundColor:"bgMain",minHeight:"100vh",as:"main",children:(0,A.jsxs)(k.x,{width:"container",marginLeft:"auto",marginRight:"auto",paddingTop:5,paddingBottom:5,paddingLeft:3,paddingRight:3,children:[s===L&&(0,A.jsx)(v.Z,{}),(0,A.jsx)(B,{to:e.current,children:(0,A.jsx)($,{})}),(0,A.jsxs)(k.x,{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:6,children:[(0,A.jsx)(T,{src:"https://image.tmdb.org/t/p/w500"+w,alt:"Poster ".concat(_)}),(0,A.jsxs)(k.x,{borderRadius:"textBlock",backgroundColor:"bgAccent",padding:6,children:[(0,A.jsx)(C,{children:_}),(0,A.jsxs)(S,{children:["User score:",(0,A.jsx)(I,{children:y.toFixed(1)})]}),(0,A.jsx)(S,{children:"Genres:"}),(0,A.jsx)(z,{children:f}),(0,A.jsx)(S,{children:"Overview"}),(0,A.jsx)(z,{children:P})]}),(0,A.jsx)(k.x,{borderRadius:"textBlock",backgroundColor:"bgDark",padding:6,height:"menu",children:(0,A.jsxs)("ul",{children:[(0,A.jsx)(R,{children:(0,A.jsx)(j.r,{to:"cast",children:"Cast"})}),(0,A.jsx)(R,{children:(0,A.jsx)(j.r,{to:"reviews",children:"Reviews"})})]})}),(0,A.jsx)(m.Suspense,{fallback:(0,A.jsx)(Z.Z,{}),children:(0,A.jsx)(g.j3,{})})]})]})})}}},9630:function(n,e,t){t.d(e,{M1:function(){return p},TP:function(){return d},XT:function(){return h},Jh:function(){return f},Df:function(){return s}});var r=t(5861),i=t(4687),o=t.n(i),c=t(2768);function a(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(o().mark((function n(){var e,t,r,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function s(){return a("".concat(c._n,"/trending/movie/day?api_key=").concat(c.$h))}function h(n){return a("".concat(c._n,"/search/movie?query=").concat(n,"&api_key=").concat(c.$h,"&language=en-US&page=1&include_adult=false"))}function d(n){return a("".concat(c._n,"/movie/").concat(n,"?api_key=").concat(c.$h))}function p(n){return a("".concat(c._n,"/movie/").concat(n,"/credits?api_key=").concat(c.$h))}function f(n){return a("".concat(c._n,"/movie/").concat(n,"/reviews?api_key=").concat(c.$h,"&page=1"))}}}]);
//# sourceMappingURL=918.f420ce31.chunk.js.map