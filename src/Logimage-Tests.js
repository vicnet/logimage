define("amber-logimage/Logimage-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Logimage-Tests');
smalltalk.packages["Logimage-Tests"].transport = {"type":"amd","amdNamespace":"amber-logimage"};

smalltalk.addClass('LogimageTest', globals.TestCase, ['logimage'], 'Logimage-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $Logimage(){return globals.Logimage||(typeof Logimage=="undefined"?nil:Logimage)}
return smalltalk.withContext(function($ctx1) { 
self["@logimage"]=_st($Logimage())._simple();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.LogimageTest)})},
args: [],
source: "setUp\x0a\x09logimage := Logimage simple",
messageSends: ["simple"],
referencedClasses: ["Logimage"]
}),
globals.LogimageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCellsAccesses",
protocol: 'tests',
fn: function (){
var self=this;
var u,s,b,c;
function $Cell(){return globals.Cell||(typeof Cell=="undefined"?nil:Cell)}
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
var $1;
u=_st($Cell())._unknown();
s=_st($Cell())._space();
b=_st($Cell())._box();
c=_st($Cells())._new_([s,b,b,s,u,b,s]);
$1=_st(_st(c)._firstNumbers()).__eq([(2)]);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(c)._lastNumbers()).__eq([(1)]));
return self}, function($ctx1) {$ctx1.fill(self,"testCellsAccesses",{u:u,s:s,b:b,c:c},globals.LogimageTest)})},
args: [],
source: "testCellsAccesses\x0a\x09| u s b c |\x0a\x09u := Cell unknown.\x0a\x09s := Cell space.\x0a\x09b := Cell box.\x0a\x09c := Cells new: { s. b. b. s. u. b. s }.\x0a\x09self assert: c firstNumbers = { 2 }.\x0a\x09self assert: c lastNumbers = { 1 }",
messageSends: ["unknown", "space", "box", "new:", "assert:", "=", "firstNumbers", "lastNumbers"],
referencedClasses: ["Cell", "Cells"]
}),
globals.LogimageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLineAccesses",
protocol: 'tests',
fn: function (){
var self=this;
var u,s,b,l;
function $Cell(){return globals.Cell||(typeof Cell=="undefined"?nil:Cell)}
function $Line(){return globals.Line||(typeof Line=="undefined"?nil:Line)}
function $Hint(){return globals.Hint||(typeof Hint=="undefined"?nil:Hint)}
function $Cells(){return globals.Cells||(typeof Cells=="undefined"?nil:Cells)}
return smalltalk.withContext(function($ctx1) { 
u=_st($Cell())._unknown();
s=_st($Cell())._space();
b=_st($Cell())._box();
l=_st($Line())._new_cells_(_st(_st($Hint())._new())._numbers_([(2),(1)]),_st($Cells())._new_([s,b,b,s,u,b,s]));
return self}, function($ctx1) {$ctx1.fill(self,"testLineAccesses",{u:u,s:s,b:b,l:l},globals.LogimageTest)})},
args: [],
source: "testLineAccesses\x0a\x09| u s b l |\x0a\x09u := Cell unknown.\x0a\x09s := Cell space.\x0a\x09b := Cell box.\x0a\x09l := Line\x0a\x09\x09new:   ( Hint new numbers: { 2 . 1 } )\x0a\x09\x09cells: ( Cells new: { s. b. b. s. u. b. s } ).\x0a\x09\x22self assert: l isDone not\x22",
messageSends: ["unknown", "space", "box", "new:cells:", "numbers:", "new", "new:"],
referencedClasses: ["Cell", "Line", "Hint", "Cells"]
}),
globals.LogimageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLogimageAccesses",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@logimage"])._colCellsAt_((1)))._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testLogimageAccesses",{},globals.LogimageTest)})},
args: [],
source: "testLogimageAccesses\x0a\x09self assert: (logimage colCellsAt: 1) notNil",
messageSends: ["assert:", "notNil", "colCellsAt:"],
referencedClasses: []
}),
globals.LogimageTest);


});
