!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,r,t,n,i){/* eslint-disable no-undef */var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof a[n]&&a[n],c=o.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(r,t){if(!c[r]){if(!e[r]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var i="function"==typeof a[n]&&a[n];if(!t&&i)return i(r,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(o)return o(r,!0);// Try the node require function if it exists.
if(s&&"string"==typeof r)return s(r);var u=Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}f.resolve=function(t){var n=e[r][1][t];return null!=n?n:t},f.cache={};var p=c[r]=new l.Module(r);e[r][0].call(p.exports,f,p,p.exports,this)}return c[r].exports;function f(e){var r=f.resolve(e);return!1===r?{}:l(r)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=c,l.parent=o,l.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return a[n]}}),a[n]=l;for(var u=0;u<r.length;u++)l(r[u]);if(t){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var p=l(t);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof define&&define.amd?define(function(){return p}):i&&(this[i]=p)}}({"590AZ":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"c",()=>u);var i=e("./mermaid-b0ad2de1.js"),a=e("mdast-util-from-markdown"),o=e("ts-dedent");function c(e,r,t){return e.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",r*t-.1+"em").attr("dy",t+"em")}function s(e,r,t){let n=e.append("text"),i=c(n,1,r);l(i,[{content:t,type:"normal"}]);let a=i.node().getComputedTextLength();return n.remove(),a}function l(e,r){e.text(""),r.forEach((r,t)=>{let n=e.append("tspan").attr("font-style","em"===r.type?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight","strong"===r.type?"bold":"normal");0===t?n.text(r.content):n.text(" "+r.content)})}let u=(e,r="",{style:t="",isTitle:n=!1,classes:u="",useHtmlLabels:p=!0,isNode:f=!0,width:d,addSvgBackground:m=!1}={})=>{if((0,i.l).info("createText",r,t,n,u,p,f,m),p){let n=function(e){let{children:r}=(0,a.fromMarkdown)(e);return r.map(function e(r){return"text"===r.type?r.value.replace(/\n/g,"<br/>"):"strong"===r.type?`<strong>${r.children.map(e).join("")}</strong>`:"emphasis"===r.type?`<em>${r.children.map(e).join("")}</em>`:"paragraph"===r.type?`<p>${r.children.map(e).join("")}</p>`:`Unsupported markdown: ${r.type}`}).join("")}(r),o={isNode:f,label:(0,i.H)(n).replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`),labelStyle:t.replace("fill:","color:")};return function(e,r,t,n,i=!1){var a;let o=e.append("foreignObject"),c=o.append("xhtml:div"),s=r.label,l=r.isNode?"nodeLabel":"edgeLabel";c.html(`
    <span class="${l} ${n}" `+(r.labelStyle?'style="'+r.labelStyle+'"':"")+">"+s+"</span>"),(a=r.labelStyle)&&c.attr("style",a),c.style("display","table-cell"),c.style("white-space","nowrap"),c.style("max-width",t+"px"),c.attr("xmlns","http://www.w3.org/1999/xhtml"),i&&c.attr("class","labelBkg");let u=c.node().getBoundingClientRect();return u.width===t&&(c.style("display","table"),c.style("white-space","break-spaces"),c.style("width",t+"px"),u=c.node().getBoundingClientRect()),o.style("width",u.width),o.style("height",u.height),o.node()}(e,o,d,u,m)}{let t=function(e){let r=function(e){let r=e.replace(/\n{2,}/g,"\n"),t=(0,o.dedent)(r);return t}(e),{children:t}=(0,a.fromMarkdown)(r),n=[[]],i=0;return t.forEach(e=>{"paragraph"===e.type&&e.children.forEach(e=>{!function e(r,t="normal"){if("text"===r.type){let e=r.value.split("\n");e.forEach((e,r)=>{0!==r&&(i++,n.push([])),e.split(" ").forEach(e=>{e&&n[i].push({content:e,type:t})})})}else("strong"===r.type||"emphasis"===r.type)&&r.children.forEach(t=>{e(t,r.type)})}(e)})}),n}(r),n=function(e,r,t,n=!1){let a=r.append("g"),o=a.insert("rect").attr("class","background"),u=a.append("text").attr("y","-10.1"),p=0;if(t.forEach(r=>{let t=r.map(e=>e.content).join(" "),n="",o=[],f=0;if(s(a,1.1,t)<=e)o.push(t);else{for(let r=0;r<=t.length;r++)if(n=t.slice(f,r),(0,i.l).info(n,f,r),s(a,1.1,n)>e){let e=t.slice(f,r),i=e.lastIndexOf(" ");i>-1&&(r=f+i+1),o.push(t.slice(f,r).trim()),f=r,n=null}null!=n&&o.push(n)}let d=o.map(e=>({content:e,type:r.type}));for(let e of d)l(c(u,p,1.1),[e]),p++}),!n)return u.node();{let e=u.node().getBBox();return o.attr("x",-2).attr("y",-2).attr("width",e.width+4).attr("height",e.height+4),a.node()}}(d,e,t,m);return n}}},{"./mermaid-b0ad2de1.js":"42V0c","mdast-util-from-markdown":"i9FLz","ts-dedent":"azOLv","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],i9FLz:[function(e,r,t){// Note: types exported from `index.d.ts`.
var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"fromMarkdown",()=>i.fromMarkdown);var i=e("./lib/index.js")},{"./lib/index.js":"a4h3w","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],a4h3w:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 *
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 *
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('mdast').ReferenceType} ReferenceType
 * @typedef {import('../index.js').CompileData} CompileData
 *//**
 * @typedef {Root | Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 *
 * @typedef {Omit<UnistParent, 'type' | 'children'> & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 *//**
 * @callback Transform
 *   Extra transform, to change the AST afterwards.
 * @param {Root} tree
 *   Tree to transform.
 * @returns {Root | undefined | null | void}
 *   New tree or nothing (in which case the current tree is used).
 *
 * @callback Handle
 *   Handle a token.
 * @param {CompileContext} this
 *   Context.
 * @param {Token} token
 *   Current token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 *
 * @callback OnEnterError
 *   Handle the case where the `right` token is open, but it is closed (by the
 *   `left` token) or because we reached the end of the document.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token | undefined} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @callback OnExitError
 *   Handle the case where the `right` token is open but it is closed by
 *   exiting the `left` token.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {[Token, OnEnterError | undefined]} TokenTuple
 *   Open token on the stack, with an optional error handler for when
 *   that token isn’t closed properly.
 *//**
 * @typedef Config
 *   Configuration.
 *
 *   We have our defaults, but extensions will add more.
 * @property {Array<string>} canContainEols
 *   Token types where line endings are used.
 * @property {Handles} enter
 *   Opening handles.
 * @property {Handles} exit
 *   Closing handles.
 * @property {Array<Transform>} transforms
 *   Tree transforms.
 *
 * @typedef {Partial<Config>} Extension
 *   Change how markdown tokens from micromark are turned into mdast.
 *
 * @typedef CompileContext
 *   mdast compiler context.
 * @property {Array<Node | Fragment>} stack
 *   Stack of nodes.
 * @property {Array<TokenTuple>} tokenStack
 *   Stack of tokens.
 * @property {<Key extends keyof CompileData>(key: Key) => CompileData[Key]} getData
 *   Get data from the key/value store.
 * @property {<Key extends keyof CompileData>(key: Key, value?: CompileData[Key]) => void} setData
 *   Set data into the key/value store.
 * @property {(this: CompileContext) => void} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {<Kind extends Node>(this: CompileContext, node: Kind, token: Token, onError?: OnEnterError) => Kind} enter
 *   Enter a token.
 * @property {(this: CompileContext, token: Token, onError?: OnExitError) => Node} exit
 *   Exit a token.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {Config} config
 *   Configuration.
 *
 * @typedef FromMarkdownOptions
 *   Configuration for how to build mdast.
 * @property {Array<Extension | Array<Extension>> | null | undefined} [mdastExtensions]
 *   Extensions for this utility to change how tokens are turned into a tree.
 *
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 *   Configuration.
 */// To do: micromark: create a registry of tokens?
// To do: next major: don’t return given `Node` from `enter`.
// To do: next major: remove setter/getter.
var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"fromMarkdown",()=>m);var i=e("mdast-util-to-string"),a=e("micromark/lib/parse.js"),o=e("micromark/lib/preprocess.js"),c=e("micromark/lib/postprocess.js"),s=e("micromark-util-decode-numeric-character-reference"),l=e("micromark-util-decode-string"),u=e("micromark-util-normalize-identifier"),p=e("decode-named-character-reference"),f=e("unist-util-stringify-position");let d={}.hasOwnProperty,m=/**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   *//**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */function(e,r,t){return"string"!=typeof r&&(t=r,r=void 0),/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */(function(e){/** @type {Config} */let r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(A),autolinkProtocol:D,autolinkEmail:D,atxHeading:o(E),blockQuote:o(//
// Creaters.
//
/** @returns {Blockquote} */function(){return{type:"blockquote",children:[]}}),characterEscape:D,characterReference:D,codeFenced:o(j),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:o(j,c),codeText:o(/** @returns {InlineCode} */function(){return{type:"inlineCode",value:""}},c),codeTextData:D,data:D,codeFlowValue:D,definition:o(/** @returns {Definition} */function(){return{type:"definition",identifier:"",label:null,title:null,url:""}}),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:o(/** @returns {Emphasis} */function(){return{type:"emphasis",children:[]}}),hardBreakEscape:o(S),hardBreakTrailing:o(S),htmlFlow:o(F,c),htmlFlowData:D,htmlText:o(F,c),htmlTextData:D,image:o(/** @returns {Image} */function(){return{type:"image",title:null,url:"",alt:null}}),label:c,link:o(A),listItem:o(/**
   * @param {Token} token
   * @returns {ListItem}
   */function(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}),listItemValue:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){if(t.expectingFirstListItemValue){let r=this.stack[this.stack.length-2];r.start=Number.parseInt(this.sliceSerialize(e),10),t.expectingFirstListItemValue=void 0}},listOrdered:o(q,//
// Handlers.
//
/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){t.expectingFirstListItemValue=!0}),listUnordered:o(q),paragraph:o(/** @returns {Paragraph} */function(){return{type:"paragraph",children:[]}}),reference:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){t.referenceType="collapsed"},referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:o(E),strong:o(/** @returns {Strong} */function(){return{type:"strong",children:[]}}),thematicBreak:o(/** @returns {ThematicBreak} */function(){return{type:"thematicBreak"}})},exit:{atxHeading:k(),atxHeadingSequence:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let r=this.stack[this.stack.length-1];if(!r.depth){let t=this.sliceSerialize(e).length;r.depth=t}},autolink:k(),autolinkEmail:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){y.call(this,e);let r=this.stack[this.stack.length-1];r.url="mailto:"+this.sliceSerialize(e)},autolinkProtocol:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){y.call(this,e);let r=this.stack[this.stack.length-1];r.url=this.sliceSerialize(e)},blockQuote:k(),characterEscapeValue:y,characterReferenceMarkerHexadecimal:w,characterReferenceMarkerNumeric:w,characterReferenceValue:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let r;let n=this.sliceSerialize(e),i=t.characterReferenceType;if(i)r=(0,s.decodeNumericCharacterReference)(n,"characterReferenceMarkerNumeric"===i?10:16),t.characterReferenceType=void 0;else{let e=(0,p.decodeNamedCharacterReference)(n);r=e}let a=this.stack.pop();a.value+=r,a.position.end=h(e.end)},codeFenced:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),t.flowCodeInside=void 0}),codeFencedFence:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){// Exit if this is the closing fence.
!t.flowCodeInside&&(this.buffer(),t.flowCodeInside=!0)},codeFencedFenceInfo:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.lang=e},codeFencedFenceMeta:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.meta=e},codeFlowValue:y,codeIndented:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.value=e.replace(/(\r?\n|\r)$/g,"")}),codeText:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.value=e}),codeTextData:y,data:y,definition:k(),definitionDestinationString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.url=e},definitionLabelString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let r=this.resume(),t=this.stack[this.stack.length-1];t.label=r,t.identifier=(0,u.normalizeIdentifier)(this.sliceSerialize(e)).toLowerCase()},definitionTitleString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.title=e},emphasis:k(),hardBreakEscape:k(v),hardBreakTrailing:k(v),htmlFlow:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.value=e}),htmlFlowData:y,htmlText:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.value=e}),htmlTextData:y,image:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.stack[this.stack.length-1];// Note: there are also `identifier` and `label` fields on this link node!
// These are used / cleaned here.
// To do: clean.
if(t.inReference){/** @type {ReferenceType} */let r=t.referenceType||"shortcut";e.type+="Reference",// @ts-expect-error: mutate.
e.referenceType=r,// @ts-expect-error: mutate.
delete e.url,delete e.title}else // @ts-expect-error: mutate.
delete e.identifier,// @ts-expect-error: mutate.
delete e.label;t.referenceType=void 0}),label:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.stack[this.stack.length-1],r=this.resume(),n=this.stack[this.stack.length-1];if(t.inReference=!0,"link"===n.type){/** @type {Array<StaticPhrasingContent>} */// @ts-expect-error: Assume static phrasing content.
let r=e.children;n.children=r}else n.alt=r},labelText:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let r=this.sliceSerialize(e),t=this.stack[this.stack.length-2];// @ts-expect-error: stash this on the node, as it might become a reference
// later.
t.label=(0,l.decodeString)(r),// @ts-expect-error: same as above.
t.identifier=(0,u.normalizeIdentifier)(r).toLowerCase()},lineEnding:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let n=this.stack[this.stack.length-1];// If we’re at a hard break, include the line ending in there.
if(t.atHardBreak){let r=n.children[n.children.length-1];r.position.end=h(e.end),t.atHardBreak=void 0;return}!t.setextHeadingSlurpLineEnding&&r.canContainEols.includes(n.type)&&(D.call(this,e),y.call(this,e))},link:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.stack[this.stack.length-1];// Note: there are also `identifier` and `label` fields on this link node!
// These are used / cleaned here.
// To do: clean.
if(t.inReference){/** @type {ReferenceType} */let r=t.referenceType||"shortcut";e.type+="Reference",// @ts-expect-error: mutate.
e.referenceType=r,// @ts-expect-error: mutate.
delete e.url,delete e.title}else // @ts-expect-error: mutate.
delete e.identifier,// @ts-expect-error: mutate.
delete e.label;t.referenceType=void 0}),listItem:k(),listOrdered:k(),listUnordered:k(),paragraph:k(),referenceString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let r=this.resume(),n=this.stack[this.stack.length-1];// @ts-expect-error: stash this on the node, as it might become a reference
// later.
n.label=r,// @ts-expect-error: same as above.
n.identifier=(0,u.normalizeIdentifier)(this.sliceSerialize(e)).toLowerCase(),t.referenceType="full"},resourceDestinationString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.url=e},resourceTitleString:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){let e=this.resume(),r=this.stack[this.stack.length-1];r.title=e},resource:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){t.inReference=void 0},setextHeading:k(/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){t.setextHeadingSlurpLineEnding=void 0}),setextHeadingLineSequence:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(e){let r=this.stack[this.stack.length-1];r.depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2},setextHeadingText:/**
   * @this {CompileContext}
   * @type {Handle}
   */function(){t.setextHeadingSlurpLineEnding=!0},strong:k(),thematicBreak:k()}};/**
 * @param {Config} combined
 * @param {Array<Extension | Array<Extension>>} extensions
 * @returns {void}
 */(function e(r,t){let n=-1;for(;++n<t.length;){let i=t[n];Array.isArray(i)?e(r,i):/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {void}
 */function(e,r){/** @type {keyof Extension} */let t;for(t in r)if(d.call(r,t)){if("canContainEols"===t){let n=r[t];n&&e[t].push(...n)}else if("transforms"===t){let n=r[t];n&&e[t].push(...n)}else if("enter"===t||"exit"===t){let n=r[t];n&&Object.assign(e[t],n)}}}(r,i)}})(r,(e||{}).mdastExtensions||[]);/** @type {CompileData} */let t={};return(/**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */function(e){/** @type {Root} */let t={type:"root",children:[]},i={stack:[t],tokenStack:[],config:r,enter:m,exit:x,buffer:c,resume:b,setData:n,getData:a},o=[],s=-1;for(;++s<e.length;)// items the list itself are spread out.
if("listOrdered"===e[s][1].type||"listUnordered"===e[s][1].type){if("enter"===e[s][0])o.push(s);else{let r=o.pop();s=/**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */function(e,r,t){let n,i,a,o,c=r-1,s=-1,l=!1;for(;++c<=t;){let r=e[c];if("listUnordered"===r[1].type||"listOrdered"===r[1].type||"blockQuote"===r[1].type?("enter"===r[0]?s++:s--,o=void 0):"lineEndingBlank"===r[1].type?"enter"===r[0]&&(!n||o||s||a||(a=c),o=void 0):"linePrefix"===r[1].type||"listItemValue"===r[1].type||"listItemMarker"===r[1].type||"listItemPrefix"===r[1].type||"listItemPrefixWhitespace"===r[1].type||(o=void 0),!s&&"enter"===r[0]&&"listItemPrefix"===r[1].type||-1===s&&"exit"===r[0]&&("listUnordered"===r[1].type||"listOrdered"===r[1].type)){if(n){let o=c;for(i=void 0;o--;){let r=e[o];if("lineEnding"===r[1].type||"lineEndingBlank"===r[1].type){if("exit"===r[0])continue;i&&(e[i][1].type="lineEndingBlank",l=!0),r[1].type="lineEnding",i=o}else if("linePrefix"===r[1].type||"blockQuotePrefix"===r[1].type||"blockQuotePrefixWhitespace"===r[1].type||"blockQuoteMarker"===r[1].type||"listItemIndent"===r[1].type);else break}a&&(!i||a<i)&&(n._spread=!0),// Fix position.
n.end=Object.assign({},i?e[i][1].start:r[1].end),e.splice(i||c,0,["exit",n,r[2]]),c++,t++}// Create a new list item.
"listItemPrefix"===r[1].type&&(n={type:"listItem",_spread:!1,start:Object.assign({},r[1].start),// @ts-expect-error: we’ll add `end` in a second.
end:void 0},// @ts-expect-error: `listItem` is most definitely defined, TS...
e.splice(c,0,["enter",n,r[2]]),c++,t++,a=void 0,o=!0)}}return e[r][1]._spread=l,t}(e,r,s)}}for(s=-1;++s<e.length;){let t=r[e[s][0]];d.call(t,e[s][1].type)&&t[e[s][1].type].call(Object.assign({sliceSerialize:e[s][2].sliceSerialize},i),e[s][1])}// Handle tokens still being open.
if(i.tokenStack.length>0){let e=i.tokenStack[i.tokenStack.length-1],r=e[1]||g;r.call(i,void 0,e[0])}for(// Figure out `root` position.
t.position={start:h(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:h(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},// Call transforms.
s=-1;++s<r.transforms.length;)t=r.transforms[s](t)||t;return t});/**
   * Set data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @param {CompileData[Key]} [value]
   *   New value.
   * @returns {void}
   *   Nothing.
   */function n(e,r){t[e]=r}/**
   * Get data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @returns {CompileData[Key]}
   *   Value.
   */function a(e){return t[e]}/**
   * Create an opener handle.
   *
   * @param {(token: Token) => Node} create
   *   Create a node.
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */function o(e,r){return(/**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */function(t){m.call(this,e(t),t),r&&r.call(this,t)})}/**
   * @this {CompileContext}
   * @returns {void}
   */function c(){this.stack.push({type:"fragment",children:[]})}/**
   * @template {Node} Kind
   *   Node type.
   * @this {CompileContext}
   *   Context.
   * @param {Kind} node
   *   Node to enter.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnEnterError | undefined} [errorHandler]
   *   Handle the case where this token is open, but it is closed by something else.
   * @returns {Kind}
   *   The given node.
   */function m(e,r,t){let n=this.stack[this.stack.length-1];return(// @ts-expect-error: Assume `Node` can exist as a child of `parent`.
n.children.push(e),this.stack.push(e),this.tokenStack.push([r,t]),// @ts-expect-error: `end` will be patched later.
e.position={start:h(r.start)},e)}/**
   * Create a closer handle.
   *
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */function k(e){return(/**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */function(r){e&&e.call(this,r),x.call(this,r)})}/**
   * @this {CompileContext}
   *   Context.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnExitError | undefined} [onExitError]
   *   Handle the case where another token is open.
   * @returns {Node}
   *   The closed node.
   */function x(e,r){let t=this.stack.pop(),n=this.tokenStack.pop();if(n){if(n[0].type!==e.type){if(r)r.call(this,e,n[0]);else{let r=n[1]||g;r.call(this,e,n[0])}}}else throw Error("Cannot close `"+e.type+"` ("+(0,f.stringifyPosition)({start:e.start,end:e.end})+"): it’s not open");return t.position.end=h(e.end),t}/**
   * @this {CompileContext}
   * @returns {string}
   */function b(){return(0,i.toString)(this.stack.pop())}/**
   * @this {CompileContext}
   * @type {Handle}
   */function D(e){let r=this.stack[this.stack.length-1],t=r.children[r.children.length-1];t&&"text"===t.type||(// @ts-expect-error: we’ll add `end` later.
// Add a new text node.
(t={type:"text",value:""}).position={start:h(e.start)},// @ts-expect-error: Assume `parent` accepts `text`.
r.children.push(t)),this.stack.push(t)}/**
   * @this {CompileContext}
   * @type {Handle}
   */function y(e){let r=this.stack.pop();r.value+=this.sliceSerialize(e),r.position.end=h(e.end)}/**
   * @this {CompileContext}
   * @type {Handle}
   */function v(){t.atHardBreak=!0}/**
   * @this {CompileContext}
   * @type {Handle}
   */function w(e){var r;r=e.type,t.characterReferenceType=r}/** @returns {Code} */function j(){return{type:"code",lang:null,meta:null,value:""}}/** @returns {Heading} */function E(){// @ts-expect-error `depth` will be set later.
return{type:"heading",depth:void 0,children:[]}}/** @returns {Break} */function S(){return{type:"break"}}/** @returns {HTML} */function F(){return{type:"html",value:""}}/** @returns {Link} */function A(){return{type:"link",title:null,url:"",children:[]}}/**
   * @param {Token} token
   * @returns {List}
   */function q(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}})(t)((0,c.postprocess)((0,a.parse)(t).document().write((0,o.preprocess)()(e,r,!0))))};/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */function h(e){return{line:e.line,column:e.column,offset:e.offset}}/** @type {OnEnterError} */function g(e,r){if(e)throw Error("Cannot close `"+e.type+"` ("+(0,f.stringifyPosition)({start:e.start,end:e.end})+"): a different token (`"+r.type+"`, "+(0,f.stringifyPosition)({start:r.start,end:r.end})+") is open");throw Error("Cannot close document, a token (`"+r.type+"`, "+(0,f.stringifyPosition)({start:r.start,end:r.end})+") is still open")}},{"mdast-util-to-string":"6EP6J","micromark/lib/parse.js":"bC62H","micromark/lib/preprocess.js":"2F8ys","micromark/lib/postprocess.js":"1RlOo","micromark-util-decode-numeric-character-reference":"dEuCB","micromark-util-decode-string":"h4ErJ","micromark-util-normalize-identifier":"e2XYl","decode-named-character-reference":"aLMfA","unist-util-stringify-position":"3goVY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6EP6J":[function(e,r,t){/**
 * @typedef {import('./lib/index.js').Options} Options
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"toString",()=>i.toString);var i=e("./lib/index.js")},{"./lib/index.js":"gE2gk","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gE2gk:[function(e,r,t){/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s.
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML.
 *//** @type {Options} */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Get the text content of a node or list of nodes.
 *
 * Prefers the node’s plain-text fields, otherwise serializes its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} value
 *   Thing to serialize, typically `Node`.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Serialized `value`.
 */n.export(t,"toString",()=>a);let i={};function a(e,r){let t=r||i,n="boolean"!=typeof t.includeImageAlt||t.includeImageAlt,a="boolean"!=typeof t.includeHtml||t.includeHtml;return o(e,n,a)}/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */function o(e,r,t){if(e&&"object"==typeof e){if("value"in e)return"html"!==e.type||t?e.value:"";if(r&&"alt"in e&&e.alt)return e.alt;if("children"in e)return c(e.children,r,t)}return Array.isArray(e)?c(e,r,t):""}/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */function c(e,r,t){/** @type {Array<string>} */let n=[],i=-1;for(;++i<e.length;)n[i]=o(e[i],r,t);return n.join("")}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bC62H:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Create} Create
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * @param {ParseOptions | null | undefined} [options]
 * @returns {ParseContext}
 */n.export(t,"parse",()=>p);var i=e("micromark-util-combine-extensions"),a=e("./initialize/content.js"),o=e("./initialize/document.js"),c=e("./initialize/flow.js"),s=e("./initialize/text.js"),l=e("./create-tokenizer.js"),u=e("./constructs.js");function p(e){let r=/** @type {FullNormalizedExtension} */(0,i.combineExtensions)([u,...(e||{}).extensions||[]]),t={defined:[],lazy:{},constructs:r,content:n(a.content),document:n(o.document),flow:n(c.flow),string:n(s.string),text:n(s.text)};return t;/**
   * @param {InitialConstruct} initial
   */function n(e){return /** @type {Create} */function(r){return(0,l.createTokenizer)(t,e,r)}}}},{"micromark-util-combine-extensions":"bW8Hu","./initialize/content.js":"gECMx","./initialize/document.js":"b1Ak5","./initialize/flow.js":"i0uZt","./initialize/text.js":"75KlL","./create-tokenizer.js":"hT0RM","./constructs.js":"ivY6o","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bW8Hu:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Handles} Handles
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Combine multiple syntax extensions into one.
 *
 * @param {Array<Extension>} extensions
 *   List of syntax extensions.
 * @returns {NormalizedExtension}
 *   A single combined extension.
 */n.export(t,"combineExtensions",()=>o),/**
 * Combine multiple HTML extensions into one.
 *
 * @param {Array<HtmlExtension>} htmlExtensions
 *   List of HTML extensions.
 * @returns {HtmlExtension}
 *   A single combined HTML extension.
 */n.export(t,"combineHtmlExtensions",()=>c);var i=e("micromark-util-chunked");let a={}.hasOwnProperty;function o(e){/** @type {NormalizedExtension} */let r={},t=-1;for(;++t<e.length;)!/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {void}
 */function(e,r){/** @type {keyof Extension} */let t;for(t in r){let n;let o=a.call(e,t)?e[t]:void 0,c=o||(e[t]={}),s=r[t];if(s)for(n in s){a.call(c,n)||(c[n]=[]);let e=s[n];!/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 * @param {Array<unknown>} list
 * @returns {void}
 */function(e,r){let t=-1,n=[];for(;++t<r.length;)("after"===r[t].add?e:n).push(r[t]);(0,i.splice)(e,0,0,n)}(c[n],Array.isArray(e)?e:e?[e]:[])}}}(r,e[t]);return r}function c(e){/** @type {HtmlExtension} */let r={},t=-1;for(;++t<e.length;)!/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all
 *   Extension to merge into.
 * @param {HtmlExtension} extension
 *   Extension to merge.
 * @returns {void}
 */function(e,r){/** @type {keyof HtmlExtension} */let t;for(t in r){let n;let i=a.call(e,t)?e[t]:void 0,o=i||(e[t]={}),c=r[t];if(c)for(n in c)o[n]=c[n]}}(r,e[t]);return r}},{"micromark-util-chunked":"aCCQY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],aCCQY:[function(e,r,t){/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {number} start
 *   Index to remove/insert at (can be negative).
 * @param {number} remove
 *   Number of items to remove.
 * @param {Array<T>} items
 *   Items to inject into `list`.
 * @returns {void}
 *   Nothing.
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function i(e,r,t,n){let i;let a=e.length,o=0;// No need to chunk the items if there’s only a couple (10k) items.
if(r=r<0?-r>a?0:a+r:r>a?a:r,t=t>0?t:0,n.length<1e4)(i=Array.from(n)).unshift(r,t),// @ts-expect-error Hush, it’s fine.
e.splice(...i);else // Insert the items in chunks to not cause stack overflows.
for(t&&e.splice(r,t);o<n.length;)(i=n.slice(o,o+1e4)).unshift(r,0),// @ts-expect-error Hush, it’s fine.
e.splice(...i),o+=1e4,r+=1e4}function a(e,r){return e.length>0?(i(e,e.length,0,r),e):r}n.defineInteropFlag(t),n.export(t,"splice",()=>i),/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {Array<T>} items
 *   Items to add to `list`.
 * @returns {Array<T>}
 *   Either `list` or `items`.
 */n.export(t,"push",()=>a)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gECMx:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"content",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");let o={tokenize:/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */function(e){let r;let t=e.attempt(this.parser.constructs.contentInitial,/** @type {State} */function(r){if(null===r){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),(0,i.factorySpace)(e,t,"linePrefix")},/** @type {State} */function(t){return e.enter("paragraph"),/** @type {State} */function t(n){let i=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=i),r=i,/** @type {State} */function r(n){if(null===n){e.exit("chunkText"),e.exit("paragraph"),e.consume(n);return}return(0,a.markdownLineEnding)(n)?(e.consume(n),e.exit("chunkText"),t):(// Data.
e.consume(n),r)}(n)}(t)});return t}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iStdw:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.
/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   spaces in markdown are often optional, in which case this factory can be
 *     used and `ok` will be switched to whether spaces were found or not
 * *   one line ending or space can be detected with `markdownSpace(code)` right
 *     before using `factorySpace`
 *
 * ###### Examples
 *
 * Where `␉` represents a tab (plus how much it expands) and `␠` represents a
 * single space.
 *
 * ```markdown
 * ␉
 * ␠␠␠␠
 * ␉␠
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {TokenType} type
 *   Type (`' \t'`).
 * @param {number | undefined} [max=Infinity]
 *   Max (exclusive).
 * @returns
 *   Start state.
 */n.export(t,"factorySpace",()=>a);var i=e("micromark-util-character");function a(e,r,t,n){let a=n?n-1:Number.POSITIVE_INFINITY,o=0;return /** @type {State} */function(n){return(0,i.markdownSpace)(n)?(e.enter(t),/** @type {State} */function n(c){return(0,i.markdownSpace)(c)&&o++<a?(e.consume(c),n):(e.exit(t),r(c))}(n)):r(n)}}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cUjFI:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"asciiAlpha",()=>a),n.export(t,"asciiAlphanumeric",()=>o),n.export(t,"asciiAtext",()=>c),/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */n.export(t,"asciiControl",()=>s),n.export(t,"asciiDigit",()=>l),n.export(t,"asciiHexDigit",()=>u),n.export(t,"asciiPunctuation",()=>p),/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */n.export(t,"markdownLineEnding",()=>f),/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */n.export(t,"markdownLineEndingOrSpace",()=>d),/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */n.export(t,"markdownSpace",()=>m),n.export(t,"unicodePunctuation",()=>h),n.export(t,"unicodeWhitespace",()=>g);var i=e("./lib/unicode-punctuation-regex.js");let a=k(/[A-Za-z]/),o=k(/[\dA-Za-z]/),c=k(/[#-'*+\--9=?A-Z^-~]/);function s(e){return(// character DEL
null!==e&&(e<32||127===e))}let l=k(/\d/),u=k(/[\dA-Fa-f]/),p=k(/[!-/:-@[-`{-~]/);function f(e){return null!==e&&e<-2}function d(e){return null!==e&&(e<0||32===e)}function m(e){return -2===e||-1===e||32===e}let h=k(i.unicodePunctuationRegex),g=k(/\s/);/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => boolean}
 */function k(e){return(/**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */function(r){return null!==r&&e.test(String.fromCharCode(r))})}},{"./lib/unicode-punctuation-regex.js":"bHQQP","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bHQQP:[function(e,r,t){// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
/**
 * Regular expression that matches a unicode punctuation character.
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"unicodePunctuationRegex",()=>i);let i=/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],b1Ak5:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 *//**
 * @typedef {[Construct, ContainerState]} StackItem
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"document",()=>c);var i=e("micromark-factory-space"),a=e("micromark-util-character"),o=e("micromark-util-chunked");let c={tokenize:/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */function(e){let r,t,n;let i=this,c=[],l=0;return u;/** @type {State} */function u(r){// First we iterate through the open blocks, starting with the root
// document, and descending through last children down to the last open
// block.
// Each block imposes a condition that the line must satisfy if the block is
// to remain open.
// For example, a block quote requires a `>` character.
// A paragraph requires a non-blank line.
// In this phase we may match all or just some of the open blocks.
// But we cannot close unmatched blocks yet, because we may have a lazy
// continuation line.
if(l<c.length){let t=c[l];return i.containerState=t[1],e.attempt(t[0].continuation,p,f)(r)}// Done.
return f(r)}/** @type {State} */function p(e){// Note: this field is called `_closeFlow` but it also closes containers.
// Perhaps a good idea to rename it but it’s already used in the wild by
// extensions.
if(l++,i.containerState._closeFlow){let t;i.containerState._closeFlow=void 0,r&&D();// Note: this algorithm for moving events around is similar to the
// algorithm when dealing with lazy lines in `writeToChild`.
let n=i.events.length,a=n;// Find the flow chunk.
for(;a--;)if("exit"===i.events[a][0]&&"chunkFlow"===i.events[a][1].type){t=i.events[a][1].end;break}b(l);// Fix positions.
let c=n;for(;c<i.events.length;)i.events[c][1].end=Object.assign({},t),c++;return(// Inject the exits earlier (they’re still also at the end).
(0,o.splice)(i.events,a+1,0,i.events.slice(n)),// Discard the duplicate exits.
i.events.length=c,f(e))}return u(e)}/** @type {State} */function f(t){// Next, after consuming the continuation markers for existing blocks, we
// look for new block starts (e.g. `>` for a block quote).
// If we encounter a new block start, we close any blocks unmatched in
// step 1 before creating the new block as a child of the last matched
// block.
if(l===c.length){// No need to `check` whether there’s a container, of `exitContainers`
// would be moot.
// We can instead immediately `attempt` to parse one.
if(!r)return h(t);// If we have concrete content, such as block HTML or fenced code,
// we can’t have containers “pierce” into them, so we can immediately
// start.
if(r.currentConstruct&&r.currentConstruct.concrete)return k(t);// If we do have flow, it could still be a blank line,
// but we’d be interrupting it w/ a new container if there’s a current
// construct.
// To do: next major: remove `_gfmTableDynamicInterruptHack` (no longer
// needed in micromark-extension-gfm-table@1.0.6).
i.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return(// Check if there is a new container.
i.containerState={},e.check(s,d,m)(t))}/** @type {State} */function d(e){return r&&D(),b(l),h(e)}/** @type {State} */function m(e){return i.parser.lazy[i.now().line]=l!==c.length,n=i.now().offset,k(e)}/** @type {State} */function h(r){return(// Try new containers.
i.containerState={},e.attempt(s,g,k)(r))}/** @type {State} */function g(e){// Try another.
return l++,c.push([i.currentConstruct,i.containerState]),h(e)}/** @type {State} */function k(n){if(null===n){r&&D(),b(0),e.consume(n);return}return r=r||i.parser.flow(i.now()),e.enter("chunkFlow",{contentType:"flow",previous:t,_tokenizer:r}),/** @type {State} */function r(t){if(null===t){x(e.exit("chunkFlow"),!0),b(0),e.consume(t);return}return(0,a.markdownLineEnding)(t)?(e.consume(t),x(e.exit("chunkFlow")),// Get ready for the next line.
l=0,i.interrupt=void 0,u):(e.consume(t),r)}(n)}/**
   * @param {Token} token
   * @param {boolean | undefined} [eof]
   * @returns {void}
   */function x(e,a){let c=i.sliceStream(e);// Alright, so we just added a lazy line:
//
// ```markdown
// > a
// b.
//
// Or:
//
// > ~~~c
// d
//
// Or:
//
// > | e |
// f
// ```
//
// The construct in the second example (fenced code) does not accept lazy
// lines, so it marked itself as done at the end of its first line, and
// then the content construct parses `d`.
// Most constructs in markdown match on the first line: if the first line
// forms a construct, a non-lazy line can’t “unmake” it.
//
// The construct in the third example is potentially a GFM table, and
// those are *weird*.
// It *could* be a table, from the first line, if the following line
// matches a condition.
// In this case, that second line is lazy, which “unmakes” the first line
// and turns the whole into one content block.
//
// We’ve now parsed the non-lazy and the lazy line, and can figure out
// whether the lazy line started a new flow block.
// If it did, we exit the current containers between the two flow blocks.
if(a&&c.push(null),e.previous=t,t&&(t.next=e),t=e,r.defineSkip(e.start),r.write(c),i.parser.lazy[e.start.line]){let e,t,a=r.events.length;for(;a--;)if(r.events[a][1].start.offset<n&&// …and either is not ended yet…
(!r.events[a][1].end||// …or ends after it.
r.events[a][1].end.offset>n))// part of something.
return;// Note: this algorithm for moving events around is similar to the
// algorithm when closing flow in `documentContinue`.
let c=i.events.length,s=c;// Find the previous chunk (the one before the lazy line).
for(;s--;)if("exit"===i.events[s][0]&&"chunkFlow"===i.events[s][1].type){if(e){t=i.events[s][1].end;break}e=!0}for(b(l),// Fix positions.
a=c;a<i.events.length;)i.events[a][1].end=Object.assign({},t),a++;// Inject the exits earlier (they’re still also at the end).
(0,o.splice)(i.events,s+1,0,i.events.slice(c)),// Discard the duplicate exits.
i.events.length=a}}/**
   * @param {number} size
   * @returns {void}
   */function b(r){let t=c.length;// Exit open containers.
for(;t-- >r;){let r=c[t];i.containerState=r[1],r[0].exit.call(i,e)}c.length=r}function D(){r.write([null]),t=void 0,r=void 0,i.containerState._closeFlow=void 0}}},s={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){// Always populated by defaults.
return(0,i.factorySpace)(e,e.attempt(this.parser.constructs.document,r,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","micromark-util-chunked":"aCCQY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],i0uZt:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"flow",()=>o);var i=e("micromark-core-commonmark"),a=e("micromark-factory-space");e("micromark-util-character");let o={tokenize:/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */function(e){let r=this,t=e.attempt(i.blankLine,/** @type {State} */function(n){if(null===n){e.consume(n);return}return e.enter("lineEndingBlank"),e.consume(n),e.exit("lineEndingBlank"),r.currentConstruct=void 0,t},e.attempt(this.parser.constructs.flowInitial,n,(0,a.factorySpace)(e,e.attempt(this.parser.constructs.flow,n,e.attempt(i.content,n)),"linePrefix")));return t;/** @type {State} */function n(n){if(null===n){e.consume(n);return}return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),r.currentConstruct=void 0,t}}}},{"micromark-core-commonmark":"82deD","micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"82deD":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"attention",()=>i.attention),n.export(t,"autolink",()=>a.autolink),n.export(t,"blankLine",()=>o.blankLine),n.export(t,"blockQuote",()=>c.blockQuote),n.export(t,"characterEscape",()=>s.characterEscape),n.export(t,"characterReference",()=>l.characterReference),n.export(t,"codeFenced",()=>u.codeFenced),n.export(t,"codeIndented",()=>p.codeIndented),n.export(t,"codeText",()=>f.codeText),n.export(t,"content",()=>d.content),n.export(t,"definition",()=>m.definition),n.export(t,"hardBreakEscape",()=>h.hardBreakEscape),n.export(t,"headingAtx",()=>g.headingAtx),n.export(t,"htmlFlow",()=>k.htmlFlow),n.export(t,"htmlText",()=>x.htmlText),n.export(t,"labelEnd",()=>b.labelEnd),n.export(t,"labelStartImage",()=>D.labelStartImage),n.export(t,"labelStartLink",()=>y.labelStartLink),n.export(t,"lineEnding",()=>v.lineEnding),n.export(t,"list",()=>w.list),n.export(t,"setextUnderline",()=>j.setextUnderline),n.export(t,"thematicBreak",()=>E.thematicBreak);var i=e("./lib/attention.js"),a=e("./lib/autolink.js"),o=e("./lib/blank-line.js"),c=e("./lib/block-quote.js"),s=e("./lib/character-escape.js"),l=e("./lib/character-reference.js"),u=e("./lib/code-fenced.js"),p=e("./lib/code-indented.js"),f=e("./lib/code-text.js"),d=e("./lib/content.js"),m=e("./lib/definition.js"),h=e("./lib/hard-break-escape.js"),g=e("./lib/heading-atx.js"),k=e("./lib/html-flow.js"),x=e("./lib/html-text.js"),b=e("./lib/label-end.js"),D=e("./lib/label-start-image.js"),y=e("./lib/label-start-link.js"),v=e("./lib/line-ending.js"),w=e("./lib/list.js"),j=e("./lib/setext-underline.js"),E=e("./lib/thematic-break.js")},{"./lib/attention.js":"FoNXV","./lib/autolink.js":"4tvaX","./lib/blank-line.js":"g0Dph","./lib/block-quote.js":"7qu5S","./lib/character-escape.js":"8RR4h","./lib/character-reference.js":"kp7no","./lib/code-fenced.js":"76L0b","./lib/code-indented.js":"ddGIR","./lib/code-text.js":"ewpZK","./lib/content.js":"kA8bg","./lib/definition.js":"eTH6C","./lib/hard-break-escape.js":"2b9qH","./lib/heading-atx.js":"8M2Ug","./lib/html-flow.js":"hM4I8","./lib/html-text.js":"19uFK","./lib/label-end.js":"ihGwx","./lib/label-start-image.js":"c63yJ","./lib/label-start-link.js":"iBcHU","./lib/line-ending.js":"8qDyu","./lib/list.js":"dwZDM","./lib/setext-underline.js":"c6hKr","./lib/thematic-break.js":"9s528","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],FoNXV:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"attention",()=>c);var i=e("micromark-util-chunked"),a=e("micromark-util-classify-character"),o=e("micromark-util-resolve-all");let c={name:"attention",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r){let t;let n=this.parser.constructs.attentionMarkers.null,i=this.previous,o=(0,a.classifyCharacter)(i);return(/**
   * Before a sequence.
   *
   * ```markdown
   * > | **
   *     ^
   * ```
   *
   * @type {State}
   */function(c){return t=c,e.enter("attentionSequence"),/**
   * In a sequence.
   *
   * ```markdown
   * > | **
   *     ^^
   * ```
   *
   * @type {State}
   */function c(s){if(s===t)return e.consume(s),c;let l=e.exit("attentionSequence"),u=(0,a.classifyCharacter)(s),p=!u||2===u&&o||n.includes(s),f=!o||2===o&&u||n.includes(i);return l._open=!!(42===t?p:p&&(o||!f)),l._close=!!(42===t?f:f&&(u||!p)),r(s)}(c)})},resolveAll:/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */function(e,r){let t,n,a,c,l,u,p,f,d=-1;// Walk through all events.
//
// Note: performance of this is fine on an mb of normal markdown, but it’s
// a bottleneck for malicious stuff.
for(;++d<e.length;)if("enter"===e[d][0]&&"attentionSequence"===e[d][1].type&&e[d][1]._close)// Now walk back to find an opener.
{for(t=d;t--;)if("exit"===e[t][0]&&"attentionSequence"===e[t][1].type&&e[t][1]._open&&// If the markers are the same:
r.sliceSerialize(e[t][1]).charCodeAt(0)===r.sliceSerialize(e[d][1]).charCodeAt(0)){// If the opening can close or the closing can open,
// and the close size *is not* a multiple of three,
// but the sum of the opening and closing size *is* multiple of three,
// then don’t match.
if((e[t][1]._close||e[d][1]._open)&&(e[d][1].end.offset-e[d][1].start.offset)%3&&!((e[t][1].end.offset-e[t][1].start.offset+e[d][1].end.offset-e[d][1].start.offset)%3))continue;// Number of markers to use from the sequence.
u=e[t][1].end.offset-e[t][1].start.offset>1&&e[d][1].end.offset-e[d][1].start.offset>1?2:1;let m=Object.assign({},e[t][1].end),h=Object.assign({},e[d][1].start);s(m,-u),s(h,u),c={type:u>1?"strongSequence":"emphasisSequence",start:m,end:Object.assign({},e[t][1].end)},l={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[d][1].start),end:h},a={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[t][1].end),end:Object.assign({},e[d][1].start)},n={type:u>1?"strong":"emphasis",start:Object.assign({},c.start),end:Object.assign({},l.end)},e[t][1].end=Object.assign({},c.start),e[d][1].start=Object.assign({},l.end),p=[],e[t][1].end.offset-e[t][1].start.offset&&(p=(0,i.push)(p,[["enter",e[t][1],r],["exit",e[t][1],r]])),// Opening.
p=(0,i.push)(p,[["enter",n,r],["enter",c,r],["exit",c,r],["enter",a,r]]),// Always populated by defaults.
// Between.
p=(0,i.push)(p,(0,o.resolveAll)(r.parser.constructs.insideSpan.null,e.slice(t+1,d),r)),// Closing.
p=(0,i.push)(p,[["exit",a,r],["enter",l,r],["exit",l,r],["exit",n,r]]),e[d][1].end.offset-e[d][1].start.offset?(f=2,p=(0,i.push)(p,[["enter",e[d][1],r],["exit",e[d][1],r]])):f=0,(0,i.splice)(e,t-1,d-t+3,p),d=t+p.length-f-2;break}}for(// Remove remaining sequences.
d=-1;++d<e.length;)"attentionSequence"===e[d][1].type&&(e[d][1].type="data");return e}};/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */function s(e,r){e.column+=r,e.offset+=r,e._bufferIndex+=r}},{"micromark-util-chunked":"aCCQY","micromark-util-classify-character":"c374Y","micromark-util-resolve-all":"1064n","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],c374Y:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Classify whether a code represents whitespace, punctuation, or something
 * else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * > 👉 **Note**: eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 *   Code.
 * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}
 *   Group.
 */n.export(t,"classifyCharacter",()=>a);var i=e("micromark-util-character");function a(e){return null===e||(0,i.markdownLineEndingOrSpace)(e)||(0,i.unicodeWhitespace)(e)?1:(0,i.unicodePunctuation)(e)?2:void 0}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"1064n":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 *//**
 * Call all `resolveAll`s.
 *
 * @param {Array<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function i(e,r,t){/** @type {Array<Resolver>} */let n=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!n.includes(a)&&(r=a(r,t),n.push(a))}return r}n.defineInteropFlag(t),n.export(t,"resolveAll",()=>i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"4tvaX":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"autolink",()=>a);var i=e("micromark-util-character");let a={name:"autolink",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=0;return(/**
   * Start of an autolink.
   *
   * ```markdown
   * > | a<https://example.com>b
   *      ^
   * > | a<user@example.com>b
   *      ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a});/**
   * After `<`, at protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *       ^
   * > | a<user@example.com>b
   *       ^
   * ```
   *
   * @type {State}
   */function a(r){return(0,i.asciiAlpha)(r)?(e.consume(r),o):s(r)}/**
   * At second byte of protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */function o(r){return(// ASCII alphanumeric and `+`, `-`, and `.`.
43===r||45===r||46===r||(0,i.asciiAlphanumeric)(r)?(// Count the previous alphabetical from `open` too.
n=1,/**
   * In ambiguous protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */function r(t){return 58===t?(e.consume(t),n=0,c):(43===t||45===t||46===t||(0,i.asciiAlphanumeric)(t))&&n++<32?(e.consume(t),r):(n=0,s(t))}(r)):s(r))}/**
   * After protocol, in URL.
   *
   * ```markdown
   * > | a<https://example.com>b
   *             ^
   * ```
   *
   * @type {State}
   */function c(n){return 62===n?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),r):null===n||32===n||60===n||(0,i.asciiControl)(n)?t(n):(e.consume(n),c)}/**
   * In email atext.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *              ^
   * ```
   *
   * @type {State}
   */function s(r){return 64===r?(e.consume(r),l):(0,i.asciiAtext)(r)?(e.consume(r),s):t(r)}/**
   * In label, after at-sign or dot.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                 ^       ^
   * ```
   *
   * @type {State}
   */function l(a){return(0,i.asciiAlphanumeric)(a)?/**
   * In label, where `.` and `>` are allowed.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                   ^
   * ```
   *
   * @type {State}
   */function a(o){return 46===o?(e.consume(o),n=0,l):62===o?(// Exit, then change the token type.
e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(o),e.exit("autolinkMarker"),e.exit("autolink"),r):/**
   * In label, where `.` and `>` are *not* allowed.
   *
   * Though, this is also used in `emailLabel` to parse other values.
   *
   * ```markdown
   * > | a<user.name@ex-ample.com>b
   *                    ^
   * ```
   *
   * @type {State}
   */function r(o){// ASCII alphanumeric or `-`.
if((45===o||(0,i.asciiAlphanumeric)(o))&&n++<63){let t=45===o?r:a;return e.consume(o),t}return t(o)}(o)}(a):t(a)}}}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],g0Dph:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"blankLine",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");let o={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){return(/**
   * Start of blank line.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *     ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */function(r){return(0,a.markdownSpace)(r)?(0,i.factorySpace)(e,n,"linePrefix")(r):n(r)});/**
   * At eof/eol, after optional whitespace.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *       ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */function n(e){return null===e||(0,a.markdownLineEnding)(e)?r(e):t(e)}},partial:!0}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7qu5S":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"blockQuote",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");let o={name:"blockQuote",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   * Start of block quote.
   *
   * ```markdown
   * > | > a
   *     ^
   * ```
   *
   * @type {State}
   */function(r){if(62===r){let t=n.containerState;return t.open||(e.enter("blockQuote",{_container:!0}),t.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(r),e.exit("blockQuoteMarker"),i}return t(r)});/**
   * After `>`, before optional whitespace.
   *
   * ```markdown
   * > | > a
   *      ^
   * ```
   *
   * @type {State}
   */function i(t){return(0,a.markdownSpace)(t)?(e.enter("blockQuotePrefixWhitespace"),e.consume(t),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),r):(e.exit("blockQuotePrefix"),r(t))}},continuation:{tokenize:/**
 * Start of block quote continuation.
 *
 * ```markdown
 *   | > a
 * > | > b
 *     ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   * Start of block quote continuation.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */function(r){return(0,a.markdownSpace)(r)?(0,i.factorySpace)(e,c,"linePrefix",n.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(r):c(r)});/**
   * At `>`, after optional whitespace.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */function c(n){return e.attempt(o,r,t)(n)}}},exit:/** @type {Exiter} */function(e){e.exit("blockQuote")}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8RR4h":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"characterEscape",()=>a);var i=e("micromark-util-character");let a={name:"characterEscape",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){return(/**
   * Start of character escape.
   *
   * ```markdown
   * > | a\*b
   *      ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(r),e.exit("escapeMarker"),n});/**
   * After `\`, at punctuation.
   *
   * ```markdown
   * > | a\*b
   *       ^
   * ```
   *
   * @type {State}
   */function n(n){return(// ASCII punctuation.
(0,i.asciiPunctuation)(n)?(e.enter("characterEscapeValue"),e.consume(n),e.exit("characterEscapeValue"),e.exit("characterEscape"),r):t(n))}}}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],kp7no:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"characterReference",()=>o);var i=e("decode-named-character-reference"),a=e("micromark-util-character");let o={name:"characterReference",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n,o;let c=this,s=0;return(/**
   * Start of character reference.
   *
   * ```markdown
   * > | a&amp;b
   *      ^
   * > | a&#123;b
   *      ^
   * > | a&#x9;b
   *      ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(r),e.exit("characterReferenceMarker"),l});/**
   * After `&`, at `#` for numeric references or alphanumeric for named
   * references.
   *
   * ```markdown
   * > | a&amp;b
   *       ^
   * > | a&#123;b
   *       ^
   * > | a&#x9;b
   *       ^
   * ```
   *
   * @type {State}
   */function l(r){return 35===r?(e.enter("characterReferenceMarkerNumeric"),e.consume(r),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),n=31,o=a.asciiAlphanumeric,p(r))}/**
   * After `#`, at `x` for hexadecimals or digit for decimals.
   *
   * ```markdown
   * > | a&#123;b
   *        ^
   * > | a&#x9;b
   *        ^
   * ```
   *
   * @type {State}
   */function u(r){return 88===r||120===r?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(r),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),n=6,o=a.asciiHexDigit,p):(e.enter("characterReferenceValue"),n=7,o=a.asciiDigit,p(r))}/**
   * After markers (`&#x`, `&#`, or `&`), in value, before `;`.
   *
   * The character reference kind defines what and how many characters are
   * allowed.
   *
   * ```markdown
   * > | a&amp;b
   *       ^^^
   * > | a&#123;b
   *        ^^^
   * > | a&#x9;b
   *         ^
   * ```
   *
   * @type {State}
   */function p(l){if(59===l&&s){let n=e.exit("characterReferenceValue");return o!==a.asciiAlphanumeric||(0,i.decodeNamedCharacterReference)(c.sliceSerialize(n))?(// To do: `markdown-rs` uses a different name:
// `CharacterReferenceMarkerSemi`.
e.enter("characterReferenceMarker"),e.consume(l),e.exit("characterReferenceMarker"),e.exit("characterReference"),r):t(l)}return o(l)&&s++<n?(e.consume(l),p):t(l)}}}},{"decode-named-character-reference":"aLMfA","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],aLMfA:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Decode a single character reference (without the `&` or `;`).
 * You probably only need this when you’re building parsers yourself that follow
 * different rules compared to HTML.
 * This is optimized to be tiny in browsers.
 *
 * @param {string} value
 *   `notin` (named), `#123` (deci), `#x123` (hexa).
 * @returns {string|false}
 *   Decoded reference.
 */n.export(t,"decodeNamedCharacterReference",()=>o);var i=e("character-entities");let a={}.hasOwnProperty;function o(e){return!!a.call(i.characterEntities,e)&&i.characterEntities[e]}},{"character-entities":"ctfcd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],ctfcd:[function(e,r,t){/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"characterEntities",()=>i);let i={AElig:"\xc6",AMP:"&",Aacute:"\xc1",Abreve:"Ă",Acirc:"\xc2",Acy:"А",Afr:"\uD835\uDD04",Agrave:"\xc0",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"\uD835\uDD38",ApplyFunction:"⁡",Aring:"\xc5",Ascr:"\uD835\uDC9C",Assign:"≔",Atilde:"\xc3",Auml:"\xc4",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"\uD835\uDD05",Bopf:"\uD835\uDD39",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COPY:"\xa9",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedil:"\xc7",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"\xb8",CenterDot:"\xb7",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"\uD835\uDC9E",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"\uD835\uDD07",DiacriticalAcute:"\xb4",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"\uD835\uDD3B",Dot:"\xa8",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"\xa8",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"\uD835\uDC9F",Dstrok:"Đ",ENG:"Ŋ",ETH:"\xd0",Eacute:"\xc9",Ecaron:"Ě",Ecirc:"\xca",Ecy:"Э",Edot:"Ė",Efr:"\uD835\uDD08",Egrave:"\xc8",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"\uD835\uDD3C",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Euml:"\xcb",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"\uD835\uDD09",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"\uD835\uDD3D",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"\uD835\uDD0A",Gg:"⋙",Gopf:"\uD835\uDD3E",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"\uD835\uDCA2",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"\xcd",Icirc:"\xce",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrave:"\xcc",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"\uD835\uDD40",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"\xcf",Jcirc:"Ĵ",Jcy:"Й",Jfr:"\uD835\uDD0D",Jopf:"\uD835\uDD41",Jscr:"\uD835\uDCA5",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"\uD835\uDD0E",Kopf:"\uD835\uDD42",Kscr:"\uD835\uDCA6",LJcy:"Љ",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"\uD835\uDD0F",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"\uD835\uDD43",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"\uD835\uDD10",MinusPlus:"∓",Mopf:"\uD835\uDD44",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",Nfr:"\uD835\uDD11",NoBreak:"⁠",NonBreakingSpace:"\xa0",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"\uD835\uDCA9",Ntilde:"\xd1",Nu:"Ν",OElig:"Œ",Oacute:"\xd3",Ocirc:"\xd4",Ocy:"О",Odblac:"Ő",Ofr:"\uD835\uDD12",Ograve:"\xd2",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"\uD835\uDD46",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"\uD835\uDCAA",Oslash:"\xd8",Otilde:"\xd5",Otimes:"⨷",Ouml:"\xd6",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"\uD835\uDD13",Phi:"Φ",Pi:"Π",PlusMinus:"\xb1",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"\uD835\uDCAB",Psi:"Ψ",QUOT:'"',Qfr:"\uD835\uDD14",Qopf:"ℚ",Qscr:"\uD835\uDCAC",RBarr:"⤐",REG:"\xae",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"\uD835\uDD16",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"\uD835\uDD4A",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"\uD835\uDCAE",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THORN:"\xde",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"\uD835\uDD17",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"\uD835\uDD4B",TripleDot:"⃛",Tscr:"\uD835\uDCAF",Tstrok:"Ŧ",Uacute:"\xda",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"\xdb",Ucy:"У",Udblac:"Ű",Ufr:"\uD835\uDD18",Ugrave:"\xd9",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"\uD835\uDD4C",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"\uD835\uDCB0",Utilde:"Ũ",Uuml:"\xdc",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"\uD835\uDD19",Vopf:"\uD835\uDD4D",Vscr:"\uD835\uDCB1",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"\uD835\uDD1A",Wopf:"\uD835\uDD4E",Wscr:"\uD835\uDCB2",Xfr:"\uD835\uDD1B",Xi:"Ξ",Xopf:"\uD835\uDD4F",Xscr:"\uD835\uDCB3",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"\xdd",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"\uD835\uDD1C",Yopf:"\uD835\uDD50",Yscr:"\uD835\uDCB4",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"\uD835\uDCB5",aacute:"\xe1",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acirc:"\xe2",acute:"\xb4",acy:"а",aelig:"\xe6",af:"⁡",afr:"\uD835\uDD1E",agrave:"\xe0",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"\xc5",angzarr:"⍼",aogon:"ą",aopf:"\uD835\uDD52",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",aring:"\xe5",ascr:"\uD835\uDCB6",ast:"*",asymp:"≈",asympeq:"≍",atilde:"\xe3",auml:"\xe4",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"\uD835\uDD1F",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"\uD835\uDD53",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvbar:"\xa6",bscr:"\uD835\uDCB7",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedil:"\xe7",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedil:"\xb8",cemptyv:"⦲",cent:"\xa2",centerdot:"\xb7",cfr:"\uD835\uDD20",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"\xae",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"\uD835\uDD54",coprod:"∐",copy:"\xa9",copysr:"℗",crarr:"↵",cross:"✗",cscr:"\uD835\uDCB8",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"\xa4",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",deg:"\xb0",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"\uD835\uDD21",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"\xa8",digamma:"ϝ",disin:"⋲",div:"\xf7",divide:"\xf7",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"\uD835\uDD55",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"\uD835\uDCB9",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacute:"\xe9",easter:"⩮",ecaron:"ě",ecir:"≖",ecirc:"\xea",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"\uD835\uDD22",eg:"⪚",egrave:"\xe8",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"\uD835\uDD56",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",eth:"\xf0",euml:"\xeb",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"\uD835\uDD23",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"\uD835\uDD57",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"\xbd",frac13:"⅓",frac14:"\xbc",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"\xbe",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"\uD835\uDCBB",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"\uD835\uDD24",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"\uD835\uDD58",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"\xbd",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"\uD835\uDD25",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"\uD835\uDD59",horbar:"―",hscr:"\uD835\uDCBD",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacute:"\xed",ic:"⁣",icirc:"\xee",icy:"и",iecy:"е",iexcl:"\xa1",iff:"⇔",ifr:"\uD835\uDD26",igrave:"\xec",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"\uD835\uDD5A",iota:"ι",iprod:"⨼",iquest:"\xbf",iscr:"\uD835\uDCBE",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",iuml:"\xef",jcirc:"ĵ",jcy:"й",jfr:"\uD835\uDD27",jmath:"ȷ",jopf:"\uD835\uDD5B",jscr:"\uD835\uDCBF",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"\uD835\uDD28",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"\uD835\uDD5C",kscr:"\uD835\uDCC0",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laquo:"\xab",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"\uD835\uDD29",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"\uD835\uDD5D",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"\uD835\uDCC1",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"\xaf",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"\uD835\uDD2A",mho:"℧",micro:"\xb5",mid:"∣",midast:"*",midcir:"⫰",middot:"\xb7",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"\uD835\uDD5E",mp:"∓",mscr:"\uD835\uDCC2",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:"\xa0",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"\uD835\uDD2B",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"\uD835\uDD5F",not:"\xac",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"\uD835\uDCC3",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"\xf1",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacute:"\xf3",oast:"⊛",ocir:"⊚",ocirc:"\xf4",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"\uD835\uDD2C",ogon:"˛",ograve:"\xf2",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"\uD835\uDD60",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"\xaa",ordm:"\xba",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslash:"\xf8",osol:"⊘",otilde:"\xf5",otimes:"⊗",otimesas:"⨶",ouml:"\xf6",ovbar:"⌽",par:"∥",para:"\xb6",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"\uD835\uDD2D",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusmn:"\xb1",plussim:"⨦",plustwo:"⨧",pm:"\xb1",pointint:"⨕",popf:"\uD835\uDD61",pound:"\xa3",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"\uD835\uDCC5",psi:"ψ",puncsp:" ",qfr:"\uD835\uDD2E",qint:"⨌",qopf:"\uD835\uDD62",qprime:"⁗",qscr:"\uD835\uDCC6",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"\xbb",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"\xae",rfisht:"⥽",rfloor:"⌋",rfr:"\uD835\uDD2F",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"\uD835\uDD63",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"\uD835\uDCC7",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sect:"\xa7",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"\uD835\uDD30",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",shy:"\xad",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"\uD835\uDD64",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"\uD835\uDCC8",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"\xaf",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"⊃",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"\xdf",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"\uD835\uDD31",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thorn:"\xfe",tilde:"˜",times:"\xd7",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"\uD835\uDD65",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"\uD835\uDCC9",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacute:"\xfa",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucirc:"\xfb",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"\uD835\uDD32",ugrave:"\xf9",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uml:"\xa8",uogon:"ų",uopf:"\uD835\uDD66",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"\uD835\uDCCA",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"\xfc",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"\uD835\uDD33",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"\uD835\uDD67",vprop:"∝",vrtri:"⊳",vscr:"\uD835\uDCCB",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"\uD835\uDD34",wopf:"\uD835\uDD68",wp:"℘",wr:"≀",wreath:"≀",wscr:"\uD835\uDCCC",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"\uD835\uDD35",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"\uD835\uDD69",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"\uD835\uDCCD",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"\xfd",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"\xa5",yfr:"\uD835\uDD36",yicy:"ї",yopf:"\uD835\uDD6A",yscr:"\uD835\uDCCE",yucy:"ю",yuml:"\xff",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"\uD835\uDD37",zhcy:"ж",zigrarr:"⇝",zopf:"\uD835\uDD6B",zscr:"\uD835\uDCCF",zwj:"‍",zwnj:"‌"}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"76L0b":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"codeFenced",()=>c);var i=e("micromark-factory-space"),a=e("micromark-util-character");/** @type {Construct} */let o={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   *
   *
   * @type {State}
   */function(r){return null===r?t(r):(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),i)});/**
   *
   *
   * @type {State}
   */function i(e){return n.parser.lazy[n.now().line]?t(e):r(e)}},partial:!0},c={name:"codeFenced",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n;let c=this,s={tokenize:/**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */function(e,r,t){let o=0;return(/**
     *
     *
     * @type {State}
     */function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),s});/**
     * Before closing fence, at optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */function s(r){return(// Always populated by defaults.
// To do: `enter` here or in next state?
e.enter("codeFencedFence"),(0,a.markdownSpace)(r)?(0,i.factorySpace)(e,l,"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(r):l(r))}/**
     * In closing fence, after optional whitespace, at sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */function l(r){return r===n?(e.enter("codeFencedFenceSequence"),/**
     * In closing fence sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */function r(c){return c===n?(o++,e.consume(c),r):o>=u?(e.exit("codeFencedFenceSequence"),(0,a.markdownSpace)(c)?(0,i.factorySpace)(e,p,"whitespace")(c):p(c)):t(c)}(r)):t(r)}/**
     * After closing fence sequence, after optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *        ^
     * ```
     *
     * @type {State}
     */function p(n){return null===n||(0,a.markdownLineEnding)(n)?(e.exit("codeFencedFence"),r(n)):t(n)}},partial:!0},l=0,u=0;return(/**
   * Start of code.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */function(r){// To do: parse whitespace like `markdown-rs`.
return(/**
   * In opening fence, after prefix, at sequence.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */function(r){let o=c.events[c.events.length-1];return l=o&&"linePrefix"===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,n=r,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),/**
   * In opening fence sequence.
   *
   * ```markdown
   * > | ~~~js
   *      ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */function r(o){return o===n?(u++,e.consume(o),r):u<3?t(o):(e.exit("codeFencedFenceSequence"),(0,a.markdownSpace)(o)?(0,i.factorySpace)(e,p,"whitespace")(o):p(o))}(r)}(r))});/**
   * In opening fence, after the sequence (and optional whitespace), before info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */function p(s){return null===s||(0,a.markdownLineEnding)(s)?(e.exit("codeFencedFence"),c.interrupt?r(s):e.check(o,d,k)(s)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),/**
   * In info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */function r(o){return null===o||(0,a.markdownLineEnding)(o)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(o)):(0,a.markdownSpace)(o)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),(0,i.factorySpace)(e,f,"whitespace")(o)):96===o&&o===n?t(o):(e.consume(o),r)}(s))}/**
   * In opening fence, after info and whitespace, before meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */function f(r){return null===r||(0,a.markdownLineEnding)(r)?p(r):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),/**
   * In meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */function r(i){return null===i||(0,a.markdownLineEnding)(i)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(i)):96===i&&i===n?t(i):(e.consume(i),r)}(r))}/**
   * At eol/eof in code, before a non-lazy closing fence or content.
   *
   * ```markdown
   * > | ~~~js
   *          ^
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */function d(r){return e.attempt(s,k,m)(r)}/**
   * Before code content, not a closing fence, at eol.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */function m(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),h}/**
   * Before code content, not a closing fence.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */function h(r){return l>0&&(0,a.markdownSpace)(r)?(0,i.factorySpace)(e,g,"linePrefix",l+1)(r):g(r)}/**
   * Before code content, after optional prefix.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */function g(r){return null===r||(0,a.markdownLineEnding)(r)?e.check(o,d,k)(r):(e.enter("codeFlowValue"),/**
   * In code content.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^^^^^^^^
   *   | ~~~
   * ```
   *
   * @type {State}
   */function r(t){return null===t||(0,a.markdownLineEnding)(t)?(e.exit("codeFlowValue"),g(t)):(e.consume(t),r)}(r))}/**
   * After code.
   *
   * ```markdown
   *   | ~~~js
   *   | alert(1)
   * > | ~~~
   *        ^
   * ```
   *
   * @type {State}
   */function k(t){return e.exit("codeFenced"),r(t)}},concrete:!0}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],ddGIR:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"codeIndented",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");let o={name:"codeIndented",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   * Start of code (indented).
   *
   * > **Parsing note**: it is not needed to check if this first line is a
   * > filled line (that it has a non-whitespace character), because blank lines
   * > are parsed already, so we never run into that.
   *
   * ```markdown
   * > |     aaa
   *     ^
   * ```
   *
   * @type {State}
   */function(r){// To do: use an improved `space_or_tab` function like `markdown-rs`,
// so that we can drop the next state.
return(// To do: manually check if interrupting like `markdown-rs`.
e.enter("codeIndented"),(0,i.factorySpace)(e,o,"linePrefix",5)(r))});/**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */function o(r){let i=n.events[n.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?/**
   * At a break.
   *
   * ```markdown
   * > |     aaa
   *         ^  ^
   * ```
   *
   * @type {State}
   */function r(t){return null===t?s(t):(0,a.markdownLineEnding)(t)?e.attempt(c,r,s)(t):(e.enter("codeFlowValue"),/**
   * In code content.
   *
   * ```markdown
   * > |     aaa
   *         ^^^^
   * ```
   *
   * @type {State}
   */function t(n){return null===n||(0,a.markdownLineEnding)(n)?(e.exit("codeFlowValue"),r(n)):(e.consume(n),t)}(t))}(r):t(r)}/** @type {State} */function s(t){// To do: allow interrupting like `markdown-rs`.
// Feel free to interrupt.
// tokenizer.interrupt = false
return e.exit("codeIndented"),r(t)}}},c={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return o;/**
   * At eol, trying to parse another indent.
   *
   * ```markdown
   * > |     aaa
   *            ^
   *   |     bbb
   * ```
   *
   * @type {State}
   */function o(r){return(// To do: improve `lazy` / `pierce` handling.
// If this is a lazy line, it can’t be code.
n.parser.lazy[n.now().line]?t(r):(0,a.markdownLineEnding)(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),o):(0,i.factorySpace)(e,c,"linePrefix",5)(r))}/**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */function c(e){let i=n.events[n.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?r(e):(0,a.markdownLineEnding)(e)?o(e):t(e)}},partial:!0}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],ewpZK:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"codeText",()=>a);var i=e("micromark-util-character");let a={name:"codeText",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n,a,o=0;return(/**
   * Start of code (text).
   *
   * ```markdown
   * > | `a`
   *     ^
   * > | \`a`
   *      ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("codeText"),e.enter("codeTextSequence"),/**
   * In opening sequence.
   *
   * ```markdown
   * > | `a`
   *     ^
   * ```
   *
   * @type {State}
   */function r(t){return 96===t?(e.consume(t),o++,r):(e.exit("codeTextSequence"),c(t))}(r)});/**
   * Between something and something else.
   *
   * ```markdown
   * > | `a`
   *      ^^
   * ```
   *
   * @type {State}
   */function c(l){return(// EOF.
null===l?t(l):32===l?(e.enter("space"),e.consume(l),e.exit("space"),c):96===l?(a=e.enter("codeTextSequence"),n=0,/**
   * In closing sequence.
   *
   * ```markdown
   * > | `a`
   *       ^
   * ```
   *
   * @type {State}
   */function t(i){return(// More.
96===i?(e.consume(i),n++,t):n===o?(e.exit("codeTextSequence"),e.exit("codeText"),r(i)):(// More or less accents: mark as data.
a.type="codeTextData",s(i)))}(l)):(0,i.markdownLineEnding)(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),c):(// Data.
e.enter("codeTextData"),s(l)))}/**
   * In data.
   *
   * ```markdown
   * > | `a`
   *      ^
   * ```
   *
   * @type {State}
   */function s(r){return null===r||32===r||96===r||(0,i.markdownLineEnding)(r)?(e.exit("codeTextData"),c(r)):(e.consume(r),s)}},resolve:// To do: next major: don’t resolve, like `markdown-rs`.
