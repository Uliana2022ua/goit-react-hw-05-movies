"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[918],{3918:function(e,r,n){n.r(r),n.d(r,{Icon:function(){return I},Image:function(){return C},Item:function(){return R},LinkBack:function(){return B},Paragraph:function(){return q},SubTitle:function(){return _},Title:function(){return P},Votes:function(){return z},default:function(){return O}});var t,a,o,i,s,c,u,p,h=n(5861),l=n(9439),f=n(4687),d=n.n(f),m=n(2791),g=n(7689),x=n(7596),b=n(9630),v=n(4476),k=n(7822),w=n(164),Z=n(670),y=n(168),j=n(82),T=n(1087),E=n(8494),C=j.ZP.img(t||(t=(0,y.Z)(["\n  border-radius: ",";\n  width: 500px;\n  height: auto;\n"])),(function(e){return e.theme.radii.textBlock})),P=j.ZP.h2(a||(a=(0,y.Z)(["\n  margin-bottom: ","px;\n  text-transform: uppercase;\n  color: ","; ;\n"])),(function(e){return e.theme.space[5]}),(function(e){return e.theme.colors.title})),_=j.ZP.h3(o||(o=(0,y.Z)(["\n  margin-bottom: ","px;\n  margin-right: ","px;\n  color: ",";\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.colors.subTitle})),q=j.ZP.p(i||(i=(0,y.Z)(["\n  margin-bottom: ","px;\n  color: ",";\n  font-size: ",";\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.colors.subTitle}),(function(e){return e.theme.fontSizes.text})),z=j.ZP.span(s||(s=(0,y.Z)(["\n  display: inline-block;\n  margin-left: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  font-size: ",";\n  font-weight: bold;\n  color: white;\n  border-radius: ",";\n  background-color: ",";\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[2]}),(function(e){return e.theme.fontSizes.title}),(function(e){return e.theme.radii.primary}),(function(e){return e.theme.colors.bgDark})),R=j.ZP.li(c||(c=(0,y.Z)(["\n  margin-bottom: ","px;\n  text-align: right;\n"])),(function(e){return e.theme.space[4]})),B=(0,j.ZP)(T.OL)(u||(u=(0,y.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  padding: ","px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[3]})),I=(0,j.ZP)(E.AHc)(p||(p=(0,y.Z)(["\n  width: ",";\n  height: ",";\n  color: ",";\n"])),(function(e){return e.theme.sizes.backIcon}),(function(e){return e.theme.sizes.backIcon}),(function(e){return e.theme.colors.bgDark})),S=n(184),A=0,L=1,D=2,H=3,O=function(){var e=(0,g.TH)(),r=(0,m.useRef)(),n=(0,g.UO)().movieId,t=(0,m.useState)(null),a=(0,l.Z)(t,2),o=a[0],i=a[1],s=(0,m.useState)(A),c=(0,l.Z)(s,2),u=c[0],p=c[1];if(r.current||(r.current=e.state?e.state.from:"/"),(0,m.useEffect)((function(){var e=new AbortController,r=e.signal;function t(){return(t=(0,h.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(L),e.next=4,(0,b.TP)({id:n,signal:r});case 4:t=e.sent,i(t),p(D),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),p(H),(0,x.Am)(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[n]),o){var f=[];o.genres&&(f=o.genres.map((function(e){return e.name})).join(", "));var y=o.poster_path,j=o.title,T=o.vote_average,E=o.overview;return(0,S.jsx)(v.x,{backgroundColor:"bgMain",minHeight:"100vh",as:"main",children:(0,S.jsxs)(v.x,{width:"container",marginLeft:"auto",marginRight:"auto",paddingTop:5,paddingBottom:5,paddingLeft:3,paddingRight:3,children:[u===L&&(0,S.jsx)(k.Z,{}),(0,S.jsx)(B,{to:r.current,children:(0,S.jsx)(I,{})}),(0,S.jsxs)(v.x,{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:6,children:[(0,S.jsx)(C,{src:"https://image.tmdb.org/t/p/w500"+y,alt:"Poster ".concat(j)}),(0,S.jsxs)(v.x,{borderRadius:"textBlock",backgroundColor:"bgAccent",padding:6,children:[(0,S.jsx)(P,{children:j}),(0,S.jsxs)(_,{children:["User score:",(0,S.jsx)(z,{children:T.toFixed(1)})]}),(0,S.jsx)(_,{children:"Genres:"}),(0,S.jsx)(q,{children:f}),(0,S.jsx)(_,{children:"Overview"}),(0,S.jsx)(q,{children:E})]}),(0,S.jsx)(v.x,{borderRadius:"textBlock",backgroundColor:"bgDark",padding:6,height:"menu",children:(0,S.jsxs)("ul",{children:[(0,S.jsx)(R,{children:(0,S.jsx)(w.r,{to:"cast",children:"Cast"})}),(0,S.jsx)(R,{children:(0,S.jsx)(w.r,{to:"reviews",children:"Reviews"})})]})}),(0,S.jsx)(m.Suspense,{fallback:(0,S.jsx)(Z.Z,{}),children:(0,S.jsx)(g.j3,{})})]})]})})}}},9630:function(e,r,n){n.d(r,{M1:function(){return c},TP:function(){return p},XT:function(){return l},Jh:function(){return d},Df:function(){return g}});var t=n(5861),a=n(4687),o=n.n(a),i=n(1243),s=n(2768);function c(e){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(o().mark((function e(r){var n,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.id,t=r.signal,e.prev=1,e.next=4,i.Z.get("movie/".concat(n,"/credits"),{signal:t});case 4:if(a=e.sent){e.next=7;break}throw Error("We are sorry! There is no cast information about the movie");case 7:return e.abrupt("return",a.data.cast);case 10:if(e.prev=10,e.t0=e.catch(1),"CanceledError"!==e.t0.name){e.next=14;break}return e.abrupt("return",null);case 14:if(!e.t0.response&&!e.t0.request){e.next=18;break}throw Error("There is no server response. Try later again!");case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(o().mark((function e(r){var n,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.id,t=r.signal,e.prev=1,e.next=4,i.Z.get("movie/".concat(n),{signal:t});case 4:if(a=e.sent){e.next=7;break}throw Error("We are sorry! There is no detailed information about the movie");case 7:return e.abrupt("return",a.data);case 10:if(e.prev=10,e.t0=e.catch(1),"CanceledError"!==e.t0.name){e.next=14;break}return e.abrupt("return",null);case 14:if(!e.t0.response&&!e.t0.request){e.next=18;break}throw Error("There is no server response. Try later again!");case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(o().mark((function e(r){var n,t,a,s,c,u,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.page,t=void 0===n?1:n,a=r.search,s=void 0===a?"":a,c=r.signal,u={page:t,query:s},e.prev=2,e.next=5,i.Z.get("search/movie",{params:u,signal:c});case 5:if(0!==(p=e.sent).data.results.length){e.next=8;break}throw Error("There is no any match on your request!");case 8:return e.abrupt("return",p.data.results);case 11:if(e.prev=11,e.t0=e.catch(2),"CanceledError"!==e.t0.name){e.next=15;break}return e.abrupt("return",[]);case 15:if(!e.t0.response&&!e.t0.request){e.next=19;break}throw Error("There is no server response. Try later again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(o().mark((function e(r){var n,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.id,t=r.signal,e.prev=1,e.next=4,i.Z.get("movie/".concat(n,"/reviews"),{signal:t});case 4:if(a=e.sent){e.next=7;break}throw Error("There is no cast information about the movie");case 7:return e.abrupt("return",a.data.results);case 10:if(e.prev=10,e.t0=e.catch(1),"CanceledError"!==e.t0.name){e.next=14;break}return e.abrupt("return",null);case 14:if(!e.t0.response&&!e.t0.request){e.next=18;break}throw Error("There is no server response. Try later again!");case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(o().mark((function e(r){var n,t,a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.signal,t=r.page,a={page:void 0===t?1:t},e.prev=2,e.next=5,i.Z.get("trending/movie/day",{params:a,signal:n});case 5:if(0!==(s=e.sent).data.results.length){e.next=8;break}throw Error("There is no any match on your request!");case 8:return e.abrupt("return",s.data.results);case 11:if(e.prev=11,e.t0=e.catch(2),"CanceledError"!==e.t0.name){e.next=15;break}return e.abrupt("return",[]);case 15:if(!e.t0.response&&!e.t0.request){e.next=19;break}throw Error("There is no server response. Try later again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}i.Z.defaults.baseURL=s._n,i.Z.defaults.headers.common.Authorization="Bearer ".concat(s.$h)}}]);
//# sourceMappingURL=918.a20ad1d4.chunk.js.map