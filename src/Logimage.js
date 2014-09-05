define("amber-logimage/Logimage", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Logimage');
smalltalk.packages["Logimage"].transport = {"type":"amd","amdNamespace":"amber-logimage"};

smalltalk.addClass('Cell', globals.Object, [], 'Logimage');
globals.Cell.comment="A simple cell or pixel.";
smalltalk.addMethod(
smalltalk.method({
selector: "isBox",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBox\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "isSpace",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSpace\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Cell);

smalltalk.addMethod(
smalltalk.method({
selector: "isUnknown",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isUnknown\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.Cell);


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
selector: "isBox",
protocol: 'printing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBox\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.CellBox);

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
selector: "isSpace",
protocol: 'printing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSpace\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.CellSpace);

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
selector: "isUnknown",
protocol: 'printing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isUnknown\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.CellUnknown);

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
function $Cell(){return globals.Cell||(typeof Cell=="undefined"?nil:Cell)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@cells"]=_st(theCells)._collect_((function(c){
return smalltalk.withContext(function($ctx2) {
$1=_st(c)._isString();
if(smalltalk.assert($1)){
return _st($Cell())._at_(c);
} else {
return c;
};
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cells:",{theCells:theCells},globals.Cells)})},
args: ["theCells"],
source: "cells: theCells\x0a\x09cells := theCells collect: [ :c |\x0a\x09\x09\x09c isString\x0a\x09\x09\x09\x09ifTrue: [ Cell at: c ]\x0a\x09\x09\x09\x09ifFalse: [ c ]\x0a\x09\x09]",
messageSends: ["collect:", "ifTrue:ifFalse:", "isString", "at:"],
referencedClasses: ["Cell"]
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "firstNumbers",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._numbersOf_(self["@cells"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstNumbers",{},globals.Cells)})},
args: [],
source: "firstNumbers\x0a\x09^ self numbersOf: cells",
messageSends: ["numbersOf:"],
referencedClasses: []
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "lastNumbers",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._numbersOf_(_st(self["@cells"])._reversed());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastNumbers",{},globals.Cells)})},
args: [],
source: "lastNumbers\x0a\x09^ self numbersOf: cells reversed",
messageSends: ["numbersOf:", "reversed"],
referencedClasses: []
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "numbersOf:",
protocol: 'private',
fn: function (theCells){
var self=this;
var numbers,current;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
var $early={};
try {
numbers=[];
current=(0);
_st(theCells)._do_((function(c){
return smalltalk.withContext(function($ctx2) {
$1=_st(c)._isBox();
if(smalltalk.assert($1)){
current=_st(current).__plus((1));
current;
} else {
$2=_st(current).__gt((0));
if(smalltalk.assert($2)){
_st(numbers)._add_(current);
};
current=(0);
current;
};
$3=_st(c)._isUnknown();
if(smalltalk.assert($3)){
$4=numbers;
throw $early=[$4];
};
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}));
$5=numbers;
return $5;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"numbersOf:",{theCells:theCells,numbers:numbers,current:current},globals.Cells)})},
args: ["theCells"],
source: "numbersOf: theCells\x0a\x09| numbers current |\x0a\x09numbers := { }.\x0a\x09current := 0.\x0a\x09theCells do: [ :c |\x0a\x09\x09c isBox\x0a\x09\x09\x09ifTrue: [ current := current + 1 ]\x0a\x09\x09\x09ifFalse: [ current > 0 ifTrue: [ numbers add: current ].\x0a\x09\x09\x09\x09\x09   current := 0 ].\x0a\x09\x09c isUnknown ifTrue: [ ^ numbers ].\x0a\x09\x09].\x0a\x09^ numbers",
messageSends: ["do:", "ifTrue:ifFalse:", "isBox", "+", "ifTrue:", ">", "add:", "isUnknown"],
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
selector: "size",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.Cells)})},
args: [],
source: "size\x0a\x09^ cells size",
messageSends: ["size"],
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
selector: "numbers",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var $1;
$1=self["@numbers"];
return $1;
},
args: [],
source: "numbers\x0a\x09^ numbers",
messageSends: [],
referencedClasses: []
}),
globals.Hint);

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

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@numbers"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.Hint)})},
args: [],
source: "size\x0a\x09^ numbers size",
messageSends: ["size"],
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
selector: "isDone",
protocol: 'accessing',
fn: function (){
var self=this;
function $False(){return globals.False||(typeof False=="undefined"?nil:False)}
return $False();
},
args: [],
source: "isDone\x0a\x09^ False",
messageSends: [],
referencedClasses: ["False"]
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
$1=_st(self["@col"])._size();
$ctx1.sendIdx["size"]=1;
newsize=_st($Point())._x_y_($1,_st(self["@row"])._size());
_st(self["@grid"])._size_(newsize);
return self}, function($ctx1) {$ctx1.fill(self,"resize",{newsize:newsize},globals.Logimage)})},
args: [],
source: "resize\x0a\x09| newsize |\x0a\x09newsize := Point x: (col size) y: (row size).\x0a\x09grid size: newsize",
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
selector: "question",
protocol: 'examples',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._addRowHints_([(3)]);
$ctx1.sendIdx["addRowHints:"]=1;
_st($2)._addRowHints_([(2), (2)]);
$ctx1.sendIdx["addRowHints:"]=2;
_st($2)._addRowHints_([(1), (1)]);
$ctx1.sendIdx["addRowHints:"]=3;
_st($2)._addRowHints_([(2)]);
$ctx1.sendIdx["addRowHints:"]=4;
_st($2)._addRowHints_([(2)]);
$ctx1.sendIdx["addRowHints:"]=5;
_st($2)._addRowHints_([(1)]);
$ctx1.sendIdx["addRowHints:"]=6;
_st($2)._addRowHints_([(1)]);
$ctx1.sendIdx["addRowHints:"]=7;
_st($2)._addRowHints_([(0)]);
$ctx1.sendIdx["addRowHints:"]=8;
_st($2)._addRowHints_([(1)]);
_st($2)._addColHints_([(2)]);
$ctx1.sendIdx["addColHints:"]=1;
_st($2)._addColHints_([(2)]);
$ctx1.sendIdx["addColHints:"]=2;
_st($2)._addColHints_([(1), (3), (1)]);
$ctx1.sendIdx["addColHints:"]=3;
_st($2)._addColHints_([(2), (2)]);
$ctx1.sendIdx["addColHints:"]=4;
$3=_st($2)._addColHints_([(3)]);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"question",{},globals.Logimage.klass)})},
args: [],
source: "question\x0a\x09^ self new\x0a\x09\x09addRowHints: #( 3 );\x0a\x09\x09addRowHints: #( 2 2 );\x0a\x09\x09addRowHints: #( 1 1 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( 0 );\x0a\x09\x09addRowHints: #( 1 );\x0a\x0a\x09\x09addColHints: #( 2 );\x0a\x09\x09addColHints: #( 2 );\x0a\x09\x09addColHints: #( 1 3 1 );\x0a\x09\x09addColHints: #( 2 2 );\x0a\x09\x09addColHints: #( 3 )",
messageSends: ["addRowHints:", "new", "addColHints:"],
referencedClasses: []
}),
globals.Logimage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "simple",
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
}, function($ctx1) {$ctx1.fill(self,"simple",{},globals.Logimage.klass)})},
args: [],
source: "simple\x0a\x09^ self new\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addColHints: #( 1 );\x0a\x09\x09addColHints: #( 2 )",
messageSends: ["addRowHints:", "new", "addColHints:"],
referencedClasses: []
}),
globals.Logimage.klass);


