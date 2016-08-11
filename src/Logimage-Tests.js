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
var c;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$9,$10,$8,$7,$6,$11,$13,$15,$16,$14,$12,$18,$20,$21,$19,$17,$23,$25,$24,$22;
$1=$recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=1;
//>>excludeEnd("ctx");
$recv($1)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=1;
//>>excludeEnd("ctx");
$recv($1)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=2;
//>>excludeEnd("ctx");
$recv($1)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=2;
//>>excludeEnd("ctx");
$recv($1)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=1;
//>>excludeEnd("ctx");
$recv($1)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=3;
//>>excludeEnd("ctx");
c=$2;
$3=$recv($recv(c)._firstNumbers()).__eq([(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$5=$recv(c)._lastNumbers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lastNumbers"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$9=$recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($9)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=4;
//>>excludeEnd("ctx");
$recv($9)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=4;
//>>excludeEnd("ctx");
$recv($9)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=5;
//>>excludeEnd("ctx");
$recv($9)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=5;
//>>excludeEnd("ctx");
$recv($9)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=6;
//>>excludeEnd("ctx");
$recv($9)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=6;
//>>excludeEnd("ctx");
$10=$recv($9)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=7;
//>>excludeEnd("ctx");
$8=$10;
$7=$recv($8)._lastNumbers();
$6=$recv($7).__eq([(2),(1)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$11=$recv($recv(c)._firstBox()).__eq($globals.HashedCollection._newFromPairs_(["pos",(2),"size",(2)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$13=$recv(c)._trimFirst();
$15=$recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv($15)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=7;
//>>excludeEnd("ctx");
$recv($15)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=8;
//>>excludeEnd("ctx");
$recv($15)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=8;
//>>excludeEnd("ctx");
$recv($15)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=2;
//>>excludeEnd("ctx");
$recv($15)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=9;
//>>excludeEnd("ctx");
$16=$recv($15)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=9;
//>>excludeEnd("ctx");
$14=$16;
$12=$recv($13).__eq($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$18=$recv(c)._trimLast();
$20=$recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($20)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=10;
//>>excludeEnd("ctx");
$recv($20)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=10;
//>>excludeEnd("ctx");
$recv($20)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=11;
//>>excludeEnd("ctx");
$recv($20)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=11;
//>>excludeEnd("ctx");
$recv($20)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=3;
//>>excludeEnd("ctx");
$21=$recv($20)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=12;
//>>excludeEnd("ctx");
$19=$21;
$17=$recv($18).__eq($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$23=$recv(c)._trim();
$25=$recv($globals.Cells)._new();
$recv($25)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=13;
//>>excludeEnd("ctx");
$recv($25)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=14;
//>>excludeEnd("ctx");
$recv($25)._s();
$recv($25)._u();
$24=$recv($25)._b();
$22=$recv($23).__eq($24);
self._assert_($22);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCellsAccesses",{c:c},$globals.LogimageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCellsAccesses\x0a\x09| c |\x0a\x09c := Cells new s; b; b; s; u; b; s.\x0a\x09self assert: c firstNumbers = { 2 }.\x0a\x09self assert: c lastNumbers = { }.\x0a\x09self assert: (Cells new s; b; b; s; s; b; s) lastNumbers = { 2. 1 }.\x0a\x09self assert: c firstBox = #{ #pos -> 2. #size -> 2 }.\x0a\x09self assert: c trimFirst = (Cells new b; b; s; u; b; s).\x0a\x09self assert: c trimLast = (Cells new s; b; b; s; u; b).\x0a\x09self assert: c trim = (Cells new b; b; s; u; b).",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
messageSends: ["s", "new", "b", "u", "assert:", "=", "firstNumbers", "lastNumbers", "firstBox", "trimFirst", "trimLast", "trim"]
}),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testLineAccesses",
protocol: 'tests',
fn: function (){
var self=this;
var l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3,$7,$9,$11,$10,$8,$6;
$2=$recv($globals.Hint)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._numbers_([(2),(1)]);
$4=$recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($4)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=1;
//>>excludeEnd("ctx");
$recv($4)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=1;
//>>excludeEnd("ctx");
$recv($4)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=2;
//>>excludeEnd("ctx");
$recv($4)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=2;
//>>excludeEnd("ctx");
$recv($4)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=1;
//>>excludeEnd("ctx");
$recv($4)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=3;
//>>excludeEnd("ctx");
$5=$recv($4)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=3;
//>>excludeEnd("ctx");
$3=$5;
l=$recv($globals.Line)._new_cells_($1,$3);
$7=$recv(l)._reversed();
$9=$recv($globals.Line)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv($9)._hint_($recv($globals.Hint)._new_([(1),(2)]));
$11=$recv($globals.Cells)._new();
$recv($11)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=4;
//>>excludeEnd("ctx");
$recv($11)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=4;
//>>excludeEnd("ctx");
$recv($11)._u();
$recv($11)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=5;
//>>excludeEnd("ctx");
$recv($11)._b();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["b"]=5;
//>>excludeEnd("ctx");
$recv($11)._b();
$10=$recv($11)._s();
$8=$recv($9)._cells_($10);
$6=$recv($7).__eq($8);
self._assert_($6);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLineAccesses",{l:l},$globals.LogimageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLineAccesses\x0a\x09| l |\x0a\x09l := Line\x0a\x09\x09new:   ( Hint new numbers: { 2 . 1 } )\x0a\x09\x09cells: ( Cells new s; b; b; s; u; b; s).\x0a\x09\x22self assert: l isDone not\x22\x0a\x09self assert: l reversed =\x0a\x09\x09(Line new hint: (Hint new: { 1. 2}); cells: (Cells new s; b; u; s; b; b; s))",
referencedClasses: ["Line", "Hint", "Cells"],
//>>excludeEnd("ide");
messageSends: ["new:cells:", "numbers:", "new", "s", "b", "u", "assert:", "=", "reversed", "hint:", "new:", "cells:"]
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

$core.addMethod(
$core.method({
selector: "testStratNotReached",
protocol: 'tests',
fn: function (){
var self=this;
var l,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$6,$4,$7,$9,$11,$10,$8;
$1=$recv($globals.Line)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.Hint)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._numbers_([(2)]);
$recv($1)._hint_($2);
$5=$recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv($5)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=1;
//>>excludeEnd("ctx");
$recv($5)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=2;
//>>excludeEnd("ctx");
$recv($5)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=3;
//>>excludeEnd("ctx");
$recv($5)._b();
$recv($5)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=4;
//>>excludeEnd("ctx");
$recv($5)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=5;
//>>excludeEnd("ctx");
$6=$recv($5)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=6;
//>>excludeEnd("ctx");
$4=$6;
l=$recv($1)._cells_($4);
$7=$recv($globals.StratNotReached)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
sol=$recv($7)._analyse_(l);
$9=sol;
$11=$recv($globals.Cells)._new();
$recv($11)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=1;
//>>excludeEnd("ctx");
$recv($11)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=2;
//>>excludeEnd("ctx");
$recv($11)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=7;
//>>excludeEnd("ctx");
$recv($11)._u();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["u"]=8;
//>>excludeEnd("ctx");
$recv($11)._u();
$recv($11)._s();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["s"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._s();
$8=$recv($9).__eq($10);
self._assert_($8);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratNotReached",{l:l,sol:sol},$globals.LogimageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratNotReached\x0a\x09| l sol |\x0a\x09l := Line new\x0a\x09\x09hint: (Hint new numbers: { 2 });\x0a\x09\x09cells: (Cells new u; u; u; b; u; u; u).\x0a\x09sol := StratNotReached new analyse: l.\x0a\x09self assert: sol = (Cells new s; s; u; u; u; s; s)",
referencedClasses: ["Line", "Hint", "Cells", "StratNotReached"],
//>>excludeEnd("ide");
messageSends: ["hint:", "new", "numbers:", "cells:", "u", "b", "analyse:", "assert:", "=", "s"]
}),
$globals.LogimageTest);


});
