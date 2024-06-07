import{s as C,b as q,o as B,d as I,t as U}from"../chunks/scheduler.BfJEPAwo.js";import{S as z,i as M,s as W,v as h,k as F,f as v,r as w,w as L,t as g,d as E,e as G,c as H,a as J,b as O,x as d,h as K,j as Q,l as X,y as D,z as b,o as k,p as T,q as P,u as R}from"../chunks/index.Cqvjk_UP.js";const Y="modulepreload",Z=function(a){return"/portfolio/"+a},V={},m=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");i=Promise.all(n.map(t=>{if(t=Z(t),t in V)return;V[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!s)for(let u=c.length-1;u>=0;u--){const p=c[u];if(p.href===t&&(!r||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,p)=>{o.addEventListener("load",u),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})}))}return i.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,s;var i=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return i&&(e=b(i,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),v(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){D();const l=e;w(l.$$.fragment,1,0,()=>{R(l,1)}),L()}i?(e=b(i,c(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&w(e.$$.fragment,t),s=!1},d(t){t&&E(n),a[12](null),e&&R(e,t)}}}function x(a){let e,n,s;var i=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(e=b(i,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),v(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){D();const l=e;w(l.$$.fragment,1,0,()=>{R(l,1)}),L()}i?(e=b(i,c(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&w(e.$$.fragment,t),s=!1},d(t){t&&E(n),a[11](null),e&&R(e,t)}}}function ee(a){let e,n,s;var i=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return i&&(e=b(i,c(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),v(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][1])){if(e){D();const l=e;w(l.$$.fragment,1,0,()=>{R(l,1)}),L()}i?(e=b(i,c(t)),t[10](e),k(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(i){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&w(e.$$.fragment,t),s=!1},d(t){t&&E(n),a[10](null),e&&R(e,t)}}}function y(a){let e,n=a[6]&&A(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(s){e=H(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=J(e);n&&n.l(i),i.forEach(E),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(s,i){v(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=A(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&E(e),n&&n.d()}}}function A(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,s){v(n,e,s)},p(n,s){s&128&&X(e,n[7])},d(n){n&&E(e)}}}function te(a){let e,n,s,i,c;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let _=a[5]&&y(a);return{c(){n.c(),s=W(),_&&_.c(),i=h()},l(o){n.l(o),s=F(o),_&&_.l(o),i=h()},m(o,u){r[e].m(o,u),v(o,s,u),_&&_.m(o,u),v(o,i,u),c=!0},p(o,[u]){let p=e;e=l(o),e===p?r[e].p(o,u):(D(),w(r[p],1,1,()=>{r[p]=null}),L(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),g(n,1),n.m(s.parentNode,s)),o[5]?_?_.p(o,u):(_=y(o),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i(o){c||(g(n),c=!0)},o(o){w(n),c=!1},d(o){o&&(E(s),E(i)),r[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;q(s.page.notify);let o=!1,u=!1,p=null;B(()=>{const f=s.page.subscribe(()=>{o&&(n(6,u=!0),U().then(()=>{n(7,p=document.title||"untitled page")}))});return n(5,o=!0),f});function j(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function N(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function S(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,s=f.stores),"page"in f&&n(9,i=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,c,r,l,_,o,u,p,s,i,j,N,S]}class oe extends z{constructor(e){super(),M(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>m(()=>import("../nodes/0.5n418fTS.js"),__vite__mapDeps([0,1,2,3,4])),()=>m(()=>import("../nodes/1.DSv_cph_.js"),__vite__mapDeps([5,1,2,6,3])),()=>m(()=>import("../nodes/2.BAISDCMZ.js"),__vite__mapDeps([7,1,2,8,3,9])),()=>m(()=>import("../nodes/3.3q1iYVAV.js"),__vite__mapDeps([10,1,2])),()=>m(()=>import("../nodes/4.BVOl2p0s.js"),__vite__mapDeps([11,1,2,3])),()=>m(()=>import("../nodes/5.Duo5SOXw.js"),__vite__mapDeps([12,1,2,13])),()=>m(()=>import("../nodes/6.CiHqhFwd.js"),__vite__mapDeps([14,1,2])),()=>m(()=>import("../nodes/7.DMsvbuj1.js"),__vite__mapDeps([15,1,2])),()=>m(()=>import("../nodes/8.BeATjjGZ.js"),__vite__mapDeps([16,1,2,17,8,13])),()=>m(()=>import("../nodes/9.Dl_fc17N.js"),__vite__mapDeps([18,1,2])),()=>m(()=>import("../nodes/10.8ib36NNx.js"),__vite__mapDeps([19,1,2,17,8,13])),()=>m(()=>import("../nodes/11.BwP8qbvp.js"),__vite__mapDeps([20,1,2,8,21]))],le=[],fe={"/":[2],"/about":[3],"/attributions":[4],"/exp/aevip":[5],"/projects/dellserver":[6],"/projects/esp32has":[7],"/projects/oscar":[8],"/projects/remotepc":[9],"/projects/transformers":[10],"/test":[11]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.5n418fTS.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Cqvjk_UP.js","_app/immutable/chunks/paths.Dj0hNV6z.js","_app/immutable/assets/0.Kps9LtjI.css","_app/immutable/nodes/1.DSv_cph_.js","_app/immutable/chunks/entry.CK3F5Alu.js","_app/immutable/nodes/2.BAISDCMZ.js","_app/immutable/chunks/each.CN95I62l.js","_app/immutable/assets/2.DMMRlyIk.css","_app/immutable/nodes/3.3q1iYVAV.js","_app/immutable/nodes/4.BVOl2p0s.js","_app/immutable/nodes/5.Duo5SOXw.js","_app/immutable/assets/Carousel.VNbS7xGE.css","_app/immutable/nodes/6.CiHqhFwd.js","_app/immutable/nodes/7.DMsvbuj1.js","_app/immutable/nodes/8.BeATjjGZ.js","_app/immutable/chunks/Carousel.CPtl1PXS.js","_app/immutable/nodes/9.Dl_fc17N.js","_app/immutable/nodes/10.8ib36NNx.js","_app/immutable/nodes/11.BwP8qbvp.js","_app/immutable/assets/11.DeUMrcNL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
