define("amber-logimage/Logimage", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Logimage');
smalltalk.packages["Logimage"].transport = {"type":"amd","amdNamespace":"amber-logimage"};

smalltalk.addClass('Cell', globals.Object, [], 'Logimage');
globals.Cell.comment="A simple cell or pixel.";

globals.Cell.klass.iVarNames = ['cells'];
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'instance creation',
fn: function (symbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._at_(symbol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{symbol:symbol},globals.Cell.klass)})},
args: ["symbol"],
source: "at: symbol\x0a\x09^ cells at: symbol",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Cell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "box",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._at_("box");
return $1;
}, function($ctx1) {$ctx1.fill(self,"box",{},globals.Cell.klass)})},
args: [],
source: "box\x0a\x09^ cells at: #box",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Cell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'instance creation',
fn: function (){
var self=this;
var basesize;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.Cell.klass.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@cells"]=globals.HashedCollection._newFromPairs_([]);
$2=self._name();
$ctx1.sendIdx["name"]=1;
$1=_st($2)._size();
$ctx1.sendIdx["size"]=1;
basesize=_st($1).__plus((1));
self._allSubclassesDo_((function(cls){
var name;
return smalltalk.withContext(function($ctx2) {
name=_st(cls)._name();
name;
name=_st(name)._copyFrom_to_(basesize,_st(name)._size());
name;
name=_st(name)._asLowercase();
name;
return _st(self["@cells"])._at_put_(name,_st(cls)._new());
}, function($ctx2) {$ctx2.fillBlock({cls:cls,name:name},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{basesize:basesize},globals.Cell.klass)})},
args: [],
source: "initialize\x0a\x09| basesize |\x0a\x09super initialize.\x0a\x09cells := #{}.\x0a\x09basesize := self name size + 1.\x0a\x09self allSubclassesDo: [ :cls |\x0a\x09\x09| name |\x0a\x09\x09name := cls name.\x0a\x09\x09name := name copyFrom: basesize to: (name size).\x0a\x09\x09name := name asLowercase.\x0a\x09\x09cells at: name put: cls new\x0a\x09\x09]",
messageSends: ["initialize", "+", "size", "name", "allSubclassesDo:", "copyFrom:to:", "asLowercase", "at:put:", "new"],
referencedClasses: []
}),
globals.Cell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._at_("space");
return $1;
}, function($ctx1) {$ctx1.fill(self,"space",{},globals.Cell.klass)})},
args: [],
source: "space\x0a\x09^ cells at: #space",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Cell.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "unknown",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._at_("unknown");
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknown",{},globals.Cell.klass)})},
args: [],
source: "unknown\x0a\x09^ cells at: #unknown",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Cell.klass);


smalltalk.addClass('CellBox', globals.Cell, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stream)._nextPutAll_("@");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.CellBox)})},
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '@'",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.CellBox);



smalltalk.addClass('CellSpace', globals.Cell, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stream)._nextPutAll_("-");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.CellSpace)})},
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '-'",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.CellSpace);



smalltalk.addClass('CellUnknown', globals.Cell, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stream)._nextPutAll_(" ");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.CellUnknown)})},
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: ' '",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.CellUnknown);



smalltalk.addClass('Cells', globals.Object, ['cells'], 'Logimage');
globals.Cells.comment="A line or a column of cells";
smalltalk.addMethod(
smalltalk.method({
selector: "cells:",
protocol: 'as yet unclassified',
fn: function (theCells){
var self=this;
self["@cells"]=theCells;
return self},
args: ["theCells"],
source: "cells: theCells\x0a\x09cells := theCells",
messageSends: [],
referencedClasses: []
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stream)._nextPutAll_("|");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(self["@cells"])._do_((function(c){
return smalltalk.withContext(function($ctx2) {
_st(c)._printOn_(stream);
return _st(stream)._nextPutAll_("|");
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.Cells)})},
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '|'.\x0a\x09cells do: [ :c |\x0a\x09\x09\x09c printOn: stream.\x0a\x09\x09\x09stream nextPutAll: '|' ]",
messageSends: ["nextPutAll:", "do:", "printOn:"],
referencedClasses: []
}),
globals.Cells);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
protocol: 'as yet unclassified',
fn: function (cells){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._cells_(cells);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{cells:cells},globals.Cells.klass)})},
args: ["cells"],
source: "new: cells\x0a\x09^ self new cells: cells",
messageSends: ["cells:", "new"],
referencedClasses: []
}),
globals.Cells.klass);


