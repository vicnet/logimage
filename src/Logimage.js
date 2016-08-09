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
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Application)._new())._show_($recv($globals.Logimage)._question());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Application.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09^ Application new show: Logimage question",
referencedClasses: ["Application", "Logimage"],
//>>excludeEnd("ide");
messageSends: ["show:", "new", "question"]
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
fn: function (symbol){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@cells"])._at_(symbol);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{symbol:symbol},$globals.Cell.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["symbol"],
source: "at: symbol\x0a\x09^ cells at: symbol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
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
fn: function (){
"use strict";

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
var name;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
name=$recv(cls)._name();
name;
name=$recv(name)._copyFrom_to_(basesize,$recv(name)._size());
name;
name=$recv(name)._asLowercase();
name;
return $recv(self["@cells"])._at_put_(name,$recv(cls)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cls:cls,name:name},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{basesize:basesize},$globals.Cell.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| basesize |\x0a\x09super initialize.\x0a\x09cells := #{}.\x0a\x09basesize := self name size + 1.\x0a\x09self allSubclassesDo: [ :cls |\x0a\x09\x09| name |\x0a\x09\x09name := cls name.\x0a\x09\x09name := name copyFrom: basesize to: (name size).\x0a\x09\x09name := name asLowercase.\x0a\x09\x09cells at: name put: cls new\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "+", "size", "name", "allSubclassesDo:", "copyFrom:to:", "asLowercase", "at:put:", "new"]
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



$core.addClass('Cells', $globals.Object, ['cells'], 'Logimage');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Cells.comment="A line or a column of cells";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'as yet unclassified',
fn: function (aCell){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@cells"])._add_(self._cellFrom_(aCell));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aCell:aCell},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "add: aCell\x0a\x09cells add: (self cellFrom: aCell)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "cellFrom:"]
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
selector: "cellFrom:",
protocol: 'as yet unclassified',
fn: function (aCell){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aCell)._isString();
if($core.assert($1)){
return $recv($globals.Cell)._at_(aCell);
};
return aCell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cellFrom:",{aCell:aCell},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "cellFrom: aCell\x0a\x09aCell isString\x0a\x09\x09ifTrue: [ ^ Cell at: aCell ].\x0a\x09^ aCell",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isString", "at:"]
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
fn: function (theCells){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@cells"]=$recv(theCells)._collect_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._cellFrom_(c);
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
source: "cells: theCells\x0a\x09cells := theCells collect: [ :c |\x0a\x09\x09\x09self cellFrom: c ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "cellFrom:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "doneOf:",
protocol: 'private',
fn: function (theCells){
"use strict";

var self=this;
var done;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
done=$recv($globals.Cells)._new();
$recv($recv(theCells)._cells())._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(c)._isUnknown();
if($core.assert($1)){
throw $early=[done];
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
}, function($ctx1) {$ctx1.fill(self,"doneOf:",{theCells:theCells,done:done},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "doneOf: theCells\x0a\x09\x22I returns a list of cells done in a block of Cells at begining\x22\x0a\x09\x22TODO should be in Class (static)\x22\x0a\x09| done |\x0a\x09done := Cells new.\x0a\x09theCells cells do: [ :c |\x0a\x09\x09\x22if found a unknow, stop reading cells\x22\x0a\x09\x09c isUnknown ifTrue: [ ^ done ].\x0a\x09\x09done add: c ].\x0a\x09^ done",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "cells", "ifTrue:", "isUnknown", "add:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstDone",
protocol: 'private',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._doneOf_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstDone",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstDone\x0a\x09^ self doneOf: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["doneOf:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstNumbers",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._numbersOf_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstNumbers",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstNumbers\x0a\x09^ self numbersOf: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["numbersOf:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "lastDone",
protocol: 'private',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._doneOf_(self._reversed()))._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDone",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDone\x0a\x09^ (self doneOf: self reversed) reversed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reversed", "doneOf:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "lastNumbers",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._numbersOf_(self._reversed()))._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastNumbers",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastNumbers\x0a\x09^ (self numbersOf: self reversed) reversed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reversed", "numbersOf:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "numbersOf:",
protocol: 'private',
fn: function (theCells){
"use strict";

var self=this;
var numbers,current;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
var $early={};
try {
numbers=[];
current=(0);
$recv($recv(theCells)._cells())._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(c)._isBox();
if($core.assert($1)){
current=$recv(current).__plus((1));
current;
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
current;
};
$3=$recv(c)._isUnknown();
if($core.assert($3)){
throw $early=[numbers];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv(current).__gt((0));
if($core.assert($4)){
$recv(numbers)._add_(current);
};
return numbers;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numbersOf:",{theCells:theCells,numbers:numbers,current:current},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "numbersOf: theCells\x0a\x09\x22I returns a list of number done in a block of Cells\x22\x0a\x09\x22TODO should be in Class (static)\x22\x0a\x09| numbers current |\x0a\x09numbers := { }.\x0a\x09current := 0.\x0a\x09theCells cells do: [ :c |\x0a\x09\x09c isBox\x0a\x09\x09\x09ifTrue: [ current := current + 1 ]\x0a\x09\x09\x09ifFalse: [ current > 0 ifTrue: [ numbers add: current ].\x0a\x09\x09\x09\x09\x09   current := 0 ].\x0a\x09\x09\x22if found a unknow, stop reading cells\x22\x0a\x09\x09c isUnknown ifTrue: [ ^ numbers ].\x0a\x09\x09].\x0a\x09current > 0 ifTrue: [ numbers add: current ].\x0a\x09^ numbers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "cells", "ifTrue:ifFalse:", "isBox", "+", "ifTrue:", ">", "add:", "isUnknown"]
}),
$globals.Cells);

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
$recv(stream)._nextPutAll_("|");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(self["@cells"])._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(c)._printOn_(stream);
return $recv(stream)._nextPutAll_("|");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '|'.\x0a\x09cells do: [ :c |\x0a\x09\x09\x09c printOn: stream.\x0a\x09\x09\x09stream nextPutAll: '|' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "do:", "printOn:"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "reduced",
protocol: 'printing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$6,$5,$1;
$2=self["@cells"];
$4=$recv(self._firstDone())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus((1));
$6=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__minus($recv(self._lastDone())._size());
$1=$recv($2)._copyFrom_to_($3,$5);
return $recv($globals.Cells)._new_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reduced",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reduced\x0a\x09^ Cells new:\x0a\x09\x09(cells copyFrom: self firstDone size + 1\x0a\x09\x09\x09\x09to: self size - self lastDone size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["new:", "copyFrom:to:", "+", "size", "firstDone", "-", "lastDone"]
}),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cells)._new_($recv(self["@cells"])._reversed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09^ Cells new: cells reversed",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["new:", "reversed"]
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
"use strict";

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
self._add_cell_($recv(newSize).__minus(self._size()),"unknown");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size:",{newSize:newSize},$globals.Cells)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newSize"],
source: "size: newSize\x0a\x09(self size = newSize) ifTrue: [ ^ self ].\x0a\x09(self size > newSize)\x0a\x09\x09ifTrue: [ cells := cells\x0a\x09 \x09\x09\x09\x09removeFrom: newSize + 1\x0a\x09\x09\x09\x09\x09to: self size ]\x0a\x09\x09ifFalse: [ self\x0a\x09\x09\x09\x09\x09add: (newSize - self size)\x0a\x09\x09\x09\x09\x09cell: #unknown ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "size", "ifTrue:ifFalse:", ">", "removeFrom:to:", "+", "add:cell:", "-"]
}),
$globals.Cells);


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
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._add_cell_(n,"space");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"spaces:",{n:n},$globals.Cells.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "spaces: n\x0a\x09^ self new add: n cell: #space",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "new"]
}),
$globals.Cells.klass);

