(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a47fe":"eb984570","chunk-2d0aa784":"294073f4","chunk-2d210c47":"994a5994","chunk-2d21841c":"044ed22f","chunk-2d2252b5":"b5dc9679"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=s[t]=[e,r]}));e.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,a[1](c)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container mx-auto max-w-7xl flex flex-col flex-wrap items-center justify-between py-10 md:flex-row uppercase text-2xl font-bold text-gray-500"},[a("div",{staticClass:"relative flex flex-col md:flex-row"},[a("router-link",{staticClass:"flex items-center lg:w-auto lg:items-center lg:justify-center",attrs:{to:"/"}},[t._v(" MONEYMAFIA.ETH ")])],1),a("div",{staticClass:"inline-flex items-center ml-5 space-x-6 lg:justify-end"},[a("nav",{staticClass:"flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200"},[a("router-link",{staticClass:"mr-5",attrs:{to:"/portfolio"}},[t._v("portfolio")]),a("router-link",{staticClass:"mr-5",attrs:{to:"/service"}},[t._v("SERVICE")]),a("router-link",{staticClass:"mr-5",attrs:{to:"/team"}},[t._v("TEAM")]),a("router-link",{staticClass:"mr-5",attrs:{to:"/faq"}},[t._v("FAQ")]),a("router-link",{staticClass:"mr-5",attrs:{to:"/contact"}},[t._v("CONTACT")])],1)])]),a("router-view"),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"py-20"},[a("div",{staticClass:"container px-4 mx-auto"},[a("p",{staticClass:"text-center text-2xl text-gray-400"},[t._v("Built with ❤️ In Dubai, UAE.")])])])}],o=a("2877"),i={},l=Object(o["a"])(i,s,n,!1,null,null,null),c=l.exports,u=(a("ba8c"),a("a717"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container mx-auto max-w-7xl px-5 py-20"},[a("div",{staticClass:"flex md:flex-row flex-col items-center"},[a("div",{staticClass:"md:w-1/2"},[t._m(0),a("links")],1),a("div",{staticClass:"md:w-1/2"},[a("lottie-player",{staticClass:"object-cover object-center",attrs:{autoplay:"",loop:"",mode:"normal",src:"img/main.json",background:"transparent"}})],1)])]),a("medium")],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"uppercase text-3xl font-bold text-gray-500"},[t._v("Money Mafia is a decenterlised organisation that "),a("span",{staticClass:"text-white bg-gray-400"},[t._v("develops")]),t._v(", "),a("span",{staticClass:"text-white bg-gray-400"},[t._v("manages")]),t._v(" & "),a("span",{staticClass:"text-white bg-gray-400"},[t._v("funds")]),t._v(" blockchain startups.")])}],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-3 items-center mx-auto space-y-6 text-center uppercase"},[a("div",{staticClass:"relative flex flex-col md:flex-row md:space-x-4"},[a("a",{staticClass:"flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-400 rounded-md md:mb-0 hover:bg-gray-700 md:w-auto",attrs:{href:t.github}},[t._v(" Github "),a("svg",{staticClass:"w-4 h-4 ml-1",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M5 12h14M12 5l7 7-7 7"}})])]),a("a",{staticClass:"flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-400 rounded-md md:mb-0 hover:bg-gray-700 md:w-auto",attrs:{href:t.telegram}},[t._v(" Telegram "),a("svg",{staticClass:"w-4 h-4 ml-1",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M5 12h14M12 5l7 7-7 7"}})])]),a("a",{staticClass:"flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-400 rounded-md md:mb-0 hover:bg-gray-700 md:w-auto",attrs:{href:t.vote}},[t._v(" Vote "),a("svg",{staticClass:"w-4 h-4 ml-1",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M5 12h14M12 5l7 7-7 7"}})])])])])},f=[],h={data(){return{github:"https://github.com/moneymafia",telegram:"https://t.me/+gR7pQ8vkIEs1YzJl",vote:"https://snapshot.org/#/moneymafia.eth"}},async mounted(){await this.fetchdata()}},v=h,x=Object(o["a"])(v,p,f,!1,null,null,null),b=x.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-gray-100"},[a("div",{staticClass:"container mx-auto max-w-7xl px-5 py-20"},[a("section",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-5"},[a("a",{attrs:{href:t.posts[0].link,target:"_blank"}},[a("article",{staticClass:"mx-auto w-full shadow-2xl  transform duration-500 hover:-translate-y-2 cursor-pointer bg-white"},[a("div",{staticClass:"min-h-80 overflow-hidden"},[a("img",{attrs:{src:t.posts[0].thumbnail}})]),a("div",{staticClass:"flex justify-between"},[a("p",{staticClass:"m-4 text-xl text-gray-700"},[t._v(t._s(t.posts[0].title))])])])]),a("a",{attrs:{href:t.posts[1].link,target:"_blank"}},[a("article",{staticClass:"mx-auto w-full shadow-2xl  transform duration-500 hover:-translate-y-2 cursor-pointer bg-white"},[a("div",{staticClass:"min-h-80 overflow-hidden"},[a("img",{attrs:{src:t.posts[1].thumbnail}})]),a("div",{staticClass:"flex justify-between"},[a("p",{staticClass:"m-4 text-xl text-gray-700"},[t._v(t._s(t.posts[1].title))])])])]),a("a",{attrs:{href:t.posts[2].link,target:"_blank"}},[a("article",{staticClass:"mx-auto w-full shadow-2xl  transform duration-500 hover:-translate-y-2 cursor-pointer bg-white"},[a("div",{staticClass:"min-h-80 overflow-hidden"},[a("img",{attrs:{src:t.posts[2].thumbnail}})]),a("div",{staticClass:"flex justify-between"},[a("p",{staticClass:"m-4 text-xl text-gray-700"},[t._v(t._s(t.posts[2].title))])])])])])])])},w=[],y=a("bc3a"),C=a.n(y),_={data(){return{posts:[]}},methods:{async fetchdata(){const t=await C.a.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40moneymafia");this.posts=t.data.items}},async mounted(){await this.fetchdata()}},k=_,j=Object(o["a"])(k,g,w,!1,null,null,null),O=j.exports,E={components:{links:b,medium:O}},M=E,T=Object(o["a"])(M,d,m,!1,null,null,null),P=T.exports;r["a"].use(u["a"]);const A=[{path:"/",name:"Home",component:P},{path:"/team",name:"Team",component:()=>a.e("chunk-2d0a47fe").then(a.bind(null,"0767"))},{path:"/faq",name:"Faq",component:()=>a.e("chunk-2d0aa784").then(a.bind(null,"10c2"))},{path:"/service",name:"Service",component:()=>a.e("chunk-2d2252b5").then(a.bind(null,"e2f8"))},{path:"/portfolio",name:"Portfolio",component:()=>a.e("chunk-2d21841c").then(a.bind(null,"c9e5"))},{path:"/contact",name:"Contact",component:()=>a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}],F=new u["a"]({routes:A});var S=F;r["a"].config.productionTip=!1,new r["a"]({router:S,render:t=>t(c)}).$mount("#app")},ba8c:function(t,e,a){}});
//# sourceMappingURL=app.db21b36c.js.map