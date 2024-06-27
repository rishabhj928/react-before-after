import{g as be,r as we,c as ye,j as S}from"./jsx-runtime-d4vcKfGz.js";var oe={exports:{}};(function(w,C){(function(N,y){w.exports=y(we)})(ye,function(N){return(()=>{var y={297:n=>{n.exports=N}},T={};function a(n){var e=T[n];if(e!==void 0)return e.exports;var o=T[n]={exports:{}};return y[n](o,o.exports,a),o.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var o in e)a.o(e,o)&&!a.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var k={};return(()=>{a.d(k,{default:()=>ie});var n,e=a(297),o=a.n(e),p=function(){return(p=Object.assign||function(r){for(var s,f=1,v=arguments.length;f<v;f++)for(var l in s=arguments[f])Object.prototype.hasOwnProperty.call(s,l)&&(r[l]=s[l]);return r}).apply(this,arguments)};function P(r,s){return r>s?s:r<0?0:r}function ie(r){var s=r.firstImage,f=r.secondImage,v=r.className,l=r.withResizeFeel,ae=l===void 0||l,g=r.currentPercentPosition,_=r.onVisible,ce=r.onReady,A=r.onChangePercentPosition,B=r.delimiterIconStyles,D=r.feelsOnlyTheDelimiter,F=D!==void 0&&D,U=r.delimiterColor,E=U===void 0?"#fff":U,z=r.onChangeMode,V=["before-after-slider"];v&&V.push(v);var u=(0,e.useRef)(null),G=(0,e.useRef)(null),W=(0,e.useState)(null),c=W[0],se=W[1],X=(0,e.useState)(g||50),O=X[0],Y=X[1],q=(0,e.useState)(n.DEFAULT),ue=q[0],fe=q[1],H=function(t,i,d){var x=(0,e.useState)(!1),m=x[0],Ee=x[1],b=(0,e.useRef)([!1,!1]);return(0,e.useEffect)(function(){!m&&b.current.every(Boolean)&&t&&i.current&&Ee(!0)},[b.current,t,m,i.current]),(0,e.useEffect)(function(){m&&d&&d()},[m]),{onImageLoad:function(he){var te=function(M,ne){for(var L=0,xe=ne.length,re=M.length;L<xe;L++,re++)M[re]=ne[L];return M}([],b.current);te[he]=!0,b.current=te},isReady:m}}(c,u,ce),j=H.onImageLoad,J=H.isReady,K=(0,e.useState)({top:0,left:0}),le=K[0],de=K[1],h=(0,e.useState)(_&&typeof window<"u"&&window.IntersectionObserver?new IntersectionObserver(function(t){h&&_&&t.forEach(function(i){i.intersectionRatio>.95&&(h.disconnect(),_())})},{threshold:[0,.95]}):null)[0];(0,e.useEffect)(function(){if(h){if(!J)return;h.observe(u.current)}},[J]),(0,e.useEffect)(function(){g&&c&&Y(P(g,c))},[g,c]);var R=function(){if(u.current){var t=u.current.offsetWidth;se(t)}},I=function(){Q(n.DEFAULT)},Q=function(t){fe(t),z&&z(t)};(function(t,i,d,x){(0,e.useEffect)(function(){return t(),d.current&&d.current.complete&&x(0),document.addEventListener("click",i),function(){document.removeEventListener("click",i)}},[])})(R,I,G,j);var me=c?{width:c+"px"}:void 0,pe={width:O+"%"},ve=o().useMemo(function(){return p({backgroundColor:E},B||{})},[E,B]),ge=o().useMemo(function(){return{left:O+"%",backgroundColor:E}},[O,E]),Z=function(){(function(){if(u.current){var t=u.current.getBoundingClientRect();de({top:t.top+pageYOffset,left:t.left+pageXOffset})}})(),Q(n.MOVE)},$=function(t){if(ue===n.MOVE){if(!c)return;var i=P(t.pageX-le.left,c)/c*100;A?A(i):Y(i)}};(function(t,i){(0,e.useEffect)(function(){return i&&window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[])})(R,ae);var ee={onMouseDown:Z,onTouchStart:Z};return o().createElement("div",p({ref:u,className:V.join(" "),onMouseMove:function(t){return $(t)},onTouchMove:function(t){$(t.touches[0])},onTouchEnd:I,onTouchCancel:I},F?{}:ee),o().createElement("div",{className:"before-after-slider__first-photo-container"},o().createElement("img",{src:s.imageUrl,onLoad:function(){R(),j(0)},draggable:!1,alt:s.alt,ref:G})),!!c&&o().createElement(o().Fragment,null,o().createElement("div",{className:"before-after-slider__second-photo-container",style:pe},o().createElement("img",{style:me,src:f.imageUrl,onLoad:function(){return j(1)},draggable:!1,alt:f.alt})),o().createElement("div",p({className:"before-after-slider__delimiter",style:ge},F?ee:{}),o().createElement("div",null,o().createElement("div",{className:"before-after-slider__delimiter-icon",style:ve})))))}(function(r){r.MOVE="move",r.DEFAULT="default"})(n||(n={}))})(),k.default})()})})(oe);var _e=oe.exports;const Oe=be(_e),Re=()=>[{title:"New Remix App"},{name:"description",content:"Welcome to Remix!"}];function Ie(){const w={imageUrl:"https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg"},C={imageUrl:"https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg"};return S.jsxs("div",{className:"font-sans p-4",children:[S.jsx("h1",{className:"text-3xl",children:"Before After"}),S.jsx(Oe,{firstImage:w,secondImage:C})]})}export{Ie as default,Re as meta};
