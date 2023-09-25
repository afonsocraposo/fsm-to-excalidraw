!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,a,i,n){/* eslint-disable no-undef */var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof l[i]&&l[i],d=r.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function o(t,a){if(!d[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var n="function"==typeof l[i]&&l[i];if(!a&&n)return n(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(r)return r(t,!0);// Try the node require function if it exists.
if(s&&"string"==typeof t)return s(t);var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}g.resolve=function(a){var i=e[t][1][a];return null!=i?i:a},g.cache={};var p=d[t]=new o.Module(t);e[t][0].call(p.exports,g,p,p.exports,this)}return d[t].exports;function g(e){var t=g.resolve(e);return!1===t?{}:o(t)}}o.isParcelRequire=!0,o.Module=function(e){this.id=e,this.bundle=o,this.exports={}},o.modules=e,o.cache=d,o.parent=r,o.register=function(t,a){e[t]=[function(e,t){t.exports=a},{}]},Object.defineProperty(o,"root",{get:function(){return l[i]}}),l[i]=o;for(var c=0;c<t.length;c++)o(t[c]);if(a){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var p=o(a);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof define&&define.amd?define(function(){return p}):n&&(this[n]=p)}}({"42K6k":[function(e,t,a){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(a),i.export(a,"diagram",()=>x);var n=e("./styles-aefe6593.js"),l=e("d3"),r=e("dagre-d3-es/src/graphlib/index.js"),d=e("./mermaid-b0ad2de1.js"),s=e("./index-a92ac404.js");e("ts-dedent"),e("dayjs"),e("@braintree/sanitize-url"),e("dompurify"),e("khroma"),e("lodash-es/memoize.js"),e("stylis"),e("lodash-es/isEmpty.js"),e("dagre-d3-es/src/dagre/index.js"),e("dagre-d3-es/src/graphlib/json.js"),e("./edges-49ac43a2.js"),e("./createText-3df630b5.js"),e("mdast-util-from-markdown"),e("./svgDraw-0fcc813d.js");let o=e=>(0,d.e).sanitizeText(e,(0,d.c)()),c={dividerMargin:10,padding:5,textHeight:10,curve:void 0},p=function(e,t,a,i){let n=Object.keys(e);(0,d.l).info("keys:",n),(0,d.l).info(e),n.forEach(function(n){var l,r;let s=e[n],c={shape:"rect",id:s.id,domId:s.domId,labelText:o(s.id),labelStyle:"",style:"fill: none; stroke: black",// TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
padding:(null==(l=(0,d.c)().flowchart)?void 0:l.padding)??(null==(r=(0,d.c)().class)?void 0:r.padding)};t.setNode(s.id,c),g(s.classes,t,a,i,s.id),(0,d.l).info("setNode",c)})},g=function(e,t,a,i,n){let l=Object.keys(e);(0,d.l).info("keys:",l),(0,d.l).info(e),l.forEach(function(a){var l,r;let s=e[a],c="";s.cssClasses.length>0&&(c=c+" "+s.cssClasses.join(" "));let p={labelStyle:"",style:""},g=s.label??s.id,u={labelStyle:p.labelStyle,shape:"class_box",labelText:o(g),classData:s,rx:0,ry:0,class:c,style:p.style,id:s.id,domId:s.domId,tooltip:i.db.getTooltip(s.id,n)||"",haveCallback:s.haveCallback,link:s.link,width:"group"===s.type?500:void 0,type:s.type,// TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
padding:(null==(l=(0,d.c)().flowchart)?void 0:l.padding)??(null==(r=(0,d.c)().class)?void 0:r.padding)};t.setNode(s.id,u),n&&t.setParent(s.id,n),(0,d.l).info("setNode",u)})},u=function(e,t,a,i){(0,d.l).info(e),e.forEach(function(e,n){var r,s;let p={labelStyle:"",style:""},g=e.text,u={labelStyle:p.labelStyle,shape:"note",labelText:o(g),noteData:e,rx:0,ry:0,class:"",style:p.style,id:e.id,domId:e.id,tooltip:"",type:"note",// TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
padding:(null==(r=(0,d.c)().flowchart)?void 0:r.padding)??(null==(s=(0,d.c)().class)?void 0:s.padding)};if(t.setNode(e.id,u),(0,d.l).info("setNode",u),!e.class||!(e.class in i))return;let f=a+n,h={id:`edgeNote${f}`,//Set relationship style and line type
classes:"relation",pattern:"dotted",// Set link type for rendering
arrowhead:"none",//Set edge extra labels
startLabelRight:"",endLabelLeft:"",//Set relation arrow types
arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,d.o)(c.curve,l.curveLinear)};t.setEdge(e.id,e.class,h,f)})},f=function(e,t){let a=(0,d.c)().flowchart,i=0;e.forEach(function(e){var n;i++;let r={//Set relationship style and line type
classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+i,// Set link type for rendering
arrowhead:"arrow_open"===e.type?"none":"normal",//Set edge extra labels
startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,//Set relation arrow types
arrowTypeStart:y(e.relation.type1),arrowTypeEnd:y(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,d.o)(null==a?void 0:a.curve,l.curveLinear)};if((0,d.l).info(r,e),void 0!==e.style){let t=(0,d.k)(e.style);r.style=t.style,r.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(r.arrowheadStyle="fill: #333"):(r.arrowheadStyle="fill: #333",r.labelpos="c",(null==(n=(0,d.c)().flowchart)?void 0:n.htmlLabels)??(0,d.c)().htmlLabels?(r.labelType="html",r.label='<span class="edgeLabel">'+e.text+"</span>"):(r.labelType="text",r.label=e.text.replace(d.e.lineBreakRegex,"\n"),void 0===e.style&&(r.style=r.style||"stroke: #333; stroke-width: 1.5px;fill:none"),r.labelStyle=r.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,r,i)})},h=async function(e,t,a,i){let n;(0,d.l).info("Drawing class - ",t);let o=(0,d.c)().flowchart??(0,d.c)().class,c=(0,d.c)().securityLevel;(0,d.l).info("config:",o);let h=(null==o?void 0:o.nodeSpacing)??50,y=(null==o?void 0:o.rankSpacing)??50,x=new r.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:i.db.getDirection(),nodesep:h,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),b=i.db.getNamespaces(),m=i.db.getClasses(),w=i.db.getRelations(),v=i.db.getNotes();(0,d.l).info(w),p(b,x,t,i),g(m,x,t,i),f(w,x),u(v,x,w.length+1,m),"sandbox"===c&&(n=(0,l.select)("#i"+t));let T="sandbox"===c?(0,l.select)(n.nodes()[0].contentDocument.body):(0,l.select)("body"),k=T.select(`[id="${t}"]`),j=T.select("#"+t+" g");if(await (0,s.r)(j,x,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),(0,d.u).insertTitle(k,"classTitleText",(null==o?void 0:o.titleTopMargin)??5,i.db.getDiagramTitle()),(0,d.p)(x,k,null==o?void 0:o.diagramPadding,null==o?void 0:o.useMaxWidth),!(null==o?void 0:o.htmlLabels)){let e="sandbox"===c?n.nodes()[0].contentDocument:document,a=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of a){let a=t.getBBox(),i=e.createElementNS("http://www.w3.org/2000/svg","rect");i.setAttribute("rx",0),i.setAttribute("ry",0),i.setAttribute("width",a.width),i.setAttribute("height",a.height),t.insertBefore(i,t.firstChild)}}};function y(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}let x={parser:n.p,db:n.d,renderer:{setConf:function(e){c={...c,...e}},draw:h},styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,n.d).clear()}}},{"./styles-aefe6593.js":"2SLwu",d3:"ahWNw","dagre-d3-es/src/graphlib/index.js":"j6NXy","./mermaid-b0ad2de1.js":"42V0c","./index-a92ac404.js":"39ufq","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","dagre-d3-es/src/dagre/index.js":"9xp7T","dagre-d3-es/src/graphlib/json.js":"5pdrN","./edges-49ac43a2.js":"ayTP7","./createText-3df630b5.js":"590AZ","mdast-util-from-markdown":"i9FLz","./svgDraw-0fcc813d.js":"6Yaxn","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6Yaxn":[function(e,t,a){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(a),i.export(a,"p",()=>s),i.export(a,"s",()=>p);var n=e("d3"),l=e("./mermaid-b0ad2de1.js");let r=0,d=function(e){let t=e.id;return e.type&&(t+="<"+e.type+">"),t},s=function(e){let t="",a="",i="",n="",r=e.substring(0,1),d=e.substring(e.length-1,e.length);r.match(/[#+~-]/)&&(n=r);let s=/[\s\w)~]/;d.match(s)||(a=c(d));let o=""===n?0:1,p=""===a?e.length:e.length-1;e=e.substring(o,p);let g=e.indexOf("("),u=e.indexOf(")"),f=g>1&&u>g&&u<=e.length;if(f){let r=e.substring(0,g).trim(),d=e.substring(g+1,u);if(t=n+r+"("+(0,l.x)(d.trim())+")",u<e.length){let n=e.substring(u+1,u+2);""!==a||n.match(s)?i=e.substring(u+1).trim():(a=c(n),i=e.substring(u+2).trim()),""!==i&&(":"===i.charAt(0)&&(i=i.substring(1).trim()),t+=i=" : "+(0,l.x)(i))}}else t=n+(0,l.x)(e);return{displayText:t,cssStyle:a}},o=function(e,t,a,i){let n=s(t),l=e.append("tspan").attr("x",i.padding).text(n.displayText);""!==n.cssStyle&&l.attr("style",n.cssStyle),a||l.attr("dy",i.textHeight)},c=function(e){switch(e){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},p={getClassTitleString:d,drawClass:function(e,t,a,i){let n;(0,l.l).debug("Rendering class ",t,a);let r=t.id,s={id:r,label:t.id,width:0,height:0},c=e.append("g").attr("id",i.db.lookUpDomId(r)).attr("class","classGroup");n=t.link?c.append("svg:a").attr("xlink:href",t.link).attr("target",t.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):c.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let p=!0;t.annotations.forEach(function(e){let t=n.append("tspan").text("\xab"+e+"\xbb");p||t.attr("dy",a.textHeight),p=!1});let g=d(t),u=n.append("tspan").text(g).attr("class","title");p||u.attr("dy",a.textHeight);let f=n.node().getBBox().height,h=c.append("line").attr("x1",0).attr("y1",a.padding+f+a.dividerMargin/2).attr("y2",a.padding+f+a.dividerMargin/2),y=c.append("text").attr("x",a.padding).attr("y",f+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");p=!0,t.members.forEach(function(e){o(y,e,p,a),p=!1});let x=y.node().getBBox(),b=c.append("line").attr("x1",0).attr("y1",a.padding+f+a.dividerMargin+x.height).attr("y2",a.padding+f+a.dividerMargin+x.height),m=c.append("text").attr("x",a.padding).attr("y",f+2*a.dividerMargin+x.height+a.textHeight).attr("fill","white").attr("class","classText");p=!0,t.methods.forEach(function(e){o(m,e,p,a),p=!1});let w=c.node().getBBox();var v=" ";t.cssClasses.length>0&&(v+=t.cssClasses.join(" "));let T=c.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*a.padding).attr("height",w.height+a.padding+.5*a.dividerMargin).attr("class",v),k=T.node().getBBox().width;return n.node().childNodes.forEach(function(e){e.setAttribute("x",(k-e.getBBox().width)/2)}),t.tooltip&&n.insert("title").text(t.tooltip),h.attr("x2",k),b.attr("x2",k),s.width=k,s.height=w.height+a.padding+.5*a.dividerMargin,s},drawEdge:function(e,t,a,i,d){let s,o,c,p,g,u;let f=function(e){switch(e){case d.db.relationType.AGGREGATION:return"aggregation";case d.db.relationType.EXTENSION:return"extension";case d.db.relationType.COMPOSITION:return"composition";case d.db.relationType.DEPENDENCY:return"dependency";case d.db.relationType.LOLLIPOP:return"lollipop"}};t.points=t.points.filter(e=>!Number.isNaN(e.y));let h=t.points,y=(0,n.line)().x(function(e){return e.x}).y(function(e){return e.y}).curve(n.curveBasis),x=e.append("path").attr("d",y(h)).attr("id","edge"+r).attr("class","relation"),b="";i.arrowMarkerAbsolute&&(b=(b=(b=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==a.relation.lineType&&x.attr("class","relation dashed-line"),10==a.relation.lineType&&x.attr("class","relation dotted-line"),"none"!==a.relation.type1&&x.attr("marker-start","url("+b+"#"+f(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&x.attr("marker-end","url("+b+"#"+f(a.relation.type2)+"End)");let m=t.points.length,w=(0,l.u).calcLabelPosition(t.points);if(s=w.x,o=w.y,m%2!=0&&m>1){let e=(0,l.u).calcCardinalityPosition("none"!==a.relation.type1,t.points,t.points[0]),i=(0,l.u).calcCardinalityPosition("none"!==a.relation.type2,t.points,t.points[m-1]);(0,l.l).debug("cardinality_1_point "+JSON.stringify(e)),(0,l.l).debug("cardinality_2_point "+JSON.stringify(i)),c=e.x,p=e.y,g=i.x,u=i.y}if(void 0!==a.title){let t=e.append("g").attr("class","classLabel"),n=t.append("text").attr("class","label").attr("x",s).attr("y",o).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=n;let l=n.node().getBBox();t.insert("rect",":first-child").attr("class","box").attr("x",l.x-i.padding/2).attr("y",l.y-i.padding/2).attr("width",l.width+i.padding).attr("height",l.height+i.padding)}if((0,l.l).info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){let t=e.append("g").attr("class","cardinality");t.append("text").attr("class","type1").attr("x",c).attr("y",p).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){let t=e.append("g").attr("class","cardinality");t.append("text").attr("class","type2").attr("x",g).attr("y",u).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}r++},drawNote:function(e,t,a,i){(0,l.l).debug("Rendering note ",t,a);let n=t.id,r={id:n,text:t.text,width:0,height:0},d=e.append("g").attr("id",n).attr("class","classGroup"),s=d.append("text").attr("y",a.textHeight+a.padding).attr("x",0),o=JSON.parse(`"${t.text}"`).split("\n");o.forEach(function(e){(0,l.l).debug(`Adding line: ${e}`),s.append("tspan").text(e).attr("class","title").attr("dy",a.textHeight)});let c=d.node().getBBox(),p=d.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*a.padding).attr("height",c.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin),g=p.node().getBBox().width;return s.node().childNodes.forEach(function(e){e.setAttribute("x",(g-e.getBBox().width)/2)}),r.width=g,r.height=c.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin,r},parseMember:s}},{d3:"ahWNw","./mermaid-b0ad2de1.js":"42V0c","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=classDiagram-v2-8931bdaf.91a95dfc.js.map
;
//# sourceMappingURL=classDiagram-v2-8931bdaf.91a95dfc.js.map
