define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Logimage-Tests");
$pkg.transport = {"type":"amd","amdNamespace":"amber-logimage"};

$core.addClass("LogimageCellsTest", $globals.TestCase, "Logimage-Tests");
$core.addMethod(
$core.method({
selector: "testCellsAccesses",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCellsAccesses\x0a\x09| c |\x0a\x09\x22test firstDones\x22\x0a\x09self assert: (Cells new s; b; b; s; u) firstDones = (Cells new s; b; b; s).\x0a\x09self assert: (Cells new s; b; s; b; u) firstDones = (Cells new s; b; s).\x0a\x09self assert: (Cells new s; b; u) firstDones = (Cells new s).\x0a\x09self assert: (Cells new s; b; b) firstDones = (Cells new s; b; b).\x0a\x09\x22test last dones\x22\x0a\x09self assert: (Cells new s; b; u; b; s) lastDones = (Cells new s; pos: 5).\x0a\x09self assert: (Cells new s; u; s; b; b; s) lastDones = (Cells new s; b; b; s; pos: 3).\x0a\x09\x22test copyFrom: with number\x22\x0a\x09self assert: ((Cells new s; b; b) copyFrom: 1) = (Cells new s; b; b).\x0a\x09self assert: ((Cells new s; b; b) copyFrom: 2) = (Cells new pos: 2; b; b).\x0a\x09\x22test trim functions\x22\x0a\x09c := Cells new s; s; b; s; u; b; s.\x0a\x09self assert: c trimFirst = (Cells new b; s; u; b; s; pos: 3).\x0a\x09self assert: c trimLast = (Cells new s; s; b; s; u; b).\x0a\x09self assert: c trim = (Cells new b; s; u; b; pos: 3).\x0a\x09self assert: c trim trimFirst = (Cells new b; s; u; b; pos: 3).\x0a\x09self assert: c trim trimLast = (Cells new b; s; u; b; pos: 3).\x0a\x09self assert: c trim trim = (Cells new b; s; u; b; pos: 3).\x0a\x09\x22test firstNotSpace\x22\x0a\x09self assert: (Cells new u; b; b; u) firstNotSpace = (Cells new u; b; b; u).\x0a\x09self assert: (Cells new u; b; b; s) firstNotSpace = (Cells new u; b; b).\x0a\x09self assert: (Cells new u; s; b; u) firstNotSpace = (Cells new u).\x0a\x09self assert: (Cells new s; s; u; b; s; u) firstNotSpace = (Cells new u; b; pos: 3).\x0a\x09self assert: (Cells new: '  X-') firstNotSpace equals: (Cells new: '  X').\x0a\x09\x22\x0a\x09c := Cells new s; b; b; s; u; b; s.\x0a\x09self assert: c lastNumbers = { }.\x0a\x09self assert: (Cells new s; b; b; s; s; b; s) lastNumbers = { 2. 1 }.\x0a\x09self assert: c firstBox = #{ #pos -> 2. #size -> 2 }.\x0a\x09self assert: c numbers = { 2. 1 }.\x0a\x09self assert: ((Cells new u;s;u;b) firstFreeSpace) = #{ #pos -> 1. #size -> 1 }.\x0a\x09self assert: ((Cells new b;s;u;u) firstFreeSpace) = #{ #pos -> 3. #size -> 2 }.\x0a\x09self assert: ((Cells new s;u;s;u;b) firstNotSpace) = #{ #pos -> 2. #size -> 1 }.\x0a\x09self assert: ((Cells new s;b;u;s;u;u) firstNotSpace) = #{ #pos -> 2. #size -> 2 }.\x22\x0a\x09self assert: (Cells new: '  X') firstBox equals: #{ #pos -> 3. #size -> 1 }.\x0a\x09\x0a\x09self assert: (Cells new: '  X') firstSpace equals: 0.\x0a\x09self assert: (Cells new: ' - X') firstSpace equals: 2.",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "=", "firstDones", "s", "new", "b", "u", "lastDones", "pos:", "copyFrom:", "trimFirst", "trimLast", "trim", "firstNotSpace", "assert:equals:", "new:", "firstBox", "firstSpace"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var c;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45;
$1=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=2
//>>excludeEnd("ctx");
][0];
[$recv($1)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=2
//>>excludeEnd("ctx");
][0];
$2=[$recv([$recv($1)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=1
//>>excludeEnd("ctx");
][0])._firstDones()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstDones"]=1
//>>excludeEnd("ctx");
][0];
$3=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
[$recv($3)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=3
//>>excludeEnd("ctx");
][0];
[$recv($3)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=3
//>>excludeEnd("ctx");
][0];
[$recv($3)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=4
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($2).__eq([$recv($3)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
$4=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
[$recv($4)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=5
//>>excludeEnd("ctx");
][0];
[$recv($4)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=5
//>>excludeEnd("ctx");
][0];
[$recv($4)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=6
//>>excludeEnd("ctx");
][0];
[$recv($4)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=6
//>>excludeEnd("ctx");
][0];
$5=[$recv([$recv($4)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=2
//>>excludeEnd("ctx");
][0])._firstDones()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstDones"]=2
//>>excludeEnd("ctx");
][0];
$6=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0];
[$recv($6)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=7
//>>excludeEnd("ctx");
][0];
[$recv($6)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=7
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($5).__eq([$recv($6)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=8
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=2
//>>excludeEnd("ctx");
][0];
$7=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=5
//>>excludeEnd("ctx");
][0];
[$recv($7)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=9
//>>excludeEnd("ctx");
][0];
[$recv($7)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=8
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv([$recv([$recv($7)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=3
//>>excludeEnd("ctx");
][0])._firstDones()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstDones"]=3
//>>excludeEnd("ctx");
][0]).__eq([$recv([$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=6
//>>excludeEnd("ctx");
][0])._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=10
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=3
//>>excludeEnd("ctx");
][0];
$8=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=7
//>>excludeEnd("ctx");
][0];
[$recv($8)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=11
//>>excludeEnd("ctx");
][0];
[$recv($8)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=9
//>>excludeEnd("ctx");
][0];
$9=$recv([$recv($8)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=10
//>>excludeEnd("ctx");
][0])._firstDones();
$10=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=8
//>>excludeEnd("ctx");
][0];
[$recv($10)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=12
//>>excludeEnd("ctx");
][0];
[$recv($10)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=11
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($9).__eq([$recv($10)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=12
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=4
//>>excludeEnd("ctx");
][0];
$11=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=9
//>>excludeEnd("ctx");
][0];
[$recv($11)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=13
//>>excludeEnd("ctx");
][0];
[$recv($11)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=13
//>>excludeEnd("ctx");
][0];
[$recv($11)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=4
//>>excludeEnd("ctx");
][0];
[$recv($11)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=14
//>>excludeEnd("ctx");
][0];
$12=[$recv([$recv($11)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=14
//>>excludeEnd("ctx");
][0])._lastDones()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lastDones"]=1
//>>excludeEnd("ctx");
][0];
$13=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=10
//>>excludeEnd("ctx");
][0];
[$recv($13)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=15
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($12).__eq([$recv($13)._pos_((5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=5
//>>excludeEnd("ctx");
][0];
$14=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=11
//>>excludeEnd("ctx");
][0];
[$recv($14)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=16
//>>excludeEnd("ctx");
][0];
[$recv($14)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=5
//>>excludeEnd("ctx");
][0];
[$recv($14)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=17
//>>excludeEnd("ctx");
][0];
[$recv($14)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=15
//>>excludeEnd("ctx");
][0];
[$recv($14)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=16
//>>excludeEnd("ctx");
][0];
$15=$recv([$recv($14)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=18
//>>excludeEnd("ctx");
][0])._lastDones();
$16=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=12
//>>excludeEnd("ctx");
][0];
[$recv($16)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=19
//>>excludeEnd("ctx");
][0];
[$recv($16)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=17
//>>excludeEnd("ctx");
][0];
[$recv($16)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=18
//>>excludeEnd("ctx");
][0];
[$recv($16)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=20
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($15).__eq([$recv($16)._pos_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=6
//>>excludeEnd("ctx");
][0];
$17=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=13
//>>excludeEnd("ctx");
][0];
[$recv($17)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=21
//>>excludeEnd("ctx");
][0];
[$recv($17)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=19
//>>excludeEnd("ctx");
][0];
$18=[$recv([$recv($17)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=20
//>>excludeEnd("ctx");
][0])._copyFrom_((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["copyFrom:"]=1
//>>excludeEnd("ctx");
][0];
$19=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=14
//>>excludeEnd("ctx");
][0];
[$recv($19)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=22
//>>excludeEnd("ctx");
][0];
[$recv($19)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=21
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($18).__eq([$recv($19)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=22
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=7
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=7
//>>excludeEnd("ctx");
][0];
$20=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=15
//>>excludeEnd("ctx");
][0];
[$recv($20)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=23
//>>excludeEnd("ctx");
][0];
[$recv($20)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=23
//>>excludeEnd("ctx");
][0];
$21=$recv([$recv($20)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=24
//>>excludeEnd("ctx");
][0])._copyFrom_((2));
$22=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=16
//>>excludeEnd("ctx");
][0];
[$recv($22)._pos_((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($22)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=25
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($21).__eq([$recv($22)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=26
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=8
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=8
//>>excludeEnd("ctx");
][0];
$23=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=17
//>>excludeEnd("ctx");
][0];
[$recv($23)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=24
//>>excludeEnd("ctx");
][0];
[$recv($23)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=25
//>>excludeEnd("ctx");
][0];
[$recv($23)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=27
//>>excludeEnd("ctx");
][0];
[$recv($23)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=26
//>>excludeEnd("ctx");
][0];
[$recv($23)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=6
//>>excludeEnd("ctx");
][0];
[$recv($23)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=28
//>>excludeEnd("ctx");
][0];
c=[$recv($23)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=27
//>>excludeEnd("ctx");
][0];
$24=[$recv(c)._trimFirst()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["trimFirst"]=1
//>>excludeEnd("ctx");
][0];
$25=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=18
//>>excludeEnd("ctx");
][0];
[$recv($25)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=29
//>>excludeEnd("ctx");
][0];
[$recv($25)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=28
//>>excludeEnd("ctx");
][0];
[$recv($25)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=7
//>>excludeEnd("ctx");
][0];
[$recv($25)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=30
//>>excludeEnd("ctx");
][0];
[$recv($25)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=29
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($24).__eq([$recv($25)._pos_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=9
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=9
//>>excludeEnd("ctx");
][0];
$26=[$recv(c)._trimLast()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["trimLast"]=1
//>>excludeEnd("ctx");
][0];
$27=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=19
//>>excludeEnd("ctx");
][0];
[$recv($27)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=30
//>>excludeEnd("ctx");
][0];
[$recv($27)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=31
//>>excludeEnd("ctx");
][0];
[$recv($27)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=31
//>>excludeEnd("ctx");
][0];
[$recv($27)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=32
//>>excludeEnd("ctx");
][0];
[$recv($27)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=8
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($26).__eq([$recv($27)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=32
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=10
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=10
//>>excludeEnd("ctx");
][0];
$28=[$recv(c)._trim()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["trim"]=1
//>>excludeEnd("ctx");
][0];
$29=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=20
//>>excludeEnd("ctx");
][0];
[$recv($29)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=33
//>>excludeEnd("ctx");
][0];
[$recv($29)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=33
//>>excludeEnd("ctx");
][0];
[$recv($29)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=9
//>>excludeEnd("ctx");
][0];
[$recv($29)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=34
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($28).__eq([$recv($29)._pos_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=11
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=11
//>>excludeEnd("ctx");
][0];
$30=$recv([$recv(c)._trim()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["trim"]=2
//>>excludeEnd("ctx");
][0])._trimFirst();
$31=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=21
//>>excludeEnd("ctx");
][0];
[$recv($31)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=35
//>>excludeEnd("ctx");
][0];
[$recv($31)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=34
//>>excludeEnd("ctx");
][0];
[$recv($31)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=10
//>>excludeEnd("ctx");
][0];
[$recv($31)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=36
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($30).__eq([$recv($31)._pos_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=12
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=12
//>>excludeEnd("ctx");
][0];
$32=$recv([$recv(c)._trim()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["trim"]=3
//>>excludeEnd("ctx");
][0])._trimLast();
$33=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=22
//>>excludeEnd("ctx");
][0];
[$recv($33)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=37
//>>excludeEnd("ctx");
][0];
[$recv($33)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=35
//>>excludeEnd("ctx");
][0];
[$recv($33)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=11
//>>excludeEnd("ctx");
][0];
[$recv($33)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=38
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($32).__eq([$recv($33)._pos_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=7
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=13
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=13
//>>excludeEnd("ctx");
][0];
$34=[$recv($recv(c)._trim())._trim()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["trim"]=4
//>>excludeEnd("ctx");
][0];
$35=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=23
//>>excludeEnd("ctx");
][0];
[$recv($35)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=39
//>>excludeEnd("ctx");
][0];
[$recv($35)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=36
//>>excludeEnd("ctx");
][0];
[$recv($35)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=12
//>>excludeEnd("ctx");
][0];
[$recv($35)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=40
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($34).__eq([$recv($35)._pos_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pos:"]=8
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=14
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=14
//>>excludeEnd("ctx");
][0];
$36=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=24
//>>excludeEnd("ctx");
][0];
[$recv($36)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=13
//>>excludeEnd("ctx");
][0];
[$recv($36)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=41
//>>excludeEnd("ctx");
][0];
[$recv($36)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=42
//>>excludeEnd("ctx");
][0];
$37=[$recv([$recv($36)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=14
//>>excludeEnd("ctx");
][0])._firstNotSpace()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstNotSpace"]=1
//>>excludeEnd("ctx");
][0];
$38=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=25
//>>excludeEnd("ctx");
][0];
[$recv($38)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=15
//>>excludeEnd("ctx");
][0];
[$recv($38)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=43
//>>excludeEnd("ctx");
][0];
[$recv($38)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=44
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($37).__eq([$recv($38)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=16
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=15
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=15
//>>excludeEnd("ctx");
][0];
$39=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=26
//>>excludeEnd("ctx");
][0];
[$recv($39)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=17
//>>excludeEnd("ctx");
][0];
[$recv($39)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=45
//>>excludeEnd("ctx");
][0];
[$recv($39)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=46
//>>excludeEnd("ctx");
][0];
$40=[$recv([$recv($39)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=37
//>>excludeEnd("ctx");
][0])._firstNotSpace()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstNotSpace"]=2
//>>excludeEnd("ctx");
][0];
$41=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=27
//>>excludeEnd("ctx");
][0];
[$recv($41)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=18
//>>excludeEnd("ctx");
][0];
[$recv($41)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=47
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($40).__eq([$recv($41)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=48
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=16
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=16
//>>excludeEnd("ctx");
][0];
$42=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=28
//>>excludeEnd("ctx");
][0];
[$recv($42)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=19
//>>excludeEnd("ctx");
][0];
[$recv($42)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=38
//>>excludeEnd("ctx");
][0];
[$recv($42)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=49
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv([$recv([$recv($42)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=20
//>>excludeEnd("ctx");
][0])._firstNotSpace()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstNotSpace"]=3
//>>excludeEnd("ctx");
][0]).__eq([$recv([$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=29
//>>excludeEnd("ctx");
][0])._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=21
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=17
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=17
//>>excludeEnd("ctx");
][0];
$43=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=30
//>>excludeEnd("ctx");
][0];
[$recv($43)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=39
//>>excludeEnd("ctx");
][0];
[$recv($43)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=40
//>>excludeEnd("ctx");
][0];
[$recv($43)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=22
//>>excludeEnd("ctx");
][0];
[$recv($43)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=50
//>>excludeEnd("ctx");
][0];
$recv($43)._s();
$44=[$recv([$recv($43)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=23
//>>excludeEnd("ctx");
][0])._firstNotSpace()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstNotSpace"]=4
//>>excludeEnd("ctx");
][0];
$45=$recv($globals.Cells)._new();
$recv($45)._u();
$recv($45)._b();
$self._assert_($recv($44).__eq($recv($45)._pos_((3))));
[$self._assert_equals_($recv([$recv($globals.Cells)._new_("  X-")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0])._firstNotSpace(),[$recv($globals.Cells)._new_("  X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv([$recv($globals.Cells)._new_("  X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=3
//>>excludeEnd("ctx");
][0])._firstBox(),$globals.HashedCollection._newFromPairs_(["pos",(3),"size",(1)]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.Cells)._new_("  X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=4
//>>excludeEnd("ctx");
][0])._firstSpace()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["firstSpace"]=1
//>>excludeEnd("ctx");
][0],(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=3
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($recv($globals.Cells)._new_(" - X"))._firstSpace(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCellsAccesses",{c:c})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageCellsTest);



$core.addClass("LogimageTest", $globals.TestCase, "Logimage-Tests");
$core.setSlots($globals.LogimageTest, ["logimage"]);
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09logimage := Logimage simple",
referencedClasses: ["Logimage"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["simple"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.logimage=$recv($globals.Logimage)._simple();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testCellAccesses",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCellAccesses\x0a\x09self assert: (Cell at: #box) equals: (Cell at: #box).\x0a\x09self assert: (Cell at: #box) equals: (Cell at: #boxnew).\x0a\x09self assert: (Cell at: #space) equals: (Cell at: #space).\x0a\x09self assert: (Cell at: #space) equals: (Cell at: #spacenew).\x0a\x09self assert: (Cell at: #unknown) equals: (Cell at: #unknown).\x0a\x09self assert: (Cell at: #box) = (Cell at: #box).\x0a\x09self assert: (Cell at: #box) = (Cell at: #boxnew).\x0a\x09self assert: (Cell at: #box) == (Cell at: #box).\x0a\x09self assert: (Cell at: #box) ~~ (Cell at: #boxnew).\x0a\x09self assert: (Cell at: #box) ~= (Cell at: #space).",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "at:", "assert:", "=", "==", "~~", "~="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=3
//>>excludeEnd("ctx");
][0],[$recv($globals.Cell)._at_("boxnew")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.Cell)._at_("space")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=5
//>>excludeEnd("ctx");
][0],[$recv($globals.Cell)._at_("space")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=3
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.Cell)._at_("space")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=7
//>>excludeEnd("ctx");
][0],[$recv($globals.Cell)._at_("spacenew")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=8
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=4
//>>excludeEnd("ctx");
][0];
$self._assert_equals_([$recv($globals.Cell)._at_("unknown")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=9
//>>excludeEnd("ctx");
][0],[$recv($globals.Cell)._at_("unknown")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=10
//>>excludeEnd("ctx");
][0]);
[$self._assert_([$recv([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=11
//>>excludeEnd("ctx");
][0]).__eq([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=12
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_($recv([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=13
//>>excludeEnd("ctx");
][0]).__eq([$recv($globals.Cell)._at_("boxnew")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=14
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_($recv([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=15
//>>excludeEnd("ctx");
][0]).__eq_eq([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=16
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=3
//>>excludeEnd("ctx");
][0];
[$self._assert_($recv([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=17
//>>excludeEnd("ctx");
][0]).__tild_tild([$recv($globals.Cell)._at_("boxnew")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=18
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=4
//>>excludeEnd("ctx");
][0];
$self._assert_($recv([$recv($globals.Cell)._at_("box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=19
//>>excludeEnd("ctx");
][0]).__tild_eq($recv($globals.Cell)._at_("space")));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCellAccesses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testLineAccesses",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLineAccesses\x0a\x09| l |\x0a\x09l := Line\x0a\x09\x09hint:  ( Hint new: { 2 . 1 } )\x0a\x09\x09cells: ( Cells new s; b; b; s; u; b; s).\x0a\x09self assert: l reversed =\x0a\x09\x09(Line new hint: (Hint new: { 1. 2}); cells: (Cells new s; b; u; s; b; b; s)).\x0a\x09self assert: (Line hint: (Hint new: {2. 1}) cells: (Cells new s; b; b; u; s; b; s)) reducedLast =\x0a\x09\x09(Line hint: (Hint new: {2}) cells: (Cells new s; b; b; u)).\x0a\x09self assert: (Line hint: (Hint new: {2. 1}) cells: (Cells new s; b; b; s; u; b; s)) reducedFirst =\x0a\x09\x09(Line hint: (Hint new: {1}) cells: (Cells new u; b; s; pos: 5)).",
referencedClasses: ["Line", "Hint", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:cells:", "new:", "s", "new", "b", "u", "assert:", "=", "reversed", "hint:", "cells:", "reducedLast", "reducedFirst", "pos:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20;
$1=$globals.Line;
$2=[$recv($globals.Hint)._new_([(2),(1)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0];
$3=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[$recv($3)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=1
//>>excludeEnd("ctx");
][0];
[$recv($3)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=1
//>>excludeEnd("ctx");
][0];
[$recv($3)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=2
//>>excludeEnd("ctx");
][0];
[$recv($3)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=2
//>>excludeEnd("ctx");
][0];
[$recv($3)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=1
//>>excludeEnd("ctx");
][0];
[$recv($3)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=3
//>>excludeEnd("ctx");
][0];
l=[$recv($1)._hint_cells_($2,[$recv($3)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint:cells:"]=1
//>>excludeEnd("ctx");
][0];
$4=$recv(l)._reversed();
$5=[$recv($globals.Line)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($5)._hint_([$recv($globals.Hint)._new_([(1),(2)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=2
//>>excludeEnd("ctx");
][0]);
$6=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
[$recv($6)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=4
//>>excludeEnd("ctx");
][0];
[$recv($6)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=4
//>>excludeEnd("ctx");
][0];
[$recv($6)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=2
//>>excludeEnd("ctx");
][0];
[$recv($6)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=5
//>>excludeEnd("ctx");
][0];
[$recv($6)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=5
//>>excludeEnd("ctx");
][0];
[$recv($6)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=6
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($4).__eq($recv($5)._cells_([$recv($6)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=6
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
$7=$globals.Line;
$8=[$recv($globals.Hint)._new_([(2),(1)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=3
//>>excludeEnd("ctx");
][0];
$9=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0];
[$recv($9)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=7
//>>excludeEnd("ctx");
][0];
[$recv($9)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=7
//>>excludeEnd("ctx");
][0];
[$recv($9)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=8
//>>excludeEnd("ctx");
][0];
[$recv($9)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=3
//>>excludeEnd("ctx");
][0];
[$recv($9)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=8
//>>excludeEnd("ctx");
][0];
[$recv($9)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=9
//>>excludeEnd("ctx");
][0];
$10=$recv([$recv($7)._hint_cells_($8,[$recv($9)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=9
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint:cells:"]=2
//>>excludeEnd("ctx");
][0])._reducedLast();
$11=$globals.Line;
$12=[$recv($globals.Hint)._new_([(2)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=4
//>>excludeEnd("ctx");
][0];
$13=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=5
//>>excludeEnd("ctx");
][0];
[$recv($13)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=10
//>>excludeEnd("ctx");
][0];
[$recv($13)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=10
//>>excludeEnd("ctx");
][0];
[$recv($13)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=11
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv($10).__eq([$recv($11)._hint_cells_($12,[$recv($13)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint:cells:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=2
//>>excludeEnd("ctx");
][0];
$14=$globals.Line;
$15=[$recv($globals.Hint)._new_([(2),(1)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=5
//>>excludeEnd("ctx");
][0];
$16=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=6
//>>excludeEnd("ctx");
][0];
[$recv($16)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=11
//>>excludeEnd("ctx");
][0];
[$recv($16)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=12
//>>excludeEnd("ctx");
][0];
[$recv($16)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=13
//>>excludeEnd("ctx");
][0];
[$recv($16)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=12
//>>excludeEnd("ctx");
][0];
[$recv($16)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=5
//>>excludeEnd("ctx");
][0];
[$recv($16)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=14
//>>excludeEnd("ctx");
][0];
$17=$recv([$recv($14)._hint_cells_($15,[$recv($16)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=13
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint:cells:"]=4
//>>excludeEnd("ctx");
][0])._reducedFirst();
$18=$globals.Line;
$19=$recv($globals.Hint)._new_([(1)]);
$20=$recv($globals.Cells)._new();
$recv($20)._u();
$recv($20)._b();
$recv($20)._s();
$self._assert_($recv($17).__eq($recv($18)._hint_cells_($19,$recv($20)._pos_((5)))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLineAccesses",{l:l})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testLogimageAccesses",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLogimageAccesses\x0a\x09self assert: (logimage colCellsAt: 1) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "notNil", "colCellsAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv($self.logimage)._colCellsAt_((1)))._notNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLogimageAccesses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testStratFirstCutSpace",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratFirstCutSpace\x0a\x09self assert: (StratFirstCutSpace analyse: '3 1|  X- ')\x0a\x09\x09 equals: (Cells new: 'XXX-X').\x0a\x09self assert: (StratFirstCutSpace analyse: '3 1|  X-  ')\x0a\x09\x09 equals: (Cells new: 'XXX-').",
referencedClasses: ["StratFirstCutSpace", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "analyse:", "new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv($globals.StratFirstCutSpace)._analyse_("3 1|  X- ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("XXX-X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($globals.StratFirstCutSpace)._analyse_("3 1|  X-  "),$recv($globals.Cells)._new_("XXX-"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratFirstCutSpace",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testStratNotReached",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratNotReached\x0a\x09| l sol |\x0a\x09l := Line new\x0a\x09\x09hint: (Hint new numbers: { 2 });\x0a\x09\x09cells: (Cells new u; u; u; b; u; u; u).\x0a\x09sol := StratNotReached new analyse: l.\x0a\x09self assert: sol = (Cells new s; s; u; u; u; s; s)",
referencedClasses: ["Line", "Hint", "Cells", "StratNotReached"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:", "new", "numbers:", "cells:", "u", "b", "analyse:", "assert:", "=", "s"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var l,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=[$recv($globals.Line)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._hint_($recv([$recv($globals.Hint)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0])._numbers_([(2)]));
$2=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
[$recv($2)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=2
//>>excludeEnd("ctx");
][0];
[$recv($2)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=3
//>>excludeEnd("ctx");
][0];
$recv($2)._b();
[$recv($2)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=4
//>>excludeEnd("ctx");
][0];
[$recv($2)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=5
//>>excludeEnd("ctx");
][0];
l=$recv($1)._cells_([$recv($2)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=6
//>>excludeEnd("ctx");
][0]);
sol=$recv([$recv($globals.StratNotReached)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0])._analyse_(l);
$3=sol;
$4=$recv($globals.Cells)._new();
[$recv($4)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=1
//>>excludeEnd("ctx");
][0];
[$recv($4)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=2
//>>excludeEnd("ctx");
][0];
[$recv($4)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=7
//>>excludeEnd("ctx");
][0];
[$recv($4)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=8
//>>excludeEnd("ctx");
][0];
$recv($4)._u();
[$recv($4)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=3
//>>excludeEnd("ctx");
][0];
$self._assert_($recv($3).__eq($recv($4)._s()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratNotReached",{l:l,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testStratXCover",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratXCover\x0a\x09self assert: (StratFirstCover new analyse: (Line new: '2|X '))\x0a\x09\x09 equals: (Cells new: 'XX').\x0a\x09self assert: (StratFirstCover new analyse: (Line new: '3|X  '))\x0a\x09\x09 equals: (Cells new: 'XXX').\x0a\x09self assert: (StratFirstCover new analyse: (Line new: '3| X '))\x0a\x09\x09 equals: (Cells new: ' XX').\x0a\x09self assert: (StratFirstCover new analyse: (Line new: '3|  X'))\x0a\x09\x09 equals: (Cells new: '').\x0a\x09self assert: (StratFirstCover new analyse: (Line new: '3|   X'))\x0a\x09\x09 equals: (Cells new: '').",
referencedClasses: ["StratFirstCover", "Line", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "analyse:", "new", "new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv([$recv($globals.StratFirstCover)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("2|X ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("XX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.StratFirstCover)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("3|X  ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("XXX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.StratFirstCover)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("3| X ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=3
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_(" XX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=3
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.StratFirstCover)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("3|  X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=7
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=4
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=8
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=4
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($recv($globals.StratFirstCover)._new())._analyse_([$recv($globals.Line)._new_("3|   X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=9
//>>excludeEnd("ctx");
][0]),$recv($globals.Cells)._new_(""));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratXCover",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testStratXDone",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratXDone\x0a\x09| l |\x0a\x09l := Line new\x0a\x09\x09hint: (Hint new: {1. 2});\x0a\x09\x09cells: (Cells new b;u;b;b).\x0a\x09self assert: (StratFirstDone new analyse: l) \x0a\x09\x09 equals: (Cells new b;s).\x0a\x09self assert: (StratLastDone new analyse: l)\x0a\x09\x09 equals: (Cells new u;s;b;b)",
referencedClasses: ["Line", "Hint", "Cells", "StratFirstDone", "StratLastDone"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:", "new", "new:", "cells:", "b", "u", "assert:equals:", "analyse:", "s"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$1=[$recv($globals.Line)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._hint_($recv($globals.Hint)._new_([(1),(2)]));
$2=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
[$recv($2)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._u()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["u"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=2
//>>excludeEnd("ctx");
][0];
l=$recv($1)._cells_([$recv($2)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=3
//>>excludeEnd("ctx");
][0]);
$3=[$recv([$recv($globals.StratFirstDone)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0])._analyse_(l)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=1
//>>excludeEnd("ctx");
][0];
$4=[$recv($globals.Cells)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0];
[$recv($4)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=4
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($3,[$recv($4)._s()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["s"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
$5=$recv([$recv($globals.StratLastDone)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=5
//>>excludeEnd("ctx");
][0])._analyse_(l);
$6=$recv($globals.Cells)._new();
$recv($6)._u();
$recv($6)._s();
[$recv($6)._b()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["b"]=5
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($5,$recv($6)._b());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratXDone",{l:l})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testStratXMore",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratXMore\x0a\x09self assert: (StratFirstMore new analyse: (Line new: '3 2|  X XX'))\x0a\x09\x09 equals: (Cells new: 'XX').\x0a\x09self assert: (StratFirstMore new analyse: (Line new: '3 2|  X  X'))\x0a\x09\x09 equals: (Cells new: ' X').\x0a\x09self assert: (StratFirstMore new analyse: (Line new: '3 2|  X   X'))\x0a\x09\x09 equals: (Cells new: '').\x0a\x09self assert: (StratFirstMore new analyse: (Line new: '4 2|   X XXX'))\x0a\x09\x09 equals: (Cells new: 'XXX').",
referencedClasses: ["StratFirstMore", "Line", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "analyse:", "new", "new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv([$recv($globals.StratFirstMore)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("3 2|  X XX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("XX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.StratFirstMore)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("3 2|  X  X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_(" X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.StratFirstMore)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("3 2|  X   X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=3
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=3
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($recv($globals.StratFirstMore)._new())._analyse_([$recv($globals.Line)._new_("4 2|   X XXX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=7
//>>excludeEnd("ctx");
][0]),$recv($globals.Cells)._new_("XXX"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratXMore",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testStratXNotReachedMore",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratXNotReachedMore\x0a\x09self assert: (StratFirstNotReachedMore new analyse: (Line new: '1| X'))\x0a\x09\x09 equals: (Cells new: '-').\x0a\x09self assert: (StratFirstNotReachedMore new analyse: (Line new: '2|  XX'))\x0a\x09\x09 equals: (Cells new: '-').\x0a\x09self assert: (StratFirstNotReachedMore new analyse: (Line new: '3|   XX '))\x0a\x09\x09 equals: (Cells new: '-').",
referencedClasses: ["StratFirstNotReachedMore", "Line", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "analyse:", "new", "new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv([$recv($globals.StratFirstNotReachedMore)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("1| X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("-")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($globals.StratFirstNotReachedMore)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0])._analyse_([$recv($globals.Line)._new_("2|  XX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("-")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($recv($globals.StratFirstNotReachedMore)._new())._analyse_([$recv($globals.Line)._new_("3|   XX ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=5
//>>excludeEnd("ctx");
][0]),$recv($globals.Cells)._new_("-"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratXNotReachedMore",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);

$core.addMethod(
$core.method({
selector: "testStratXPosMore",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStratXPosMore\x0a\x09self assert: (StratFirstPosMore analyse: '1|  X')\x0a\x09\x09 equals: (Cells new: ' -').\x0a\x09self assert: (StratFirstPosMore analyse: '2|   XX')\x0a\x09\x09 equals: (Cells new: '  -').\x0a\x09self assert: (StratFirstPosMore analyse: '2|   XXX')\x0a\x09\x09 equals: (Cells new: 'XX-').",
referencedClasses: ["StratFirstPosMore", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "analyse:", "new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv($globals.StratFirstPosMore)._analyse_("1|  X")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_(" -")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($globals.StratFirstPosMore)._analyse_("2|   XX")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=2
//>>excludeEnd("ctx");
][0],[$recv($globals.Cells)._new_("  -")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($globals.StratFirstPosMore)._analyse_("2|   XXX"),$recv($globals.Cells)._new_("XX-"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStratXPosMore",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LogimageTest);


});
