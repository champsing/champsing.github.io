function O(n){return n}var S=1,H=2,_=3,w=4,P=1e-6;function B(n){return"translate("+n+",0)"}function N(n){return"translate(0,"+n+")"}function R(n){return r=>+n(r)}function X(n,r){return r=Math.max(0,n.bandwidth()-r*2)/2,n.round()&&(r=Math.round(r)),l=>+n(l)+r}function Y(){return!this.__axis}function j(n,r){var l=[],f=null,h=null,c=6,a=6,z=3,e=typeof window<"u"&&window.devicePixelRatio>1?0:.5,o=n===S||n===w?-1:1,p=n===w||n===H?"x":"y",F=n===S||n===_?B:N;function i(t){var E=f??(r.ticks?r.ticks.apply(r,l):r.domain()),I=h??(r.tickFormat?r.tickFormat.apply(r,l):O),C=Math.max(c,0)+z,V=r.range(),y=+V[0]+e,x=+V[V.length-1]+e,A=(r.bandwidth?X:R)(r.copy(),e),g=t.selection?t.selection():t,m=g.selectAll(".domain").data([null]),u=g.selectAll(".tick").data(E,r).order(),b=u.exit(),v=u.enter().append("g").attr("class","tick"),d=u.select("line"),k=u.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),u=u.merge(v),d=d.merge(v.append("line").attr("stroke","currentColor").attr(p+"2",o*c)),k=k.merge(v.append("text").attr("fill","currentColor").attr(p,o*C).attr("dy",n===S?"0em":n===_?"0.71em":"0.32em")),t!==g&&(m=m.transition(t),u=u.transition(t),d=d.transition(t),k=k.transition(t),b=b.transition(t).attr("opacity",P).attr("transform",function(s){return isFinite(s=A(s))?F(s+e):this.getAttribute("transform")}),v.attr("opacity",P).attr("transform",function(s){var M=this.parentNode.__axis;return F((M&&isFinite(M=M(s))?M:A(s))+e)})),b.remove(),m.attr("d",n===w||n===H?a?"M"+o*a+","+y+"H"+e+"V"+x+"H"+o*a:"M"+e+","+y+"V"+x:a?"M"+y+","+o*a+"V"+e+"H"+x+"V"+o*a:"M"+y+","+e+"H"+x),u.attr("opacity",1).attr("transform",function(s){return F(A(s)+e)}),d.attr(p+"2",o*c),k.attr(p,o*C).text(I),g.filter(Y).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===H?"start":n===w?"end":"middle"),g.each(function(){this.__axis=A})}return i.scale=function(t){return arguments.length?(r=t,i):r},i.ticks=function(){return l=Array.from(arguments),i},i.tickArguments=function(t){return arguments.length?(l=t==null?[]:Array.from(t),i):l.slice()},i.tickValues=function(t){return arguments.length?(f=t==null?null:Array.from(t),i):f&&f.slice()},i.tickFormat=function(t){return arguments.length?(h=t,i):h},i.tickSize=function(t){return arguments.length?(c=a=+t,i):c},i.tickSizeInner=function(t){return arguments.length?(c=+t,i):c},i.tickSizeOuter=function(t){return arguments.length?(a=+t,i):a},i.tickPadding=function(t){return arguments.length?(z=+t,i):z},i.offset=function(t){return arguments.length?(e=+t,i):e},i}function q(n){return j(_,n)}export{q as a};
