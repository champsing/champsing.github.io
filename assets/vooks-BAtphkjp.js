import{r as y,k,w,c as d,j as B,h as g,z as E,p as I,E as P}from"./@vue-Dr7wdiue.js";import{a as v,o as h}from"./evtd-CI_DDEu_.js";function F(t){const e=y(!!t.value);if(e.value)return k(e);const n=w(t,r=>{r&&(e.value=!0,n())});return k(e)}function D(t){const e=d(t),n=y(e.value);return w(e,r=>{n.value=r}),typeof t=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){t.set(r)}}}function _(){return B()!==null}const x=typeof window<"u";let l,m;const j=()=>{var t,e;l=x?(e=(t=document)===null||t===void 0?void 0:t.fonts)===null||e===void 0?void 0:e.ready:void 0,m=!1,l!==void 0?l.then(()=>{m=!0}):m=!0};j();function H(t){if(m)return;let e=!1;g(()=>{m||l==null||l.then(()=>{e||t()})}),E(()=>{e=!0})}function U(t,e){return w(t,n=>{n!==void 0&&(e.value=n)}),d(()=>t.value===void 0?e.value:t.value)}function V(){const t=y(!1);return g(()=>{t.value=!0}),k(t)}function z(t,e){return d(()=>{for(const n of e)if(t[n]!==void 0)return t[n];return t[e[e.length-1]]})}const C=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function K(){return C}const L={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function S(t){return`(min-width: ${t}px)`}const p={};function Q(t=L){if(!x)return d(()=>[]);if(typeof window.matchMedia!="function")return d(()=>[]);const e=y({}),n=Object.keys(t),r=(s,o)=>{s.matches?e.value[o]=!0:e.value[o]=!1};return n.forEach(s=>{const o=t[s];let u,i;p[o]===void 0?(u=window.matchMedia(S(o)),u.addEventListener?u.addEventListener("change",a=>{i.forEach(f=>{f(a,s)})}):u.addListener&&u.addListener(a=>{i.forEach(f=>{f(a,s)})}),i=new Set,p[o]={mql:u,cbs:i}):(u=p[o].mql,i=p[o].cbs),i.add(r),u.matches&&i.forEach(a=>{a(u,s)})}),E(()=>{n.forEach(s=>{const{cbs:o}=p[t[s]];o.has(r)&&o.delete(r)})}),d(()=>{const{value:s}=e;return n.filter(o=>s[o])})}function $(t={},e){const n=I({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:s}=t,o=a=>{switch(a.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(f=>{if(f!==a.key)return;const c=r[f];if(typeof c=="function")c(a);else{const{stop:b=!1,prevent:M=!1}=c;b&&a.stopPropagation(),M&&a.preventDefault(),c.handler(a)}})},u=a=>{switch(a.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}s!==void 0&&Object.keys(s).forEach(f=>{if(f!==a.key)return;const c=s[f];if(typeof c=="function")c(a);else{const{stop:b=!1,prevent:M=!1}=c;b&&a.stopPropagation(),M&&a.preventDefault(),c.handler(a)}})},i=()=>{(e===void 0||e.value)&&(h("keydown",document,o),h("keyup",document,u)),e!==void 0&&w(e,a=>{a?(h("keydown",document,o),h("keyup",document,u)):(v("keydown",document,o),v("keyup",document,u))})};return _()?(P(i),E(()=>{(e===void 0||e.value)&&(v("keydown",document,o),v("keyup",document,u))})):i(),k(n)}export{K as a,U as b,z as c,$ as d,Q as e,F as f,V as i,H as o,D as u};
