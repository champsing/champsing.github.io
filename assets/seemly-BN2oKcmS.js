let d=[];const A=new WeakMap;function F(){d.forEach(e=>e(...A.get(e))),d=[]}function G(e,...n){A.set(e,n),!d.includes(e)&&d.push(e)===1&&requestAnimationFrame(F)}function H(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function W(e){return e.composedPath()[0]||null}function R(e){if(typeof e=="number")return{"":e.toString()};const n={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[r,s]=t.split(":");s===void 0?n[""]=r:n[r]=s}),n}function q(e,n){var t;if(e==null)return;const r=R(e);if(n===void 0)return r[""];if(typeof n=="string")return(t=r[n])!==null&&t!==void 0?t:r[""];if(Array.isArray(n)){for(let s=n.length-1;s>=0;--s){const f=n[s];if(f in r)return r[f]}return r[""]}else{let s,f=-1;return Object.keys(r).forEach(l=>{const g=Number(l);!Number.isNaN(g)&&n>=g&&g>=f&&(f=g,s=r[l])}),s}}function T(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function _(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function B(e,n){const t=e.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?r:r[n]}function D(e,n){const[t,r]=e.split(" ");return{row:t,col:r||t}}const w={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},$="^\\s*",p="\\s*$",a="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",o="([0-9A-Fa-f])",c="([0-9A-Fa-f]{2})",y=new RegExp(`${$}rgb\\s*\\(${a},${a},${a}\\)${p}`),E=new RegExp(`${$}rgba\\s*\\(${a},${a},${a},${a}\\)${p}`),N=new RegExp(`${$}#${o}${o}${o}${p}`),C=new RegExp(`${$}#${c}${c}${c}${p}`),M=new RegExp(`${$}#${o}${o}${o}${o}${p}`),k=new RegExp(`${$}#${c}${c}${c}${c}${p}`);function u(e){return parseInt(e,16)}function x(e){try{let n;if(n=C.exec(e))return[u(n[1]),u(n[2]),u(n[3]),1];if(n=y.exec(e))return[i(n[1]),i(n[5]),i(n[9]),1];if(n=E.exec(e))return[i(n[1]),i(n[5]),i(n[9]),h(n[13])];if(n=N.exec(e))return[u(n[1]+n[1]),u(n[2]+n[2]),u(n[3]+n[3]),1];if(n=k.exec(e))return[u(n[1]),u(n[2]),u(n[3]),h(u(n[4])/255)];if(n=M.exec(e))return[u(n[1]+n[1]),u(n[2]+n[2]),u(n[3]+n[3]),h(u(n[4]+n[4])/255)];if(e in w)return x(w[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function I(e){return e>1?1:e<0?0:e}function b(e,n,t,r){return`rgba(${i(e)}, ${i(n)}, ${i(t)}, ${I(r)})`}function m(e,n,t,r,s){return i((e*n*(1-r)+t*r)/s)}function J(e,n){Array.isArray(e)||(e=x(e)),Array.isArray(n)||(n=x(n));const t=e[3],r=n[3],s=h(t+r-t*r);return b(m(e[0],t,n[0],r,s),m(e[1],t,n[1],r,s),m(e[2],t,n[2],r,s),s)}function P(e,n){const[t,r,s,f=1]=Array.isArray(e)?e:x(e);return n.alpha?b(t,r,s,n.alpha):b(t,r,s,f)}function Q(e,n){const[t,r,s,f=1]=Array.isArray(e)?e:x(e),{lightness:l=1,alpha:g=1}=n;return j([t*l,r*l,s*l,f*g])}function h(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function i(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function j(e){const[n,t,r]=e;return 3 in e?`rgba(${i(n)}, ${i(t)}, ${i(r)}, ${h(e[3])})`:`rgba(${i(n)}, ${i(t)}, ${i(r)}, 1)`}function U(e=8){return Math.random().toString(16).slice(2,2+e)}function V(e,n){const t=[];for(let r=0;r<e;++r)t.push(n);return t}export{W as a,P as b,J as c,T as d,U as e,V as f,B as g,H as h,G as i,D as j,q as k,_ as p,x as r,Q as s};
