import{q as De,F as ze,C as Ne,d as W,B as Ie,g as Ee,i as ne,j as F,x as re,H as Ce,t as N,k as D,p as I,a7 as _e,b as R,w as Q,n as Ae,M as Fe,z as je,A as Pe,G as Ue}from"./@vue-CZZfnOpo.js";import{a as Z,o as ae}from"./evtd-CI_DDEu_.js";import{i as Be,d as pe,p as G,e as qe,a as Ke}from"./seemly-BN2oKcmS.js";import{u as ce}from"./@css-render-Cjja-lxT.js";import{h as Ge,u as q,o as Je,i as Qe}from"./vooks-6OdxQkCu.js";import{z as Ze}from"./vdirs-Bxp-63WN.js";import{R as Re}from"./@juggle-C8OzoCMD.js";import{C as et}from"./css-render-BDrvWz3H.js";function de(n,e,t="default"){const r=e[t];if(r===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);return r()}function fe(n,e=!0,t=[]){return n.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(De(String(r)));return}if(Array.isArray(r)){fe(r,e,t);return}if(r.type===ze){if(r.children===null)return;Array.isArray(r.children)&&fe(r.children,e,t)}else r.type!==Ne&&t.push(r)}}),t}function me(n,e,t="default"){const r=e[t];if(r===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);const i=fe(r());if(i.length===1)return i[0];throw new Error(`[vueuc/${n}]: slot[${t}] should have exactly one child.`)}let O=null;function We(){if(O===null&&(O=document.getElementById("v-binder-view-measurer"),O===null)){O=document.createElement("div"),O.id="v-binder-view-measurer";const{style:n}=O;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(O)}return O.getBoundingClientRect()}function tt(n,e){const t=We();return{top:e,left:n,height:0,width:0,right:t.width-n,bottom:t.height-e}}function le(n){const e=n.getBoundingClientRect(),t=We();return{left:e.left-t.left,top:e.top-t.top,bottom:t.height+t.top-e.bottom,right:t.width+t.left-e.right,width:e.width,height:e.height}}function nt(n){return n.nodeType===9?null:n.parentNode}function ke(n){if(n===null)return null;const e=nt(n);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:t,overflowX:r,overflowY:i}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+i+r))return e}return ke(e)}const Tt=W({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var e;Ie("VBinder",(e=Ee())===null||e===void 0?void 0:e.proxy);const t=ne("VBinder",null),r=F(null),i=o=>{r.value=o,t&&n.syncTargetWithParent&&t.setTargetRef(o)};let d=[];const b=()=>{let o=r.value;for(;o=ke(o),o!==null;)d.push(o);for(const g of d)ae("scroll",g,x,!0)},w=()=>{for(const o of d)Z("scroll",o,x,!0);d=[]},l=new Set,h=o=>{l.size===0&&b(),l.has(o)||l.add(o)},p=o=>{l.has(o)&&l.delete(o),l.size===0&&w()},x=()=>{Be(a)},a=()=>{l.forEach(o=>o())},f=new Set,m=o=>{f.size===0&&ae("resize",window,u),f.has(o)||f.add(o)},v=o=>{f.has(o)&&f.delete(o),f.size===0&&Z("resize",window,u)},u=()=>{f.forEach(o=>o())};return re(()=>{Z("resize",window,u),w()}),{targetRef:r,setTargetRef:i,addScrollListener:h,removeScrollListener:p,addResizeListener:m,removeResizeListener:v}},render(){return de("binder",this.$slots)}}),zt=W({name:"Target",setup(){const{setTargetRef:n,syncTarget:e}=ne("VBinder");return{syncTarget:e,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:e}=this;return n?Ce(me("follower",this.$slots),[[e]]):me("follower",this.$slots)}});function ve(n,e){console.error(`[vueuc/${n}]: ${e}`)}const{c:L}=et(),he="vueuc-style";function be(n){return n&-n}class Oe{constructor(e,t){this.l=e,this.min=t;const r=new Array(e+1);for(let i=0;i<e+1;++i)r[i]=0;this.ft=r}add(e,t){if(t===0)return;const{l:r,ft:i}=this;for(e+=1;e<=r;)i[e]+=t,e+=be(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;const{ft:t,min:r,l:i}=this;if(e>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=e*r;for(;e>0;)d+=t[e],e-=be(e);return d}getBound(e){let t=0,r=this.l;for(;r>t;){const i=Math.floor((t+r)/2),d=this.sum(i);if(d>e){r=i;continue}else if(d<e){if(t===i)return this.sum(t+1)<=e?t+1:i;t=i}else return i}return t}}function we(n){return typeof n=="string"?document.querySelector(n):n()}const rt=W({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:Ge(N(n,"show")),mergedTo:D(()=>{const{to:e}=n;return e??"body"})}},render(){return this.showTeleport?this.disabled?de("lazy-teleport",this.$slots):I(_e,{disabled:this.disabled,to:this.mergedTo},de("lazy-teleport",this.$slots)):null}}),ee={top:"bottom",bottom:"top",left:"right",right:"left"},ge={start:"end",center:"center",end:"start"},se={top:"height",bottom:"height",left:"width",right:"width"},ot={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},it={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},lt={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},ye={top:!0,bottom:!1,left:!0,right:!1},xe={top:"end",bottom:"start",left:"end",right:"start"};function st(n,e,t,r,i,d){if(!i||d)return{placement:n,top:0,left:0};const[b,w]=n.split("-");let l=w??"center",h={top:0,left:0};const p=(f,m,v)=>{let u=0,o=0;const g=t[f]-e[m]-e[f];return g>0&&r&&(v?o=ye[m]?g:-g:u=ye[m]?g:-g),{left:u,top:o}},x=b==="left"||b==="right";if(l!=="center"){const f=lt[n],m=ee[f],v=se[f];if(t[v]>e[v]){if(e[f]+e[v]<t[v]){const u=(t[v]-e[v])/2;e[f]<u||e[m]<u?e[f]<e[m]?(l=ge[w],h=p(v,m,x)):h=p(v,f,x):l="center"}}else t[v]<e[v]&&e[m]<0&&e[f]>e[m]&&(l=ge[w])}else{const f=b==="bottom"||b==="top"?"left":"top",m=ee[f],v=se[f],u=(t[v]-e[v])/2;(e[f]<u||e[m]<u)&&(e[f]>e[m]?(l=xe[f],h=p(v,f,x)):(l=xe[m],h=p(v,m,x)))}let a=b;return e[b]<t[se[b]]&&e[b]<e[ee[b]]&&(a=ee[b]),{placement:l!=="center"?`${a}-${l}`:a,left:h.left,top:h.top}}function ut(n,e){return e?it[n]:ot[n]}function at(n,e,t,r,i,d){if(d)switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top+r)}px`,left:`${Math.round(t.left-e.left+t.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2+r)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2+r)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height+r)}px`,left:`${Math.round(t.left-e.left+t.width/2+i)}px`,transform:"translateX(-50%)"}}}const dt=L([L(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),L(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[L("> *",{pointerEvents:"all"})])]),It=W({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const e=ne("VBinder"),t=q(()=>n.enabled!==void 0?n.enabled:n.show),r=F(null),i=F(null),d=()=>{const{syncTrigger:a}=n;a.includes("scroll")&&e.addScrollListener(l),a.includes("resize")&&e.addResizeListener(l)},b=()=>{e.removeScrollListener(l),e.removeResizeListener(l)};R(()=>{t.value&&(l(),d())});const w=ce();dt.mount({id:"vueuc/binder",head:!0,anchorMetaName:he,ssr:w}),re(()=>{b()}),Je(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const a=r.value;if(a===null)return;const f=e.targetRef,{x:m,y:v,overlap:u}=n,o=m!==void 0&&v!==void 0?tt(m,v):le(f);a.style.setProperty("--v-target-width",`${Math.round(o.width)}px`),a.style.setProperty("--v-target-height",`${Math.round(o.height)}px`);const{width:g,minWidth:M,placement:E,internalShift:_,flip:H}=n;a.setAttribute("v-placement",E),u?a.setAttribute("v-overlap",""):a.removeAttribute("v-overlap");const{style:T}=a;g==="target"?T.width=`${o.width}px`:g!==void 0?T.width=g:T.width="",M==="target"?T.minWidth=`${o.width}px`:M!==void 0?T.minWidth=M:T.minWidth="";const V=le(a),j=le(i.value),{left:X,top:P,placement:U}=st(E,o,V,_,H,u),s=ut(U,u),{left:c,top:y,transform:$}=at(U,j,o,P,X,u);a.setAttribute("v-placement",U),a.style.setProperty("--v-offset-left",`${Math.round(X)}px`),a.style.setProperty("--v-offset-top",`${Math.round(P)}px`),a.style.transform=`translateX(${c}) translateY(${y}) ${$}`,a.style.setProperty("--v-transform-origin",s),a.style.transformOrigin=s};Q(t,a=>{a?(d(),h()):b()});const h=()=>{Ae().then(l).catch(a=>console.error(a))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(a=>{Q(N(n,a),l)}),["teleportDisabled"].forEach(a=>{Q(N(n,a),h)}),Q(N(n,"syncTrigger"),a=>{a.includes("resize")?e.addResizeListener(l):e.removeResizeListener(l),a.includes("scroll")?e.addScrollListener(l):e.removeScrollListener(l)});const p=Qe(),x=q(()=>{const{to:a}=n;if(a!==void 0)return a;p.value});return{VBinder:e,mergedEnabled:t,offsetContainerRef:i,followerRef:r,mergedTo:x,syncPosition:l}},render(){return I(rt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,e;const t=I("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[I("div",{class:"v-binder-follower-content",ref:"followerRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))]);return this.zindexable?Ce(t,[[Ze,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});class ft{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Re)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const t of e){const r=this.elHandlersMap.get(t.target);r!==void 0&&r(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}const Me=new ft,$e=W({name:"ResizeObserver",props:{onResize:Function},setup(n){let e=!1;const t=Ee().proxy;function r(i){const{onResize:d}=n;d!==void 0&&d(i)}R(()=>{const i=t.$el;if(i===void 0){ve("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){ve("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(Me.registerHandler(i.nextElementSibling,r),e=!0)}),re(()=>{e&&Me.unregisterHandler(t.$el.nextElementSibling)})},render(){return Fe(this.$slots,"default")}});let te;function ct(){return typeof document>"u"?!1:(te===void 0&&("matchMedia"in window?te=window.matchMedia("(pointer:coarse)").matches:te=!1),te)}let ue;function Se(){return typeof document>"u"?1:(ue===void 0&&(ue="chrome"in window?window.devicePixelRatio:1),ue)}const Le="VVirtualListXScroll";function ht({columnsRef:n,renderColRef:e,renderItemWithColsRef:t}){const r=F(0),i=F(0),d=D(()=>{const h=n.value;if(h.length===0)return null;const p=new Oe(h.length,0);return h.forEach((x,a)=>{p.add(a,x.width)}),p}),b=q(()=>{const h=d.value;return h!==null?Math.max(h.getBound(i.value)-1,0):0}),w=h=>{const p=d.value;return p!==null?p.sum(h):0},l=q(()=>{const h=d.value;return h!==null?Math.min(h.getBound(i.value+r.value)+1,n.value.length-1):0});return Ie(Le,{startIndexRef:b,endIndexRef:l,columnsRef:n,renderColRef:e,renderItemWithColsRef:t,getLeft:w}),{listWidthRef:r,scrollLeftRef:i}}const Te=W({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:n,endIndexRef:e,columnsRef:t,getLeft:r,renderColRef:i,renderItemWithColsRef:d}=ne(Le);return{startIndex:n,endIndex:e,columns:t,renderCol:i,renderItemWithCols:d,getLeft:r}},render(){const{startIndex:n,endIndex:e,columns:t,renderCol:r,renderItemWithCols:i,getLeft:d,item:b}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:n,endColIndex:e,allColumns:t,item:b,getLeft:d});if(r!=null){const w=[];for(let l=n;l<=e;++l){const h=t[l];w.push(r({column:h,left:d(l),item:b}))}return w}return null}}),pt=L(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[L("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[L("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Et=W({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const e=ce();pt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:he,ssr:e}),R(()=>{const{defaultScrollIndex:s,defaultScrollKey:c}=n;s!=null?u({index:s}):c!=null&&u({key:c})});let t=!1,r=!1;je(()=>{if(t=!1,!r){r=!0;return}u({top:f.value,left:b.value})}),Pe(()=>{t=!0,r||(r=!0)});const i=q(()=>{if(n.renderCol==null&&n.renderItemWithCols==null||n.columns.length===0)return;let s=0;return n.columns.forEach(c=>{s+=c.width}),s}),d=D(()=>{const s=new Map,{keyField:c}=n;return n.items.forEach((y,$)=>{s.set(y[c],$)}),s}),{scrollLeftRef:b,listWidthRef:w}=ht({columnsRef:N(n,"columns"),renderColRef:N(n,"renderCol"),renderItemWithColsRef:N(n,"renderItemWithCols")}),l=F(null),h=F(void 0),p=new Map,x=D(()=>{const{items:s,itemSize:c,keyField:y}=n,$=new Oe(s.length,c);return s.forEach((z,C)=>{const S=z[y],A=p.get(S);A!==void 0&&$.add(C,A)}),$}),a=F(0),f=F(0),m=q(()=>Math.max(x.value.getBound(f.value-pe(n.paddingTop))-1,0)),v=D(()=>{const{value:s}=h;if(s===void 0)return[];const{items:c,itemSize:y}=n,$=m.value,z=Math.min($+Math.ceil(s/y+1),c.length-1),C=[];for(let S=$;S<=z;++S)C.push(c[S]);return C}),u=(s,c)=>{if(typeof s=="number"){E(s,c,"auto");return}const{left:y,top:$,index:z,key:C,position:S,behavior:A,debounce:k=!0}=s;if(y!==void 0||$!==void 0)E(y,$,A);else if(z!==void 0)M(z,A,k);else if(C!==void 0){const oe=d.value.get(C);oe!==void 0&&M(oe,A,k)}else S==="bottom"?E(0,Number.MAX_SAFE_INTEGER,A):S==="top"&&E(0,0,A)};let o,g=null;function M(s,c,y){const{value:$}=x,z=$.sum(s)+pe(n.paddingTop);if(!y)l.value.scrollTo({left:0,top:z,behavior:c});else{o=s,g!==null&&window.clearTimeout(g),g=window.setTimeout(()=>{o=void 0,g=null},16);const{scrollTop:C,offsetHeight:S}=l.value;if(z>C){const A=$.get(s);z+A<=C+S||l.value.scrollTo({left:0,top:z+A-S,behavior:c})}else l.value.scrollTo({left:0,top:z,behavior:c})}}function E(s,c,y){l.value.scrollTo({left:s,top:c,behavior:y})}function _(s,c){var y,$,z;if(t||n.ignoreItemResize||U(c.target))return;const{value:C}=x,S=d.value.get(s),A=C.get(S),k=(z=($=(y=c.borderBoxSize)===null||y===void 0?void 0:y[0])===null||$===void 0?void 0:$.blockSize)!==null&&z!==void 0?z:c.contentRect.height;if(k===A)return;k-n.itemSize===0?p.delete(s):p.set(s,k-n.itemSize);const K=k-A;if(K===0)return;C.add(S,K);const Y=l.value;if(Y!=null){if(o===void 0){const ie=C.sum(S);Y.scrollTop>ie&&Y.scrollBy(0,K)}else if(S<o)Y.scrollBy(0,K);else if(S===o){const ie=C.sum(S);k+ie>Y.scrollTop+Y.offsetHeight&&Y.scrollBy(0,K)}P()}a.value++}const H=!ct();let T=!1;function V(s){var c;(c=n.onScroll)===null||c===void 0||c.call(n,s),(!H||!T)&&P()}function j(s){var c;if((c=n.onWheel)===null||c===void 0||c.call(n,s),H){const y=l.value;if(y!=null){if(s.deltaX===0&&(y.scrollTop===0&&s.deltaY<=0||y.scrollTop+y.offsetHeight>=y.scrollHeight&&s.deltaY>=0))return;s.preventDefault(),y.scrollTop+=s.deltaY/Se(),y.scrollLeft+=s.deltaX/Se(),P(),T=!0,Be(()=>{T=!1})}}}function X(s){if(t||U(s.target))return;if(n.renderCol==null&&n.renderItemWithCols==null){if(s.contentRect.height===h.value)return}else if(s.contentRect.height===h.value&&s.contentRect.width===w.value)return;h.value=s.contentRect.height,w.value=s.contentRect.width;const{onResize:c}=n;c!==void 0&&c(s)}function P(){const{value:s}=l;s!=null&&(f.value=s.scrollTop,b.value=s.scrollLeft)}function U(s){let c=s;for(;c!==null;){if(c.style.display==="none")return!0;c=c.parentElement}return!1}return{listHeight:h,listStyle:{overflow:"auto"},keyToIndex:d,itemsStyle:D(()=>{const{itemResizable:s}=n,c=G(x.value.sum());return a.value,[n.itemsStyle,{boxSizing:"content-box",width:G(i.value),height:s?"":c,minHeight:s?c:"",paddingTop:G(n.paddingTop),paddingBottom:G(n.paddingBottom)}]}),visibleItemsStyle:D(()=>(a.value,{transform:`translateY(${G(x.value.sum(m.value))})`})),viewportItems:v,listElRef:l,itemsElRef:F(null),scrollTo:u,handleListResize:X,handleListScroll:V,handleListWheel:j,handleItemResize:_}},render(){const{itemResizable:n,keyField:e,keyToIndex:t,visibleItemsTag:r}=this;return I($e,{onResize:this.handleListResize},{default:()=>{var i,d;return I("div",Ue(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?I("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[I(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:b,renderItemWithCols:w}=this;return this.viewportItems.map(l=>{const h=l[e],p=t.get(h),x=b!=null?I(Te,{index:p,item:l}):void 0,a=w!=null?I(Te,{index:p,item:l}):void 0,f=this.$slots.default({item:l,renderedCols:x,renderedItemWithCols:a,index:p})[0];return n?I($e,{key:h,onResize:m=>this.handleItemResize(h,m)},{default:()=>f}):(f.key=h,f)})}})]):(d=(i=this.$slots).empty)===null||d===void 0?void 0:d.call(i)])}})}}),B="v-hidden",mt=L("[v-hidden]",{display:"none!important"}),Ct=W({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=F(null),r=F(null);function i(b){const{value:w}=t,{getCounter:l,getTail:h}=n;let p;if(l!==void 0?p=l():p=r.value,!w||!p)return;p.hasAttribute(B)&&p.removeAttribute(B);const{children:x}=w;if(b.showAllItemsBeforeCalculate)for(const M of x)M.hasAttribute(B)&&M.removeAttribute(B);const a=w.offsetWidth,f=[],m=e.tail?h==null?void 0:h():null;let v=m?m.offsetWidth:0,u=!1;const o=w.children.length-(e.tail?1:0);for(let M=0;M<o-1;++M){if(M<0)continue;const E=x[M];if(u){E.hasAttribute(B)||E.setAttribute(B,"");continue}else E.hasAttribute(B)&&E.removeAttribute(B);const _=E.offsetWidth;if(v+=_,f[M]=_,v>a){const{updateCounter:H}=n;for(let T=M;T>=0;--T){const V=o-1-T;H!==void 0?H(V):p.textContent=`${V}`;const j=p.offsetWidth;if(v-=f[T],v+j<=a||T===0){u=!0,M=T-1,m&&(M===-1?(m.style.maxWidth=`${a-j}px`,m.style.boxSizing="border-box"):m.style.maxWidth="");const{onUpdateCount:X}=n;X&&X(V);break}}}}const{onUpdateOverflow:g}=n;u?g!==void 0&&g(!0):(g!==void 0&&g(!1),p.setAttribute(B,""))}const d=ce();return mt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:he,ssr:d}),R(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:r,sync:i}},render(){const{$slots:n}=this;return Ae(()=>this.sync({showAllItemsBeforeCalculate:!1})),I("div",{class:"v-overflow",ref:"selfRef"},[Fe(n,"default"),n.counter?n.counter():I("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function He(n){return n instanceof HTMLElement}function Ve(n){for(let e=0;e<n.childNodes.length;e++){const t=n.childNodes[e];if(He(t)&&(Ye(t)||Ve(t)))return!0}return!1}function Xe(n){for(let e=n.childNodes.length-1;e>=0;e--){const t=n.childNodes[e];if(He(t)&&(Ye(t)||Xe(t)))return!0}return!1}function Ye(n){if(!vt(n))return!1;try{n.focus({preventScroll:!0})}catch{}return document.activeElement===n}function vt(n){if(n.tabIndex>0||n.tabIndex===0&&n.getAttribute("tabIndex")!==null)return!0;if(n.getAttribute("disabled"))return!1;switch(n.nodeName){case"A":return!!n.href&&n.rel!=="ignore";case"INPUT":return n.type!=="hidden"&&n.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let J=[];const At=W({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(n){const e=qe(),t=F(null),r=F(null);let i=!1,d=!1;const b=typeof document>"u"?null:document.activeElement;function w(){return J[J.length-1]===e}function l(u){var o;u.code==="Escape"&&w()&&((o=n.onEsc)===null||o===void 0||o.call(n,u))}R(()=>{Q(()=>n.active,u=>{u?(x(),ae("keydown",document,l)):(Z("keydown",document,l),i&&a())},{immediate:!0})}),re(()=>{Z("keydown",document,l),i&&a()});function h(u){if(!d&&w()){const o=p();if(o===null||o.contains(Ke(u)))return;f("first")}}function p(){const u=t.value;if(u===null)return null;let o=u;for(;o=o.nextSibling,!(o===null||o instanceof Element&&o.tagName==="DIV"););return o}function x(){var u;if(!n.disabled){if(J.push(e),n.autoFocus){const{initialFocusTo:o}=n;o===void 0?f("first"):(u=we(o))===null||u===void 0||u.focus({preventScroll:!0})}i=!0,document.addEventListener("focus",h,!0)}}function a(){var u;if(n.disabled||(document.removeEventListener("focus",h,!0),J=J.filter(g=>g!==e),w()))return;const{finalFocusTo:o}=n;o!==void 0?(u=we(o))===null||u===void 0||u.focus({preventScroll:!0}):n.returnFocusOnDeactivated&&b instanceof HTMLElement&&(d=!0,b.focus({preventScroll:!0}),d=!1)}function f(u){if(w()&&n.active){const o=t.value,g=r.value;if(o!==null&&g!==null){const M=p();if(M==null||M===g){d=!0,o.focus({preventScroll:!0}),d=!1;return}d=!0;const E=u==="first"?Ve(M):Xe(M);d=!1,E||(d=!0,o.focus({preventScroll:!0}),d=!1)}}}function m(u){if(d)return;const o=p();o!==null&&(u.relatedTarget!==null&&o.contains(u.relatedTarget)?f("last"):f("first"))}function v(u){d||(u.relatedTarget!==null&&u.relatedTarget===t.value?f("last"):f("first"))}return{focusableStartRef:t,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:m,handleEndFocus:v}},render(){const{default:n}=this.$slots;if(n===void 0)return null;if(this.disabled)return n();const{active:e,focusableStyle:t}=this;return I(ze,null,[I("div",{"aria-hidden":"true",tabindex:e?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),n(),I("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:e?"0":"-1",onFocus:this.handleEndFocus})])}});export{Tt as B,At as F,rt as L,$e as V,Et as a,It as b,zt as c,Ct as d,Me as r};
