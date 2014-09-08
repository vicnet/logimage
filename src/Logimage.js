define("amber-logimage/Logimage", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Logimage');
smalltalk.packages["Logimage"].transport = {"type":"amd","amdNamespace":"amber-logimage"};

smalltalk.addClass('Cell', globals.Object, [], 'Logimage');
globals.Cell.comment="A simple cell or pixel.";
smalltalk.addMethod(
smalltalk.method({
selector: "*",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Cells())._new())._add_cell_(n,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"*",{n:n},globals.Cell)})},
args: ["n"],
source: "* n\x0a\x09^ Cells new add: n cell: self",
messageSends: ["add:cell:", "new"],
referencedClasses: ["Cells"]
}),
globals.Cell);

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
selector: "add:",
protocol: 'as yet unclassified',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cells"])._add_(self._cellFrom_(aCell));
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aCell:aCell},globals.Cells)})},
args: ["aCell"],
source: "add: aCell\x0a\x09cells add: (self cellFrom: aCell)",
messageSends: ["add:", "cellFrom:"],
referencedClasses: []
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "add:cell:",
protocol: 'as yet unclassified',
fn: function (n,aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(n)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return self._add_(aCell);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"add:cell:",{n:n,aCell:aCell},globals.Cells)})},
args: ["n", "aCell"],
source: "add: n cell: aCell\x0a\x09n timesRepeat: [ self add: aCell ]",
messageSends: ["timesRepeat:", "add:"],
referencedClasses: []
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index},globals.Cells)})},
args: ["index"],
source: "at: index\x0a\x09^ cells at: index",
messageSends: ["at:"],
referencedClasses: []
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "cellFrom:",
protocol: 'as yet unclassified',
fn: function (aCell){
var self=this;
function $Cell(){return globals.Cell||(typeof Cell=="undefined"?nil:Cell)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aCell)._isString();
if(smalltalk.assert($1)){
$2=_st($Cell())._at_(aCell);
return $2;
};
return aCell;
}, function($ctx1) {$ctx1.fill(self,"cellFrom:",{aCell:aCell},globals.Cells)})},
args: ["aCell"],
source: "cellFrom: aCell\x0a\x09aCell isString\x0a\x09\x09ifTrue: [ ^ Cell at: aCell ].\x0a\x09^ aCell",
messageSends: ["ifTrue:", "isString", "at:"],
referencedClasses: ["Cell"]
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "cells",
protocol: 'as yet unclassified',
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
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "cells:",
protocol: 'as yet unclassified',
fn: function (theCells){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cells"]=_st(theCells)._collect_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._cellFrom_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cells:",{theCells:theCells},globals.Cells)})},
args: ["theCells"],
source: "cells: theCells\x0a\x09cells := theCells collect: [ :c |\x0a\x09\x09\x09self cellFrom: c ]",
messageSends: ["collect:", "cellFrom:"],
referencedClasses: []
}),
globals.Cells);