/** @type {Resolver} */function(e){let r,t,n=e.length-4,i=3;// If we start and end with an EOL or a space.
if(("lineEnding"===e[3][1].type||"space"===e[i][1].type)&&("lineEnding"===e[n][1].type||"space"===e[n][1].type))// And we have data.
{for(r=i;++r<n;)if("codeTextData"===e[r][1].type){// Then we have padding.
e[i][1].type="codeTextPadding",e[n][1].type="codeTextPadding",i+=2,n-=2;break}}for(// Merge adjacent spaces and data.
r=i-1,n++;++r<=n;)void 0===t?r!==n&&"lineEnding"!==e[r][1].type&&(t=r):(r===n||"lineEnding"===e[r][1].type)&&(e[t][1].type="codeTextData",r!==t+2&&(e[t][1].end=e[r-1][1].end,e.splice(t+2,r-t-2),n-=r-t-2,r=t+2),t=void 0);return e},previous:/**
 * @this {TokenizeContext}
 * @type {Previous}
 */function(e){// If there is a previous code, there will always be a tail.
return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],kA8bg:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"content",()=>c);var i=e("micromark-factory-space"),a=e("micromark-util-character"),o=e("micromark-util-subtokenize");let c={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r){/** @type {Token | undefined} */let t;return(/**
   * Before a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),n(r)});/**
   * In a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^^^
   * ```
   *
   * @type {State}
   */function n(r){return null===r?i(r):(0,a.markdownLineEnding)(r)?e.check(s,o,i)(r):(// Data.
e.consume(r),n)}/**
   *
   *
   * @type {State}
   */function i(t){return e.exit("chunkContent"),e.exit("content"),r(t)}/**
   *
   *
   * @type {State}
   */function o(r){return e.consume(r),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,n}},resolve:/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */function(e){return(0,o.subtokenize)(e),e}},s={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   *
   *
   * @type {State}
   */function(r){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),(0,i.factorySpace)(e,o,"linePrefix")});/**
   *
   *
   * @type {State}
   */function o(i){if(null===i||(0,a.markdownLineEnding)(i))return t(i);// Always populated by defaults.
let o=n.events[n.events.length-1];return!n.parser.constructs.disable.null.includes("codeIndented")&&o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?r(i):e.interrupt(n.parser.constructs.flow,t,r)(i)}},partial:!0}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","micromark-util-subtokenize":"9JtDe","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9JtDe":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Tokenize subcontent.
 *
 * @param {Array<Event>} events
 *   List of events.
 * @returns {boolean}
 *   Whether subtokens were found.
 */n.export(t,"subtokenize",()=>a);var i=e("micromark-util-chunked");function a(e){let r,t,n,a,o,c,s;/** @type {Record<string, number>} */let l={},u=-1;for(;++u<e.length;){for(;(u in l);)u=l[u];// Add a hook for the GFM tasklist extension, which needs to know if text
// is in the first content of a list item.
if(r=e[u],u&&"chunkFlow"===r[1].type&&"listItemPrefix"===e[u-1][1].type&&((n=0)<(c=r[1]._tokenizer.events).length&&"lineEndingBlank"===c[n][1].type&&(n+=2),n<c.length&&"content"===c[n][1].type))for(;++n<c.length&&"content"!==c[n][1].type;)"chunkText"===c[n][1].type&&(c[n][1]._isInFirstContentOfListItem=!0,n++);// Enter.
if("enter"===r[0])r[1].contentType&&(Object.assign(l,/**
 * Tokenize embedded tokens.
 *
 * @param {Array<Event>} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */function(e,r){let t,n;let a=e[r][1],o=e[r][2],c=r-1,s=[],l=a._tokenizer||o.parser[a.contentType](a.start),u=l.events,p=[],f={},d=-1,m=a,h=0,g=0,k=[g];// Loop forward through the linked tokens to pass them in order to the
// subtokenizer.
for(;m;){// Find the position of the event for this token.
for(;e[++c][1]!==m;);s.push(c),!m._tokenizer&&(t=o.sliceStream(m),m.next||t.push(null),n&&l.defineSkip(m.start),m._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(t),m._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),// Unravel the next token.
n=m,m=m.next}for(// Now, loop back through all events (and linked tokens), to figure out which
// parts belong where.
m=a;++d<u.length;)"exit"===u[d][0]&&"enter"===u[d-1][0]&&u[d][1].type===u[d-1][1].type&&u[d][1].start.line!==u[d][1].end.line&&(g=d+1,k.push(g),// Help GC.
m._tokenizer=void 0,m.previous=void 0,m=m.next);for(// Help GC.
l.events=[],m?(// Help GC.
m._tokenizer=void 0,m.previous=void 0):k.pop(),// Now splice the events from the subtokenizer into the current events,
// moving back to front so that splice indices aren’t affected.
d=k.length;d--;){let r=u.slice(k[d],k[d+1]),t=s.pop();p.unshift([t,t+r.length-1]),(0,i.splice)(e,t,2,r)}for(d=-1;++d<p.length;)f[h+p[d][0]]=h+p[d][1],h+=p[d][1]-p[d][0]-1;return f}(e,u)),u=l[u],s=!0);else if(r[1]._container){for(n=u,t=void 0;n--;)if("lineEnding"===(a=e[n])[1].type||"lineEndingBlank"===a[1].type)"enter"===a[0]&&(t&&(e[t][1].type="lineEndingBlank"),a[1].type="lineEnding",t=n);else break;t&&(// Fix position.
r[1].end=Object.assign({},e[t][1].start),// Switch container exit w/ line endings.
(o=e.slice(t,u)).unshift(r),(0,i.splice)(e,t,u-t+1,o))}}return!s}},{"micromark-util-chunked":"aCCQY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],eTH6C:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"definition",()=>p);var i=e("micromark-factory-destination"),a=e("micromark-factory-label"),o=e("micromark-factory-space"),c=e("micromark-factory-title"),s=e("micromark-factory-whitespace"),l=e("micromark-util-character"),u=e("micromark-util-normalize-identifier");let p={name:"definition",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n;let c=this;return(/**
   * At start of a definition.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */function(r){return(// Do not interrupt paragraphs (but do follow definitions).
// To do: do `interrupt` the way `markdown-rs` does.
// To do: parse whitespace the way `markdown-rs` does.
e.enter("definition"),(0,a.factoryLabel).call(c,e,p,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(r))});/**
   * After label.
   *
   * ```markdown
   * > | [a]: b "c"
   *        ^
   * ```
   *
   * @type {State}
   */function p(r){return(n=(0,u.normalizeIdentifier)(c.sliceSerialize(c.events[c.events.length-1][1]).slice(1,-1)),58===r)?(e.enter("definitionMarker"),e.consume(r),e.exit("definitionMarker"),d):t(r)}/**
   * After marker.
   *
   * ```markdown
   * > | [a]: b "c"
   *         ^
   * ```
   *
   * @type {State}
   */function d(r){// Note: whitespace is optional.
return(0,l.markdownLineEndingOrSpace)(r)?(0,s.factoryWhitespace)(e,m)(r):m(r)}/**
   * Before destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *          ^
   * ```
   *
   * @type {State}
   */function m(r){return(0,i.factoryDestination)(e,h,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(r)}/**
   * After destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */function h(r){return e.attempt(f,g,g)(r)}/**
   * After definition.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */function g(r){return(0,l.markdownSpace)(r)?(0,o.factorySpace)(e,k,"whitespace")(r):k(r)}/**
   * After definition, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */function k(i){return null===i||(0,l.markdownLineEnding)(i)?(e.exit("definition"),// Note: we don’t care about uniqueness.
// It’s likely that that doesn’t happen very frequently.
// It is more likely that it wastes precious time.
c.parser.defined.push(n),r(i)):t(i)}}},f={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){return(/**
   * After destination, at whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */function(r){return(0,l.markdownLineEndingOrSpace)(r)?(0,s.factoryWhitespace)(e,n)(r):t(r)});/**
   * At title.
   *
   * ```markdown
   *   | [a]: b
   * > | "c"
   *     ^
   * ```
   *
   * @type {State}
   */function n(r){return(0,c.factoryTitle)(e,i,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(r)}/**
   * After title.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */function i(r){return(0,l.markdownSpace)(r)?(0,o.factorySpace)(e,a,"whitespace")(r):a(r)}/**
   * After title, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */function a(e){return null===e||(0,l.markdownLineEnding)(e)?r(e):t(e)}},partial:!0}},{"micromark-factory-destination":"em0iK","micromark-factory-label":"fmuaJ","micromark-factory-space":"iStdw","micromark-factory-title":"eXxqM","micromark-factory-whitespace":"11gip","micromark-util-character":"cUjFI","micromark-util-normalize-identifier":"e2XYl","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],em0iK:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Parse destinations.
 *
 * ###### Examples
 *
 * ```markdown
 * <a>
 * <a\>b>
 * <a b>
 * <a)>
 * a
 * a\)b
 * a(b)c
 * a(b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type for whole (`<a>` or `b`).
 * @param {TokenType} literalType
 *   Type when enclosed (`<a>`).
 * @param {TokenType} literalMarkerType
 *   Type for enclosing (`<` and `>`).
 * @param {TokenType} rawType
 *   Type when not enclosed (`b`).
 * @param {TokenType} stringType
 *   Type for the value (`a` or `b`).
 * @param {number | undefined} [max=Infinity]
 *   Depth of nested parens (inclusive).
 * @returns {State}
 *   Start state.
 */// eslint-disable-next-line max-params
n.export(t,"factoryDestination",()=>a);var i=e("micromark-util-character");function a(e,r,t,n,a,o,c,s,l){let u=l||Number.POSITIVE_INFINITY,p=0;return(/**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */function(r){return 60===r?(e.enter(n),e.enter(a),e.enter(o),e.consume(r),e.exit(o),f):null===r||32===r||41===r||(0,i.asciiControl)(r)?t(r):(e.enter(n),e.enter(c),e.enter(s),e.enter("chunkString",{contentType:"string"}),h(r))});/**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */function f(t){return 62===t?(e.enter(o),e.consume(t),e.exit(o),e.exit(a),e.exit(n),r):(e.enter(s),e.enter("chunkString",{contentType:"string"}),d(t))}/**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */function d(r){return 62===r?(e.exit("chunkString"),e.exit(s),f(r)):null===r||60===r||(0,i.markdownLineEnding)(r)?t(r):(e.consume(r),92===r?m:d)}/**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */function m(r){return 60===r||62===r||92===r?(e.consume(r),d):d(r)}/**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */function h(a){return!p&&(null===a||41===a||(0,i.markdownLineEndingOrSpace)(a))?(e.exit("chunkString"),e.exit(s),e.exit(c),e.exit(n),r(a)):p<u&&40===a?(e.consume(a),p++,h):41===a?(e.consume(a),p--,h):null===a||32===a||40===a||(0,i.asciiControl)(a)?t(a):(e.consume(a),92===a?g:h)}/**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */function g(r){return 40===r||41===r||92===r?(e.consume(r),h):h(r)}}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fmuaJ:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Parse labels.
 *
 * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.
 *
 * ###### Examples
 *
 * ```markdown
 * [a]
 * [a
 * b]
 * [a\]b]
 * ```
 *
 * @this {TokenizeContext}
 *   Tokenize context.
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole label (`[a]`).
 * @param {TokenType} markerType
 *   Type for the markers (`[` and `]`).
 * @param {TokenType} stringType
 *   Type for the identifier (`a`).
 * @returns {State}
 *   Start state.
 */// eslint-disable-next-line max-params
n.export(t,"factoryLabel",()=>a);var i=e("micromark-util-character");function a(e,r,t,n,a,o){let c;let s=this,l=0;return(/**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter(n),e.enter(a),e.consume(r),e.exit(a),e.enter(o),u});/**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */function u(f){return l>999||null===f||91===f||93===f&&!c||// To do: remove in the future once we’ve switched from
// `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
// which doesn’t need this.
// Hidden footnotes hook.
/* c8 ignore next 3 */94===f&&!l&&"_hiddenFootnoteSupport"in s.parser.constructs?t(f):93===f?(e.exit(o),e.enter(a),e.consume(f),e.exit(a),e.exit(n),r):(0,i.markdownLineEnding)(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),p(f))}/**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */function p(r){return null===r||91===r||93===r||(0,i.markdownLineEnding)(r)||l++>999?(e.exit("chunkString"),u(r)):(e.consume(r),c||(c=!(0,i.markdownSpace)(r)),92===r?f:p)}/**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */function f(r){return 91===r||92===r||93===r?(e.consume(r),l++,p):p(r)}}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],eXxqM:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Parse titles.
 *
 * ###### Examples
 *
 * ```markdown
 * "a"
 * 'b'
 * (c)
 * "a
 * b"
 * 'a
 *     b'
 * (a\)b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole title (`"a"`, `'b'`, `(c)`).
 * @param {TokenType} markerType
 *   Type for the markers (`"`, `'`, `(`, and `)`).
 * @param {TokenType} stringType
 *   Type for the value (`a`).
 * @returns {State}
 *   Start state.
 */// eslint-disable-next-line max-params