smalltalk.addClass('Grid', globals.Object, ['cells', 'size'], 'Logimage');
globals.Grid.comment="Image, with Cells";
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'private',
fn: function (point){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._at_(self._indexOf_(point));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{point:point},globals.Grid)})},
args: ["point"],
source: "at: point\x0a\x09^ cells at: (self indexOf: point)",
messageSends: ["at:", "indexOf:"],
referencedClasses: []
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'private',
fn: function (point,cell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cells"])._at_put_(self._indexOf_(point),cell);
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{point:point,cell:cell},globals.Grid)})},
args: ["point", "cell"],
source: "at: point put: cell\x0a\x09cells at: (self indexOf: point) put: cell",
messageSends: ["at:put:", "indexOf:"],
referencedClasses: []
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
protocol: 'as yet unclassified',
fn: function (point){
var self=this;
function $Cell(){return globals.Cell||(typeof Cell=="undefined"?nil:Cell)}
return smalltalk.withContext(function($ctx1) { 
self._at_put_(point,_st($Cell())._box());
return self}, function($ctx1) {$ctx1.fill(self,"box:",{point:point},globals.Grid)})},
args: ["point"],
source: "box: point\x0a\x09self at: point put: (Cell box)",
messageSends: ["at:put:", "box"],
referencedClasses: ["Cell"]
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "colAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
var col;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@size"])._y();
$ctx1.sendIdx["y"]=1;
col=_st($Array())._new_($1);
$ctx1.sendIdx["new:"]=1;
(1)._to_do_(_st(self["@size"])._y(),(function(y){
var pt;
return smalltalk.withContext(function($ctx2) {
pt=_st($Point())._x_y_(index,y);
pt;
return _st(col)._at_put_(y,self._at_(pt));
}, function($ctx2) {$ctx2.fillBlock({y:y,pt:pt},$ctx1,1)})}));
$2=_st($Cells())._new_(col);
return $2;
}, function($ctx1) {$ctx1.fill(self,"colAt:",{index:index,col:col},globals.Grid)})},
args: ["index"],
source: "colAt: index\x0a\x09| col |\x0a\x09col := Array new: size y.\x0a\x091 to: size y do: [ :y | | pt |\x0a\x09\x09pt := Point x: index y: y.\x0a\x09\x09col at: y put: (self at: pt) ].\x0a\x09^ Cells new: col",
messageSends: ["new:", "y", "to:do:", "x:y:", "at:put:", "at:"],
referencedClasses: ["Array", "Point", "Cells"]
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
protocol: 'private',
fn: function (point){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(self["@size"])._x();
$ctx1.sendIdx["x"]=1;
$2=_st($3).__star(_st(_st(point)._y()).__minus((1)));
$1=_st($2).__plus(_st(point)._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{point:point},globals.Grid)})},
args: ["point"],
source: "indexOf: point\x0a\x09^ (size x * (point y - 1)) + point x.",
messageSends: ["+", "*", "x", "-", "y"],
referencedClasses: []
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
(1)._to_do_(_st(self["@size"])._y(),(function(y){
return smalltalk.withContext(function($ctx2) {
_st(stream)._cr();
return _st(self._rowAt_(y))._printOn_(stream);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.Grid)})},
args: ["stream"],
source: "printOn: stream\x0a\x091 to: size y do: [ :y |\x0a\x09\x09stream cr.\x0a\x09\x09(self rowAt: y) printOn: stream ]",
messageSends: ["to:do:", "y", "cr", "printOn:", "rowAt:"],
referencedClasses: []
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "rowAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
var start;
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1;
start=self._indexOf_(_st($Point())._x_y_((1),index));
$1=_st($Cells())._new_(_st(self["@cells"])._copyFrom_to_(start,_st(_st(start).__plus(_st(self["@size"])._x())).__minus((1))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index,start:start},globals.Grid)})},
args: ["index"],
source: "rowAt: index\x0a\x09| start |\x0a\x09start := self indexOf: (Point x: 1 y: index).\x0a\x09^ Cells new: (cells copyFrom: start to: (start + size x - 1))",
messageSends: ["indexOf:", "x:y:", "new:", "copyFrom:to:", "-", "+", "x"],
referencedClasses: ["Point", "Cells"]
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
protocol: 'as yet unclassified',
fn: function (aSize){
var self=this;
function $Cell(){return globals.Cell||(typeof Cell=="undefined"?nil:Cell)}
return smalltalk.withContext(function($ctx1) { 
self["@size"]=aSize;
self["@cells"]=_st((1)._to_(_st(_st(self["@size"])._x()).__star(_st(self["@size"])._y())))._collect_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Cell())._unknown();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aSize:aSize},globals.Grid)})},
args: ["aSize"],
source: "size: aSize\x0a\x09size := aSize.\x0a\x09cells := (1 to: (size x * size y)) collect: [ Cell unknown ]",
messageSends: ["collect:", "to:", "*", "x", "y", "unknown"],
referencedClasses: ["Cell"]
}),
globals.Grid);

