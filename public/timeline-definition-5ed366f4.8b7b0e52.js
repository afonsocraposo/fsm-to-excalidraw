!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(t,e,i,r,n){/* eslint-disable no-undef */var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[r]&&s[r],l=a.cache||{},o="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,i){if(!l[e]){if(!t[e]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var n="function"==typeof s[r]&&s[r];if(!i&&n)return n(e,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(a)return a(e,!0);// Try the node require function if it exists.
if(o&&"string"==typeof e)return o(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}u.resolve=function(i){var r=t[e][1][i];return null!=r?r:i},u.cache={};var d=l[e]=new c.Module(e);t[e][0].call(d.exports,u,d,d.exports,this)}return l[e].exports;function u(t){var e=u.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=t,c.cache=l,c.parent=a,c.register=function(e,i){t[e]=[function(t,e){e.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return s[r]}}),s[r]=c;for(var h=0;h<e.length;h++)c(e[h]);if(i){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var d=c(i);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):n&&(this[n]=d)}}({fvjN3:[function(t,e,i){var r=t("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(i),r.export(i,"diagram",()=>D);var n=t("./mermaid-b0ad2de1.js"),s=t("d3"),a=t("khroma");t("ts-dedent"),t("dayjs"),t("@braintree/sanitize-url"),t("dompurify"),t("lodash-es/memoize.js"),t("stylis"),t("lodash-es/isEmpty.js");var l=function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[1,2],i=[1,5],r=[6,9,11,17,18,20,22,23,26,27,28],n=[1,15],s=[1,16],a=[1,17],l=[1,18],o=[1,19],c=[1,23],h=[1,24],d=[1,27],u=[4,6,9,11,17,18,20,22,23,26,27,28],p={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,i,r,n,s,a){var l=s.length-1;switch(n){case 1:return s[l-1];case 3:case 7:case 8:this.$=[];break;case 4:s[l-1].push(s[l]),this.$=s[l-1];break;case 5:case 6:this.$=s[l];break;case 11:r.getCommonDb().setDiagramTitle(s[l].substr(6)),this.$=s[l].substr(6);break;case 12:this.$=s[l].trim(),r.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=s[l].trim(),r.getCommonDb().setAccDescription(this.$);break;case 15:r.addSection(s[l].substr(8)),this.$=s[l].substr(8);break;case 19:r.addTask(s[l],0,""),this.$=s[l];break;case 20:r.addEvent(s[l].substr(2)),this.$=s[l];break;case 21:r.parseDirective("%%{","open_directive");break;case 22:r.parseDirective(s[l],"type_directive");break;case 23:s[l]=s[l].trim().replace(/'/g,'"'),r.parseDirective(s[l],"arg_directive");break;case 24:r.parseDirective("}%%","close_directive","timeline")}},table:[{3:1,4:e,7:3,12:4,28:i},{1:[3]},t(r,[2,3],{5:6}),{3:7,4:e,7:3,12:4,28:i},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:n,18:s,20:a,22:l,23:o,24:20,25:21,26:c,27:h,28:i},{1:[2,2]},{14:25,15:[1,26],31:d},t([15,31],[2,22]),t(r,[2,8],{1:[2,1]}),t(r,[2,4]),{7:22,10:28,12:4,17:n,18:s,20:a,22:l,23:o,24:20,25:21,26:c,27:h,28:i},t(r,[2,6]),t(r,[2,7]),t(r,[2,11]),{19:[1,29]},{21:[1,30]},t(r,[2,14]),t(r,[2,15]),t(r,[2,16]),t(r,[2,17]),t(r,[2,18]),t(r,[2,19]),t(r,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},t(r,[2,5]),t(r,[2,12]),t(r,[2,13]),t(u,[2,9]),{14:34,31:d},{31:[2,23]},{11:[1,35]},t(u,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],r=[],n=[null],s=[],a=this.table,l="",o=0,c=0,h=s.slice.call(arguments,1),d=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);d.setInput(t,u.yy),u.yy.lexer=d,u.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var y=d.yylloc;s.push(y);var f=d.options&&d.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,m,x,b,_,v,k,w,S={};;){if(m=i[i.length-1],this.defaultActions[m]?x=this.defaultActions[m]:(null==g&&(g=function(){var t;return"number"!=typeof(t=r.pop()||d.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}()),x=a[m]&&a[m][g]),void 0===x||!x.length||!x[0]){var $="";for(_ in w=[],a[m])this.terminals_[_]&&_>2&&w.push("'"+this.terminals_[_]+"'");$=d.showPosition?"Parse error on line "+(o+1)+":\n"+d.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError($,{text:d.match,token:this.terminals_[g]||g,line:d.yylineno,loc:y,expected:w})}if(x[0]instanceof Array&&x.length>1)throw Error("Parse Error: multiple actions possible at state: "+m+", token: "+g);switch(x[0]){case 1:i.push(g),n.push(d.yytext),s.push(d.yylloc),i.push(x[1]),g=null,c=d.yyleng,l=d.yytext,o=d.yylineno,y=d.yylloc;break;case 2:if(v=this.productions_[x[1]][1],S.$=n[n.length-v],S._$={first_line:s[s.length-(v||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(v||1)].first_column,last_column:s[s.length-1].last_column},f&&(S._$.range=[s[s.length-(v||1)].range[0],s[s.length-1].range[1]]),void 0!==(b=this.performAction.apply(S,[l,c,o,u.yy,x[1],n,s].concat(h))))return b;v&&(i=i.slice(0,-1*v*2),n=n.slice(0,-1*v),s=s.slice(0,-1*v)),i.push(this.productions_[x[1]][0]),n.push(S.$),s.push(S._$),k=a[i[i.length-2]][i[i.length-1]],i.push(k);break;case 3:return!0}}return!0}};function y(){this.yy={}}return p.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},// resets the lexer, sets new input
setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},// consumes and returns one char from the input
input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},// unshifts one char (or a string) into the input
unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},// When called from action, caches matched text and appends it on next action
more:function(){return this._more=!0,this},// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},// retain first n characters of the match
less:function(t){this.unput(this.match.slice(t))},// displays already matched input, i.e. for error messages
pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},// displays upcoming input, i.e. for error messages
upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(t,e){var i,r,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in n)this[s]=n[s];return!1},// return next match in input
next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,r,n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},// return next match that has a token
lex:function(){return this.next()||this.lex()},// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function(t){this.conditionStack.push(t)},// pop the previously active lexer condition state off the condition stack
popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},// alias for begin(condition)
pushState:function(t){this.begin(t)},// return the number of states currently on the stack
stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}},y.prototype=p,p.Parser=y,new y}();l.parser=l;let o="",c=0,h=[],d=[],u=[],p=()=>n.I,y=(t,e,i)=>{(0,n.J)(globalThis,t,e,i)},f=function(){h.length=0,d.length=0,o="",u.length=0,(0,n.v)()},g=function(t){o=t,h.push(t)},m=function(){return h},x=function(){let t=k(),e=0;for(;!t&&e<100;)t=k(),e++;return d.push(...u),d},b=function(t,e,i){let r={id:c++,section:o,type:o,task:t,score:e||0,//if event is defined, then add it the events array
events:i?[i]:[]};u.push(r)},_=function(t){let e=u.find(t=>t.id===c-1);e.events.push(t)},v=function(t){let e={section:o,type:o,description:t,task:t,classes:[]};d.push(e)},k=function(){let t=!0;for(let[e,i]of u.entries())u[e].processed,t=t&&i.processed;return t},w=/* @__PURE__ */Object.freeze(/* @__PURE__ */Object.defineProperty({__proto__:null,addEvent:_,addSection:g,addTask:b,addTaskOrg:v,clear:f,default:{clear:f,getCommonDb:p,addSection:g,getSections:m,getTasks:x,addTask:b,addTaskOrg:v,addEvent:_,parseDirective:y},getCommonDb:p,getSections:m,getTasks:x,parseDirective:y},Symbol.toStringTag,{value:"Module"})),S=function(t,e){let i=t.append("rect");return i.attr("x",e.x),i.attr("y",e.y),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("width",e.width),i.attr("height",e.height),i.attr("rx",e.rx),i.attr("ry",e.ry),void 0!==e.class&&i.attr("class",e.class),i},$=function(t,e){let i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");return r.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){let i=(0,s.arc)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(r):e.score<3?function(t){let i=(0,s.arc)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(r):function(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(r),i},E=function(t,e){let i=e.text.replace(/<br\s*\/?>/gi," "),r=t.append("text");r.attr("x",e.x),r.attr("y",e.y),r.attr("class","legend"),r.style("text-anchor",e.anchor),void 0!==e.class&&r.attr("class",e.class);let n=r.append("tspan");return n.attr("x",e.x+2*e.textMargin),n.text(i),r},I=-1,j=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},M=function(){function t(t,e,i,n,s,a,l,o){let c=e.append("text").attr("x",i+s/2).attr("y",n+a/2+5).style("font-color",o).style("text-anchor","middle").text(t);r(c,l)}function e(t,e,i,n,s,a,l,o,c){let{taskFontSize:h,taskFontFamily:d}=o,u=t.split(/<br\s*\/?>/gi);for(let t=0;t<u.length;t++){let o=t*h-h*(u.length-1)/2,p=e.append("text").attr("x",i+s/2).attr("y",n).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",d);p.append("tspan").attr("x",i+s/2).attr("dy",o).text(u[t]),p.attr("y",n+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(p,l)}}function i(t,i,n,s,a,l,o,c){let h=i.append("switch"),d=h.append("foreignObject").attr("x",n).attr("y",s).attr("width",a).attr("height",l).attr("position","fixed"),u=d.append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,n,s,a,l,o,c),r(u,o)}function r(t,e){for(let i in e)i in e&&t.attr(i,e[i])}return function(r){return"fo"===r.textPlacement?i:"old"===r.textPlacement?t:e}}();function N(t,e){t.each(function(){var t,i=(0,s.select)(this),r=i.text().split(/(\s+|<br>)/).reverse(),n=[],a=i.attr("y"),l=parseFloat(i.attr("dy")),o=i.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",l+"em");for(let s=0;s<r.length;s++)t=r[r.length-1-s],n.push(t),o.text(n.join(" ").trim()),(o.node().getComputedTextLength()>e||"<br>"===t)&&(n.pop(),o.text(n.join(" ").trim()),n="<br>"===t?[""]:[t],o=i.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))})}let P=function(t,e,i){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${-e.height+10} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+i).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},A={drawRect:S,drawCircle:function(t,e){let i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i},drawSection:function(t,e,i){let r=t.append("g"),n=j();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=i.width,n.height=i.height,n.class="journey-section section-type-"+e.num,n.rx=3,n.ry=3,S(r,n),M(i)(e.text,r,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+e.num},i,e.colour)},drawText:E,drawLabel:function(t,e){var i,r;let n=t.append("polygon");n.attr("points",(i=e.x)+","+(r=e.y)+" "+(i+50)+","+r+" "+(i+50)+","+(r+20-7)+" "+(i+50-8.4)+","+(r+20)+" "+i+","+(r+20)),n.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,E(t,e)},drawTask:function(t,e,i){let r=e.x+i.width/2,n=t.append("g");I++,n.append("line").attr("id","task"+I).attr("x1",r).attr("y1",e.y).attr("x2",r).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),$(n,{cx:r,cy:300+(5-e.score)*30,score:e.score});let s=j();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=i.width,s.height=i.height,s.class="task task-type-"+e.num,s.rx=3,s.ry=3,S(n,s),e.x,M(i)(e.task,n,s.x,s.y,s.width,s.height,{class:"task"},i,e.colour)},drawBackgroundRect:function(t,e){let i=S(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"});i.lower()},getTextObj:function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},getNoteRect:j,initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},drawNode:function(t,e,i,r){let n=i%12-1,s=t.append("g");e.section=n,s.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+n);let a=s.append("g"),l=s.append("g"),o=l.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(N,e.width),c=o.node().getBBox(),h=r.fontSize&&r.fontSize.replace?r.fontSize.replace("px",""):r.fontSize;return e.height=c.height+.55*h+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,l.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),P(a,e,n),e},getVirtualNodeHeight:function(t,e,i){let r=t.append("g"),n=r.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(N,e.width),s=n.node().getBBox(),a=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return r.remove(),s.height+.55*a+e.padding}},L=function(t,e,i,r,s,a,l,o,c,h,d){var u;for(let o of e){let e={descr:o.task,section:i,number:i,width:150,padding:20,maxHeight:a};(0,n.l).debug("taskNode",e);let p=t.append("g").attr("class","taskWrapper"),y=A.drawNode(p,e,i,l),f=y.height;if((0,n.l).debug("taskHeight after draw",f),p.attr("transform",`translate(${r}, ${s})`),a=Math.max(a,f),o.events){let e=t.append("g").attr("class","lineWrapper");s+=100,O(t,o.events,i,r,s,l),s-=100,e.append("line").attr("x1",r+95).attr("y1",s+a).attr("x2",r+95).attr("y2",s+a+(d?a:h)+c+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}r+=200,d&&!(null==(u=l.timeline)?void 0:u.disableMulticolor)&&i++}},O=function(t,e,i,r,s,a){let l=0,o=s;for(let o of(s+=100,e)){let e={descr:o,section:i,number:i,width:150,padding:20,maxHeight:50};(0,n.l).debug("eventNode",e);let c=t.append("g").attr("class","eventWrapper"),h=A.drawNode(c,e,i,a),d=h.height;l+=d,c.attr("transform",`translate(${r}, ${s})`),s=s+10+d}return s=o,l},T=t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,a.isDark)(t["lineColor"+e])?t["lineColor"+e]=(0,a.lighten)(t["lineColor"+e],20):t["lineColor"+e]=(0,a.darken)(t["lineColor"+e],20);for(let i=0;i<t.THEME_COLOR_LIMIT;i++){let r=""+(17-3*i);e+=`
    .section-${i-1} rect, .section-${i-1} path, .section-${i-1} circle, .section-${i-1} path  {
      fill: ${t["cScale"+i]};
    }
    .section-${i-1} text {
     fill: ${t["cScaleLabel"+i]};
    }
    .node-icon-${i-1} {
      font-size: 40px;
      color: ${t["cScaleLabel"+i]};
    }
    .section-edge-${i-1}{
      stroke: ${t["cScale"+i]};
    }
    .edge-depth-${i-1}{
      stroke-width: ${r};
    }
    .section-${i-1} line {
      stroke: ${t["cScaleInv"+i]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t["cScaleLabel"+i]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return e},D={db:w,renderer:{setConf:()=>{},draw:function(t,e,i,r){var a,l,o,c;let h;let d=(0,n.c)(),u=d.leftMargin??50;null==(l=(a=r.db).clear)||l.call(a),r.parser.parse(t+"\n"),(0,n.l).debug("timeline",r.db);let p=d.securityLevel;"sandbox"===p&&(h=(0,s.select)("#i"+e));let y="sandbox"===p?(0,s.select)(h.nodes()[0].contentDocument.body):(0,s.select)("body"),f=y.select("#"+e);f.append("g");let g=r.db.getTasks(),m=r.db.getCommonDb().getDiagramTitle();(0,n.l).debug("task",g),A.initGraphics(f);let x=r.db.getSections();(0,n.l).debug("sections",x);let b=0,_=0,v=0,k=0,w=50+u,S=50;k=50;let $=0,E=!0;x.forEach(function(t){let e={number:$,descr:t,section:$,width:150,padding:20,maxHeight:b},i=A.getVirtualNodeHeight(f,e,d);(0,n.l).debug("sectionHeight before draw",i),b=Math.max(b,i+20)});let I=0,j=0;for(let[t,e]of((0,n.l).debug("tasks.length",g.length),g.entries())){let i={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:_},r=A.getVirtualNodeHeight(f,i,d);(0,n.l).debug("taskHeight before draw",r),_=Math.max(_,r+20),I=Math.max(I,e.events.length);let s=0;for(let t=0;t<e.events.length;t++){let i=e.events[t],r={descr:i,section:e.section,number:e.section,width:150,padding:20,maxHeight:50};s+=A.getVirtualNodeHeight(f,r,d)}j=Math.max(j,s)}(0,n.l).debug("maxSectionHeight before draw",b),(0,n.l).debug("maxTaskHeight before draw",_),x&&x.length>0?x.forEach(t=>{let e=g.filter(e=>e.section===t),i={number:$,descr:t,section:$,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:b};(0,n.l).debug("sectionNode",i);let r=f.append("g"),s=A.drawNode(r,i,$,d);(0,n.l).debug("sectionNode output",s),r.attr("transform",`translate(${w}, ${k})`),S+=b+50,e.length>0&&L(f,e,$,w,S,_,d,I,j,b,!1),w+=200*Math.max(e.length,1),S=k,$++}):(E=!1,L(f,g,$,w,S,_,d,I,j,b,!0));let M=f.node().getBBox();(0,n.l).debug("bounds",M),m&&f.append("text").text(m).attr("x",M.width/2-u).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),v=E?b+_+150:_+100;let N=f.append("g").attr("class","lineWrapper");N.append("line").attr("x1",u).attr("y1",v).attr("x2",M.width+3*u).attr("y2",v).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,n.p)(void 0,f,(null==(o=d.timeline)?void 0:o.padding)??50,(null==(c=d.timeline)?void 0:c.useMaxWidth)??!1)}},parser:l,styles:t=>`
  .edge {
    stroke-width: 3;
  }
  ${T(t)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`}},{"./mermaid-b0ad2de1.js":"42V0c",d3:"ahWNw",khroma:"kb6Zw","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM","lodash-es/memoize.js":"kSZfU",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=timeline-definition-5ed366f4.8b7b0e52.js.map
;
//# sourceMappingURL=timeline-definition-5ed366f4.8b7b0e52.js.map