smalltalk.addMethod(
smalltalk.method({
selector: "doneOf:",
protocol: 'private',
fn: function (theCells){
var self=this;
var nb;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
nb=(0);
_st(_st(theCells)._cells())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
$1=_st(c)._isUnknown();
if(smalltalk.assert($1)){
$2=nb;
throw $early=[$2];
};
nb=_st(nb).__plus((1));
return nb;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}));
$3=nb;
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"doneOf:",{theCells:theCells,nb:nb},globals.Cells)})},
args: ["theCells"],
source: "doneOf: theCells\x0a\x09\x22I returns a list of cells done in a block of Cells at begining\x22\x0a\x09\x22TODO should be in Class (static)\x22\x0a\x09| nb |\x0a\x09nb := 0.\x0a\x09theCells cells do: [ :c |\x0a\x09\x09\x22if found a unknow, stop reading cells\x22\x0a\x09\x09c isUnknown ifTrue: [ ^ nb ].\x0a\x09\x09nb := nb + 1 ].\x0a\x09^ nb",
messageSends: ["do:", "cells", "ifTrue:", "isUnknown", "+"],
referencedClasses: []
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
$1=_st(self._numbersOf_(_st(self["@cells"])._reversed()))._reversed();
$ctx1.sendIdx["reversed"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastNumbers",{},globals.Cells)})},
args: [],
source: "lastNumbers\x0a\x09^ (self numbersOf: cells reversed) reversed",
messageSends: ["reversed", "numbersOf:"],
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
_st(_st(theCells)._cells())._do_((function(c){
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
source: "numbersOf: theCells\x0a\x09\x22I returns a list of number done in a block of Cells\x22\x0a\x09\x22TODO should be in Class (static)\x22\x0a\x09| numbers current |\x0a\x09numbers := { }.\x0a\x09current := 0.\x0a\x09theCells cells do: [ :c |\x0a\x09\x09c isBox\x0a\x09\x09\x09ifTrue: [ current := current + 1 ]\x0a\x09\x09\x09ifFalse: [ current > 0 ifTrue: [ numbers add: current ].\x0a\x09\x09\x09\x09\x09   current := 0 ].\x0a\x09\x09\x22if found a unknow, stop reading cells\x22\x0a\x09\x09c isUnknown ifTrue: [ ^ numbers ].\x0a\x09\x09].\x0a\x09^ numbers",
messageSends: ["do:", "cells", "ifTrue:ifFalse:", "isBox", "+", "ifTrue:", ">", "add:", "isUnknown"],
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
selector: "reversed",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Cells())._new_(_st(self["@cells"])._reversed());
return $1;
}, function($ctx1) {$ctx1.fill(self,"reversed",{},globals.Cells)})},
args: [],
source: "reversed\x0a\x09^ Cells new: cells reversed",
messageSends: ["new:", "reversed"],
referencedClasses: ["Cells"]
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
selector: "size:",
protocol: 'printing',
fn: function (newSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6,$7;
$2=self._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__eq(newSize);
if(smalltalk.assert($1)){
return self;
};
$4=self._size();
$ctx1.sendIdx["size"]=2;
$3=_st($4).__gt(newSize);
if(smalltalk.assert($3)){
$5=self["@cells"];
$6=_st(newSize).__plus((1));
$7=self._size();
$ctx1.sendIdx["size"]=3;
self["@cells"]=_st($5)._removeFrom_to_($6,$7);
self["@cells"];
} else {
self._add_cell_(_st(newSize).__minus(self._size()),"unknown");
};
return self}, function($ctx1) {$ctx1.fill(self,"size:",{newSize:newSize},globals.Cells)})},
args: ["newSize"],
source: "size: newSize\x0a\x09(self size = newSize) ifTrue: [ ^ self ].\x0a\x09(self size > newSize)\x0a\x09\x09ifTrue: [ cells := cells\x0a\x09 \x09\x09\x09\x09removeFrom: newSize + 1\x0a\x09\x09\x09\x09\x09to: self size ]\x0a\x09\x09ifFalse: [ self\x0a\x09\x09\x09\x09\x09add: (newSize - self size)\x0a\x09\x09\x09\x09\x09cell: #unknown ]",
messageSends: ["ifTrue:", "=", "size", "ifTrue:ifFalse:", ">", "removeFrom:to:", "+", "add:cell:", "-"],
referencedClasses: []
}),
globals.Cells);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_([]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},globals.Cells.klass)})},
args: [],
source: "new\x0a\x09^ self new: #( )",
messageSends: ["new:"],
referencedClasses: []
}),
globals.Cells.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
protocol: 'as yet unclassified',
fn: function (cells){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=($ctx1.supercall = true, globals.Cells.klass.superclass.fn.prototype._new.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($2)._cells_(cells);
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{cells:cells},globals.Cells.klass)})},
args: ["cells"],
source: "new: cells\x0a\x09^ super new cells: cells",
messageSends: ["cells:", "new"],
referencedClasses: []
}),
globals.Cells.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spaces:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._add_cell_(n,"space");
return $1;
}, function($ctx1) {$ctx1.fill(self,"spaces:",{n:n},globals.Cells.klass)})},
args: ["n"],
source: "spaces: n\x0a\x09^ self new add: n cell: #space",
messageSends: ["add:cell:", "new"],
referencedClasses: []
}),
globals.Cells.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "unknowns:",
protocol: 'as yet unclassified',
fn: function (n){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._add_cell_(n,"unknown");
return $1;
}, function($ctx1) {$ctx1.fill(self,"unknowns:",{n:n},globals.Cells.klass)})},
args: ["n"],
source: "unknowns: n\x0a\x09^ self new add: n cell: #unknown",
messageSends: ["add:cell:", "new"],
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
selector: "size",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var $1;
$1=self["@size"];
return $1;
},
args: [],
source: "size\x0a\x09^ size",
messageSends: [],
referencedClasses: []
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
selector: "printOn:",
protocol: 'as yet unclassified',
fn: function (stream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@hints"])._do_((function(hint){
return smalltalk.withContext(function($ctx2) {
_st(stream)._cr();
return _st(hint)._printOn_(stream);
}, function($ctx2) {$ctx2.fillBlock({hint:hint},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream},globals.Hints)})},
args: ["stream"],
source: "printOn: stream\x0a\x09hints do: [ :hint |\x0a\x09\x09stream cr.\x0a\x09\x09hint printOn: stream ]",
messageSends: ["do:", "cr", "printOn:"],
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
selector: "colHints",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@col"];
return $1;
},
args: [],
source: "colHints\x0a\x09^ col",
messageSends: [],
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
selector: "colLines",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((1)._to_(_st(self["@col"])._size()))._collect_((function(index){
return smalltalk.withContext(function($ctx2) {
return self._colLineAt_(index);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"colLines",{},globals.Logimage)})},
args: [],
source: "colLines\x0a\x09^ (1 to: col size) collect: [ :index |\x0a\x09\x09\x09self colLineAt: index ]",
messageSends: ["collect:", "to:", "size", "colLineAt:"],
referencedClasses: []
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
selector: "rowHints",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@row"];
return $1;
},
args: [],
source: "rowHints\x0a\x09^ row",
messageSends: [],
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
selector: "rowLines",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((1)._to_(_st(self["@row"])._size()))._collect_((function(index){
return smalltalk.withContext(function($ctx2) {
return self._rowLineAt_(index);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowLines",{},globals.Logimage)})},
args: [],
source: "rowLines\x0a\x09^ (1 to: row size) collect: [ :index |\x0a\x09\x09\x09self rowLineAt: index ]",
messageSends: ["collect:", "to:", "size", "rowLineAt:"],
referencedClasses: []
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
_st($2)._addRowHints_([]);
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
source: "question\x0a\x09^ self new\x0a\x09\x09addRowHints: #( 3 );\x0a\x09\x09addRowHints: #( 2 2 );\x0a\x09\x09addRowHints: #( 1 1 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addRowHints: #( 2 );\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( 1 );\x0a\x09\x09addRowHints: #( );\x0a\x09\x09addRowHints: #( 1 );\x0a\x0a\x09\x09addColHints: #( 2 );\x0a\x09\x09addColHints: #( 2 );\x0a\x09\x09addColHints: #( 1 3 1 );\x0a\x09\x09addColHints: #( 2 2 );\x0a\x09\x09addColHints: #( 3 )",
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


smalltalk.addClass('Strategist', globals.Object, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "apply:on:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._apply_onRowOf_(strategy,logimage);
self._apply_onColOf_(strategy,logimage);
return self}, function($ctx1) {$ctx1.fill(self,"apply:on:",{strategy:strategy,logimage:logimage},globals.Strategist)})},
args: ["strategy", "logimage"],
source: "apply: strategy on: logimage\x0a\x09self apply: strategy onRowOf: logimage.\x0a\x09self apply: strategy onColOf: logimage",
messageSends: ["apply:onRowOf:", "apply:onColOf:"],
referencedClasses: []
}),
globals.Strategist);

