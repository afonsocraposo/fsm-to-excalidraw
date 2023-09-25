!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,i,r,n){/* eslint-disable no-undef */var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[r]&&s[r],l=a.cache||{},o="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,i){if(!l[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var n="function"==typeof s[r]&&s[r];if(!i&&n)return n(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(a)return a(t,!0);// Try the node require function if it exists.
if(o&&"string"==typeof t)return o(t);var h=Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}d.resolve=function(i){var r=e[t][1][i];return null!=r?r:i},d.cache={};var u=l[t]=new c.Module(t);e[t][0].call(u.exports,d,u,u.exports,this)}return l[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=a,c.register=function(t,i){e[t]=[function(e,t){t.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return s[r]}}),s[r]=c;for(var h=0;h<t.length;h++)c(t[h]);if(i){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var u=c(i);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd?define(function(){return u}):n&&(this[n]=u)}}({"16RgO":[function(e,t,i){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(i),r.export(i,"diagram",()=>A);var n=e("./mermaid-b0ad2de1.js"),s=e("d3"),a=e("dagre-d3-es/src/dagre/index.js"),l=e("dagre-d3-es/src/graphlib/index.js");e("ts-dedent"),e("dayjs"),e("@braintree/sanitize-url"),e("dompurify"),e("khroma"),e("lodash-es/memoize.js"),e("stylis"),e("lodash-es/isEmpty.js");var o=function(){var e=function(e,t,i,r){for(i=i||{},r=e.length;r--;i[e[r]]=t);return i},t=[1,3],i=[1,5],r=[1,6],n=[1,7],s=[1,8],a=[5,6,8,14,16,18,19,40,41,42,43,44,45,53,71,72],l=[1,22],o=[2,13],c=[1,26],h=[1,27],u=[1,28],d=[1,29],y=[1,30],p=[1,31],_=[1,24],g=[1,32],f=[1,33],E=[1,36],m=[71,72],R=[5,8,14,16,18,19,40,41,42,43,44,45,53,60,62,71,72],I=[1,56],b=[1,57],k=[1,58],S=[1,59],T=[1,60],N=[1,61],v=[1,62],x=[62,63],A=[1,74],q=[1,70],O=[1,71],w=[1,72],$=[1,73],C=[1,75],L=[1,79],D=[1,80],M=[1,77],F=[1,78],P=[5,8,14,16,18,19,40,41,42,43,44,45,53,71,72],U={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,openDirective:9,typeDirective:10,closeDirective:11,":":12,argDirective:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,requirementDef:23,elementDef:24,relationshipDef:25,requirementType:26,requirementName:27,STRUCT_START:28,requirementBody:29,ID:30,COLONSEP:31,id:32,TEXT:33,text:34,RISK:35,riskLevel:36,VERIFYMTHD:37,verifyType:38,STRUCT_STOP:39,REQUIREMENT:40,FUNCTIONAL_REQUIREMENT:41,INTERFACE_REQUIREMENT:42,PERFORMANCE_REQUIREMENT:43,PHYSICAL_REQUIREMENT:44,DESIGN_CONSTRAINT:45,LOW_RISK:46,MED_RISK:47,HIGH_RISK:48,VERIFY_ANALYSIS:49,VERIFY_DEMONSTRATION:50,VERIFY_INSPECTION:51,VERIFY_TEST:52,ELEMENT:53,elementName:54,elementBody:55,TYPE:56,type:57,DOCREF:58,ref:59,END_ARROW_L:60,relationship:61,LINE:62,END_ARROW_R:63,CONTAINS:64,COPIES:65,DERIVES:66,SATISFIES:67,VERIFIES:68,REFINES:69,TRACES:70,unqString:71,qString:72,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",12:":",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",28:"STRUCT_START",30:"ID",31:"COLONSEP",33:"TEXT",35:"RISK",37:"VERIFYMTHD",39:"STRUCT_STOP",40:"REQUIREMENT",41:"FUNCTIONAL_REQUIREMENT",42:"INTERFACE_REQUIREMENT",43:"PERFORMANCE_REQUIREMENT",44:"PHYSICAL_REQUIREMENT",45:"DESIGN_CONSTRAINT",46:"LOW_RISK",47:"MED_RISK",48:"HIGH_RISK",49:"VERIFY_ANALYSIS",50:"VERIFY_DEMONSTRATION",51:"VERIFY_INSPECTION",52:"VERIFY_TEST",53:"ELEMENT",56:"TYPE",58:"DOCREF",60:"END_ARROW_L",62:"LINE",63:"END_ARROW_R",64:"CONTAINS",65:"COPIES",66:"DERIVES",67:"SATISFIES",68:"VERIFIES",69:"REFINES",70:"TRACES",71:"unqString",72:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,3],[4,5],[4,2],[4,2],[4,1],[9,1],[10,1],[13,1],[11,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[23,5],[29,5],[29,5],[29,5],[29,5],[29,2],[29,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[36,1],[36,1],[36,1],[38,1],[38,1],[38,1],[38,1],[24,5],[55,5],[55,5],[55,2],[55,1],[25,5],[25,5],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[27,1],[27,1],[32,1],[32,1],[34,1],[34,1],[54,1],[54,1],[57,1],[57,1],[59,1],[59,1]],performAction:function(e,t,i,r,n,s,a){var l=s.length-1;switch(n){case 6:this.$=s[l].trim(),r.setAccTitle(this.$);break;case 7:case 8:this.$=s[l].trim(),r.setAccDescription(this.$);break;case 9:r.parseDirective("%%{","open_directive");break;case 10:r.parseDirective(s[l],"type_directive");break;case 11:s[l]=s[l].trim().replace(/'/g,'"'),r.parseDirective(s[l],"arg_directive");break;case 12:r.parseDirective("}%%","close_directive","pie");break;case 13:this.$=[];break;case 19:r.addRequirement(s[l-3],s[l-4]);break;case 20:r.setNewReqId(s[l-2]);break;case 21:r.setNewReqText(s[l-2]);break;case 22:r.setNewReqRisk(s[l-2]);break;case 23:r.setNewReqVerifyMethod(s[l-2]);break;case 26:this.$=r.RequirementType.REQUIREMENT;break;case 27:this.$=r.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 28:this.$=r.RequirementType.INTERFACE_REQUIREMENT;break;case 29:this.$=r.RequirementType.PERFORMANCE_REQUIREMENT;break;case 30:this.$=r.RequirementType.PHYSICAL_REQUIREMENT;break;case 31:this.$=r.RequirementType.DESIGN_CONSTRAINT;break;case 32:this.$=r.RiskLevel.LOW_RISK;break;case 33:this.$=r.RiskLevel.MED_RISK;break;case 34:this.$=r.RiskLevel.HIGH_RISK;break;case 35:this.$=r.VerifyType.VERIFY_ANALYSIS;break;case 36:this.$=r.VerifyType.VERIFY_DEMONSTRATION;break;case 37:this.$=r.VerifyType.VERIFY_INSPECTION;break;case 38:this.$=r.VerifyType.VERIFY_TEST;break;case 39:r.addElement(s[l-3]);break;case 40:r.setNewElementType(s[l-2]);break;case 41:r.setNewElementDocRef(s[l-2]);break;case 44:r.addRelationship(s[l-2],s[l],s[l-4]);break;case 45:r.addRelationship(s[l-2],s[l-4],s[l]);break;case 46:this.$=r.Relationships.CONTAINS;break;case 47:this.$=r.Relationships.COPIES;break;case 48:this.$=r.Relationships.DERIVES;break;case 49:this.$=r.Relationships.SATISFIES;break;case 50:this.$=r.Relationships.VERIFIES;break;case 51:this.$=r.Relationships.REFINES;break;case 52:this.$=r.Relationships.TRACES}},table:[{3:1,4:2,6:t,9:4,14:i,16:r,18:n,19:s},{1:[3]},{3:10,4:2,5:[1,9],6:t,9:4,14:i,16:r,18:n,19:s},{5:[1,11]},{10:12,20:[1,13]},{15:[1,14]},{17:[1,15]},e(a,[2,8]),{20:[2,9]},{3:16,4:2,6:t,9:4,14:i,16:r,18:n,19:s},{1:[2,2]},{4:21,5:l,7:17,8:o,9:4,14:i,16:r,18:n,19:s,23:18,24:19,25:20,26:23,32:25,40:c,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:f},{11:34,12:[1,35],22:E},e([12,22],[2,10]),e(a,[2,6]),e(a,[2,7]),{1:[2,1]},{8:[1,37]},{4:21,5:l,7:38,8:o,9:4,14:i,16:r,18:n,19:s,23:18,24:19,25:20,26:23,32:25,40:c,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:f},{4:21,5:l,7:39,8:o,9:4,14:i,16:r,18:n,19:s,23:18,24:19,25:20,26:23,32:25,40:c,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:f},{4:21,5:l,7:40,8:o,9:4,14:i,16:r,18:n,19:s,23:18,24:19,25:20,26:23,32:25,40:c,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:f},{4:21,5:l,7:41,8:o,9:4,14:i,16:r,18:n,19:s,23:18,24:19,25:20,26:23,32:25,40:c,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:f},{4:21,5:l,7:42,8:o,9:4,14:i,16:r,18:n,19:s,23:18,24:19,25:20,26:23,32:25,40:c,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:f},{27:43,71:[1,44],72:[1,45]},{54:46,71:[1,47],72:[1,48]},{60:[1,49],62:[1,50]},e(m,[2,26]),e(m,[2,27]),e(m,[2,28]),e(m,[2,29]),e(m,[2,30]),e(m,[2,31]),e(R,[2,55]),e(R,[2,56]),e(a,[2,4]),{13:51,21:[1,52]},e(a,[2,12]),{1:[2,3]},{8:[2,14]},{8:[2,15]},{8:[2,16]},{8:[2,17]},{8:[2,18]},{28:[1,53]},{28:[2,53]},{28:[2,54]},{28:[1,54]},{28:[2,59]},{28:[2,60]},{61:55,64:I,65:b,66:k,67:S,68:T,69:N,70:v},{61:63,64:I,65:b,66:k,67:S,68:T,69:N,70:v},{11:64,22:E},{22:[2,11]},{5:[1,65]},{5:[1,66]},{62:[1,67]},e(x,[2,46]),e(x,[2,47]),e(x,[2,48]),e(x,[2,49]),e(x,[2,50]),e(x,[2,51]),e(x,[2,52]),{63:[1,68]},e(a,[2,5]),{5:A,29:69,30:q,33:O,35:w,37:$,39:C},{5:L,39:D,55:76,56:M,58:F},{32:81,71:g,72:f},{32:82,71:g,72:f},e(P,[2,19]),{31:[1,83]},{31:[1,84]},{31:[1,85]},{31:[1,86]},{5:A,29:87,30:q,33:O,35:w,37:$,39:C},e(P,[2,25]),e(P,[2,39]),{31:[1,88]},{31:[1,89]},{5:L,39:D,55:90,56:M,58:F},e(P,[2,43]),e(P,[2,44]),e(P,[2,45]),{32:91,71:g,72:f},{34:92,71:[1,93],72:[1,94]},{36:95,46:[1,96],47:[1,97],48:[1,98]},{38:99,49:[1,100],50:[1,101],51:[1,102],52:[1,103]},e(P,[2,24]),{57:104,71:[1,105],72:[1,106]},{59:107,71:[1,108],72:[1,109]},e(P,[2,42]),{5:[1,110]},{5:[1,111]},{5:[2,57]},{5:[2,58]},{5:[1,112]},{5:[2,32]},{5:[2,33]},{5:[2,34]},{5:[1,113]},{5:[2,35]},{5:[2,36]},{5:[2,37]},{5:[2,38]},{5:[1,114]},{5:[2,61]},{5:[2,62]},{5:[1,115]},{5:[2,63]},{5:[2,64]},{5:A,29:116,30:q,33:O,35:w,37:$,39:C},{5:A,29:117,30:q,33:O,35:w,37:$,39:C},{5:A,29:118,30:q,33:O,35:w,37:$,39:C},{5:A,29:119,30:q,33:O,35:w,37:$,39:C},{5:L,39:D,55:120,56:M,58:F},{5:L,39:D,55:121,56:M,58:F},e(P,[2,20]),e(P,[2,21]),e(P,[2,22]),e(P,[2,23]),e(P,[2,40]),e(P,[2,41])],defaultActions:{8:[2,9],10:[2,2],16:[2,1],37:[2,3],38:[2,14],39:[2,15],40:[2,16],41:[2,17],42:[2,18],44:[2,53],45:[2,54],47:[2,59],48:[2,60],52:[2,11],93:[2,57],94:[2,58],96:[2,32],97:[2,33],98:[2,34],100:[2,35],101:[2,36],102:[2,37],103:[2,38],105:[2,61],106:[2,62],108:[2,63],109:[2,64]},parseError:function(e,t){if(t.recoverable)this.trace(e);else{var i=Error(e);throw i.hash=t,i}},parse:function(e){var t=this,i=[0],r=[],n=[null],s=[],a=this.table,l="",o=0,c=0,h=s.slice.call(arguments,1),u=Object.create(this.lexer),d={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(d.yy[y]=this.yy[y]);u.setInput(e,d.yy),d.yy.lexer=u,d.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var p=u.yylloc;s.push(p);var _=u.options&&u.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,f,E,m,R,I,b,k,S={};;){if(f=i[i.length-1],this.defaultActions[f]?E=this.defaultActions[f]:(null==g&&(g=function(){var e;return"number"!=typeof(e=r.pop()||u.lex()||1)&&(e instanceof Array&&(e=(r=e).pop()),e=t.symbols_[e]||e),e}()),E=a[f]&&a[f][g]),void 0===E||!E.length||!E[0]){var T="";for(R in k=[],a[f])this.terminals_[R]&&R>2&&k.push("'"+this.terminals_[R]+"'");T=u.showPosition?"Parse error on line "+(o+1)+":\n"+u.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(T,{text:u.match,token:this.terminals_[g]||g,line:u.yylineno,loc:p,expected:k})}if(E[0]instanceof Array&&E.length>1)throw Error("Parse Error: multiple actions possible at state: "+f+", token: "+g);switch(E[0]){case 1:i.push(g),n.push(u.yytext),s.push(u.yylloc),i.push(E[1]),g=null,c=u.yyleng,l=u.yytext,o=u.yylineno,p=u.yylloc;break;case 2:if(I=this.productions_[E[1]][1],S.$=n[n.length-I],S._$={first_line:s[s.length-(I||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(I||1)].first_column,last_column:s[s.length-1].last_column},_&&(S._$.range=[s[s.length-(I||1)].range[0],s[s.length-1].range[1]]),void 0!==(m=this.performAction.apply(S,[l,c,o,d.yy,E[1],n,s].concat(h))))return m;I&&(i=i.slice(0,-1*I*2),n=n.slice(0,-1*I),s=s.slice(0,-1*I)),i.push(this.productions_[E[1]][0]),n.push(S.$),s.push(S._$),b=a[i[i.length-2]][i[i.length-1]],i.push(b);break;case 3:return!0}}return!0}};function V(){this.yy={}}return U.lexer={EOF:1,parseError:function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},// resets the lexer, sets new input
setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},// consumes and returns one char from the input
input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},// unshifts one char (or a string) into the input
unput:function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},// When called from action, caches matched text and appends it on next action
more:function(){return this._more=!0,this},// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},// retain first n characters of the match
less:function(e){this.unput(this.match.slice(e))},// displays already matched input, i.e. for error messages
pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},// displays upcoming input, i.e. for error messages
upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function(){var e=this.pastInput(),t=Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(e,t){var i,r,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(r=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in n)this[s]=n[s];return!1},// return next match in input
next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var e,t,i,r,n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!t||i[0].length>t[0].length)){if(t=i,r=s,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,n[s])))return e;if(!this._backtrack)return!1;t=!1;continue}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,n[r]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},// return next match that has a token
lex:function(){return this.next()||this.lex()},// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function(e){this.conditionStack.push(e)},// pop the previously active lexer condition state off the condition stack
popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},// alias for begin(condition)
pushState:function(e){this.begin(e)},// return the number of states currently on the stack
stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,t,i,r){switch(i){case 0:return this.begin("open_directive"),19;case 1:return this.begin("type_directive"),20;case 2:return this.popState(),this.begin("arg_directive"),12;case 3:return this.popState(),this.popState(),22;case 4:return 21;case 5:return"title";case 6:return this.begin("acc_title"),14;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),16;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 53:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 5;case 14:case 15:case 16:break;case 17:return 8;case 18:return 6;case 19:return 28;case 20:return 39;case 21:return 31;case 22:return 30;case 23:return 33;case 24:return 35;case 25:return 37;case 26:return 40;case 27:return 41;case 28:return 42;case 29:return 43;case 30:return 44;case 31:return 45;case 32:return 46;case 33:return 47;case 34:return 48;case 35:return 49;case 36:return 50;case 37:return 51;case 38:return 52;case 39:return 53;case 40:return 64;case 41:return 65;case 42:return 66;case 43:return 67;case 44:return 68;case 45:return 69;case 46:return 70;case 47:return 56;case 48:return 58;case 49:return 60;case 50:return 63;case 51:return 62;case 52:this.begin("string");break;case 54:return"qString";case 55:return t.yytext=t.yytext.trim(),71}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[53,54],inclusive:!1},INITIAL:{rules:[0,5,6,8,10,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,55],inclusive:!0}}},V.prototype=U,U.Parser=V,new V}();o.parser=o;let c=[],h={},u={},d={},y={},p={RequirementType:{REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},RiskLevel:{LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},VerifyType:{VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Relationships:{CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},parseDirective:function(e,t,i){(0,n.m).parseDirective(this,e,t,i)},getConfig:()=>(0,n.c)().req,addRequirement:(e,t)=>(void 0===u[e]&&(u[e]={name:e,type:t,id:h.id,text:h.text,risk:h.risk,verifyMethod:h.verifyMethod}),h={},u[e]),getRequirements:()=>u,setNewReqId:e=>{void 0!==h&&(h.id=e)},setNewReqText:e=>{void 0!==h&&(h.text=e)},setNewReqRisk:e=>{void 0!==h&&(h.risk=e)},setNewReqVerifyMethod:e=>{void 0!==h&&(h.verifyMethod=e)},setAccTitle:n.s,getAccTitle:n.g,setAccDescription:n.b,getAccDescription:n.a,addElement:e=>(void 0===y[e]&&(y[e]={name:e,type:d.type,docRef:d.docRef},(0,n.l).info("Added new requirement: ",e)),d={},y[e]),getElements:()=>y,setNewElementType:e=>{void 0!==d&&(d.type=e)},setNewElementDocRef:e=>{void 0!==d&&(d.docRef=e)},addRelationship:(e,t,i)=>{c.push({type:e,src:t,dst:i})},getRelationships:()=>c,clear:()=>{c=[],h={},u={},d={},y={},(0,n.v)()}},_={CONTAINS:"contains",ARROW:"arrow"},g={ReqMarkers:_,insertLineEndings:(e,t)=>{let i=e.append("defs").append("marker").attr("id",_.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");i.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),i.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),i.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",_.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${t.line_height},${t.line_height/2}
      M${t.line_height},${t.line_height/2}
      L0,${t.line_height}`).attr("stroke-width",1)}},f={},E=0,m=(e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",f.rect_min_width+"px").attr("height",f.rect_min_height+"px"),R=(e,t,i)=>{let r=f.rect_min_width/2,n=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",r).attr("y",f.rect_padding).attr("dominant-baseline","hanging"),s=0;i.forEach(e=>{0==s?n.append("tspan").attr("text-anchor","middle").attr("x",f.rect_min_width/2).attr("dy",0).text(e):n.append("tspan").attr("text-anchor","middle").attr("x",f.rect_min_width/2).attr("dy",.75*f.line_height).text(e),s++});let a=1.5*f.rect_padding+s*f.line_height*.75;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",f.rect_min_width).attr("y1",a).attr("y2",a),{titleNode:n,y:a}},I=(e,t,i,r)=>{let n=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",f.rect_padding).attr("y",r).attr("dominant-baseline","hanging"),s=0,a=[];return i.forEach(e=>{let t=e.length;for(;t>30&&s<3;){let i=e.substring(0,30);t=(e=e.substring(30,e.length)).length,a[a.length]=i,s++}if(3==s){let e=a[a.length-1];a[a.length-1]=e.substring(0,e.length-4)+"..."}else a[a.length]=e;s=0}),a.forEach(e=>{n.append("tspan").attr("x",f.rect_padding).attr("dy",f.line_height).text(e)}),n},b=(e,t,i,r)=>{let n=t.node().getTotalLength(),s=t.node().getPointAtLength(.5*n),a="rel"+E;E++;let l=e.append("text").attr("class","req relationshipLabel").attr("id",a).attr("x",s.x).attr("y",s.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(r),o=l.node().getBBox();e.insert("rect","#"+a).attr("class","req reqLabelBox").attr("x",s.x-o.width/2).attr("y",s.y-o.height/2).attr("width",o.width).attr("height",o.height).attr("fill","white").attr("fill-opacity","85%")},k=function(e,t,i,r,a){let l=i.edge(x(t.src),x(t.dst)),o=(0,s.line)().x(function(e){return e.x}).y(function(e){return e.y}),c=e.insert("path","#"+r).attr("class","er relationshipLine").attr("d",o(l.points)).attr("fill","none");t.type==a.db.Relationships.CONTAINS?c.attr("marker-start","url("+(0,n.e).getUrl(f.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(c.attr("stroke-dasharray","10,7"),c.attr("marker-end","url("+(0,n.e).getUrl(f.arrowMarkerAbsolute)+"#"+g.ReqMarkers.ARROW+"_line_ending)")),b(e,c,f,`<<${t.type}>>`)},S=(e,t,i)=>{Object.keys(e).forEach(r=>{let s=e[r];r=x(r),(0,n.l).info("Added new requirement: ",r);let a=i.append("g").attr("id",r),l="req-"+r,o=m(a,l),c=R(a,r+"_title",[`<<${s.type}>>`,`${s.name}`]);I(a,r+"_body",[`Id: ${s.id}`,`Text: ${s.text}`,`Risk: ${s.risk}`,`Verification: ${s.verifyMethod}`],c.y);let h=o.node().getBBox();t.setNode(r,{width:h.width,height:h.height,shape:"rect",id:r})})},T=(e,t,i)=>{Object.keys(e).forEach(r=>{let n=e[r],s=x(r),a=i.append("g").attr("id",s),l="element-"+s,o=m(a,l),c=R(a,l+"_title",["<<Element>>",`${r}`]);I(a,l+"_body",[`Type: ${n.type||"Not Specified"}`,`Doc Ref: ${n.docRef||"None"}`],c.y);let h=o.node().getBBox();t.setNode(s,{width:h.width,height:h.height,shape:"rect",id:s})})},N=(e,t)=>(e.forEach(function(e){let i=x(e.src),r=x(e.dst);t.setEdge(i,r,{relationship:e})}),e),v=function(e,t){t.nodes().forEach(function(i){void 0!==i&&void 0!==t.node(i)&&(e.select("#"+i),e.select("#"+i).attr("transform","translate("+(t.node(i).x-t.node(i).width/2)+","+(t.node(i).y-t.node(i).height/2)+" )"))})},x=e=>e.replace(/\s/g,"").replace(/\./g,"_"),A={parser:o,db:p,renderer:{draw:(e,t,i,r)=>{let o;f=(0,n.c)().requirement,r.db.clear(),r.parser.parse(e);let c=f.securityLevel;"sandbox"===c&&(o=(0,s.select)("#i"+t));let h="sandbox"===c?(0,s.select)(o.nodes()[0].contentDocument.body):(0,s.select)("body"),u=h.select(`[id='${t}']`);g.insertLineEndings(u,f);let d=new l.Graph({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:f.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}}),y=r.db.getRequirements(),p=r.db.getElements(),_=r.db.getRelationships();S(y,d,u),T(p,d,u),N(_,d),(0,a.layout)(d),v(u,d),_.forEach(function(e){k(u,e,d,t,r)});let E=f.rect_padding,m=u.node().getBBox(),R=m.width+2*E,I=m.height+2*E;(0,n.i)(u,I,R,f.useMaxWidth),u.attr("viewBox",`${m.x-E} ${m.y-E} ${R} ${I}`)}},styles:e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`}},{"./mermaid-b0ad2de1.js":"42V0c",d3:"ahWNw","dagre-d3-es/src/dagre/index.js":"9xp7T","dagre-d3-es/src/graphlib/index.js":"j6NXy","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],null,"parcelRequire9da7")//# sourceMappingURL=requirementDiagram-19c99588.a718aa48.js.map
;
//# sourceMappingURL=requirementDiagram-19c99588.a718aa48.js.map
