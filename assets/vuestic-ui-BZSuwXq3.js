import{R as se,p as gt,J as pt,s as mt,S as z,g as w,i as ae,k as u,U as ze,V as Te,f as V,W as ht,u as y,X as q,m as Ct,Y as bt,d as Be,Z as yt,o as T,M as Le,c as St,F as Pt,q as wt,_ as xt,$ as j,G as Ve,a0 as Ie,w as B,D as Et,a as ge,a1 as $t,a2 as U,a3 as pe}from"./@vue-DJANZyIh.js";const me={light:{primary:"#154EC1",secondary:"#767C88",success:"#3D9209",info:"#158DE3",danger:"#E42222",warning:"#FFD43A",backgroundPrimary:"#f6f6f6",backgroundSecondary:"#FFFFFF",backgroundElement:"#ECF0F1",backgroundBorder:"#DEE5F2",textPrimary:"#262824",textInverted:"#FFFFFF",shadow:"rgba(0, 0, 0, 0.12)",focus:"#49A8FF",transparent:"rgba(0, 0, 0, 0)"},dark:{primary:"#3472F0",secondary:"#767C88",success:"#66BE33",info:"#3EAAF8",danger:"#F34030",warning:"#FFD952",backgroundPrimary:"#050A10",backgroundSecondary:"#1F262F",backgroundElement:"#131A22",backgroundBorder:"#3D4C58",textPrimary:"#F1F1F1",textInverted:"#0B121A",shadow:"rgba(255, 255, 255, 0.12)",focus:"#49A8FF",transparent:"rgba(0, 0, 0, 0)"}},Ot={xs:0,sm:640,md:1024,lg:1440,xl:1920},_t=()=>({enabled:!0,bodyClass:!0,thresholds:Ot}),J=(e,t=null)=>se(()=>[e],t),he=e=>typeof e=="string"?gt(pt,e):mt(e)?e:z(e),Ft=(e,t=null)=>Object.keys(e).reduce((n,o)=>{const s=e[o];return n[o]=typeof s=="function"?s:J(s,t),n},{}),Rt=e=>{const t=e.render||e.ssrRender;if(!t)return;const n=t.name==="_sfc_render"||t.name==="_sfc_ssrRender";return function(...o){const s=o[0],r=s.$.slots,a=new Proxy(s,{get(c,d){return d==="$slots"?Ft(r):c[d]}}),i=n?void 0:a;return t.call(i,a,...o.slice(1))}},Me=(e,t)=>Object.keys(e).filter(n=>!t.includes(n)).reduce((n,o)=>(n[o]=e[o],n),{}),At="$va:childComponents",ie=()=>{var e;const t=(e=w())==null?void 0:e.attrs["va-child"];if(!t)return null;const n=ae(At);return n!=null&&n.value?u(()=>n.value[t]):null},zt=/([a-z0-9])([A-Z])/g,Tt=e=>e.replace(zt,"$1-$2").toLowerCase(),Bt=(e,t)=>t in e?e[t]:e[Tt(t)],Lt=(e,t)=>{const n=e.props,o=ie();return new Proxy(n,{get:(s,r)=>{var a,i;if(typeof r!="string")return s[r];const c=(a=o==null?void 0:o.value)==null?void 0:a[r];if(c!==void 0)return c;const d=e.vnode.props||{},v=s[r];if(Bt(d,r)!==void 0)return v;const h=(i=t.value)==null?void 0:i[r];return h!==void 0?h:v}})},Vt=(e,t)=>{const n=e.attrs;return new Proxy(n,{get:(o,s)=>{var r;if(typeof s!="string")return o[s];if(s==="class")return ze([t.value.class,n.class]);if(s==="style")return Te([t.value.style,n.style]);const a=(r=t.value)==null?void 0:r[s];return a!==void 0?a:o[s]},ownKeys(o){return[...new Set([...Object.keys(n),...Object.keys(t.value)])]},getOwnPropertyDescriptor(o,s){return Reflect.getOwnPropertyDescriptor(t.value,s)??Reflect.getOwnPropertyDescriptor(n,s)}})},W="slot:",It=(e,t)=>{const n=e.slots,o=ie(),s=u(()=>Object.keys(t.value).reduce((r,a)=>(a.startsWith(W)&&(r[a.slice(W.length)]=t.value[a]),r),{}));return new Proxy(n,{get:(r,a)=>{var i,c;if(typeof a!="string")return r[a];const d=`${W}${a}`,v=(i=o==null?void 0:o.value)==null?void 0:i[d];if(v!==void 0)return J(he(v));const f=r[a];if(f!==void 0)return f;const h=(c=s.value)==null?void 0:c[a];return h!==void 0?J(he(h)):f},ownKeys(r){return[...new Set([...Object.keys(n),...Object.keys(s.value)])]},getOwnPropertyDescriptor(r,a){return Reflect.getOwnPropertyDescriptor(s.value,a)??Reflect.getOwnPropertyDescriptor(n,a)}})},Mt="VaLocalConfig",Dt=u(()=>[]);function jt(){return ae(Mt,Dt)}const kt=[null,void 0,""],Nt=e=>kt.includes(e),Ce=e=>!Nt(e),Gt=typeof process<"u"?process:{},Ht=Gt.env||{},Kt=Ht.NODE_ENV||"",De=typeof __DEV__<"u"?__DEV__:!["prod","production"].includes(Kt),Q=(...e)=>(De&&console.warn(...e),!1),Ut=e=>{throw new Error(`[Vuestic] ${e}`)};let ee=null,A=null;const be=e=>{(A==null?void 0:A._instance)===null&&(A=null),!(e===null&&A===null)&&(A=ee,ee=e)},je=()=>ee,ke=(e,t=void 0)=>{var n;const o=(n=je())==null?void 0:n._context.provides[e];return w()?ae(e,t):o??Ut("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.")},Wt=e=>e!==null&&typeof e=="object",$=e=>e===null||typeof e!="object"?e:Array.isArray(e)?e.map($):e instanceof Date?new Date(e.getTime()):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Map?new Map(Array.from(e.entries()).map(([t,n])=>[t,$(n)])):e instanceof Set?new Set(Array.from(e.values()).map($)):Wt(e)?Object.keys(e).reduce((t,n)=>(t[n]=$(e[n]),t),{}):e,X=e=>e&&typeof e=="object"&&!Array.isArray(e),L=(e,t)=>(X(e)||(e={}),Object.keys(t).forEach(n=>{const o=e[n],s=t[n];s instanceof RegExp||s instanceof Date?e[n]=s:X(o)&&X(s)?e[n]=L(Object.create(Object.getPrototypeOf(o),Object.getOwnPropertyDescriptors(o)),s):e[n]=s}),e),Xt=[{prefix:"bg",property:"background-color"},{prefix:"text",property:["color","fill"]}],Yt=()=>Xt,Zt=e=>({...e,get variables(){return this.presets[this.currentPresetName]},set variables(t){this.presets[this.currentPresetName]=t}}),qt=()=>Zt({threshold:150,presets:{light:me.light,dark:me.dark},currentPresetName:"light"}),Jt=e=>e,Qt=Jt([{name:"va-unsorted",to:"swap_vert"},{name:"va-sort-asc",to:"va-arrow-up"},{name:"va-sort-desc",to:"va-arrow-down"},{name:"va-arrow-first",to:"mi-first_page"},{name:"va-arrow-last",to:"mi-last_page"},{name:"va-arrow-right",to:"mi-chevron_right"},{name:"va-arrow-left",to:"mi-chevron_left"},{name:"va-arrow-down",to:"mi-expand_more"},{name:"va-arrow-up",to:"mi-expand_less"},{name:"va-calendar",to:"mi-calendar_today"},{name:"va-delete",to:"mi-delete_outline"},{name:"va-check",to:"mi-check"},{name:"va-check-circle",to:"mi-check_circle"},{name:"va-warning",to:"mi-warning"},{name:"va-clear",to:"mi-highlight_off"},{name:"va-close",to:"mi-close"},{name:"va-loading",to:"mi-loop"},{name:"va-plus",to:"mi-add"},{name:"va-minus",to:"mi-remove"}]),en=[{name:"mi-{icon}",class:"material-icons",resolve:({icon:e})=>({content:e})},{name:"{icon}",class:"material-icons",resolve:({icon:e})=>({content:e})}],tn=e=>(e.aliases=e.aliases||[],e.fonts=e.fonts||[],[...e.aliases,...Qt,...e.fonts,...en]),nn=()=>tn({}),on=()=>({VaIcon:{sizesConfig:{defaultSize:18,sizes:{small:14,medium:18,large:24}}},VaRating:{sizesConfig:{defaultSize:18,sizes:{small:14,medium:18,large:24}}},all:{},presets:{VaButton:{default:{backgroundOpacity:1,hoverBehavior:"mask",hoverOpacity:.15,pressedBehavior:"mask",pressedOpacity:.13},primary:{backgroundOpacity:.1,hoverBehavior:"opacity",hoverOpacity:.07,pressedBehavior:"opacity",pressedOpacity:.13},secondary:{backgroundOpacity:0,hoverBehavior:"opacity",hoverOpacity:.07,pressedBehavior:"opacity",pressedOpacity:.13},plain:{plain:!0,hoverBehavior:"mask",hoverOpacity:.15,pressedBehavior:"mask",pressedOpacity:.13},plainOpacity:{plain:!0,textOpacity:.6,hoverBehavior:"opacity",hoverOpacity:1,pressedBehavior:"opacity",pressedOpacity:.9}},VaInputWrapper:{solid:{background:"backgroundElement"},bordered:{class:"va-input-wrapper--bordered",background:"backgroundElement"}},VaCheckbox:{solid:{style:"--va-checkbox-background: var(--va-background-element)"}},VaRadio:{solid:{style:"--va-radio-background: var(--va-background-element)"}},VaMenu:{context:{cursor:!0,placement:"right-start",trigger:"right-click"}}}}),rn=()=>({search:"Search",noOptions:"Items not found",ok:"OK",cancel:"Cancel",uploadFile:"Upload file",undo:"Undo",dropzone:"Drop files here to upload",fileDeleted:"File deleted",closeAlert:"close alert",backToTop:"back to top",toggleDropdown:"toggle dropdown",carousel:"carousel",goPreviousSlide:"go previous slide",goNextSlide:"go next slide",goSlide:"go slide {index}",slideOf:"slide {index} of {length}",close:"close",openColorPicker:"open color picker",colorSelection:"color selection",colorName:"color {color}",decreaseCounter:"decrease counter",increaseCounter:"increase counter",selectAllRows:"select all rows",sortColumnBy:"sort column by {name}",selectRowByIndex:"select row {index}",resetDate:"reset date",nextPeriod:"next period",switchView:"switch view",previousPeriod:"previous period",removeFile:"remove file",reset:"reset",pagination:"pagination",goToTheFirstPage:"go to the first page",goToPreviousPage:"go to the previous page",goToSpecificPage:"go to the {page} page",goToSpecificPageInput:"enter the page number to go",goNextPage:"go next page",goLastPage:"go last page",currentRating:"current rating {value} of {max}",voteRating:"vote rating {value} of {max}",optionsFilter:"options filter",splitPanels:"split panels",movePaginationLeft:"move pagination left",movePaginationRight:"move pagination right",resetTime:"reset time",closeToast:"close toast",selectedOption:"Selected option",noSelectedOption:"Option is not selected",breadcrumbs:"breadcrumbs",counterValue:"counter value",selectedDate:"selected date",selectedTime:"selected time",progressState:"progress state",color:"color",next:"Next",back:"Previous",finish:"Finish",step:"step",progress:"progress",loading:"Loading",sliderValue:"Current slider value is {value}",switch:"Switch",inputField:"Input field",fileTypeIncorrect:"File type is incorrect",select:"Select an option"}),le=Symbol("GLOBAL_CONFIG"),sn=()=>({colors:qt(),icons:nn(),components:on(),breakpoint:_t(),i18n:rn(),colorsClasses:Yt(),routerComponent:void 0}),Ne=(e={})=>{const t=V(L(sn(),e));return{getGlobalConfig:()=>t.value,setGlobalConfig:r=>{const a=typeof r=="function"?r(t.value):r;t.value=$(a)},mergeGlobalConfig:r=>{const a=typeof r=="function"?r(t.value):r;t.value=L($(t.value),a)},globalConfig:t}},an=e=>{var t,n;const o=((t=w())==null?void 0:t.appContext.provides)||((n=je())==null?void 0:n._context.provides);if(!o)throw new Error("Vue app not found for provide");return o[le]=e,e};function _(){let e=ke(le);return e||(e=Ne(),an(e)),e}const ln=e=>"preset"in e,ye=e=>ln(e)?e.preset:void 0,cn=(e,t)=>{const n=jt(),{globalConfig:o}=_(),s=e.name,r=i=>(i instanceof Array?i:[i]).reduce((c,d)=>{var v,f,h;const C=(h=(f=(v=o.value.components)==null?void 0:v.presets)==null?void 0:f[s])==null?void 0:h[d];if(!C)return c;const g=ye(C);return{...c,...g?r(g):void 0,...C}},{}),a=ie();return u(()=>{var i,c;const d={...(i=o.value.components)==null?void 0:i.all,...(c=o.value.components)==null?void 0:c[s]},v=n.value.reduce((C,g)=>{const b=g[s];return b?{...C,...b}:C},{}),f=[t,a==null?void 0:a.value,v,d].filter(Ce).map(ye).filter(Ce).at(0),h=f?r(f):void 0;return{...d,...v,...h}})},un=e=>(t,n)=>{var o;const s=w(),r=cn(e,t),a=u(()=>Me(r.value,Object.keys(t))),i=Lt(s,r),c=Vt(s,a),d=It(s,r);s.props=i,s.attrs=c,s.slots=d;const v=(o=e.setup)==null?void 0:o.call(e,ht(i),{...n,attrs:c,slots:d});return typeof v=="object"&&!s.exposed&&n.expose(v),v},te=e=>{const t=un(e),n=Rt(e);return new Proxy(e,{get(o,s){return s in e?s==="setup"?t:s==="render"||s==="ssrRender"?n:Reflect.get(o,s):Reflect.get(o,s)}})},ne="__c",dn=e=>(e[ne]=te(e[ne]),e),fn=e=>"setup"in e?te(e):ne in e?dn(e):(e.setup=()=>({}),te(e)),Ge=fn,vn={defaultSize:48,sizes:{small:32,medium:48,large:64}},gn={defaultSize:1,sizes:{small:.75,medium:1,large:1.25}},pn={size:{type:[String,Number],default:"",validator:e=>typeof e=="string"||typeof e=="number"},sizesConfig:{type:Object,default:()=>vn},fontSizesConfig:{type:Object,default:()=>gn}},mn=/(?<fontSize>\d+)(?<extension>px|rem)/i,Se=e=>e/16-.5,hn=(e,t=(n=>(n=w())==null?void 0:n.type.name)())=>{const{getGlobalConfig:n}=_(),o=u(()=>{var i,c;return t?(c=(i=n().components)==null?void 0:i[t])==null?void 0:c.sizesConfig:void 0}),s=u(()=>{var i,c,d;const{defaultSize:v,sizes:f}=e.sizesConfig,h=(i=o.value)==null?void 0:i.defaultSize;if(!e.size)return`${v||h}px`;if(typeof e.size=="string"){const C=(d=(c=o.value)==null?void 0:c.sizes)==null?void 0:d[e.size],g=f[e.size];return g?`${g}px`:C?`${C}px`:e.size}return`${e.size}px`}),r=u(()=>{const{defaultSize:i,sizes:c}=e.fontSizesConfig;if(!e.size)return i;if(typeof e.size=="string"){if(e.size in c)return c[e.size];const d=e.size.match(mn);if(!d||!d.groups)throw new Error("Size prop should be either valid string or number");const{extension:v,fontSize:f}=d.groups;return v==="rem"?+f:Se(+f)}return Se(e.size)}),a=u(()=>`${r.value}rem`);return{sizeComputed:s,fontSizeComputed:a,fontSizeInRem:r}},He={preset:{type:[String,Array],default:void 0}},Cn=(e,t)=>t.test(e),Ke=(e,t)=>{if(typeof t!="string"&&t.global)return[...e.matchAll(t)].map(o=>o.slice(1));const n=e.match(t)||[];return n?n.length>1?n.slice(1):n:[]},Ue=/{[^}]*}/g,We=e=>e.replace(Ue,"(.*)"),bn=e=>(e.match(Ue)||[]).map(t=>t.replace(/{|}/g,"")),yn=(e,t)=>Ke(e,We(t)),Sn=(e,t)=>{const n=bn(t),o=yn(e,t);return n.reduce((s,r,a)=>({...s,[r]:o[a]}),{})},Pn=(e,t)=>(e.match(t)||[])[0]===e,wn=(e,t)=>{const n=We(t);return Pn(e,new RegExp(n))},Xe=e=>typeof e.name=="string",Ye=e=>e.name instanceof RegExp,xn=(e,t)=>Xe(t)?wn(e,t.name):Ye(t)?Cn(e,t.name):!1,En=(e,t)=>{const n=Sn(e,t.name);return t.resolve&&t.resolve(n)},$n=(e,t)=>{if(t.name.global)throw new Error(`Bad icon config with name ${t.name}. Please, don't use global regex as name.`);const n=Ke(e,t.name);return t.resolveFromRegex&&t.resolveFromRegex(...n)},On=(e,t)=>{if(Xe(t))return En(e,t);if(Ye(t))return $n(e,t);throw Error("Unknown icon config")},_n=(e,t,n=[])=>{const o=t.find(s=>n.includes(s.name.toString())?!1:xn(e,s));if(!o)throw new Error(`Can not find icon config from ${e}. Please provide default config.`);return o},Ze=(e,t,n=[])=>{if(!e)return;const o=_n(e,t,n),s=L(On(e,o),o);return n=[...n,o.name.toString()],L(Ze(s.to,t,n),s)},Fn=e=>{const t=["name","to","resolve","resolveFromRegex"],n=e;return t.forEach(o=>{delete n[o]}),n},Rn=(e,t)=>{const n=Ze(e,t);return n===void 0?{}:Fn(n)},An=()=>{const{globalConfig:e}=_();return{getIcon:t=>Rn(t,e.value.icons)}},H=e=>e,qe=Symbol("VaAppCachePlugin"),zn=H(()=>({install(e){const t={colorContrast:{}};e.provide(qe,t)}})),Tn=()=>{const e=ke(qe);return e||{colorContrast:{}}},Bn=e=>{const t=typeof e=="function"?u(e):u(e),n=new Proxy(t,{get(o,s,r){if(typeof t.value=="object")return y(Reflect.get(t.value,s,r))},set(o,s,r){return q(t.value[s])&&!q(r)?t.value[s].value=r:t.value[s]=r,!0},deleteProperty(o,s){return Reflect.deleteProperty(t.value,s)},has(o,s){return typeof t.value!="object"?!1:Reflect.has(t.value,s)},ownKeys(){return typeof t.value!="object"?[]:Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ct(n)},Ln=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),Vn=/[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm,Je=e=>{var t;return((t=e.match(Vn))==null?void 0:t.map(n=>n.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean))||[]},k=e=>Je(e).map(t=>t.toLowerCase()).join("-"),In=e=>Je(e).map((t,n)=>n===0?t.toLowerCase():Ln(t)).join(""),Qe=/^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/,et=/^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/,tt=/hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/,Mn=e=>Qe.test(e)||et.test(e)||tt.test(e),ce=e=>typeof e!="object"||e===null?!1:"h"in e&&"s"in e&&"l"in e,ue=e=>typeof e!="object"||e===null?!1:"r"in e&&"g"in e&&"b"in e,nt=e=>{if(!Qe.test(e))return null;const t=e.replace("#",""),n=t.length<6,[o,s,r,a]=n?t.split("").map(i=>parseInt(i+i,16)):t.match(/.{2}/g).map(i=>parseInt(i,16));return{r:o,g:s,b:r,a:a??1}},ot=e=>{if(!et.test(e))return null;const[t,n,o,s=1]=e.match(/[\d.]+/g).map(Number);return{r:t,g:n,b:o,a:s}},rt=e=>{if(!tt.test(e))return null;const[t,n,o,s="1"]=e.match(/[\d.]+%?/g);return{h:Number(t),s:Number(n.replace("%","")),l:Number(o.replace("%","")),a:s.endsWith("%")?Number(s.replace("%",""))/100:Number(s)}},Pe=e=>{const t=e.r/255,n=e.g/255,o=e.b/255,s=Math.max(t,n,o),r=Math.min(t,n,o);let a=0,i=0;const c=(s+r)/2;if(s!==r){const d=s-r;switch(i=c>.5?d/(2-s-r):d/(s+r),s){case t:a=(n-o)/d+(n<o?6:0);break;case n:a=(o-t)/d+2;break;case o:a=(t-n)/d+4;break}a*=60}return{h:Math.round(a),s:Math.round(i*100),l:Math.round(c*100),a:e.a}},Y=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),we=e=>{const t=e.h/360,n=e.s/100,o=e.l/100,s=o<.5?o*(1+n):o+n-o*n,r=2*o-s,a=Y(r,s,t+1/3),i=Y(r,s,t),c=Y(r,s,t-1/3);return{r:Math.round(a*255),g:Math.round(i*255),b:Math.round(c*255),a:e.a}},I=e=>{if(ce(e))return{...e};if(ue(e))return Pe(e);const t=nt(e)??ot(e);if(t)return Pe(t);const n=rt(e);if(n)return n;throw new Error(`Color ${e} is not valid. Please, provide valid color.`)},de=({h:e,s:t,l:n,a:o})=>`hsla(${e},${t}%,${n}%,${o??1})`,fe=e=>{if(ue(e))return{...e};if(ce(e))return we(e);const t=rt(e);if(t)return we(t);const n=nt(e)??ot(e);if(n)return n;throw new Error(`Color ${e} is not valid. Please, provide valid color.`)},st=({r:e,g:t,b:n,a:o})=>o===1?`rgb(${e},${t},${n})`:`rgba(${e},${t},${n},${o??1})`,Dn=e=>{if(ce(e))return de(e);if(ue(e))return st(e);if(typeof e=="string")return e;throw new Error(`Color ${e} is not valid. Please, provide valid color.`)},jn=(e,{h:t,s:n,l:o,a:s})=>{const r=I(e);return r.a=r.a??1,r.h=t??r.h,r.s=n??r.s,r.l=o??r.l,r.a=s??r.a,r.h<0&&(r.h=360+r.h),r.h>360&&(r.h=r.h-360),r.s=Math.max(0,Math.min(100,r.s)),r.l=Math.max(0,Math.min(100,r.l)),r.a=Math.max(0,Math.min(1,r.a)),r},kn=(e,{h:t,s:n,l:o,a:s})=>{const r=I(e);return r.a=r.a??1,r.h+=t??0,r.s+=n??0,r.l+=o??0,r.a+=s??0,r.h<0&&(r.h=360+r.h),r.h>360&&(r.h=r.h-360),r.s=Math.max(0,Math.min(100,r.s)),r.l=Math.max(0,Math.min(100,r.l)),r.a=Math.max(0,Math.min(1,r.a)),r},Nn=e=>/var\(--.+\)/.test(e),N=e=>`--va-${k(e)}`,xe=e=>In(e),F=(e,t)=>{const{r:n,g:o,b:s}=fe(e);return st({r:n,g:o,b:s,a:t})},Ee=e=>{const{r:t,g:n,b:o}=fe(e);return Math.sqrt(t*t*.241+n*n*.691+o*o*.068)},at=(e,t=.4)=>F(e,t),Gn=(e,t=.4)=>F(e,t),it=(e,t=.2)=>F(e,t),lt=(e,t=.3)=>F(e,t),x=(e,t)=>de(kn(I(e),t)),Hn=(e,t)=>de(jn(I(e),t)),Kn=e=>{const t=I(e);if(t.s<10)return x(t,{h:2,s:5,l:10});if(t.s<30)return x(t,{s:-14,l:11});if(t.h>=0&&t.h<44||t.h>=285)return x(t,{h:11,s:27,l:8});if(t.h>=44&&t.h<85)return x(t,{h:3,l:9});if(t.h>=85&&t.h<165)return x(t,{h:16,l:14});if(t.h>=165&&t.h<285)return x(t,{h:-15,s:3,l:2});throw new Error("This method should handle all colors. But it didn't for some reason.")},Un=e=>`linear-gradient(to right, ${Kn(e)}, ${Dn(e)})`,Wn=(e,t,n)=>{const o=F(t,n);return`linear-gradient(0deg, ${o}, ${o}), ${e}`},Xn=e=>e?e==="transparent"?!0:fe(e).a<=.1:!1,Yn={color:{type:String,default:""}},K=()=>{const e=_();if(!e)throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");const{globalConfig:t}=e,n=Bn({get:()=>t.value.colors.presets[t.value.colors.currentPresetName],set:l=>{o(l)}}),o=l=>{t.value.colors.presets[t.value.colors.currentPresetName]={...t.value.colors.variables,...l}},s=()=>n,r=(l,p,m)=>{if(p||(p=n.primary),l==="transparent")return"#ffffff00";if(l==="currentColor")return l;if(l!=null&&l.startsWith("on")){const R=l.slice(2);if(n[xe(R)])return r(h(r(R)),void 0,m)}l||(l=r(p));const S=n[l]||n[xe(l)];return S?m?`var(${N(l)})`:S:Mn(l)||m&&Nn(l)?l:(Q(`'${l}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`),r(p))},a=l=>u({get(){return r(l)},set(p){o({[l]:p})}}),i=(l,p="va")=>Object.keys(l).filter(m=>l[m]!==void 0).reduce((m,S)=>(m[`--${p}-${k(S)}`]=r(l[S],void 0,!0),m[`--${p}-on-${k(S)}`]=r(h(r(l[S])),void 0,!0),m),{}),c=Tn(),d=l=>typeof l!="string"?Ee(l):(c.colorContrast[l]||(c.colorContrast[l]=Ee(l)),c.colorContrast[l]),v=u(()=>d(r("textPrimary"))>255/2?"textInverted":"textPrimary"),f=u(()=>d(r("textPrimary"))>255/2?"textPrimary":"textInverted"),h=(l,p,m)=>{const S=`on${bt(String(l))}`;return n[S]?n[S]:(p=p||v.value,m=m||f.value,d(l)>t.value.colors.threshold?p:m)},C=u({get:()=>t.value.colors.currentPresetName,set:l=>{b(l)}}),g=u(()=>t.value.colors.presets),b=l=>{if(t.value.colors.currentPresetName=l,!t.value.colors.presets[l])return Q(`Preset ${l} does not exist`)};return{colors:n,currentPresetName:C,presets:g,applyPreset:b,setColors:o,getColors:s,getColor:r,getComputedColor:a,getBoxShadowColor:at,getBoxShadowColorFromBg:Gn,getHoverColor:it,getFocusColor:lt,getGradientBackground:Un,getTextColor:h,shiftHSLAColor:x,setHSLAColor:Hn,colorsToCSSVariable:i,colorToRgba:F,getStateMaskGradientBackground:Wn}},Zn=Be({name:"VaIcon",__name:"VaIcon",props:{...pn,...He,name:{type:String,default:""},tag:{type:String},component:{type:Object},color:{type:String},rotation:{type:[String,Number]},spin:{type:[String,Boolean]},flip:{type:String,default:"off",validator:e=>["off","horizontal","vertical","both"].includes(e)}},setup(e){const t=e,{getColor:n}=K(),{sizeComputed:o}=hn(t),{getIcon:s}=An(),r=u(()=>s(t.name)),a=u(()=>t.component||t.tag||r.value.component||r.value.tag||"i"),i=yt(),c=u(()=>({...r.value.attrs,...Me(i,["class"])})),d=b=>{if(!(b===void 0||b===!1))return b==="counter-clockwise"?"va-icon--spin-reverse":"va-icon--spin"},v=u(()=>[r.value.class,d(t.spin??r.value.spin)]),f=u(()=>{const b=t.rotation?`rotate(${t.rotation}deg)`:"",l=t.flip==="vertical"||t.flip==="both"?-1:1,p=t.flip==="horizontal"||t.flip==="both"?-1:1;return`${t.flip==="off"?"":`scale(${l}, ${p})`} ${b}`.trim()}),h=u(()=>({transform:f.value,cursor:i.onClick?"pointer":null,color:t.color?n(t.color,void 0,!0):r.value.color,fontSize:o.value,height:o.value,lineHeight:o.value})),C=u(()=>i.tabindex??-1),g=u(()=>i.role!=="button"||C.value<0);return(b,l)=>(T(),z(Ie(a.value),Ve({class:["va-icon",v.value],style:h.value,"aria-hidden":g.value,notranslate:""},c.value),{default:se(()=>[Le(b.$slots,"default",{},()=>[r.value.content?(T(),St(Pt,{key:0},[wt(xt(r.value.content),1)],64)):j("",!0)])]),_:3},16,["class","style","aria-hidden"]))}}),$e=Ge(Zn),ve=()=>typeof window>"u",qn=()=>!ve(),Jn=()=>typeof window>"u"?void 0:window,Qn=e=>{const t=u(qn),n=V(null);return B(t,()=>{t.value&&(n.value=e())},{immediate:!0}),n},eo=()=>Qn(()=>window),O=e=>{if(e&&typeof e=="object"&&(e=y(e),!!e))return typeof e.$el<"u"?e.$el:e},oe=(e,...t)=>{if(!(!e||typeof e!="object")){if("addEventListener"in e&&typeof e.addEventListener=="function"){e.addEventListener(...t);return}"parentElement"in e&&oe(e.parentElement,...t)}},re=(e,...t)=>{if(!(!e||typeof e!="object")){if("removeEventListener"in e&&typeof e.removeEventListener=="function"){e.removeEventListener(...t);return}"parentElement"in e&&re(e.parentElement,...t)}},Oe=(e,t,n)=>{const o=n&&typeof n!="boolean"?n:eo(),s=typeof n=="boolean"?n:!1;B(o,(r,a)=>{Array.isArray(e)?e.forEach(i=>{oe(O(y(r)),i,t,s),re(O(y(a)),i,t,s)}):(oe(O(y(r)),e,t,s),re(O(y(a)),e,t,s))},{immediate:!0})},to=e=>e.config.globalProperties,ct=(e,t,n)=>{const o=to(e);o[t]=n},no=H((e={})=>({install(t){const n=Ne(e);e!=null&&e.componentsAll&&console.warn("Global config -> `componentsAll` was moved to Global config -> components.all. Please replace this to make it work. More info here: https://github.com/epicmaxco/vuestic-ui/issues/1967"),t.provide(le,n),ct(t,"$vaConfig",n)}})),oo=(e,t)=>{if(ve())return;let n=document.getElementById(e);n?n.innerHTML=t():(n=document.createElement("style"),n.setAttribute("type","text/css"),n.setAttribute("id",e),n.innerHTML=t(),document.head.append(n))},ro=e=>{var t;(t=document.getElementById(e))==null||t.remove()},_e=(e,t)=>`${N(e)}: ${t};
`,Z="data-va-app",Fe=e=>`va-color-variables-${e}`,so=(e,t)=>{const{colors:n,getTextColor:o,getColor:s,currentPresetName:r,applyPreset:a}=K(),i=(g=n)=>{if(!g)return;const b=Object.keys(g),l=b.map(m=>`${N(m)}: ${g[m]}`).join(";"),p=b.map(m=>`${N(`on-${m}`)}: ${s(o(g[m]))}`).join(";");return`${l};${p}`},c=(g=n,b=":root, :host")=>{const l=Object.keys(g);let p=`${b} {
`;return l.forEach(m=>{p+=_e(m,g[m])}),l.forEach(m=>{p+=_e(`on-${m}`,s(o(g[m])))}),p+=`}
`,p},d=u(()=>e._uid),v=u(()=>":root, :host"),f=g=>{if(!g||ve())return;const b=c(g,v.value);oo(Fe(d.value),()=>b)};function h(){return{[Z]:d.value}}const C=e.mount;return e.mount=function(...g){const b=C.apply(this,g),l=e._container,p=l.getAttribute(Z);return p&&p!==d.value.toString()&&ro(Fe(p)),l.setAttribute(Z,d.value.toString()),b},B(n,g=>{f(g)},{immediate:!0,deep:!0}),{colors:n,currentPresetName:r,getAppStylesRootAttribute:h,renderCSSVariables:i,updateColors:f,renderCSSVariablesStyleContent:c}},ao=H(e=>({install(t){ct(t,"$vaColorConfig",so(t))}})),io=e=>e.startsWith("$t:"),lo=e=>({type:String,default:e}),Re=(e,t)=>(t&&Object.keys(t).forEach(n=>{e=e.replace(`{${n}}`,String(t[n]))}),e),co=()=>{const{globalConfig:e}=_(),t=u(()=>e.value.i18n);function n(s,r){var a;const i=(a=w())==null?void 0:a.appContext.config.globalProperties.$t;if(typeof i=="function"){const d=i(`vuestic.${s}`,r);if(d)return d}const c=t.value[s];return c?Re(c,r)||s:(Q(`${s} not found in VuesticUI i18n config`),s)}function o(s,r){return s?io(s)?n(s.slice(3),r):Re(s,r)||s:""}return{tp:o,t:n}},uo=(e,t=!1)=>{const{props:n}=w(),{getColor:o,getTextColor:s}=K();return{textColorComputed:u(()=>{if(n.textColor)return o(n.textColor);const a=e?y(e):n.color;if(!a)return"currentColor";const i=o(a);return Xn(i)?"currentColor":y(t)?i:o(s(i))})}},fo={tag:{type:String,default:"span"},to:{type:[String,Object],default:void 0},replace:{type:Boolean,default:void 0},append:{type:Boolean,default:void 0},exact:{type:Boolean,default:void 0},activeClass:{type:String,default:void 0},exactActiveClass:{type:String,default:void 0},href:{type:String,default:void 0},target:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},vo=e=>{const t=w(),n=u(()=>t==null?void 0:t.appContext.config.globalProperties),o=u(()=>{var f;return(f=n.value)==null?void 0:f.$router}),s=u(()=>{var f;return(f=n.value)==null?void 0:f.$route}),{getGlobalConfig:r}=_(),a=u(()=>{if(e.disabled)return e.tag;if(e.href&&!e.to)return"a";const f=r();return f.routerComponent&&e.to?f.routerComponent:e.to&&o.value!==void 0?"router-link":e.to&&o.value===void 0?"a":e.tag||"div"}),i=u(()=>e.disabled?!1:!!(e.href||e.to)),c=u(()=>i.value?a.value==="a"?{target:e.target,href:v.value}:{target:e.target,to:e.to,replace:e.replace,append:e.append,activeClass:e.activeClass,exact:e.exact,exactActiveClass:e.exactActiveClass}:{}),d=u(()=>{if(!o.value||!e.to)return!1;const f=o.value.resolve(e.to).href,h=o.value.currentRoute.value.path;return f.replace("#","")===h.replace("#","")}),v=u(()=>{var f;return e.href?e.href:s.value===void 0&&e.to?e.to:e.to?(f=o.value)==null?void 0:f.resolve(e.to,s.value).href:void 0});return{isLinkTag:i,tagComputed:a,hrefComputed:v,isActiveRouterLink:d,linkAttributesComputed:c}},go=(e,t)=>Object.keys(e).filter(n=>t.includes(n)).reduce((n,o)=>(n[o]=e[o],n),{}),po=e=>{if(q(e))return u({get(){return O(e.value)},set(n){e.value=n}});const t=Et();return u({set(n){t.value=O(n)},get(){return t.value}})};function mo(e,t){const n=V(!1),o=()=>{n.value=!0},s=()=>{n.value=!1},r=po(e);return Oe("mouseenter",o,r),Oe("mouseleave",s,r),{isHovered:n,onMouseEnter:o,onMouseLeave:s}}const ho=(e,t)=>{De&&!e&&console.warn('You must pass the @param "prefix" to the useBem hook!');const n=u(()=>typeof t=="function"?t():y(t)),o=u(()=>Object.entries(y(n)).reduce((a,[i,c])=>(c&&(a[`${e}--${k(i)}`]=!0),a),{})),s=u(()=>Object.keys(o.value)),r=u(()=>s.value.join(" "));return new Proxy({},{ownKeys(){return Reflect.ownKeys(o.value)},getOwnPropertyDescriptor(a,i){return Reflect.getOwnPropertyDescriptor(o.value,i)},get(a,i,c){switch(i){case"asArray":return s;case"asString":return r;case"asObject":return o;default:return Reflect.get(o.value,i,c)}}})},G=Symbol("NOT_PROVIDED"),Co=(e,t)=>{const n=w();return u(()=>{if(!(n!=null&&n.vnode.props))return G;const o=t[e];return e in n.vnode.props?o:G})},bo={stateful:{type:Boolean,default:!1},modelValue:{type:void 0}},yo=["update:modelValue"],So=(e,t,n="modelValue",o={})=>{const{eventName:s,defaultValue:r}=o,a=s||`update:${n.toString()}`,i=Co(n,e),c="defaultValue"in o,d=V(i.value===G?c?r:e[n]:i.value);let v;const f=()=>{v=B(()=>e[n],C=>{d.value=C})};B(()=>e.stateful,C=>{C?f():v==null||v()},{immediate:!0});const h=u({get:()=>e.stateful?d.value:e[n],set:C=>{e.stateful&&(d.value=C),t(a,C)}});return Object.defineProperty(h,"stateful",{get:()=>e.stateful}),Object.defineProperty(h,"userProvided",{get:()=>i.value!==G}),{valueComputed:h}};var Ae;function Po(){const e=V(!1);let t=!1;return{hasKeyboardFocus:e,keyboardFocusListeners:{mousedown:()=>{t=!0},focus:()=>{t||(e.value=!0),t=!1},blur:()=>{e.value=!1,t=!1}}}}(Ae=Jn())==null||Ae.addEventListener("mousedown",()=>{setTimeout(()=>{},300)});const wo={class:"va-chip__content"},xo=Be({name:"VaChip",__name:"VaChip",props:{...fo,...Yn,...bo,...He,modelValue:{type:Boolean,default:!0},closeable:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},square:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},flat:{type:Boolean,default:!1},icon:{type:String,default:""},tag:{type:String,default:"span"},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},ariaCloseLabel:lo("$t:close")},emits:[...yo,"focus"],setup(e,{expose:t,emit:n}){const o=e,s=n,{getColor:r}=K(),a=u(()=>r(o.color)),i=u(()=>o.outline?a.value:""),c=u(()=>!!(o.outline||o.flat)),{textColorComputed:d}=uo(a,c),{hasKeyboardFocus:v,keyboardFocusListeners:f}=Po(),h=u(()=>{if(!(!o.shadow||o.flat||o.outline||o.disabled||v.value))return`0 0.125rem 0.19rem 0 ${at(a.value)}`}),{valueComputed:C}=So(o,s),{tagComputed:g,hrefComputed:b}=vo(o),{isHovered:l,onMouseEnter:p,onMouseLeave:m}=mo(),S=()=>{o.disabled||(C.value=!1)},R=u(()=>o.size),ut=u(()=>o.disabled?-1:0),dt=ho("va-chip",()=>({...go(o,["disabled","readonly","square"]),small:o.size==="small",large:o.size==="large"})),ft=u(()=>{const P={color:d.value,borderColor:i.value,background:"",boxShadow:h.value};return o.outline||o.flat?v.value?P.background=lt(a.value):!o.readonly&&l.value&&(P.background=it(a.value)):P.background=a.value,P}),{tp:vt}=co();return t({close:S}),(P,E)=>y(C)?(T(),z(Ie(y(g)),{key:0,class:ze(["va-chip",y(dt)]),href:y(b),target:P.target,to:P.to,replace:P.replace,exact:P.exact,"active-class":P.activeClass,"exact-active-class":P.exactActiveClass,style:Te(ft.value)},{default:se(()=>[ge("span",Ve({class:"va-chip__inner",onFocus:E[0]||(E[0]=M=>P.$emit("focus")),onMouseenter:E[1]||(E[1]=(...M)=>y(p)&&y(p)(...M)),onMouseleave:E[2]||(E[2]=(...M)=>y(m)&&y(m)(...M))},$t(y(f),!0)),[e.icon?(T(),z(y($e),{key:0,class:"va-chip__icon",name:e.icon,size:R.value},null,8,["name","size"])):j("",!0),ge("span",wo,[Le(P.$slots,"default")]),e.closeable?(T(),z(y($e),{key:1,role:"button",name:"va-close",class:"va-chip__close-icon","aria-label":y(vt)(P.$props.ariaCloseLabel),tabindex:ut.value,size:R.value,onClick:U(S,["stop"]),onKeydown:[pe(U(S,["stop"]),["enter"]),pe(U(S,["stop"]),["space"])]},null,8,["aria-label","tabindex","size","onKeydown"])):j("",!0)],16)]),_:3},8,["href","target","to","replace","exact","active-class","exact-active-class","class","style"])):j("",!0)}}),_o=Ge(xo),Eo=e=>typeof e=="function",D=(e,t,...n)=>{Eo(t)?e.use(t(...n)):e.use(t)},$o=["GlobalConfigPlugin","ColorConfigPlugin"],Fo=H((e={})=>({install(t){const{config:n,components:o,plugins:s}=e;be(t),D(t,(s==null?void 0:s.GlobalConfigPlugin)||no,n),D(t,(s==null?void 0:s.CachePlugin)||zn),D(t,(s==null?void 0:s.ColorConfigPlugin)||ao,n),s&&Object.entries(s).forEach(([r,a])=>{$o.includes(r)||D(t,a)}),o&&Object.entries(o).forEach(([r,a])=>{t.component(r,a)}),be(null)}}));export{_o as V,Fo as c};