smalltalk.addClass('Strategy', globals.Object, [], 'Logimage');


smalltalk.addClass('StratRecover', globals.Strategy, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var free,sol;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3,$6,$8,$7,$9;
free=self._free_(line);
sol=[];
_st(_st(_st(line)._hint())._numbers())._do_((function(n){
return smalltalk.withContext(function($ctx2) {
_st(_st(n)._min_(free))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(sol)._add_("u");
$ctx3.sendIdx["add:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$1=_st(free).__plus((1));
$ctx2.sendIdx["+"]=1;
_st($1)._to_do_(n,(function(){
return smalltalk.withContext(function($ctx3) {
return _st(sol)._add_("b");
$ctx3.sendIdx["add:"]=2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["to:do:"]=1;
return _st(sol)._add_("u");
$ctx2.sendIdx["add:"]=3;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)})}));
$2=sol;
$5=_st(line)._cells();
$ctx1.sendIdx["cells"]=1;
$4=_st($5)._size();
$ctx1.sendIdx["size"]=1;
$3=_st($4).__plus((1));
$ctx1.sendIdx["+"]=2;
$6=_st(sol)._size();
$ctx1.sendIdx["size"]=2;
sol=_st($2)._removeFrom_to_($3,$6);
$8=_st(sol)._size();
$ctx1.sendIdx["size"]=3;
$7=_st($8).__plus((1));
_st($7)._to_do_(_st(_st(line)._cells())._size(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(sol)._add_("u");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$9=sol;
return $9;
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,free:free,sol:sol},globals.StratRecover)})},
args: ["line"],
source: "analyse: line\x0a\x09| free sol |\x0a\x09free := self free: line.\x0a\x09sol := {}.\x0a\x09line hint numbers do: [ :n |\x0a\x09\x09(n min: free) timesRepeat: [ sol add: #u ].\x0a\x09\x09free+1 to: n do: [ sol add: #b ].\x0a\x09\x09sol add: #u\x0a\x09\x09].\x0a\x09\x22remove last unknown if line full\x22\x0a\x09 sol := sol\x0a\x09 \x09removeFrom: (line cells size) + 1\x0a\x09\x09to: sol size.\x0a\x09\x22add unknown if nedeed\x22\x0a\x09(sol size + 1) to: (line cells size) do: [ sol add: #u ].\x0a\x09^ sol",
messageSends: ["free:", "do:", "numbers", "hint", "timesRepeat:", "min:", "add:", "to:do:", "+", "removeFrom:to:", "size", "cells"],
referencedClasses: []
}),
globals.StratRecover);