n.export(t,"factoryTitle",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");function o(e,r,t,n,o,c){/** @type {NonNullable<Code>} */let s;return(/**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */function(r){return 34===r||39===r||40===r?(e.enter(n),e.enter(o),e.consume(r),e.exit(o),s=40===r?41:r,l):t(r)});/**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */function l(t){return t===s?(e.enter(o),e.consume(t),e.exit(o),e.exit(n),r):(e.enter(c),u(t))}/**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */function u(r){return r===s?(e.exit(c),l(s)):null===r?t(r):(0,a.markdownLineEnding)(r)?(// To do: use `space_or_tab_eol_with_options`, connect.
e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),(0,i.factorySpace)(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(r))}/**
   *
   *
   * @type {State}
   */function p(r){return r===s||null===r||(0,a.markdownLineEnding)(r)?(e.exit("chunkString"),u(r)):(e.consume(r),92===r?f:p)}/**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */function f(r){return r===s||92===r?(e.consume(r),p):p(r)}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"11gip":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   line endings or spaces in markdown are often optional, in which case this
 *     factory can be used and `ok` will be switched to whether spaces were found
 *     or not
 * *   one line ending or space can be detected with
 *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @returns
 *   Start state.
 */n.export(t,"factoryWhitespace",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");function o(e,r){/** @type {boolean} */let t;return /** @type {State} */function n(o){return(0,a.markdownLineEnding)(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,n):(0,a.markdownSpace)(o)?(0,i.factorySpace)(e,n,t?"linePrefix":"lineSuffix")(o):r(o)}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],e2XYl:[function(e,r,t){/**
 * Normalize an identifier (as found in references, definitions).
 *
 * Collapses markdown whitespace, trim, and then lower- and uppercase.
 *
 * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their
 * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different
 * uppercase character (U+0398 (`Θ`)).
 * So, to get a canonical form, we perform both lower- and uppercase.
 *
 * Using uppercase last makes sure keys will never interact with default
 * prototypal values (such as `constructor`): nothing in the prototype of
 * `Object` is uppercase.
 *
 * @param {string} value
 *   Identifier to normalize.
 * @returns {string}
 *   Normalized identifier.
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function i(e){return e// Collapse markdown whitespace.
.replace(/[\t\n\r ]+/g," ")// Trim.
.replace(/^ | $/g,"")// Some characters are considered “uppercase”, but if their lowercase
// counterpart is uppercased will result in a different uppercase
// character.
// Hence, to get that form, we perform both lower- and uppercase.
// Upper case makes sure keys will not interact with default prototypal
// methods: no method is uppercase.
.toLowerCase().toUpperCase()}n.defineInteropFlag(t),n.export(t,"normalizeIdentifier",()=>i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2b9qH":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"hardBreakEscape",()=>a);var i=e("micromark-util-character");let a={name:"hardBreakEscape",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){return(/**
   * Start of a hard break (escape).
   *
   * ```markdown
   * > | a\
   *      ^
   *   | b
   * ```
   *
   * @type {State}
   */function(r){return e.enter("hardBreakEscape"),e.consume(r),n});/**
   * After `\`, at eol.
   *
   * ```markdown
   * > | a\
   *       ^
   *   | b
   * ```
   *
   *  @type {State}
   */function n(n){return(0,i.markdownLineEnding)(n)?(e.exit("hardBreakEscape"),r(n)):t(n)}}}},{"micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8M2Ug":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"headingAtx",()=>c);var i=e("micromark-factory-space"),a=e("micromark-util-character"),o=e("micromark-util-chunked");let c={name:"headingAtx",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=0;return(/**
   * Start of a heading (atx).
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */function(o){return(// To do: parse indent like `markdown-rs`.
e.enter("atxHeading"),e.enter("atxHeadingSequence"),/**
   * In opening sequence.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */function o(c){return 35===c&&n++<6?(e.consume(c),o):null===c||(0,a.markdownLineEndingOrSpace)(c)?(e.exit("atxHeadingSequence"),/**
   * After something, before something else.
   *
   * ```markdown
   * > | ## aa
   *       ^
   * ```
   *
   * @type {State}
   */function t(n){return 35===n?(e.enter("atxHeadingSequence"),/**
   * In further sequence (after whitespace).
   *
   * Could be normal “visible” hashes in the heading or a final sequence.
   *
   * ```markdown
   * > | ## aa ##
   *           ^
   * ```
   *
   * @type {State}
   */function r(n){return 35===n?(e.consume(n),r):(e.exit("atxHeadingSequence"),t(n))}(n)):null===n||(0,a.markdownLineEnding)(n)?(e.exit("atxHeading"),r(n)):(0,a.markdownSpace)(n)?(0,i.factorySpace)(e,t,"whitespace")(n):(// To do: generate `data` tokens, add the `text` token later.
// Needs edit map, see: `markdown.rs`.
e.enter("atxHeadingText"),/**
   * In text.
   *
   * ```markdown
   * > | ## aa
   *        ^
   * ```
   *
   * @type {State}
   */function r(n){return null===n||35===n||(0,a.markdownLineEndingOrSpace)(n)?(e.exit("atxHeadingText"),t(n)):(e.consume(n),r)}(n))}(c)):t(c)}(o))})},resolve:/** @type {Resolver} */function(e,r){let t,n,i=e.length-2,a=3;return"whitespace"===e[3][1].type&&(a+=2),i-2>a&&"whitespace"===e[i][1].type&&(i-=2),"atxHeadingSequence"===e[i][1].type&&(a===i-1||i-4>a&&"whitespace"===e[i-2][1].type)&&(i-=a+1===i?2:4),i>a&&(t={type:"atxHeadingText",start:e[a][1].start,end:e[i][1].end},n={type:"chunkText",start:e[a][1].start,end:e[i][1].end,contentType:"text"},(0,o.splice)(e,a,i-a+1,[["enter",t,r],["enter",n,r],["exit",n,r],["exit",t,r]])),e}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","micromark-util-chunked":"aCCQY","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hM4I8:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"htmlFlow",()=>c);var i=e("micromark-util-character"),a=e("micromark-util-html-tag-name"),o=e("./blank-line.js");let c={name:"htmlFlow",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n,o,c,u,p;let f=this;return(/**
   * Start of HTML (flow).
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */function(r){// To do: parse indent like `markdown-rs`.
return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(r),d});/**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | <x />
   *      ^
   * > | <!doctype>
   *      ^
   * > | <!--xxx-->
   *      ^
   * ```
   *
   * @type {State}
   */function d(a){return 33===a?(e.consume(a),m):47===a?(e.consume(a),o=!0,k):63===a?(e.consume(a),n=3,f.interrupt?r:R):(0,i.asciiAlpha)(a)?(e.consume(a),// @ts-expect-error: not null.
c=String.fromCharCode(a),x):t(a)}/**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | <!doctype>
   *       ^
   * > | <!--xxx-->
   *       ^
   * > | <![CDATA[>&<]]>
   *       ^
   * ```
   *
   * @type {State}
   */function m(a){return 45===a?(e.consume(a),n=2,h):91===a?(e.consume(a),n=5,u=0,g):(0,i.asciiAlpha)(a)?(e.consume(a),n=4,f.interrupt?r:R):t(a)}/**
   * After `<!-`, inside a comment, at another `-`.
   *
   * ```markdown
   * > | <!--xxx-->
   *        ^
   * ```
   *
   * @type {State}
   */function h(n){return 45===n?(e.consume(n),f.interrupt?r:R):t(n)}/**
   * After `<![`, inside CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *        ^^^^^^
   * ```
   *
   * @type {State}
   */function g(n){let i="CDATA[";return n===i.charCodeAt(u++)?(e.consume(n),u===i.length)?f.interrupt?r:A:g:t(n)}/**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | </x>
   *       ^
   * ```
   *
   * @type {State}
   */function k(r){return(0,i.asciiAlpha)(r)?(e.consume(r),// @ts-expect-error: not null.
c=String.fromCharCode(r),x):t(r)}/**
   * In tag name.
   *
   * ```markdown
   * > | <ab>
   *      ^^
   * > | </ab>
   *       ^^
   * ```
   *
   * @type {State}
   */function x(s){if(null===s||47===s||62===s||(0,i.markdownLineEndingOrSpace)(s)){let l=47===s,u=c.toLowerCase();return!l&&!o&&(0,a.htmlRawNames).includes(u)?(n=1,f.interrupt?r(s):A(s)):(0,a.htmlBlockNames).includes(c.toLowerCase())?(n=6,l)?(e.consume(s),b):f.interrupt?r(s):A(s):(n=7,f.interrupt&&!f.parser.lazy[f.now().line]?t(s):o?/**
   * After closing slash of a complete tag name.
   *
   * ```markdown
   * > | <x/>
   *        ^
   * ```
   *
   * @type {State}
   */function r(t){return(0,i.markdownSpace)(t)?(e.consume(t),r):S(t)}(s):D(s))}return(// ASCII alphanumerical and `-`.
45===s||(0,i.asciiAlphanumeric)(s)?(e.consume(s),c+=String.fromCharCode(s),x):t(s))}/**
   * After closing slash of a basic tag name.
   *
   * ```markdown
   * > | <div/>
   *          ^
   * ```
   *
   * @type {State}
   */function b(n){return 62===n?(e.consume(n),f.interrupt?r:A):t(n)}/**
   * At an attribute name.
   *
   * At first, this state is used after a complete tag name, after whitespace,
   * where it expects optional attributes or the end of the tag.
   * It is also reused after attributes, when expecting more optional
   * attributes.
   *
   * ```markdown
   * > | <a />
   *        ^
   * > | <a :b>
   *        ^
   * > | <a _b>
   *        ^
   * > | <a b>
   *        ^
   * > | <a >
   *        ^
   * ```
   *
   * @type {State}
   */function D(r){return 47===r?(e.consume(r),S):58===r||95===r||(0,i.asciiAlpha)(r)?(e.consume(r),y):(0,i.markdownSpace)(r)?(e.consume(r),D):S(r)}/**
   * In attribute name.
   *
   * ```markdown
   * > | <a :b>
   *         ^
   * > | <a _b>
   *         ^
   * > | <a b>
   *         ^
   * ```
   *
   * @type {State}
   */function y(r){return(// ASCII alphanumerical and `-`, `.`, `:`, and `_`.
45===r||46===r||58===r||95===r||(0,i.asciiAlphanumeric)(r)?(e.consume(r),y):v(r))}/**
   * After attribute name, at an optional initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | <a b>
   *         ^
   * > | <a b=c>
   *         ^
   * ```
   *
   * @type {State}
   */function v(r){return 61===r?(e.consume(r),w):(0,i.markdownSpace)(r)?(e.consume(r),v):D(r)}/**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * > | <a b="c">
   *          ^
   * ```
   *
   * @type {State}
   */function w(r){return null===r||60===r||61===r||62===r||96===r?t(r):34===r||39===r?(e.consume(r),p=r,j):(0,i.markdownSpace)(r)?(e.consume(r),w):/**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * ```
   *
   * @type {State}
   */function r(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||(0,i.markdownLineEndingOrSpace)(t)?v(t):(e.consume(t),r)}(r)}/**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | <a b="c">
   *           ^
   * > | <a b='c'>
   *           ^
   * ```
   *
   * @type {State}
   */function j(r){return r===p?(e.consume(r),p=null,E):null===r||(0,i.markdownLineEnding)(r)?t(r):(e.consume(r),j)}/**
   * After double or single quoted attribute value, before whitespace or the
   * end of the tag.
   *
   * ```markdown
   * > | <a b="c">
   *            ^
   * ```
   *
   * @type {State}
   */function E(e){return 47===e||62===e||(0,i.markdownSpace)(e)?D(e):t(e)}/**
   * In certain circumstances of a complete tag where only an `>` is allowed.
   *
   * ```markdown
   * > | <a b="c">
   *             ^
   * ```
   *
   * @type {State}
   */function S(r){return 62===r?(e.consume(r),F):t(r)}/**
   * After `>` in a complete tag.
   *
   * ```markdown
   * > | <x>
   *        ^
   * ```
   *
   * @type {State}
   */function F(r){return null===r||(0,i.markdownLineEnding)(r)?A(r):(0,i.markdownSpace)(r)?(e.consume(r),F):t(r)}/**
   * In continuation of any HTML kind.
   *
   * ```markdown
   * > | <!--xxx-->
   *          ^
   * ```
   *
   * @type {State}
   */function A(r){return 45===r&&2===n?(e.consume(r),I):60===r&&1===n?(e.consume(r),T):62===r&&4===n?(e.consume(r),U):63===r&&3===n?(e.consume(r),R):93===r&&5===n?(e.consume(r),z):(0,i.markdownLineEnding)(r)&&(6===n||7===n)?(e.exit("htmlFlowData"),e.check(s,N,q)(r)):null===r||(0,i.markdownLineEnding)(r)?(e.exit("htmlFlowData"),q(r)):(e.consume(r),A)}/**
   * In continuation, at eol.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */function q(r){return e.check(l,C,N)(r)}/**
   * In continuation, at eol, before non-lazy content.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */function C(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),L}/**
   * In continuation, before non-lazy content.
   *
   * ```markdown
   *   | <x>
   * > | asd
   *     ^
   * ```
   *
   * @type {State}
   */function L(r){return null===r||(0,i.markdownLineEnding)(r)?q(r):(e.enter("htmlFlowData"),A(r))}/**
   * In comment continuation, after one `-`, expecting another.
   *
   * ```markdown
   * > | <!--xxx-->
   *             ^
   * ```
   *
   * @type {State}
   */function I(r){return 45===r?(e.consume(r),R):A(r)}/**
   * In raw continuation, after `<`, at `/`.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                            ^
   * ```
   *
   * @type {State}
   */function T(r){return 47===r?(e.consume(r),c="",B):A(r)}/**
   * In raw continuation, after `</`, in a raw tag name.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                             ^^^^^^
   * ```
   *
   * @type {State}
   */function B(r){if(62===r){let t=c.toLowerCase();return(0,a.htmlRawNames).includes(t)?(e.consume(r),U):A(r)}return(0,i.asciiAlpha)(r)&&c.length<8?(e.consume(r),// @ts-expect-error: not null.
c+=String.fromCharCode(r),B):A(r)}/**
   * In cdata continuation, after `]`, expecting `]>`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *                  ^
   * ```
   *
   * @type {State}
   */function z(r){return 93===r?(e.consume(r),R):A(r)}/**
   * In declaration or instruction continuation, at `>`.
   *
   * ```markdown
   * > | <!-->
   *         ^
   * > | <?>
   *       ^
   * > | <!q>
   *        ^
   * > | <!--ab-->
   *             ^
   * > | <![CDATA[>&<]]>
   *                   ^
   * ```
   *
   * @type {State}
   */function R(r){return 62===r?(e.consume(r),U):45===r&&2===n?(e.consume(r),R):A(r)}/**
   * In closed continuation: everything we get until the eol/eof is part of it.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */function U(r){return null===r||(0,i.markdownLineEnding)(r)?(e.exit("htmlFlowData"),N(r)):(e.consume(r),U)}/**
   * Done.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */function N(t){// // Feel free to interrupt.
// tokenizer.interrupt = false
// // No longer concrete.
// tokenizer.concrete = false
return e.exit("htmlFlow"),r(t)}},resolveTo:/** @type {Resolver} */function(e){let r=e.length;for(;r--&&("enter"!==e[r][0]||"htmlFlow"!==e[r][1].type););return r>1&&"linePrefix"===e[r-2][1].type&&(// Add the prefix start to the HTML token.
e[r][1].start=e[r-2][1].start,// Add the prefix start to the HTML line token.
e[r+1][1].start=e[r-2][1].start,// Remove the line prefix.
e.splice(r-2,2)),e},concrete:!0},s={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){return(/**
   * Before eol, expecting blank line.
   *
   * ```markdown
   * > | <div>
   *          ^
   *   |
   * ```
   *
   * @type {State}
   */function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),e.attempt(o.blankLine,r,t)})},partial:!0},l={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   * At eol, before continuation.
   *
   * ```markdown
   * > | * ```js
   *            ^
   *   | b
   * ```
   *
   * @type {State}
   */function(r){return(0,i.markdownLineEnding)(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),a):t(r)});/**
   * A continuation.
   *
   * ```markdown
   *   | * ```js
   * > | b
   *     ^
   * ```
   *
   * @type {State}
   */function a(e){return n.parser.lazy[n.now().line]?t(e):r(e)}},partial:!0}},{"micromark-util-character":"cUjFI","micromark-util-html-tag-name":"bdWuA","./blank-line.js":"g0Dph","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bdWuA:[function(e,r,t){/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"htmlBlockNames",()=>i),n.export(t,"htmlRawNames",()=>a);let i=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],a=["pre","script","style","textarea"]},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"19uFK":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"htmlText",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");let o={name:"htmlText",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n,o,c;let s=this;return(/**
   * Start of HTML (text).
   *
   * ```markdown
   * > | a <b> c
   *       ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(r),l});/**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | a <b> c
   *        ^
   * > | a <!doctype> c
   *        ^
   * > | a <!--b--> c
   *        ^
   * ```
   *
   * @type {State}
   */function l(r){return 33===r?(e.consume(r),u):47===r?(e.consume(r),v):63===r?(e.consume(r),D):(0,a.asciiAlpha)(r)?(e.consume(r),j):t(r)}/**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | a <!doctype> c
   *         ^
   * > | a <!--b--> c
   *         ^
   * > | a <![CDATA[>&<]]> c
   *         ^
   * ```
   *
   * @type {State}
   */function u(r){return 45===r?(e.consume(r),p):91===r?(e.consume(r),o=0,h):(0,a.asciiAlpha)(r)?(e.consume(r),b):t(r)}/**
   * In a comment, after `<!-`, at another `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *          ^
   * ```
   *
   * @type {State}
   */function p(r){return 45===r?(e.consume(r),m):t(r)}/**
   * In comment.
   *
   * ```markdown
   * > | a <!--b--> c
   *           ^
   * ```
   *
   * @type {State}
   */function f(r){return null===r?t(r):45===r?(e.consume(r),d):(0,a.markdownLineEnding)(r)?(c=f,I(r)):(e.consume(r),f)}/**
   * In comment, after `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *             ^
   * ```
   *
   * @type {State}
   */function d(r){return 45===r?(e.consume(r),m):f(r)}/**
   * In comment, after `--`.
   *
   * ```markdown
   * > | a <!--b--> c
   *              ^
   * ```
   *
   * @type {State}
   */function m(e){return 62===e?L(e):45===e?d(e):f(e)}/**
   * After `<![`, in CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *          ^^^^^^
   * ```
   *
   * @type {State}
   */function h(r){let n="CDATA[";return r===n.charCodeAt(o++)?(e.consume(r),o===n.length?g:h):t(r)}/**
   * In CDATA.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                ^^^
   * ```
   *
   * @type {State}
   */function g(r){return null===r?t(r):93===r?(e.consume(r),k):(0,a.markdownLineEnding)(r)?(c=g,I(r)):(e.consume(r),g)}/**
   * In CDATA, after `]`, at another `]`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                    ^
   * ```
   *
   * @type {State}
   */function k(r){return 93===r?(e.consume(r),x):g(r)}/**
   * In CDATA, after `]]`, at `>`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                     ^
   * ```
   *
   * @type {State}
   */function x(r){return 62===r?L(r):93===r?(e.consume(r),x):g(r)}/**
   * In declaration.
   *
   * ```markdown
   * > | a <!b> c
   *          ^
   * ```
   *
   * @type {State}
   */function b(r){return null===r||62===r?L(r):(0,a.markdownLineEnding)(r)?(c=b,I(r)):(e.consume(r),b)}/**
   * In instruction.
   *
   * ```markdown
   * > | a <?b?> c
   *         ^
   * ```
   *
   * @type {State}
   */function D(r){return null===r?t(r):63===r?(e.consume(r),y):(0,a.markdownLineEnding)(r)?(c=D,I(r)):(e.consume(r),D)}/**
   * In instruction, after `?`, at `>`.
   *
   * ```markdown
   * > | a <?b?> c
   *           ^
   * ```
   *
   * @type {State}
   */function y(e){return 62===e?L(e):D(e)}/**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | a </b> c
   *         ^
   * ```
   *
   * @type {State}
   */function v(r){return(// ASCII alphabetical.
(0,a.asciiAlpha)(r)?(e.consume(r),w):t(r))}/**
   * After `</x`, in a tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */function w(r){return(// ASCII alphanumerical and `-`.
45===r||(0,a.asciiAlphanumeric)(r)?(e.consume(r),w):/**
   * In closing tag, after tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */function r(t){return(0,a.markdownLineEnding)(t)?(c=r,I(t)):(0,a.markdownSpace)(t)?(e.consume(t),r):L(t)}(r))}/**
   * After `<x`, in opening tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */function j(r){return(// ASCII alphanumerical and `-`.
45===r||(0,a.asciiAlphanumeric)(r)?(e.consume(r),j):47===r||62===r||(0,a.markdownLineEndingOrSpace)(r)?E(r):t(r))}/**
   * In opening tag, after tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */function E(r){return 47===r?(e.consume(r),L):58===r||95===r||(0,a.asciiAlpha)(r)?(e.consume(r),S):(0,a.markdownLineEnding)(r)?(c=E,I(r)):(0,a.markdownSpace)(r)?(e.consume(r),E):L(r)}/**
   * In attribute name.
   *
   * ```markdown
   * > | a <b c> d
   *          ^
   * ```
   *
   * @type {State}
   */function S(r){return(// ASCII alphabetical and `-`, `.`, `:`, and `_`.
45===r||46===r||58===r||95===r||(0,a.asciiAlphanumeric)(r)?(e.consume(r),S):/**
   * After attribute name, before initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | a <b c> d
   *           ^
   * ```
   *
   * @type {State}
   */function r(t){return 61===t?(e.consume(t),F):(0,a.markdownLineEnding)(t)?(c=r,I(t)):(0,a.markdownSpace)(t)?(e.consume(t),r):E(t)}(r))}/**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */function F(r){return null===r||60===r||61===r||62===r||96===r?t(r):34===r||39===r?(e.consume(r),n=r,A):(0,a.markdownLineEnding)(r)?(c=F,I(r)):(0,a.markdownSpace)(r)?(e.consume(r),F):(e.consume(r),q)}/**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | a <b c="d"> e
   *             ^
   * ```
   *
   * @type {State}
   */function A(r){return r===n?(e.consume(r),n=void 0,C):null===r?t(r):(0,a.markdownLineEnding)(r)?(c=A,I(r)):(e.consume(r),A)}/**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */function q(r){return null===r||34===r||39===r||60===r||61===r||96===r?t(r):47===r||62===r||(0,a.markdownLineEndingOrSpace)(r)?E(r):(e.consume(r),q)}/**
   * After double or single quoted attribute value, before whitespace or the end
   * of the tag.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */function C(e){return 47===e||62===e||(0,a.markdownLineEndingOrSpace)(e)?E(e):t(e)}/**
   * In certain circumstances of a tag where only an `>` is allowed.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */function L(n){return 62===n?(e.consume(n),e.exit("htmlTextData"),e.exit("htmlText"),r):t(n)}/**
   * At eol.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   * > | a <!--a
   *            ^
   *   | b-->
   * ```
   *
   * @type {State}
   */function I(r){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),T}/**
   * After eol, at optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */function T(r){// Always populated by defaults.
return(0,a.markdownSpace)(r)?(0,i.factorySpace)(e,B,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(r):B(r)}/**
   * After eol, after optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */function B(r){return e.enter("htmlTextData"),c(r)}}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],ihGwx:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"labelEnd",()=>f);var i=e("micromark-factory-destination"),a=e("micromark-factory-label"),o=e("micromark-factory-title"),c=e("micromark-factory-whitespace"),s=e("micromark-util-character"),l=e("micromark-util-chunked"),u=e("micromark-util-normalize-identifier"),p=e("micromark-util-resolve-all");let f={name:"labelEnd",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n,i;let a=this,o=a.events.length;// Find an opening.
for(;o--;)if(("labelImage"===a.events[o][1].type||"labelLink"===a.events[o][1].type)&&!a.events[o][1]._balanced){n=a.events[o][1];break}return(/**
   * Start of label end.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   * ```
   *
   * @type {State}
   */function(r){return(// If there is not an okay opening.
n?n._inactive?p(r):(i=a.parser.defined.includes((0,u.normalizeIdentifier)(a.sliceSerialize({start:n.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(r),e.exit("labelMarker"),e.exit("labelEnd"),c):t(r))});/**
   * After `]`.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   *       ^
   * ```
   *
   * @type {State}
   */function c(r){return(// Note: `markdown-rs` also parses GFM footnotes here, which for us is in
// an extension.
// Resource (`[asd](fgh)`)?
40===r?e.attempt(d,l,i?l:p)(r):91===r?e.attempt(m,l,i?s:p)(r):i?l(r):p(r))}/**
   * After `]`, at `[`, but not at a full reference.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] b
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */function s(r){return e.attempt(h,l,p)(r)}/**
   * Done, we found something.
   *
   * ```markdown
   * > | [a](b) c
   *           ^
   * > | [a][b] c
   *           ^
   * > | [a][] b
   *          ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */function l(e){// Note: `markdown-rs` does a bunch of stuff here.
return r(e)}/**
   * Done, it’s nothing.
   *
   * There was an okay opening, but we didn’t match anything.
   *
   * ```markdown
   * > | [a](b c
   *        ^
   * > | [a][b c
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */function p(e){return n._balanced=!0,t(e)}},resolveTo:/** @type {Resolver} */function(e,r){let t,n,i,a,o=e.length,c=0;// Find an opening.
for(;o--;)if(t=e[o][1],n){// If we see another link, or inactive link label, we’ve been here before.
if("link"===t.type||"labelLink"===t.type&&t._inactive)break;// Mark other link openings as inactive, as we can’t have links in
// links.
"enter"===e[o][0]&&"labelLink"===t.type&&(t._inactive=!0)}else if(i){if("enter"===e[o][0]&&("labelImage"===t.type||"labelLink"===t.type)&&!t._balanced&&(n=o,"labelLink"!==t.type)){c=2;break}}else"labelEnd"===t.type&&(i=o);let s={type:"labelLink"===e[n][1].type?"link":"image",start:Object.assign({},e[n][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[n][1].start),end:Object.assign({},e[i][1].end)},f={type:"labelText",start:Object.assign({},e[n+c+2][1].end),end:Object.assign({},e[i-2][1].start)};return a=[["enter",s,r],["enter",u,r]],// Opening marker.
a=(0,l.push)(a,e.slice(n+1,n+c+3)),// Text open.
a=(0,l.push)(a,[["enter",f,r]]),// Always populated by defaults.
// Between.
a=(0,l.push)(a,(0,p.resolveAll)(r.parser.constructs.insideSpan.null,e.slice(n+c+4,i-3),r)),// Text close, marker close, label close.
a=(0,l.push)(a,[["exit",f,r],e[i-2],e[i-1],["exit",u,r]]),// Reference, resource, or so.
a=(0,l.push)(a,e.slice(i+1)),// Media close.
a=(0,l.push)(a,[["exit",s,r]]),(0,l.splice)(e,n,e.length,a),e},resolveAll:/** @type {Resolver} */function(e){let r=-1;for(;++r<e.length;){let t=e[r][1];("labelImage"===t.type||"labelLink"===t.type||"labelEnd"===t.type)&&(// Remove the marker.
e.splice(r+1,"labelImage"===t.type?4:2),t.type="data",r++)}return e}},d={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){return(/**
   * At a resource.
   *
   * ```markdown
   * > | [a](b) c
   *        ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("resource"),e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),n});/**
   * In resource, after `(`, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */function n(r){return(0,s.markdownLineEndingOrSpace)(r)?(0,c.factoryWhitespace)(e,a)(r):a(r)}/**
   * In resource, after optional whitespace, at `)` or a destination.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */function a(r){return 41===r?d(r):(0,i.factoryDestination)(e,l,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(r)}/**
   * In resource, after destination, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *          ^
   * ```
   *
   * @type {State}
   */function l(r){return(0,s.markdownLineEndingOrSpace)(r)?(0,c.factoryWhitespace)(e,p)(r):d(r)}/**
   * At invalid destination.
   *
   * ```markdown
   * > | [a](<<) b
   *         ^
   * ```
   *
   * @type {State}
   */function u(e){return t(e)}/**
   * In resource, after destination and whitespace, at `(` or title.
   *
   * ```markdown
   * > | [a](b ) c
   *           ^
   * ```
   *
   * @type {State}
   */function p(r){return 34===r||39===r||40===r?(0,o.factoryTitle)(e,f,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(r):d(r)}/**
   * In resource, after title, at optional whitespace.
   *
   * ```markdown
   * > | [a](b "c") d
   *              ^
   * ```
   *
   * @type {State}
   */function f(r){return(0,s.markdownLineEndingOrSpace)(r)?(0,c.factoryWhitespace)(e,d)(r):d(r)}/**
   * In resource, at `)`.
   *
   * ```markdown
   * > | [a](b) d
   *          ^
   * ```
   *
   * @type {State}
   */function d(n){return 41===n?(e.enter("resourceMarker"),e.consume(n),e.exit("resourceMarker"),e.exit("resource"),r):t(n)}}},m={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   * In a reference (full), at the `[`.
   *
   * ```markdown
   * > | [a][b] d
   *        ^
   * ```
   *
   * @type {State}
   */function(r){return(0,a.factoryLabel).call(n,e,i,o,"reference","referenceMarker","referenceString")(r)});/**
   * In a reference (full), after `]`.
   *
   * ```markdown
   * > | [a][b] d
   *          ^
   * ```
   *
   * @type {State}
   */function i(e){return n.parser.defined.includes((0,u.normalizeIdentifier)(n.sliceSerialize(n.events[n.events.length-1][1]).slice(1,-1)))?r(e):t(e)}/**
   * In reference (full) that was missing.
   *
   * ```markdown
   * > | [a][b d
   *        ^
   * ```
   *
   * @type {State}
   */function o(e){return t(e)}}},h={tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){return(/**
   * In reference (collapsed), at `[`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *        ^
   * ```
   *
   * @type {State}
   */function(r){return(// We only attempt a collapsed label if there’s a `[`.
e.enter("reference"),e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),n)});/**
   * In reference (collapsed), at `]`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *         ^
   * ```
   *
   *  @type {State}
   */function n(n){return 93===n?(e.enter("referenceMarker"),e.consume(n),e.exit("referenceMarker"),e.exit("reference"),r):t(n)}}}},{"micromark-factory-destination":"em0iK","micromark-factory-label":"fmuaJ","micromark-factory-title":"eXxqM","micromark-factory-whitespace":"11gip","micromark-util-character":"cUjFI","micromark-util-chunked":"aCCQY","micromark-util-normalize-identifier":"e2XYl","micromark-util-resolve-all":"1064n","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],c63yJ:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"labelStartImage",()=>a);var i=e("./label-end.js");let a={name:"labelStartImage",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   * Start of label (image) start.
   *
   * ```markdown
   * > | a ![b] c
   *       ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(r),e.exit("labelImageMarker"),i});/**
   * After `!`, at `[`.
   *
   * ```markdown
   * > | a ![b] c
   *        ^
   * ```
   *
   * @type {State}
   */function i(r){return 91===r?(e.enter("labelMarker"),e.consume(r),e.exit("labelMarker"),e.exit("labelImage"),a):t(r)}/**
   * After `![`.
   *
   * ```markdown
   * > | a ![b] c
   *         ^
   * ```
   *
   * This is needed in because, when GFM footnotes are enabled, images never
   * form when started with a `^`.
   * Instead, links form:
   *
   * ```markdown
   * ![^a](b)
   *
   * ![^a][b]
   *
   * [b]: c
   * ```
   *
   * ```html
   * <p>!<a href=\"b\">^a</a></p>
   * <p>!<a href=\"c\">^a</a></p>
   * ```
   *
   * @type {State}
   */function a(e){// To do: use a new field to do this, this is still needed for
// `micromark-extension-gfm-footnote`, but the `label-start-link`
// behavior isn’t.
// Hidden footnotes hook.
/* c8 ignore next 3 */return 94===e&&"_hiddenFootnoteSupport"in n.parser.constructs?t(e):r(e)}},resolveAll:i.labelEnd.resolveAll}},{"./label-end.js":"ihGwx","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iBcHU:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"labelStartLink",()=>a);var i=e("./label-end.js");let a={name:"labelStartLink",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n=this;return(/**
   * Start of label (link) start.
   *
   * ```markdown
   * > | a [b] c
   *       ^
   * ```
   *
   * @type {State}
   */function(r){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(r),e.exit("labelMarker"),e.exit("labelLink"),i});/** @type {State} */function i(e){// To do: this isn’t needed in `micromark-extension-gfm-footnote`,
// remove.
// Hidden footnotes hook.
/* c8 ignore next 3 */return 94===e&&"_hiddenFootnoteSupport"in n.parser.constructs?t(e):r(e)}},resolveAll:i.labelEnd.resolveAll}},{"./label-end.js":"ihGwx","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8qDyu":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"lineEnding",()=>a);var i=e("micromark-factory-space");e("micromark-util-character");let a={name:"lineEnding",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r){return /** @type {State} */function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,i.factorySpace)(e,r,"linePrefix")}}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dwZDM:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"list",()=>s);var i=e("micromark-factory-space"),a=e("micromark-util-character"),o=e("./blank-line.js"),c=e("./thematic-break.js");let s={name:"list",tokenize:// To do: `markdown-rs` parses list items on their own and later stitches them
// together.
/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */function(e,r,t){let n=this,i=n.events[n.events.length-1],s=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,u=0;return /** @type {State} */function(r){let i=n.containerState.type||(42===r||43===r||45===r?"listUnordered":"listOrdered");if("listUnordered"===i?!n.containerState.marker||r===n.containerState.marker:(0,a.asciiDigit)(r)){if(n.containerState.type||(n.containerState.type=i,e.enter(i,{_container:!0})),"listUnordered"===i)return e.enter("listItemPrefix"),42===r||45===r?e.check(c.thematicBreak,t,p)(r):p(r);if(!n.interrupt||49===r)return e.enter("listItemPrefix"),e.enter("listItemValue"),/** @type {State} */function r(i){return(0,a.asciiDigit)(i)&&++u<10?(e.consume(i),r):(!n.interrupt||u<2)&&(n.containerState.marker?i===n.containerState.marker:41===i||46===i)?(e.exit("listItemValue"),p(i)):t(i)}(r)}return t(r)};/**
   * @type {State}
   **/function p(r){return e.enter("listItemMarker"),e.consume(r),e.exit("listItemMarker"),n.containerState.marker=n.containerState.marker||r,e.check(o.blankLine,n.interrupt?t:f,e.attempt(l,m,d))}/** @type {State} */function f(e){return n.containerState.initialBlankLine=!0,s++,m(e)}/** @type {State} */function d(r){return(0,a.markdownSpace)(r)?(e.enter("listItemPrefixWhitespace"),e.consume(r),e.exit("listItemPrefixWhitespace"),m):t(r)}/** @type {State} */function m(t){return n.containerState.size=s+n.sliceSerialize(e.exit("listItemPrefix"),!0).length,r(t)}},continuation:{tokenize:/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */function(e,r,t){let n=this;return n.containerState._closeFlow=void 0,e.check(o.blankLine,/** @type {State} */function(t){// We have a blank line.
// Still, try to consume at most the items size.
return n.containerState.furtherBlankLines=n.containerState.furtherBlankLines||n.containerState.initialBlankLine,(0,i.factorySpace)(e,r,"listItemIndent",n.containerState.size+1)(t)},/** @type {State} */function(t){return n.containerState.furtherBlankLines||!(0,a.markdownSpace)(t)?(n.containerState.furtherBlankLines=void 0,n.containerState.initialBlankLine=void 0,c(t)):(n.containerState.furtherBlankLines=void 0,n.containerState.initialBlankLine=void 0,e.attempt(u,r,c)(t))});/** @type {State} */function c(a){// Always populated by defaults.
return(// While we do continue, we signal that the flow should be closed.
n.containerState._closeFlow=!0,// As we’re closing flow, we’re no longer interrupting.
n.interrupt=void 0,(0,i.factorySpace)(e,e.attempt(s,r,t),"linePrefix",n.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a))}}},exit:/**
 * @type {Exiter}
 * @this {TokenizeContext}
 */function(e){e.exit(this.containerState.type)}},l={tokenize:/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */function(e,r,t){let n=this;// Always populated by defaults.
return(0,i.factorySpace)(e,/** @type {State} */function(e){let i=n.events[n.events.length-1];return!(0,a.markdownSpace)(e)&&i&&"listItemPrefixWhitespace"===i[1].type?r(e):t(e)},"listItemPrefixWhitespace",n.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},u={tokenize:/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */function(e,r,t){let n=this;return(0,i.factorySpace)(e,/** @type {State} */function(e){let i=n.events[n.events.length-1];return i&&"listItemIndent"===i[1].type&&i[2].sliceSerialize(i[1],!0).length===n.containerState.size?r(e):t(e)},"listItemIndent",n.containerState.size+1)},partial:!0}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","./blank-line.js":"g0Dph","./thematic-break.js":"9s528","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9s528":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"thematicBreak",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");let o={name:"thematicBreak",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n,o=0;return(/**
   * Start of thematic break.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */function(c){// To do: parse indent like `markdown-rs`.
return e.enter("thematicBreak"),n=c,/**
   * After something, before something else.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */function c(s){return s===n?(e.enter("thematicBreakSequence"),/**
   * In sequence.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */function r(t){return t===n?(e.consume(t),o++,r):(e.exit("thematicBreakSequence"),(0,a.markdownSpace)(t)?(0,i.factorySpace)(e,c,"whitespace")(t):c(t))}(s)):o>=3&&(null===s||(0,a.markdownLineEnding)(s))?(e.exit("thematicBreak"),r(s)):t(s)}(c)})}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],c6hKr:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"setextUnderline",()=>o);var i=e("micromark-factory-space"),a=e("micromark-util-character");let o={name:"setextUnderline",tokenize:/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */function(e,r,t){let n;let o=this;return(/**
   * At start of heading (setext) underline.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */function(r){let s,l=o.events.length;// Find an opening.
for(;l--;)// We can now either have a definition or a paragraph.
if("lineEnding"!==o.events[l][1].type&&"linePrefix"!==o.events[l][1].type&&"content"!==o.events[l][1].type){s="paragraph"===o.events[l][1].type;break}return(// To do: handle lazy/pierce like `markdown-rs`.
// To do: parse indent like `markdown-rs`.
!o.parser.lazy[o.now().line]&&(o.interrupt||s)?(e.enter("setextHeadingLine"),n=r,e.enter("setextHeadingLineSequence"),/**
   * In sequence.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */function r(t){return t===n?(e.consume(t),r):(e.exit("setextHeadingLineSequence"),(0,a.markdownSpace)(t)?(0,i.factorySpace)(e,c,"lineSuffix")(t):c(t))}(r)):t(r))});/**
   * After sequence, after optional whitespace.
   *
   * ```markdown
   *   | aa
   * > | ==
   *       ^
   * ```
   *
   * @type {State}
   */function c(n){return null===n||(0,a.markdownLineEnding)(n)?(e.exit("setextHeadingLine"),r(n)):t(n)}},resolveTo:/** @type {Resolver} */function(e,r){// To do: resolve like `markdown-rs`.
let t,n,i,a=e.length;// Find the opening of the content.
// It’ll always exist: we don’t tokenize if it isn’t there.
for(;a--;)if("enter"===e[a][0]){if("content"===e[a][1].type){t=a;break}"paragraph"===e[a][1].type&&(n=a)}else"content"===e[a][1].type&&e.splice(a,1),i||"definition"!==e[a][1].type||(i=a);let o={type:"setextHeading",start:Object.assign({},e[n][1].start),end:Object.assign({},e[e.length-1][1].end)};return(// Change the paragraph to setext heading text.
e[n][1].type="setextHeadingText",i?(e.splice(n,0,["enter",o,r]),e.splice(i+1,0,["exit",e[t][1],r]),e[t][1].end=Object.assign({},e[i][1].end)):e[t][1]=o,// Add the heading exit at the end.
e.push(["exit",o,r]),e)}}},{"micromark-factory-space":"iStdw","micromark-util-character":"cUjFI","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"75KlL":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"resolver",()=>i),n.export(t,"string",()=>a),n.export(t,"text",()=>o);let i={resolveAll:s()},a=c("string"),o=c("text");/**
 * @param {'string' | 'text'} field
 * @returns {InitialConstruct}
 */function c(e){return{tokenize:/**
   * @this {TokenizeContext}
   * @type {Initializer}
   */function(r){let t=this,n=this.parser.constructs[e],i=r.attempt(n,a,o);return a;/** @type {State} */function a(e){return s(e)?i(e):o(e)}/** @type {State} */function o(e){if(null===e){r.consume(e);return}return r.enter("data"),r.consume(e),c}/** @type {State} */function c(e){return s(e)?(r.exit("data"),i(e)):(// Data.
r.consume(e),c)}/**
     * @param {Code} code
     * @returns {boolean}
     */function s(e){if(null===e)return!0;let r=n[e],i=-1;if(r)for(;++i<r.length;){let e=r[i];if(!e.previous||e.previous.call(t,t.previous))return!0}return!1}},resolveAll:s("text"===e?l:void 0)}}/**
 * @param {Resolver | undefined} [extraResolver]
 * @returns {Resolver}
 */function s(e){return /** @type {Resolver} */function(r,t){let n,i=-1;// A rather boring computation (to merge adjacent `data` events) which
// improves mm performance by 29%.
for(;++i<=r.length;)void 0===n?r[i]&&"data"===r[i][1].type&&(n=i,i++):r[i]&&"data"===r[i][1].type||(i!==n+2&&(r[n][1].end=r[i-1][1].end,r.splice(n+2,i-n-2),i=n+2),n=void 0);return e?e(r,t):r}}/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */function l(e,r){let t=0// Skip first.
;for(;++t<=e.length;)if((t===e.length||"lineEnding"===e[t][1].type)&&"data"===e[t-1][1].type){let n;let i=e[t-1][1],a=r.sliceStream(i),o=a.length,c=-1,s=0;for(;o--;){let e=a[o];if("string"==typeof e){for(c=e.length;32===e.charCodeAt(c-1);)s++,c--;if(c)break;c=-1}else if(-2===e)n=!0,s++;else if(-1===e);else{// Replacement character, exit.
o++;break}}if(s){let a={type:t===e.length||n||s<2?"lineSuffix":"hardBreakTrailing",start:{line:i.end.line,column:i.end.column-s,offset:i.end.offset-s,_index:i.start._index+o,_bufferIndex:o?c:i.start._bufferIndex+c},end:Object.assign({},i.end)};i.end=Object.assign({},a.start),i.start.offset===i.end.offset?Object.assign(i,a):(e.splice(t,0,["enter",a,r],["exit",a,r]),t+=2)}t++}return e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hT0RM:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenType} TokenType
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 *//**
 * @callback Restore
 * @returns {void}
 *
 * @typedef Info
 * @property {Restore} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {void}
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_bufferIndex' | '_index'> | undefined} [from]
 * @returns {TokenizeContext}
 */n.export(t,"createTokenizer",()=>c);var i=e("micromark-util-character"),a=e("micromark-util-chunked"),o=e("micromark-util-resolve-all");function c(e,r,t){/** @type {Point} */let n=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),c={},s=[],l=[],u=[],p={consume:/** @type {Effects['consume']} */function(e){(0,i.markdownLineEnding)(e)?(n.line++,n.column=1,n.offset+=-3===e?2:1,b()):-1!==e&&(n.column++,n.offset++),n._bufferIndex<0?n._index++:(n._bufferIndex++,n._bufferIndex===l[n._index].length&&(n._bufferIndex=-1,n._index++)),// Expose the previous character.
f.previous=e},enter:/** @type {Effects['enter']} */function(e,r){/** @type {Token} */// @ts-expect-error Patch instead of assign required fields to help GC.
let t=r||{};return t.type=e,t.start=h(),f.events.push(["enter",t,f]),u.push(t),t},exit:/** @type {Effects['exit']} */function(e){let r=u.pop();return r.end=h(),f.events.push(["exit",r,f]),r},attempt:k(/**
   * Use results.
   *
   * @type {ReturnHandle}
   */function(e,r){x(e,r.from)}),check:k(g),interrupt:k(g,{interrupt:!0})},f={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:m,sliceSerialize://
// Tools.
//
/** @type {TokenizeContext['sliceSerialize']} */function(e,r){return(/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean | undefined} [expandTabs=false]
 * @returns {string}
 */function(e,r){let t,n=-1,i=[];for(;++n<e.length;){let a;let o=e[n];if("string"==typeof o)a=o;else switch(o){case -5:a="\r";break;case -4:a="\n";break;case -3:a="\r\n";break;case -2:a=r?" ":"	";break;case -1:if(!r&&t)continue;a=" ";break;default:// Currently only replacement character.
a=String.fromCharCode(o)}t=-2===o,i.push(a)}return i.join("")}(m(e),r))},now:h,defineSkip:/** @type {TokenizeContext['defineSkip']} */function(e){c[e.line]=e.column,b()},write:/** @type {TokenizeContext['write']} */function(e){return(// Exit if we’re not done, resolve might change stuff.
(l=(0,a.push)(l,e),//
// State management.
//
/**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */function(){/** @type {number} */let e;for(;n._index<l.length;){var r;let t=l[n._index];// If we’re in a buffer chunk, loop through it.
if("string"==typeof t)for(e=n._index,n._bufferIndex<0&&(n._bufferIndex=0);n._index===e&&n._bufferIndex<t.length;)r=t.charCodeAt(n._bufferIndex),d=d(r);else d=d(t)}}(),null!==l[l.length-1])?[]:(x(r,0),// Otherwise, resolve, and exit.
f.events=(0,o.resolveAll)(s,f.events,f),f.events))}},d=r.tokenize.call(f,p);return r.resolveAll&&s.push(r),f;/** @type {TokenizeContext['sliceStream']} */function m(e){return(/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'end' | 'start'>} token
 * @returns {Array<Chunk>}
 */function(e,r){let t;let n=r.start._index,i=r.start._bufferIndex,a=r.end._index,o=r.end._bufferIndex;if(n===a)t=[e[n].slice(i,o)];else{if(t=e.slice(n,a),i>-1){let e=t[0];"string"==typeof e?t[0]=e.slice(i):t.shift()}o>0&&t.push(e[a].slice(0,o))}return t}(l,e))}/** @type {TokenizeContext['now']} */function h(){// This is a hot path, so we clone manually instead of `Object.assign({}, point)`
let{line:e,column:r,offset:t,_index:i,_bufferIndex:a}=n;return{line:e,column:r,offset:t,_index:i,_bufferIndex:a}}/**
   * Discard results.
   *
   * @type {ReturnHandle}
   */function g(e,r){r.restore()}/**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {{interrupt?: boolean | undefined} | undefined} [fields]
   */function k(e,r){return(/**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Array<Construct> | Construct | ConstructRecord} constructs
     * @param {State} returnState
     * @param {State | undefined} [bogusState]
     * @returns {State}
     */function(t,i,a){/** @type {Array<Construct>} */let o,c,s,l;return Array.isArray(t)?d(t):"tokenize"in t?d([t]):/** @type {State} */function(e){let r=null!==e&&t[e],n=null!==e&&t.null,i=[// To do: add more extension tests.
/* c8 ignore next 2 */...Array.isArray(r)?r:r?[r]:[],...Array.isArray(n)?n:n?[n]:[]];return d(i)(e)};/**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */function d(e){return(o=e,c=0,0===e.length)?a:m(e[c])}/**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */function m(e){return /** @type {State} */function(t){return(// Always populated by defaults.
(// To do: not needed to store if there is no bogus state, probably?
// Currently doesn’t work because `inspect` in document does a check
// w/o a bogus, which doesn’t make sense. But it does seem to help perf
// by not storing.
l=/**
   * Store state.
   *
   * @returns {Info}
   */function(){let e=h(),r=f.previous,t=f.currentConstruct,i=f.events.length,a=Array.from(u);return{restore:/**
     * Restore state.
     *
     * @returns {void}
     */function(){n=e,f.previous=r,f.currentConstruct=t,f.events.length=i,u=a,b()},from:i}}(),s=e,e.partial||(f.currentConstruct=e),e.name&&f.parser.constructs.disable.null.includes(e.name))?k(t):e.tokenize.call(// prototype.
// This allows a “live binding”, which is needed for `interrupt`.
r?Object.assign(Object.create(f),r):f,p,g,k)(t))}}/** @type {State} */function g(r){return e(s,l),i}/** @type {State} */function k(e){return(l.restore(),++c<o.length)?m(o[c]):a}})}/**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */function x(e,r){e.resolveAll&&!s.includes(e)&&s.push(e),e.resolve&&(0,a.splice)(f.events,r,f.events.length-r,e.resolve(f.events.slice(r),f)),e.resolveTo&&(f.events=e.resolveTo(f.events,f))}/**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */function b(){n.line in c&&n.column<2&&(n.column=c[n.line],n.offset+=c[n.line]-1)}}},{"micromark-util-character":"cUjFI","micromark-util-chunked":"aCCQY","micromark-util-resolve-all":"1064n","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],ivY6o:[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"document",()=>o),n.export(t,"contentInitial",()=>c),n.export(t,"flowInitial",()=>s),n.export(t,"flow",()=>l),n.export(t,"string",()=>u),n.export(t,"text",()=>p),n.export(t,"insideSpan",()=>f),n.export(t,"attentionMarkers",()=>d),n.export(t,"disable",()=>m);var i=e("micromark-core-commonmark"),a=e("./initialize/text.js");let o={42:i.list,43:i.list,45:i.list,48:i.list,49:i.list,50:i.list,51:i.list,52:i.list,53:i.list,54:i.list,55:i.list,56:i.list,57:i.list,62:i.blockQuote},c={91:i.definition},s={[-2]:i.codeIndented,[-1]:i.codeIndented,32:i.codeIndented},l={35:i.headingAtx,42:i.thematicBreak,45:[i.setextUnderline,i.thematicBreak],60:i.htmlFlow,61:i.setextUnderline,95:i.thematicBreak,96:i.codeFenced,126:i.codeFenced},u={38:i.characterReference,92:i.characterEscape},p={[-5]:i.lineEnding,[-4]:i.lineEnding,[-3]:i.lineEnding,33:i.labelStartImage,38:i.characterReference,42:i.attention,60:[i.autolink,i.htmlText],91:i.labelStartLink,92:[i.hardBreakEscape,i.characterEscape],93:i.labelEnd,95:i.attention,96:i.codeText},f={null:[i.attention,a.resolver]},d={null:[42,95]},m={null:[]}},{"micromark-core-commonmark":"82deD","./initialize/text.js":"75KlL","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2F8ys":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 *//**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding | null | undefined} [encoding]
 * @param {boolean | null | undefined} [end=false]
 * @returns {Array<Chunk>}
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * @returns {Preprocessor}
 */n.export(t,"preprocess",()=>a);let i=/[\0\t\n\r]/g;function a(){let e,r=1,t="",n=!0;return /** @type {Preprocessor} */function(a,o,c){let s,l,u,p,f;/** @type {Array<Chunk>} */let d=[];for(// @ts-expect-error `Buffer` does allow an encoding.
a=t+a.toString(o),u=0,t="",n&&(65279===a.charCodeAt(0)&&u++,n=void 0);u<a.length;){if(i.lastIndex=u,p=(s=i.exec(a))&&void 0!==s.index?s.index:a.length,f=a.charCodeAt(p),!s){t=a.slice(u);break}if(10===f&&u===p&&e)d.push(-3),e=void 0;else switch(e&&(d.push(-5),e=void 0),u<p&&(d.push(a.slice(u,p)),r+=p-u),f){case 0:d.push(65533),r++;break;case 9:for(l=4*Math.ceil(r/4),d.push(-2);r++<l;)d.push(-1);break;case 10:d.push(-4),r=1;break;default:e=!0,r=1}u=p+1}return c&&(e&&d.push(-5),t&&d.push(t),d.push(null)),d}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"1RlOo":[function(e,r,t){/**
 * @typedef {import('micromark-util-types').Event} Event
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * @param {Array<Event>} events
 * @returns {Array<Event>}
 */n.export(t,"postprocess",()=>a);var i=e("micromark-util-subtokenize");function a(e){for(;!(0,i.subtokenize)(e););return e}},{"micromark-util-subtokenize":"9JtDe","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dEuCB:[function(e,r,t){/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * Sort of like `String.fromCharCode(Number.parseInt(value, base))`, but makes
 * non-characters and control characters safe.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 *   Character.
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function i(e,r){let t=Number.parseInt(e,r);return t<9||11===t||t>13&&t<32||// Control character (DEL) of C0, and C1 controls.
t>126&&t<160||// Lone high surrogates and low surrogates.
t>55295&&t<57344||// Noncharacters.
t>64975&&t<65008||(65535&t)==65535||(65535&t)==65534/* eslint-enable no-bitwise */||// Out of range
t>1114111?"�":String.fromCharCode(t)}n.defineInteropFlag(t),n.export(t,"decodeNumericCharacterReference",()=>i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],h4ErJ:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),/**
 * Decode markdown strings (which occur in places such as fenced code info
 * strings, destinations, labels, and titles).
 *
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 *   Value to decode.
 * @returns {string}
 *   Decoded value.
 */n.export(t,"decodeString",()=>c);var i=e("decode-named-character-reference"),a=e("micromark-util-decode-numeric-character-reference");let o=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function c(e){return e.replace(o,s)}/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */function s(e,r,t){if(r)return r;// Reference.
let n=t.charCodeAt(0);if(35===n){let e=t.charCodeAt(1),r=120===e||88===e;return(0,a.decodeNumericCharacterReference)(t.slice(r?2:1),r?16:10)}return(0,i.decodeNamedCharacterReference)(t)||e}},{"decode-named-character-reference":"aLMfA","micromark-util-decode-numeric-character-reference":"dEuCB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3goVY":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"stringifyPosition",()=>i.stringifyPosition);var i=e("./lib/index.js")},{"./lib/index.js":"8zd7C","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8zd7C":[function(e,r,t){/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 *//**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *//**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Position | PositionLike | Point | PointLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function i(e){return(// Nothing.
e&&"object"==typeof e?"position"in e||"type"in e?o(e.position):"start"in e||"end"in e?o(e):"line"in e||"column"in e?a(e):"":"")}/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */function a(e){return c(e&&e.line)+":"+c(e&&e.column)}/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */function o(e){return a(e&&e.start)+"-"+a(e&&e.end)}/**
 * @param {number | null | undefined} value
 * @returns {number}
 */function c(e){return e&&"number"==typeof e?e:1}n.defineInteropFlag(t),n.export(t,"stringifyPosition",()=>i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=flowDiagram-93327f21.8f11c8ee.js.map
;
//# sourceMappingURL=flowDiagram-93327f21.8f11c8ee.js.map
