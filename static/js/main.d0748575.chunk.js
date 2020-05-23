(this["webpackJsonpcorona-update"]=this["webpackJsonpcorona-update"]||[]).push([[0],{100:function(e,t,a){e.exports=a(132)},104:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(104),a(63)),i=a.n(l),s=a(81),u=a(10),m=a(21),d=a(169),g=a(174),p=a(133),f=a(194),E=a(187),b=a(44),h=a(88),v=a(195),y=a(172),w=a(28),S=a(173),j=Object(h.a)();j=Object(v.a)(j);var O=Object(d.a)((function(e){var t;return{root:{flexGrow:1,marginTop:e.spacing(5)},paper:(t={padding:e.spacing(2),textAlign:"center",border:0,borderRadius:3,color:e.palette.text.primary},Object(m.a)(t,e.breakpoints.down("xs"),{marginLeft:e.spacing(1),marginRight:e.spacing(1)}),Object(m.a)(t,e.breakpoints.up("xs"),{marginLeft:e.spacing(5),marginRight:e.spacing(5)}),t)}}));function x(e){var t=O();return r.a.createElement(p.a,{className:t.paper,elevation:5},r.a.createElement(y.a,{theme:j},r.a.createElement(S.a,{variant:"h4",gutterBottom:!0},"Covid-19 Update")),r.a.createElement(C,{data:e.data}))}function C(e){O();var t=Object(n.useState)(e.data),a=Object(u.a)(t,2),c=a[0];a[1];function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function l(e,t){return"".concat(o(t),": ").concat(e[t].toLocaleString("en-US"))}function i(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(y.a,{theme:j},r.a.createElement("span",null,r.a.createElement(S.a,null,l(e,t)),r.a.createElement(r.a.Fragment,null,null===a?"":r.a.createElement(r.a.Fragment,null,"new cases"===a?r.a.createElement(S.a,{style:{color:"red"}},"( +".concat(e[a].toLocaleString("en-US")," )")):r.a.createElement(S.a,{style:{color:"#a88532"}},"( +".concat(e[a].toLocaleString("en-US")," )")))))))}return r.a.createElement(g.a,{container:!0,spacing:5},r.a.createElement(r.a.Fragment,null,function(){var e,t=[],a=Object(b.a)(c);try{for(a.s();!(e=a.n()).done;){var n=e.value;"bangladesh"!=n.country.toLowerCase()&&"world"!=n.country.toLowerCase()||t.push(n)}}catch(r){a.e(r)}finally{a.f()}return t}().map((function(e){return r.a.createElement(g.a,{item:!0,xs:12,md:6},r.a.createElement(p.a,{variant:"outlined"},r.a.createElement(g.a,{container:!0,spacing:1},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{title:"see details",placement:"top"},r.a.createElement(w.b,{to:{pathname:"/country/".concat(e.country,"/"),state:{data:e}}},r.a.createElement(y.a,{theme:j},r.a.createElement(S.a,{variant:"h6",gutterBottom:!0},o(e.country)))))),i(e,"total cases","new cases"),i(e,"total deaths","new deaths"),i(e,"total recovered"))))}))))}var k=a(176),L=a(177),N=a(178),T=a(179),A=a(180),F=a(196),U=a(181),R=a(191),B=a(192),I=(a(110),[{id:"country",label:"Country",align:"center"},{id:"total cases",label:"Total cases",align:"right",padding:3,format:function(e){return e.toLocaleString("en-US")}},{id:"new cases",label:"New cases",align:"right",padding:3,bgColor:"#edeb82",color:"black",format:function(e){return e.toLocaleString("en-US")}},{id:"total deaths",label:"Total deaths",align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"new deaths",label:"New deaths",align:"right",bgColor:"red",color:"white",format:function(e){return e.toLocaleString("en-US")}},{id:"total recovered",label:"Total recovered",align:"right",bgColor:"#0d7303",color:"white",format:function(e){return e.toLocaleString("en-US")}},{id:"active cases",label:"Active cases",align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"serious/ critical",label:"Critical cases",align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"test/1M population",label:"Test/1M ",align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"total tests",label:"Total tests",align:"right",format:function(e){return e.toLocaleString("en-US")}}]),D=["asia","europe","africa","north america","south america","oceania","world"];function P(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var H=Object(d.a)((function(e){return{root:Object(m.a)({marginTop:10},e.breakpoints.up("sm"),{marginLeft:e.spacing(5),marginRight:e.spacing(5)}),container:{maxHeight:800},tableName:{textAlign:"center",justify:"center"}}}));function W(e){var t=H(),a=Object(n.useState)(e.dataList),c=Object(u.a)(a,2),o=c[0],l=(c[1],Object(n.useState)(e.dataList)),i=Object(u.a)(l,2),s=i[0],m=i[1],d=Object(n.useState)(e.paginationActive),g=Object(u.a)(d,2),E=g[0],h=(g[1],r.a.useState(0)),v=Object(u.a)(h,2),y=v[0],j=v[1],O=r.a.useState(15),x=Object(u.a)(O,2),C=x[0],B=x[1],W=r.a.useState("desc"),M=Object(u.a)(W,2),_=M[0],J=M[1],Y=r.a.useState("new cases"),$=Object(u.a)(Y,2),q=$[0],z=$[1],K=function(e){return function(t){!function(e,t){J(q===t&&"asc"===_?"desc":"asc"),z(t)}(0,e)}};return r.a.createElement(p.a,{className:t.root,elevation:3},r.a.createElement(V,{onSearchValueChanged:function(e){var t=function(e){if(""===e)return o;var t,a=[],n=Object(b.a)(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.country.toString().toLowerCase().includes(e)&&a.push(r)}}catch(c){n.e(c)}finally{n.f()}return a}(e);console.log(e),console.log(t),m(t)},searchHidden:e.searchHidden}),r.a.createElement(k.a,{className:t.container},r.a.createElement(L.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(N.a,null,r.a.createElement(T.a,null,I.map((function(t){return r.a.createElement(A.a,{key:t.id,align:"center",sortDirection:q===t.id&&_,style:{fontWeight:"bold"}},r.a.createElement(r.a.Fragment,null,"hide"===e.sortLabel?"".concat(t.label):r.a.createElement(F.a,{active:q===t.id,direction:q===t.id?_:"asc",onClick:K(t.id)},t.label)))})))),r.a.createElement(U.a,null,r.a.createElement(G,{data:o.find((function(e){return"world"==e.country.toLowerCase()}))}),function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(function(){var e,t,a=[],n=Object(b.a)(s);try{for(n.s();!(e=n.n()).done;){var r=e.value;!D.includes(r.country.toLowerCase())&&((t=r.country)&&0!=t.length)&&a.push(r)}}catch(c){n.e(c)}finally{n.f()}return a}(),function(e,t){return"desc"===e?function(e,a){return P(e,a,t)}:function(e,a){return-P(e,a,t)}}(_,q)).slice(y*C,y*C+C).map((function(e){return r.a.createElement(T.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.country},I.map((function(t){var a=e[t.id];return r.a.createElement(r.a.Fragment,null,a>0?r.a.createElement(A.a,{key:t.id,align:t.align,style:{backgroundColor:t.bgColor,color:t.color,fontWeight:"bold"}},t.format&&"number"===typeof a?t.format(a):a):r.a.createElement(r.a.Fragment,null,"country"===t.id?r.a.createElement(A.a,{key:t.id,align:t.align,style:{fontWeight:"bold"}},r.a.createElement(f.a,{title:"see details"},r.a.createElement(w.b,{to:{pathname:"/country/".concat(a,"/"),state:{data:e}}},a))):r.a.createElement(A.a,{key:t.id,align:t.align},a)))})))}))))),r.a.createElement(r.a.Fragment,null,"true"===E?r.a.createElement(R.a,{rowsPerPageOptions:[15,25,100],component:"div",count:o.length,rowsPerPage:C,page:y,onChangePage:function(e,t){j(t)},onChangeRowsPerPage:function(e){B(+e.target.value),j(0)}}):""),r.a.createElement(S.a,{variant:"caption"},r.a.createElement("span",null,"data source: ",r.a.createElement("a",{href:"https://www.worldometers.info/coronavirus/"},"https://www.worldometers.info"))))}var G=function(e){var t=Object(n.useState)(e.data),a=Object(u.a)(t,2),c=a[0];a[1];return r.a.createElement(T.a,{key:"world"},r.a.createElement(r.a.Fragment,null,"undefined"===typeof c?r.a.createElement("div",null):r.a.createElement(r.a.Fragment,null,I.map((function(e){var t=c[e.id];return r.a.createElement(A.a,{key:e.id,align:e.align,style:{backgroundColor:"#d8e0ed",fontWeight:"bold"}},e.format&&"number"===typeof t?e.format(t):t)})))))},V=function(e){var t=H();return r.a.createElement(r.a.Fragment,null,"false"===e.searchHidden?r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement("div",{className:t.tableName},r.a.createElement(S.a,{variant:"h6"},"Covid-19 Statistics"))),r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(B.a,{placeholder:"Search country name..",InputLabelProps:{shrink:!0},fullWidth:!0,variant:"outlined",onChange:function(t){var a=t.target.value;e.onSearchValueChanged(a.toLowerCase())}}))):"")},M=a(62),_=a.n(M),J=a(66),Y={data:[]},$=Object(n.createContext)(),q=$.Provider,z=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){switch(t.type){case"assign":return{data:t.item};case"add":return console.log(e),Object(J.a)(Object(J.a)({},e),{},{val:e.val+t.item});default:throw new Error}}),Y),c=Object(u.a)(a,2),o=c[0],l=c[1];return r.a.createElement(q,{value:{state:o,dispatch:l}},t)},K=a(186),Q=Object(d.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},alignItems:"center",justifyContent:"center"}}}));function X(){var e=Q(),t=r.a.useState(0),a=Object(u.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){var e=setInterval((function(){c((function(e){return e>=100?0:e+1}))}),20);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(K.a,{variant:"determinate",value:n}))}var Z=Object(d.a)((function(e){return{root:{flexGrow:1,marginTop:e.spacing(5)},paper:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:Object(m.a)({},e.breakpoints.up("sm"),{marginLeft:e.spacing(5)})}})),ee=[{number:"333",institute:"National call center",link:"http://333.gov.bd/333website/"},{number:"16263",institute:"Shastho Batayon",link:"http://16263.dghs.gov.bd/"},{number:"10655",institute:"IEDCR",link:"https://www.iedcr.gov.bd/website/"},{number:"09611677777",institute:"Expert Health Line",link:"https://bsmmu.edu.bd/"},{number:"109",institute:"National Help Line",link:"http://nhc.gov.bd/"},{number:"999",institute:"National Emergency Service",link:"https://www.999.gov.bd/"}];function te(){var e=Z();return r.a.createElement(p.a,{className:e.paper},r.a.createElement(g.a,{container:!0,spacing:2,direction:"row"},r.a.createElement(r.a.Fragment,null,ee.map((function(e){return r.a.createElement(g.a,{container:!0,item:!0,xs:12,md:2},r.a.createElement(g.a,{item:!0,xs:12,style:{fontWeight:"bold"}},e.number),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{title:"go website"},r.a.createElement("a",{href:e.link,target:"_blank",style:{textDecoration:"none"}},e.institute))))})))))}var ae=Object(d.a)((function(e){return{root:{flexGrow:1,marginTop:e.spacing(5)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:Object(m.a)({},e.breakpoints.up("sm"),{marginLeft:e.spacing(5)})}}));var ne=function(e){var t=ae(),a=Object(n.useState)({today:"primary",yesterday:"default"}),c=Object(u.a)(a,2),o=c[0],l=c[1],i=function(t){console.log(t),console.log(e.buttonName),t!==e.buttonName&&e.onButtonClick(t)};return Object(n.useEffect)((function(){"yesterday"===e.buttonName&&l({today:"default",yesterday:"primary"})}),[]),r.a.createElement(g.a,{container:!0,spacing:1,className:t.button},r.a.createElement(g.a,{item:!0},r.a.createElement(f.a,{title:"see todays data"},r.a.createElement(E.a,{variant:"contained",color:o.today,onClick:function(){return i("today")},style:{textTransform:"none"}},"Today"))),r.a.createElement(g.a,{item:!0},r.a.createElement(f.a,{title:"see yesterdays data"},r.a.createElement(E.a,{variant:"contained",color:o.yesterday,onClick:function(){return i("yesterday")},style:{textTransform:"none"}},"Yesterday"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(130);var re=a(188),ce=a(183),oe=a(182),le=a(86),ie=a.n(le),se=a(87),ue=a.n(se),me=Object(d.a)((function(e){return{root:{flexGrow:1,margin:0},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function de(){var e=me();return r.a.createElement("div",{className:e.root},r.a.createElement(re.a,{position:"static"},r.a.createElement(ce.a,null,r.a.createElement(S.a,{variant:"h6",className:e.title},"Corona Tracker"),r.a.createElement(f.a,{title:"Github Repository"},r.a.createElement("a",{target:"_blank",href:"https://github.com/sujon13/Corona-App-ReactJs"},r.a.createElement(oe.a,null,r.a.createElement(ie.a,{style:{color:"white"}})))),r.a.createElement(f.a,{title:"Developer linkedin profile"},r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/arifur-rahman-sujon/"},r.a.createElement(oe.a,null,r.a.createElement(ue.a,{style:{color:"white"}})))))))}var ge=a(189),pe=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column"},footer:{textAlign:"center",padding:e.spacing(3,2),marginBottom:0,backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function fe(){var e=pe();return r.a.createElement("div",{className:e.root},r.a.createElement("footer",{className:e.footer},r.a.createElement(ge.a,{maxWidth:"sm"},r.a.createElement(S.a,{variant:"body1"}),r.a.createElement(Ee,null))))}function Ee(){return r.a.createElement(S.a,{variant:"body2",color:"textSecondary"},"Copyright \xa9 ","Arifur Rahman Sujon"," ",(new Date).getFullYear(),".")}var be=Object(h.a)();be=Object(v.a)(be);var he=Object(d.a)((function(e){return{root:{flexGrow:1,marginTop:e.spacing(5)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary,marginLeft:e.spacing(1),marginRight:e.spacing(1)},span:{marginTop:e.spacing(5),marginBottom:e.spacing(2)}}}));function ve(e){var t=Object(n.useState)(e.data),a=Object(u.a)(t,2),c=a[0],o=(a[1],he()),l=function(e){return"undefined"===e||""===e||"N/A"===e};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:o.paper,style:{backgroundColor:"#9ab8e6"}},r.a.createElement(y.a,{theme:be},r.a.createElement(S.a,{variant:"h6",gutterBottom:!0},e.cases))),r.a.createElement(p.a,{className:o.paper,style:{backgroundColor:"#e9ebf0"}},r.a.createElement(r.a.Fragment,null,"ACTIVE CASES"===e.cases&&!l(c["active cases"])&&!l(c["serious/ critical"])||"CLOSED CASES"===e.cases&&!l(c["total recovered"])&&!l(c["total deaths"])?r.a.createElement(g.a,{container:!0,direction:"row",spacing:2},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(r.a.Fragment,null,"ACTIVE CASES"===e.cases?r.a.createElement(r.a.Fragment,null,ye(c["active cases"]),ye(e.upperTitle)):r.a.createElement(r.a.Fragment,null,ye(c["total deaths"]+c["total recovered"]),ye(e.upperTitle)))),r.a.createElement(g.a,{container:!0,item:!0,xs:12},function(e,t){!(arguments.length>2&&void 0!==arguments[2])||arguments[2];var a=null,n=null,c=null;"ACTIVE CASES"===t.cases?(a=e["active cases"]-e["serious/ critical"],n=a/e["active cases"]*100,n=Math.floor(n),c=e["serious/ critical"]):(a=e["total recovered"],c=e["total deaths"],n=a/(a+c)*100,n=Math.floor(n));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{item:!0,xs:6,align:"center"},r.a.createElement(r.a.Fragment,null,ye(a,n),ye(t.leftTitle))),r.a.createElement(g.a,{item:!0,xs:6,align:"center"},r.a.createElement(r.a.Fragment,null,ye(c,100-n),ye(t.rightTitle))))}(c,e))):r.a.createElement(r.a.Fragment,null,ye("Data is not available")))))}function ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.a.createElement(y.a,{theme:be},"number"===typeof e?r.a.createElement(S.a,{variant:"h6"},e.toLocaleString("en-US"),r.a.createElement(r.a.Fragment,null,null!==t?"(".concat(t,"%)"):"")):r.a.createElement(S.a,null,e.toLocaleString("en-US")))}var we=a(13);o.a.render(r.a.createElement(z,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement(de,null),r.a.createElement(we.c,null,r.a.createElement(we.a,{path:"/",component:function(e){var t=ae(),a=Object(n.useState)(!1),c=Object(u.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=d[0],f=d[1],E=Object(n.useState)(0),b=Object(u.a)(E,2),h=(b[0],b[1],Object(n.useState)("today")),v=Object(u.a)(h,2),y=v[0],w=v[1],S=Object(n.useContext)($),j=Object(n.useState)(S.state.data),O=Object(u.a)(j,2),C=O[0],k=O[1],L=S.dispatch,N=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),l(!0),e.prev=2,a="https://covid-19-info-bd.herokuapp.com/api/v1/corona_stats/".concat(t,"/"),e.next=6,_()(a);case 6:n=e.sent,k(n.data),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),f(!0);case 14:return e.prev=14,l(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){0===S.state.data.length&&N("today")}),[]),Object(n.useEffect)((function(){0!==C.length&&(console.log(C),L({type:"assign",item:C}))}),[C]),r.a.createElement("div",{className:t.root},p?r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:12,style:{textAlign:"center"}},"Something went wrong...")):r.a.createElement(r.a.Fragment,null,o?r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(X,null))):r.a.createElement(g.a,{container:!0,spacing:3},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(te,null)),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(x,{data:C})),r.a.createElement(g.a,{container:!0,item:!0,xs:12,direction:"row"},r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(ne,{onButtonClick:function(e){w(e),N(e)},buttonName:y})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(W,{dataList:C,paginationActive:"true",sortLabel:"show",searchHidden:"false"}))))))},exact:!0}),r.a.createElement(we.a,{path:"/country/:cName/",component:function(e){var t=he(),a=Object(n.useState)(e.location.state.data),c=Object(u.a)(a,2),o=c[0],l=(c[1],Object(n.useState)(!1)),i=Object(u.a)(l,2),s=(i[0],i[1],Object(n.useState)(!1)),m=Object(u.a)(s,2);return m[0],m[1],r.a.createElement("div",{className:t.root},console.log(e),r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(g.a,{item:!0,xs:12,align:"center"},r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(o.country)},r.a.createElement(y.a,{theme:be},r.a.createElement(S.a,{variant:"h2",gutterBottom:!0},o.country)))),r.a.createElement(g.a,{item:!0,xs:12,md:6},r.a.createElement(ve,{data:o,cases:"ACTIVE CASES",upperTitle:"Currently Infected Patients",leftTitle:"in Mild Condition",rightTitle:"Serious or Critical"})),r.a.createElement(g.a,{item:!0,xs:12,md:6},r.a.createElement(ve,{data:o,cases:"CLOSED CASES",upperTitle:"Cases which had an outcome:",leftTitle:"Recovered / Discharged",rightTitle:"Deaths"}))),r.a.createElement(g.a,{container:!0,className:t.span},r.a.createElement(g.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(S.a,{variant:"h6"},"Corona Status of ".concat(o.country)))),r.a.createElement(W,{dataList:[o],paginationActive:"false",sortLabel:"hide",searchHidden:"true"}))}})),r.a.createElement(fe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.d0748575.chunk.js.map