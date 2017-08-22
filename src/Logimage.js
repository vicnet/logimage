define("amber-logimage/Logimage", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Logimage');
$core.packages["Logimage"].innerEval = function (expr) { return eval(expr); };
$core.packages["Logimage"].imports = ["silk/Silk"];
$core.packages["Logimage"].transport = {"type":"amd","amdNamespace":"amber-logimage"};

$core.addClass('Application', $globals.Object, ['rows', 'cols', 'grid'], 'Logimage');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2="class".__minus_gt("cols");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=[$2];
self["@cols"]=$recv($globals.Silk)._TD_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=1;
//>>excludeEnd("ctx");
$4="class".__minus_gt("rows");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$3=[$4];
self["@rows"]=$recv($globals.Silk)._TD_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=2;
//>>excludeEnd("ctx");
self["@grid"]=$recv($globals.Silk)._TD_(["class".__minus_gt("center")]);
$recv($recv($globals.Silk)._new()).__lt_lt(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Application)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22Create items\x22\x0a\x09cols := Silk TD: { #class -> 'cols' }.\x0a\x09rows := Silk TD: { #class -> 'rows' }.\x0a\x09grid := Silk TD: { #class -> 'center' }.\x0a\x09\x22Filling body\x22\x0a\x09Silk new << self",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["TD:", "->", "<<", "new"]
}),
$globals.Application);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: 'as yet unclassified',
fn: function (silk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$4,$3,$1,$6;
$2=$recv($recv(silk)._resetContents())._TABLE();
$5=$recv($globals.Silk)._TR();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TR"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__lt_lt($recv($globals.Silk)._TD());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$3=$recv($4).__lt_lt(self["@cols"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__lt_lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$6=$recv($recv($recv($globals.Silk)._TR()).__lt_lt(self["@rows"])).__lt_lt(self["@grid"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=5;
//>>excludeEnd("ctx");
$recv($1).__lt_lt($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk},$globals.Application)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk resetContents\x0a\x09\x09TABLE\x0a\x09\x09\x09<< (Silk TR << (Silk TD) << cols)\x0a\x09\x09\x09<< (Silk TR << rows << grid)",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["<<", "TABLE", "resetContents", "TR", "TD"]
}),
$globals.Application);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'as yet unclassified',
fn: function (logimage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5;
$1=self["@cols"];
$3=$recv($globals.WidgetHints)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._show_($recv(logimage)._colHints());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$recv($1).__lt_lt($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$4=self["@rows"];
$6=$recv($globals.WidgetHints)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._show_($recv(logimage)._rowHints());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=2;
//>>excludeEnd("ctx");
$recv($4).__lt_lt($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(self["@grid"]).__lt_lt($recv($recv($globals.WidgetGrid)._new())._show_($recv(logimage)._grid()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{logimage:logimage},$globals.Application)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["logimage"],
source: "show: logimage\x0a\x09cols << (WidgetHints new show: logimage colHints).\x0a\x09rows << (WidgetHints new show: logimage rowHints).\x0a\x09grid << (WidgetGrid new show: logimage grid)",
referencedClasses: ["WidgetHints", "WidgetGrid"],
//>>excludeEnd("ide");
messageSends: ["<<", "show:", "new", "colHints", "rowHints", "grid"]
}),
$globals.Application);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Application)._new())._show_($recv($globals.Logimage)._chat());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Application.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09^ Application new show: Logimage chat",
referencedClasses: ["Application", "Logimage"],
//>>excludeEnd("ide");
messageSends: ["show:", "new", "chat"]
}),
$globals.Application.klass);


$core.addClass('Cell', $globals.Object, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Cell.comment="A simple cell or pixel.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "*",
protocol: 'as yet unclassified',
fn: function (n){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Cells)._new())._add_cell_(n,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"*",{n:n},$globals.Cell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "* n\x0a\x09^ Cells new add: n cell: self",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "new"]
}),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "alternative",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return [];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09\x22I return list of alternative names or nothing\x22\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "isBox",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBox\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "isSpace",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSpace\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "isUnknown",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUnknown\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cell);


$globals.Cell.klass.iVarNames = ['cells'];
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'instance creation',
fn: function(symbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(symbol)._isString();
if($core.assert($1)){
return $recv(self["@cells"])._at_(symbol);
};
return symbol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{symbol:symbol},$globals.Cell.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["symbol"],
source: "at: symbol\x0a\x09symbol isString ifTrue: [\x0a\x09\x09^ cells at: symbol ].\x0a\x09^ symbol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isString", "at:"]
}),
$globals.Cell.klass);

