import{C as P,B as K,D as T}from"./chart.js-BdzsiJWJ.js";import{f as C,y as O,j as m,K as q,a as A,o as R,I as U,w as k,L as x,n as N,M as w}from"./@vue-DQiKw4h0.js";const L={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},$={ariaLabel:{type:String},ariaDescribedby:{type:String}},z={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...L,...$},E=q[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function i(t){return w(t)?x(t):t}function F(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return w(e)?new Proxy(t,{}):t}function G(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function S(t,e){t.labels=e}function B(t,e,s){const o=[];t.datasets=e.map(n=>{const a=t.datasets.find(c=>c[s]===n[s]);return!a||!n.data||o.includes(a)?{...n}:(o.push(a),Object.assign(a,n),a)})}function H(t,e){const s={labels:[],datasets:[]};return S(s,t.labels),B(s,t.datasets,e),s}const J=C({props:z,setup(t,e){let{expose:s,slots:o}=e;const n=A(null),a=O(null);s({chart:a});const c=()=>{if(!n.value)return;const{type:r,data:p,options:y,plugins:f,datasetIdKey:v}=t,b=H(p,v),u=F(b,p);a.value=new P(n.value,{type:r,data:u,options:{...y},plugins:f})},d=()=>{const r=x(a.value);r&&(t.destroyDelay>0?setTimeout(()=>{r.destroy(),a.value=null},t.destroyDelay):(r.destroy(),a.value=null))},M=r=>{r.update(t.updateMode)};return R(c),U(d),k([()=>t.options,()=>t.data],(r,p)=>{let[y,f]=r,[v,b]=p;const u=x(a.value);if(!u)return;let g=!1;if(y){const l=i(y),D=i(v);l&&l!==D&&(G(u,l),g=!0)}if(f){const l=i(f.labels),D=i(b.labels),h=i(f.datasets),j=i(b.datasets);l!==D&&(S(u.config.data,l),g=!0),h&&h!==j&&(B(u.config.data,h,t.datasetIdKey),g=!0)}g&&N(()=>{M(u)})},{deep:!0}),()=>m("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:n},[m("p",{},[o.default?o.default():""])])}});function I(t,e){return P.register(e),C({props:L,setup(s,o){let{expose:n}=o;const a=O(null),c=d=>{a.value=d==null?void 0:d.chart};return n({chart:a}),()=>m(J,E({ref:c},{type:t,...s}))}})}const W=I("bar",K),X=I("doughnut",T);export{W as B,X as D};