smalltalk.addMethod(
smalltalk.method({
selector: "apply:on:at:",
protocol: 'as yet unclassified',
fn: function (cell,logimage,point){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(cell)._isBox();
if(smalltalk.assert($1)){
_st(logimage)._box_(point);
return self;
};
$2=_st(cell)._isSpace();
if(smalltalk.assert($2)){
_st(logimage)._space_(point);
return self;
};
return self}, function($ctx1) {$ctx1.fill(self,"apply:on:at:",{cell:cell,logimage:logimage,point:point},globals.Strategist)})},
args: ["cell", "logimage", "point"],
source: "apply: cell on: logimage at: point\x0a\x09cell isBox ifTrue: [ logimage box: point. ^ self ].\x0a\x09cell isSpace ifTrue: [ logimage space: point. ^ self ]",
messageSends: ["ifTrue:", "isBox", "box:", "isSpace", "space:"],
referencedClasses: []
}),
globals.Strategist);

smalltalk.addMethod(
smalltalk.method({
selector: "apply:on:atCol:",
protocol: 'as yet unclassified',
fn: function (cells,logimage,x){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(cells)._cells())._withIndexDo_((function(cell,y){
return smalltalk.withContext(function($ctx2) {
return self._apply_on_at_(cell,logimage,_st(x).__at(y));
}, function($ctx2) {$ctx2.fillBlock({cell:cell,y:y},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"apply:on:atCol:",{cells:cells,logimage:logimage,x:x},globals.Strategist)})},
args: ["cells", "logimage", "x"],
source: "apply: cells on: logimage atCol: x\x0a\x09cells cells withIndexDo: [ :cell :y |\x0a\x09\x09self apply: cell on: logimage at: x@y ]",
messageSends: ["withIndexDo:", "cells", "apply:on:at:", "@"],
referencedClasses: []
}),
globals.Strategist);

smalltalk.addMethod(
smalltalk.method({
selector: "apply:on:atRow:",
protocol: 'as yet unclassified',
fn: function (cells,logimage,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(cells)._cells())._withIndexDo_((function(cell,x){
return smalltalk.withContext(function($ctx2) {
return self._apply_on_at_(cell,logimage,_st(x).__at(y));
}, function($ctx2) {$ctx2.fillBlock({cell:cell,x:x},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"apply:on:atRow:",{cells:cells,logimage:logimage,y:y},globals.Strategist)})},
args: ["cells", "logimage", "y"],
source: "apply: cells on: logimage atRow: y\x0a\x09cells cells withIndexDo: [ :cell :x |\x0a\x09\x09self apply: cell on: logimage at: x@y ]",
messageSends: ["withIndexDo:", "cells", "apply:on:at:", "@"],
referencedClasses: []
}),
globals.Strategist);

smalltalk.addMethod(
smalltalk.method({
selector: "apply:onColOf:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
(1)._to_do_(_st(_st(_st(logimage)._grid())._size())._x(),(function(x){
var sol;
return smalltalk.withContext(function($ctx2) {
sol=_st(strategy)._analyse_(_st(logimage)._colLineAt_(x));
sol;
return self._apply_on_atCol_(sol,logimage,x);
}, function($ctx2) {$ctx2.fillBlock({x:x,sol:sol},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"apply:onColOf:",{strategy:strategy,logimage:logimage},globals.Strategist)})},
args: ["strategy", "logimage"],
source: "apply: strategy onColOf: logimage\x0a\x091 to: logimage grid size x do: [ :x | | sol |\x0a\x09\x09sol := strategy analyse: (logimage colLineAt: x).\x0a\x09\x09self apply: sol on: logimage atCol: x ]",
messageSends: ["to:do:", "x", "size", "grid", "analyse:", "colLineAt:", "apply:on:atCol:"],
referencedClasses: []
}),
globals.Strategist);

smalltalk.addMethod(
smalltalk.method({
selector: "apply:onRowOf:",
protocol: 'as yet unclassified',
fn: function (strategy,logimage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
(1)._to_do_(_st(_st(_st(logimage)._grid())._size())._y(),(function(y){
var sol;
return smalltalk.withContext(function($ctx2) {
sol=_st(strategy)._analyse_(_st(logimage)._rowLineAt_(y));
sol;
return self._apply_on_atRow_(sol,logimage,y);
}, function($ctx2) {$ctx2.fillBlock({y:y,sol:sol},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"apply:onRowOf:",{strategy:strategy,logimage:logimage},globals.Strategist)})},
args: ["strategy", "logimage"],
source: "apply: strategy onRowOf: logimage\x0a\x091 to: logimage grid size y do: [ :y | | sol |\x0a\x09\x09sol := strategy analyse: (logimage rowLineAt: y).\x0a\x09\x09self apply: sol on: logimage atRow: y ]",
messageSends: ["to:do:", "y", "size", "grid", "analyse:", "rowLineAt:", "apply:on:atRow:"],
referencedClasses: []
}),
globals.Strategist);

smalltalk.addMethod(
smalltalk.method({
selector: "solve:",
protocol: 'as yet unclassified',
fn: function (logimage){
var self=this;
function $StratSpaces(){return globals.StratSpaces||(typeof StratSpaces=="undefined"?nil:StratSpaces)}
function $StratDone(){return globals.StratDone||(typeof StratDone=="undefined"?nil:StratDone)}
function $StratRecover(){return globals.StratRecover||(typeof StratRecover=="undefined"?nil:StratRecover)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($StratSpaces())._new();
$ctx1.sendIdx["new"]=1;
$3=_st($StratDone())._new();
$ctx1.sendIdx["new"]=2;
$1=[$2,$3,_st($StratRecover())._new()];
_st($1)._do_((function(strategy){
return smalltalk.withContext(function($ctx2) {
return self._apply_on_(strategy,logimage);
}, function($ctx2) {$ctx2.fillBlock({strategy:strategy},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"solve:",{logimage:logimage},globals.Strategist)})},
args: ["logimage"],
source: "solve: logimage\x0a\x09{ StratSpaces new. StratDone new. StratRecover new } do: [ :strategy |\x0a\x09\x09self apply: strategy on: logimage ]",
messageSends: ["do:", "new", "apply:on:"],
referencedClasses: ["StratSpaces", "StratDone", "StratRecover"]
}),
globals.Strategist);



smalltalk.addClass('Strategy', globals.Object, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Cells())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line},globals.Strategy)})},
args: ["line"],
source: "analyse: line\x0a\x09^ Cells new",
messageSends: ["new"],
referencedClasses: ["Cells"]
}),
globals.Strategy);



smalltalk.addClass('StratCount', globals.Strategy, [], 'Logimage');
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
}, function($ctx1) {$ctx1.fill(self,"free:",{line:line},globals.StratCount)})},
args: ["line"],
source: "free: line\x0a\x09\x22I return the number of cells that are free to move a number\x22\x0a\x09^ (line cells size) - (self occupation: line hint)",
messageSends: ["-", "size", "cells", "occupation:", "hint"],
referencedClasses: []
}),
globals.StratCount);

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
}, function($ctx1) {$ctx1.fill(self,"occupation:",{hint:hint},globals.StratCount)})},
args: ["hint"],
source: "occupation: hint\x0a\x09\x22I return the number of cell all numbers fill, with one space between each\x22\x0a\x09^ (self sum: hint) + hint size - 1",
messageSends: ["-", "+", "sum:", "size"],
referencedClasses: []
}),
globals.StratCount);

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
}, function($ctx1) {$ctx1.fill(self,"sum:",{hint:hint},globals.StratCount)})},
args: ["hint"],
source: "sum: hint\x0a\x09\x22I return the sum of all number, without spaces\x22\x0a\x09^ hint numbers inject: 0 into: [ :s :n | s+n ]",
messageSends: ["inject:into:", "numbers", "+"],
referencedClasses: []
}),
globals.StratCount);



