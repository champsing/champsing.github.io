import{c as k,r as Q,s as $t,w as ut,g as _t,o as Ht,a as j,u as zt}from"./@vue-DoaWszXH.js";const Y=Math.min,O=Math.max,rt=Math.round,it=Math.floor,W=t=>({x:t,y:t}),It={left:"right",right:"left",bottom:"top",top:"bottom"},jt={start:"end",end:"start"};function At(t,e,n){return O(t,Y(e,n))}function et(t,e){return typeof t=="function"?t(e):t}function B(t){return t.split("-")[0]}function nt(t){return t.split("-")[1]}function Lt(t){return t==="x"?"y":"x"}function St(t){return t==="y"?"height":"width"}function _(t){return["top","bottom"].includes(B(t))?"y":"x"}function Pt(t){return Lt(_(t))}function Xt(t,e,n){n===void 0&&(n=!1);const o=nt(t),i=Pt(t),s=St(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=st(r)),[r,st(r)]}function Yt(t){const e=st(t);return[mt(t),e,mt(e)]}function mt(t){return t.replace(/start|end/g,e=>jt[e])}function qt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Ut(t,e,n,o){const i=nt(t);let s=qt(B(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(mt)))),s}function st(t){return t.replace(/left|right|bottom|top/g,e=>It[e])}function Kt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Gt(t){return typeof t!="number"?Kt(t):{top:t,right:t,bottom:t,left:t}}function lt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Rt(t,e,n){let{reference:o,floating:i}=t;const s=_(e),r=Pt(e),l=St(r),f=B(e),c=s==="y",a=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let d;switch(f){case"top":d={x:a,y:o.y-i.height};break;case"bottom":d={x:a,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-i.width,y:u};break;default:d={x:o.x,y:o.y}}switch(nt(e)){case"start":d[r]-=m*(n&&c?-1:1);break;case"end":d[r]+=m*(n&&c?-1:1);break}return d}const Jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),f=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:u}=Rt(c,o,f),m=o,d={},h=0;for(let p=0;p<l.length;p++){const{name:w,fn:g}=l[p],{x,y:v,data:A,reset:y}=await g({x:a,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:c,platform:r,elements:{reference:t,floating:e}});a=x??a,u=v??u,d={...d,[w]:{...d[w],...A}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(m=y.placement),y.rects&&(c=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:a,y:u}=Rt(c,m,f)),p=-1)}return{x:a,y:u,placement:m,strategy:i,middlewareData:d}};async function gt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:f}=t,{boundary:c="clippingAncestors",rootBoundary:a="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=et(e,t),h=Gt(d),w=l[m?u==="floating"?"reference":"floating":u],g=lt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:a,strategy:f})),x=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),A=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},y=lt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:v,strategy:f}):x);return{top:(g.top-y.top+h.top)/A.y,bottom:(y.bottom-g.bottom+h.bottom)/A.y,left:(g.left-y.left+h.left)/A.x,right:(y.right-g.right+h.right)/A.x}}const Qt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:f,elements:c}=e,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...w}=et(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const g=B(i),x=_(l),v=B(l)===l,A=await(f.isRTL==null?void 0:f.isRTL(c.floating)),y=m||(v||!p?[st(l)]:Yt(l)),D=h!=="none";!m&&D&&y.push(...Ut(l,p,h,A));const b=[l,...y],R=await gt(e,w),L=[];let F=((o=s.flip)==null?void 0:o.overflows)||[];if(a&&L.push(R[g]),u){const $=Xt(i,r,A);L.push(R[$[0]],R[$[1]])}if(F=[...F,{placement:i,overflows:L}],!L.every($=>$<=0)){var U,K;const $=(((U=s.flip)==null?void 0:U.index)||0)+1,bt=b[$];if(bt)return{data:{index:$,overflows:F},reset:{placement:bt}};let J=(K=F.filter(I=>I.overflows[0]<=0).sort((I,M)=>I.overflows[1]-M.overflows[1])[0])==null?void 0:K.placement;if(!J)switch(d){case"bestFit":{var G;const I=(G=F.filter(M=>{if(D){const V=_(M.placement);return V===x||V==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(V=>V>0).reduce((V,Nt)=>V+Nt,0)]).sort((M,V)=>M[1]-V[1])[0])==null?void 0:G[0];I&&(J=I);break}case"initialPlacement":J=l;break}if(i!==J)return{reset:{placement:J}}}return{}}}};async function Zt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=B(n),l=nt(n),f=_(n)==="y",c=["left","top"].includes(r)?-1:1,a=s&&f?-1:1,u=et(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&typeof h=="number"&&(d=l==="end"?h*-1:h),f?{x:d*a,y:m*c}:{x:m*c,y:d*a}}const te=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,f=await Zt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+f.x,y:s+f.y,data:{...f,placement:r}}}}},ee=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:w=>{let{x:g,y:x}=w;return{x:g,y:x}}},...f}=et(t,e),c={x:n,y:o},a=await gt(e,f),u=_(B(i)),m=Lt(u);let d=c[m],h=c[u];if(s){const w=m==="y"?"top":"left",g=m==="y"?"bottom":"right",x=d+a[w],v=d-a[g];d=At(x,d,v)}if(r){const w=u==="y"?"top":"left",g=u==="y"?"bottom":"right",x=h+a[w],v=h-a[g];h=At(x,h,v)}const p=l.fn({...e,[m]:d,[u]:h});return{...p,data:{x:p.x-n,y:p.y-o,enabled:{[m]:s,[u]:r}}}}}},ne=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:s,platform:r,elements:l}=e,{apply:f=()=>{},...c}=et(t,e),a=await gt(e,c),u=B(i),m=nt(i),d=_(i)==="y",{width:h,height:p}=s.floating;let w,g;u==="top"||u==="bottom"?(w=u,g=m===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(g=u,w=m==="end"?"top":"bottom");const x=p-a.top-a.bottom,v=h-a.left-a.right,A=Y(p-a[w],x),y=Y(h-a[g],v),D=!e.middlewareData.shift;let b=A,R=y;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(R=v),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(b=x),D&&!m){const F=O(a.left,0),U=O(a.right,0),K=O(a.top,0),G=O(a.bottom,0);d?R=h-2*(F!==0||U!==0?F+U:O(a.left,a.right)):b=p-2*(K!==0||G!==0?K+G:O(a.top,a.bottom))}await f({...e,availableWidth:R,availableHeight:b});const L=await r.getDimensions(l.floating);return h!==L.width||p!==L.height?{reset:{rects:!0}}:{}}}};function ct(){return typeof window<"u"}function z(t){return wt(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function P(t){var e;return(e=(wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wt(t){return ct()?t instanceof Node||t instanceof C(t).Node:!1}function E(t){return ct()?t instanceof Element||t instanceof C(t).Element:!1}function S(t){return ct()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function Ot(t){return!ct()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function oe(t){return["table","td","th"].includes(z(t))}function at(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function xt(t){const e=vt(),n=E(t)?T(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ie(t){let e=N(t);for(;S(e)&&!q(e);){if(xt(e))return e;if(at(e))return null;e=N(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function q(t){return["html","body","#document"].includes(z(t))}function T(t){return C(t).getComputedStyle(t)}function ft(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function N(t){if(z(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ot(t)&&t.host||P(t);return Ot(e)?e.host:e}function Ft(t){const e=N(t);return q(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&ot(e)?e:Ft(e)}function tt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ft(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=C(i);if(s){const l=ht(r);return e.concat(r,r.visualViewport||[],ot(i)?i:[],l&&n?tt(l):[])}return e.concat(i,tt(i,[],n))}function ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Mt(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=S(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=rt(n)!==s||rt(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function yt(t){return E(t)?t:t.contextElement}function X(t){const e=yt(t);if(!S(e))return W(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Mt(e);let r=(s?rt(n.width):n.width)/o,l=(s?rt(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const re=W(0);function Vt(t){const e=C(t);return!vt()||!e.visualViewport?re:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function se(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function H(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=yt(t);let r=W(1);e&&(o?E(o)&&(r=X(o)):r=X(t));const l=se(s,n,o)?Vt(s):W(0);let f=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,a=i.width/r.x,u=i.height/r.y;if(s){const m=C(s),d=o&&E(o)?C(o):o;let h=m,p=ht(h);for(;p&&o&&d!==h;){const w=X(p),g=p.getBoundingClientRect(),x=T(p),v=g.left+(p.clientLeft+parseFloat(x.paddingLeft))*w.x,A=g.top+(p.clientTop+parseFloat(x.paddingTop))*w.y;f*=w.x,c*=w.y,a*=w.x,u*=w.y,f+=v,c+=A,h=C(p),p=ht(h)}}return lt({width:a,height:u,x:f,y:c})}function le(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=P(o),l=e?at(e.floating):!1;if(o===r||l&&s)return n;let f={scrollLeft:0,scrollTop:0},c=W(1);const a=W(0),u=S(o);if((u||!u&&!s)&&((z(o)!=="body"||ot(r))&&(f=ft(o)),S(o))){const m=H(o);c=X(o),a.x=m.x+o.clientLeft,a.y=m.y+o.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-f.scrollLeft*c.x+a.x,y:n.y*c.y-f.scrollTop*c.y+a.y}}function ce(t){return Array.from(t.getClientRects())}function pt(t,e){const n=ft(t).scrollLeft;return e?e.left+n:H(P(t)).left+n}function ae(t){const e=P(t),n=ft(t),o=t.ownerDocument.body,i=O(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=O(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+pt(t);const l=-n.scrollTop;return T(o).direction==="rtl"&&(r+=O(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function fe(t,e){const n=C(t),o=P(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,f=0;if(i){s=i.width,r=i.height;const c=vt();(!c||c&&e==="fixed")&&(l=i.offsetLeft,f=i.offsetTop)}return{width:s,height:r,x:l,y:f}}function ue(t,e){const n=H(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=S(t)?X(t):W(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,f=i*s.x,c=o*s.y;return{width:r,height:l,x:f,y:c}}function Ct(t,e,n){let o;if(e==="viewport")o=fe(t,n);else if(e==="document")o=ae(P(t));else if(E(e))o=ue(e,n);else{const i=Vt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return lt(o)}function kt(t,e){const n=N(t);return n===e||!E(n)||q(n)?!1:T(n).position==="fixed"||kt(n,e)}function de(t,e){const n=e.get(t);if(n)return n;let o=tt(t,[],!1).filter(l=>E(l)&&z(l)!=="body"),i=null;const s=T(t).position==="fixed";let r=s?N(t):t;for(;E(r)&&!q(r);){const l=T(r),f=xt(r);!f&&l.position==="fixed"&&(i=null),(s?!f&&!i:!f&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(r)&&!f&&kt(t,r))?o=o.filter(a=>a!==r):i=l,r=N(r)}return e.set(t,o),o}function me(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?at(e)?[]:de(e,this._c):[].concat(n),o],l=r[0],f=r.reduce((c,a)=>{const u=Ct(e,a,i);return c.top=O(u.top,c.top),c.right=Y(u.right,c.right),c.bottom=Y(u.bottom,c.bottom),c.left=O(u.left,c.left),c},Ct(e,l,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function he(t){const{width:e,height:n}=Mt(t);return{width:e,height:n}}function pe(t,e,n){const o=S(e),i=P(e),s=n==="fixed",r=H(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const f=W(0);if(o||!o&&!s)if((z(e)!=="body"||ot(i))&&(l=ft(e)),o){const d=H(e,!0,s,e);f.x=d.x+e.clientLeft,f.y=d.y+e.clientTop}else i&&(f.x=pt(i));let c=0,a=0;if(i&&!o&&!s){const d=i.getBoundingClientRect();a=d.top+l.scrollTop,c=d.left+l.scrollLeft-pt(i,d)}const u=r.left+l.scrollLeft-f.x-c,m=r.top+l.scrollTop-f.y-a;return{x:u,y:m,width:r.width,height:r.height}}function dt(t){return T(t).position==="static"}function Et(t,e){if(!S(t)||T(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return P(t)===n&&(n=n.ownerDocument.body),n}function Wt(t,e){const n=C(t);if(at(t))return n;if(!S(t)){let i=N(t);for(;i&&!q(i);){if(E(i)&&!dt(i))return i;i=N(i)}return n}let o=Et(t,e);for(;o&&oe(o)&&dt(o);)o=Et(o,e);return o&&q(o)&&dt(o)&&!xt(o)?n:o||ie(t)||n}const ge=async function(t){const e=this.getOffsetParent||Wt,n=this.getDimensions,o=await n(t.floating);return{reference:pe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function we(t){return T(t).direction==="rtl"}const xe={convertOffsetParentRelativeRectToViewportRelativeRect:le,getDocumentElement:P,getClippingRect:me,getOffsetParent:Wt,getElementRects:ge,getClientRects:ce,getDimensions:he,getScale:X,isElement:E,isRTL:we};function ve(t,e){let n=null,o;const i=P(t);function s(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,f){l===void 0&&(l=!1),f===void 0&&(f=1),s();const{left:c,top:a,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const d=it(a),h=it(i.clientWidth-(c+u)),p=it(i.clientHeight-(a+m)),w=it(c),x={rootMargin:-d+"px "+-h+"px "+-p+"px "+-w+"px",threshold:O(0,Y(1,f))||1};let v=!0;function A(y){const D=y[0].intersectionRatio;if(D!==f){if(!v)return r();D?r(!1,D):o=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(A,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(A,x)}n.observe(t)}return r(!0),s}function Re(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:f=!1}=o,c=yt(t),a=i||s?[...c?tt(c):[],...tt(e)]:[];a.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const u=c&&l?ve(c,n):null;let m=-1,d=null;r&&(d=new ResizeObserver(g=>{let[x]=g;x&&x.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=d)==null||v.observe(e)})),n()}),c&&!f&&d.observe(c),d.observe(e));let h,p=f?H(t):null;f&&w();function w(){const g=H(t);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&n(),p=g,h=requestAnimationFrame(w)}return n(),()=>{var g;a.forEach(x=>{i&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),u==null||u(),(g=d)==null||g.disconnect(),d=null,f&&cancelAnimationFrame(h)}}const Oe=te,Ce=ee,Ee=Qt,Te=ne,ye=(t,e,n)=>{const o=new Map,i={platform:xe,...n},s={...i.platform,_c:o};return Jt(t,e,{...i,platform:s})};function be(t){return t!=null&&typeof t=="object"&&"$el"in t}function Tt(t){if(be(t)){const e=t.$el;return wt(e)&&z(e)==="#comment"?null:e}return t}function Z(t){return typeof t=="function"?t():zt(t)}function Bt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Dt(t,e){const n=Bt(t);return Math.round(e*n)/n}function De(t,e,n){n===void 0&&(n={});const o=n.whileElementsMounted,i=k(()=>{var b;return(b=Z(n.open))!=null?b:!0}),s=k(()=>Z(n.middleware)),r=k(()=>{var b;return(b=Z(n.placement))!=null?b:"bottom"}),l=k(()=>{var b;return(b=Z(n.strategy))!=null?b:"absolute"}),f=k(()=>{var b;return(b=Z(n.transform))!=null?b:!0}),c=k(()=>Tt(t.value)),a=k(()=>Tt(e.value)),u=Q(0),m=Q(0),d=Q(l.value),h=Q(r.value),p=$t({}),w=Q(!1),g=k(()=>{const b={position:d.value,left:"0",top:"0"};if(!a.value)return b;const R=Dt(a.value,u.value),L=Dt(a.value,m.value);return f.value?{...b,transform:"translate("+R+"px, "+L+"px)",...Bt(a.value)>=1.5&&{willChange:"transform"}}:{position:d.value,left:R+"px",top:L+"px"}});let x;function v(){if(c.value==null||a.value==null)return;const b=i.value;ye(c.value,a.value,{middleware:s.value,placement:r.value,strategy:l.value}).then(R=>{u.value=R.x,m.value=R.y,d.value=R.strategy,h.value=R.placement,p.value=R.middlewareData,w.value=b!==!1})}function A(){typeof x=="function"&&(x(),x=void 0)}function y(){if(A(),o===void 0){v();return}if(c.value!=null&&a.value!=null){x=o(c.value,a.value,v);return}}function D(){i.value||(w.value=!1)}return ut([s,r,l,i],v,{flush:"sync"}),ut([c,a],y,{flush:"sync"}),ut(i,D,{flush:"sync"}),_t()&&Ht(A),{x:j(u),y:j(m),strategy:j(d),placement:j(h),middlewareData:j(p),isPositioned:j(w),floatingStyles:g,update:v}}export{Te as a,Re as b,Ee as f,Oe as o,Ce as s,De as u};