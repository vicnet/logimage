define("amber-logimage/Logimage-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Logimage-Tests');
$core.packages["Logimage-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Logimage-Tests"].transport = {"type":"amd","amdNamespace":"amber-logimage"};

$core.addClass('LogimageTest', $globals.TestCase, ['logimage'], 'Logimage-Tests');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@logimage"]=$recv($globals.Logimage)._simple();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.LogimageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09logimage := Logimage simple",
referencedClasses: ["Logimage"],
//>>excludeEnd("ide");
messageSends: ["simple"]
}),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testCellsAccesses",
protocol: 'tests',
fn: function (){
var self=this;
var u,s,b,c;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
u=$recv($globals.Cell)._unknown();
s=$recv($globals.Cell)._space();
b=$recv($globals.Cell)._box();
c=$recv($globals.Cells)._new_([s,b,b,s,u,b,s]);
$1=$recv($recv(c)._firstNumbers()).__eq([(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(c)._lastNumbers()).__eq([(1)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCellsAccesses",{u:u,s:s,b:b,c:c},$globals.LogimageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCellsAccesses\x0a\x09| u s b c |\x0a\x09u := Cell unknown.\x0a\x09s := Cell space.\x0a\x09b := Cell box.\x0a\x09c := Cells new: { s. b. b. s. u. b. s }.\x0a\x09self assert: c firstNumbers = { 2 }.\x0a\x09self assert: c lastNumbers = { 1 }",
referencedClasses: ["Cell", "Cells"],
//>>excludeEnd("ide");
messageSends: ["unknown", "space", "box", "new:", "assert:", "=", "firstNumbers", "lastNumbers"]
}),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testLineAccesses",
protocol: 'tests',
fn: function (){
var self=this;
var u,s,b,l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
u=$recv($globals.Cell)._unknown();
s=$recv($globals.Cell)._space();
b=$recv($globals.Cell)._box();
l=$recv($globals.Line)._new_cells_($recv($recv($globals.Hint)._new())._numbers_([(2),(1)]),$recv($globals.Cells)._new_([s,b,b,s,u,b,s]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLineAccesses",{u:u,s:s,b:b,l:l},$globals.LogimageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLineAccesses\x0a\x09| u s b l |\x0a\x09u := Cell unknown.\x0a\x09s := Cell space.\x0a\x09b := Cell box.\x0a\x09l := Line\x0a\x09\x09new:   ( Hint new numbers: { 2 . 1 } )\x0a\x09\x09cells: ( Cells new: { s. b. b. s. u. b. s } ).\x0a\x09\x22self assert: l isDone not\x22",
referencedClasses: ["Cell", "Line", "Hint", "Cells"],
//>>excludeEnd("ide");
messageSends: ["unknown", "space", "box", "new:cells:", "numbers:", "new", "new:"]
}),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testLogimageAccesses",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv($recv(self["@logimage"])._colCellsAt_((1)))._notNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLogimageAccesses",{},$globals.LogimageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLogimageAccesses\x0a\x09self assert: (logimage colCellsAt: 1) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "notNil", "colCellsAt:"]
}),
$globals.LogimageTest);


});
