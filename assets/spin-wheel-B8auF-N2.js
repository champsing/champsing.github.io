function p(i=0,e=0,t=14){return parseFloat((Math.random()*(e-i)+i).toFixed(t))}function m(i=0){return i*Math.PI/180}function w(i,e,t){return e<t?e<=i&&i<t:e<=i||i<t}function y(i,e,t,s){s.save(),s.font=`1px ${e}`;const r=s.measureText(i).width;return s.restore(),t/r}function M(i={x:0,y:0},e,t,s){return(i.x-e)**2+(i.y-t)**2<=s**2}function v(i={x:0,y:0},e={},t=1){const s=e.getBoundingClientRect();return{x:(i.x-s.left)*t,y:(i.y-s.top)*t}}function I(i,e,t,s){const r=i-t,n=e-s;let a=Math.atan2(-n,-r);return a*=180/Math.PI,a<0&&(a+=360),a}function W(i=0,e=0){const t=i+e;let s;return t>0?s=t%360:s=360+t%360,s===360&&(s=0),s}function E(i=0,e=0){const t=180-e;return 180-W(i,t)}function x(i=0,e=0,t=1){let s=(i%360+e)%360;return s=A(s),s=(t===1?360-s:360+s)%360,s*=t,i+s}function R(i){return typeof i=="object"&&!Array.isArray(i)&&i!==null}function d(i){return typeof i=="number"&&!Number.isNaN(i)}function l({val:i,isValid:e,errorMessage:t,defaultValue:s,action:r=null}){if(e)return r?r():i;if(i===void 0)return s;throw new Error(t)}function A(i=0){return Number(i.toFixed(9))}function T(i){return Math.sin(i*Math.PI/2)}function k(i={},e={}){if(window.ResizeObserver){const t=new ResizeObserver(()=>{e({redraw:!0})});return t.observe(i),{stop:()=>{t.unobserve(i),t.disconnect()}}}return window.addEventListener("resize",e),{stop:()=>{window.removeEventListener("resize",e)}}}const g=-90,C=500,S=250,L=Object.freeze({left:"left",right:"right",center:"center"}),o=Object.freeze({wheel:{borderColor:"#000",borderWidth:1,debug:!1,image:null,isInteractive:!0,itemBackgroundColors:["#fff"],itemLabelAlign:L.right,itemLabelBaselineOffset:0,itemLabelColors:["#000"],itemLabelFont:"sans-serif",itemLabelFontSizeMax:C,itemLabelRadius:.85,itemLabelRadiusMax:.2,itemLabelRotation:0,itemLabelStrokeColor:"#fff",itemLabelStrokeWidth:0,items:[],lineColor:"#000",lineWidth:1,pixelRatio:0,radius:.95,rotation:0,rotationResistance:-35,rotationSpeedMax:300,offset:{x:0,y:0},onCurrentIndexChange:null,onRest:null,onSpin:null,overlayImage:null,pointerAngle:0},item:{backgroundColor:null,image:null,imageOpacity:1,imageRadius:.5,imageRotation:0,imageScale:1,label:"",labelColor:null,value:null,weight:1}}),c=Object.freeze({pointerLineColor:"#ff00ff",labelBoundingBoxColor:"#ff00ff",labelRadiusColor:"#00ff00",dragPointHue:300});function V(i={}){P(i),i._handler_onResize=k(i._canvasContainer,({redraw:t=!0})=>{i.resize(),t&&i.draw(performance.now())});const e=()=>{i._mediaQueryList=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),i._mediaQueryList.addEventListener("change",i._handler_onDevicePixelRatioChange,{once:!0})};i._handler_onDevicePixelRatioChange=()=>{i.resize(),e()},e()}function z(i={}){const e=i.canvas;"PointerEvent"in window?(e.removeEventListener("pointerdown",i._handler_onPointerDown),e.removeEventListener("pointermove",i._handler_onPointerMoveRefreshCursor)):(e.removeEventListener("touchstart",i._handler_onTouchStart),e.removeEventListener("mousedown",i._handler_onMouseDown),e.removeEventListener("mousemove",i._handler_onMouseMoveRefreshCursor)),i._handler_onResize.stop(),i._mediaQueryList.removeEventListener("change",i._handler_onDevicePixelRatioChange)}function P(i={}){const e=i.canvas;i._handler_onPointerMoveRefreshCursor=(t={})=>{const s={x:t.clientX,y:t.clientY};i._isCursorOverWheel=i.wheelHitTest(s),i.refreshCursor()},i._handler_onMouseMoveRefreshCursor=(t={})=>{const s={x:t.clientX,y:t.clientY};i._isCursorOverWheel=i.wheelHitTest(s),i.refreshCursor()},i._handler_onPointerDown=(t={})=>{const s={x:t.clientX,y:t.clientY};if(!i.isInteractive||!i.wheelHitTest(s))return;t.preventDefault(),i.dragStart(s),e.setPointerCapture(t.pointerId),e.addEventListener("pointermove",r),e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("pointerout",n);function r(a={}){a.preventDefault(),i.dragMove({x:a.clientX,y:a.clientY})}function n(a={}){a.preventDefault(),e.releasePointerCapture(a.pointerId),e.removeEventListener("pointermove",r),e.removeEventListener("pointerup",n),e.removeEventListener("pointercancel",n),e.removeEventListener("pointerout",n),i.dragEnd()}},i._handler_onMouseDown=(t={})=>{const s={x:t.clientX,y:t.clientY};if(!i.isInteractive||!i.wheelHitTest(s))return;i.dragStart(s),document.addEventListener("mousemove",r),document.addEventListener("mouseup",n);function r(a={}){a.preventDefault(),i.dragMove({x:a.clientX,y:a.clientY})}function n(a={}){a.preventDefault(),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",n),i.dragEnd()}},i._handler_onTouchStart=(t={})=>{const s={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY};if(!i.isInteractive||!i.wheelHitTest(s))return;t.preventDefault(),i.dragStart(s),e.addEventListener("touchmove",r),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n);function r(a={}){a.preventDefault(),i.dragMove({x:a.targetTouches[0].clientX,y:a.targetTouches[0].clientY})}function n(a={}){a.preventDefault(),e.removeEventListener("touchmove",r),e.removeEventListener("touchend",n),e.removeEventListener("touchcancel",n),i.dragEnd()}},"PointerEvent"in window?(e.addEventListener("pointerdown",i._handler_onPointerDown),e.addEventListener("pointermove",i._handler_onPointerMoveRefreshCursor)):(e.addEventListener("touchstart",i._handler_onTouchStart),e.addEventListener("mousedown",i._handler_onMouseDown),e.addEventListener("mousemove",i._handler_onMouseMoveRefreshCursor))}class F{constructor(e,t={}){if(!R(e))throw new Error("wheel must be an instance of Wheel");if(!R(t)&&t!==null)throw new Error("props must be an Object or null");this._wheel=e;for(const s of Object.keys(o.item))this["_"+s]=o.item[s];t?this.init(t):this.init(o.item)}init(e={}){this.backgroundColor=e.backgroundColor,this.image=e.image,this.imageOpacity=e.imageOpacity,this.imageRadius=e.imageRadius,this.imageRotation=e.imageRotation,this.imageScale=e.imageScale,this.label=e.label,this.labelColor=e.labelColor,this.value=e.value,this.weight=e.weight}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){typeof e=="string"?this._backgroundColor=e:this._backgroundColor=o.item.backgroundColor,this._wheel.refresh()}get image(){return this._image}set image(e){e instanceof HTMLImageElement?this._image=e:this._image=o.item.image,this._wheel.refresh()}get imageOpacity(){return this._imageOpacity}set imageOpacity(e){typeof e=="number"?this._imageOpacity=e:this._imageOpacity=o.item.imageOpacity,this._wheel.refresh()}get imageRadius(){return this._imageRadius}set imageRadius(e){typeof e=="number"?this._imageRadius=e:this._imageRadius=o.item.imageRadius,this._wheel.refresh()}get imageRotation(){return this._imageRotation}set imageRotation(e){typeof e=="number"?this._imageRotation=e:this._imageRotation=o.item.imageRotation,this._wheel.refresh()}get imageScale(){return this._imageScale}set imageScale(e){typeof e=="number"?this._imageScale=e:this._imageScale=o.item.imageScale,this._wheel.refresh()}get label(){return this._label}set label(e){typeof e=="string"?this._label=e:this._label=o.item.label,this._wheel.refresh()}get labelColor(){return this._labelColor}set labelColor(e){typeof e=="string"?this._labelColor=e:this._labelColor=o.item.labelColor,this._wheel.refresh()}get value(){return this._value}set value(e){e!==void 0?this._value=e:this._value=o.item.value}get weight(){return this._weight}set weight(e){typeof e=="number"?this._weight=e:this._weight=o.item.weight}getIndex(){const e=this._wheel.items.findIndex(t=>t===this);if(e===-1)throw new Error("Item not found in parent Wheel");return e}getCenterAngle(){const e=this._wheel.getItemAngles()[this.getIndex()];return e.start+(e.end-e.start)/2}getStartAngle(){return this._wheel.getItemAngles()[this.getIndex()].start}getEndAngle(){return this._wheel.getItemAngles()[this.getIndex()].end}getRandomAngle(){return p(this.getStartAngle(),this.getEndAngle())}}class D{constructor(e,t={}){if(!(e instanceof Element))throw new Error("container must be an instance of Element");if(!R(t)&&t!==null)throw new Error("props must be an Object or null");this._frameRequestId=null,this._rotationSpeed=0,this._rotationDirection=1,this._spinToTimeEnd=null,this._lastSpinFrameTime=null,this._isCursorOverWheel=!1,this.add(e);for(const s of Object.keys(o.wheel))this["_"+s]=o.wheel[s];t?this.init(t):this.init(o.wheel)}init(e={}){this._isInitialising=!0,this.borderColor=e.borderColor,this.borderWidth=e.borderWidth,this.debug=e.debug,this.image=e.image,this.isInteractive=e.isInteractive,this.itemBackgroundColors=e.itemBackgroundColors,this.itemLabelAlign=e.itemLabelAlign,this.itemLabelBaselineOffset=e.itemLabelBaselineOffset,this.itemLabelColors=e.itemLabelColors,this.itemLabelFont=e.itemLabelFont,this.itemLabelFontSizeMax=e.itemLabelFontSizeMax,this.itemLabelRadius=e.itemLabelRadius,this.itemLabelRadiusMax=e.itemLabelRadiusMax,this.itemLabelRotation=e.itemLabelRotation,this.itemLabelStrokeColor=e.itemLabelStrokeColor,this.itemLabelStrokeWidth=e.itemLabelStrokeWidth,this.items=e.items,this.lineColor=e.lineColor,this.lineWidth=e.lineWidth,this.pixelRatio=e.pixelRatio,this.rotationSpeedMax=e.rotationSpeedMax,this.radius=e.radius,this.rotation=e.rotation,this.rotationResistance=e.rotationResistance,this.offset=e.offset,this.onCurrentIndexChange=e.onCurrentIndexChange,this.onRest=e.onRest,this.onSpin=e.onSpin,this.overlayImage=e.overlayImage,this.pointerAngle=e.pointerAngle}add(e){this._canvasContainer=e,this.canvas=document.createElement("canvas"),this.canvas.style.display="block",this._context=this.canvas.getContext("2d"),this._canvasContainer.append(this.canvas),V(this),this._isInitialising===!1&&this.resize()}remove(){this.canvas!==null&&(this._frameRequestId!==null&&window.cancelAnimationFrame(this._frameRequestId),z(this),this._canvasContainer.removeChild(this.canvas),this._canvasContainer=null,this.canvas=null,this._context=null)}resize(){if(this.canvas===null)return;this.canvas.style.width=this._canvasContainer.clientWidth+"px",this.canvas.style.height=this._canvasContainer.clientHeight+"px";const[e,t]=[this._canvasContainer.clientWidth*this.getActualPixelRatio(),this._canvasContainer.clientHeight*this.getActualPixelRatio()];this.canvas.width=e,this.canvas.height=t;const s=Math.min(e,t),r={w:s-s*this._offset.x,h:s-s*this._offset.y},n=Math.min(e/r.w,t/r.h);this._size=Math.max(r.w*n,r.h*n),this._center={x:e/2+e*this._offset.x,y:t/2+t*this._offset.y},this._actualRadius=this._size/2*this.radius,this._itemLabelFontSize=this.itemLabelFontSizeMax*(this._size/C),this._labelMaxWidth=this._actualRadius*(this.itemLabelRadius-this.itemLabelRadiusMax),this.itemLabelAlign==="center"&&(this._labelMaxWidth*=2);for(const a of this._items)this._itemLabelFontSize=Math.min(this._itemLabelFontSize,y(a.label,this.itemLabelFont,this._labelMaxWidth,this._context));this.refresh()}draw(e=0){if(this._frameRequestId=null,this._context===null||this.canvas===null)return;const t=this._context;t.clearRect(0,0,this.canvas.width,this.canvas.height),this.animateRotation(e);const s=this.getItemAngles(this._rotation),r=this.getScaledNumber(this._borderWidth);t.textBaseline="middle",t.textAlign=this.itemLabelAlign,t.font=this._itemLabelFontSize+"px "+this.itemLabelFont;for(const[n,a]of s.entries()){const u=this._items[n],h=new Path2D;h.moveTo(this._center.x,this._center.y),h.arc(this._center.x,this._center.y,this._actualRadius-r/2,m(a.start+g),m(a.end+g)),u.path=h}this.drawItemBackgrounds(t,s),this.drawItemImages(t,s),this.drawItemLines(t,s),this.drawItemLabels(t,s),this.drawBorder(t),this.drawImage(t,this._image,!1),this.drawImage(t,this._overlayImage,!0),this.drawDebugPointerLine(t),this._isInitialising=!1}drawItemBackgrounds(e,t=[]){for(const[s,r]of t.entries()){const n=this._items[s];e.fillStyle=n.backgroundColor??this._itemBackgroundColors[s%this._itemBackgroundColors.length],e.fill(n.path)}}drawItemImages(e,t=[]){for(const[s,r]of t.entries()){const n=this._items[s];if(n.image===null)continue;e.save(),e.clip(n.path);const a=r.start+(r.end-r.start)/2;e.translate(this._center.x+Math.cos(m(a+g))*(this._actualRadius*n.imageRadius),this._center.y+Math.sin(m(a+g))*(this._actualRadius*n.imageRadius)),e.rotate(m(a+n.imageRotation)),e.globalAlpha=n.imageOpacity;const u=this._size/500*n.image.width*n.imageScale,h=this._size/500*n.image.height*n.imageScale,b=-u/2,_=-h/2;e.drawImage(n.image,b,_,u,h),e.restore()}}drawImage(e,t,s=!1){if(t===null)return;e.translate(this._center.x,this._center.y),s||e.rotate(m(this._rotation));const r=s?this._size:this._size*this.radius,n=-(r/2);e.drawImage(t,n,n,r,r),e.resetTransform()}drawDebugPointerLine(e){this.debug&&(e.translate(this._center.x,this._center.y),e.rotate(m(this._pointerAngle+g)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius*2,0),e.strokeStyle=c.pointerLineColor,e.lineWidth=this.getScaledNumber(2),e.stroke(),e.resetTransform())}drawBorder(e){if(this._borderWidth<=0)return;const t=this.getScaledNumber(this._borderWidth),s=this._borderColor||"transparent";if(e.beginPath(),e.strokeStyle=s,e.lineWidth=t,e.arc(this._center.x,this._center.y,this._actualRadius-t/2,0,2*Math.PI),e.stroke(),this.debug){const r=this.getScaledNumber(1);e.beginPath(),e.strokeStyle=e.strokeStyle=c.labelRadiusColor,e.lineWidth=r,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadius,0,2*Math.PI),e.stroke(),e.beginPath(),e.strokeStyle=e.strokeStyle=c.labelRadiusColor,e.lineWidth=r,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadiusMax,0,2*Math.PI),e.stroke()}}drawItemLines(e,t=[]){if(this._lineWidth<=0)return;const s=this.getScaledNumber(this._lineWidth),r=this.getScaledNumber(this._borderWidth);e.translate(this._center.x,this._center.y);for(const n of t)e.rotate(m(n.start+g)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius-r,0),e.strokeStyle=this.lineColor,e.lineWidth=s,e.stroke(),e.rotate(-m(n.start+g));e.resetTransform()}drawItemLabels(e,t=[]){const s=this._itemLabelFontSize*-this.itemLabelBaselineOffset,r=this.getScaledNumber(1),n=this.getScaledNumber(this._itemLabelStrokeWidth*2);for(const[a,u]of t.entries()){const h=this._items[a],b=h.labelColor||this._itemLabelColors[a%this._itemLabelColors.length]||"transparent";if(h.label.trim()===""||b==="transparent")continue;e.save(),e.clip(h.path);const _=u.start+(u.end-u.start)/2;if(e.translate(this._center.x+Math.cos(m(_+g))*(this._actualRadius*this.itemLabelRadius),this._center.y+Math.sin(m(_+g))*(this._actualRadius*this.itemLabelRadius)),e.rotate(m(_+g)),e.rotate(m(this.itemLabelRotation)),this.debug){e.save();let f=0;this.itemLabelAlign==="left"?f=this._labelMaxWidth:this.itemLabelAlign==="center"&&(f=this._labelMaxWidth/2),e.beginPath(),e.moveTo(f,0),e.lineTo(-this._labelMaxWidth+f,0),e.strokeStyle=c.labelBoundingBoxColor,e.lineWidth=r,e.stroke(),e.strokeRect(f,-this._itemLabelFontSize/2,-this._labelMaxWidth,this._itemLabelFontSize),e.restore()}if(this._itemLabelStrokeWidth>0&&(e.lineWidth=n,e.strokeStyle=this._itemLabelStrokeColor,e.lineJoin="round",e.strokeText(h.label,0,s)),e.fillStyle=b,e.fillText(h.label,0,s),this.debug){const f=this.getScaledNumber(2);e.beginPath(),e.arc(0,0,f,0,2*Math.PI),e.fillStyle=c.labelRadiusColor,e.fill()}e.restore()}}drawDebugDragPoints(e){var n;if(!this.debug||!((n=this._dragEvents)!=null&&n.length))return;const t=[...this._dragEvents].reverse(),s=this.getScaledNumber(.5),r=this.getScaledNumber(4);for(const[a,u]of t.entries()){const h=a/this._dragEvents.length*100;e.beginPath(),e.arc(u.x,u.y,r,0,2*Math.PI),e.fillStyle=`hsl(${c.dragPointHue},100%,${h}%)`,e.strokeStyle="#000",e.lineWidth=s,e.fill(),e.stroke()}}animateRotation(e=0){if(this._spinToTimeEnd!==null){if(e>=this._spinToTimeEnd){this.rotation=this._spinToEndRotation,this._spinToTimeEnd=null,this.raiseEvent_onRest();return}const t=this._spinToTimeEnd-this._spinToTimeStart;let s=(e-this._spinToTimeStart)/t;s=s<0?0:s;const r=this._spinToEndRotation-this._spinToStartRotation;this.rotation=this._spinToStartRotation+r*this._spinToEasingFunction(s),this.refresh();return}if(this._lastSpinFrameTime!==null){const t=e-this._lastSpinFrameTime;t>0&&(this.rotation+=t/1e3*this._rotationSpeed%360,this._rotationSpeed=this.getRotationSpeedPlusDrag(t),this._rotationSpeed===0?(this.raiseEvent_onRest(),this._lastSpinFrameTime=null):this._lastSpinFrameTime=e),this.refresh();return}}getRotationSpeedPlusDrag(e=0){const t=this._rotationSpeed+this.rotationResistance*(e/1e3)*this._rotationDirection;return this._rotationDirection===1&&t<0||this._rotationDirection===-1&&t>=0?0:t}spin(e=0){if(!d(e))throw new Error("rotationSpeed must be a number");this._dragEvents=[],this.beginSpin(e,"spin")}spinTo(e=0,t=0,s=null){if(!d(e))throw new Error("Error: rotation must be a number");if(!d(t))throw new Error("Error: duration must be a number");this.stop(),this._dragEvents=[],this.animate(e,t,s),this.raiseEvent_onSpin({method:"spinto",targetRotation:e,duration:t})}spinToItem(e=0,t=0,s=!0,r=1,n=1,a=null){this.stop(),this._dragEvents=[];const u=s?this.items[e].getCenterAngle():this.items[e].getRandomAngle();let h=x(this.rotation,u-this._pointerAngle,n);h+=r*360*n,this.animate(h,t,a),this.raiseEvent_onSpin({method:"spintoitem",targetItemIndex:e,targetRotation:h,duration:t})}animate(e,t,s){this._spinToStartRotation=this.rotation,this._spinToEndRotation=e,this._spinToTimeStart=performance.now(),this._spinToTimeEnd=this._spinToTimeStart+t,this._spinToEasingFunction=s||T,this.refresh()}stop(){this._spinToTimeEnd=null,this._rotationSpeed=0,this._lastSpinFrameTime=null}getScaledNumber(e){return e/C*this._size}getActualPixelRatio(){return this._pixelRatio!==0?this._pixelRatio:window.devicePixelRatio}wheelHitTest(e={x:0,y:0}){if(this.canvas===null)return!1;const t=v(e,this.canvas,this.getActualPixelRatio());return M(t,this._center.x,this._center.y,this._actualRadius)}refreshCursor(){if(this.canvas!==null){if(this.isInteractive){if(this.isDragging){this.canvas.style.cursor="grabbing";return}if(this._isCursorOverWheel){this.canvas.style.cursor="grab";return}}this.canvas.style.cursor=""}}getAngleFromCenter(e={x:0,y:0}){return(I(this._center.x,this._center.y,e.x,e.y)+90)%360}getCurrentIndex(){return this._currentIndex}refreshCurrentIndex(e=[]){this._items.length===0&&(this._currentIndex=-1);for(const[t,s]of e.entries())if(w(this._pointerAngle,s.start%360,s.end%360)){if(this._currentIndex===t)break;this._currentIndex=t,this._isInitialising||this.raiseEvent_onCurrentIndexChange();break}}getItemAngles(e=0){let t=0;for(const u of this.items)t+=u.weight;const s=360/t;let r,n=e;const a=[];for(const u of this._items)r=u.weight*s,a.push({start:n,end:n+r}),n+=r;return this._items.length>1&&(a[a.length-1].end=a[0].start+360),a}refresh(){this._frameRequestId===null&&(this._frameRequestId=window.requestAnimationFrame(e=>this.draw(e)))}limitSpeed(e=0,t=0){const s=Math.min(e,t);return Math.max(s,-t)}beginSpin(e=0,t=""){this.stop(),this._rotationSpeed=this.limitSpeed(e,this._rotationSpeedMax),this._lastSpinFrameTime=performance.now(),this._rotationDirection=this._rotationSpeed>=0?1:-1,this._rotationSpeed!==0&&this.raiseEvent_onSpin({method:t,rotationSpeed:this._rotationSpeed,rotationResistance:this._rotationResistance}),this.refresh()}refreshAriaLabel(){if(this.canvas===null)return;this.canvas.setAttribute("role","img");const e=this.items.length>=2?` The wheel has ${this.items.length} slices.`:"";this.canvas.setAttribute("aria-label","An image of a spinning prize wheel."+e)}get borderColor(){return this._borderColor}set borderColor(e){this._borderColor=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.borderColor must be a string",defaultValue:o.wheel.borderColor}),this.refresh()}get borderWidth(){return this._borderWidth}set borderWidth(e){this._borderWidth=l({val:e,isValid:d(e),errorMessage:"Wheel.borderWidth must be a number",defaultValue:o.wheel.borderWidth}),this.refresh()}get debug(){return this._debug}set debug(e){this._debug=l({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.debug must be a boolean",defaultValue:o.wheel.debug}),this.refresh()}get image(){return this._image}set image(e){this._image=l({val:e,isValid:e instanceof HTMLImageElement||e===null,errorMessage:"Wheel.image must be a HTMLImageElement or null",defaultValue:o.wheel.image}),this.refresh()}get isInteractive(){return this._isInteractive}set isInteractive(e){this._isInteractive=l({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.isInteractive must be a boolean",defaultValue:o.wheel.isInteractive}),this.refreshCursor()}get itemBackgroundColors(){return this._itemBackgroundColors}set itemBackgroundColors(e){this._itemBackgroundColors=l({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemBackgroundColors must be an array",defaultValue:o.wheel.itemBackgroundColors}),this.refresh()}get itemLabelAlign(){return this._itemLabelAlign}set itemLabelAlign(e){this._itemLabelAlign=l({val:e,isValid:typeof e=="string"&&(e===L.left||e===L.right||e===L.center),errorMessage:"Wheel.itemLabelAlign must be one of Constants.AlignText",defaultValue:o.wheel.itemLabelAlign}),this.resize()}get itemLabelBaselineOffset(){return this._itemLabelBaselineOffset}set itemLabelBaselineOffset(e){this._itemLabelBaselineOffset=l({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelBaselineOffset must be a number",defaultValue:o.wheel.itemLabelBaselineOffset}),this.resize()}get itemLabelColors(){return this._itemLabelColors}set itemLabelColors(e){this._itemLabelColors=l({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemLabelColors must be an array",defaultValue:o.wheel.itemLabelColors}),this.refresh()}get itemLabelFont(){return this._itemLabelFont}set itemLabelFont(e){this._itemLabelFont=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelFont must be a string",defaultValue:o.wheel.itemLabelFont}),this.resize()}get itemLabelFontSizeMax(){return this._itemLabelFontSizeMax}set itemLabelFontSizeMax(e){this._itemLabelFontSizeMax=l({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelFontSizeMax must be a number",defaultValue:o.wheel.itemLabelFontSizeMax}),this.resize()}get itemLabelRadius(){return this._itemLabelRadius}set itemLabelRadius(e){this._itemLabelRadius=l({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelRadius must be a number",defaultValue:o.wheel.itemLabelRadius}),this.resize()}get itemLabelRadiusMax(){return this._itemLabelRadiusMax}set itemLabelRadiusMax(e){this._itemLabelRadiusMax=l({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelRadiusMax must be a number",defaultValue:o.wheel.itemLabelRadiusMax}),this.resize()}get itemLabelRotation(){return this._itemLabelRotation}set itemLabelRotation(e){this._itemLabelRotation=l({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelRotation must be a number",defaultValue:o.wheel.itemLabelRotation}),this.refresh()}get itemLabelStrokeColor(){return this._itemLabelStrokeColor}set itemLabelStrokeColor(e){this._itemLabelStrokeColor=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelStrokeColor must be a string",defaultValue:o.wheel.itemLabelStrokeColor}),this.refresh()}get itemLabelStrokeWidth(){return this._itemLabelStrokeWidth}set itemLabelStrokeWidth(e){this._itemLabelStrokeWidth=l({val:e,isValid:d(e),errorMessage:"Wheel.itemLabelStrokeWidth must be a number",defaultValue:o.wheel.itemLabelStrokeWidth}),this.refresh()}get items(){return this._items}set items(e){this._items=l({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.items must be an array of Items",defaultValue:o.wheel.items,action:()=>{const t=[];for(const s of e)t.push(new F(this,s));return t}}),this.refreshAriaLabel(),this.refreshCurrentIndex(this.getItemAngles(this._rotation)),this.resize()}get lineColor(){return this._lineColor}set lineColor(e){this._lineColor=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.lineColor must be a string",defaultValue:o.wheel.lineColor}),this.refresh()}get lineWidth(){return this._lineWidth}set lineWidth(e){this._lineWidth=l({val:e,isValid:d(e),errorMessage:"Wheel.lineWidth must be a number",defaultValue:o.wheel.lineWidth}),this.refresh()}get offset(){return this._offset}set offset(e){this._offset=l({val:e,isValid:R(e),errorMessage:"Wheel.offset must be an object",defaultValue:o.wheel.offset}),this.resize()}get onCurrentIndexChange(){return this._onCurrentIndexChange}set onCurrentIndexChange(e){this._onCurrentIndexChange=l({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onCurrentIndexChange must be a function or null",defaultValue:o.wheel.onCurrentIndexChange})}get onRest(){return this._onRest}set onRest(e){this._onRest=l({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onRest must be a function or null",defaultValue:o.wheel.onRest})}get onSpin(){return this._onSpin}set onSpin(e){this._onSpin=l({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onSpin must be a function or null",defaultValue:o.wheel.onSpin})}get overlayImage(){return this._overlayImage}set overlayImage(e){this._overlayImage=l({val:e,isValid:e instanceof HTMLImageElement||e===null,errorMessage:"Wheel.overlayImage must be a HTMLImageElement or null",defaultValue:o.wheel.overlayImage}),this.refresh()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){this._pixelRatio=l({val:e,isValid:d(e),errorMessage:"Wheel.pixelRatio must be a number",defaultValue:o.wheel.pixelRatio}),this._dragEvents=[],this.resize()}get pointerAngle(){return this._pointerAngle}set pointerAngle(e){this._pointerAngle=l({val:e,isValid:d(e)&&e>=0,errorMessage:"Wheel.pointerAngle must be a number between 0 and 360",defaultValue:o.wheel.pointerAngle,action:()=>e%360}),this.debug&&this.refresh()}get radius(){return this._radius}set radius(e){this._radius=l({val:e,isValid:d(e),errorMessage:"Wheel.radius must be a number",defaultValue:o.wheel.radius}),this.resize()}get rotation(){return this._rotation}set rotation(e){this._rotation=l({val:e,isValid:d(e),errorMessage:"Wheel.rotation must be a number",defaultValue:o.wheel.rotation}),this.refreshCurrentIndex(this.getItemAngles(this._rotation)),this.refresh()}get rotationResistance(){return this._rotationResistance}set rotationResistance(e){this._rotationResistance=l({val:e,isValid:d(e),errorMessage:"Wheel.rotationResistance must be a number",defaultValue:o.wheel.rotationResistance})}get rotationSpeed(){return this._rotationSpeed}get rotationSpeedMax(){return this._rotationSpeedMax}set rotationSpeedMax(e){this._rotationSpeedMax=l({val:e,isValid:d(e)&&e>=0,errorMessage:"Wheel.rotationSpeedMax must be a number >= 0",defaultValue:o.wheel.rotationSpeedMax})}dragStart(e={x:0,y:0}){if(this.canvas===null)return;const t=v(e,this.canvas,this.getActualPixelRatio());this.isDragging=!0,this.stop(),this._dragEvents=[{distance:0,x:t.x,y:t.y,now:performance.now()}],this.refreshCursor()}dragMove(e={x:0,y:0}){if(this.canvas===null)return;const t=v(e,this.canvas,this.getActualPixelRatio()),s=this.getAngleFromCenter(t),r=this._dragEvents[0],n=this.getAngleFromCenter(r),a=E(n,s);this._dragEvents.unshift({distance:a,x:t.x,y:t.y,now:performance.now()}),this.debug&&this._dragEvents.length>=40&&this._dragEvents.pop(),this.rotation+=a}dragEnd(){this.isDragging=!1;let e=0;const t=performance.now();for(const[s,r]of this._dragEvents.entries()){if(!this.isDragEventTooOld(t,r)){e+=r.distance;continue}this._dragEvents.length=s,this.debug&&this.refresh();break}this.refreshCursor(),e!==0&&this.beginSpin(e*(1e3/S),"interact")}isDragEventTooOld(e=0,t={}){return e-t.now>S}raiseEvent_onCurrentIndexChange(e={}){var t;(t=this.onCurrentIndexChange)==null||t.call(this,{type:"currentIndexChange",currentIndex:this._currentIndex,...e})}raiseEvent_onRest(e={}){var t;(t=this.onRest)==null||t.call(this,{type:"rest",currentIndex:this._currentIndex,rotation:this._rotation,...e})}raiseEvent_onSpin(e={}){var t;(t=this.onSpin)==null||t.call(this,{type:"spin",...e})}}export{D as W};