smalltalk.addMethod(
smalltalk.method({
selector: "space:",
protocol: 'as yet unclassified',
fn: function (point){
var self=this;
function $Cell(){return globals.Cell||(typeof Cell=="undefined"?nil:Cell)}
return smalltalk.withContext(function($ctx1) { 
self._at_put_(point,_st($Cell())._space());
return self}, function($ctx1) {$ctx1.fill(self,"space:",{point:point},globals.Grid)})},
args: ["point"],
source: "space: point\x0a\x09self at: point put: (Cell space)",
messageSends: ["at:put:", "space"],
referencedClasses: ["Cell"]
}),
globals.Grid);



smalltalk.addClass('Hint', globals.Object, ['numbers'], 'Logimage');
globals.Hint.comment="List of numbers";
smalltalk.addMethod(
smalltalk.method({
selector: "numbers:",
protocol: 'as yet unclassified',
fn: function (array){
var self=this;
self["@numbers"]=array;
return self},
args: ["array"],
source: "numbers: array\x0a\x09numbers := array",
messageSends: [],
referencedClasses: []
}),
globals.Hint);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(stream)._nextPutAll_("| ");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(self["@numbers"])._do_((function(n){
return smalltalk.withContext(function($ctx2) {
_st(n)._printOn_(stream);
return _st(stream)._space();
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)})}));
_st(stream)._nextPutAll_("|");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.Hint)})},
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '| '.\x0a\x09numbers do: [ :n |\x0a\x09\x09n printOn: stream.\x0a\x09\x09stream space ].\x0a\x09stream nextPutAll: '|'",
messageSends: ["nextPutAll:", "do:", "printOn:", "space"],
referencedClasses: []
}),
globals.Hint);



smalltalk.addClass('Hints', globals.Object, ['hints'], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'as yet unclassified',
fn: function (hint){
var self=this;
function $Hint(){return globals.Hint||(typeof Hint=="undefined"?nil:Hint)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self["@hints"];
$3=_st(hint)._isKindOf_($Hint());
if(smalltalk.assert($3)){
$2=hint;
} else {
$2=_st(_st($Hint())._new())._numbers_(hint);
};
_st($1)._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{hint:hint},globals.Hints)})},
args: ["hint"],
source: "add: hint\x0a\x09hints add: (\x0a\x09\x09(hint isKindOf: Hint)\x0a\x09\x09\x09ifTrue: [ hint ]\x0a\x09\x09\x09ifFalse: [ Hint new numbers: hint ])",
messageSends: ["add:", "ifTrue:ifFalse:", "isKindOf:", "numbers:", "new"],
referencedClasses: ["Hint"]
}),
globals.Hints);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@hints"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},globals.Hints)})},
args: ["index"],
source: "at: index\x0a\x09^ hints at: index",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Hints);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@hints"]=[];
return self},
args: [],
source: "initialize\x0a\x09hints := {}",
messageSends: [],
referencedClasses: []
}),
globals.Hints);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@hints"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.Hints)})},
args: [],
source: "size\x0a\x09^ hints size",
messageSends: ["size"],
referencedClasses: []
}),
globals.Hints);



