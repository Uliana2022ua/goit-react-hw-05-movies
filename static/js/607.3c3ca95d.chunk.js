"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[607],{6607:function(e,r,t){t.r(r),t.d(r,{Content:function(){return v},default:function(){return k}});var n,a=t(5861),s=t(9439),i=t(4687),o=t.n(i),u=t(2791),c=t(7689),l=t(7596),p=t(4476),h=t(9630),f=t(7822),d=t(168),v=t(82).ZP.p(n||(n=(0,d.Z)(["\n  text-align: justify;\n"]))),x=t(184),g=0,b=1,m=2,w=3,k=function(){var e=(0,c.UO)().movieId,r=(0,u.useState)(null),t=(0,s.Z)(r,2),n=t[0],i=t[1],d=(0,u.useState)(g),k=(0,s.Z)(d,2),y=k[0],T=k[1];if((0,u.useEffect)((function(){var r=new AbortController,t=r.signal;function n(){return(n=(0,a.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,T(b),r.next=4,(0,h.Jh)({id:e,signal:t});case 4:n=r.sent,i(n),T(m),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),T(w),(0,l.Am)(r.t0.message);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){r.abort()}}),[e]),n)return(0,x.jsxs)(p.x,{borderRadius:"textBlock",backgroundColor:"bgAccent",padding:6,children:[y===b&&(0,x.jsx)(f.Z,{}),0===n.length?(0,x.jsx)("p",{children:"There is no reviews."}):(0,x.jsx)(p.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:6,children:n.map((function(e){var r=e.id,t=e.author,n=e.created_at,a=e.content;return(0,x.jsxs)(p.x,{as:"li",display:"flex",flexDirection:"column",gridGap:3,children:[(0,x.jsx)("h3",{children:t}),(0,x.jsx)("h4",{children:n.slice(0,10)}),(0,x.jsx)(v,{children:a})]},r)}))})]})}},9630:function(e,r,t){t.d(r,{M1:function(){return u},TP:function(){return l},XT:function(){return h},Jh:function(){return d},Df:function(){return x}});var n=t(5861),a=t(4687),s=t.n(a),i=t(1243),o=t(2768);function u(e){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,n=r.signal,e.prev=1,e.next=4,i.Z.get("movie/".concat(t,"/credits"),{signal:n});case 4:if(a=e.sent){e.next=7;break}throw Error("We are sorry! There is no cast information about the movie");case 7:return e.abrupt("return",a.data.cast);case 10:if(e.prev=10,e.t0=e.catch(1),"CanceledError"!==e.t0.name){e.next=14;break}return e.abrupt("return",null);case 14:if(!e.t0.response&&!e.t0.request){e.next=18;break}throw Error("There is no server response. Try later again!");case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,n=r.signal,e.prev=1,e.next=4,i.Z.get("movie/".concat(t),{signal:n});case 4:if(a=e.sent){e.next=7;break}throw Error("We are sorry! There is no detailed information about the movie");case 7:return e.abrupt("return",a.data);case 10:if(e.prev=10,e.t0=e.catch(1),"CanceledError"!==e.t0.name){e.next=14;break}return e.abrupt("return",null);case 14:if(!e.t0.response&&!e.t0.request){e.next=18;break}throw Error("There is no server response. Try later again!");case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(r){var t,n,a,o,u,c,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.page,n=void 0===t?1:t,a=r.search,o=void 0===a?"":a,u=r.signal,c={page:n,query:o},e.prev=2,e.next=5,i.Z.get("search/movie",{params:c,signal:u});case 5:if(0!==(l=e.sent).data.results.length){e.next=8;break}throw Error("There is no any match on your request!");case 8:return e.abrupt("return",l.data.results);case 11:if(e.prev=11,e.t0=e.catch(2),"CanceledError"!==e.t0.name){e.next=15;break}return e.abrupt("return",[]);case 15:if(!e.t0.response&&!e.t0.request){e.next=19;break}throw Error("There is no server response. Try later again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,n=r.signal,e.prev=1,e.next=4,i.Z.get("movie/".concat(t,"/reviews"),{signal:n});case 4:if(a=e.sent){e.next=7;break}throw Error("There is no cast information about the movie");case 7:return e.abrupt("return",a.data.results);case 10:if(e.prev=10,e.t0=e.catch(1),"CanceledError"!==e.t0.name){e.next=14;break}return e.abrupt("return",null);case 14:if(!e.t0.response&&!e.t0.request){e.next=18;break}throw Error("There is no server response. Try later again!");case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(s().mark((function e(r){var t,n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.signal,n=r.page,a={page:void 0===n?1:n},e.prev=2,e.next=5,i.Z.get("trending/movie/day",{params:a,signal:t});case 5:if(0!==(o=e.sent).data.results.length){e.next=8;break}throw Error("There is no any match on your request!");case 8:return e.abrupt("return",o.data.results);case 11:if(e.prev=11,e.t0=e.catch(2),"CanceledError"!==e.t0.name){e.next=15;break}return e.abrupt("return",[]);case 15:if(!e.t0.response&&!e.t0.request){e.next=19;break}throw Error("There is no server response. Try later again!");case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}i.Z.defaults.baseURL=o._n,i.Z.defaults.headers.common.Authorization="Bearer ".concat(o.$h)}}]);
//# sourceMappingURL=607.3c3ca95d.chunk.js.map