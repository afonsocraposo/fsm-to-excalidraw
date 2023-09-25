!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,r,n,t,s){/* eslint-disable no-undef */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o[t]&&o[t],i=a.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(r,n){if(!i[r]){if(!e[r]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var s="function"==typeof o[t]&&o[t];if(!n&&s)return s(r,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(a)return a(r,!0);// Try the node require function if it exists.
if(d&&"string"==typeof r)return d(r);var h=Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}l.resolve=function(n){var t=e[r][1][n];return null!=t?t:n},l.cache={};var u=i[r]=new c.Module(r);e[r][0].call(u.exports,l,u,u.exports,this)}return i[r].exports;function l(e){var r=l.resolve(e);return!1===r?{}:c(r)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=i,c.parent=a,c.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]},Object.defineProperty(c,"root",{get:function(){return o[t]}}),o[t]=c;for(var h=0;h<r.length;h++)c(r[h]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var u=c(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd?define(function(){return u}):s&&(this[s]=u)}}({j6NXy:[function(e,r,n){// Includes only the "core" of graphlib
var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"Graph",()=>s.Graph),t.export(n,"version",()=>o);var s=e("./graph.js");let o="2.1.9-pre"},{"./graph.js":"84V0B","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"84V0B":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.
// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.
t.export(n,"Graph",()=>o);var s=e("lodash-es");class o{constructor(e={}){this._isDirected=!s.has(e,"directed")||e.directed,this._isMultigraph=!!s.has(e,"multigraph")&&e.multigraph,this._isCompound=!!s.has(e,"compound")&&e.compound,// Label for the graph itself
this._label=void 0,// Defaults to be set when creating a new node
this._defaultNodeLabelFn=s.constant(void 0),// Defaults to be set when creating a new edge
this._defaultEdgeLabelFn=s.constant(void 0),// v -> label
this._nodes={},this._isCompound&&(// v -> parent
this._parent={},// v -> children
this._children={},this._children["\x00"]={}),// v -> edgeObj
this._in={},// u -> v -> Number
this._preds={},// v -> edgeObj
this._out={},// v -> w -> Number
this._sucs={},// e -> edgeObj
this._edgeObjs={},// e -> label
this._edgeLabels={}}/* === Graph functions ========= */isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}/* === Node functions ========== */setDefaultNodeLabel(e){return s.isFunction(e)||(e=s.constant(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return s.keys(this._nodes)}sources(){var e=this;return s.filter(this.nodes(),function(r){return s.isEmpty(e._in[r])})}sinks(){var e=this;return s.filter(this.nodes(),function(r){return s.isEmpty(e._out[r])})}setNodes(e,r){var n=arguments,t=this;return s.each(e,function(e){n.length>1?t.setNode(e,r):t.setNode(e)}),this}setNode(e,r){return s.has(this._nodes,e)?arguments.length>1&&(this._nodes[e]=r):(// @ts-expect-error
this._nodes[e]=arguments.length>1?r:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]="\x00",this._children[e]={},this._children["\x00"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount),this}node(e){return this._nodes[e]}hasNode(e){return s.has(this._nodes,e)}removeNode(e){var r=this;if(s.has(this._nodes,e)){var n=function(e){r.removeEdge(r._edgeObjs[e])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],s.each(this.children(e),function(e){r.setParent(e)}),delete this._children[e]),s.each(s.keys(this._in[e]),n),delete this._in[e],delete this._preds[e],s.each(s.keys(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,r){if(!this._isCompound)throw Error("Cannot set parent in a non-compound graph");if(s.isUndefined(r))r="\x00";else{// Coerce parent to string
r+="";for(var n=r;!s.isUndefined(n);n=this.parent(n))if(n===e)throw Error("Setting "+r+" as parent of "+e+" would create a cycle");this.setNode(r)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=r,this._children[r][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var r=this._parent[e];if("\x00"!==r)return r}}children(e){if(s.isUndefined(e)&&(e="\x00"),this._isCompound){var r=this._children[e];if(r)return s.keys(r)}else if("\x00"===e)return this.nodes();else if(this.hasNode(e))return[]}predecessors(e){var r=this._preds[e];if(r)return s.keys(r)}successors(e){var r=this._sucs[e];if(r)return s.keys(r)}neighbors(e){var r=this.predecessors(e);if(r)return s.union(r,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){// @ts-expect-error
var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var n=this;s.each(this._nodes,function(n,t){e(t)&&r.setNode(t,n)}),s.each(this._edgeObjs,function(e){// @ts-expect-error
r.hasNode(e.v)&&r.hasNode(e.w)&&r.setEdge(e,n.edge(e))});var t={};return this._isCompound&&s.each(r.nodes(),function(e){r.setParent(e,function e(s){var o=n.parent(s);return void 0===o||r.hasNode(o)?(t[s]=o,o):o in t?t[o]:e(o)}(e))}),r}/* === Edge functions ========== */setDefaultEdgeLabel(e){return s.isFunction(e)||(e=s.constant(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return s.values(this._edgeObjs)}setPath(e,r){var n=this,t=arguments;return s.reduce(e,function(e,s){return t.length>1?n.setEdge(e,s,r):n.setEdge(e,s),s}),this}/*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */setEdge(){var e,r,n,t,o=!1,i=arguments[0];"object"==typeof i&&null!==i&&"v"in i?(e=i.v,r=i.w,n=i.name,2==arguments.length&&(t=arguments[1],o=!0)):(e=i,r=arguments[1],n=arguments[3],arguments.length>2&&(t=arguments[2],o=!0)),e=""+e,r=""+r,s.isUndefined(n)||(n=""+n);var c=d(this._isDirected,e,r,n);if(s.has(this._edgeLabels,c))return o&&(this._edgeLabels[c]=t),this;if(!s.isUndefined(n)&&!this._isMultigraph)throw Error("Cannot set a named edge when isMultigraph = false");// It didn't exist, so we need to create it.
// First ensure the nodes exist.
this.setNode(e),this.setNode(r),// @ts-expect-error
this._edgeLabels[c]=o?t:this._defaultEdgeLabelFn(e,r,n);var h=function(e,r,n,t){var s=""+r,o=""+n;if(!e&&s>o){var a=s;s=o,o=a}var i={v:s,w:o};return t&&(i.name=t),i}(this._isDirected,e,r,n);return(// Ensure we add undirected edges in a consistent way.
e=h.v,r=h.w,Object.freeze(h),this._edgeObjs[c]=h,a(this._preds[r],e),a(this._sucs[e],r),this._in[r][c]=h,this._out[e][c]=h,this._edgeCount++,this)}edge(e,r,n){var t=1==arguments.length?c(this._isDirected,arguments[0]):d(this._isDirected,e,r,n);return this._edgeLabels[t]}hasEdge(e,r,n){var t=1==arguments.length?c(this._isDirected,arguments[0]):d(this._isDirected,e,r,n);return s.has(this._edgeLabels,t)}removeEdge(e,r,n){var t=1==arguments.length?c(this._isDirected,arguments[0]):d(this._isDirected,e,r,n),s=this._edgeObjs[t];return s&&(e=s.v,r=s.w,delete this._edgeLabels[t],delete this._edgeObjs[t],i(this._preds[r],e),i(this._sucs[e],r),delete this._in[r][t],delete this._out[e][t],this._edgeCount--),this}inEdges(e,r){var n=this._in[e];if(n){var t=s.values(n);return r?s.filter(t,function(e){return e.v===r}):t}}outEdges(e,r){var n=this._out[e];if(n){var t=s.values(n);return r?s.filter(t,function(e){return e.w===r}):t}}nodeEdges(e,r){var n=this.inEdges(e,r);if(n)return n.concat(this.outEdges(e,r))}}function a(e,r){e[r]?e[r]++:e[r]=1}function i(e,r){--e[r]||delete e[r]}function d(e,r,n,t){var o=""+r,a=""+n;if(!e&&o>a){var i=o;o=a,a=i}return o+"\x01"+a+"\x01"+(s.isUndefined(t)?"\x00":t)}function c(e,r){return d(e,r.v,r.w,r.name)}/* Number of nodes in the graph. Should only be changed by the implementation. */o.prototype._nodeCount=0,/* Number of edges in the graph. Should only be changed by the implementation. */o.prototype._edgeCount=0},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9xp7T":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"acyclic",()=>s),t.export(n,"normalize",()=>a),t.export(n,"rank",()=>i.rank),t.export(n,"layout",()=>o.layout);var s=e("./acyclic.js"),o=e("./layout.js"),a=e("./normalize.js"),i=e("./rank/index.js")},{"./acyclic.js":"65tNo","./layout.js":"dQEd2","./normalize.js":"jEd9R","./rank/index.js":"7Hj7F","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"65tNo":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"run",()=>a),t.export(n,"undo",()=>i);var s=e("lodash-es"),o=e("./greedy-fas.js");function a(e){var r,n,t,a="greedy"===e.graph().acyclicer?(0,o.greedyFAS)(e,function(r){return e.edge(r).weight}):(r=[],n={},t={},s.forEach(e.nodes(),function o(a){s.has(t,a)||(t[a]=!0,n[a]=!0,s.forEach(e.outEdges(a),function(e){s.has(n,e.w)?r.push(e):o(e.w)}),delete n[a])}),r);s.forEach(a,function(r){var n=e.edge(r);e.removeEdge(r),n.forwardName=r.name,n.reversed=!0,e.setEdge(r.w,r.v,n,s.uniqueId("rev"))})}function i(e){s.forEach(e.edges(),function(r){var n=e.edge(r);if(n.reversed){e.removeEdge(r);var t=n.forwardName;delete n.reversed,delete n.forwardName,e.setEdge(r.w,r.v,n,t)}})}},{"lodash-es":"h4a9d","./greedy-fas.js":"4BAH6","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"4BAH6":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */t.export(n,"greedyFAS",()=>d);var s=e("lodash-es"),o=e("../graphlib/index.js"),a=e("./data/list.js"),i=s.constant(1);function d(e,r){if(1>=e.nodeCount())return[];var n,t,d,u,l,f,p=(n=r||i,t=new o.Graph,d=0,u=0,s.forEach(e.nodes(),function(e){t.setNode(e,{v:e,in:0,out:0})}),// Aggregate weights on nodes, but also sum the weights across multi-edges
// into a single edge for the fasGraph.
s.forEach(e.edges(),function(e){var r=t.edge(e.v,e.w)||0,s=n(e),o=r+s;t.setEdge(e.v,e.w,o),u=Math.max(u,t.node(e.v).out+=s),d=Math.max(d,t.node(e.w).in+=s)}),l=s.range(u+d+3).map(function(){return new a.List}),f=d+1,s.forEach(t.nodes(),function(e){h(l,f,t.node(e))}),{graph:t,buckets:l,zeroIdx:f}),g=function(e,r,n){for(var t,s=[],o=r[r.length-1],a=r[0];e.nodeCount();){for(;t=a.dequeue();)c(e,r,n,t);for(;t=o.dequeue();)c(e,r,n,t);if(e.nodeCount()){for(var i=r.length-2;i>0;--i)if(t=r[i].dequeue()){s=s.concat(c(e,r,n,t,!0));break}}}return s}(p.graph,p.buckets,p.zeroIdx);// Expand multi-edges
return s.flatten(s.map(g,function(r){return e.outEdges(r.v,r.w)}))}function c(e,r,n,t,o){var a=o?[]:void 0;return s.forEach(e.inEdges(t.v),function(t){var s=e.edge(t),i=e.node(t.v);o&&a.push({v:t.v,w:t.w}),i.out-=s,h(r,n,i)}),s.forEach(e.outEdges(t.v),function(t){var s=e.edge(t),o=t.w,a=e.node(o);a.in-=s,h(r,n,a)}),e.removeNode(t.v),a}function h(e,r,n){n.out?n.in?e[n.out-n.in+r].enqueue(n):e[e.length-1].enqueue(n):e[0].enqueue(n)}},{"lodash-es":"h4a9d","../graphlib/index.js":"j6NXy","./data/list.js":"5qavm","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5qavm":[function(e,r,n){/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"List",()=>s);class s{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,r=e._prev;if(r!==e)return o(r),r}enqueue(e){var r=this._sentinel;e._prev&&e._next&&o(e),e._next=r._next,r._next._prev=e,r._next=e,e._prev=r}toString(){for(var e=[],r=this._sentinel,n=r._prev;n!==r;)e.push(JSON.stringify(n,a)),n=n._prev;return"["+e.join(", ")+"]"}}function o(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function a(e,r){if("_next"!==e&&"_prev"!==e)return r}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dQEd2:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"layout",()=>m);var s=e("lodash-es"),o=e("../graphlib/index.js"),a=e("./add-border-segments.js"),i=e("./coordinate-system.js"),d=e("./acyclic.js"),c=e("./normalize.js"),h=e("./rank/index.js"),u=e("./nesting-graph.js"),l=e("./order/index.js"),f=e("./parent-dummy-chains.js"),p=e("./position/index.js"),g=e("./util.js");function m(e,r){var n=r&&r.debugTiming?g.time:g.notime;n("layout",function(){var r=n("  buildLayoutGraph",function(){var r,n;return r=new o.Graph({multigraph:!0,compound:!0}),n=I(e.graph()),r.setGraph(s.merge({},j,_(n,v),s.pick(n,y))),s.forEach(e.nodes(),function(n){var t=I(e.node(n));r.setNode(n,s.defaults(_(t,E),b)),r.setParent(n,e.parent(n))}),s.forEach(e.edges(),function(n){var t=I(e.edge(n));r.setEdge(n,s.merge({},x,_(t,w),s.pick(t,k)))}),r});n("  runLayout",function(){n("    makeSpaceForEdgeLabels",function(){var e;e=r.graph(),e.ranksep/=2,s.forEach(r.edges(),function(n){var t=r.edge(n);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)})}),n("    removeSelfEdges",function(){s.forEach(r.edges(),function(e){if(e.v===e.w){var n=r.node(e.v);n.selfEdges||(n.selfEdges=[]),n.selfEdges.push({e:e,label:r.edge(e)}),r.removeEdge(e)}})}),n("    acyclic",function(){d.run(r)}),n("    nestingGraph.run",function(){u.run(r)}),n("    rank",function(){(0,h.rank)(g.asNonCompoundGraph(r))}),n("    injectEdgeLabelProxies",function(){s.forEach(r.edges(),function(e){var n=r.edge(e);if(n.width&&n.height){var t=r.node(e.v),s={rank:(r.node(e.w).rank-t.rank)/2+t.rank,e:e};g.addDummyNode(r,"edge-proxy",s,"_ep")}})}),n("    removeEmptyRanks",function(){g.removeEmptyRanks(r)}),n("    nestingGraph.cleanup",function(){u.cleanup(r)}),n("    normalizeRanks",function(){g.normalizeRanks(r)}),n("    assignRankMinMax",function(){var e;e=0,s.forEach(r.nodes(),function(n){var t=r.node(n);t.borderTop&&(t.minRank=r.node(t.borderTop).rank,t.maxRank=r.node(t.borderBottom).rank,// @ts-expect-error
e=s.max(e,t.maxRank))}),r.graph().maxRank=e}),n("    removeEdgeLabelProxies",function(){s.forEach(r.nodes(),function(e){var n=r.node(e);"edge-proxy"===n.dummy&&(r.edge(n.e).labelRank=n.rank,r.removeNode(e))})}),n("    normalize.run",function(){c.run(r)}),n("    parentDummyChains",function(){(0,f.parentDummyChains)(r)}),n("    addBorderSegments",function(){(0,a.addBorderSegments)(r)}),n("    order",function(){(0,l.order)(r)}),n("    insertSelfEdges",function(){var e;e=g.buildLayerMatrix(r),s.forEach(e,function(e){var n=0;s.forEach(e,function(e,t){var o=r.node(e);o.order=t+n,s.forEach(o.selfEdges,function(e){g.addDummyNode(r,"selfedge",{width:e.label.width,height:e.label.height,rank:o.rank,order:t+ ++n,e:e.e,label:e.label},"_se")}),delete o.selfEdges})})}),n("    adjustCoordinateSystem",function(){i.adjust(r)}),n("    position",function(){(0,p.position)(r)}),n("    positionSelfEdges",function(){s.forEach(r.nodes(),function(e){var n=r.node(e);if("selfedge"===n.dummy){var t=r.node(n.e.v),s=t.x+t.width/2,o=t.y,a=n.x-s,i=t.height/2;r.setEdge(n.e,n.label),r.removeNode(e),n.label.points=[{x:s+2*a/3,y:o-i},{x:s+5*a/6,y:o-i},{x:s+a,y:o},{x:s+5*a/6,y:o+i},{x:s+2*a/3,y:o+i}],n.label.x=n.x,n.label.y=n.y}})}),n("    removeBorderNodes",function(){s.forEach(r.nodes(),function(e){if(r.children(e).length){var n=r.node(e),t=r.node(n.borderTop),o=r.node(n.borderBottom),a=r.node(s.last(n.borderLeft)),i=r.node(s.last(n.borderRight));n.width=Math.abs(i.x-a.x),n.height=Math.abs(o.y-t.y),n.x=a.x+n.width/2,n.y=t.y+n.height/2}}),s.forEach(r.nodes(),function(e){"border"===r.node(e).dummy&&r.removeNode(e)})}),n("    normalize.undo",function(){c.undo(r)}),n("    fixupEdgeLabelCoords",function(){s.forEach(r.edges(),function(e){var n=r.edge(e);if(s.has(n,"x"))switch(("l"===n.labelpos||"r"===n.labelpos)&&(n.width-=n.labeloffset),n.labelpos){case"l":n.x-=n.width/2+n.labeloffset;break;case"r":n.x+=n.width/2+n.labeloffset}})}),n("    undoCoordinateSystem",function(){i.undo(r)}),n("    translateGraph",function(){(function(e){var r=Number.POSITIVE_INFINITY,n=0,t=Number.POSITIVE_INFINITY,o=0,a=e.graph(),i=a.marginx||0,d=a.marginy||0;function c(e){var s=e.x,a=e.y,i=e.width,d=e.height;r=Math.min(r,s-i/2),n=Math.max(n,s+i/2),t=Math.min(t,a-d/2),o=Math.max(o,a+d/2)}s.forEach(e.nodes(),function(r){c(e.node(r))}),s.forEach(e.edges(),function(r){var n=e.edge(r);s.has(n,"x")&&c(n)}),r-=i,t-=d,s.forEach(e.nodes(),function(n){var s=e.node(n);s.x-=r,s.y-=t}),s.forEach(e.edges(),function(n){var o=e.edge(n);s.forEach(o.points,function(e){e.x-=r,e.y-=t}),s.has(o,"x")&&(o.x-=r),s.has(o,"y")&&(o.y-=t)}),a.width=n-r+i,a.height=o-t+d})(r)}),n("    assignNodeIntersects",function(){s.forEach(r.edges(),function(e){var n,t,s=r.edge(e),o=r.node(e.v),a=r.node(e.w);s.points?(n=s.points[0],t=s.points[s.points.length-1]):(s.points=[],n=a,t=o),s.points.unshift(g.intersectRect(o,n)),s.points.push(g.intersectRect(a,t))})}),n("    reversePoints",function(){s.forEach(r.edges(),function(e){var n=r.edge(e);n.reversed&&n.points.reverse()})}),n("    acyclic.undo",function(){d.undo(r)})}),n("  updateInputGraph",function(){s.forEach(e.nodes(),function(n){var t=e.node(n),s=r.node(n);t&&(t.x=s.x,t.y=s.y,r.children(n).length&&(t.width=s.width,t.height=s.height))}),s.forEach(e.edges(),function(n){var t=e.edge(n),o=r.edge(n);t.points=o.points,s.has(o,"x")&&(t.x=o.x,t.y=o.y)}),e.graph().width=r.graph().width,e.graph().height=r.graph().height})})}var v=["nodesep","edgesep","ranksep","marginx","marginy"],j={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},y=["acyclicer","ranker","rankdir","align"],E=["width","height"],b={width:0,height:0},w=["minlen","weight","width","height","labeloffset"],x={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},k=["labelpos"];function _(e,r){return s.mapValues(s.pick(e,r),Number)}function I(e){var r={};return s.forEach(e,function(e,n){r[n.toLowerCase()]=e}),r}},{"lodash-es":"h4a9d","../graphlib/index.js":"j6NXy","./add-border-segments.js":"bWCM7","./coordinate-system.js":"gOcH8","./acyclic.js":"65tNo","./normalize.js":"jEd9R","./rank/index.js":"7Hj7F","./nesting-graph.js":"cCWnA","./order/index.js":"bIgS9","./parent-dummy-chains.js":"6Jejx","./position/index.js":"lUl3t","./util.js":"h7o6h","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bWCM7:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"addBorderSegments",()=>a);var s=e("lodash-es"),o=e("./util.js");function a(e){s.forEach(e.children(),function r(n){var t=e.children(n),o=e.node(n);if(t.length&&s.forEach(t,r),s.has(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var a=o.minRank,d=o.maxRank+1;a<d;++a)i(e,"borderLeft","_bl",n,o,a),i(e,"borderRight","_br",n,o,a)}})}function i(e,r,n,t,s,a){var i=s[r][a-1],d=o.addDummyNode(e,"border",{width:0,height:0,rank:a,borderType:r},n);s[r][a]=d,e.setParent(d,t),i&&e.setEdge(i,d,{weight:1})}},{"lodash-es":"h4a9d","./util.js":"h7o6h","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],h7o6h:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"addDummyNode",()=>a),t.export(n,"simplify",()=>i),t.export(n,"asNonCompoundGraph",()=>d),t.export(n,"successorWeights",()=>c),t.export(n,"predecessorWeights",()=>h),t.export(n,"intersectRect",()=>u),t.export(n,"buildLayerMatrix",()=>l),t.export(n,"normalizeRanks",()=>f),t.export(n,"removeEmptyRanks",()=>p),t.export(n,"addBorderNode",()=>g),t.export(n,"maxRank",()=>m),t.export(n,"partition",()=>v),t.export(n,"time",()=>j),t.export(n,"notime",()=>y);var s=e("lodash-es"),o=e("../graphlib/index.js");/*
 * Adds a dummy node to the graph and return v.
 */function a(e,r,n,t){var o;do o=s.uniqueId(t);while(e.hasNode(o))return n.dummy=r,e.setNode(o,n),o}/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */function i(e){var r=new(0,o.Graph)().setGraph(e.graph());return s.forEach(e.nodes(),function(n){r.setNode(n,e.node(n))}),s.forEach(e.edges(),function(n){var t=r.edge(n.v,n.w)||{weight:0,minlen:1},s=e.edge(n);r.setEdge(n.v,n.w,{weight:t.weight+s.weight,minlen:Math.max(t.minlen,s.minlen)})}),r}function d(e){var r=new(0,o.Graph)({multigraph:e.isMultigraph()}).setGraph(e.graph());return s.forEach(e.nodes(),function(n){e.children(n).length||r.setNode(n,e.node(n))}),s.forEach(e.edges(),function(n){r.setEdge(n,e.edge(n))}),r}function c(e){var r=s.map(e.nodes(),function(r){var n={};return s.forEach(e.outEdges(r),function(r){n[r.w]=(n[r.w]||0)+e.edge(r).weight}),n});return s.zipObject(e.nodes(),r)}function h(e){var r=s.map(e.nodes(),function(r){var n={};return s.forEach(e.inEdges(r),function(r){n[r.v]=(n[r.v]||0)+e.edge(r).weight}),n});return s.zipObject(e.nodes(),r)}/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */function u(e,r){var n,t,s=e.x,o=e.y,a=r.x-s,i=r.y-o,d=e.width/2,c=e.height/2;if(!a&&!i)throw Error("Not possible to find intersection inside of the rectangle");return Math.abs(i)*d>Math.abs(a)*c?(i<0&&(c=-c),n=c*a/i,t=c):(a<0&&(d=-d),n=d,t=d*i/a),{x:s+n,y:o+t}}/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */function l(e){var r=s.map(s.range(m(e)+1),function(){return[]});return s.forEach(e.nodes(),function(n){var t=e.node(n),o=t.rank;s.isUndefined(o)||(r[o][t.order]=n)}),r}/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */function f(e){var r=s.min(s.map(e.nodes(),function(r){return e.node(r).rank}));s.forEach(e.nodes(),function(n){var t=e.node(n);s.has(t,"rank")&&(t.rank-=r)})}function p(e){// Ranks may not start at 0, so we need to offset them
var r=s.min(s.map(e.nodes(),function(r){return e.node(r).rank})),n=[];s.forEach(e.nodes(),function(t){var s=e.node(t).rank-r;n[s]||(n[s]=[]),n[s].push(t)});var t=0,o=e.graph().nodeRankFactor;s.forEach(n,function(r,n){s.isUndefined(r)&&n%o!=0?--t:t&&s.forEach(r,function(r){e.node(r).rank+=t})})}function g(e,r,n,t){var s={width:0,height:0};return arguments.length>=4&&(s.rank=n,s.order=t),a(e,"border",s,r)}function m(e){return s.max(s.map(e.nodes(),function(r){var n=e.node(r).rank;if(!s.isUndefined(n))return n}))}/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */function v(e,r){var n={lhs:[],rhs:[]};return s.forEach(e,function(e){r(e)?n.lhs.push(e):n.rhs.push(e)}),n}/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */function j(e,r){var n=s.now();try{return r()}finally{console.log(e+" time: "+(s.now()-n)+"ms")}}function y(e,r){return r()}},{"lodash-es":"h4a9d","../graphlib/index.js":"j6NXy","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gOcH8:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"adjust",()=>o),t.export(n,"undo",()=>a);var s=e("lodash-es");function o(e){var r=e.graph().rankdir.toLowerCase();("lr"===r||"rl"===r)&&i(e)}function a(e){var r=e.graph().rankdir.toLowerCase();("bt"===r||"rl"===r)&&(s.forEach(e.nodes(),function(r){c(e.node(r))}),s.forEach(e.edges(),function(r){var n=e.edge(r);s.forEach(n.points,c),s.has(n,"y")&&c(n)})),("lr"===r||"rl"===r)&&(s.forEach(e.nodes(),function(r){h(e.node(r))}),s.forEach(e.edges(),function(r){var n=e.edge(r);s.forEach(n.points,h),s.has(n,"x")&&h(n)}),i(e))}function i(e){s.forEach(e.nodes(),function(r){d(e.node(r))}),s.forEach(e.edges(),function(r){d(e.edge(r))})}function d(e){var r=e.width;e.width=e.height,e.height=r}function c(e){e.y=-e.y}function h(e){var r=e.x;e.x=e.y,e.y=r}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],jEd9R:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"run",()=>a),t.export(n,"undo",()=>i);var s=e("lodash-es"),o=e("./util.js");/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */function a(e){e.graph().dummyChains=[],s.forEach(e.edges(),function(r){(function(e,r){var n,t,s,a=r.v,i=e.node(a).rank,d=r.w,c=e.node(d).rank,h=r.name,u=e.edge(r),l=u.labelRank;if(c!==i+1){for(e.removeEdge(r),s=0,++i;i<c;++s,++i)u.points=[],t={width:0,height:0,edgeLabel:u,edgeObj:r,rank:i},n=o.addDummyNode(e,"edge",t,"_d"),i===l&&(t.width=u.width,t.height=u.height,// @ts-expect-error
t.dummy="edge-label",// @ts-expect-error
t.labelpos=u.labelpos),e.setEdge(a,n,{weight:u.weight},h),0===s&&e.graph().dummyChains.push(n),a=n;e.setEdge(a,d,{weight:u.weight},h)}})(e,r)})}function i(e){s.forEach(e.graph().dummyChains,function(r){var n,t=e.node(r),s=t.edgeLabel;for(e.setEdge(t.edgeObj,s);t.dummy;)n=e.successors(r)[0],e.removeNode(r),s.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(s.x=t.x,s.y=t.y,s.width=t.width,s.height=t.height),r=n,t=e.node(r)})}},{"lodash-es":"h4a9d","./util.js":"h7o6h","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7Hj7F":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"rank",()=>i);var s=e("./feasible-tree.js"),o=e("./network-simplex.js"),a=e("./util.js");/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */function i(e){switch(e.graph().ranker){case"network-simplex":default:var r;r=e,(0,o.networkSimplex)(r);break;case"tight-tree":(0,a.longestPath)(e),(0,s.feasibleTree)(e);break;case"longest-path":d(e)}}// A fast and simple ranker, but results are far from optimal.
var d=a.longestPath},{"./feasible-tree.js":"eFW3K","./network-simplex.js":"eE4Ic","./util.js":"j4kYr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],eFW3K:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"feasibleTree",()=>i);var s=e("lodash-es"),o=e("../../graphlib/index.js"),a=e("./util.js");/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */function i(e){var r,n,t=new o.Graph({directed:!1}),i=e.nodes()[0],d=e.nodeCount();for(t.setNode(i,{});s.forEach(t.nodes(),function r(n){s.forEach(e.nodeEdges(n),function(s){var o=s.v,i=n===o?s.w:o;t.hasNode(i)||(0,a.slack)(e,s)||(t.setNode(i,{}),t.setEdge(n,i,{}),r(i))})}),t.nodeCount()<d;)r=/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */function(e,r){return s.minBy(r.edges(),function(n){if(e.hasNode(n.v)!==e.hasNode(n.w))return(0,a.slack)(r,n)})}(t,e),n=t.hasNode(r.v)?(0,a.slack)(e,r):-(0,a.slack)(e,r),function(e,r,n){s.forEach(e.nodes(),function(e){r.node(e).rank+=n})}(t,e,n);return t}},{"lodash-es":"h4a9d","../../graphlib/index.js":"j6NXy","./util.js":"j4kYr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],j4kYr:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"longestPath",()=>o),t.export(n,"slack",()=>a);var s=e("lodash-es");/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */function o(e){var r={};s.forEach(e.sources(),function n(t){var o=e.node(t);if(s.has(r,t))return o.rank;r[t]=!0;var a=s.min(s.map(e.outEdges(t),function(r){return n(r.w)-e.edge(r).minlen}));return(a===Number.POSITIVE_INFINITY||// return value of _.map([]) for Lodash 4
null==// return value of _.map([]) for Lodash 3
a)&&(a=0),o.rank=a})}/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */function a(e,r){return e.node(r.w).rank-e.node(r.v).rank-e.edge(r).minlen}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],eE4Ic:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"networkSimplex",()=>c);var s=e("lodash-es"),o=e("../../graphlib/alg/index.js"),a=e("../util.js"),i=e("./feasible-tree.js"),d=e("./util.js");/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */function c(e){e=(0,a.simplify)(e),(0,d.longestPath)(e);var r,n,t=(0,i.feasibleTree)(e);for(l(t),h(t,e);r=f(t);)n=p(t,e,r),g(t,e,r,n)}/*
 * Initializes cut values for all edges in the tree.
 */function h(e,r){var n=o.postorder(e,e.nodes());n=n.slice(0,n.length-1),s.forEach(n,function(n){var t;t=e.node(n).parent,e.edge(n,t).cutvalue=u(e,r,n)})}/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */function u(e,r,n){var t=e.node(n).parent,o=!0,a=r.edge(n,t),i=0;return a||(o=!1,a=r.edge(t,n)),i=a.weight,s.forEach(r.nodeEdges(n),function(s){var a=s.v===n,d=a?s.w:s.v;if(d!==t){var c=a===o,h=r.edge(s).weight;if(i+=c?h:-h,e.hasEdge(n,d)){var u=e.edge(n,d).cutvalue;i+=c?-u:u}}}),i}function l(e,r){arguments.length<2&&(r=e.nodes()[0]),function e(r,n,t,o,a){var i=t,d=r.node(o);return n[o]=!0,s.forEach(r.neighbors(o),function(a){s.has(n,a)||(t=e(r,n,t,a,o))}),d.low=i,d.lim=t++,a?d.parent=a:delete d.parent,t}(e,{},1,r)}function f(e){return s.find(e.edges(),function(r){return e.edge(r).cutvalue<0})}function p(e,r,n){var t=n.v,o=n.w;// For the rest of this function we assume that v is the tail and w is the
// head, so if we don't have this edge in the graph we should flip it to
// match the correct orientation.
r.hasEdge(t,o)||(t=n.w,o=n.v);var a=e.node(t),i=e.node(o),c=a,h=!1;// If the root is in the tail of the edge then we need to flip the logic that
// checks for the head and tail nodes in the candidates function below.
a.lim>i.lim&&(c=i,h=!0);var u=s.filter(r.edges(),function(r){return h===m(e,e.node(r.v),c)&&h!==m(e,e.node(r.w),c)});return s.minBy(u,function(e){return(0,d.slack)(r,e)})}function g(e,r,n,t){var a,i,d=n.v,c=n.w;e.removeEdge(d,c),e.setEdge(t.v,t.w,{}),l(e),h(e,r),a=s.find(e.nodes(),function(e){return!r.node(e).parent}),i=(i=o.preorder(e,a)).slice(1),s.forEach(i,function(n){var t=e.node(n).parent,s=r.edge(n,t),o=!1;s||(s=r.edge(t,n),o=!0),r.node(n).rank=r.node(t).rank+(o?s.minlen:-s.minlen)})}/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */function m(e,r,n){return n.low<=r.lim&&r.lim<=n.lim}// Expose some internals for testing purposes
c.initLowLimValues=l,c.initCutValues=h,c.calcCutValue=u,c.leaveEdge=f,c.enterEdge=p,c.exchangeEdges=g},{"lodash-es":"h4a9d","../../graphlib/alg/index.js":"aHzdt","../util.js":"h7o6h","./feasible-tree.js":"eFW3K","./util.js":"j4kYr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],aHzdt:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"components",()=>s.components),t.export(n,"dijkstra",()=>o.dijkstra),t.export(n,"dijkstraAll",()=>a.dijkstraAll),t.export(n,"findCycles",()=>i.findCycles),t.export(n,"floydWarshall",()=>d.floydWarshall),t.export(n,"isAcyclic",()=>c.isAcyclic),t.export(n,"postorder",()=>h.postorder),t.export(n,"preorder",()=>u.preorder),t.export(n,"prim",()=>l.prim),t.export(n,"tarjan",()=>f.tarjan),t.export(n,"topsort",()=>p.topsort);var s=e("./components.js"),o=e("./dijkstra.js"),a=e("./dijkstra-all.js"),i=e("./find-cycles.js"),d=e("./floyd-warshall.js"),c=e("./is-acyclic.js"),h=e("./postorder.js"),u=e("./preorder.js"),l=e("./prim.js"),f=e("./tarjan.js"),p=e("./topsort.js")},{"./components.js":"5k0A8","./dijkstra.js":"hQjpk","./dijkstra-all.js":"44OU9","./find-cycles.js":"jzdBq","./floyd-warshall.js":"4B5Kc","./is-acyclic.js":"a2q6P","./postorder.js":"2NZTW","./preorder.js":"kUjCq","./prim.js":"5TnwK","./tarjan.js":"Zez6P","./topsort.js":"jPX5R","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5k0A8":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"components",()=>o);var s=e("lodash-es");function o(e){var r,n={},t=[];return s.each(e.nodes(),function(o){r=[],function t(o){s.has(n,o)||(n[o]=!0,r.push(o),s.each(e.successors(o),t),s.each(e.predecessors(o),t))}(o),r.length&&t.push(r)}),t}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hQjpk:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"dijkstra",()=>i);var s=e("lodash-es"),o=e("../data/priority-queue.js"),a=s.constant(1);function i(e,r,n,t){return function(e,r,n,t){var s,a,i={},d=new o.PriorityQueue,c=function(e){var r=e.v!==s?e.v:e.w,t=i[r],o=n(e),c=a.distance+o;if(o<0)throw Error("dijkstra does not allow negative edge weights. Bad edge: "+e+" Weight: "+o);c<t.distance&&(t.distance=c,t.predecessor=s,d.decrease(r,c))};for(e.nodes().forEach(function(e){var n=e===r?0:Number.POSITIVE_INFINITY;i[e]={distance:n},d.add(e,n)});d.size()>0&&(a=i[s=d.removeMin()]).distance!==Number.POSITIVE_INFINITY;)t(s).forEach(c);return i}(e,String(r),n||a,t||function(r){return e.outEdges(r)})}},{"lodash-es":"h4a9d","../data/priority-queue.js":"uWIb2","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],uWIb2:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"PriorityQueue",()=>o);var s=e("lodash-es");/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */class o{constructor(){this._arr=[],this._keyIndices={}}/**
   * Returns the number of elements in the queue. Takes `O(1)` time.
   */size(){return this._arr.length}/**
   * Returns the keys that are in the queue. Takes `O(n)` time.
   */keys(){return this._arr.map(function(e){return e.key})}/**
   * Returns `true` if **key** is in the queue and `false` if not.
   */has(e){return s.has(this._keyIndices,e)}/**
   * Returns the priority for **key**. If **key** is not present in the queue
   * then this function returns `undefined`. Takes `O(1)` time.
   *
   * @param {Object} key
   */priority(e){var r=this._keyIndices[e];if(void 0!==r)return this._arr[r].priority}/**
   * Returns the key for the minimum element in this queue. If the queue is
   * empty this function throws an Error. Takes `O(1)` time.
   */min(){if(0===this.size())throw Error("Queue underflow");return this._arr[0].key}/**
   * Inserts a new key into the priority queue. If the key already exists in
   * the queue this function returns `false`; otherwise it will return `true`.
   * Takes `O(n)` time.
   *
   * @param {Object} key the key to add
   * @param {Number} priority the initial priority for the key
   */add(e,r){var n=this._keyIndices;if(e=String(e),!s.has(n,e)){var t=this._arr,o=t.length;return n[e]=o,t.push({key:e,priority:r}),this._decrease(o),!0}return!1}/**
   * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
   */removeMin(){this._swap(0,this._arr.length-1);var e=this._arr.pop();return delete this._keyIndices[e.key],this._heapify(0),e.key}/**
   * Decreases the priority for **key** to **priority**. If the new priority is
   * greater than the previous priority, this function will throw an Error.
   *
   * @param {Object} key the key for which to raise priority
   * @param {Number} priority the new priority for the key
   */decrease(e,r){var n=this._keyIndices[e];if(r>this._arr[n].priority)throw Error("New priority is greater than current priority. Key: "+e+" Old: "+this._arr[n].priority+" New: "+r);this._arr[n].priority=r,this._decrease(n)}_heapify(e){var r=this._arr,n=2*e,t=n+1,s=e;n<r.length&&(s=r[n].priority<r[s].priority?n:s,t<r.length&&(s=r[t].priority<r[s].priority?t:s),s!==e&&(this._swap(e,s),this._heapify(s)))}_decrease(e){for(var r,n=this._arr,t=n[e].priority;0!==e&&!(n[r=e>>1].priority<t);)this._swap(e,r),e=r}_swap(e,r){var n=this._arr,t=this._keyIndices,s=n[e],o=n[r];n[e]=o,n[r]=s,t[o.key]=e,t[s.key]=r}}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"44OU9":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"dijkstraAll",()=>a);var s=e("lodash-es"),o=e("./dijkstra.js");function a(e,r,n){return s.transform(e.nodes(),function(t,s){t[s]=(0,o.dijkstra)(e,s,r,n)},{})}},{"lodash-es":"h4a9d","./dijkstra.js":"hQjpk","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],jzdBq:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"findCycles",()=>a);var s=e("lodash-es"),o=e("./tarjan.js");function a(e){return s.filter((0,o.tarjan)(e),function(r){return r.length>1||1===r.length&&e.hasEdge(r[0],r[0])})}},{"lodash-es":"h4a9d","./tarjan.js":"Zez6P","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],Zez6P:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"tarjan",()=>o);var s=e("lodash-es");function o(e){var r=0,n=[],t={},o=[];return e.nodes().forEach(function(a){s.has(t,a)||function a(i){var d=t[i]={onStack:!0,lowlink:r,index:r++};if(n.push(i),e.successors(i).forEach(function(e){s.has(t,e)?t[e].onStack&&(d.lowlink=Math.min(d.lowlink,t[e].index)):(a(e),d.lowlink=Math.min(d.lowlink,t[e].lowlink))}),d.lowlink===d.index){var c,h=[];do t[c=n.pop()].onStack=!1,h.push(c);while(i!==c)o.push(h)}}(a)}),o}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"4B5Kc":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"floydWarshall",()=>o);var s=e("lodash-es").constant(1);function o(e,r,n){var t,o,a,i;return t=r||s,o=n||function(r){return e.outEdges(r)},a={},(i=e.nodes()).forEach(function(e){a[e]={},a[e][e]={distance:0},i.forEach(function(r){e!==r&&(a[e][r]={distance:Number.POSITIVE_INFINITY})}),o(e).forEach(function(r){var n=r.v===e?r.w:r.v,s=t(r);a[e][n]={distance:s,predecessor:e}})}),i.forEach(function(e){var r=a[e];i.forEach(function(n){var t=a[n];i.forEach(function(n){var s=t[e],o=r[n],a=t[n],i=s.distance+o.distance;i<a.distance&&(a.distance=i,a.predecessor=o.predecessor)})})}),a}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],a2q6P:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"isAcyclic",()=>o);var s=e("./topsort.js");function o(e){try{(0,s.topsort)(e)}catch(e){if(e instanceof s.CycleException)return!1;throw e}return!0}},{"./topsort.js":"jPX5R","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],jPX5R:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"topsort",()=>o),t.export(n,"CycleException",()=>a);var s=e("lodash-es");function o(e){var r={},n={},t=[];if(s.each(e.sinks(),function o(i){if(s.has(n,i))throw new a;s.has(r,i)||(n[i]=!0,r[i]=!0,s.each(e.predecessors(i),o),delete n[i],t.push(i))}),s.size(r)!==e.nodeCount())throw new a;return t}function a(){}o.CycleException=a,a.prototype=Error()},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2NZTW":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"postorder",()=>o);var s=e("./dfs.js");function o(e,r){return(0,s.dfs)(e,r,"post")}},{"./dfs.js":"cchz1","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cchz1:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"dfs",()=>o);var s=e("lodash-es");/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */function o(e,r,n){s.isArray(r)||(r=[r]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),o=[],a={};return s.each(r,function(r){if(!e.hasNode(r))throw Error("Graph does not have node: "+r);(function e(r,n,t,o,a,i){!s.has(o,n)&&(o[n]=!0,t||i.push(n),s.each(a(n),function(n){e(r,n,t,o,a,i)}),t&&i.push(n))})(e,r,"post"===n,a,t,o)}),o}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],kUjCq:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"preorder",()=>o);var s=e("./dfs.js");function o(e,r){return(0,s.dfs)(e,r,"pre")}},{"./dfs.js":"cchz1","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5TnwK":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"prim",()=>i);var s=e("lodash-es"),o=e("../data/priority-queue.js"),a=e("../graph.js");function i(e,r){var n,t=new a.Graph,i={},d=new o.PriorityQueue;function c(e){var t=e.v===n?e.w:e.v,s=d.priority(t);if(void 0!==s){var o=r(e);o<s&&(i[t]=n,d.decrease(t,o))}}if(0===e.nodeCount())return t;s.each(e.nodes(),function(e){d.add(e,Number.POSITIVE_INFINITY),t.setNode(e)}),// Start from an arbitrary node
d.decrease(e.nodes()[0],0);for(var h=!1;d.size()>0;){if(n=d.removeMin(),s.has(i,n))t.setEdge(n,i[n]);else if(h)throw Error("Input graph is not connected: "+e);else h=!0;e.nodeEdges(n).forEach(c)}return t}},{"lodash-es":"h4a9d","../data/priority-queue.js":"uWIb2","../graph.js":"84V0B","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cCWnA:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"run",()=>a),t.export(n,"cleanup",()=>i);var s=e("lodash-es"),o=e("./util.js");/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */function a(e){var r,n=o.addDummyNode(e,"root",{},"_root"),t=(r={},s.forEach(e.children(),function(n){!function n(t,o){var a=e.children(t);a&&a.length&&s.forEach(a,function(e){n(e,o+1)}),r[t]=o}(n,1)}),r),a=s.max(s.values(t))-1,i=2*a+1;e.graph().nestingRoot=n,// Multiply minlen by nodeSep to align nodes on non-border ranks.
s.forEach(e.edges(),function(r){e.edge(r).minlen*=i});// Calculate a weight that is sufficient to keep subgraphs vertically compact
var d=s.reduce(e.edges(),function(r,n){return r+e.edge(n).weight},0)+1;// Create border nodes and link them up
s.forEach(e.children(),function(r){(function e(r,n,t,a,i,d,c){var h=r.children(c);if(!h.length){c!==n&&r.setEdge(n,c,{weight:0,minlen:t});return}var u=o.addBorderNode(r,"_bt"),l=o.addBorderNode(r,"_bb"),f=r.node(c);r.setParent(u,c),f.borderTop=u,r.setParent(l,c),f.borderBottom=l,s.forEach(h,function(s){e(r,n,t,a,i,d,s);var o=r.node(s),h=o.borderTop?o.borderTop:s,f=o.borderBottom?o.borderBottom:s,p=o.borderTop?a:2*a,g=h!==f?1:i-d[c]+1;r.setEdge(u,h,{weight:p,minlen:g,nestingEdge:!0}),r.setEdge(f,l,{weight:p,minlen:g,nestingEdge:!0})}),r.parent(c)||r.setEdge(n,u,{weight:0,minlen:i+d[c]})})(e,n,i,d,a,t,r)}),// Save the multiplier for node layers for later removal of empty border
// layers.
e.graph().nodeRankFactor=i}function i(e){var r=e.graph();e.removeNode(r.nestingRoot),delete r.nestingRoot,s.forEach(e.edges(),function(r){e.edge(r).nestingEdge&&e.removeEdge(r)})}},{"lodash-es":"h4a9d","./util.js":"h7o6h","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bIgS9:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"order",()=>l);var s=e("lodash-es"),o=e("../../graphlib/index.js"),a=e("../util.js"),i=e("./add-subgraph-constraints.js"),d=e("./build-layer-graph.js"),c=e("./cross-count.js"),h=e("./init-order.js"),u=e("./sort-subgraph.js");/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */function l(e){var r=a.maxRank(e),n=f(e,s.range(1,r+1),"inEdges"),t=f(e,s.range(r-1,-1,-1),"outEdges"),d=(0,h.initOrder)(e);p(e,d);for(var l,g=Number.POSITIVE_INFINITY,m=0,v=0;v<4;++m,++v){(function(e,r){var n=new o.Graph;s.forEach(e,function(e){var t=e.graph().root,o=(0,u.sortSubgraph)(e,t,n,r);s.forEach(o.vs,function(r,n){e.node(r).order=n}),(0,i.addSubgraphConstraints)(e,n,o.vs)})})(m%2?n:t,m%4>=2),d=a.buildLayerMatrix(e);var j=(0,c.crossCount)(e,d);j<g&&(v=0,l=s.cloneDeep(d),g=j)}p(e,l)}function f(e,r,n){return s.map(r,function(r){return(0,d.buildLayerGraph)(e,r,n)})}function p(e,r){s.forEach(r,function(r){s.forEach(r,function(r,n){e.node(r).order=n})})}},{"lodash-es":"h4a9d","../../graphlib/index.js":"j6NXy","../util.js":"h7o6h","./add-subgraph-constraints.js":"fsBDe","./build-layer-graph.js":"lu08j","./cross-count.js":"3J4zt","./init-order.js":"6clIu","./sort-subgraph.js":"9FPWY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fsBDe:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"addSubgraphConstraints",()=>o);var s=e("lodash-es");function o(e,r,n){var t,o={};s.forEach(n,function(n){for(var s,a,i=e.parent(n);i;){if((s=e.parent(i))?(a=o[s],o[s]=i):(a=t,t=i),a&&a!==i){r.setEdge(a,i);return}i=s}});/*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],lu08j:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"buildLayerGraph",()=>a);var s=e("lodash-es"),o=e("../../graphlib/index.js");/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */function a(e,r,n){var t=function(e){for(var r;e.hasNode(r=s.uniqueId("_root")););return r}(e),a=new(0,o.Graph)({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(r){return e.node(r)});return s.forEach(e.nodes(),function(o){var i=e.node(o),d=e.parent(o);(i.rank===r||i.minRank<=r&&r<=i.maxRank)&&(a.setNode(o),a.setParent(o,d||t),// This assumes we have only short edges!
s.forEach(e[n](o),function(r){var n=r.v===o?r.w:r.v,t=a.edge(n,o),i=s.isUndefined(t)?0:t.weight;a.setEdge(n,o,{weight:e.edge(r).weight+i})}),s.has(i,"minRank")&&a.setNode(o,{borderLeft:i.borderLeft[r],borderRight:i.borderRight[r]}))}),a}},{"lodash-es":"h4a9d","../../graphlib/index.js":"j6NXy","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3J4zt":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"crossCount",()=>o);var s=e("lodash-es");/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */function o(e,r){for(var n=0,t=1;t<r.length;++t)n+=function(e,r,n){for(// Sort all of the edges between the north and south layers by their position
// in the north layer and then the south. Map these edges to the position of
// their head in the south layer.
var t=s.zipObject(n,s.map(n,function(e,r){return r})),o=s.flatten(s.map(r,function(r){return s.sortBy(s.map(e.outEdges(r),function(r){return{pos:t[r.w],weight:e.edge(r).weight}}),"pos")})),a=1;a<n.length;)a<<=1;var i=2*a-1;a-=1;var d=s.map(Array(i),function(){return 0}),c=0;return s.forEach(o.forEach(function(e){var r=e.pos+a;d[r]+=e.weight;// @ts-expect-error
for(var n=0;r>0;)r%2&&(n+=d[r+1]),// @ts-expect-error
r=r-1>>1,d[r]+=e.weight;c+=e.weight*n})),c}(e,r[t-1],r[t]);return n}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6clIu":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"initOrder",()=>o);var s=e("lodash-es");/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */function o(e){var r={},n=s.filter(e.nodes(),function(r){return!e.children(r).length}),t=s.max(s.map(n,function(r){return e.node(r).rank})),o=s.map(s.range(t+1),function(){return[]}),a=s.sortBy(n,function(r){return e.node(r).rank});return s.forEach(a,function n(t){s.has(r,t)||(r[t]=!0,o[e.node(t).rank].push(t),s.forEach(e.successors(t),n))}),o}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9FPWY":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"sortSubgraph",()=>function e(r,n,t,d){var c=r.children(n),h=r.node(n),u=h?h.borderLeft:void 0,l=h?h.borderRight:void 0,f={};u&&(c=s.filter(c,function(e){return e!==u&&e!==l}));var p=(0,o.barycenter)(r,c);s.forEach(p,function(n){if(r.children(n.v).length){var o=e(r,n.v,t,d);f[n.v]=o,s.has(o,"barycenter")&&(s.isUndefined(n.barycenter)?(n.barycenter=o.barycenter,n.weight=o.weight):(n.barycenter=(n.barycenter*n.weight+o.barycenter*o.weight)/(n.weight+o.weight),n.weight+=o.weight))}});var g=(0,a.resolveConflicts)(p,t);s.forEach(g,function(e){e.vs=s.flatten(e.vs.map(function(e){return f[e]?f[e].vs:e}))});var m=(0,i.sort)(g,d);if(u&&(m.vs=s.flatten([u,m.vs,l]),r.predecessors(u).length)){var v=r.node(r.predecessors(u)[0]),j=r.node(r.predecessors(l)[0]);s.has(m,"barycenter")||(m.barycenter=0,m.weight=0),m.barycenter=(m.barycenter*m.weight+v.order+j.order)/(m.weight+2),m.weight+=2}return m});var s=e("lodash-es"),o=e("./barycenter.js"),a=e("./resolve-conflicts.js"),i=e("./sort.js")},{"lodash-es":"h4a9d","./barycenter.js":"h3VKZ","./resolve-conflicts.js":"iOBiO","./sort.js":"a4S3E","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],h3VKZ:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"barycenter",()=>o);var s=e("lodash-es");function o(e,r){return s.map(r,function(r){var n=e.inEdges(r);if(!n.length)return{v:r};var t=s.reduce(n,function(r,n){var t=e.edge(n),s=e.node(n.v);return{sum:r.sum+t.weight*s.order,weight:r.weight+t.weight}},{sum:0,weight:0});return{v:r,barycenter:t.sum/t.weight,weight:t.weight}})}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iOBiO:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"resolveConflicts",()=>o);var s=e("lodash-es");/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */function o(e,r){var n={};return s.forEach(e,function(e,r){var t=n[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:r};s.isUndefined(e.barycenter)||(// @ts-expect-error
t.barycenter=e.barycenter,// @ts-expect-error
t.weight=e.weight)}),s.forEach(r.edges(),function(e){var r=n[e.v],t=n[e.w];s.isUndefined(r)||s.isUndefined(t)||(t.indegree++,r.out.push(n[e.w]))}),function(e){for(var r=[];e.length;){var n=e.pop();r.push(n),s.forEach(n.in.reverse(),function(e){return function(r){!r.merged&&(s.isUndefined(r.barycenter)||s.isUndefined(e.barycenter)||r.barycenter>=e.barycenter)&&function(e,r){var n=0,t=0;e.weight&&(n+=e.barycenter*e.weight,t+=e.weight),r.weight&&(n+=r.barycenter*r.weight,t+=r.weight),e.vs=r.vs.concat(e.vs),e.barycenter=n/t,e.weight=t,e.i=Math.min(r.i,e.i),r.merged=!0}(e,r)}}(n)),s.forEach(n.out,function(r){return function(n){n.in.push(r),0==--n.indegree&&e.push(n)}}(n))}return s.map(s.filter(r,function(e){return!e.merged}),function(e){return s.pick(e,["vs","i","barycenter","weight"])})}(s.filter(n,function(e){// @ts-expect-error
return!e.indegree}))}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],a4S3E:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"sort",()=>a);var s=e("lodash-es"),o=e("../util.js");function a(e,r){var n,t=o.partition(e,function(e){return s.has(e,"barycenter")}),a=t.lhs,d=s.sortBy(t.rhs,function(e){return-e.i}),c=[],h=0,u=0,l=0;a.sort((n=!!r,function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i})),l=i(c,d,l),s.forEach(a,function(e){l+=e.vs.length,c.push(e.vs),h+=e.barycenter*e.weight,u+=e.weight,l=i(c,d,l)});var f={vs:s.flatten(c)};return u&&(f.barycenter=h/u,f.weight=u),f}function i(e,r,n){for(var t;r.length&&(t=s.last(r)).i<=n;)r.pop(),e.push(t.vs),n++;return n}},{"lodash-es":"h4a9d","../util.js":"h7o6h","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6Jejx":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"parentDummyChains",()=>o);var s=e("lodash-es");function o(e){var r,n,t=(r={},n=0,s.forEach(e.children(),function t(o){var a=n;s.forEach(e.children(o),t),r[o]={low:a,lim:n++}}),r);s.forEach(e.graph().dummyChains,function(r){for(var n=e.node(r),s=n.edgeObj,o=// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function(e,r,n,t){var s,o,a=[],i=[],d=Math.min(r[n].low,r[t].low),c=Math.max(r[n].lim,r[t].lim);// Traverse up from v to find the LCA
s=n;do a.push(s=e.parent(s));while(s&&(r[s].low>d||c>r[s].lim))for(o=s,// Traverse from w to LCA
s=t;(s=e.parent(s))!==o;)i.push(s);return{path:a.concat(i.reverse()),lca:o}}(e,t,s.v,s.w),a=o.path,i=o.lca,d=0,c=a[0],h=!0;r!==s.w;){if(n=e.node(r),h){for(;(c=a[d])!==i&&e.node(c).maxRank<n.rank;)d++;c===i&&(h=!1)}if(!h){for(;d<a.length-1&&e.node(c=a[d+1]).minRank<=n.rank;)d++;c=a[d]}e.setParent(r,c),r=e.successors(r)[0]}})}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],lUl3t:[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),t.export(n,"position",()=>i);var s=e("lodash-es"),o=e("../util.js"),a=e("./bk.js");function i(e){var r,n,t,i;r=e=o.asNonCompoundGraph(e),n=o.buildLayerMatrix(r),t=r.graph().ranksep,i=0,s.forEach(n,function(e){var n=s.max(s.map(e,function(e){return r.node(e).height}));s.forEach(e,function(e){r.node(e).y=i+n/2}),i+=n+t}),s.forOwn((0,a.positionX)(e),function(r,n){e.node(n).x=r})}},{"lodash-es":"h4a9d","../util.js":"h7o6h","./bk.js":"4NOzx","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"4NOzx":[function(e,r,n){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(n),/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */t.export(n,"positionX",()=>m),t.export(n,"findType1Conflicts",()=>i),t.export(n,"findType2Conflicts",()=>d),t.export(n,"addConflict",()=>c),t.export(n,"hasConflict",()=>h),t.export(n,"verticalAlignment",()=>u),t.export(n,"horizontalCompaction",()=>l),t.export(n,"alignCoordinates",()=>p),t.export(n,"findSmallestWidthAlignment",()=>f),t.export(n,"balance",()=>g);var s=e("lodash-es"),o=e("../../graphlib/index.js"),a=e("../util.js");/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */function i(e,r){var n={};return s.reduce(r,function(r,t){var o=0,// segment.
a=0,i=r.length,d=s.last(t);return s.forEach(t,function(r,h){var u=function(e,r){if(e.node(r).dummy)return s.find(e.predecessors(r),function(r){return e.node(r).dummy})}(e,r),l=u?e.node(u).order:i;(u||r===d)&&(s.forEach(t.slice(a,h+1),function(r){s.forEach(e.predecessors(r),function(t){var s=e.node(t),a=s.order;(a<o||l<a)&&!(s.dummy&&e.node(r).dummy)&&c(n,t,r)})}),// @ts-expect-error
a=h+1,o=l)}),t}),n}function d(e,r){var n={};function t(r,t,o,a,i){var d;s.forEach(s.range(t,o),function(t){d=r[t],e.node(d).dummy&&s.forEach(e.predecessors(d),function(r){var t=e.node(r);t.dummy&&(t.order<a||t.order>i)&&c(n,r,d)})})}return s.reduce(r,function(r,n){var o,a=-1,i=0;return s.forEach(n,function(s,d){if("border"===e.node(s).dummy){var c=e.predecessors(s);c.length&&(o=e.node(c[0]).order,t(n,i,d,a,o),// @ts-expect-error
i=d,a=o)}t(n,i,n.length,o,r.length)}),n}),n}function c(e,r,n){if(r>n){var t=r;r=n,n=t}var s=e[r];s||(e[r]=s={}),s[n]=!0}function h(e,r,n){if(r>n){var t=r;r=n,n=t}return s.has(e[r],n)}/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */function u(e,r,n,t){var o={},a={},i={};return(// We cache the position here based on the layering because the graph and
// layering may be out of sync. The layering matrix is manipulated to
// generate different extreme alignments.
s.forEach(r,function(e){s.forEach(e,function(e,r){o[e]=e,a[e]=e,i[e]=r})}),s.forEach(r,function(e){var r=-1;s.forEach(e,function(e){var d=t(e);if(d.length)for(var c=((d=s.sortBy(d,function(e){return i[e]})).length-1)/2,u=Math.floor(c),l=Math.ceil(c);u<=l;++u){var f=d[u];a[e]===e&&r<i[f]&&!h(n,e,f)&&(a[f]=e,a[e]=o[e]=o[f],r=i[f])}})}),{root:o,align:a})}function l(e,r,n,t,a){// This portion of the algorithm differs from BK due to a number of problems.
// Instead of their algorithm we construct a new block graph and do two
// sweeps. The first sweep places blocks with the smallest possible
// coordinates. The second sweep removes unused space by moving blocks to the
// greatest coordinates without violating separation.
var i,d,c,h,u,l={},f=(c=new o.Graph,i=(h=e.graph()).nodesep,d=h.edgesep,u=function(e,r,n){var t,o,c=e.node(r),h=e.node(n);if(t=0+c.width/2,s.has(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":o=-c.width/2;break;case"r":o=c.width/2}if(o&&(t+=a?o:-o),o=0,t+=(c.dummy?d:i)/2+(h.dummy?d:i)/2+h.width/2,s.has(h,"labelpos"))switch(h.labelpos.toLowerCase()){case"l":o=h.width/2;break;case"r":o=-h.width/2}return o&&(t+=a?o:-o),o=0,t},s.forEach(r,function(r){var t;s.forEach(r,function(r){var s=n[r];if(c.setNode(s),t){var o=n[t],a=c.edge(o,s);c.setEdge(o,s,Math.max(u(e,r,t),a||0))}t=r})}),c),p=a?"borderLeft":"borderRight";function g(e,r){for(var n=f.nodes(),t=n.pop(),s={};t;)s[t]?e(t):(s[t]=!0,n.push(t),n=n.concat(r(t))),t=n.pop()}return g(// First pass, assign smallest coordinates
function(e){l[e]=f.inEdges(e).reduce(function(e,r){return Math.max(e,l[r.v]+f.edge(r))},0)},f.predecessors.bind(f)),g(// Second pass, assign greatest coordinates
function(r){var n=f.outEdges(r).reduce(function(e,r){return Math.min(e,l[r.w]-f.edge(r))},Number.POSITIVE_INFINITY),t=e.node(r);n!==Number.POSITIVE_INFINITY&&t.borderType!==p&&(l[r]=Math.max(l[r],n))},f.successors.bind(f)),// Assign x coordinates to all nodes
s.forEach(t,function(e){l[e]=l[n[e]]}),l}/*
 * Returns the alignment that has the smallest width of the given alignments.
 */function f(e,r){return s.minBy(s.values(r),function(r){var n=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return s.forIn(r,function(r,s){var o=e.node(s).width/2;n=Math.max(r+o,n),t=Math.min(r-o,t)}),n-t})}/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */function p(e,r){var n=s.values(r),t=s.min(n),o=s.max(n);s.forEach(["u","d"],function(n){s.forEach(["l","r"],function(a){var i,d=n+a,c=e[d];if(c!==r){var h=s.values(c);(i="l"===a?t-s.min(h):o-s.max(h))&&(e[d]=s.mapValues(c,function(e){return e+i}))}})})}function g(e,r){return s.mapValues(e.ul,function(n,t){if(r)return e[r.toLowerCase()][t];var o=s.sortBy(s.map(e,t));return(o[1]+o[2])/2})}function m(e){var r,n=a.buildLayerMatrix(e),t=s.merge(i(e,n),d(e,n)),o={};s.forEach(["u","d"],function(a){r="u"===a?n:s.values(n).reverse(),s.forEach(["l","r"],function(n){"r"===n&&(r=s.map(r,function(e){return s.values(e).reverse()}));var i=("u"===a?e.predecessors:e.successors).bind(e),d=u(e,r,t,i),c=l(e,r,d.root,d.align,"r"===n);"r"===n&&(c=s.mapValues(c,function(e){return-e})),o[a+n]=c})});var c=f(e,o);return p(o,c),g(o,e.graph().align)}},{"lodash-es":"h4a9d","../../graphlib/index.js":"j6NXy","../util.js":"h7o6h","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=flowDiagram-93327f21.714d5f69.js.map
;
//# sourceMappingURL=flowDiagram-93327f21.714d5f69.js.map