smalltalk.addMethod(
smalltalk.method({
selector: "free:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(line)._cells())._size()).__minus(self._occupation_(_st(line)._hint()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"free:",{line:line},globals.StratRecover)})},
args: ["line"],
source: "free: line\x0a\x09^ (line cells size) - (self occupation: line hint)",
messageSends: ["-", "size", "cells", "occupation:", "hint"],
referencedClasses: []
}),
globals.StratRecover);

smalltalk.addMethod(
smalltalk.method({
selector: "occupation:",
protocol: 'as yet unclassified',
fn: function (hint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._sum_(hint)).__plus(_st(hint)._size())).__minus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"occupation:",{hint:hint},globals.StratRecover)})},
args: ["hint"],
source: "occupation: hint\x0a\x09^ (self sum: hint) + hint size - 1",
messageSends: ["-", "+", "sum:", "size"],
referencedClasses: []
}),
globals.StratRecover);

smalltalk.addMethod(
smalltalk.method({
selector: "sum:",
protocol: 'as yet unclassified',
fn: function (hint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(hint)._numbers())._inject_into_((0),(function(s,n){
return smalltalk.withContext(function($ctx2) {
return _st(s).__plus(n);
}, function($ctx2) {$ctx2.fillBlock({s:s,n:n},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sum:",{hint:hint},globals.StratRecover)})},
args: ["hint"],
source: "sum: hint\x0a\x09^ hint numbers inject: 0 into: [ :s :n | s+n ]",
messageSends: ["inject:into:", "numbers", "+"],
referencedClasses: []
}),
globals.StratRecover);


});