smalltalk.addClass('StratDone', globals.StratCount, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var sol;
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(self._free_(line)).__eq((0));
if(! smalltalk.assert($1)){
$2=($ctx1.supercall = true, globals.StratDone.superclass.fn.prototype._analyse_.apply(_st(self), [line]));
$ctx1.supercall = false;
return $2;
};
sol=_st($Cells())._new();
_st(_st(_st(line)._hint())._numbers())._do_((function(n){
return smalltalk.withContext(function($ctx2) {
$3=sol;
_st($3)._add_cell_(n,"box");
$4=_st($3)._add_("space");
return $4;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,2)})}));
$5=_st(sol)._size_(_st(_st(line)._cells())._size());
return $5;
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol},globals.StratDone)})},
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09(self free: line) = 0\x0a\x09\x09ifFalse: [ ^ super analyse: line ].\x0a\x09sol := Cells new.\x0a\x09line hint numbers do: [ :n |\x0a\x09\x09sol add: n cell: #box ;\x0a\x09\x09\x09add: #space ].\x0a\x09\x22remove last unknown if line full\x22\x0a\x09^ sol size: (line cells size)",
messageSends: ["ifFalse:", "=", "free:", "analyse:", "new", "do:", "numbers", "hint", "add:cell:", "add:", "size:", "size", "cells"],
referencedClasses: ["Cells"]
}),
globals.StratDone);