$core.addMethod(
$core.method({
selector: "box",
protocol: 'instance creation',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_("box");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"box",{},$globals.Cell.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "box\x0a\x09^ cells at: #box",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Cell.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'instance creation',
fn: function(){
var self=this;
var basesize;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Cell.klass.superclass||$boot.dnu).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@cells"]=$globals.HashedCollection._newFromPairs_([]);
$2=self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
basesize=$recv($1).__plus((1));
self._allSubclassesDo_((function(cls){
var name,inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
name=$recv(cls)._name();
name;
name=$recv(name)._copyFrom_to_(basesize,$recv(name)._size());
name;
name=$recv(name)._asLowercase();
name;
inst=$recv(cls)._new();
inst;
$recv(self["@cells"])._at_put_(name,inst);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(self["@cells"])._at_put_($recv(inst)._asString(),inst);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
return $recv($recv(inst)._alternative())._do_((function(alt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_put_(alt,inst);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({alt:alt},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cls:cls,name:name,inst:inst},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{basesize:basesize},$globals.Cell.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| basesize |\x0a\x09super initialize.\x0a\x09cells := #{}.\x0a\x09basesize := self name size + 1.\x0a\x09self allSubclassesDo: [ :cls |\x0a\x09\x09| name inst |\x0a\x09\x09name := cls name.\x0a\x09\x09name := name copyFrom: basesize to: (name size).\x0a\x09\x09name := name asLowercase.\x0a\x09\x09inst := cls new.\x0a\x09\x09cells at: name put: inst.\x0a\x09\x09cells at: inst asString put: inst.\x0a\x09\x09inst alternative do: [ :alt | cells at: alt put: inst ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "+", "size", "name", "allSubclassesDo:", "copyFrom:to:", "asLowercase", "new", "at:put:", "asString", "do:", "alternative"]
}),
$globals.Cell.klass);

$core.addMethod(
$core.method({
selector: "space",
protocol: 'instance creation',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_("space");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space",{},$globals.Cell.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09^ cells at: #space",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Cell.klass);

$core.addMethod(
$core.method({
selector: "unknown",
protocol: 'instance creation',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_("unknown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unknown",{},$globals.Cell.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unknown\x0a\x09^ cells at: #unknown",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Cell.klass);


$core.addClass('CellBox', $globals.Cell, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "alternative",
protocol: 'printing',
fn: function(){
var self=this;
return ["X"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #('X')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CellBox);

$core.addMethod(
$core.method({
selector: "isBox",
protocol: 'printing',
fn: function (){
"use strict";

var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBox\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CellBox);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("@");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.CellBox)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '@'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.CellBox);



$core.addClass('CellSpace', $globals.Cell, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "alternative",
protocol: 'printing',
fn: function(){
var self=this;
return ["."];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #('.')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CellSpace);

$core.addMethod(
$core.method({
selector: "isSpace",
protocol: 'printing',
fn: function (){
"use strict";

var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSpace\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CellSpace);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("-");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.CellSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '-'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.CellSpace);



$core.addClass('CellUnknown', $globals.Cell, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "alternative",
protocol: 'printing',
fn: function(){
var self=this;
return ["?", "_"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #('?' '_')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CellUnknown);

$core.addMethod(
$core.method({
selector: "isUnknown",
protocol: 'printing',
fn: function (){
"use strict";

var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUnknown\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CellUnknown);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(" ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.CellUnknown)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: ' '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.CellUnknown);



$core.addClass('Cells', $globals.Object, ['cells', 'pos'], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Cells.comment="A line or a column of cells";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'as yet unclassified',
fn: function (theCells){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@cells"]).__eq($recv(theCells)._cells());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_($recv(self["@pos"]).__eq($recv(theCells)._pos()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{theCells:theCells},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "= theCells\x0a\x09^ (cells = theCells cells) and: (pos = theCells pos)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "cells", "pos"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "add:",
protocol: 'as yet unclassified',
fn: function(aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@cells"])._add_($recv($globals.Cell)._at_(aCell));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aCell:aCell},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "add: aCell\x0a\x09cells add: (Cell at: aCell)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:", "at:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "add:cell:",
protocol: 'as yet unclassified',
fn: function (n,aCell){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(n)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._add_(aCell);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:cell:",{n:n,aCell:aCell},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n", "aCell"],
source: "add: n cell: aCell\x0a\x09n timesRepeat: [ self add: aCell ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "add:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addAll:",
protocol: 'as yet unclassified',
fn: function (theCells){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@cells"])._addAll_($recv(theCells)._cells());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAll:",{theCells:theCells},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "addAll: theCells\x0a\x09cells addAll: theCells cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "cells"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addBoxes:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_cell_(n,$recv($globals.Cell)._box());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addBoxes:",{n:n},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "addBoxes: n\x0a\x09self add: n cell: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "box"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addSpaces:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_cell_(n,$recv($globals.Cell)._space());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSpaces:",{n:n},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "addSpaces: n\x0a\x09self add: n cell: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "space"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addUnknowns:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_cell_(n,$recv($globals.Cell)._unknown());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addUnknowns:",{n:n},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "addUnknowns: n\x0a\x09self add: n cell: (Cell unknown)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "unknown"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "asArray",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return self["@cells"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asArray\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (index){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "at: index\x0a\x09^ cells at: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'as yet unclassified',
fn: function(index,aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_put_(index,$recv($globals.Cell)._at_(aCell));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{index:index,aCell:aCell},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index", "aCell"],
source: "at: index put: aCell\x0a\x09^ cells at: index put: (Cell at: aCell)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "at:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "b",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_cell_((1),$recv($globals.Cell)._box());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"b",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "b\x0a\x09self add: 1 cell: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "box"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "cells",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
return self["@cells"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cells\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "cells:",
protocol: 'as yet unclassified',
fn: function(theCells){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@cells"]=$recv($recv(theCells)._asArray())._collect_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Cell)._at_(c);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cells:",{theCells:theCells},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "cells: theCells\x0a\x09cells := theCells asArray collect: [ :c | Cell at: c ]",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["collect:", "asArray", "at:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "copyFrom:",
protocol: 'printing',
fn: function (ref){
var self=this;
var p1,p2,res;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=$recv(ref)._isNumber();
if($core.assert($1)){
p1=ref;
p1;
p2=$recv(self["@cells"])._size();
p2;
} else {
p1=$recv(ref)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
p1;
$3=$recv(ref)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($recv(ref)._at_("size"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
p2=$recv($2).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
p2;
};
$4=$recv($globals.Cells)._new();
$recv($4)._cells_($recv(self["@cells"])._copyFrom_to_(p1,p2));
return $recv($4)._pos_($recv($recv(self["@pos"]).__plus(p1)).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:",{ref:ref,p1:p1,p2:p2,res:res},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["ref"],
source: "copyFrom: ref\x0a\x09| p1 p2 res |\x0a\x09ref isNumber\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09p1 := ref.\x0a\x09\x09\x09p2 := cells size ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09p1 := ref at: #pos.\x0a\x09\x09\x09p2 := (ref at: #pos) + (ref at: #size) - 1 ].\x0a\x09^ Cells new\x0a\x09\x09cells: (cells copyFrom: p1 to: p2);\x0a\x09\x09pos: pos + p1 - 1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isNumber", "size", "at:", "-", "+", "cells:", "new", "copyFrom:to:", "pos:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "copyFrom:to:",
protocol: 'printing',
fn: function (p1,p2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Cells)._new();
$recv($1)._cells_($recv(self["@cells"])._copyFrom_to_(p1,p2));
return $recv($1)._pos_($recv($recv(self["@pos"]).__plus(p1)).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{p1:p1,p2:p2},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["p1", "p2"],
source: "copyFrom: p1 to: p2\x0a\x09^ Cells new\x0a\x09\x09cells: (cells copyFrom: p1 to: p2);\x0a\x09\x09pos: pos + p1 - 1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["cells:", "new", "copyFrom:to:", "pos:", "-", "+"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'as yet unclassified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@cells"])._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09cells do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstBox",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var pos,size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
var $early={};
try {
pos=(0);
size=(0);
$recv(self["@cells"])._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(size).__gt((0));
if($core.assert($1)){
$2=$recv(c)._isBox();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isBox"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
size=$recv(size).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return size;
} else {
throw $early=[$globals.HashedCollection._newFromPairs_(["pos",pos,"size",size])];
};
} else {
pos=$recv(pos).__plus((1));
pos;
$3=$recv(c)._isBox();
if($core.assert($3)){
size=(1);
return size;
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $globals.HashedCollection._newFromPairs_(["pos",(0),"size",(0)]);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstBox",{pos:pos,size:size},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstBox\x0a\x09\x22Return a tupple with index (starting at 1) of first box if exists, and size\x22\x0a\x09| pos size |\x0a\x09pos := 0.\x0a\x09size := 0.\x0a\x09cells do: [ :c |\x0a\x09\x09(size>0)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09c isBox\x0a\x09\x09\x09\x09\x09ifTrue: [ size := size+1 ]\x0a\x09\x09\x09\x09\x09ifFalse: [ ^ #{ #pos -> pos. #size -> size } ]\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09pos := pos+1.\x0a\x09\x09\x09\x09c isBox\x0a\x09\x09\x09\x09\x09ifTrue: [ size := 1 ]\x0a\x09\x09\x09\x09]\x0a\x09\x09].\x0a\x09^ #{ #pos -> 0. #size -> 0 }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:ifFalse:", ">", "isBox", "+", "ifTrue:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstDones",
protocol: 'private',
fn: function (){
var self=this;
var done;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
done=$recv($recv($globals.Cells)._new())._pos_(self["@pos"]);
$recv(self["@cells"])._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(c)._isUnknown();
if($core.assert($1)){
throw $early=[$recv(done)._trimLast_($recv($globals.Cell)._box())];
};
return $recv(done)._add_(c);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return done;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstDones",{done:done},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstDones\x0a\x09\x22I returns cells really dones (box separate by spaces)\x22\x0a\x09| done |\x0a\x09done := Cells new pos: pos.\x0a\x09cells do: [ :c |\x0a\x09\x09\x22if found a unknown cell, stop reading cells, remove last boxes\x22\x0a\x09\x09c isUnknown ifTrue: [ ^ done trimLast: Cell box ].\x0a\x09\x09done add: c ].\x0a\x09^ done",
referencedClasses: ["Cells", "Cell"],
//>>excludeEnd("ide");
messageSends: ["pos:", "new", "do:", "ifTrue:", "isUnknown", "trimLast:", "box", "add:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstFreeSpace",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var space,size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
var $early={};
try {
size=(0);
space=true;
$recv(self["@cells"])._withIndexDo_((function(c,pos){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(c)._isSpace();
if($core.assert($1)){
space=true;
space;
$2=$recv(size).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$3=$recv(pos).__minus(size);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=1;
//>>excludeEnd("ctx");
throw $early=[$globals.HashedCollection._newFromPairs_(["pos",$3,"size",size])];
};
};
$4=$recv(c)._isBox();
if($core.assert($4)){
space=false;
space;
size=(0);
size;
};
$5=$recv(c)._isUnknown();
if($core.assert($5)){
$6=space;
if($core.assert($6)){
size=$recv(size).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return size;
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,pos:pos},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$7=$recv(space)._and_($recv(size).__gt((0)));
if($core.assert($7)){
return $globals.HashedCollection._newFromPairs_(["pos",$recv($recv($recv(self["@cells"])._size()).__minus(size)).__plus((1)),"size",size]);
};
return $globals.HashedCollection._newFromPairs_(["pos",(0),"size",(0)]);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstFreeSpace",{space:space,size:size},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstFreeSpace\x0a\x09\x22Return a tupple with index (starting at 1) of first free (without box) spaces if exists, and size\x22\x0a\x09| space size |\x0a\x09size := 0.\x0a\x09space := true.\x0a\x09cells withIndexDo: [ :c :pos |\x0a\x09\x09c isSpace ifTrue: [\x0a\x09\x09\x09space := true.\x0a\x09\x09\x09size > 0 ifTrue: [ ^ #{ #pos -> (pos-size). #size -> size } ]\x0a\x09\x09\x09].\x0a\x09\x09c isBox ifTrue: [\x0a\x09\x09\x09space := false.\x0a\x09\x09\x09size := 0\x0a\x09\x09\x09].\x0a\x09\x09c isUnknown ifTrue: [\x0a\x09\x09\x09space ifTrue: [ size := size + 1 ]\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09(space and: size>0) ifTrue: [ ^ #{ #pos -> (cells size-size+1). #size -> size } ].\x0a\x09^ #{ #pos -> 0. #size -> 0 }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "ifTrue:", "isSpace", ">", "-", "isBox", "isUnknown", "+", "and:", "size"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstNotSpace",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
var size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
var $early={};
try {
size=(0);
$recv(self["@cells"])._withIndexDo_((function(c,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(c)._isSpace();
if($core.assert($1)){
$2=$recv(size).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$3=$recv(i).__minus(size);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$recv(i).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=2;
//>>excludeEnd("ctx");
throw $early=[self._copyFrom_to_($3,$4)];
};
} else {
size=$recv(size).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return size;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$5=$recv(size).__gt((0));
if($core.assert($5)){
return self._copyFrom_($recv($recv($recv(self["@cells"])._size()).__minus(size)).__plus((1)));
};
return $recv($globals.Cells)._new();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstNotSpace",{size:size},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstNotSpace\x0a\x09\x22Return first cells stopping at first space (not box, not unknown)\x22\x0a\x09| size |\x0a\x09size := 0.\x0a\x09cells withIndexDo: [ :c :i |\x0a\x09\x09c isSpace\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09size > 0 ifTrue: [ ^ self copyFrom: i-size to: i-1 ]\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09size := size + 1\x0a\x09\x09\x09\x09]\x0a\x09\x09].\x0a\x09size>0 ifTrue: [ ^ self copyFrom: cells size-size+1 ].\x0a\x09^ Cells new",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "ifTrue:ifFalse:", "isSpace", "ifTrue:", ">", "copyFrom:to:", "-", "+", "copyFrom:", "size", "new"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@pos"]=(1);
self["@cells"]=[];
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09pos := 1.\x0a\x09cells := { }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "isBetter:",
protocol: 'private',
fn: function (sol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
var $early={};
try {
$recv(sol)._withIndexDo_((function(c,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(c)._isUnknown();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isUnknown"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._not();
$1=$recv($2)._and_($recv($recv(self["@cells"])._at_(i))._isUnknown());
if($core.assert($1)){
throw $early=[true];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBetter:",{sol:sol},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sol"],
source: "isBetter: sol\x0a\x09\x22I return true if sol bring something new in my cells\x22\x0a\x09sol withIndexDo: [ :c :i |\x0a\x09\x09(c isUnknown not and: (cells at: i) isUnknown) ifTrue: [ ^ true ]\x0a\x09\x09].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "ifTrue:", "and:", "not", "isUnknown", "at:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ cells isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isEmpty"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "lastDones",
protocol: 'private',
fn: function (){
var self=this;
var done;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$5,$3,$2;
done=$recv($recv(self._reversed())._firstDones())._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
$1=done;
$4=self["@pos"];
$5=$recv(self["@cells"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus($5);
$2=$recv($3).__minus($recv(done)._size());
return $recv($1)._pos_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDones",{done:done},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDones\x0a\x09\x22I returns cells really dones (box separate by spaces) at end\x22\x0a\x09| done |\x0a\x09done := (self reversed firstDones) reversed.\x0a\x09^ done pos: pos + cells size - done size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reversed", "firstDones", "pos:", "-", "+", "size"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "numbers",
protocol: 'private',
fn: function (){
var self=this;
var numbers,current;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
numbers=[];
current=(0);
$recv(self["@cells"])._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(c)._isBox();
if($core.assert($1)){
current=$recv(current).__plus((1));
return current;
} else {
$2=$recv(current).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$recv(numbers)._add_(current);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
};
current=(0);
return current;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=$recv(current).__gt((0));
if($core.assert($3)){
$recv(numbers)._add_(current);
};
return numbers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numbers",{numbers:numbers,current:current},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numbers\x0a\x09\x22I return a list of number of group of box\x22\x0a\x09| numbers current |\x0a\x09numbers := { }.\x0a\x09current := 0.\x0a\x09cells do: [ :c |\x0a\x09\x09c isBox\x0a\x09\x09\x09ifTrue: [ current := current + 1 ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09current > 0 ifTrue: [ numbers add: current ].\x0a\x09\x09\x09\x09current := 0 ]\x0a\x09\x09].\x0a\x09\x22add the last one if exist\x22 \x0a\x09current > 0 ifTrue: [ numbers add: current ].\x0a\x09^ numbers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:ifFalse:", "isBox", "+", "ifTrue:", ">", "add:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "pos",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self["@pos"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pos\x0a\x09^ pos",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "pos:",
protocol: 'as yet unclassified',
fn: function (aPos){
var self=this;
self["@pos"]=aPos;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPos"],
source: "pos: aPos\x0a\x09pos := aPos",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("|");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self["@pos"]).__minus((1)))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(".|");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@cells"])._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(c)._printOn_(stream);
return $recv(stream)._nextPutAll_("|");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '|'.\x0a\x09pos-1 timesRepeat: [ stream nextPutAll: '.|' ].\x0a\x09cells do: [ :c |\x0a\x09\x09\x09c printOn: stream.\x0a\x09\x09\x09stream nextPutAll: '|' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "timesRepeat:", "-", "do:", "printOn:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Cells)._new();
$recv($1)._pos_(self["@pos"]);
return $recv($1)._cells_($recv(self["@cells"])._reversed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09^ Cells new\x0a\x09\x09pos: pos;\x0a\x09\x09cells: cells reversed",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["pos:", "new", "cells:", "reversed"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "s",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_cell_((1),$recv($globals.Cell)._space());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"s",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "s\x0a\x09self add: 1 cell: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "space"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'printing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ cells size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "size:",
protocol: 'printing',
fn: function (newSize){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$6,$7;
$2=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(newSize);
if($core.assert($1)){
return self;
};
$4=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__gt(newSize);
if($core.assert($3)){
$5=self["@cells"];
$6=$recv(newSize).__plus((1));
$7=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=3;
//>>excludeEnd("ctx");
self["@cells"]=$recv($5)._removeFrom_to_($6,$7);
self["@cells"];
} else {
self._addUnknowns_($recv(newSize).__minus(self._size()));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size:",{newSize:newSize},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newSize"],
source: "size: newSize\x0a\x09(self size = newSize) ifTrue: [ ^ self ].\x0a\x09(self size > newSize)\x0a\x09\x09ifTrue: [ cells := cells\x0a\x09 \x09\x09\x09\x09removeFrom: newSize + 1\x0a\x09\x09\x09\x09\x09to: self size ]\x0a\x09\x09ifFalse: [ self addUnknowns: (newSize - self size) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "size", "ifTrue:ifFalse:", ">", "removeFrom:to:", "+", "addUnknowns:", "-"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trim",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._trimFirst())._trimLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trim",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trim\x0a\x09\x22I return a list of cells without begining and ending spaces\x22\x0a\x09^ self trimFirst trimLast",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimLast", "trimFirst"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimFirst",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._trimFirst_($recv($globals.Cell)._space());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimFirst",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimFirst\x0a\x09\x22I return a list of cells without begining spaces\x22\x0a\x09^ self trimFirst: Cell space",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["trimFirst:", "space"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimFirst:",
protocol: 'private',
fn: function (cell){
var self=this;
var add,trimed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$5,$6,$4,$3;
add=false;
trimed=$recv(self["@cells"])._select_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(c).__eq(cell);
if(!$core.assert($1)){
add=true;
add;
};
return add;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($globals.Cells)._new();
$5=self["@pos"];
$6=$recv(self["@cells"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__plus($6);
$3=$recv($4).__minus($recv(trimed)._size());
$recv($2)._pos_($3);
return $recv($2)._cells_(trimed);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimFirst:",{cell:cell,add:add,trimed:trimed},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell"],
source: "trimFirst: cell\x0a\x09\x22I return a list of cells without begining spaces\x22\x0a\x09| add trimed |\x0a\x09add := false.\x0a\x09trimed := cells select: [ :c |\x0a\x09\x09c = cell ifFalse: [ add := true ].\x0a\x09\x09add\x09].\x0a\x09^ Cells new\x0a\x09\x09pos: pos + cells size - trimed size;\x0a\x09\x09cells: trimed",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["select:", "ifFalse:", "=", "pos:", "new", "-", "+", "size", "cells:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimLast",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._trimLast_($recv($globals.Cell)._space());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLast",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimLast\x0a\x09\x22I return a list of cells without ending spaces\x22\x0a\x09^ self trimLast: Cell space",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["trimLast:", "space"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimLast:",
protocol: 'private',
fn: function (cell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._reversed())._trimFirst_(cell))._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
return $recv($1)._pos_(self["@pos"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLast:",{cell:cell},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell"],
source: "trimLast: cell\x0a\x09\x22I return a list of cells without ending sort of cell, keep pos\x22\x0a\x09^ ((self reversed trimFirst: cell) reversed) pos: pos",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pos:", "reversed", "trimFirst:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "u",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_cell_((1),$recv($globals.Cell)._unknown());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"u",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "u\x0a\x09self add: 1 cell: (Cell unknown)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "unknown"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: 'as yet unclassified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@cells"])._withIndexDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09cells withIndexDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:"]
}),
$globals.Cells);


$core.addMethod(
$core.method({
selector: "boxes:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._add_cell_(n,$recv($globals.Cell)._box());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boxes:",{n:n},$globals.Cells.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "boxes: n\x0a\x09^ self new add: n cell: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "new", "box"]
}),
$globals.Cells.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._new_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Cells.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09^ self new: #( )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:"]
}),
$globals.Cells.klass);

$core.addMethod(
$core.method({
selector: "new:",
protocol: 'as yet unclassified',
fn: function (cells){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Cells.klass.superclass||$boot.dnu).fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $recv($1)._cells_(cells);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{cells:cells},$globals.Cells.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells"],
source: "new: cells\x0a\x09^ super new cells: cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cells:", "new"]
}),
$globals.Cells.klass);

$core.addMethod(
$core.method({
selector: "spaces:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._add_cell_(n,$recv($globals.Cell)._space());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"spaces:",{n:n},$globals.Cells.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "spaces: n\x0a\x09^ self new add: n cell: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "new", "space"]
}),
$globals.Cells.klass);

$core.addMethod(
$core.method({
selector: "unknowns:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._add_cell_(n,$recv($globals.Cell)._unknown());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unknowns:",{n:n},$globals.Cells.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "unknowns: n\x0a\x09^ self new add: n cell: (Cell unknown)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "new", "unknown"]
}),
$globals.Cells.klass);


$core.addClass('Grid', $globals.Object, ['cells', 'size'], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Grid.comment="Image, with Cells";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'private',
fn: function (point){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_(self._indexOf_(point));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{point:point},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "at: point\x0a\x09^ cells at: (self indexOf: point)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "indexOf:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'private',
fn: function (point,cell){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@cells"])._at_put_(self._indexOf_(point),cell);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{point:point,cell:cell},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point", "cell"],
source: "at: point put: cell\x0a\x09cells at: (self indexOf: point) put: cell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "indexOf:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "box:",
protocol: 'as yet unclassified',
fn: function (point){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._at_put_(point,$recv($globals.Cell)._box());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"box:",{point:point},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "box: point\x0a\x09self at: point put: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "box"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "colAt:",
protocol: 'accessing',
fn: function (index){
"use strict";

var self=this;
var col;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@size"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
col=$recv($globals.Array)._new_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new:"]=1;
//>>excludeEnd("ctx");
(1)._to_do_($recv(self["@size"])._y(),(function(y){
var pt;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
pt=$recv($globals.Point)._x_y_(index,y);
pt;
return $recv(col)._at_put_(y,self._at_(pt));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y,pt:pt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($globals.Cells)._new_(col);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colAt:",{index:index,col:col},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colAt: index\x0a\x09| col |\x0a\x09col := Array new: size y.\x0a\x091 to: size y do: [ :y | | pt |\x0a\x09\x09pt := Point x: index y: y.\x0a\x09\x09col at: y put: (self at: pt) ].\x0a\x09^ Cells new: col",
referencedClasses: ["Array", "Point", "Cells"],
//>>excludeEnd("ide");
messageSends: ["new:", "y", "to:do:", "x:y:", "at:put:", "at:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "indexOf:",
protocol: 'private',
fn: function (point){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@size"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__star($recv($recv(point)._y()).__minus((1)));
return $recv($1).__plus($recv(point)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{point:point},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "indexOf: point\x0a\x09^ (size x * (point y - 1)) + point x.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "*", "x", "-", "y"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._rowDo_((function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._cr();
return $recv(r)._printOn_(stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09self rowDo: [ :r |\x0a\x09\x09stream cr.\x0a\x09\x09r printOn: stream ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rowDo:", "cr", "printOn:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "rowAt:",
protocol: 'accessing',
fn: function (index){
"use strict";

var self=this;
var start;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
start=self._indexOf_($recv($globals.Point)._x_y_((1),index));
return $recv($globals.Cells)._new_($recv(self["@cells"])._copyFrom_to_(start,$recv($recv(start).__plus($recv(self["@size"])._x())).__minus((1))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index,start:start},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowAt: index\x0a\x09| start |\x0a\x09start := self indexOf: (Point x: 1 y: index).\x0a\x09^ Cells new: (cells copyFrom: start to: (start + size x - 1))",
referencedClasses: ["Point", "Cells"],
//>>excludeEnd("ide");
messageSends: ["indexOf:", "x:y:", "new:", "copyFrom:to:", "-", "+", "x"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "rowDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(1)._to_do_($recv(self["@size"])._y(),(function(row){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self._rowAt_(row));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowDo:",{aBlock:aBlock},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "rowDo: aBlock\x0a\x091 to: size y do: [ :row |\x0a\x09\x09aBlock value:  (self rowAt: row) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "y", "value:", "rowAt:"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self["@size"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09\x22I return a point with x and y sizes\x22\x0a\x09^ size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "size:",
protocol: 'as yet unclassified',
fn: function (aSize){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@size"]=aSize;
self["@cells"]=$recv((1)._to_($recv($recv(self["@size"])._x()).__star($recv(self["@size"])._y())))._collect_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Cell)._unknown();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size:",{aSize:aSize},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSize"],
source: "size: aSize\x0a\x09size := aSize.\x0a\x09cells := (1 to: (size x * size y)) collect: [ Cell unknown ]",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["collect:", "to:", "*", "x", "y", "unknown"]
}),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "space:",
protocol: 'as yet unclassified',
fn: function (point){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._at_put_(point,$recv($globals.Cell)._space());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space:",{point:point},$globals.Grid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "space: point\x0a\x09self at: point put: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "space"]
}),
$globals.Grid);



$core.addClass('Hint', $globals.Object, ['numbers'], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Hint.comment="List of numbers";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'as yet unclassified',
fn: function (hint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@numbers"]).__eq($recv(hint)._numbers());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{hint:hint},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "= hint\x0a\x09^ numbers = hint numbers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "numbers"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (index){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@numbers"])._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "at: index\x0a\x09^ numbers at: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'as yet unclassified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@numbers"])._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09numbers do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "first",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@numbers"])._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x09^ numbers first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "firstRemoved:",
protocol: 'as yet unclassified',
fn: function(n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Hint)._new_($recv(self["@numbers"])._copyFrom_to_($recv(n).__plus((1)),$recv(self["@numbers"])._size()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstRemoved:",{n:n},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "firstRemoved: n\x0a\x09^ Hint new: (numbers copyFrom: (n+1) to: numbers size)",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
messageSends: ["new:", "copyFrom:to:", "+", "size"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@numbers"]).__eq([]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09numbers = #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@numbers"])._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ numbers isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isEmpty"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "lastRemoved:",
protocol: 'as yet unclassified',
fn: function(n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Hint)._new_($recv(self["@numbers"])._copyFrom_to_((1),$recv($recv(self["@numbers"])._size()).__minus(n)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastRemoved:",{n:n},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "lastRemoved: n\x0a\x09^ Hint new: (numbers copyFrom: 1 to: numbers size - n)",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
messageSends: ["new:", "copyFrom:to:", "-", "size"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "max",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv(self["@numbers"])._inject_into_((0),(function(r,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(e).__gt(r);
if($core.assert($1)){
return e;
} else {
return r;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"max",{},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "max\x0a\x09^ numbers\x0a\x09\x09inject: 0\x0a\x09\x09into: [ :r :e | e > r ifTrue: [e] ifFalse: [r] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "ifTrue:ifFalse:", ">"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "min",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv(self["@numbers"])._inject_into_((1000),(function(r,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(e).__lt(r);
if($core.assert($1)){
return e;
} else {
return r;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"min",{},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "min\x0a\x09^ numbers\x0a\x09\x09inject: 1000\x0a\x09\x09into: [ :r :e | e < r ifTrue: [e] ifFalse: [r] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "ifTrue:ifFalse:", "<"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "numbers",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
return self["@numbers"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numbers\x0a\x09^ numbers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "numbers:",
protocol: 'as yet unclassified',
fn: function(array){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(array)._isString();
if($core.assert($1)){
self["@numbers"]=$recv($recv($recv(array)._tokenize_(" "))._asArray())._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self["@numbers"];
return self;
};
self["@numbers"]=array;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numbers:",{array:array},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["array"],
source: "numbers: array\x0a\x09array isString ifTrue: [\x0a\x09\x09numbers := (array tokenize: ' ') asArray collect: [ :e | e asNumber].\x0a\x09\x09^ self].\x0a\x09numbers := array",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isString", "collect:", "asArray", "tokenize:", "asNumber"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("[ ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(self["@numbers"])._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(n)._printOn_(stream);
return $recv(stream)._space();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(stream)._nextPutAll_("]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '[ '.\x0a\x09numbers do: [ :n |\x0a\x09\x09n printOn: stream.\x0a\x09\x09stream space ].\x0a\x09stream nextPutAll: ']'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "do:", "printOn:", "space"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Hint)._new_($recv(self["@numbers"])._reversed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09^ Hint new: numbers reversed",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
messageSends: ["new:", "reversed"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@numbers"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ numbers size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.Hint);


$core.addMethod(
$core.method({
selector: "new:",
protocol: 'as yet unclassified',
fn: function (numbers){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._numbers_(numbers);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{numbers:numbers},$globals.Hint.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["numbers"],
source: "new: numbers\x0a\x09^ self new numbers: numbers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["numbers:", "new"]
}),
$globals.Hint.klass);


$core.addClass('Hints', $globals.Object, ['hints'], 'Logimage');
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'as yet unclassified',
fn: function (hint){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=self["@hints"];
$3=$recv(hint)._isKindOf_($globals.Hint);
if($core.assert($3)){
$2=hint;
} else {
$2=$recv($recv($globals.Hint)._new())._numbers_(hint);
};
$recv($1)._add_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{hint:hint},$globals.Hints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "add: hint\x0a\x09hints add: (\x0a\x09\x09(hint isKindOf: Hint)\x0a\x09\x09\x09ifTrue: [ hint ]\x0a\x09\x09\x09ifFalse: [ Hint new numbers: hint ])",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
messageSends: ["add:", "ifTrue:ifFalse:", "isKindOf:", "numbers:", "new"]
}),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (index){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@hints"])._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},$globals.Hints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "at: index\x0a\x09^ hints at: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'as yet unclassified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@hints"])._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.Hints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09hints do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
self["@hints"]=[];
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09hints := {}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "maxSize",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
return $recv(self["@hints"])._inject_into_((0),(function(a,c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(c)._numbers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["numbers"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv(a).__gt($2);
if($core.assert($1)){
return a;
} else {
return $recv($recv(c)._numbers())._size();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxSize",{},$globals.Hints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxSize\x0a\x09^ hints inject: 0 into: [:a :c | (a > c  numbers size) ifTrue: [a] ifFalse: [c numbers size]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "ifTrue:ifFalse:", ">", "size", "numbers"]
}),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'as yet unclassified',
fn: function (stream){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@hints"])._do_((function(hint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(hint)._printOn_(stream);
return $recv(stream)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({hint:hint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.Hints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09hints do: [ :hint |\x0a\x09\x09hint printOn: stream.\x0a\x09\x09stream cr ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "printOn:", "cr"]
}),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@hints"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Hints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ hints size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.Hints);



$core.addClass('Line', $globals.Object, ['hint', 'cells'], 'Logimage');
$core.addMethod(
$core.method({
selector: "=",
protocol: 'accessing',
fn: function (line){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@hint"]).__eq($recv(line)._hint());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_($recv(self["@cells"]).__eq($recv(line)._cells()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{line:line},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "= line\x0a\x09^ (hint = line hint) and: (cells = line cells)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "hint", "cells"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "cells",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
return self["@cells"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cells\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "cells:",
protocol: 'accessing',
fn: function(anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._isString();
if($core.assert($1)){
self["@cells"]=$recv($globals.Cells)._new_(anObject);
self["@cells"];
return self;
};
self["@cells"]=anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cells:",{anObject:anObject},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cells: anObject\x0a\x09anObject isString ifTrue: [\x0a\x09\x09cells := Cells new: anObject.\x0a\x09\x09^ self].\x0a\x09cells := anObject",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isString", "new:"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "hint",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
return self["@hint"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hint\x0a\x09^ hint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "hint:",
protocol: 'accessing',
fn: function(anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._isString();
if($core.assert($1)){
self["@hint"]=$recv($globals.Hint)._new_(anObject);
self["@hint"];
return self;
};
self["@hint"]=anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hint:",{anObject:anObject},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "hint: anObject\x0a\x09anObject isString ifTrue: [\x0a\x09\x09hint := Hint new: anObject.\x0a\x09\x09^ self ].\x0a\x09hint := anObject",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isString", "new:"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "isDone",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
return $globals.False;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDone\x0a\x09^ False",
referencedClasses: ["False"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "line:",
protocol: 'accessing',
fn: function(aLine){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(aLine)._isString();
if($core.assert($1)){
var parts;
parts=$recv(aLine)._tokenize_("|");
parts;
$2=$recv(parts)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._hint_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hint:"]=1;
//>>excludeEnd("ctx");
$3=self._cells_($recv(parts)._at_((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cells:"]=1;
//>>excludeEnd("ctx");
$3;
return self;
};
self._hint_($recv(aLine)._hint());
self._cells_($recv(aLine)._cells());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"line:",{aLine:aLine},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLine"],
source: "line: aLine\x0a\x09aLine isString ifTrue: [ | parts |\x0a\x09\x09parts := aLine tokenize: '|'.\x0a\x09\x09self hint:  (parts at: 1);\x0a\x09    \x09 cells: (parts at: 2).\x0a\x09\x09^ self ].\x0a\x09self hint:  aLine hint;\x0a\x09     cells: aLine cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isString", "tokenize:", "hint:", "at:", "cells:", "hint", "cells"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@hint"])._printOn_(stream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=1;
//>>excludeEnd("ctx");
$recv(self["@cells"])._printOn_(stream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09hint printOn: stream.\x0a\x09cells printOn: stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "reducedFirst",
protocol: 'accessing',
fn: function (){
var self=this;
var dones,first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
var $early={};
try {
dones=$recv(self["@cells"])._firstDones();
first=$recv(dones)._numbers();
$recv(first)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[self._trimFirst()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=self["@hint"];
$3=$recv(first)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._firstRemoved_($3);
return $recv($globals.Line)._hint_cells_($1,$recv(self["@cells"])._copyFrom_($recv($recv(dones)._size()).__plus((1))));
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reducedFirst",{dones:dones,first:first},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reducedFirst\x0a\x09| dones first |\x0a\x09dones := cells firstDones.\x0a\x09first :=  dones numbers.\x0a\x09first ifEmpty: [ ^ self trimFirst ].\x0a\x09^ Line\x0a\x09\x09hint: (hint firstRemoved: first size)\x0a\x09\x09cells: (cells copyFrom: (dones size)+1) \x22copy after dones\x22",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["firstDones", "numbers", "ifEmpty:", "trimFirst", "hint:cells:", "firstRemoved:", "size", "copyFrom:", "+"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "reducedLast",
protocol: 'accessing',
fn: function (){
var self=this;
var dones,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$7,$6,$4;
var $early={};
try {
dones=$recv(self["@cells"])._lastDones();
last=$recv(dones)._numbers();
$recv(last)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[self._trimLast()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=self["@hint"];
$3=$recv(last)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._lastRemoved_($3);
$5=self["@cells"];
$7=$recv(self["@cells"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__minus($recv(dones)._size());
$4=$recv($5)._copyFrom_to_((1),$6);
return $recv($globals.Line)._hint_cells_($1,$4);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reducedLast",{dones:dones,last:last},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reducedLast\x0a\x09| dones last |\x0a\x09dones := cells lastDones.\x0a\x09last :=  dones numbers.\x0a\x09last ifEmpty: [ ^ self trimLast ].\x0a\x09\x22self assert: ((hint numbers) endsWith: last).\x22\x0a\x09^ Line\x0a\x09\x09hint: (hint lastRemoved: last size)\x0a\x09\x09cells: (cells copyFrom: 1 to: cells size - dones size)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["lastDones", "numbers", "ifEmpty:", "trimLast", "hint:cells:", "lastRemoved:", "size", "copyFrom:to:", "-"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.Line)._new();
$2=$recv(self["@hint"])._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
$recv($1)._hint_($2);
return $recv($1)._cells_($recv(self["@cells"])._reversed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09^ Line new hint: hint reversed; cells: cells reversed",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["hint:", "new", "reversed", "cells:"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "trim",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_(self._hint(),$recv(self._cells())._trim());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trim",{},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trim\x0a\x09^ Line hint: self hint cells: self cells trim",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["hint:cells:", "hint", "trim", "cells"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "trimFirst",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_(self._hint(),$recv(self._cells())._trimFirst());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimFirst",{},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimFirst\x0a\x09^ Line hint: self hint cells: self cells trimFirst",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["hint:cells:", "hint", "trimFirst", "cells"]
}),
$globals.Line);

$core.addMethod(
$core.method({
selector: "trimLast",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_(self._hint(),$recv(self._cells())._trimLast());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLast",{},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimLast\x0a\x09^ Line hint: self hint cells: self cells trimLast",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["hint:cells:", "hint", "trimLast", "cells"]
}),
$globals.Line);


$core.addMethod(
$core.method({
selector: "hint:cells:",
protocol: 'as yet unclassified',
fn: function (hint,cells){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._hint_(hint);
return $recv($1)._cells_(cells);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hint:cells:",{hint:hint,cells:cells},$globals.Line.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint", "cells"],
source: "hint: hint cells: cells\x0a\x09^ self new hint: hint; cells: cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hint:", "new", "cells:"]
}),
$globals.Line.klass);

$core.addMethod(
$core.method({
selector: "new:",
protocol: 'as yet unclassified',
fn: function(line){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._line_(line);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{line:line},$globals.Line.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "new: line\x0a\x09^ self new line: line",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["line:", "new"]
}),
$globals.Line.klass);


$core.addClass('Logimage', $globals.Object, ['row', 'col', 'grid'], 'Logimage');
$core.addMethod(
$core.method({
selector: "addColHints:",
protocol: 'as yet unclassified',
fn: function (hints){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@col"])._add_(hints);
self._resize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addColHints:",{hints:hints},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hints"],
source: "addColHints: hints\x0a\x09col add: hints.\x0a\x09self resize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "resize"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "addRowHints:",
protocol: 'as yet unclassified',
fn: function (hints){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@row"])._add_(hints);
self._resize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addRowHints:",{hints:hints},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hints"],
source: "addRowHints: hints\x0a\x09row add: hints.\x0a\x09self resize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "resize"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "box:",
protocol: 'as yet unclassified',
fn: function (point){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@grid"])._box_(point);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"box:",{point:point},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "box: point\x0a\x09grid box: point",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["box:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colCellsAt:",
protocol: 'accessing',
fn: function (index){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@grid"])._colAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colCellsAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colCellsAt: index\x0a\x09^ grid colAt: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["colAt:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colHintAt:",
protocol: 'accessing',
fn: function (index){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@col"])._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colHintAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colHintAt: index\x0a\x09^ col at: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colHints",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
return self["@col"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colHints\x0a\x09^ col",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colLineAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_(self._colHintAt_(index),self._colCellsAt_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colLineAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colLineAt: index\x0a\x09^ Line\x0a\x09\x09hint: (self colHintAt: index)\x0a\x09\x09cells: (self colCellsAt: index)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["hint:cells:", "colHintAt:", "colCellsAt:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colLines",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((1)._to_($recv(self["@col"])._size()))._collect_((function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._colLineAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colLines",{},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colLines\x0a\x09^ (1 to: col size) collect: [ :index |\x0a\x09\x09\x09self colLineAt: index ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "to:", "size", "colLineAt:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "grid",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
return self["@grid"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "grid\x0a\x09^ grid",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@row"]=$recv($globals.Hints)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@col"]=$recv($globals.Hints)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@grid"]=$recv($globals.Grid)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09row := Hints new.\x0a\x09col := Hints new.\x0a\x09grid := Grid new",
referencedClasses: ["Hints", "Grid"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "resize",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
var newsize;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@col"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
newsize=$recv($globals.Point)._x_y_($1,$recv(self["@row"])._size());
$recv(self["@grid"])._size_(newsize);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resize",{newsize:newsize},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resize\x0a\x09| newsize |\x0a\x09newsize := Point x: (col size) y: (row size).\x0a\x09grid size: newsize",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:", "size", "size:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowCellsAt:",
protocol: 'accessing',
fn: function (index){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@grid"])._rowAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowCellsAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowCellsAt: index\x0a\x09^ grid rowAt: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rowAt:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowHintAt:",
protocol: 'accessing',
fn: function (index){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@row"])._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowHintAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowHintAt: index\x0a\x09^ row at: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowHints",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
return self["@row"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rowHints\x0a\x09^ row",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowLineAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_(self._rowHintAt_(index),self._rowCellsAt_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowLineAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowLineAt: index\x0a\x09^ Line\x0a\x09\x09hint: (self rowHintAt: index)\x0a\x09\x09cells: (self rowCellsAt: index)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["hint:cells:", "rowHintAt:", "rowCellsAt:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowLines",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((1)._to_($recv(self["@row"])._size()))._collect_((function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._rowLineAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowLines",{},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rowLines\x0a\x09^ (1 to: row size) collect: [ :index |\x0a\x09\x09\x09self rowLineAt: index ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "to:", "size", "rowLineAt:"]
}),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "space:",
protocol: 'as yet unclassified',
fn: function (point){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@grid"])._space_(point);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space:",{point:point},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "space: point\x0a\x09grid space: point",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["space:"]
}),
$globals.Logimage);


$core.addMethod(
$core.method({
selector: "chat",
protocol: 'examples',
fn: function(){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._rows_cols_([[(7), (2), (1), (2), (1)], [(1), (1), (2), (2), (3), (2), (3)], [(1), (1), (3), (3), (3), (3), (3)], [(7), (1), (1), (3), (1), (1), (3)], [(1), (1), (1), (3), (3), (1), (2), (2)], [(1), (1), (1), (3), (3), (3), (1), (1)], [(1), (1), (1), (3), (3), (3), (3), (3)], [(1), (1), (1), (3), (3), (3), (3), (3)], [(7), (3), (3), (3), (3), (3)], [(9), (3), (3), (3)], [(7), (2), (10), (7)], [(7), (1), (14)], [(1), (1), (1), (1), (3)], [(1), (1), (1), (3), (2), (1)], [(1), (1), (5), (3), (1), (3), (1)], [(1), (1), (9), (5), (3), (1)], [(11), (7), (6)], [(29)], [(1), (24)], [(3), (26)], [(4), (19), (1)], [(1), (5), (7), (2)], [(2), (1), (12), (3)], [(1), (1), (3), (12)], [(1), (1), (2), (2), (2)], [(4), (1), (4), (2), (2), (1)], [(2), (2), (4), (2), (4), (3), (4), (3)], [(1), (3), (1), (4), (1), (2), (1), (5), (1), (1), (1)], [(1), (5), (1), (1), (6), (1), (3), (1), (1), (2)], [(2), (3), (1), (3), (1), (3), (1), (1)], [(6), (2), (5), (2), (3), (2)], [(6), (6), (3), (4)], [(1), (4), (1), (6), (1), (1), (3)], [(1), (4), (1), (7), (1), (1), (3), (1)], [(2), (3), (2), (1), (5), (1), (5), (1)], [(1), (4), (2), (1), (3), (2), (5), (2)], [(1), (3), (1), (2), (4), (6), (1)], [(7), (1), (1), (1), (1), (7), (1)], [(6), (1), (2), (2), (2), (9), (1)], [(5), (2), (9), (1)], [(6), (1), (2), (4), (8)], [(6), (2), (4), (9)], [(8), (5), (4)], [(2), (2), (3), (2)], [(3), (4), (3), (4)]],[[(2), (4), (3)], [(9), (6), (4), (3), (2), (5)], [(1), (1), (1), (2), (2), (2), (8), (1)], [(1), (1), (1), (2), (3), (1), (2), (1), (11), (1)], [(1), (6), (2), (1), (4), (4), (13)], [(1), (1), (1), (6), (1), (2), (14), (8)], [(1), (1), (1), (2), (1), (2), (6), (4), (3)], [(9), (2), (12), (2), (1)], [(5), (2), (1), (1), (5), (3), (1)], [(1), (2), (6), (2), (1), (1), (1), (6)], [(3), (1), (8), (2), (2), (1)], [(2), (6), (7), (1), (1), (2), (4), (1)], [(8), (7), (1), (3), (2), (3)], [(1), (7), (6), (1), (2), (3)], [(2), (2), (7), (1), (5)], [(2), (7), (8), (1), (3), (9)], [(9), (8), (2), (2), (1), (7), (1)], [(1), (7), (6), (13), (1), (1)], [(2), (2), (4), (10), (4), (2)], [(3), (2), (5), (1), (1), (8), (1), (1)], [(3), (7), (7), (2), (1), (1), (2)], [(10), (6), (1), (3), (2)], [(7), (8), (1), (2), (3), (2)], [(1), (1), (8), (1), (4), (3), (3)], [(3), (6), (8), (1), (2), (2), (5), (4)], [(1), (8), (6), (2), (4), (1), (10), (1)], [(1), (3), (6), (5), (7), (2), (9)], [(1), (2), (6), (1), (6), (9)], [(4), (6), (7), (2), (12)], [(11), (6), (12), (7)], [(2), (7), (6), (1), (1), (2), (8)], [(2), (5), (2), (1), (1), (1), (3), (5)], [(5), (2), (1), (1), (1), (8), (1)], [(1), (2), (1), (1), (1)], [(3), (3)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chat",{},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chat\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#(       7 2 1 2 1 )\x0a\x09\x09\x09#(   1 1 2 2 3 2 3 )\x0a\x09\x09\x09#(   1 1 3 3 3 3 3 )\x0a\x09\x09\x09#(   7 1 1 3 1 1 3 )\x0a\x09\x09\x09#( 1 1 1 3 3 1 2 2 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 1 1 3 3 3 1 1 )\x0a\x09\x09\x09#( 1 1 1 3 3 3 3 3 )\x0a\x09\x09\x09#( 1 1 1 3 3 3 3 3 )\x0a\x09\x09\x09#(     7 3 3 3 3 3 )\x0a\x09\x09\x09#(         9 3 3 3 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(        7 2 10 7 )\x0a\x09\x09\x09#(          7  1 14 )\x0a\x09\x09\x09#(       1 1 1 1 3 )\x0a\x09\x09\x09#(     1 1 1 3 2 1 )\x0a\x09\x09\x09#(   1 1 5 3 1 3 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(     1 1 9 5 3 1 )\x0a\x09\x09\x09#(          11 7 6 )\x0a\x09\x09\x09#(               29 )\x0a\x09\x09\x09#(             1 24 )\x0a\x09\x09\x09#(             3 26 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(          4 19 1 )\x0a\x09\x09\x09#(        1 5  7 2 )\x0a\x09\x09\x09#(        2 1 12 3 )\x0a\x09\x09\x09#(        1 1  3 12 )\x0a\x09\x09\x09#(      1 1 2  2 2 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(           4 1 4 2 2 1 )\x0a\x09\x09\x09#(       2 2 4 2 4 3 4 3 )\x0a\x09\x09\x09#( 1 3 1 4 1 2 1 5 1 1 1 )\x0a\x09\x09\x09#(   1 5 1 1 6 1 3 1 1 2 )\x0a\x09\x09\x09#(       2 3 1 3 1 3 1 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(     6 2 5 2 3 2 )\x0a\x09\x09\x09#(         6 6 3 4 )\x0a\x09\x09\x09#(   1 4 1 6 1 1 3 )\x0a\x09\x09\x09#( 1 4 1 7 1 1 3 1 )\x0a\x09\x09\x09#( 2 3 2 1 5 1 5 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 4 2 1 3 2 5 2 )\x0a\x09\x09\x09#(   1 3 1 2 4 6 1 )\x0a\x09\x09\x09#(   7 1 1 1 1 7 1 )\x0a\x09\x09\x09#(   6 1 2 2 2 9 1 )\x0a\x09\x09\x09#(         5 2 9 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 6 1 2 4 8 )\x0a\x09\x09\x09#(   6 2 4 9 )\x0a\x09\x09\x09#(     8 5 4 )\x0a\x09\x09\x09#(   2 2 3 2 )\x0a\x09\x09\x09#(   3 4 3 4 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 2 4 3 )\x0a\x09\x09\x09#( 9 6 4 3 2 5 )\x0a\x09\x09\x09#( 1 1 1 2 2 2 8 1 )\x0a\x09\x09\x09#( 1 1 1 2 3 1 2 1 11 1 )\x0a\x09\x09\x09#( 1 6 2 1 4 4 13 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 1 1 6 1 2 14 8 )\x0a\x09\x09\x09#( 1 1 1 2 1 2 6 4 3 )\x0a\x09\x09\x09#( 9 2 12 2 1 )\x0a\x09\x09\x09#( 5 2 1 1 5 3 1 )\x0a\x09\x09\x09#( 1 2 6 2 1 1 1 6 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 1 8 2 2 1 )\x0a\x09\x09\x09#( 2 6 7 1 1 2 4 1 )\x0a\x09\x09\x09#( 8 7 1 3 2 3 )\x0a\x09\x09\x09#( 1 7 6 1 2 3 )\x0a\x09\x09\x09#( 2 2 7 1 5 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 2 7 8 1 3 9 )\x0a\x09\x09\x09#( 9 8 2 2 1 7 1 )\x0a\x09\x09\x09#( 1 7 6 13 1 1 )\x0a\x09\x09\x09#( 2 2 4 10 4 2 )\x0a\x09\x09\x09#( 3 2 5 1 1 8 1 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 7 7 2 1 1 2 )\x0a\x09\x09\x09#( 10 6 1 3 2 )\x0a\x09\x09\x09#( 7 8 1 2 3 2 )\x0a\x09\x09\x09#( 1 1 8 1 4 3 3 )\x0a\x09\x09\x09#( 3 6 8 1 2 2 5 4 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 8 6 2 4 1 10 1 )\x0a\x09\x09\x09#( 1 3 6 5 7 2 9 )\x0a\x09\x09\x09#( 1 2 6 1 6 9 )\x0a\x09\x09\x09#( 4 6 7 2 12 )\x0a\x09\x09\x09#( 11 6 12 7 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 2 7 6 1 1 2 8 )\x0a\x09\x09\x09#( 2 5 2 1 1 1 3 5 )\x0a\x09\x09\x09#( 5 2 1 1 1 8 1 )\x0a\x09\x09\x09#( 1 2 1 1 1 )\x0a\x09\x09\x09#( 3 3 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rows:cols:"]
}),
$globals.Logimage.klass);

$core.addMethod(
$core.method({
selector: "joconde",
protocol: 'examples',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._rows_cols_([[(4)], [(1), (2)], [(1), (2)], [(1), (2)], [(1), (2)], [(2), (2)], [(1), (1)], [(2), (2)], [(3), (3)], [(9)], [(9)], [(10)], [(1), (1), (1), (2)], [(2), (4)], [(3), (4)]],[[(4)], [(3), (2)], [(6), (1)], [(11)], [(1), (1), (4)], [(1), (4)], [(1), (3), (2)], [(6), (4), (2)], [(14)], [(8)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"joconde",{},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "joconde\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 4 )\x0a\x09\x09\x09#( 1 2 )\x0a\x09\x09\x09#( 1 2 )\x0a\x09\x09\x09#( 1 2 )\x0a\x09\x09\x09#( 1 2 )\x0a\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 1 1 )\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 3 3 )\x0a\x09\x09\x09#( 9 )\x0a\x0a\x09\x09\x09#( 9 )\x0a\x09\x09\x09#( 10 )\x0a\x09\x09\x09#( 1 1 1 2 )\x0a\x09\x09\x09#( 2 4 )\x0a\x09\x09\x09#( 3 4 ) )\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 4 )\x0a\x09\x09\x09#( 3 2 )\x0a\x09\x09\x09#( 6 1 )\x0a\x09\x09\x09#( 11 )\x0a\x09\x09\x09#( 1 1 4 )\x0a\x0a\x09\x09\x09#( 1 4 )\x0a\x09\x09\x09#( 1 3 2 )\x0a\x09\x09\x09#( 6 4 2 )\x0a\x09\x09\x09#( 14 )\x0a\x09\x09\x09#( 8 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rows:cols:"]
}),
$globals.Logimage.klass);

$core.addMethod(
$core.method({
selector: "question",
protocol: 'examples',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._rows_cols_([[(3)], [(2), (2)], [(1), (1)], [(2)], [(2)], [(1)], [(1)], [], [(1)]],[[(2)], [(2)], [(1), (3), (1)], [(2), (2)], [(3)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"question",{},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "question\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 3 )\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 1 1 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( )\x0a\x09\x09\x09#( 1 )\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 1 3 1 )\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 3 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rows:cols:"]
}),
$globals.Logimage.klass);

$core.addMethod(
$core.method({
selector: "rows:cols:",
protocol: 'examples',
fn: function (rows,cols){
var self=this;
var l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
l=self._new();
$recv(rows)._do_((function(hint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(l)._addRowHints_(hint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({hint:hint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(cols)._do_((function(hint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(l)._addColHints_(hint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({hint:hint},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rows:cols:",{rows:rows,cols:cols,l:l},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rows", "cols"],
source: "rows: rows cols: cols\x0a\x09| l |\x0a\x09l := self new.\x0a\x09rows do: [ :hint | l addRowHints: hint ].\x0a\x09cols do: [ :hint | l addColHints: hint ].\x0a\x09^ l",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "addRowHints:", "addColHints:"]
}),
$globals.Logimage.klass);

$core.addMethod(
$core.method({
selector: "simple",
protocol: 'examples',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._rows_cols_([[(1)], [(2)]],[[(1)], [(2)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"simple",{},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "simple\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rows:cols:"]
}),
$globals.Logimage.klass);

$core.addMethod(
$core.method({
selector: "vainqueur",
protocol: 'examples',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._rows_cols_([[(5)], [(4), (7)], [(2), (1), (9), (2)], [(1), (1), (9), (1), (2)], [(2), (1), (2), (3), (1), (1)], [(2), (1), (1), (1), (1), (1), (2), (1)], [(2), (1), (1), (1), (2), (3)], [(6), (1), (1), (1), (2), (2)], [(5), (4), (4), (2)], [(6), (1), (5)], [(4), (5), (5)], [(4), (6), (5)], [(7), (13), (2), (2)], [(2), (12), (2), (4)], [(5), (2), (14), (3), (3)], [(2), (13), (3)], [(3), (3)], [(5), (4)], [(17)], [(11)], [(7), (2)], [(2), (2), (1)], [(7), (1)], [(10), (1), (1), (1), (1), (11)], [(5), (2), (1), (1), (1), (1), (2), (2), (2), (5)], [(4), (3), (1), (1), (1), (2), (1), (1), (2), (3), (4)], [(3), (4), (1), (1), (1), (2), (1), (2), (4), (3)], [(2), (4), (2), (5), (1), (1), (4), (4), (2)], [(1), (5), (2), (1), (1), (4), (4), (5), (1)], [(5), (3), (1), (1), (1), (5), (6)], [(6), (3), (1), (1), (5), (5), (6)], [(5), (3), (3), (1), (5), (5), (6)], [(5), (3), (6), (5), (5), (6)], [(4), (5), (4), (6), (6), (5)], [(4), (6), (8), (6), (5)]],[[(1), (1), (6), (5)], [(1), (1), (5), (6)], [(1), (1), (4), (7)], [(3), (1), (1), (3), (8)], [(2), (2), (1), (2), (2), (7)], [(1), (2), (1), (2), (1), (6), (2)], [(1), (2), (2), (2), (6), (4)], [(3), (3), (2), (3), (4), (6)], [(2), (4), (1), (2), (1), (8)], [(6), (1), (2), (8), (2)], [(6), (1), (2), (2), (1)], [(14), (16)], [(4), (1), (5), (5), (1), (3)], [(4), (1), (1), (1), (4), (3), (1), (1), (2)], [(4), (1), (1), (4), (3), (1), (1), (3)], [(4), (1), (1), (4), (3), (11), (1)], [(4), (1), (1), (1), (4), (3), (1), (2)], [(5), (2), (1), (4), (3), (4), (6)], [(4), (1), (5), (2), (1), (4), (5)], [(7), (6), (2), (1), (1), (1), (5)], [(8), (4), (1), (1), (5)], [(9), (8), (2), (5)], [(9), (2), (3), (1)], [(2), (3), (1), (3), (8)], [(2), (2), (1), (1), (12)], [(1), (2), (1), (2), (12)], [(1), (2), (1), (1), (1), (8)], [(2), (1), (1), (2), (4), (5)], [(4), (1), (1), (7), (2)], [(1), (2), (1), (8)], [(1), (1), (2), (9)], [(1), (1), (3), (8)], [(1), (2), (4), (7)], [(2), (1), (5), (6)], [(1), (1), (6), (5)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vainqueur",{},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vainqueur\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 5 )\x0a\x09\x09\x09#( 4 7 )\x0a\x09\x09\x09#( 2 1 9 2 )\x0a\x09\x09\x09#( 1 1 9 1 2)\x0a\x09\x09\x09#( 2 1 2 3 1 1 )\x0a\x0a\x09\x09\x09#( 2 1 1 1 1 1 2 1 )\x0a\x09\x09\x09#( 2 1 1 1 2 3 )\x0a\x09\x09\x09#( 6 1 1 1 2 2 )\x0a\x09\x09\x09#( 5 4 4 2 )\x0a\x09\x09\x09#( 6 1 5 )\x0a\x0a\x09\x09\x09#( 4 5 5 )\x0a\x09\x09\x09#( 4 6 5 )\x0a\x09\x09\x09#( 7 13 2 2 )\x0a\x09\x09\x09#( 2 12 2 4 )\x0a\x09\x09\x09#( 5 2 14 3 3 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 2 13 3 )\x0a\x09\x09\x09#( 3 3 )\x0a\x09\x09\x09#( 5 4 )\x0a\x09\x09\x09#( 17 )\x0a\x09\x09\x09#( 11 )\x0a\x0a\x09\x09\x09#( 7 2 )\x0a\x09\x09\x09#( 2 2 1 )\x0a\x09\x09\x09#( 7 1 )\x0a\x09\x09\x09#( 10 1 1 1 1 11 )\x0a\x09\x09\x09#( 5 2 1 1 1 1 2 2 2 5 )\x0a\x0a\x09\x09\x09#( 4 3 1 1 1 2 1 1 2 3 4 )\x0a\x09\x09\x09#( 3 4 1 1 1 2 1 2 4 3 )\x0a\x09\x09\x09#( 2 4 2 5 1 1 4 4 2 )\x0a\x09\x09\x09#( 1 5 2 1 1 4 4 5 1 )\x0a\x09\x09\x09#( 5 3 1 1 1 5 6 )\x0a\x0a\x09\x09\x09#( 6 3 1 1 5 5 6 )\x0a\x09\x09\x09#( 5 3 3 1 5 5 6 )\x0a\x09\x09\x09#( 5 3 6 5 5 6 )\x0a\x09\x09\x09#( 4 5 4 6 6 5 )\x0a\x09\x09\x09#( 4 6 8 6 5 )\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 1 1 6 5 )\x0a\x09\x09\x09#( 1 1 5 6 )\x0a\x09\x09\x09#( 1 1 4 7 )\x0a\x09\x09\x09#( 3 1 1 3 8 )\x0a\x09\x09\x09#( 2 2 1 2 2 7 )\x0a\x0a\x09\x09\x09#( 1 2 1 2 1 6 2 )\x0a\x09\x09\x09#( 1 2 2 2 6 4 )\x0a\x09\x09\x09#( 3 3 2 3 4 6 )\x0a\x09\x09\x09#( 2 4 1 2 1 8 )\x0a\x09\x09\x09#( 6 1 2 8 2 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 6 1 2 2 1 )\x0a\x09\x09\x09#( 14 16 )\x0a\x09\x09\x09#( 4 1 5 5 1 3 )\x0a\x09\x09\x09#( 4 1 1 1 4 3 1 1 2 )\x0a\x09\x09\x09#( 4 1 1 4 3 1 1 3 )\x0a\x0a\x09\x09\x09#( 4 1 1 4 3 11 1 )\x0a\x09\x09\x09#( 4 1 1 1 4 3 1 2)\x0a\x09\x09\x09#( 5 2 1 4 3 4 6 )\x0a\x09\x09\x09#( 4 1 5 2 1 4 5 )\x0a\x09\x09\x09#( 7 6 2 1 1 1 5 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 8 4 1 1 5 )\x0a\x09\x09\x09#( 9 8 2 5 )\x0a\x09\x09\x09#( 9 2 3 1 )\x0a\x09\x09\x09#( 2 3 1 3 8 )\x0a\x09\x09\x09#( 2 2 1 1 12 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 1 2 1 2 12 )\x0a\x09\x09\x09#( 1 2 1 1 1 8 )\x0a\x09\x09\x09#( 2 1 1 2 4 5 )\x0a\x09\x09\x09#( 4 1 1 7 2 )\x0a\x09\x09\x09#( 1 2 1 8 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 1 1 2 9 )\x0a\x09\x09\x09#( 1 1 3 8 )\x0a\x09\x09\x09#( 1 2 4 7 )\x0a\x09\x09\x09#( 2 1 5 6 )\x0a\x09\x09\x09#( 1 1 6 5 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rows:cols:"]
}),
$globals.Logimage.klass);


$core.addClass('Strategies', $globals.Object, ['list'], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Strategies.comment="List of strategy";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (name){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@list"])._at_(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{name:name},$globals.Strategies)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name"],
source: "at: name\x0a\x09^ list at: name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Strategies);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'as yet unclassified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@list"])._valuesDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.Strategies)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09list valuesDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valuesDo:"]
}),
$globals.Strategies);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@list"]=$recv($globals.HashedCollection._newFromPairs_(["spaceonly",$globals.StratSpacesOnly,"alldone",$globals.StratAllDone,"recover",$globals.StratRecover,"notreached",$globals.StratNotReached,"firstcover",$globals.StratFirstCover,"lastcover",$globals.StratLastCover,"minspace",$globals.StratMinSpace,"firstdone",$globals.StratFirstDone,"lastdone",$globals.StratLastDone,"testbox",$globals.StratTestBox,"firstcutspace",$globals.StratFirstCutSpace,"lastcutspace",$globals.StratLastCutSpace]))._collect_((function(strat){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(strat)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({strat:strat},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Strategies)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22TODO should be autodeclared by each instance !\x22\x0a\x09list := #{\x0a\x09\x09#spaceonly -> StratSpacesOnly.\x0a\x09\x09#alldone -> StratAllDone.\x0a\x09\x09#recover -> StratRecover.\x0a\x09\x09#notreached -> StratNotReached.\x0a\x09\x09#firstcover -> StratFirstCover.\x0a\x09\x09#lastcover -> StratLastCover.\x0a\x09\x09#minspace -> StratMinSpace.\x0a\x09\x09#firstdone -> StratFirstDone.\x0a\x09\x09#lastdone -> StratLastDone.\x0a\x09\x09#testbox -> StratTestBox.\x0a\x09\x09#firstcutspace -> StratFirstCutSpace.\x0a\x09\x09#lastcutspace -> StratLastCutSpace.\x0a\x09\x09}\x0a\x09\x09collect: [ :strat | strat new ]",
referencedClasses: ["StratSpacesOnly", "StratAllDone", "StratRecover", "StratNotReached", "StratFirstCover", "StratLastCover", "StratMinSpace", "StratFirstDone", "StratLastDone", "StratTestBox", "StratFirstCutSpace", "StratLastCutSpace"],
//>>excludeEnd("ide");
messageSends: ["collect:", "new"]
}),
$globals.Strategies);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: 'as yet unclassified',
fn: function(aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@list"])._keysAndValuesDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},$globals.Strategies)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09list keysAndValuesDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:"]
}),
$globals.Strategies);


$globals.Strategies.klass.iVarNames = ['instance'];
$core.addMethod(
$core.method({
selector: "instance",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@instance"];
if(($receiver = $1) == null || $receiver.isNil){
self["@instance"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Strategies.klass.superclass||$boot.dnu).fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self["@instance"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.Strategies.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Strategies.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Strategies.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.Strategies.klass);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@instance"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09instance := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Strategies.klass);


$core.addClass('Strategist', $globals.Object, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Strategist.comment="I apply (analyse, get a solution then apply) one or more strategies on a logimage, or a line.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "apply:on:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._apply_onRowOf_(strategy,logimage);
self._apply_onColOf_(strategy,logimage);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:on:",{strategy:strategy,logimage:logimage},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy on: logimage\x0a\x09self apply: strategy onRowOf: logimage.\x0a\x09self apply: strategy onColOf: logimage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["apply:onRowOf:", "apply:onColOf:"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:onColOf:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv($recv(logimage)._grid())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._x();
(1)._to_do_($1,(function(x){
var sol,line,reduced,start;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
line=$recv(logimage)._colLineAt_(x);
line;
reduced=$recv(line)._reducedFirst();
reduced;
$4=$recv(line)._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=2;
//>>excludeEnd("ctx");
start=$recv($3).__minus($recv($recv(reduced)._cells())._size());
start;
sol=$recv(strategy)._analyse_($recv(reduced)._reducedLast());
sol;
return self._setSol_on_atCol_after_(sol,logimage,x,start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,sol:sol,line:line,reduced:reduced,start:start},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:onColOf:",{strategy:strategy,logimage:logimage},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy onColOf: logimage\x0a\x091 to: logimage grid size x do: [ :x | | sol line reduced start |\x0a\x09\x09line := logimage colLineAt: x.\x0a\x09\x09reduced := line reducedFirst.\x0a\x09\x09start := line cells size - reduced cells size.\x0a\x09\x09sol := strategy analyse: reduced reducedLast.\x0a\x09\x09self setSol: sol on: logimage atCol: x after: start ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "x", "size", "grid", "colLineAt:", "reducedFirst", "-", "cells", "analyse:", "reducedLast", "setSol:on:atCol:after:"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:onRowOf:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv($recv(logimage)._grid())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._y();
(1)._to_do_($1,(function(y){
var sol,line,reduced,start;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
line=$recv(logimage)._rowLineAt_(y);
line;
reduced=$recv(line)._reducedFirst();
reduced;
$4=$recv(line)._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=2;
//>>excludeEnd("ctx");
start=$recv($3).__minus($recv($recv(reduced)._cells())._size());
start;
sol=$recv(strategy)._analyse_($recv(reduced)._reducedLast());
sol;
return self._setSol_on_atRow_after_(sol,logimage,y,start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y,sol:sol,line:line,reduced:reduced,start:start},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:onRowOf:",{strategy:strategy,logimage:logimage},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy onRowOf: logimage\x0a\x091 to: logimage grid size y do: [ :y | | sol line reduced start |\x0a\x09\x09line := logimage rowLineAt: y.\x0a\x09\x09reduced := line reducedFirst.\x0a\x09\x09start := line cells size - reduced cells size.\x0a\x09\x09sol := strategy analyse: reduced reducedLast.\x0a\x09\x09self setSol: sol on: logimage atRow: y after: start ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "y", "size", "grid", "rowLineAt:", "reducedFirst", "-", "cells", "analyse:", "reducedLast", "setSol:on:atRow:after:"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "setSol:on:at:",
protocol: 'as yet unclassified',
fn: function (cell,logimage,point){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(cell)._isBox();
if($core.assert($1)){
$recv(logimage)._box_(point);
return self;
};
$2=$recv(cell)._isSpace();
if($core.assert($2)){
$recv(logimage)._space_(point);
return self;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSol:on:at:",{cell:cell,logimage:logimage,point:point},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell", "logimage", "point"],
source: "setSol: cell on: logimage at: point\x0a\x09cell isBox ifTrue: [ logimage box: point. ^ self ].\x0a\x09cell isSpace ifTrue: [ logimage space: point. ^ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isBox", "box:", "isSpace", "space:"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "setSol:on:atCol:after:",
protocol: 'as yet unclassified',
fn: function (cells,logimage,x,start){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(cells)._cells())._withIndexDo_((function(cell,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setSol_on_at_(cell,logimage,$recv(x).__at($recv(y).__plus(start)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSol:on:atCol:after:",{cells:cells,logimage:logimage,x:x,start:start},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells", "logimage", "x", "start"],
source: "setSol: cells on: logimage atCol: x after: start\x0a\x09cells cells withIndexDo: [ :cell :y |\x0a\x09\x09self setSol: cell on: logimage at: x@(y+start) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "cells", "setSol:on:at:", "@", "+"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "setSol:on:atRow:after:",
protocol: 'as yet unclassified',
fn: function (cells,logimage,y,start){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(cells)._cells())._withIndexDo_((function(cell,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setSol_on_at_(cell,logimage,$recv($recv(x).__plus(start)).__at(y));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSol:on:atRow:after:",{cells:cells,logimage:logimage,y:y,start:start},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells", "logimage", "y", "start"],
source: "setSol: cells on: logimage atRow: y after: start\x0a\x09cells cells withIndexDo: [ :cell :x |\x0a\x09\x09self setSol: cell on: logimage at: (x+start)@y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "cells", "setSol:on:at:", "@", "+"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "solve:",
protocol: 'as yet unclassified',
fn: function (logimage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(10)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv($globals.Strategies)._reset())._instance())._do_((function(strategy){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._apply_on_(strategy,logimage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({strategy:strategy},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"solve:",{logimage:logimage},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["logimage"],
source: "solve: logimage\x0a10 timesRepeat: [\x0a\x09Strategies reset instance do: [ :strategy |\x0a\x09\x09self apply: strategy on: logimage ]\x0a\x09]",
referencedClasses: ["Strategies"],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "do:", "instance", "reset", "apply:on:"]
}),
$globals.Strategist);



$core.addClass('Strategy', $globals.Object, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Strategy.comment="I analyse a line and returns a solution with spaces and boxes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line},$globals.Strategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09^ Cells new",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Strategy);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBidirectional",{},$globals.Strategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Strategy);

$core.addMethod(
$core.method({
selector: "none",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"none",{},$globals.Strategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "none\x0a\x09^ Cells new",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Strategy);


$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function(line){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(line)._isString();
if($core.assert($1)){
$3=self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._analyse_($recv($globals.Line)._new_(line));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["analyse:"]=1;
//>>excludeEnd("ctx");
return $2;
};
return $recv(self._new())._analyse_(line);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line},$globals.Strategy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09line isString ifTrue: [\x0a\x09\x09^ self new analyse: (Line new: line) ].\x0a\x09^ self new analyse: line",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isString", "analyse:", "new", "new:"]
}),
$globals.Strategy.klass);


$core.addClass('StratCount', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratCount.comment="I am a helper to implement strategy.\x0aI give some messages to count different sort of cells.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "free:",
protocol: 'as yet unclassified',
fn: function(line){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(line)._hint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hint"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((0));
if($core.assert($1)){
return (0);
};
return $recv($recv($recv(line)._cells())._size()).__minus(self._occupation_($recv(line)._hint()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"free:",{line:line},$globals.StratCount)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "free: line\x0a\x09\x22I return the number of cells that are free to move\x22\x0a\x0a\x09\x22if no more hint, no free spaces\x22\x0a\x09(line hint size = 0) ifTrue: [ ^ 0 ].\x0a\x09^ (line cells size) - (self occupation: line hint)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "size", "hint", "-", "cells", "occupation:"]
}),
$globals.StratCount);

$core.addMethod(
$core.method({
selector: "occupation:",
protocol: 'as yet unclassified',
fn: function(hint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(hint)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((0));
if($core.assert($1)){
return (0);
};
return $recv($recv(self._sum_(hint)).__plus($recv(hint)._size())).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"occupation:",{hint:hint},$globals.StratCount)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "occupation: hint\x0a\x09\x22I return the number of cells filled for all numbers in hint,\x0a\x09 with one space between each, minus one (the last)\x22\x0a\x09(hint size = 0) ifTrue: [ ^ 0 ].\x0a\x09^ (self sum: hint) + hint size - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "size", "-", "+", "sum:"]
}),
$globals.StratCount);

$core.addMethod(
$core.method({
selector: "sum:",
protocol: 'as yet unclassified',
fn: function (hint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(hint)._numbers())._inject_into_((0),(function(s,n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(s).__plus(n);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s,n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sum:",{hint:hint},$globals.StratCount)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "sum: hint\x0a\x09\x22I return the sum of all numbers, without spaces\x22\x0a\x09^ hint numbers inject: 0 into: [ :s :n | s+n ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "numbers", "+"]
}),
$globals.StratCount);



$core.addClass('StratAllDone', $globals.StratCount, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratAllDone.comment="I try to detect if a line is filled with boxes and spaces, ie no more rooms.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function(line){
var self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._free_(line)).__eq((0));
if(!$core.assert($1)){
return self._none();
};
sol=$recv($globals.Cells)._new();
$recv($recv($recv(line)._hint())._numbers())._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=sol;
$recv($2)._addBoxes_(n);
return $recv($2)._addSpaces_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv(sol)._size_($recv($recv(line)._cells())._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol},$globals.StratAllDone)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09\x22If some space remaining, could not find solution\x22\x0a\x09(self free: line) = 0\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x09\x22If no space remaining, all cell are filled\x22\x0a\x09sol := Cells new.\x0a\x09line hint numbers do: [ :n |\x0a\x09\x09sol addBoxes: n;\x0a\x09\x09\x09addSpaces: 1 ].\x0a\x09\x22remove last space if line full\x22\x0a\x09^ sol size: (line cells size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "free:", "none", "new", "do:", "numbers", "hint", "addBoxes:", "addSpaces:", "size:", "size", "cells"]
}),
$globals.StratAllDone);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratAllDone);



$core.addClass('StratRecover', $globals.StratCount, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratRecover.comment="I calculate free available moves. I add box on hint that are bigger then free, then recovers.\x0aExample: hint: 3 on 4 spaces, give 1 free and then | ? X X ? |\x0aDuplicate 'StratAllDone' if free cells are  0 !";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var free,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
free=self._free_(line);
sol=$recv($globals.Cells)._new();
$recv($recv(line)._hint())._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=sol;
$recv($1)._addUnknowns_($recv(n)._min_(free));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["addUnknowns:"]=1;
//>>excludeEnd("ctx");
$recv($1)._addBoxes_($recv(n).__minus(free));
return $recv($1)._addUnknowns_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=sol;
$4=$recv(line)._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._size();
sol=$recv($2)._size_($3);
$5=$recv($recv(line)._cells())._isBetter_(sol);
if(!$core.assert($5)){
return self._none();
};
return sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,free:free,sol:sol},$globals.StratRecover)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| free sol |\x0a\x09free := self free: line.\x0a\x09sol := Cells new.\x0a\x09line hint do: [ :n |\x0a\x09\x09sol addUnknowns: (n min: free);\x0a\x09\x09\x09addBoxes: (n - free);\x0a\x09\x09\x09addUnknowns: 1 ].\x0a\x09\x22remove last unknown if line full\x22\x0a\x09sol := sol size: (line cells size).\x0a\x09(line cells isBetter: sol) ifFalse: [ ^ self none ].\x0a\x09^ sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["free:", "new", "do:", "hint", "addUnknowns:", "min:", "addBoxes:", "-", "size:", "size", "cells", "ifFalse:", "isBetter:", "none"]
}),
$globals.StratRecover);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratRecover);



$core.addClass('StratFirstCover', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstCover.comment="If a first hint crosses a box, all over crossed space are boxes until hint.\x0aExample: hint 3, with box at 2nd place |? X ?  give | ? X X";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function(line){
var self=this;
var pos,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$6,$5,$7,$10,$9,$8,$11,$12,$13,$14;
$2=$recv(line)._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._firstBox();
pos=$recv($1)._at_("pos");
$3=$recv(pos).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($3)){
$4=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=1;
//>>excludeEnd("ctx");
return $4;
};
$6=$recv(line)._hint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hint"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._isEmpty();
if($core.assert($5)){
$7=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=2;
//>>excludeEnd("ctx");
return $7;
};
$10=$recv(line)._hint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hint"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__gt(pos);
if(!$core.assert($8)){
$11=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=3;
//>>excludeEnd("ctx");
return $11;
};
$12=$recv($globals.Cells)._new();
$13=$recv(pos).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv($12)._addUnknowns_($13);
sol=$recv($12)._addBoxes_($recv($recv($recv($recv(line)._hint())._first()).__minus(pos)).__plus((1)));
$14=$recv($recv(line)._cells())._isBetter_(sol);
if(!$core.assert($14)){
return self._none();
};
return sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,pos:pos,sol:sol},$globals.StratFirstCover)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| pos sol |\x0a\x09\x22get first box from start\x22\x0a\x09pos := (line cells firstBox) at: #pos.\x0a\x09\x22no box, no sol\x22\x0a\x09pos > 0 ifFalse: [ ^ self none ].\x0a\x09\x22test if hint, no sol\x22\x0a\x09line hint isEmpty ifTrue: [ ^ self none ].\x0a\x09\x22test hint over first box\x22\x0a\x09line hint first > pos ifFalse: [ ^ self none ].\x0a\x09\x22yes, first hint cross the first box, get sol\x22\x0a\x09sol := Cells new\x0a\x09\x09addUnknowns: pos-1;\x0a\x09\x09addBoxes: line hint first-pos+1.\x0a\x09(line cells isBetter: sol) ifFalse: [ ^ self none ].\x0a\x09^ sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["at:", "firstBox", "cells", "ifFalse:", ">", "none", "ifTrue:", "isEmpty", "hint", "first", "addUnknowns:", "new", "-", "addBoxes:", "+", "isBetter:"]
}),
$globals.StratFirstCover);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratFirstCover);



$core.addClass('StratFirstCutSpace', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstCutSpace.comment="If a line contains a space, I cut in two parts and check if the first hint must be alone in the first part.\x0aIf so, try strategies on this part with first hint.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function(line){
var self=this;
var firstcells,firstline;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5,$6,$8,$7,$9,$11,$10,$12,$13;
var $early={};
try {
$2=$recv(line)._hint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hint"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$3=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=1;
//>>excludeEnd("ctx");
return $3;
};
$4=$recv(line)._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
firstcells=$recv($4)._firstNotSpace();
$5=$recv(firstcells)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=2;
//>>excludeEnd("ctx");
if($core.assert($5)){
$6=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=2;
//>>excludeEnd("ctx");
return $6;
};
$8=$recv(firstcells)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__eq($recv($recv(line)._cells())._size());
if($core.assert($7)){
$9=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=3;
//>>excludeEnd("ctx");
return $9;
};
$11=$recv(line)._hint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hint"]=2;
//>>excludeEnd("ctx");
$10=self._isFirstForced_on_($11,firstcells);
if(!$core.assert($10)){
$12=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=4;
//>>excludeEnd("ctx");
return $12;
};
firstline=$recv($globals.Line)._hint_cells_($recv($globals.Hint)._new_([$recv($recv(line)._hint())._first()]),firstcells);
$recv($recv($globals.Strategies)._instance())._do_((function(strategy){
var res;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
res=$recv(strategy)._analyse_(firstline);
res;
$13=$recv(res)._isEmpty();
if(!$core.assert($13)){
throw $early=[res];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({strategy:strategy,res:res},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return self._none();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,firstcells:firstcells,firstline:firstline},$globals.StratFirstCutSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| firstcells firstline |\x0a\x09\x22check min hint size\x22\x0a\x09line hint isEmpty ifTrue: [ ^ self none ].\x0a\x0a\x09\x22get first cells and check some rules\x22\x0a\x09firstcells := line cells firstNotSpace.\x0a\x09\x22if no space, already done by other firstXXX\x22\x0a\x09firstcells isEmpty ifTrue: [ ^ self none ].\x0a\x09firstcells size = line cells size ifTrue: [ ^ self none ].\x0a\x0a\x09\x22check if only first number forced to be inside first cells\x22\x0a\x09(self isFirstForced: line hint on: firstcells)\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x0a\x09\x22analyse first cells\x22\x0a\x09firstline := Line\x0a\x09\x09hint: (Hint new: { line hint first })\x0a\x09\x09cells: firstcells.\x0a\x09Strategies instance do: [ :strategy | | res |\x0a\x09\x09res := strategy analyse: firstline.\x0a\x09\x09res isEmpty ifFalse: [ ^ res] ].\x0a\x09^ self none",
referencedClasses: ["Line", "Hint", "Strategies"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isEmpty", "hint", "none", "firstNotSpace", "cells", "=", "size", "ifFalse:", "isFirstForced:on:", "hint:cells:", "new:", "first", "do:", "instance", "analyse:"]
}),
$globals.StratFirstCutSpace);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratFirstCutSpace);

$core.addMethod(
$core.method({
selector: "isFirstForced:on:",
protocol: 'as yet unclassified',
fn: function(hint,firstcells){
var self=this;
var firstbox;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$8,$7,$6,$5;
firstbox=$recv(firstcells)._firstBox();
$2=$recv(firstbox)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
return false;
};
$4=$recv(hint)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__gt_eq((2));
if($core.assert($3)){
$8=$recv(hint)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__plus($recv(hint)._at_((2)));
$6=$recv($7).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__gt($recv(firstcells)._size());
if($core.assert($5)){
return true;
};
};
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFirstForced:on:",{hint:hint,firstcells:firstcells,firstbox:firstbox},$globals.StratFirstCutSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint", "firstcells"],
source: "isFirstForced: hint on: firstcells\x0a\x09\x22check if only first number forced to be inside first cells\x22\x0a\x09\x22 hint contains at least one element, and cells one cell\x22\x0a\x09| firstbox |\x0a\x09firstbox := firstcells firstBox.\x0a\x09\x22check if one box min in first cells\x22\x0a\x09(firstbox at: #pos) > 0 ifFalse: [ ^ false ].\x0a\x0a\x09\x22check if only first number forced to be inside first cells\x22\x0a\x0a\x09\x22check for 2 or more hints\x22\x0a\x09hint size >= 2 ifTrue: [\x0a\x09\x09(hint at: 1) + (hint at: 2) + 1 > firstcells size\x0a\x09\x09\x09ifTrue: [ ^ true ]\x0a\x09\x09].\x0a\x09\x22check for 1 or more hints not work all case\x22\x0a\x09\x22 only one is already done by firstXXX or lastXXX stratgies\x22\x0a\x0a\x09\x22no good case, could not be sure that first hint is inside cells\x22\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["firstBox", "ifFalse:", ">", "at:", "ifTrue:", ">=", "size", "+"]
}),
$globals.StratFirstCutSpace);



$core.addClass('StratFirstDone', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstDone.comment="I add a space after first boxes done (corresponding to first hint).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$6,$4,$7;
first=$recv($recv(line)._cells())._firstBox();
$2=$recv(first)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$3=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=1;
//>>excludeEnd("ctx");
return $3;
};
$5=$recv($recv(line)._hint())._first();
$6=$recv(first)._at_("size");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__eq($6);
if(!$core.assert($4)){
return self._none();
};
$7=$recv($globals.Cells)._new();
$recv($7)._addBoxes_($recv(first)._at_("size"));
return $recv($7)._addSpaces_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,first:first},$globals.StratFirstDone)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| first |\x0a\x09\x22check if first box is at begining, begining spaces should be removed yet\x22\x0a\x09first := line cells firstBox.\x0a\x09(first at: #pos) = 1 ifFalse: [ ^ self none ].\x0a\x09\x22test if strategy apply, ie first hint is same as box\x22\x0a\x09line hint first = (first at: #size) ifFalse: [ ^ self none ].\x0a\x09\x22get solution, without space\x22\x0a\x09^ Cells new\x0a\x09\x09addBoxes: (first at: #size);\x0a\x09\x09addSpaces: 1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["firstBox", "cells", "ifFalse:", "=", "at:", "none", "first", "hint", "addBoxes:", "new", "addSpaces:"]
}),
$globals.StratFirstDone);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratFirstDone);



$core.addClass('StratMinSpace', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratMinSpace.comment="I fill first cells with spaces when min hint are bigger than first holes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var min,free;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$7,$8,$6,$9,$11,$10;
min=$recv($recv(line)._hint())._min();
$1=$recv(min).__gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$2=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=1;
//>>excludeEnd("ctx");
return $2;
};
free=$recv($recv(line)._cells())._firstFreeSpace();
$4=$recv(free)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=2;
//>>excludeEnd("ctx");
if(!$core.assert($3)){
$5=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=2;
//>>excludeEnd("ctx");
return $5;
};
$7=min;
$8=$recv(free)._at_("size");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__gt($8);
if(!$core.assert($6)){
return self._none();
};
$9=$recv($globals.Cells)._new();
$11=$recv(free)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__minus((1));
$recv($9)._addUnknowns_($10);
return $recv($9)._addSpaces_($recv(free)._at_("size"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,min:min,free:free},$globals.StratMinSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| min free |\x0a\x09\x22Get min hint, and check if more than only 1\x22\x0a\x09min := line hint min.\x0a\x09min > 1 ifFalse: [ ^ self none ].\x0a\x09\x22Get first cells that are free of boxes before space or end\x22\x0a\x09free := line cells firstFreeSpace.\x0a\x09(free at: #pos) > 0 ifFalse: [ ^ self none ].\x0a\x09min > (free at: #size) ifFalse: [ ^ self none ].\x0a\x09^ Cells new\x0a\x09\x09addUnknowns: (free at: #pos)-1;\x0a\x09\x09addSpaces: (free at: #size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["min", "hint", "ifFalse:", ">", "none", "firstFreeSpace", "cells", "at:", "addUnknowns:", "new", "-", "addSpaces:"]
}),
$globals.StratMinSpace);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratMinSpace);



$core.addClass('StratNotReached', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratNotReached.comment="I fill with spaces, cells that can not be reached by boxes.\x0aUsed only if one hint.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var n,box,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5,$7,$6,$8,$13,$14,$12,$11,$10,$9,$16,$17,$15,$20,$19,$18;
$3=$recv(line)._hint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hint"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq((1));
if(!$core.assert($1)){
$4=self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["none"]=1;
//>>excludeEnd("ctx");
return $4;
};
$5=$recv(line)._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
box=$recv($5)._firstBox();
$7=$recv(box)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__eq((0));
if($core.assert($6)){
return self._none();
};
n=$recv($recv(line)._hint())._first();
$8=$recv($globals.Cells)._new();
$13=$recv(box)._at_("pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$14=$recv(box)._at_("size");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$12=$recv($13).__plus($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$11=$recv($12).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$10=$recv($11).__minus(n);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$9=(0)._max_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["max:"]=1;
//>>excludeEnd("ctx");
$recv($8)._addSpaces_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addSpaces:"]=1;
//>>excludeEnd("ctx");
$16=(2).__star(n);
$17=$recv(box)._at_("size");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$15=$recv($16).__minus($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$recv($8)._addUnknowns_($15);
$20=$recv($recv($recv($recv(line)._cells())._size()).__minus($recv(box)._at_("pos"))).__minus(n);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=4;
//>>excludeEnd("ctx");
$19=$recv($20).__plus((1));
$18=(0)._max_($19);
sol=$recv($8)._addSpaces_($18);
return sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,n:n,box:box,sol:sol},$globals.StratNotReached)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09\x22only one hint is tested yet\x22\x0a\x09| n box sol |\x0a\x09\x22If only one hint and at least one box,returns other empty spaces\x22\x0a\x09(line hint size == 1)\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x09\x22get informations\x22\x0a\x09box := line cells firstBox.\x0a\x09(box at: #pos) = 0 ifTrue: [ ^ self none ].\x0a\x09n := line hint first.\x0a\x09\x22create solution\x22\x0a\x09sol := Cells new\x0a\x09\x09addSpaces: (0 max: ((box at: #pos)+(box at: #size)-1-n));\x0a\x09\x09addUnknowns: (2*n-(box at: #size));\x0a\x09\x09addSpaces: (0 max: (line cells size - (box at: #pos)-n+1)).\x0a\x09^ sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "==", "size", "hint", "none", "firstBox", "cells", "ifTrue:", "=", "at:", "first", "addSpaces:", "new", "max:", "-", "+", "addUnknowns:", "*"]
}),
$globals.StratNotReached);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratNotReached);



$core.addClass('StratReverted', $globals.Strategy, ['strategy'], 'Logimage');
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
sol=$recv($recv(self["@strategy"])._analyse_($recv(line)._reversed()))._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
$2=$recv(sol)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((0));
if($core.assert($1)){
return self._none();
};
$3=$recv($globals.Cells)._new();
$5=$recv($recv(line)._cells())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($recv(sol)._size());
$recv($3)._addUnknowns_($4);
return $recv($3)._addAll_(sol);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol},$globals.StratReverted)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09\x22Use strategy on reversed line, then reversed result\x22\x0a\x09sol := (strategy analyse: line reversed) reversed.\x0a\x09sol size = 0 ifTrue: [ ^ self none ].\x0a\x09^ Cells new\x0a\x09\x09\x22and add first unknown cells before\x22\x0a\x09\x09addUnknowns: line cells size - sol size;\x0a\x09\x09addAll: sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["reversed", "analyse:", "ifTrue:", "=", "size", "none", "addUnknowns:", "new", "-", "cells", "addAll:"]
}),
$globals.StratReverted);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratReverted);



$core.addClass('StratLastCover', $globals.StratReverted, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratLastCover.comment="Same as first cover but by other side (invert).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@strategy"]=$recv($globals.StratFirstCover)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.StratLastCover)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstCover new",
referencedClasses: ["StratFirstCover"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.StratLastCover);



$core.addClass('StratLastCutSpace', $globals.StratReverted, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@strategy"]=$recv($globals.StratFirstCutSpace)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.StratLastCutSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstCutSpace new",
referencedClasses: ["StratFirstCutSpace"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.StratLastCutSpace);



$core.addClass('StratLastDone', $globals.StratReverted, ['strategy'], 'Logimage');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@strategy"]=$recv($globals.StratFirstDone)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.StratLastDone)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstDone new",
referencedClasses: ["StratFirstDone"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.StratLastDone);



$core.addClass('StratSpacesOnly', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratSpacesOnly.comment="I fill spaces if no hints.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(line)._hint())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((0));
if($core.assert($1)){
return $recv($globals.Cells)._spaces_($recv($recv(line)._cells())._size());
};
return self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line},$globals.StratSpacesOnly)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09\x22If no hint, returns a line with empty spaces\x22\x0a\x09(line hint size = 0)\x0a\x09\x09ifTrue: [ ^ Cells spaces: line cells size ].\x0a\x09^ self none",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "size", "hint", "spaces:", "cells", "none"]
}),
$globals.StratSpacesOnly);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratSpacesOnly);



$core.addClass('StratTestBox', $globals.Strategy, [], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratTestBox.comment="I test one box at each position, try to detect if it is possible, regarding if the number of contigus boxes are greater than hints.\x0aIf not, it is a space.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function(line){
var self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
sol=$recv($globals.Cells)._new();
$2=$recv(line)._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._size();
(1)._to_do_($1,(function(i){
var l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($recv(line)._cells())._deepCopy();
$recv($3)._at_put_(i,$recv($globals.Cell)._box());
l=$recv($3)._yourself();
l;
$5=$recv($recv($globals.Hint)._new_($recv(l)._numbers()))._max();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["max"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__gt($recv($recv(line)._hint())._max());
if($core.assert($4)){
return $recv(sol)._addSpaces_((1));
} else {
return $recv(sol)._addUnknowns_((1));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i,l:l},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(sol)._trimLast_($recv($globals.Cell)._unknown());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol},$globals.StratTestBox)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09sol := Cells new.\x0a\x091 to: line cells size do: [ :i | |l|\x0a\x22TODO test only unknown cells...\x22\x0a\x09\x09l := line cells deepCopy at: i put: Cell box; yourself.\x0a\x09\x09(Hint new: l numbers) max > line hint max\x0a\x09\x09\x09ifTrue: [ sol addSpaces: 1 ]\x0a\x09\x09\x09ifFalse: [ sol addUnknowns: 1 ]\x0a\x09\x09].\x0a\x09^ sol trimLast: Cell unknown",
referencedClasses: ["Cells", "Cell", "Hint"],
//>>excludeEnd("ide");
messageSends: ["new", "to:do:", "size", "cells", "at:put:", "deepCopy", "box", "yourself", "ifTrue:ifFalse:", ">", "max", "new:", "numbers", "hint", "addSpaces:", "addUnknowns:", "trimLast:", "unknown"]
}),
$globals.StratTestBox);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: 'as yet unclassified',
fn: function(){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StratTestBox);



$core.addClass('WidgetCell', $globals.Object, ['div'], 'Logimage');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@div"]=$recv($globals.Silk)._DIV_(["class".__minus_gt("cell")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.WidgetCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'cell' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["DIV:", "->"]
}),
$globals.WidgetCell);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: 'as yet unclassified',
fn: function (silk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt(self["@div"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk},$globals.WidgetCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<<"]
}),
$globals.WidgetCell);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'as yet unclassified',
fn: function (cell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$recv(self["@div"])._resetContents();
$1=$recv(cell)._isBox();
if($core.assert($1)){
$2=self["@div"];
$4="class".__minus_gt("cell box");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3=[$4];
$recv($2).__lt_lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
};
$5=$recv(cell)._isSpace();
if($core.assert($5)){
$recv(self["@div"]).__lt_lt(["class".__minus_gt("cell space")]);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{cell:cell},$globals.WidgetCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell"],
source: "show: cell\x0a\x09div resetContents.\x0a\x09cell isBox ifTrue: [ div << { #class -> 'cell box' } ].\x0a\x09cell isSpace ifTrue: [ div << { #class -> 'cell space' } ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resetContents", "ifTrue:", "isBox", "<<", "->", "isSpace"]
}),
$globals.WidgetCell);



$core.addClass('WidgetGrid', $globals.Object, ['div'], 'Logimage');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@div"]=$recv($globals.Silk)._DIV_(["class".__minus_gt("grid")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.WidgetGrid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'grid' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["DIV:", "->"]
}),
$globals.WidgetGrid);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: 'as yet unclassified',
fn: function (silk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt(self["@div"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk},$globals.WidgetGrid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<<"]
}),
$globals.WidgetGrid);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'as yet unclassified',
fn: function (grid){
var self=this;
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$6,$5,$4,$3,$2;
y=(0);
$recv(self["@div"])._resetContents();
$recv(grid)._rowDo_((function(row){
var line,x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
x=(0);
x;
y=$recv(y).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
y;
$1=self["@div"];
$6=$recv($recv(y).__backslash_backslash((5))).__eq((0));
if($core.assert($6)){
$5=" gras";
} else {
$5="";
};
$4="line".__comma($5);
$3="class".__minus_gt($4);
$2=[$3];
line=$recv($1)._DIV_($2);
line;
return $recv(row)._do_((function(cell){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
x=$recv(x).__plus((1));
x;
return $recv(line).__lt_lt($recv($recv($globals.WidgetCell)._new())._show_(cell));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cell:cell},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row,line:line,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{grid:grid,y:y},$globals.WidgetGrid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["grid"],
source: "show: grid\x0a\x09| y |\x0a\x09y := 0.\x0a\x09div resetContents.\x0a\x09grid rowDo: [ :row | | line x |\x0a\x09\x09x := 0.\x0a\x09\x09y := y+1.\x0a\x09\x09line := div DIV: { #class -> ('line',(y\x5c\x5c5=0 ifTrue: [' gras'] ifFalse: [''])) }.\x0a\x09\x09row do: [ :cell |\x0a\x09\x09\x09x := x + 1.\x0a\x09\x09\x09line << (WidgetCell new show: cell)\x0a\x09\x09]\x0a\x09]",
referencedClasses: ["WidgetCell"],
//>>excludeEnd("ide");
messageSends: ["resetContents", "rowDo:", "+", "DIV:", "->", ",", "ifTrue:ifFalse:", "=", "\x5c\x5c", "do:", "<<", "show:", "new"]
}),
$globals.WidgetGrid);



$core.addClass('WidgetHint', $globals.Object, ['div'], 'Logimage');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@div"]=$recv($globals.Silk)._DIV_(["class".__minus_gt("hint")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.WidgetHint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'hint' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["DIV:", "->"]
}),
$globals.WidgetHint);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: 'as yet unclassified',
fn: function (silk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt(self["@div"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk},$globals.WidgetHint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<<"]
}),
$globals.WidgetHint);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'as yet unclassified',
fn: function (hint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@div"])._resetContents();
$recv(hint)._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@div"])._DIV_(["class".__minus_gt("number"),n]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{hint:hint},$globals.WidgetHint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "show: hint\x0a\x09div resetContents.\x0a\x09hint do: [ :n |\x0a\x09\x09div DIV: { #class -> 'number'. n } ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resetContents", "do:", "DIV:", "->"]
}),
$globals.WidgetHint);



$core.addClass('WidgetHints', $globals.Object, ['div'], 'Logimage');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@div"]=$recv($globals.Silk)._DIV_(["class".__minus_gt("hints")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.WidgetHints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'hints' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["DIV:", "->"]
}),
$globals.WidgetHints);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: 'as yet unclassified',
fn: function (silk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt(self["@div"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk},$globals.WidgetHints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<<"]
}),
$globals.WidgetHints);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'as yet unclassified',
fn: function (hints){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@div"])._resetContents();
$recv(hints)._do_((function(hint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@div"]).__lt_lt($recv($recv($globals.WidgetHint)._new())._show_(hint));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({hint:hint},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{hints:hints},$globals.WidgetHints)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hints"],
source: "show: hints\x0a\x09div resetContents.\x0a\x09hints do: [ :hint |\x0a\x09\x09div << (WidgetHint new show: hint) ]",
referencedClasses: ["WidgetHint"],
//>>excludeEnd("ide");
messageSends: ["resetContents", "do:", "<<", "show:", "new"]
}),
$globals.WidgetHints);


});
