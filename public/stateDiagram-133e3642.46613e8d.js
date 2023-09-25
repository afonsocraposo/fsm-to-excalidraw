!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(t,e,i,s,r){/* eslint-disable no-undef */var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof n[s]&&n[s],a=o.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(e,i){if(!a[e]){if(!t[e]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof n[s]&&n[s];if(!i&&r)return r(e,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(o)return o(e,!0);// Try the node require function if it exists.
if(c&&"string"==typeof e)return c(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}d.resolve=function(i){var s=t[e][1][i];return null!=s?s:i},d.cache={};var u=a[e]=new l.Module(e);t[e][0].call(u.exports,d,u,u.exports,this)}return a[e].exports;function d(t){var e=d.resolve(t);return!1===e?{}:l(e)}}l.isParcelRequire=!0,l.Module=function(t){this.id=t,this.bundle=l,this.exports={}},l.modules=t,l.cache=a,l.parent=o,l.register=function(e,i){t[e]=[function(t,e){e.exports=i},{}]},Object.defineProperty(l,"root",{get:function(){return n[s]}}),n[s]=l;for(var h=0;h<e.length;h++)l(e[h]);if(i){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var u=l(i);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd?define(function(){return u}):r&&(this[r]=u)}}({i5tjy:[function(t,e,i){var s=t("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(i),s.export(i,"D",()=>h),s.export(i,"S",()=>l),s.export(i,"a",()=>u),s.export(i,"b",()=>c),s.export(i,"c",()=>a),s.export(i,"d",()=>B),s.export(i,"p",()=>o),s.export(i,"s",()=>F);var r=t("./mermaid-b0ad2de1.js"),n=function(){var t=function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},e=[1,2],i=[1,3],s=[1,5],r=[1,7],n=[2,5],o=[1,15],a=[1,17],c=[1,21],l=[1,22],h=[1,23],u=[1,24],d=[1,37],p=[1,25],y=[1,26],f=[1,27],m=[1,28],g=[1,29],_=[1,32],S=[1,33],b=[1,34],k=[1,35],T=[1,36],v=[1,39],E=[1,40],x=[1,41],D=[1,42],$=[1,38],C=[1,45],A=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],L=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],I=[1,4,5,7,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],O=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],N={trace:function(){},yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,directive:6,SD:7,document:8,line:9,statement:10,classDefStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,class:42,CLASSENTITY_IDS:43,STYLECLASS:44,openDirective:45,typeDirective:46,closeDirective:47,":":48,argDirective:49,direction_tb:50,direction_bt:51,direction_rl:52,direction_lr:53,eol:54,";":55,EDGE_STATE:56,STYLE_SEPARATOR:57,left_of:58,right_of:59,open_directive:60,type_directive:61,arg_directive:62,close_directive:63,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",7:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"class",43:"CLASSENTITY_IDS",44:"STYLECLASS",48:":",50:"direction_tb",51:"direction_bt",52:"direction_rl",53:"direction_lr",55:";",56:"EDGE_STATE",57:"STYLE_SEPARATOR",58:"left_of",59:"right_of",60:"open_directive",61:"type_directive",62:"arg_directive",63:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[9,1],[9,1],[10,1],[10,1],[10,1],[10,2],[10,3],[10,4],[10,1],[10,2],[10,1],[10,4],[10,3],[10,6],[10,1],[10,1],[10,1],[10,1],[10,4],[10,4],[10,1],[10,1],[10,2],[10,2],[10,1],[11,3],[11,3],[12,3],[6,3],[6,5],[32,1],[32,1],[32,1],[32,1],[54,1],[54,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1],[45,1],[46,1],[49,1],[47,1]],performAction:function(t,e,i,s,r,n,o){var a=n.length-1;switch(r){case 4:return s.setRootDoc(n[a]),n[a];case 5:this.$=[];break;case 6:"nl"!=n[a]&&(n[a-1].push(n[a]),this.$=n[a-1]);break;case 7:case 8:case 12:this.$=n[a];break;case 9:this.$="nl";break;case 13:let c=n[a-1];c.description=s.trimColon(n[a]),this.$=c;break;case 14:this.$={stmt:"relation",state1:n[a-2],state2:n[a]};break;case 15:let l=s.trimColon(n[a]);this.$={stmt:"relation",state1:n[a-3],state2:n[a-1],description:l};break;case 19:this.$={stmt:"state",id:n[a-3],type:"default",description:"",doc:n[a-1]};break;case 20:var h=n[a],u=n[a-2].trim();if(n[a].match(":")){var d=n[a].split(":");h=d[0],u=[u,d[1]]}this.$={stmt:"state",id:h,type:"default",description:u};break;case 21:this.$={stmt:"state",id:n[a-3],type:"default",description:n[a-5],doc:n[a-1]};break;case 22:this.$={stmt:"state",id:n[a],type:"fork"};break;case 23:this.$={stmt:"state",id:n[a],type:"join"};break;case 24:this.$={stmt:"state",id:n[a],type:"choice"};break;case 25:this.$={stmt:"state",id:s.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:n[a-1].trim(),note:{position:n[a-2].trim(),text:n[a].trim()}};break;case 30:this.$=n[a].trim(),s.setAccTitle(this.$);break;case 31:case 32:this.$=n[a].trim(),s.setAccDescription(this.$);break;case 33:case 34:this.$={stmt:"classDef",id:n[a-1].trim(),classes:n[a].trim()};break;case 35:this.$={stmt:"applyClass",id:n[a-1].trim(),styleClass:n[a].trim()};break;case 38:s.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:s.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:s.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:s.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:n[a].trim(),type:"default",description:""};break;case 46:case 47:this.$={stmt:"state",id:n[a-2].trim(),classes:[n[a].trim()],type:"default",description:""};break;case 50:s.parseDirective("%%{","open_directive");break;case 51:s.parseDirective(n[a],"type_directive");break;case 52:n[a]=n[a].trim().replace(/'/g,'"'),s.parseDirective(n[a],"arg_directive");break;case 53:s.parseDirective("}%%","close_directive","state")}},table:[{3:1,4:e,5:i,6:4,7:s,45:6,60:r},{1:[3]},{3:8,4:e,5:i,6:4,7:s,45:6,60:r},{3:9,4:e,5:i,6:4,7:s,45:6,60:r},{3:10,4:e,5:i,6:4,7:s,45:6,60:r},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],n,{8:11}),{46:12,61:[1,13]},{61:[2,50]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4],4:o,5:a,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,22:u,24:d,25:p,26:y,27:f,28:m,29:g,32:31,33:_,35:S,37:b,38:k,42:T,45:6,50:v,51:E,52:x,53:D,56:$,60:r},{47:43,48:[1,44],63:C},t([48,63],[2,51]),t(A,[2,6]),{6:30,10:46,11:18,12:19,13:20,16:c,17:l,19:h,22:u,24:d,25:p,26:y,27:f,28:m,29:g,32:31,33:_,35:S,37:b,38:k,42:T,45:6,50:v,51:E,52:x,53:D,56:$,60:r},t(A,[2,8]),t(A,[2,9]),t(A,[2,10]),t(A,[2,11]),t(A,[2,12],{14:[1,47],15:[1,48]}),t(A,[2,16]),{18:[1,49]},t(A,[2,18],{20:[1,50]}),{23:[1,51]},t(A,[2,22]),t(A,[2,23]),t(A,[2,24]),t(A,[2,25]),{30:52,31:[1,53],58:[1,54],59:[1,55]},t(A,[2,28]),t(A,[2,29]),{34:[1,56]},{36:[1,57]},t(A,[2,32]),{39:[1,58],41:[1,59]},{43:[1,60]},t(L,[2,44],{57:[1,61]}),t(L,[2,45],{57:[1,62]}),t(A,[2,38]),t(A,[2,39]),t(A,[2,40]),t(A,[2,41]),t(I,[2,36]),{49:63,62:[1,64]},t(I,[2,53]),t(A,[2,7]),t(A,[2,13]),{13:65,24:d,56:$},t(A,[2,17]),t(O,n,{8:66}),{24:[1,67]},{24:[1,68]},{23:[1,69]},{24:[2,48]},{24:[2,49]},t(A,[2,30]),t(A,[2,31]),{40:[1,70]},{40:[1,71]},{44:[1,72]},{24:[1,73]},{24:[1,74]},{47:75,63:C},{63:[2,52]},t(A,[2,14],{14:[1,76]}),{4:o,5:a,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,21:[1,77],22:u,24:d,25:p,26:y,27:f,28:m,29:g,32:31,33:_,35:S,37:b,38:k,42:T,45:6,50:v,51:E,52:x,53:D,56:$,60:r},t(A,[2,20],{20:[1,78]}),{31:[1,79]},{24:[1,80]},t(A,[2,33]),t(A,[2,34]),t(A,[2,35]),t(L,[2,46]),t(L,[2,47]),t(I,[2,37]),t(A,[2,15]),t(A,[2,19]),t(O,n,{8:81}),t(A,[2,26]),t(A,[2,27]),{4:o,5:a,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,21:[1,82],22:u,24:d,25:p,26:y,27:f,28:m,29:g,32:31,33:_,35:S,37:b,38:k,42:T,45:6,50:v,51:E,52:x,53:D,56:$,60:r},t(A,[2,21])],defaultActions:{7:[2,50],8:[2,1],9:[2,2],10:[2,3],54:[2,48],55:[2,49],64:[2,52]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],s=[],r=[null],n=[],o=this.table,a="",c=0,l=0,h=n.slice.call(arguments,1),u=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);u.setInput(t,d.yy),d.yy.lexer=u,d.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var y=u.yylloc;n.push(y);var f=u.options&&u.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,g,_,S,b,k,T,v,E={};;){if(g=i[i.length-1],this.defaultActions[g]?_=this.defaultActions[g]:(null==m&&(m=function(){var t;return"number"!=typeof(t=s.pop()||u.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}()),_=o[g]&&o[g][m]),void 0===_||!_.length||!_[0]){var x="";for(b in v=[],o[g])this.terminals_[b]&&b>2&&v.push("'"+this.terminals_[b]+"'");x=u.showPosition?"Parse error on line "+(c+1)+":\n"+u.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(x,{text:u.match,token:this.terminals_[m]||m,line:u.yylineno,loc:y,expected:v})}if(_[0]instanceof Array&&_.length>1)throw Error("Parse Error: multiple actions possible at state: "+g+", token: "+m);switch(_[0]){case 1:i.push(m),r.push(u.yytext),n.push(u.yylloc),i.push(_[1]),m=null,l=u.yyleng,a=u.yytext,c=u.yylineno,y=u.yylloc;break;case 2:if(k=this.productions_[_[1]][1],E.$=r[r.length-k],E._$={first_line:n[n.length-(k||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(k||1)].first_column,last_column:n[n.length-1].last_column},f&&(E._$.range=[n[n.length-(k||1)].range[0],n[n.length-1].range[1]]),void 0!==(S=this.performAction.apply(E,[a,l,c,d.yy,_[1],r,n].concat(h))))return S;k&&(i=i.slice(0,-1*k*2),r=r.slice(0,-1*k),n=n.slice(0,-1*k)),i.push(this.productions_[_[1]][0]),r.push(E.$),n.push(E._$),T=o[i[i.length-2]][i[i.length-1]],i.push(T);break;case 3:return!0}}return!0}};function R(){this.yy={}}return N.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},// resets the lexer, sets new input
setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},// consumes and returns one char from the input
input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},// unshifts one char (or a string) into the input
unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},// When called from action, caches matched text and appends it on next action
more:function(){return this._more=!0,this},// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},// retain first n characters of the match
less:function(t){this.unput(this.match.slice(t))},// displays already matched input, i.e. for error messages
pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},// displays upcoming input, i.e. for error messages
upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(t,e){var i,s,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},// return next match in input
next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,r=this._currentRules(),n=0;n<r.length;n++)if((i=this._input.match(this.rules[r[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},// return next match that has a token
lex:function(){return this.next()||this.lex()},// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function(t){this.conditionStack.push(t)},// pop the previously active lexer condition state off the condition stack
popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},// alias for begin(condition)
pushState:function(t){this.begin(t)},// return the number of states currently on the stack
stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,s){switch(i){case 0:return 41;case 1:case 44:return 50;case 2:case 45:return 51;case 3:case 46:return 52;case 4:case 47:return 53;case 5:return this.begin("open_directive"),60;case 6:return this.begin("type_directive"),61;case 7:return this.popState(),this.begin("arg_directive"),48;case 8:return this.popState(),this.popState(),63;case 9:return 62;case 10:case 11:case 13:case 14:case 15:case 16:case 56:case 58:case 64:break;case 12:case 79:return 5;case 17:case 34:return this.pushState("SCALE"),17;case 18:case 35:return 18;case 19:case 25:case 36:case 51:case 54:this.popState();break;case 20:return this.begin("acc_title"),33;case 21:return this.popState(),"acc_title_value";case 22:return this.begin("acc_descr"),35;case 23:return this.popState(),"acc_descr_value";case 24:this.begin("acc_descr_multiline");break;case 26:return"acc_descr_multiline_value";case 27:return this.pushState("CLASSDEF"),38;case 28:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 29:return this.popState(),this.pushState("CLASSDEFID"),39;case 30:return this.popState(),40;case 31:return this.pushState("CLASS"),42;case 32:return this.popState(),this.pushState("CLASS_STYLE"),43;case 33:return this.popState(),44;case 37:this.pushState("STATE");break;case 38:case 41:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 39:case 42:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 40:case 43:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 48:this.pushState("STATE_STRING");break;case 49:return this.pushState("STATE_ID"),"AS";case 50:case 66:return this.popState(),"ID";case 52:return"STATE_DESCR";case 53:return 19;case 55:return this.popState(),this.pushState("struct"),20;case 57:return this.popState(),21;case 59:return this.begin("NOTE"),29;case 60:return this.popState(),this.pushState("NOTE_ID"),58;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:this.popState(),this.pushState("FLOATING_NOTE");break;case 63:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 65:return"NOTE_TEXT";case 67:return this.popState(),this.pushState("NOTE_TEXT"),24;case 68:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 69:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 70:case 71:return 7;case 72:return 16;case 73:return 56;case 74:return 24;case 75:return e.yytext=e.yytext.trim(),14;case 76:return 15;case 77:return 28;case 78:return 57;case 80:return"INVALID"}},rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[14,15],inclusive:!1},close_directive:{rules:[14,15],inclusive:!1},arg_directive:{rules:[8,9,14,15],inclusive:!1},type_directive:{rules:[7,8,14,15],inclusive:!1},open_directive:{rules:[6,14,15],inclusive:!1},struct:{rules:[14,15,27,31,37,44,45,46,47,56,57,58,59,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[66],inclusive:!1},FLOATING_NOTE:{rules:[63,64,65],inclusive:!1},NOTE_TEXT:{rules:[68,69],inclusive:!1},NOTE_ID:{rules:[67],inclusive:!1},NOTE:{rules:[60,61,62],inclusive:!1},CLASS_STYLE:{rules:[33],inclusive:!1},CLASS:{rules:[32],inclusive:!1},CLASSDEFID:{rules:[30],inclusive:!1},CLASSDEF:{rules:[28,29],inclusive:!1},acc_descr_multiline:{rules:[25,26],inclusive:!1},acc_descr:{rules:[23],inclusive:!1},acc_title:{rules:[21],inclusive:!1},SCALE:{rules:[18,19,35,36],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[50],inclusive:!1},STATE_STRING:{rules:[51,52],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[14,15,38,39,40,41,42,43,48,49,53,54,55],inclusive:!1},ID:{rules:[14,15],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,10,11,12,13,15,16,17,20,22,24,27,31,34,37,55,59,70,71,72,73,74,75,76,78,79,80],inclusive:!0}}},R.prototype=N,N.Parser=R,new R}();n.parser=n;let o=n,a="TB",c="state",l="relation",h="default",u="divider",d="start",p="color",y="fill",f="LR",m=[],g={},_=()=>({relations:[],states:{},documents:{}}),S={root:_()},b=S.root,k=0,T=0,v=t=>JSON.parse(JSON.stringify(t)),E=(t,e,i)=>{if(e.stmt===l)E(t,e.state1,!0),E(t,e.state2,!1);else if(e.stmt===c&&("[*]"===e.id?(e.id=i?t.id+"_start":t.id+"_end",e.start=i):e.id=e.id.trim()),e.doc){let t;let i=[],s=[];for(t=0;t<e.doc.length;t++)if(e.doc[t].type===u){let r=v(e.doc[t]);r.doc=v(s),i.push(r),s=[]}else s.push(e.doc[t]);if(i.length>0&&s.length>0){let t={stmt:c,id:(0,r.F)(),type:"divider",doc:v(s)};i.push(v(t)),e.doc=i}e.doc.forEach(t=>E(e,t,!0))}},x=function(t,e=h,i=null,s=null,n=null,o=null,a=null,c=null){let l=null==t?void 0:t.trim();if(void 0===b.states[l]?((0,r.l).info("Adding state ",l,s),b.states[l]={id:l,descriptions:[],type:e,doc:i,note:n,classes:[],styles:[],textStyles:[]}):(b.states[l].doc||(b.states[l].doc=i),b.states[l].type||(b.states[l].type=e)),s&&((0,r.l).info("Setting state description",l,s),"string"==typeof s&&I(l,s.trim()),"object"==typeof s&&s.forEach(t=>I(l,t.trim()))),n&&(b.states[l].note=n,b.states[l].note.text=(0,r.e).sanitizeText(b.states[l].note.text,(0,r.c)())),o){(0,r.l).info("Setting state classes",l,o);let t="string"==typeof o?[o]:o;t.forEach(t=>N(l,t.trim()))}if(a){(0,r.l).info("Setting state styles",l,a);let t="string"==typeof a?[a]:a;t.forEach(t=>R(l,t.trim()))}c&&((0,r.l).info("Setting state styles",l,a),("string"==typeof c?[c]:c).forEach(t=>w(l,t.trim())))},D=function(t){b=(S={root:_()}).root,k=0,g={},t||(0,r.v)()},$=function(t){return b.states[t]};function C(t=""){let e=t;return"[*]"===t&&(k++,e=`${d}${k}`),e}function A(t="",e=h){return"[*]"===t?d:e}let L=function(t,e,i){if("object"==typeof t){let s,n,o,a;s=C(t.id.trim()),n=A(t.id.trim(),t.type),o=C(e.id.trim()),a=A(e.id.trim(),e.type),x(s,n,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),x(o,a,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),b.relations.push({id1:s,id2:o,relationTitle:(0,r.e).sanitizeText(i,(0,r.c)())})}else{let s=C(t.trim()),n=A(t),o=function(t=""){let e=t;return"[*]"===t&&(k++,e=`end${k}`),e}(e.trim()),a=function(t="",e=h){return"[*]"===t?"end":e}(e);x(s,n),x(o,a),b.relations.push({id1:s,id2:o,title:(0,r.e).sanitizeText(i,(0,r.c)())})}},I=function(t,e){let i=b.states[t],s=e.startsWith(":")?e.replace(":","").trim():e;i.descriptions.push((0,r.e).sanitizeText(s,(0,r.c)()))},O=function(t,e=""){void 0===g[t]&&(g[t]={id:t,styles:[],textStyles:[]});let i=g[t];null!=e&&e.split(",").forEach(t=>{let e=t.replace(/([^;]*);/,"$1").trim();if(t.match(p)){let t=e.replace(y,"bgFill"),s=t.replace(p,y);i.textStyles.push(s)}i.styles.push(e)})},N=function(t,e){t.split(",").forEach(function(t){let i=$(t);if(void 0===i){let e=t.trim();x(e),i=$(e)}i.classes.push(e)})},R=function(t,e){let i=$(t);void 0!==i&&i.textStyles.push(e)},w=function(t,e){let i=$(t);void 0!==i&&i.textStyles.push(e)},B={parseDirective:function(t,e,i){(0,r.m).parseDirective(this,t,e,i)},getConfig:()=>(0,r.c)().state,addState:x,clear:D,getState:$,getStates:function(){return b.states},getRelations:function(){return b.relations},getClasses:function(){return g},getDirection:()=>f,addRelation:L,getDividerId:()=>"divider-id-"+ ++T,setDirection:t=>{f=t},cleanupLabel:function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()},lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:function(){(0,r.l).info("Documents = ",S)},getRootDoc:()=>m,setRootDoc:t=>{(0,r.l).info("Setting root doc",t),m=t},getRootDocV2:()=>(E({id:"root"},{id:"root",doc:m},!0),{id:"root",doc:m}),extract:t=>{let e;e=t.doc?t.doc:t,(0,r.l).info(e),D(!0),(0,r.l).info("Extract",e),e.forEach(t=>{switch(t.stmt){case c:x(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case l:L(t.state1,t.state2,t.description);break;case"classDef":O(t.id.trim(),t.classes);break;case"applyClass":N(t.id.trim(),t.styleClass)}})},trimColon:t=>t&&":"===t[0]?t.substr(1).trim():t.trim(),getAccTitle:r.g,setAccTitle:r.s,getAccDescription:r.a,setAccDescription:r.b,addStyleClass:O,setCssClass:N,addDescription:I,setDiagramTitle:r.r,getDiagramTitle:r.t},F=t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`},{"./mermaid-b0ad2de1.js":"42V0c","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=stateDiagram-133e3642.46613e8d.js.map
;
//# sourceMappingURL=stateDiagram-133e3642.46613e8d.js.map
