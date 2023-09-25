!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(t,e,i,r,n){/* eslint-disable no-undef */var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[r]&&s[r],o=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,i){if(!o[e]){if(!t[e]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var n="function"==typeof s[r]&&s[r];if(!i&&n)return n(e,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(a)return a(e,!0);// Try the node require function if it exists.
if(l&&"string"==typeof e)return l(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}p.resolve=function(i){var r=t[e][1][i];return null!=r?r:i},p.cache={};var u=o[e]=new c.Module(e);t[e][0].call(u.exports,p,u,u.exports,this)}return o[e].exports;function p(t){var e=p.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=t,c.cache=o,c.parent=a,c.register=function(e,i){t[e]=[function(t,e){e.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return s[r]}}),s[r]=c;for(var h=0;h<e.length;h++)c(e[h]);if(i){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var u=c(i);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd?define(function(){return u}):n&&(this[n]=u)}}({"1nhFn":[function(t,e,i){var r=t("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(i),r.export(i,"diagram",()=>I);var n=t("./mermaid-b0ad2de1.js"),s=t("d3"),a=t("./svgDrawCommon-f26cad39.js");t("ts-dedent"),t("dayjs"),t("@braintree/sanitize-url"),t("dompurify"),t("khroma"),t("lodash-es/memoize.js"),t("stylis"),t("lodash-es/isEmpty.js");var o=function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[1,2],i=[1,5],r=[6,9,11,17,18,20,22,23,24,26],n=[1,15],s=[1,16],a=[1,17],o=[1,18],l=[1,19],c=[1,20],h=[1,24],u=[4,6,9,11,17,18,20,22,23,24,26],p={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,i,r,n,s,a){var o=s.length-1;switch(n){case 1:return s[o-1];case 3:case 7:case 8:this.$=[];break;case 4:s[o-1].push(s[o]),this.$=s[o-1];break;case 5:case 6:this.$=s[o];break;case 11:r.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 12:this.$=s[o].trim(),r.setAccTitle(this.$);break;case 13:case 14:this.$=s[o].trim(),r.setAccDescription(this.$);break;case 15:r.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 16:r.addTask(s[o-1],s[o]),this.$="task";break;case 18:r.parseDirective("%%{","open_directive");break;case 19:r.parseDirective(s[o],"type_directive");break;case 20:s[o]=s[o].trim().replace(/'/g,'"'),r.parseDirective(s[o],"arg_directive");break;case 21:r.parseDirective("}%%","close_directive","journey")}},table:[{3:1,4:e,7:3,12:4,26:i},{1:[3]},t(r,[2,3],{5:6}),{3:7,4:e,7:3,12:4,26:i},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:n,18:s,20:a,22:o,23:l,24:c,26:i},{1:[2,2]},{14:22,15:[1,23],29:h},t([15,29],[2,19]),t(r,[2,8],{1:[2,1]}),t(r,[2,4]),{7:21,10:25,12:4,17:n,18:s,20:a,22:o,23:l,24:c,26:i},t(r,[2,6]),t(r,[2,7]),t(r,[2,11]),{19:[1,26]},{21:[1,27]},t(r,[2,14]),t(r,[2,15]),{25:[1,28]},t(r,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},t(r,[2,5]),t(r,[2,12]),t(r,[2,13]),t(r,[2,16]),t(u,[2,9]),{14:32,29:h},{29:[2,20]},{11:[1,33]},t(u,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],r=[],n=[null],s=[],a=this.table,o="",l=0,c=0,h=s.slice.call(arguments,1),u=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);u.setInput(t,p.yy),p.yy.lexer=u,p.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var d=u.yylloc;s.push(d);var f=u.options&&u.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,m,x,k,_,b,v,w,$={};;){if(m=i[i.length-1],this.defaultActions[m]?x=this.defaultActions[m]:(null==g&&(g=function(){var t;return"number"!=typeof(t=r.pop()||u.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}()),x=a[m]&&a[m][g]),void 0===x||!x.length||!x[0]){var M="";for(_ in w=[],a[m])this.terminals_[_]&&_>2&&w.push("'"+this.terminals_[_]+"'");M=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(M,{text:u.match,token:this.terminals_[g]||g,line:u.yylineno,loc:d,expected:w})}if(x[0]instanceof Array&&x.length>1)throw Error("Parse Error: multiple actions possible at state: "+m+", token: "+g);switch(x[0]){case 1:i.push(g),n.push(u.yytext),s.push(u.yylloc),i.push(x[1]),g=null,c=u.yyleng,o=u.yytext,l=u.yylineno,d=u.yylloc;break;case 2:if(b=this.productions_[x[1]][1],$.$=n[n.length-b],$._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},f&&($._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(k=this.performAction.apply($,[o,c,l,p.yy,x[1],n,s].concat(h))))return k;b&&(i=i.slice(0,-1*b*2),n=n.slice(0,-1*b),s=s.slice(0,-1*b)),i.push(this.productions_[x[1]][0]),n.push($.$),s.push($._$),v=a[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}};function y(){this.yy={}}return p.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},// resets the lexer, sets new input
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
stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}},y.prototype=p,p.Parser=y,new y}();o.parser=o;let l="",c=[],h=[],u=[],p=function(){let t=[];h.forEach(e=>{e.people&&t.push(...e.people)});let e=new Set(t);return[...e].sort()},y=function(){let t=!0;for(let[e,i]of u.entries())u[e].processed,t=t&&i.processed;return t},d={parseDirective:function(t,e,i){(0,n.m).parseDirective(this,t,e,i)},getConfig:()=>(0,n.c)().journey,clear:function(){c.length=0,h.length=0,l="",u.length=0,(0,n.v)()},setDiagramTitle:n.r,getDiagramTitle:n.t,setAccTitle:n.s,getAccTitle:n.g,setAccDescription:n.b,getAccDescription:n.a,addSection:function(t){l=t,c.push(t)},getSections:function(){return c},getTasks:function(){let t=y(),e=0;for(;!t&&e<100;)t=y(),e++;return h.push(...u),h},addTask:function(t,e){let i=e.substr(1).split(":"),r=0,n=[];1===i.length?(r=Number(i[0]),n=[]):(r=Number(i[0]),n=i[1].split(","));let s=n.map(t=>t.trim()),a={section:l,type:l,people:s,task:t,score:r};u.push(a)},addTaskOrg:function(t){let e={section:l,type:l,description:t,task:t,classes:[]};h.push(e)},getActors:function(){return p()}},f=function(t,e){return(0,a.d)(t,e)},g=function(t,e){let i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");return r.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){let i=(0,s.arc)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(r):e.score<3?function(t){let i=(0,s.arc)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(r):function(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(r),i},m=function(t,e){let i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i},x=function(t,e){return(0,a.f)(t,e)},k=-1,_=function(){function t(t,e,i,n,s,a,o,l){let c=e.append("text").attr("x",i+s/2).attr("y",n+a/2+5).style("font-color",l).style("text-anchor","middle").text(t);r(c,o)}function e(t,e,i,n,s,a,o,l,c){let{taskFontSize:h,taskFontFamily:u}=l,p=t.split(/<br\s*\/?>/gi);for(let t=0;t<p.length;t++){let l=t*h-h*(p.length-1)/2,y=e.append("text").attr("x",i+s/2).attr("y",n).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",u);y.append("tspan").attr("x",i+s/2).attr("dy",l).text(p[t]),y.attr("y",n+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(y,o)}}function i(t,i,n,s,a,o,l,c){let h=i.append("switch"),u=h.append("foreignObject").attr("x",n).attr("y",s).attr("width",a).attr("height",o).attr("position","fixed"),p=u.append("xhtml:div").style("display","table").style("height","100%").style("width","100%");p.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,n,s,a,o,l,c),r(p,l)}function r(t,e){for(let i in e)i in e&&t.attr(i,e[i])}return function(r){return"fo"===r.textPlacement?i:"old"===r.textPlacement?t:e}}(),b={drawRect:f,drawCircle:m,drawSection:function(t,e,i){let r=t.append("g"),n=(0,a.g)();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=i.width*e.taskCount+// width of the tasks
i.diagramMarginX*(e.taskCount-1),n.height=i.height,n.class="journey-section section-type-"+e.num,n.rx=3,n.ry=3,f(r,n),_(i)(e.text,r,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+e.num},i,e.colour)},drawText:x,drawLabel:function(t,e){var i,r;let n=t.append("polygon");n.attr("points",(i=e.x)+","+(r=e.y)+" "+(i+50)+","+r+" "+(i+50)+","+(r+20-7)+" "+(i+50-8.4)+","+(r+20)+" "+i+","+(r+20)),n.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,x(t,e)},drawTask:function(t,e,i){let r=e.x+i.width/2,n=t.append("g");k++,n.append("line").attr("id","task"+k).attr("x1",r).attr("y1",e.y).attr("x2",r).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),g(n,{cx:r,cy:300+(5-e.score)*30,score:e.score});let s=(0,a.g)();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=i.width,s.height=i.height,s.class="task task-type-"+e.num,s.rx=3,s.ry=3,f(n,s);let o=e.x+14;e.people.forEach(t=>{let i=e.actors[t].color,r={cx:o,cy:e.y,r:7,fill:i,stroke:"#000",title:t,pos:e.actors[t].position};m(n,r),o+=10}),_(i)(e.task,n,s.x,s.y,s.width,s.height,{class:"task"},i,e.colour)},drawBackgroundRect:function(t,e){(0,a.a)(t,e)},initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}},v={},w=(0,n.c)().journey,$=w.leftMargin,M={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,i,r){void 0===t[e]?t[e]=i:t[e]=r(i,t[e])},updateBounds:function(t,e,i,r){let s=(0,n.c)().journey,a=this,o=0;this.sequenceItems.forEach(function(n){o++;let l=a.sequenceItems.length-o+1;a.updateVal(n,"starty",e-l*s.boxMargin,Math.min),a.updateVal(n,"stopy",r+l*s.boxMargin,Math.max),a.updateVal(M.data,"startx",t-l*s.boxMargin,Math.min),a.updateVal(M.data,"stopx",i+l*s.boxMargin,Math.max),a.updateVal(n,"startx",t-l*s.boxMargin,Math.min),a.updateVal(n,"stopx",i+l*s.boxMargin,Math.max),a.updateVal(M.data,"starty",e-l*s.boxMargin,Math.min),a.updateVal(M.data,"stopy",r+l*s.boxMargin,Math.max)})},insert:function(t,e,i,r){let n=Math.min(t,i),s=Math.max(t,i),a=Math.min(e,r),o=Math.max(e,r);this.updateVal(M.data,"startx",n,Math.min),this.updateVal(M.data,"starty",a,Math.min),this.updateVal(M.data,"stopx",s,Math.max),this.updateVal(M.data,"stopy",o,Math.max),this.updateBounds(n,a,s,o)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},j=w.sectionFills,E=w.sectionColours,T=function(t,e,i){let r=(0,n.c)().journey,s="",a=2*r.height+r.diagramMarginY,o=i+a,l=0,c="#CCC",h="black",u=0;for(let[i,n]of e.entries()){if(s!==n.section){c=j[l%j.length],u=l%j.length,h=E[l%E.length];let a=0,o=n.section;for(let t=i;t<e.length&&e[t].section==o;t++)a+=1;let p={x:i*r.taskMargin+i*r.width+$,y:50,text:n.section,fill:c,num:u,colour:h,taskCount:a};b.drawSection(t,p,r),s=n.section,l++}let a=n.people.reduce((t,e)=>(v[e]&&(t[e]=v[e]),t),{});n.x=i*r.taskMargin+i*r.width+$,n.y=o,n.width=r.diagramMarginX,n.height=r.diagramMarginY,n.colour=h,n.fill=c,n.num=u,n.actors=a,b.drawTask(t,n,r),M.insert(n.x,n.y,n.x+n.width+r.taskMargin,450)}},S={setConf:function(t){let e=Object.keys(t);e.forEach(function(e){w[e]=t[e]})},draw:function(t,e,i,r){let a;let o=(0,n.c)().journey;r.db.clear(),r.parser.parse(t+"\n");let l=(0,n.c)().securityLevel;"sandbox"===l&&(a=(0,s.select)("#i"+e));let c="sandbox"===l?(0,s.select)(a.nodes()[0].contentDocument.body):(0,s.select)("body");M.init();let h=c.select("#"+e);b.initGraphics(h);let u=r.db.getTasks(),p=r.db.getDiagramTitle(),y=r.db.getActors();for(let t in v)delete v[t];let d=0;y.forEach(t=>{v[t]={color:o.actorColours[d%o.actorColours.length],position:d},d++}),function(t){let e=(0,n.c)().journey,i=60;Object.keys(v).forEach(r=>{let n=v[r].color,s={cx:20,cy:i,r:7,fill:n,stroke:"#000",pos:v[r].position};b.drawCircle(t,s);let a={x:40,y:i+7,fill:"#666",text:r,textMargin:5|e.boxTextMargin};b.drawText(t,a),i+=20})}(h),M.insert(0,0,$,50*Object.keys(v).length),T(h,u,0);let f=M.getBounds();p&&h.append("text").text(p).attr("x",$).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);let g=f.stopy-f.starty+2*o.diagramMarginY,m=$+f.stopx+2*o.diagramMarginX;(0,n.i)(h,g,m,o.useMaxWidth),h.append("line").attr("x1",$).attr("y1",4*o.height).attr("x2",m-$-4).attr("y2",4*o.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let x=p?70:0;h.attr("viewBox",`${f.startx} -25 ${m} ${g+x}`),h.attr("preserveAspectRatio","xMinYMin meet"),h.attr("height",g+x+25)}},I={parser:o,db:d,renderer:S,styles:t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,init:t=>{S.setConf(t.journey),d.clear()}}},{"./mermaid-b0ad2de1.js":"42V0c",d3:"ahWNw","./svgDrawCommon-f26cad39.js":"4Eolg","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"4Eolg":[function(t,e,i){var r=t("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(i),r.export(i,"a",()=>a),r.export(i,"b",()=>c),r.export(i,"c",()=>l),r.export(i,"d",()=>s),r.export(i,"e",()=>u),r.export(i,"f",()=>o),r.export(i,"g",()=>h);var n=t("@braintree/sanitize-url");let s=function(t,e){let i=t.append("rect");if(i.attr("x",e.x),i.attr("y",e.y),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("width",e.width),i.attr("height",e.height),i.attr("rx",e.rx),i.attr("ry",e.ry),"undefined"!==e.attrs&&null!==e.attrs)for(let t in e.attrs)i.attr(t,e.attrs[t]);return"undefined"!==e.class&&i.attr("class",e.class),i},a=function(t,e){let i=s(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,stroke:e.stroke,class:"rect"});i.lower()},o=function(t,e){let i=e.text.replace(/<br\s*\/?>/gi," "),r=t.append("text");r.attr("x",e.x),r.attr("y",e.y),r.attr("class","legend"),r.style("text-anchor",e.anchor),void 0!==e.class&&r.attr("class",e.class);let n=r.append("tspan");return n.attr("x",e.x+2*e.textMargin),n.text(i),r},l=function(t,e,i,r){let s=t.append("image");s.attr("x",e),s.attr("y",i);var a=(0,n.sanitizeUrl)(r);s.attr("xlink:href",a)},c=function(t,e,i,r){let s=t.append("use");s.attr("x",e),s.attr("y",i);let a=(0,n.sanitizeUrl)(r);s.attr("xlink:href","#"+a)},h=function(){return{x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}},u=function(){return{x:0,y:0,width:100,height:100,fill:void 0,anchor:void 0,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0,valign:void 0}}},{"@braintree/sanitize-url":"eIPUt","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=journeyDiagram-31be0096.164772d6.js.map
;
//# sourceMappingURL=journeyDiagram-31be0096.164772d6.js.map