smalltalk.addClass('StratRecover', globals.StratCount, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
var free,sol;
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
free=self._free_(line);
sol=_st($Cells())._new();
_st(_st(_st(line)._hint())._numbers())._do_((function(n){
return smalltalk.withContext(function($ctx2) {
$1=sol;
_st($1)._add_cell_(_st(n)._min_(free),"unknown");
$ctx2.sendIdx["add:cell:"]=1;
_st($1)._add_cell_(_st(n).__minus(free),"box");
$2=_st($1)._add_("unknown");
return $2;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)})}));
$3=_st(sol)._size_(_st(_st(line)._cells())._size());
return $3;
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,free:free,sol:sol},globals.StratRecover)})},
args: ["line"],
source: "analyse: line\x0a\x09| free sol |\x0a\x09free := self free: line.\x0a\x09sol := Cells new.\x0a\x09line hint numbers do: [ :n |\x0a\x09\x09sol add: (n min: free) cell: #unknown ;\x0a\x09\x09\x09add: (n - free) cell: #box ;\x0a\x09\x09\x09add: #unknown ].\x0a\x09\x22remove last unknown if line full\x22\x0a\x09^ sol size: (line cells size)",
messageSends: ["free:", "new", "do:", "numbers", "hint", "add:cell:", "min:", "-", "add:", "size:", "size", "cells"],
referencedClasses: ["Cells"]
}),
globals.StratRecover);



smalltalk.addClass('StratSpaces', globals.StratCount, [], 'Logimage');
smalltalk.addMethod(
smalltalk.method({
selector: "analyse:",
protocol: 'as yet unclassified',
fn: function (line){
var self=this;
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=_st(_st(line)._hint())._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__eq((0));
if(smalltalk.assert($1)){
$3=_st($Cells())._spaces_(_st(_st(line)._cells())._size());
return $3;
};
$4=($ctx1.supercall = true, globals.StratSpaces.superclass.fn.prototype._analyse_.apply(_st(self), [line]));
$ctx1.supercall = false;
return $4;
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line},globals.StratSpaces)})},
args: ["line"],
source: "analyse: line\x0a\x09(line hint size = 0)\x0a\x09\x09ifTrue: [ ^ Cells spaces: line cells size ].\x0a\x09^ super analyse: line",
messageSends: ["ifTrue:", "=", "size", "hint", "spaces:", "cells", "analyse:"],
referencedClasses: ["Cells"]
}),
globals.StratSpaces);


});
