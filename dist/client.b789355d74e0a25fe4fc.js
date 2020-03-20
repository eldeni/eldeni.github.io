!function(e){function t(t){for(var o,i,l=t[0],c=t[1],m=t[2],s=0,u=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);u.length;)u.shift()();return a.push.apply(a,m||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=c;a.push([160,0,3]),n()}({158:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(49);const i=r.a.createContext(void 0),l=({children:e,data:t})=>r.a.createElement(i.Provider,{value:t},e),c=()=>r.a.useContext(i).contentData;var m=n(62),d=n(155),s=n(6),u=n(157);var p={h1Color:"#fff",htmlBackgroundColor:"#2e2c2f",htmlColor:"#e1e1e1"},b=n(79);const f=Object(b.logger)("[sandbox-web]");class h extends r.a.Component{constructor(...e){var t,n,o;super(...e),o={hasError:!1},(n="state")in(t=this)?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){f("ErrorBoundary(): error: %o, info: %o",e,t)}render(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}var g=h;var v=n(38);const y=s.b.div.withConfig({componentId:"sc-1njdd6k-0"})({marginBottom:"3.7em"}),x=s.b.p.withConfig({componentId:"sc-1njdd6k-1"})({color:p.h1Color,fontSize:"1.19em",fontWeight:500,letterSpacing:"0.027em",marginBottom:7}),w=s.b.div.withConfig({componentId:"sc-1njdd6k-2"})({marginBottom:"1.9em"}),E=s.b.div.withConfig({componentId:"sc-1njdd6k-3"})({marginTop:5}),k=s.b.div.withConfig({componentId:"sc-1njdd6k-4"})({"& a":{"&:hover":{borderBottom:"none"},borderBottom:`1px solid ${p.h1Color}`},color:p.h1Color,fontWeight:600}),C=s.b.div.withConfig({componentId:"sc-1njdd6k-5"})({"& a":{"&:hover":{borderBottom:"none"},borderBottom:`1px solid ${p.htmlColor}`},"& iframe":{alignSelf:"center",height:"44vw",margin:"0.9em 0",maxHeight:267,maxWidth:480,width:"80vw"},display:"flex",flexDirection:"column"});var z=({group:e})=>{const t=r.a.useMemo(()=>e.items.map(e=>{var t;const n=null===(t=e.children)||void 0===t?void 0:t.map(e=>{var t;const n=null===(t=e.children)||void 0===t?void 0:t.map(e=>r.a.createElement("p",{key:e.label},e.label));return r.a.createElement("p",{key:e.label},e.label,n)});return r.a.createElement(w,{key:e.title1+e.title2},r.a.createElement(k,{dangerouslySetInnerHTML:{__html:e.title1}}),e.title2&&r.a.createElement(C,{dangerouslySetInnerHTML:{__html:e.title2}}),e.title3&&r.a.createElement(C,{dangerouslySetInnerHTML:{__html:e.title3}}),r.a.createElement(E,null,n))}),[e]);return r.a.createElement(y,null,r.a.createElement(x,{id:e.id},e.label),t)};const I=s.b.div.withConfig({componentId:"sc-14ovbpd-0"})({overflowX:"hidden",width:"100%"}),S=s.b.div.withConfig({componentId:"sc-14ovbpd-1"})({"& img":{alignSelf:"center",borderRadius:5,display:"block",margin:"1.05em 0",maxWidth:"80%"},"& small":{fontSize:"0.91em"},display:"flex",flexDirection:"column",marginBottom:"2.4em"}),j={group:z,text:({text:e})=>r.a.createElement(S,{dangerouslySetInnerHTML:{__html:e}})};var O=({childrenMeta:e})=>{const t=c(),n=r.a.useMemo(()=>e.map(e=>{const n=j[e.type],o={key:e.value,..."group"===e.type&&{group:t[e.value]},..."text"===e.type&&{text:e.value}};return r.a.createElement(n,o)}),[t]);return r.a.createElement(I,null,n)};const T=s.b.div.withConfig({componentId:"px2lal-0"})({"& button":{"&:hover":{borderBottom:"none"},borderBottom:"1px solid #bdbdbd"},"& span:not(:first-child)":{marginLeft:"0.5em"},color:"#bdbdbd",display:"flex",justifyContent:"space-between",marginTop:90,padding:"18px 0"});var M=()=>{var e;const{builtAt:t,contentData:n,latestCommitHash:o}=r.a.useContext(i),a=r.a.useMemo(()=>new Date(t),[t]),l=r.a.useCallback(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},[]);return r.a.createElement(T,null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,a.getFullYear()),r.a.createElement("span",null,null===(e=n.general)||void 0===e?void 0:e.name)),r.a.createElement("p",null,r.a.createElement("span",null,"Last updated at"),r.a.createElement("span",null,`${a.getMonth()+1}/${a.getFullYear()},`),r.a.createElement("span",null,o))),r.a.createElement("div",null,r.a.createElement("button",{onClick:l,type:"button"},"Top")))};function _(e){return{"@media (max-width: 480px)":e}}const B=s.b.div.withConfig({componentId:"sc-1doxwz3-0"})({}),H=s.b.div.withConfig({componentId:"sc-1doxwz3-1"})({}),P=s.b.div.withConfig({componentId:"sc-1doxwz3-2"})({marginTop:15}),D=s.b.div.withConfig({componentId:"sc-1doxwz3-3"})({"& .dummy":{opacity:0},"& .effect":{color:"#e62e73",position:"absolute",top:0,zIndex:0},"& .effect-2":{color:"#665dd5",position:"absolute",top:0,zIndex:0},"& .main":{position:"absolute",top:0,zIndex:10},"& p":{transition:"1s ease"},"&:hover .effect":{transform:"translate(9px, 1px)"},"&:hover .effect-2":{transform:"translate(5px, -1px)"},color:"white",cursor:"pointer",fontFamily:'"Work Sans"',fontSize:"2.0rem",fontWeight:800,position:"relative",..._({fontSize:"1.82rem"})}),L=s.b.div.withConfig({componentId:"sc-1doxwz3-4"})({"& > div":{marginTop:"0.6em"},"& p":{display:"inline"},minHeight:90,paddingTop:5,..._({minHeight:80,paddingTop:0})}),W=s.b.img.withConfig({componentId:"sc-1doxwz3-5"})({"&:hover":{transform:"scale(1.2)",transformOrigin:"top right"},borderRadius:6,float:"right",height:100,margin:"0px 0 6px 6px",transition:"1s ease",width:100,..._({height:85,width:85})}),A=s.b.ul.withConfig({componentId:"sc-1doxwz3-6"})({"& a":{"&:hover":{borderBottom:"none"},borderBottom:"1px solid #c4bddb",color:"#c4bddb"},"& li":{color:"#c4bddb",display:"inline-block"},"& li:not(:first-child)":{marginLeft:5},"& li:not(:first-child)::before":{content:'"| "'},fontSize:"1rem",marginTop:13});var N=()=>{const{general:e}=c();return r.a.createElement(B,null,r.a.createElement(H,null,r.a.createElement(D,null,r.a.createElement(a.b,{to:"/"},r.a.createElement("p",{className:"dummy"},e.name),r.a.createElement("p",{className:"main"},e.name),r.a.createElement("p",{className:"effect"},e.name),r.a.createElement("p",{className:"effect-2"},e.name)))),r.a.createElement(P,null,r.a.createElement(W,{src:e.photoUrl}),r.a.createElement(L,null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.introduction.p1}}),e.introduction.p2&&r.a.createElement("div",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.introduction.p2}}))),r.a.createElement(A,null,r.a.createElement("li",null,r.a.createElement("a",{href:`mailto:${e.email}`},e.email)),r.a.createElement("li",null,r.a.createElement("a",{href:e.github},"Github")),r.a.createElement("li",null,r.a.createElement("a",{href:e.linkedIn},"LinkedIn")))))};const R=s.b.ul.withConfig({componentId:"wxjmoh-0"})({"& a":{"&:hover":{color:"#fff"},display:"inline-block",paddingBottom:4},"& a.active":{borderBottom:"2px solid #fff",color:"#fff"},"& li:not(:first-child)":{marginLeft:12},display:"flex",marginTop:30}),$=({children:e,exact:t,to:n})=>r.a.createElement("li",null,r.a.createElement(a.c,{exact:t,to:n},e));var F=()=>{const{views:e}=c(),t=r.a.useMemo(()=>e.items.map(e=>"true"===e.visibleOnMenu&&r.a.createElement($,{exact:!!e.exact&&"true"===e.exact,key:e.url,to:e.url},e.label)),[e]);return r.a.createElement(R,null,t)};const J=s.b.div.withConfig({componentId:"sc-35krh8-0"})({alignItems:"center",display:"flex",flexDirection:"column",padding:"15 9"}),U=s.b.div.withConfig({componentId:"sc-35krh8-1"})({maxWidth:600,width:"100%"}),Y=s.b.div.withConfig({componentId:"sc-35krh8-2"})({marginTop:24});var G=()=>{const{views:e}=c(),t=r.a.useMemo(()=>{const t=e.items.map(e=>r.a.createElement(v.b,{exact:!!e.exact&&"true"===e.exact,key:e.url,path:e.url,render:()=>r.a.createElement(O,{childrenMeta:e.children})}));return t.push(r.a.createElement(v.a,{key:"default",to:e.items[0].url})),t},[e]);return r.a.createElement(J,null,r.a.createElement(U,null,r.a.createElement(N,null),r.a.createElement(F,null),r.a.createElement(Y,null,r.a.createElement(v.d,null,t)),r.a.createElement(M,null)))};const V=s.a`
  ${"\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n/*# sourceMappingURL=normalize.min.css.map */\n"}
`,X=Object(s.a)({"*":{boxSizing:"border-box"},a:{"&:hover":{textDecoration:"none"},color:"inherit",textDecoration:"none",transition:"color 1s ease"},body:{},button:{backgroundColor:"inherit",border:"none",color:"inherit",cursor:"pointer",margin:0,outline:"none",padding:0},html:{backgroundColor:p.htmlBackgroundColor,color:p.htmlColor,fontFamily:'"Source Serif Pro", "Work Sans", "Helvetica", "Arial", sans-serif;',fontSize:14,lineHeight:1.51},input:{border:"none",outline:"none"},p:{margin:0},ul:{listStyleType:"none",margin:0,padding:0}}),q=s.b.div.withConfig({componentId:"ve0tkw-0"})({fontSize:"1.15rem"});var K=Object(d.a)(u.hot)(()=>r.a.createElement(g,null,r.a.createElement(q,null,r.a.createElement(V,null),r.a.createElement(X,null),r.a.createElement(G,null))));t.a=()=>{const e=window.ISOMORPHIC_DATA;return Object(m.a)("window.ISOMORPHIC_DATA: %o",e),r.a.createElement(a.a,null,r.a.createElement(l,{data:e},r.a.createElement(K,null)))}},160:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),o=n(108),r=n(158),a=n(62);("undefined"!=typeof window&&!window._babelPolyfill||void 0!==e&&!e._babelPolyfill)&&(Object(a.a)("[client] babel-polyfill is imported, since it wasn't imported yet"),n(172)),Object(a.a)("[client] Running in NODE_ENV: %s","production");const i=document.getElementById("app-root");o.hydrate(t.createElement(r.a,null),i)}.call(this,n(56))},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(79);const r=Object(o.logger)("[eldeni.github.io]")}});