$core.addMethod(
$core.method({
selector: "unknowns:",
protocol: 'as yet unclassified',
fn: function (n){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._new())._add_cell_(n,"unknown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unknowns:",{n:n},$globals.Cells.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "unknowns: n\x0a\x09^ self new add: n cell: #unknown",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:cell:", "new"]
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
selector: "firstRemoved:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Hint)._new())._numbers_($recv(self["@numbers"])._copyFrom_to_($recv(n).__plus((1)),$recv(self["@numbers"])._size()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstRemoved:",{n:n},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "firstRemoved: n\x0a\x09^ Hint new\x0a\x09\x09numbers: (numbers copyFrom: (n+1) to: numbers size)",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
messageSends: ["numbers:", "new", "copyFrom:to:", "+", "size"]
}),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "lastRemoved:",
protocol: 'as yet unclassified',
fn: function (n){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Hint)._new())._numbers_($recv(self["@numbers"])._copyFrom_to_((1),$recv($recv(self["@numbers"])._size()).__minus(n)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastRemoved:",{n:n},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "lastRemoved: n\x0a\x09^ Hint new\x0a\x09\x09numbers: (numbers copyFrom: 1 to: numbers size - n)",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
messageSends: ["numbers:", "new", "copyFrom:to:", "-", "size"]
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
fn: function (array){
"use strict";

var self=this;
self["@numbers"]=array;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["array"],
source: "numbers: array\x0a\x09numbers := array",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Hint);

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
$recv(stream)._nextPutAll_("| ");
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
$recv(stream)._nextPutAll_("|");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},$globals.Hint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '| '.\x0a\x09numbers do: [ :n |\x0a\x09\x09n printOn: stream.\x0a\x09\x09stream space ].\x0a\x09stream nextPutAll: '|'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "do:", "printOn:", "space"]
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
fn: function (anObject){
"use strict";

var self=this;
self["@cells"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cells: anObject\x0a\x09cells := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
fn: function (anObject){
"use strict";

var self=this;
self["@hint"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "hint: anObject\x0a\x09hint := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
selector: "reduced",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var numbers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@hint"];
$2=$recv($recv(self["@cells"])._firstNumbers())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
numbers=$recv($1)._firstRemoved_($2);
numbers=$recv(numbers)._lastRemoved_($recv($recv(self["@cells"])._lastNumbers())._size());
return $recv($globals.Line)._new_cells_(numbers,$recv(self["@cells"])._reduced());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reduced",{numbers:numbers},$globals.Line)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reduced\x0a\x09| numbers |\x0a\x09numbers := hint firstRemoved: (cells firstNumbers size).\x0a\x09numbers := numbers lastRemoved: (cells lastNumbers size).\x0a\x09^ Line new: numbers cells: (cells reduced)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["firstRemoved:", "size", "firstNumbers", "lastRemoved:", "lastNumbers", "new:cells:", "reduced"]
}),
$globals.Line);


$core.addMethod(
$core.method({
selector: "new:cells:",
protocol: 'as yet unclassified',
fn: function (hint,cells){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._hint_(hint);
return $recv($1)._cells_(cells);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:cells:",{hint:hint,cells:cells},$globals.Line.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint", "cells"],
source: "new: hint cells: cells\x0a\x09^ self new hint: hint; cells: cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hint:", "new", "cells:"]
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
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._new_cells_(self._colHintAt_(index),self._colCellsAt_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colLineAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colLineAt: index\x0a\x09^ Line new: (self colHintAt: index)\x0a\x09\x09 cells: (self colCellsAt: index)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["new:cells:", "colHintAt:", "colCellsAt:"]
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
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._new_cells_(self._rowHintAt_(index),self._rowCellsAt_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowLineAt:",{index:index},$globals.Logimage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowLineAt: index\x0a\x09^ Line new: (self rowHintAt: index)\x0a\x09\x09 cells: (self rowCellsAt: index)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
messageSends: ["new:cells:", "rowHintAt:", "rowCellsAt:"]
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
selector: "question",
protocol: 'examples',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._addRowHints_([(3)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=1;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(2), (2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=2;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(1), (1)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=3;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=4;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=5;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(1)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=6;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(1)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=7;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=8;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(1)]);
$recv($1)._addColHints_([(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addColHints:"]=1;
//>>excludeEnd("ctx");
$recv($1)._addColHints_([(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addColHints:"]=2;
//>>excludeEnd("ctx");
$recv($1)._addColHints_([(1), (3), (1)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addColHints:"]=3;
//>>excludeEnd("ctx");
$recv($1)._addColHints_([(2), (2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addColHints:"]=4;
//>>excludeEnd("ctx");
return $recv($1)._addColHints_([(3)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"question",{},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "question\x0a\x09^ self new\x0a\x09\x09addRowHints: #( 3 );\x0a\x09\x09addRowHints: #( 2 2 );\x0a\x09\x09addRowHints: #( 1 1 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( );\x0a\x09\x09addRowHints: #( 1 );\x0a\x0a\x09\x09addColHints: #( 2 );\x0a\x09\x09addColHints: #( 2 );\x0a\x09\x09addColHints: #( 1 3 1 );\x0a\x09\x09addColHints: #( 2 2 );\x0a\x09\x09addColHints: #( 3 )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addRowHints:", "new", "addColHints:"]
}),
$globals.Logimage.klass);

$core.addMethod(
$core.method({
selector: "simple",
protocol: 'examples',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._addRowHints_([(1)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addRowHints:"]=1;
//>>excludeEnd("ctx");
$recv($1)._addRowHints_([(2)]);
$recv($1)._addColHints_([(1)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addColHints:"]=1;
//>>excludeEnd("ctx");
return $recv($1)._addColHints_([(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"simple",{},$globals.Logimage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "simple\x0a\x09^ self new\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addColHints: #( 1 );\x0a\x09\x09addColHints: #( 2 )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addRowHints:", "new", "addColHints:"]
}),
$globals.Logimage.klass);


$core.addClass('Strategist', $globals.Object, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "apply:on:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
"use strict";

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
selector: "apply:on:at:",
protocol: 'as yet unclassified',
fn: function (cell,logimage,point){
"use strict";

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
}, function($ctx1) {$ctx1.fill(self,"apply:on:at:",{cell:cell,logimage:logimage,point:point},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell", "logimage", "point"],
source: "apply: cell on: logimage at: point\x0a\x09cell isBox ifTrue: [ logimage box: point. ^ self ].\x0a\x09cell isSpace ifTrue: [ logimage space: point. ^ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isBox", "box:", "isSpace", "space:"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:on:atCol:",
protocol: 'as yet unclassified',
fn: function (cells,logimage,x){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(cells)._cells())._withIndexDo_((function(cell,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._apply_on_at_(cell,logimage,$recv(x).__at(y));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:on:atCol:",{cells:cells,logimage:logimage,x:x},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells", "logimage", "x"],
source: "apply: cells on: logimage atCol: x\x0a\x09cells cells withIndexDo: [ :cell :y |\x0a\x09\x09self apply: cell on: logimage at: x@y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "cells", "apply:on:at:", "@"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:on:atRow:",
protocol: 'as yet unclassified',
fn: function (cells,logimage,y){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(cells)._cells())._withIndexDo_((function(cell,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._apply_on_at_(cell,logimage,$recv(x).__at(y));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:on:atRow:",{cells:cells,logimage:logimage,y:y},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells", "logimage", "y"],
source: "apply: cells on: logimage atRow: y\x0a\x09cells cells withIndexDo: [ :cell :x |\x0a\x09\x09self apply: cell on: logimage at: x@y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "cells", "apply:on:at:", "@"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:onColOf:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(1)._to_do_($recv($recv($recv(logimage)._grid())._size())._x(),(function(x){
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
sol=$recv(strategy)._analyse_($recv($recv(logimage)._colLineAt_(x))._reduced());
sol;
return self._apply_on_atCol_(sol,logimage,x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,sol:sol},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:onColOf:",{strategy:strategy,logimage:logimage},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy onColOf: logimage\x0a\x091 to: logimage grid size x do: [ :x | | sol |\x0a\x09\x09sol := strategy analyse: (logimage colLineAt: x) reduced.\x0a\x09\x09self apply: sol on: logimage atCol: x ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "x", "size", "grid", "analyse:", "reduced", "colLineAt:", "apply:on:atCol:"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:onRowOf:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(1)._to_do_($recv($recv($recv(logimage)._grid())._size())._y(),(function(y){
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
sol=$recv(strategy)._analyse_($recv($recv(logimage)._rowLineAt_(y))._reduced());
sol;
return self._apply_on_atRow_(sol,logimage,y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y,sol:sol},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:onRowOf:",{strategy:strategy,logimage:logimage},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy onRowOf: logimage\x0a\x091 to: logimage grid size y do: [ :y | | sol |\x0a\x09\x09sol := strategy analyse: (logimage rowLineAt: y) reduced.\x0a\x09\x09self apply: sol on: logimage atRow: y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "y", "size", "grid", "analyse:", "reduced", "rowLineAt:", "apply:on:atRow:"]
}),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "solve:",
protocol: 'as yet unclassified',
fn: function (logimage){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($globals.StratSpaces)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.StratDone)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3,$recv($globals.StratRecover)._new()];
$recv($1)._do_((function(strategy){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._apply_on_(strategy,logimage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({strategy:strategy},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"solve:",{logimage:logimage},$globals.Strategist)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["logimage"],
source: "solve: logimage\x0a\x09{ StratSpaces new. StratDone new. StratRecover new } do: [ :strategy |\x0a\x09\x09self apply: strategy on: logimage ]",
referencedClasses: ["StratSpaces", "StratDone", "StratRecover"],
//>>excludeEnd("ide");
messageSends: ["do:", "new", "apply:on:"]
}),
$globals.Strategist);



$core.addClass('Strategy', $globals.Object, [], 'Logimage');
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



$core.addClass('StratCount', $globals.Strategy, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "free:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv(line)._cells())._size()).__minus(self._occupation_($recv(line)._hint()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"free:",{line:line},$globals.StratCount)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "free: line\x0a\x09\x22I return the number of cells that are free to move\x22\x0a\x09^ (line cells size) - (self occupation: line hint)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "size", "cells", "occupation:", "hint"]
}),
$globals.StratCount);

$core.addMethod(
$core.method({
selector: "occupation:",
protocol: 'as yet unclassified',
fn: function (hint){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(self._sum_(hint)).__plus($recv(hint)._size())).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"occupation:",{hint:hint},$globals.StratCount)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "occupation: hint\x0a\x09\x22I return the number of cell all numbers fill, with one space between each\x22\x0a\x09^ (self sum: hint) + hint size - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "+", "sum:", "size"]
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



$core.addClass('StratDone', $globals.StratCount, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
"use strict";

var self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(self._free_(line)).__eq((0));
if(!$core.assert($1)){
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.StratDone.superclass||$boot.dnu).fn.prototype._analyse_.apply($recv(self), [line]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
};
sol=$recv($globals.Cells)._new();
$recv($recv($recv(line)._hint())._numbers())._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=sol;
$recv($3)._add_cell_(n,"box");
return $recv($3)._add_("space");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv(sol)._size_($recv($recv(line)._cells())._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol},$globals.StratDone)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09(self free: line) = 0\x0a\x09\x09ifFalse: [ ^ super analyse: line ].\x0a\x09sol := Cells new.\x0a\x09line hint numbers do: [ :n |\x0a\x09\x09sol add: n cell: #box ;\x0a\x09\x09\x09add: #space ].\x0a\x09\x22remove last unknown if line full\x22\x0a\x09^ sol size: (line cells size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "free:", "analyse:", "new", "do:", "numbers", "hint", "add:cell:", "add:", "size:", "size", "cells"]
}),
$globals.StratDone);



$core.addClass('StratRecover', $globals.StratCount, [], 'Logimage');
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
"use strict";

var self=this;
var free,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
free=self._free_(line);
sol=$recv($globals.Cells)._new();
$recv($recv($recv(line)._hint())._numbers())._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=sol;
$recv($1)._add_cell_($recv(n)._min_(free),"unknown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:cell:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_cell_($recv(n).__minus(free),"box");
return $recv($1)._add_("unknown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(sol)._size_($recv($recv(line)._cells())._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,free:free,sol:sol},$globals.StratRecover)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| free sol |\x0a\x09free := self free: line.\x0a\x09sol := Cells new.\x0a\x09line hint numbers do: [ :n |\x0a\x09\x09sol add: (n min: free) cell: #unknown ;\x0a\x09\x09\x09add: (n - free) cell: #box ;\x0a\x09\x09\x09add: #unknown ].\x0a\x09\x22remove last unknown if line full\x22\x0a\x09^ sol size: (line cells size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["free:", "new", "do:", "numbers", "hint", "add:cell:", "min:", "-", "add:", "size:", "size", "cells"]
}),
$globals.StratRecover);



$core.addClass('StratSpaces', $globals.StratCount, [], 'Logimage');
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
var $2,$1,$3;
$2=$recv($recv(line)._hint())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((0));
if($core.assert($1)){
return $recv($globals.Cells)._spaces_($recv($recv(line)._cells())._size());
};
$3=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.StratSpaces.superclass||$boot.dnu).fn.prototype._analyse_.apply($recv(self), [line]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line},$globals.StratSpaces)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09(line hint size = 0)\x0a\x09\x09ifTrue: [ ^ Cells spaces: line cells size ].\x0a\x09^ super analyse: line",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "size", "hint", "spaces:", "cells", "analyse:"]
}),
$globals.StratSpaces);



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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@div"])._resetContents();
$recv(grid)._rowDo_((function(row){
var line;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
line=$recv(self["@div"])._DIV_(["class".__minus_gt("line")]);
line;
return $recv($recv(row)._cells())._do_((function(cell){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(line).__lt_lt($recv($recv($globals.WidgetCell)._new())._show_(cell));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cell:cell},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row,line:line},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{grid:grid},$globals.WidgetGrid)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["grid"],
source: "show: grid\x0a\x09div resetContents.\x0a\x09grid rowDo: [ :row | | line |\x0a\x09\x09line := div DIV: { #class -> 'line' }.\x0a\x09\x09row cells do: [ :cell |\x0a\x09\x09\x09line << (WidgetCell new show: cell)\x0a\x09\x09]\x0a\x09]",
referencedClasses: ["WidgetCell"],
//>>excludeEnd("ide");
messageSends: ["resetContents", "rowDo:", "DIV:", "->", "do:", "cells", "<<", "show:", "new"]
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
