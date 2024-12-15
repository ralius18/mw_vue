(function(){"use strict";var e={5157:function(e,t,n){var r=n(5130),o=n(6768),a=n(6450),i=n(1051);function s(e,t,n,r,s,c){const u=(0,o.g2)("HeaderBar"),l=(0,o.g2)("router-view"),f=(0,o.g2)("FooterIcons");return(0,o.uX)(),(0,o.Wv)(a.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(i.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(u),(0,o.bF)(l),(0,o.bF)(f)])),_:1})])),_:1})}var c=n(144),u=n(4232),l=n.p+"img/mw-submark.f103018e.svg",f=n.p+"img/mw-text.6bdce898.svg",d=n(307);function m(e,t,n,r,a,i){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.Wv)(s,{to:"/",class:"header-link"},{default:(0,o.k6)((()=>[e.isHomePage?((0,o.uX)(),(0,o.Wv)(d.y,{key:0,class:(0,u.C4)(["logo-img",e.imageLoading?"load":""]),src:l,onLoad:t[0]||(t[0]=t=>e.imageLoaded()),height:"40vh"},null,8,["class"])):((0,o.uX)(),(0,o.Wv)(d.y,{key:1,class:"text-img",src:f}))])),_:1})}var h=n(973),p=(0,o.pM)({name:"HeaderBar",data(){return{imageLoading:!0}},props:{active:String},methods:{imageLoaded(){this.imageLoading=!1}},computed:{isHomePage(){return"home"==(0,h.rd)().currentRoute.value.name}}}),g=n(1241);const b=(0,g.A)(p,[["render",m],["__scopeId","data-v-3f9ad934"]]);var v=b,y=n.p+"img/spotify.9b53b330.svg",w=n.p+"img/itunes.04a90373.svg",k=n.p+"img/ytmusic.d269ae61.svg",_=n.p+"img/youtube.ffa3e4e9.svg",E=n.p+"img/facebook.f9c2dd2f.svg",O=n.p+"img/instagram.608dc96a.svg",P=n(3813),A=n(6756),C=n(5526);const F=["href"],S=["href"],I=["href"],j=["href"],D=["href"],L=["href"];function N(e,t,n,r,a,i){return(0,o.uX)(),(0,o.Wv)(P.I,null,{default:(0,o.k6)((()=>[(0,o.bF)(A.L,null,{default:(0,o.k6)((()=>[(0,o.bF)(C.B,{cols:"4",sm:"2",class:"center"},{default:(0,o.k6)((()=>[(0,o.Lk)("a",{href:e.links.spotify,target:"_blank"},[(0,o.bF)(d.y,{class:"","max-height":"30",width:"30",src:y})],8,F)])),_:1}),(0,o.bF)(C.B,{cols:"4",sm:"2",class:"center"},{default:(0,o.k6)((()=>[(0,o.Lk)("a",{href:e.links.itunes,target:"_blank"},[(0,o.bF)(d.y,{class:"social-icon","max-height":"30",width:"30",src:w})],8,S)])),_:1}),(0,o.bF)(C.B,{cols:"4",sm:"2",class:"center"},{default:(0,o.k6)((()=>[(0,o.Lk)("a",{href:e.links.ytmusic,target:"_blank"},[(0,o.bF)(d.y,{class:"social-icon","max-height":"30",width:"30",src:k})],8,I)])),_:1}),(0,o.bF)(C.B,{cols:"4",sm:"2",class:"center"},{default:(0,o.k6)((()=>[(0,o.Lk)("a",{href:e.links.youtube,target:"_blank"},[(0,o.bF)(d.y,{class:"social-icon","max-height":"30",width:"30",src:_})],8,j)])),_:1}),(0,o.bF)(C.B,{cols:"4",sm:"2",class:"center"},{default:(0,o.k6)((()=>[(0,o.Lk)("a",{href:e.links.facebook,target:"_blank"},[(0,o.bF)(d.y,{class:"social-icon","max-height":"30",width:"30",src:E})],8,D)])),_:1}),(0,o.bF)(C.B,{cols:"4",sm:"2",class:"center"},{default:(0,o.k6)((()=>[(0,o.Lk)("a",{href:e.links.instagram,target:"_blank"},[(0,o.bF)(d.y,{class:"social-icon","max-height":"30",width:"30",src:O})],8,L)])),_:1})])),_:1})])),_:1})}var T=(0,o.pM)({name:"FooterIcons",data(){return{links:{spotify:"https://open.spotify.com/artist/3IP9EibiPZC8p1BKe5yNXU",itunes:"https://music.apple.com/us/artist/mirrored-walls/1556086315",ytmusic:"https://music.youtube.com/channel/UCcv4kHRrCxOlYPHbojNF1dQ",youtube:"https://www.youtube.com/channel/UC_xz1y12Qm8OPqAYkrD34Mg",facebook:"https://www.facebook.com/mirroredwalls",instagram:"https://www.instagram.com/mirrored_walls"}}}});const x=(0,g.A)(T,[["render",N],["__scopeId","data-v-2a724a18"]]);var B=x,M=n(6400),R=n(7617),H={API_KEY:"AIzaSyCz-DzSglIZ1qeHRvDRRCPvG9dDJRFy7Q4",AUTH_DOMAIN:"mirrored-walls.firebaseapp.com",PROJECT_ID:"mirrored-walls",STORAGE_BUCKET:"mirrored-walls.appspot.com",MESSAGING_SENDER_ID:"282159521313",APP_ID:"1:282159521313:web:d187c0fa82e1e457238d60"};const U=(0,M.Wp)({apiKey:H.API_KEY,authDomain:H.AUTH_DOMAIN,projectId:H.PROJECT_ID,storageBucket:H.STORAGE_BUCKET,messagingSenderId:H.MESSAGING_SENDER_ID,appId:H.APP_ID}),G=(0,R.aU)(U),W=(0,R.rJ)(G,"shows"),q=(0,R.rJ)(G,"lyrics");var K=n(3767),X=(0,o.pM)({name:"App",components:{HeaderBar:v,FooterIcons:B},data(){return{}},mounted(){(0,K.Ge)(W,{target:(0,c.lW)(this.$store.state,"shows")}),(0,K.Ge)(q,{target:(0,c.lW)(this.$store.state,"lyrics")})}});const z=(0,g.A)(X,[["render",s]]);var J=z;const Y=[{path:"/",name:"home",component:()=>Promise.all([n.e(327),n.e(962)]).then(n.bind(n,7791))},{path:"/about",name:"about",component:()=>Promise.all([n.e(327),n.e(594)]).then(n.bind(n,3205))},{path:"/listen",name:"listen",component:()=>Promise.all([n.e(327),n.e(802)]).then(n.bind(n,8728))},{path:"/shows",name:"shows",component:()=>Promise.all([n.e(327),n.e(911)]).then(n.bind(n,4236))},{path:"/lyrics",name:"lyrics",component:()=>Promise.all([n.e(327),n.e(631)]).then(n.bind(n,9577))},{path:"/merch",name:"merch",component:()=>Promise.all([n.e(327),n.e(372)]).then(n.bind(n,2205))}],$=(0,h.aE)({history:(0,h.Bt)(),routes:Y});function Q(e){return!!Object.keys(e.query).length}$.beforeEach(((e,t,n)=>{!Q(e)&&Q(t)?n({name:e.name?.toString(),query:t.query}):n()})),$.afterEach((e=>{let t="Mirrored Walls";if(e.name&&"home"!==e.name){const n=e.name.toString();t+=" - "+n[0].toUpperCase()+n.slice(1)}document.title=t}));var Z=$,V=(n(5524),n(6409)),ee=(0,V.$N)({theme:{defaultTheme:"light"}});async function te(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto Condensed:300,400,700&display=swap"]}})}var ne=n(782),re=(0,ne.y$)({state:()=>({shows:[],lyrics:[]}),getters:{upcomingShows:e=>e.shows.filter((e=>e.date.toDate()>new Date)),upcomingShowsCound:(e,t)=>t.upcomingShows.length,lyricsData:e=>e.lyrics.sort(((e,t)=>e.title.localeCompare(t.title))).map((e=>({...e,value:e.title})))}});te(),(0,r.Ef)(J).use(re).use(K.Nz,{firebaseApp:U}).use(Z).use(ee).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({53:"webfontloader",372:"merch",594:"about",631:"lyrics",802:"listen",911:"shows",962:"home"}[e]||e)+"."+{53:"ce250b51",327:"a0f6f042",372:"0b404f05",594:"ed300fea",631:"5fe8e3ea",802:"ad232a33",911:"85fc50d2",962:"a15b225f"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{372:"merch",594:"about",631:"lyrics",802:"listen",911:"shows",962:"home"}[e]+"."+{372:"9fa15573",594:"318c7b77",631:"f6bc4b00",802:"376eb58a",911:"3b712b4f",962:"309a6023"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mw_vue:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={372:1,594:1,631:1,802:1,911:1,962:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkmw_vue"]=self["webpackChunkmw_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5157)}));r=n.O(r)})();
//# sourceMappingURL=app.184ad881.js.map