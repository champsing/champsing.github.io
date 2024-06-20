let d=[];const A=new WeakMap;function F(){d.forEach(n=>n(...A.get(n))),d=[]}function H(n,...e){A.set(n,e),!d.includes(n)&&d.push(n)===1&&requestAnimationFrame(F)}function W(n,e){let{target:t}=n;for(;t;){if(t.dataset&&t.dataset[e]!==void 0)return!0;t=t.parentElement}return!1}function q(n){return n.composedPath()[0]||null}function R(n){if(typeof n=="number")return{"":n.toString()};const e={};return n.split(/ +/).forEach(t=>{if(t==="")return;const[r,s]=t.split(":");s===void 0?e[""]=r:e[r]=s}),e}function T(n,e){var t;if(n==null)return;const r=R(n);if(e===void 0)return r[""];if(typeof e=="string")return(t=r[e])!==null&&t!==void 0?t:r[""];if(Array.isArray(e)){for(let s=e.length-1;s>=0;--s){const u=e[s];if(u in r)return r[u]}return r[""]}else{let s,u=-1;return Object.keys(r).forEach(g=>{const l=Number(g);!Number.isNaN(l)&&e>=l&&l>=u&&(u=l,s=r[g])}),s}}function _(n){return typeof n=="string"?n.endsWith("px")?Number(n.slice(0,n.length-2)):Number(n):n}function B(n){if(n!=null)return typeof n=="number"?`${n}px`:n.endsWith("px")?n:`${n}px`}function D(n,e){const t=n.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+n+" is not a valid value.")}return e===void 0?r:r[e]}const w={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},$="^\\s*",p="\\s*$",a="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",o="([0-9A-Fa-f])",c="([0-9A-Fa-f]{2})",y=new RegExp(`${$}rgb\\s*\\(${a},${a},${a}\\)${p}`),E=new RegExp(`${$}rgba\\s*\\(${a},${a},${a},${a}\\)${p}`),N=new RegExp(`${$}#${o}${o}${o}${p}`),C=new RegExp(`${$}#${c}${c}${c}${p}`),M=new RegExp(`${$}#${o}${o}${o}${o}${p}`),I=new RegExp(`${$}#${c}${c}${c}${c}${p}`);function f(n){return parseInt(n,16)}function x(n){try{let e;if(e=C.exec(n))return[f(e[1]),f(e[2]),f(e[3]),1];if(e=y.exec(n))return[i(e[1]),i(e[5]),i(e[9]),1];if(e=E.exec(n))return[i(e[1]),i(e[5]),i(e[9]),h(e[13])];if(e=N.exec(n))return[f(e[1]+e[1]),f(e[2]+e[2]),f(e[3]+e[3]),1];if(e=I.exec(n))return[f(e[1]),f(e[2]),f(e[3]),h(f(e[4])/255)];if(e=M.exec(n))return[f(e[1]+e[1]),f(e[2]+e[2]),f(e[3]+e[3]),h(f(e[4]+e[4])/255)];if(n in w)return x(w[n]);throw new Error(`[seemly/rgba]: Invalid color value ${n}.`)}catch(e){throw e}}function j(n){return n>1?1:n<0?0:n}function b(n,e,t,r){return`rgba(${i(n)}, ${i(e)}, ${i(t)}, ${j(r)})`}function m(n,e,t,r,s){return i((n*e*(1-r)+t*r)/s)}function G(n,e){Array.isArray(n)||(n=x(n)),Array.isArray(e)||(e=x(e));const t=n[3],r=e[3],s=h(t+r-t*r);return b(m(n[0],t,e[0],r,s),m(n[1],t,e[1],r,s),m(n[2],t,e[2],r,s),s)}function J(n,e){const[t,r,s,u=1]=Array.isArray(n)?n:x(n);return e.alpha?b(t,r,s,e.alpha):b(t,r,s,u)}function P(n,e){const[t,r,s,u=1]=Array.isArray(n)?n:x(n),{lightness:g=1,alpha:l=1}=e;return k([t*g,r*g,s*g,u*l])}function h(n){const e=Math.round(Number(n)*100)/100;return e>1?1:e<0?0:e}function i(n){const e=Math.round(Number(n));return e>255?255:e<0?0:e}function k(n){const[e,t,r]=n;return 3 in n?`rgba(${i(e)}, ${i(t)}, ${i(r)}, ${h(n[3])})`:`rgba(${i(e)}, ${i(t)}, ${i(r)}, 1)`}function Q(n=8){return Math.random().toString(16).slice(2,2+n)}function U(n,e){const t=[];for(let r=0;r<n;++r)t.push(e);return t}export{q as a,J as b,G as c,_ as d,Q as e,U as f,D as g,W as h,H as i,T as j,B as p,x as r,P as s};
