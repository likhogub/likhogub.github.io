(this.webpackJsonpenroller=this.webpackJsonpenroller||[]).push([[0],{22:function(t,n,e){},23:function(t,n,e){},43:function(t,n,e){"use strict";e.r(n);var c=e(2),o=e.n(c),r=e(16),i=e.n(r),s=(e(22),e(7)),l=e(3),u=(e(23),e(17)),d=e.n(u),a=e(0),b={common:{},commonList:[],mathobes:[],fundam:[],applied:[],inform:[]},f=function(t,n){b.common.hasOwnProperty(t.id)||(b.common[t.id]={id:t.id,score:t.score,shown:!0}),b.common[t.id][n]=t.agree},h=function(t,n,e){d.a.get(function(t){return"https://api.codetabs.com/v1/proxy/?quest=".concat(t)}(t)).then((function(t){!function(t,n,e){Object(l.a)(t.matchAll(/...-...-... ../g)).reduce((function(c,o){var r=o.index-c.index,i=t.slice(c.index+14,c.index+r-200),s=t.slice(c.index+0,c.index+14),u=Object(l.a)(i.matchAll(/(\d)+<\/div>/g)).map((function(t){return parseInt(Object(l.a)(t[0].matchAll(/(\d)+/g))[0][0])})).reduce((function(t,n){return Math.max(t,n)}),0),d=i.match(/(\u0415\u0441\u0442\u044c)|(\u041d\u0435\u0442)/g)[0];return console.log(s,u,d),b[e]=[].concat(Object(l.a)(b[e]),[{id:s,score:u<20?1/0:u,agree:"\u0415\u0441\u0442\u044c"===d}]),n(e),o})),n("OK")}(t.data,e,n)}))},m=function(t){return t?"+":!1===t?"-":""};var j=function(){var t=Object(c.useState)(""),n=Object(s.a)(t,2),e=(n[0],n[1]),o=Object(c.useState)(1),r=Object(s.a)(o,2),i=r[0],u=r[1];Object(c.useEffect)((function(){h("http://ftp.kubsu.ru/ranged/02.03.03_792_ofo_b.html","mathobes",e),h("http://ftp.kubsu.ru/ranged/01.03.02_790_ofo_b.html","applied",e),h("http://ftp.kubsu.ru/ranged/09.03.03_793_ofo_b.html","inform",e),h("http://ftp.kubsu.ru/ranged/02.03.02_788_ofo_b.html","fundam",e)}),[]),b.mathobes.forEach((function(t){return f(t,"mathobes")})),b.fundam.forEach((function(t){return f(t,"fundam")})),b.applied.forEach((function(t){return f(t,"applied")})),b.inform.forEach((function(t){return f(t,"inform")})),Object.entries(b.common).forEach((function(t){b.commonList=[].concat(Object(l.a)(b.commonList),[t[1]])})),b.commonList=Object(l.a)(new Set(b.commonList)),b.commonList.sort((function(t,n){return t.score-n.score})).reverse(),console.log(b);var d={borderCollapse:"collapse",border:"1px solid"},j={borderCollapse:"collapse",border:"1px solid",background:"lightgray"},p=function(t,n){!function(t,n){null===t?b.commonList.forEach((function(t){t.shown=!0})):b.commonList.forEach((function(n){n.shown=void 0!==n[t]})),n(t)}(t,e),u(n)};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("table",{style:d,children:[Object(a.jsx)("td",{style:d,children:"\u2116"}),Object(a.jsx)("td",{style:d,children:"\u0421\u041d\u0418\u041b\u0421"}),Object(a.jsx)("td",{style:1===i?j:d,children:Object(a.jsx)("button",{children:"\u0411\u0410\u041b\u041b\u042b",onClick:function(){return p(null,1)}})}),Object(a.jsx)("td",{style:2===i?j:d,children:Object(a.jsx)("button",{children:"\u041c\u041e\u0410\u0418\u0421",onClick:function(){return p("mathobes",2)}})}),Object(a.jsx)("td",{style:3===i?j:d,children:Object(a.jsx)("button",{children:"\u0424\u0418\u0418\u0422",onClick:function(){return p("fundam",3)}})}),Object(a.jsx)("td",{style:4===i?j:d,children:Object(a.jsx)("button",{children:"\u041f\u041c\u0418",onClick:function(){return p("applied",4)}})}),Object(a.jsx)("td",{style:5===i?j:d,children:Object(a.jsx)("button",{children:"\u041f\u0418",onClick:function(){return p("inform",5)}})}),b.commonList.filter((function(t){return t.shown})).map((function(t,n){return Object(a.jsxs)("tr",{style:d,children:[Object(a.jsx)("td",{style:d,children:n+1}),Object(a.jsx)("td",{style:d,children:t.id}),Object(a.jsx)("td",{style:1===i?j:d,children:t.score}),Object(a.jsx)("td",{style:2===i?j:d,children:m(t.mathobes)}),Object(a.jsx)("td",{style:3===i?j:d,children:m(t.fundam)}),Object(a.jsx)("td",{style:4===i?j:d,children:m(t.applied)}),Object(a.jsx)("td",{style:5===i?j:d,children:m(t.inform)})]})}))]})})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,44)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.7cb87725.chunk.js.map