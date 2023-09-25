!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(t,e,r,a,i){/* eslint-disable no-undef */var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d="function"==typeof n[a]&&n[a],s=d.cache||{},o="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(e,r){if(!s[e]){if(!t[e]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var i="function"==typeof n[a]&&n[a];if(!r&&i)return i(e,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(d)return d(e,!0);// Try the node require function if it exists.
if(o&&"string"==typeof e)return o(e);var p=Error("Cannot find module '"+e+"'");throw p.code="MODULE_NOT_FOUND",p}g.resolve=function(r){var a=t[e][1][r];return null!=a?a:r},g.cache={};var c=s[e]=new l.Module(e);t[e][0].call(c.exports,g,c,c.exports,this)}return s[e].exports;function g(t){var e=g.resolve(t);return!1===e?{}:l(e)}}l.isParcelRequire=!0,l.Module=function(t){this.id=t,this.bundle=l,this.exports={}},l.modules=t,l.cache=s,l.parent=d,l.register=function(e,r){t[e]=[function(t,e){e.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return n[a]}}),n[a]=l;for(var p=0;p<e.length;p++)l(e[p]);if(r){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var c=l(r);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):i&&(this[i]=c)}}({"8ylTH":[function(t,e,r){var a=t("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"diagram",()=>h);var i=t("./styles-aefe6593.js"),n=t("d3"),d=t("dagre-d3-es/src/dagre/index.js"),s=t("dagre-d3-es/src/graphlib/index.js"),o=t("./mermaid-b0ad2de1.js"),l=t("./svgDraw-0fcc813d.js");t("ts-dedent"),t("dayjs"),t("@braintree/sanitize-url"),t("dompurify"),t("khroma"),t("lodash-es/memoize.js"),t("stylis"),t("lodash-es/isEmpty.js");let p={},c=function(t){let e=Object.entries(p).find(e=>e[1].label===t);if(e)return e[0]},g=function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},h={parser:i.p,db:i.d,renderer:{draw:function(t,e,r,a){let i;let h=(0,o.c)().class;p={},(0,o.l).info("Rendering diagram "+t);let f=(0,o.c)().securityLevel;"sandbox"===f&&(i=(0,n.select)("#i"+e));let u="sandbox"===f?(0,n.select)(i.nodes()[0].contentDocument.body):(0,n.select)("body"),x=u.select(`[id='${e}']`);g(x);let y=new s.Graph({multigraph:!0});y.setGraph({isMultiGraph:!0}),y.setDefaultEdgeLabel(function(){return{}});let m=a.db.getClasses(),b=Object.keys(m);for(let t of b){let e=m[t],r=(0,l.s).drawClass(x,e,h,a);p[r.id]=r,y.setNode(r.id,r),(0,o.l).info("Org height: "+r.height)}let w=a.db.getRelations();w.forEach(function(t){(0,o.l).info("tjoho"+c(t.id1)+c(t.id2)+JSON.stringify(t)),y.setEdge(c(t.id1),c(t.id2),{relation:t},t.title||"DEFAULT")});let k=a.db.getNotes();k.forEach(function(t){(0,o.l).debug(`Adding note: ${JSON.stringify(t)}`);let e=(0,l.s).drawNote(x,t,h,a);p[e.id]=e,y.setNode(e.id,e),t.class&&t.class in m&&y.setEdge(t.id,c(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,d.layout)(y),y.nodes().forEach(function(t){void 0!==t&&void 0!==y.node(t)&&((0,o.l).debug("Node "+t+": "+JSON.stringify(y.node(t))),u.select("#"+(a.db.lookUpDomId(t)||t)).attr("transform","translate("+(y.node(t).x-y.node(t).width/2)+","+(y.node(t).y-y.node(t).height/2)+" )"))}),y.edges().forEach(function(t){void 0!==t&&void 0!==y.edge(t)&&((0,o.l).debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(y.edge(t))),(0,l.s).drawEdge(x,y.edge(t),y.edge(t).relation,h,a))});let v=x.node().getBBox(),j=v.width+40,E=v.height+40;(0,o.i)(x,E,j,h.useMaxWidth);let L=`${v.x-20} ${v.y-20} ${j} ${E}`;(0,o.l).debug(`viewBox ${L}`),x.attr("viewBox",L)}},styles:i.s,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,(0,i.d).clear()}}},{"./styles-aefe6593.js":"2SLwu",d3:"ahWNw","dagre-d3-es/src/dagre/index.js":"9xp7T","dagre-d3-es/src/graphlib/index.js":"j6NXy","./mermaid-b0ad2de1.js":"42V0c","./svgDraw-0fcc813d.js":"6Yaxn","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6Yaxn":[function(t,e,r){var a=t("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"p",()=>o),a.export(r,"s",()=>c);var i=t("d3"),n=t("./mermaid-b0ad2de1.js");let d=0,s=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},o=function(t){let e="",r="",a="",i="",d=t.substring(0,1),s=t.substring(t.length-1,t.length);d.match(/[#+~-]/)&&(i=d);let o=/[\s\w)~]/;s.match(o)||(r=p(s));let l=""===i?0:1,c=""===r?t.length:t.length-1;t=t.substring(l,c);let g=t.indexOf("("),h=t.indexOf(")"),f=g>1&&h>g&&h<=t.length;if(f){let d=t.substring(0,g).trim(),s=t.substring(g+1,h);if(e=i+d+"("+(0,n.x)(s.trim())+")",h<t.length){let i=t.substring(h+1,h+2);""!==r||i.match(o)?a=t.substring(h+1).trim():(r=p(i),a=t.substring(h+2).trim()),""!==a&&(":"===a.charAt(0)&&(a=a.substring(1).trim()),e+=a=" : "+(0,n.x)(a))}}else e=i+(0,n.x)(t);return{displayText:e,cssStyle:r}},l=function(t,e,r,a){let i=o(e),n=t.append("tspan").attr("x",a.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),r||n.attr("dy",a.textHeight)},p=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},c={getClassTitleString:s,drawClass:function(t,e,r,a){let i;(0,n.l).debug("Rendering class ",e,r);let d=e.id,o={id:d,label:e.id,width:0,height:0},p=t.append("g").attr("id",a.db.lookUpDomId(d)).attr("class","classGroup");i=e.link?p.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):p.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let c=!0;e.annotations.forEach(function(t){let e=i.append("tspan").text("\xab"+t+"\xbb");c||e.attr("dy",r.textHeight),c=!1});let g=s(e),h=i.append("tspan").text(g).attr("class","title");c||h.attr("dy",r.textHeight);let f=i.node().getBBox().height,u=p.append("line").attr("x1",0).attr("y1",r.padding+f+r.dividerMargin/2).attr("y2",r.padding+f+r.dividerMargin/2),x=p.append("text").attr("x",r.padding).attr("y",f+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");c=!0,e.members.forEach(function(t){l(x,t,c,r),c=!1});let y=x.node().getBBox(),m=p.append("line").attr("x1",0).attr("y1",r.padding+f+r.dividerMargin+y.height).attr("y2",r.padding+f+r.dividerMargin+y.height),b=p.append("text").attr("x",r.padding).attr("y",f+2*r.dividerMargin+y.height+r.textHeight).attr("fill","white").attr("class","classText");c=!0,e.methods.forEach(function(t){l(b,t,c,r),c=!1});let w=p.node().getBBox();var k=" ";e.cssClasses.length>0&&(k+=e.cssClasses.join(" "));let v=p.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*r.padding).attr("height",w.height+r.padding+.5*r.dividerMargin).attr("class",k),j=v.node().getBBox().width;return i.node().childNodes.forEach(function(t){t.setAttribute("x",(j-t.getBBox().width)/2)}),e.tooltip&&i.insert("title").text(e.tooltip),u.attr("x2",j),m.attr("x2",j),o.width=j,o.height=w.height+r.padding+.5*r.dividerMargin,o},drawEdge:function(t,e,r,a,s){let o,l,p,c,g,h;let f=function(t){switch(t){case s.db.relationType.AGGREGATION:return"aggregation";case s.db.relationType.EXTENSION:return"extension";case s.db.relationType.COMPOSITION:return"composition";case s.db.relationType.DEPENDENCY:return"dependency";case s.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let u=e.points,x=(0,i.line)().x(function(t){return t.x}).y(function(t){return t.y}).curve(i.curveBasis),y=t.append("path").attr("d",x(u)).attr("id","edge"+d).attr("class","relation"),m="";a.arrowMarkerAbsolute&&(m=(m=(m=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==r.relation.lineType&&y.attr("class","relation dashed-line"),10==r.relation.lineType&&y.attr("class","relation dotted-line"),"none"!==r.relation.type1&&y.attr("marker-start","url("+m+"#"+f(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&y.attr("marker-end","url("+m+"#"+f(r.relation.type2)+"End)");let b=e.points.length,w=(0,n.u).calcLabelPosition(e.points);if(o=w.x,l=w.y,b%2!=0&&b>1){let t=(0,n.u).calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),a=(0,n.u).calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[b-1]);(0,n.l).debug("cardinality_1_point "+JSON.stringify(t)),(0,n.l).debug("cardinality_2_point "+JSON.stringify(a)),p=t.x,c=t.y,g=a.x,h=a.y}if(void 0!==r.title){let e=t.append("g").attr("class","classLabel"),i=e.append("text").attr("class","label").attr("x",o).attr("y",l).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=i;let n=i.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-a.padding/2).attr("y",n.y-a.padding/2).attr("width",n.width+a.padding).attr("height",n.height+a.padding)}if((0,n.l).info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type1").attr("x",p).attr("y",c).attr("fill","black").attr("font-size","6").text(r.relationTitle1)}if(void 0!==r.relationTitle2&&"none"!==r.relationTitle2){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type2").attr("x",g).attr("y",h).attr("fill","black").attr("font-size","6").text(r.relationTitle2)}d++},drawNote:function(t,e,r,a){(0,n.l).debug("Rendering note ",e,r);let i=e.id,d={id:i,text:e.text,width:0,height:0},s=t.append("g").attr("id",i).attr("class","classGroup"),o=s.append("text").attr("y",r.textHeight+r.padding).attr("x",0),l=JSON.parse(`"${e.text}"`).split("\n");l.forEach(function(t){(0,n.l).debug(`Adding line: ${t}`),o.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)});let p=s.node().getBBox(),c=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*r.padding).attr("height",p.height+l.length*r.textHeight+r.padding+.5*r.dividerMargin),g=c.node().getBBox().width;return o.node().childNodes.forEach(function(t){t.setAttribute("x",(g-t.getBBox().width)/2)}),d.width=g,d.height=p.height+l.length*r.textHeight+r.padding+.5*r.dividerMargin,d},parseMember:o}},{d3:"ahWNw","./mermaid-b0ad2de1.js":"42V0c","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=classDiagram-bc733c3b.1e79dde4.js.map
;
//# sourceMappingURL=classDiagram-bc733c3b.1e79dde4.js.map