smalltalk.addClass('Line', globals.Object, ['hint', 'cells'], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "cells",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@cells"];
return $1;
},
args: [],
source: "cells\x0a\x09^ cells",
messageSends: [],
referencedClasses: []
}),
globals.Line);

smalltalk.addMethod(
smalltalk.method({
selector: "cells:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@cells"]=anObject;
return self},
args: ["anObject"],
source: "cells: anObject\x0a\x09cells := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Line);

smalltalk.addMethod(
smalltalk.method({
selector: "hint",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@hint"];
return $1;
},
args: [],
source: "hint\x0a\x09^ hint",
messageSends: [],
referencedClasses: []
}),
globals.Line);

smalltalk.addMethod(
smalltalk.method({
selector: "hint:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@hint"]=anObject;
return self},
args: ["anObject"],
source: "hint: anObject\x0a\x09hint := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Line);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@hint"])._printOn_(stream);
$ctx1.sendIdx["printOn:"]=1;
_st(self["@cells"])._printOn_(stream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.Line)})},
args: ["stream"],
source: "printOn: stream\x0a\x09hint printOn: stream.\x0a\x09cells printOn: stream",
messageSends: ["printOn:"],
referencedClasses: []
}),
globals.Line);


smalltalk.addMethod(
smalltalk.method({
selector: "new:cells:",
protocol: 'as yet unclassified',
fn: function (hint,cells){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hint_(hint);
$3=_st($2)._cells_(cells);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:cells:",{hint:hint,cells:cells},globals.Line.klass)})},
args: ["hint", "cells"],
source: "new: hint cells: cells\x0a\x09^ self new hint: hint; cells: cells",
messageSends: ["hint:", "new", "cells:"],
referencedClasses: []
}),
globals.Line.klass);


smalltalk.addClass('Logimage', globals.Object, ['row', 'col', 'grid'], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "addColHints:",
protocol: 'as yet unclassified',
fn: function (hints){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@col"])._add_(hints);
self._resize();
return self}, function($ctx1) {$ctx1.fill(self,"addColHints:",{hints:hints},globals.Logimage)})},
args: ["hints"],
source: "addColHints: hints\x0a\x09col add: hints.\x0a\x09self resize",
messageSends: ["add:", "resize"],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "addRowHints:",
protocol: 'as yet unclassified',
fn: function (hints){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@row"])._add_(hints);
self._resize();
return self}, function($ctx1) {$ctx1.fill(self,"addRowHints:",{hints:hints},globals.Logimage)})},
args: ["hints"],
source: "addRowHints: hints\x0a\x09row add: hints.\x0a\x09self resize",
messageSends: ["add:", "resize"],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
protocol: 'as yet unclassified',
fn: function (point){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@grid"])._box_(point);
return self}, function($ctx1) {$ctx1.fill(self,"box:",{point:point},globals.Logimage)})},
args: ["point"],
source: "box: point\x0a\x09grid box: point",
messageSends: ["box:"],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "colCellsAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@grid"])._colAt_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"colCellsAt:",{index:index},globals.Logimage)})},
args: ["index"],
source: "colCellsAt: index\x0a\x09^ grid colAt: index",
messageSends: ["colAt:"],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "colHintAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@col"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"colHintAt:",{index:index},globals.Logimage)})},
args: ["index"],
source: "colHintAt: index\x0a\x09^ col at: index",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "colLineAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
function $Line(){return globals.Line||(typeof Line=="undefined"?nil:Line)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Line())._new_cells_(self._colHintAt_(index),self._colCellsAt_(index));
return $1;
}, function($ctx1) {$ctx1.fill(self,"colLineAt:",{index:index},globals.Logimage)})},
args: ["index"],
source: "colLineAt: index\x0a\x09^ Line new: (self colHintAt: index)\x0a\x09\x09 cells: (self colCellsAt: index)",
messageSends: ["new:cells:", "colHintAt:", "colCellsAt:"],
referencedClasses: ["Line"]
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "grid",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@grid"];
return $1;
},
args: [],
source: "grid\x0a\x09^ grid",
messageSends: [],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $Hints(){return globals.Hints||(typeof Hints=="undefined"?nil:Hints)}
function $Grid(){return globals.Grid||(typeof Grid=="undefined"?nil:Grid)}
return smalltalk.withContext(function($ctx1) { 
self["@row"]=_st($Hints())._new();
$ctx1.sendIdx["new"]=1;
self["@col"]=_st($Hints())._new();
$ctx1.sendIdx["new"]=2;
self["@grid"]=_st($Grid())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Logimage)})},
args: [],
source: "initialize\x0a\x09row := Hints new.\x0a\x09col := Hints new.\x0a\x09grid := Grid new",
messageSends: ["new"],
referencedClasses: ["Hints", "Grid"]
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "resize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var newsize;
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@row"])._size();
$ctx1.sendIdx["size"]=1;
newsize=_st($Point())._x_y_($1,_st(self["@col"])._size());
_st(self["@grid"])._size_(newsize);
return self}, function($ctx1) {$ctx1.fill(self,"resize",{newsize:newsize},globals.Logimage)})},
args: [],
source: "resize\x0a\x09| newsize |\x0a\x09newsize := Point x: (row size) y: (col size).\x0a\x09grid size: newsize",
messageSends: ["x:y:", "size", "size:"],
referencedClasses: ["Point"]
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "rowCellsAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@grid"])._rowAt_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowCellsAt:",{index:index},globals.Logimage)})},
args: ["index"],
source: "rowCellsAt: index\x0a\x09^ grid rowAt: index",
messageSends: ["rowAt:"],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "rowHintAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@row"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowHintAt:",{index:index},globals.Logimage)})},
args: ["index"],
source: "rowHintAt: index\x0a\x09^ row at: index",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "rowLineAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
function $Line(){return globals.Line||(typeof Line=="undefined"?nil:Line)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Line())._new_cells_(self._rowHintAt_(index),self._rowCellsAt_(index));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowLineAt:",{index:index},globals.Logimage)})},
args: ["index"],
source: "rowLineAt: index\x0a\x09^ Line new: (self rowHintAt: index)\x0a\x09\x09 cells: (self rowCellsAt: index)",
messageSends: ["new:cells:", "rowHintAt:", "rowCellsAt:"],
referencedClasses: ["Line"]
}),
globals.Logimage);

smalltalk.addMethod(
smalltalk.method({
selector: "space:",
protocol: 'as yet unclassified',
fn: function (point){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@grid"])._space_(point);
return self}, function($ctx1) {$ctx1.fill(self,"space:",{point:point},globals.Logimage)})},
args: ["point"],
source: "space: point\x0a\x09grid space: point",
messageSends: ["space:"],
referencedClasses: []
}),
globals.Logimage);


smalltalk.addMethod(
smalltalk.method({
selector: "example",
protocol: 'examples',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._addRowHints_([(1)]);
$ctx1.sendIdx["addRowHints:"]=1;
_st($2)._addRowHints_([(2)]);
_st($2)._addColHints_([(1)]);
$ctx1.sendIdx["addColHints:"]=1;
$3=_st($2)._addColHints_([(2)]);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"example",{},globals.Logimage.klass)})},
args: [],
source: "example\x0a\x09^ self new\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addColHints: #( 1 );\x0a\x09\x09addColHints: #( 2 )",
messageSends: ["addRowHints:", "new", "addColHints:"],
referencedClasses: []
}),
globals.Logimage.klass);

});
