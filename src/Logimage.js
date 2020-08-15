define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Logimage");
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-logimage"};

$core.addClass("Application", $globals.Object, "Logimage");
$core.setSlots($globals.Application, ["rows", "cols", "grid", "logimage"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22Create items\x22\x0a\x09cols := Silk TD: { #class -> 'cols' }.\x0a\x09rows := Silk TD: { #class -> 'rows' }.\x0a\x09grid := Silk TD: { #class -> 'center' }.\x0a\x09\x22Filling body\x22\x0a\x09Silk new << self",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["TD:", "->", "<<", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.cols=[$recv($globals.Silk)._TD_([["class".__minus_gt("cols")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["TD:"]=1
//>>excludeEnd("ctx");
][0];
$self.rows=[$recv($globals.Silk)._TD_([["class".__minus_gt("rows")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["TD:"]=2
//>>excludeEnd("ctx");
][0];
$self.grid=$recv($globals.Silk)._TD_(["class".__minus_gt("center")]);
$recv($recv($globals.Silk)._new()).__lt_lt(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "newButton:onClick:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text", "action"],
source: "newButton: text onClick: action\x0a\x09| btn |\x0a\x09btn := Silk\x09A: { #class -> 'button'. text }.\x0a\x09btn on: #click bind: action.\x0a\x09^ btn",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["A:", "->", "on:bind:"]
}, function ($methodClass){ return function (text,action){
var self=this,$self=this;
var btn;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
btn=$recv($globals.Silk)._A_(["class".__minus_gt("button"),text]);
$recv(btn)._on_bind_("click",action);
return btn;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newButton:onClick:",{text:text,action:action,btn:btn})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09cols resetContents.\x0a\x09cols << (WidgetHints new show: logimage colHints).\x0a\x09rows resetContents.\x0a\x09rows << (WidgetHints new show: logimage rowHints).\x0a\x09grid resetContents.\x0a\x09grid << (WidgetGrid new show: logimage grid)",
referencedClasses: ["WidgetHints", "WidgetGrid"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "<<", "show:", "new", "colHints", "rowHints", "grid"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self.cols)._resetContents()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["resetContents"]=1
//>>excludeEnd("ctx");
][0];
[$recv($self.cols).__lt_lt([$recv([$recv($globals.WidgetHints)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._show_($recv($self.logimage)._colHints())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["show:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
[$recv($self.rows)._resetContents()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["resetContents"]=2
//>>excludeEnd("ctx");
][0];
[$recv($self.rows).__lt_lt([$recv([$recv($globals.WidgetHints)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0])._show_($recv($self.logimage)._rowHints())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["show:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=2
//>>excludeEnd("ctx");
][0];
$recv($self.grid)._resetContents();
$recv($self.grid).__lt_lt($recv($recv($globals.WidgetGrid)._new())._show_($recv($self.logimage)._grid()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "renderMenuOn:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderMenuOn: silk\x0a\x09| menu list |\x0a\x09menu := silk DIV: { #class -> 'menu' }.\x0a\x0a\x09list := self renderStratsOn: menu.\x0a\x09\x0a\x09menu << (self newButton: 'Step' onClick: [ | selected |\x0a\x09\x09selected :=\x09(list allAt: '.checkbox>input')\x0a\x09\x09\x09select: [ :cb | cb element checked ]\x0a\x09\x09\x09thenCollect: [ :cb | Strategies instance at: (cb element id) ].\x0a\x09\x09self stepWith: selected\x09]).\x0a\x09 menu << (self newButton: 'Reset' onClick: [\x0a\x09\x09 self reset ]).\x0a\x09 menu << (self newButton: 'Oldify' onClick: [\x0a\x09\x09 logimage toOld ])",
referencedClasses: ["Strategies"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "renderStratsOn:", "<<", "newButton:onClick:", "select:thenCollect:", "allAt:", "checked", "element", "at:", "instance", "id", "stepWith:", "reset", "toOld"]
}, function ($methodClass){ return function (silk){
var self=this,$self=this;
var menu,list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
menu=$recv(silk)._DIV_(["class".__minus_gt("menu")]);
list=$self._renderStratsOn_(menu);
[$recv(menu).__lt_lt([$self._newButton_onClick_("Step",(function(){
var selected;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
selected=$recv($recv(list)._allAt_(".checkbox>input"))._select_thenCollect_((function(cb){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv([$recv(cb)._element()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["element"]=1
//>>excludeEnd("ctx");
][0])._checked();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cb:cb},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(cb){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Strategies)._instance())._at_($recv($recv(cb)._element())._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cb:cb},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $self._stepWith_(selected);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({selected:selected},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newButton:onClick:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
[$recv(menu).__lt_lt([$self._newButton_onClick_("Reset",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._reset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newButton:onClick:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=2
//>>excludeEnd("ctx");
][0];
$recv(menu).__lt_lt($self._newButton_onClick_("Oldify",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.logimage)._toOld();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{silk:silk,menu:menu,list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09| menu |\x0a\x09silk resetContents.\x0a\x09(silk DIV: { #class -> 'logimage' })\x0a\x09\x09TABLE\x0a\x09\x09\x09<< (Silk TR << (Silk TD) << cols)\x0a\x09\x09\x09<< (Silk TR << rows << grid).\x0a\x0a\x09self renderMenuOn: silk",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "<<", "TABLE", "DIV:", "->", "TR", "TD", "renderMenuOn:"]
}, function ($methodClass){ return function (silk){
var self=this,$self=this;
var menu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk)._resetContents();
[$recv([$recv($recv($recv(silk)._DIV_(["class".__minus_gt("logimage")]))._TABLE()).__lt_lt([$recv([$recv([$recv($globals.Silk)._TR()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["TR"]=1
//>>excludeEnd("ctx");
][0]).__lt_lt($recv($globals.Silk)._TD())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=4
//>>excludeEnd("ctx");
][0]).__lt_lt($self.cols)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=2
//>>excludeEnd("ctx");
][0]).__lt_lt([$recv($recv($recv($globals.Silk)._TR()).__lt_lt($self.rows)).__lt_lt($self.grid)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
$self._renderMenuOn_(silk);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk,menu:menu})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "renderStratsOn:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["menu"],
source: "renderStratsOn: menu\x0a\x09| btn list |\x0a\x09list := menu DIV: { #class -> 'strategies' }.\x0a\x09Strategies instance do: [ :strategy | | name |\x0a\x09\x09name := strategy id.\x0a\x09\x09(list DIV: { #class -> 'checkbox'. 'title'-> strategy class comment })\x0a\x09\x09\x09<< (Silk INPUT: { #type -> 'checkbox'.\x0a\x09\x09\x09\x09\x09\x09\x09  #id -> name.\x0a\x09\x09\x09\x09\x09\x09\x09  #checked -> 'checked' })\x0a\x09\x09\x09<< (Silk LABEL: { #for -> name. name })\x0a\x09\x09].\x0a\x09list DIV\x0a\x09\x09<< (self newButton: 'Unselect All' onClick: [\x0a\x09\x09 \x09self unselect: list ])\x0a\x09\x09<< (self newButton: 'Select All' onClick: [\x0a\x09\x09\x09self select: list ])\x0a\x09\x09<< (self newButton: 'Toggle All' onClick: [\x0a\x09\x09 \x09self toggle: list ]).\x0a\x09^ list",
referencedClasses: ["Strategies", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "do:", "instance", "id", "<<", "comment", "class", "INPUT:", "LABEL:", "DIV", "newButton:onClick:", "unselect:", "select:", "toggle:"]
}, function ($methodClass){ return function (menu){
var self=this,$self=this;
var btn,list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
list=[$recv(menu)._DIV_([["class".__minus_gt("strategies")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv($globals.Strategies)._instance())._do_((function(strategy){
var name;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
name=$recv(strategy)._id();
return [$recv([$recv($recv(list)._DIV_([["class".__minus_gt("checkbox")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["title".__minus_gt($recv($recv(strategy)._class())._comment())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0]])).__lt_lt($recv($globals.Silk)._INPUT_([["type".__minus_gt("checkbox")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],["id".__minus_gt(name)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0],["checked".__minus_gt("checked")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0]]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["<<"]=2
//>>excludeEnd("ctx");
][0]).__lt_lt($recv($globals.Silk)._LABEL_(["for".__minus_gt(name),name]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({strategy:strategy,name:name},$ctx1,1)});
//>>excludeEnd("ctx");
}));
[$recv([$recv($recv($recv(list)._DIV()).__lt_lt([$self._newButton_onClick_("Unselect All",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._unselect_(list);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newButton:onClick:"]=1
//>>excludeEnd("ctx");
][0])).__lt_lt([$self._newButton_onClick_("Select All",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._select_(list);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newButton:onClick:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=4
//>>excludeEnd("ctx");
][0]).__lt_lt($self._newButton_onClick_("Toggle All",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._toggle_(list);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
})))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=3
//>>excludeEnd("ctx");
][0];
return list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderStratsOn:",{menu:menu,btn:btn,list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "reset",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09logimage reset.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reset", "refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.logimage)._reset();
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "select:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["list"],
source: "select: list\x0a\x09(list allAt: '.checkbox>input')\x0a\x09\x09\x09select: [ :cb | cb element checked: true ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "allAt:", "checked:", "element"]
}, function ($methodClass){ return function (list){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(list)._allAt_(".checkbox>input"))._select_((function(cb){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(cb)._element())._checked_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cb:cb},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "show:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLogimage"],
source: "show: aLogimage\x0a\x09logimage := aLogimage.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["refresh"]
}, function ($methodClass){ return function (aLogimage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.logimage=aLogimage;
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{aLogimage:aLogimage})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "solve:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["alogimage"],
source: "solve: alogimage\x0a\x09Strategist new solve: alogimage.\x0a\x09self show: alogimage",
referencedClasses: ["Strategist"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["solve:", "new", "show:"]
}, function ($methodClass){ return function (alogimage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Strategist)._new())._solve_(alogimage);
$self._show_(alogimage);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"solve:",{alogimage:alogimage})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "step",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09| strategist |\x0a\x09strategist := Strategist new.\x0a\x09logimage toOld.\x0a\x09Strategies instance do: [ :strategy |\x0a\x09\x09strategist apply: strategy on: logimage ].\x0a\x09self refresh",
referencedClasses: ["Strategist", "Strategies"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "toOld", "do:", "instance", "apply:on:", "refresh"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var strategist;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
strategist=$recv($globals.Strategist)._new();
$recv($self.logimage)._toOld();
$recv($recv($globals.Strategies)._instance())._do_((function(strategy){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(strategist)._apply_on_(strategy,$self.logimage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({strategy:strategy},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{strategist:strategist})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "stepWith:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategies"],
source: "stepWith: strategies\x0a\x09| strategist |\x0a\x09strategist := Strategist new.\x0a\x09logimage toOld.\x0a\x09strategies do: [ :strategy |\x0a\x09\x09strategist apply: strategy on: logimage ].\x0a\x09self refresh",
referencedClasses: ["Strategist"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "toOld", "do:", "apply:on:", "refresh"]
}, function ($methodClass){ return function (strategies){
var self=this,$self=this;
var strategist;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
strategist=$recv($globals.Strategist)._new();
$recv($self.logimage)._toOld();
$recv(strategies)._do_((function(strategy){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(strategist)._apply_on_(strategy,$self.logimage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({strategy:strategy},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepWith:",{strategies:strategies,strategist:strategist})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "toggle:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["list"],
source: "toggle: list\x0a\x09(list allAt: '.checkbox>input')\x0a\x09\x09\x09select: [ :cb | cb element checked: (cb element checked not) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "allAt:", "checked:", "element", "not", "checked"]
}, function ($methodClass){ return function (list){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(list)._allAt_(".checkbox>input"))._select_((function(cb){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(cb)._element()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["element"]=1
//>>excludeEnd("ctx");
][0])._checked_($recv($recv($recv(cb)._element())._checked())._not());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cb:cb},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggle:",{list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);

$core.addMethod(
$core.method({
selector: "unselect:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["list"],
source: "unselect: list\x0a\x09(list allAt: '.checkbox>input')\x0a\x09\x09\x09select: [ :cb | cb element checked: false ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "allAt:", "checked:", "element"]
}, function ($methodClass){ return function (list){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(list)._allAt_(".checkbox>input"))._select_((function(cb){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(cb)._element())._checked_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cb:cb},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unselect:",{list:list})});
//>>excludeEnd("ctx");
}; }),
$globals.Application);


$core.addMethod(
$core.method({
selector: "start",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09^ Application new show: Logimage coureur",
referencedClasses: ["Application", "Logimage"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["show:", "new", "coureur"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Application)._new())._show_($recv($globals.Logimage)._coureur());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Application.a$cls);


$core.addClass("Cell", $globals.Object, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Cell.comment="A simple cell or pixel.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "*",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "* n\x0a\x09^ Cells new add: n cell: self",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "new"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Cells)._new())._add_cell_(n,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"*",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "=",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["other"],
source: "= other\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (other){
var self=this,$self=this;
return false;

}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "alternative",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09\x22I return list of alternative names or nothing\x22\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "isBox",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBox\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "isNew",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNew\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "isSpace",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSpace\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "isUnknown",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUnknown\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "toNew",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toNew\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Cell);

$core.addMethod(
$core.method({
selector: "toOld",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toOld\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Cell);


$core.setSlots($globals.Cell.a$cls, ["cells"]);
$core.addMethod(
$core.method({
selector: "at:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["symbol"],
source: "at: symbol\x0a\x09symbol isString ifTrue: [\x0a\x09\x09^ cells at: symbol ].\x0a\x09^ symbol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isString", "at:"]
}, function ($methodClass){ return function (symbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(symbol)._isString())){
return $recv($self.cells)._at_(symbol);
}
return symbol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{symbol:symbol})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell.a$cls);

$core.addMethod(
$core.method({
selector: "box",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "box\x0a\x09^ cells at: #box",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_("box");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"box",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| basesize |\x0a\x09super initialize.\x0a\x09cells := #{}.\x0a\x09basesize := self name size + 1.\x0a\x09self allSubclassesDo: [ :cls |\x0a\x09\x09| name inst |\x0a\x09\x09name := cls name.\x0a\x09\x09name := name copyFrom: basesize to: (name size).\x0a\x09\x09name := name asLowercase.\x0a\x09\x09inst := cls new.\x0a\x09\x09cells at: name put: inst.\x0a\x09\x09cells at: inst asString put: inst.\x0a\x09\x09inst alternative do: [ :alt | cells at: alt put: inst ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "+", "size", "name", "allSubclassesDo:", "copyFrom:to:", "asLowercase", "new", "at:put:", "asString", "do:", "alternative"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var basesize;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$self.cells=$globals.HashedCollection._newFromPairs_([]);
basesize=$recv([$recv([$self._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__plus((1));
$self._allSubclassesDo_((function(cls){
var name,inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
name=$recv(cls)._name();
name=$recv(name)._copyFrom_to_(basesize,$recv(name)._size());
name=$recv(name)._asLowercase();
inst=$recv(cls)._new();
[$recv($self.cells)._at_put_(name,inst)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($self.cells)._at_put_($recv(inst)._asString(),inst)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
return $recv($recv(inst)._alternative())._do_((function(alt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_put_(alt,inst);
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
}, function($ctx1) {$ctx1.fill(self,"initialize",{basesize:basesize})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell.a$cls);

$core.addMethod(
$core.method({
selector: "newBox",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBox\x0a\x09^ cells at: #boxnew",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_("boxnew");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBox",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell.a$cls);

$core.addMethod(
$core.method({
selector: "newSpace",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newSpace\x0a\x09^ cells at: #spacenew",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_("spacenew");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newSpace",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell.a$cls);

$core.addMethod(
$core.method({
selector: "space",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09^ cells at: #space",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_("space");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell.a$cls);

$core.addMethod(
$core.method({
selector: "unknown",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unknown\x0a\x09^ cells at: #unknown",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_("unknown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unknown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cell.a$cls);


$core.addClass("CellBox", $globals.Cell, "Logimage");
$core.addMethod(
$core.method({
selector: "=",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["other"],
source: "= other\x0a\x09^ other isBox",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isBox"]
}, function ($methodClass){ return function (other){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(other)._isBox();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{other:other})});
//>>excludeEnd("ctx");
}; }),
$globals.CellBox);

$core.addMethod(
$core.method({
selector: "alternative",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #('X')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["X"];

}; }),
$globals.CellBox);

$core.addMethod(
$core.method({
selector: "isBox",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBox\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.CellBox);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '@'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("@");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.CellBox);

$core.addMethod(
$core.method({
selector: "toNew",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toNew\x0a\x09^ Cell at: #boxnew",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cell)._at_("boxnew");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toNew",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CellBox);



$core.addClass("CellBoxNew", $globals.CellBox, "Logimage");
$core.addMethod(
$core.method({
selector: "alternative",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.CellBoxNew);

$core.addMethod(
$core.method({
selector: "isNew",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNew\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.CellBoxNew);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: (String fromCharCode: 174)",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "fromCharCode:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($globals.String)._fromCharCode_((174)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.CellBoxNew);

$core.addMethod(
$core.method({
selector: "toOld",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toOld\x0a\x09^ Cell at: #box",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cell)._at_("box");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toOld",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CellBoxNew);



$core.addClass("CellSpace", $globals.Cell, "Logimage");
$core.addMethod(
$core.method({
selector: "=",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["other"],
source: "= other\x0a\x09^ other isSpace",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isSpace"]
}, function ($methodClass){ return function (other){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(other)._isSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{other:other})});
//>>excludeEnd("ctx");
}; }),
$globals.CellSpace);

$core.addMethod(
$core.method({
selector: "alternative",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.CellSpace);

$core.addMethod(
$core.method({
selector: "isSpace",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSpace\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.CellSpace);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '-'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("-");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.CellSpace);

$core.addMethod(
$core.method({
selector: "toNew",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toNew\x0a\x09^ Cell at: #spacenew",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cell)._at_("spacenew");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toNew",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CellSpace);



$core.addClass("CellSpaceNew", $globals.CellSpace, "Logimage");
$core.addMethod(
$core.method({
selector: "alternative",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.CellSpaceNew);

$core.addMethod(
$core.method({
selector: "isNew",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNew\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.CellSpaceNew);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '+'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("+");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.CellSpaceNew);

$core.addMethod(
$core.method({
selector: "toOld",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toOld\x0a\x09^ Cell at: #space",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cell)._at_("space");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toOld",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CellSpaceNew);



$core.addClass("CellUnknown", $globals.Cell, "Logimage");
$core.addMethod(
$core.method({
selector: "=",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["other"],
source: "= other\x0a\x09^ other isUnknown",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isUnknown"]
}, function ($methodClass){ return function (other){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(other)._isUnknown();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{other:other})});
//>>excludeEnd("ctx");
}; }),
$globals.CellUnknown);

$core.addMethod(
$core.method({
selector: "alternative",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alternative\x0a\x09^ #('?' '_')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["?", "_"];

}; }),
$globals.CellUnknown);

$core.addMethod(
$core.method({
selector: "isUnknown",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUnknown\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.CellUnknown);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: ' '",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(" ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.CellUnknown);



$core.addClass("Cells", $globals.Object, "Logimage");
$core.setSlots($globals.Cells, ["cells", "pos"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Cells.comment="A line or a column of cells";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "= theCells\x0a\x09^ (cells = theCells cells) and: (pos = theCells pos)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "=", "cells", "pos"]
}, function ($methodClass){ return function (theCells){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($self.cells).__eq($recv(theCells)._cells())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_($recv($self.pos).__eq($recv(theCells)._pos()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{theCells:theCells})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "add:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "add: aCell\x0a\x09cells add: (Cell at: aCell)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "at:"]
}, function ($methodClass){ return function (aCell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.cells)._add_($recv($globals.Cell)._at_(aCell));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aCell:aCell})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "add:cell:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n", "aCell"],
source: "add: n cell: aCell\x0a\x09n timesRepeat: [ self add: aCell ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timesRepeat:", "add:"]
}, function ($methodClass){ return function (n,aCell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(n)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._add_(aCell);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:cell:",{n:n,aCell:aCell})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addAll:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "addAll: theCells\x0a\x09cells addAll: theCells cells",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "cells"]
}, function ($methodClass){ return function (theCells){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.cells)._addAll_($recv(theCells)._cells());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAll:",{theCells:theCells})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addBoxes:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "addBoxes: n\x0a\x09self add: n cell: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "box"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_cell_(n,$recv($globals.Cell)._box());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addBoxes:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addSpaces:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "addSpaces: n\x0a\x09self add: n cell: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "space"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_cell_(n,$recv($globals.Cell)._space());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSpaces:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "addUnknowns:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "addUnknowns: n\x0a\x09self add: n cell: (Cell unknown)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "unknown"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_cell_(n,$recv($globals.Cell)._unknown());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addUnknowns:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "asArray",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asArray\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.cells;

}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "asNew",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNew\x0a\x09cells := cells collect: [ :c | c toNew ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "toNew"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.cells=$recv($self.cells)._collect_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(c)._toNew();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNew",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "at:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "at: index\x0a\x09^ cells at: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index", "aCell"],
source: "at: index put: aCell\x0a\x09^ cells at: index put: (Cell at: aCell)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "at:"]
}, function ($methodClass){ return function (index,aCell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_put_(index,$recv($globals.Cell)._at_(aCell));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{index:index,aCell:aCell})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "b",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "b\x0a\x09self add: 1 cell: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "box"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_cell_((1),$recv($globals.Cell)._box());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"b",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "cells",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cells\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.cells;

}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "cells:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theCells"],
source: "cells: theCells\x0a\x09cells := theCells asArray collect: [ :c | Cell at: c ]",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "asArray", "at:"]
}, function ($methodClass){ return function (theCells){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.cells=$recv($recv(theCells)._asArray())._collect_((function(c){
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
}, function($ctx1) {$ctx1.fill(self,"cells:",{theCells:theCells})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "copyFrom:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["ref"],
source: "copyFrom: ref\x0a\x09| p1 p2 res |\x0a\x09ref isNumber\x0a\x09\x09ifTrue: [ \x22it is a number where to begin\x22\x0a\x09\x09\x09p1 := ref.\x0a\x09\x09\x09p2 := cells size ]\x0a\x09\x09ifFalse: [ \x22is is a tuple where tobegin and size\x22\x0a\x09\x09\x09p1 := ref at: #pos.\x0a\x09\x09\x09p2 := (ref at: #pos) + (ref at: #size) - 1 ].\x0a\x09^ Cells new\x0a\x09\x09cells: (cells copyFrom: p1 to: p2);\x0a\x09\x09pos: pos + p1 - 1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isNumber", "size", "at:", "-", "+", "cells:", "new", "copyFrom:to:", "pos:"]
}, function ($methodClass){ return function (ref){
var self=this,$self=this;
var p1,p2,res;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if($core.assert($recv(ref)._isNumber())){
p1=ref;
p2=$recv($self.cells)._size();
p2;
} else {
p1=[$recv(ref)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0];
p2=[$recv([$recv([$recv(ref)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]).__plus($recv(ref)._at_("size"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0]).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0];
p2;
}
$1=$recv($globals.Cells)._new();
$recv($1)._cells_($recv($self.cells)._copyFrom_to_(p1,p2));
return $recv($1)._pos_($recv($recv($self.pos).__plus(p1)).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:",{ref:ref,p1:p1,p2:p2,res:res})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "copyFrom:to:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["p1", "p2"],
source: "copyFrom: p1 to: p2\x0a\x09^ Cells new\x0a\x09\x09cells: (cells copyFrom: p1 to: p2);\x0a\x09\x09pos: pos + p1 - 1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["cells:", "new", "copyFrom:to:", "pos:", "-", "+"]
}, function ($methodClass){ return function (p1,p2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Cells)._new();
$recv($1)._cells_($recv($self.cells)._copyFrom_to_(p1,p2));
return $recv($1)._pos_($recv($recv($self.pos).__plus(p1)).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{p1:p1,p2:p2})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09cells do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.cells)._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstBox",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstBox\x0a\x09\x22Return a tupple with index (starting at 1) of first box if exists, and size\x22\x0a\x09| posi size |\x0a\x09posi := 0.\x0a\x09size := 0.\x0a\x09cells do: [ :c |\x0a\x09\x09(size>0)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09c isBox\x0a\x09\x09\x09\x09\x09ifTrue: [ size := size+1 ]\x0a\x09\x09\x09\x09\x09ifFalse: [ ^ #{ #pos -> posi. #size -> size } ]\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09posi := posi+1.\x0a\x09\x09\x09\x09c isBox\x0a\x09\x09\x09\x09\x09ifTrue: [ size := 1 ]\x0a\x09\x09\x09\x09]\x0a\x09\x09].\x0a\x09size=0 ifTrue: [ posi:=0 ].\x0a\x09^ #{ #pos -> posi. #size -> size }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifTrue:ifFalse:", ">", "isBox", "+", "ifTrue:", "="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var posi,size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
posi=(0);
size=(0);
$recv($self.cells)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(size).__gt((0)))){
if($core.assert([$recv(c)._isBox()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isBox"]=1
//>>excludeEnd("ctx");
][0])){
size=[$recv(size).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
return size;
} else {
throw $early=[$globals.HashedCollection._newFromPairs_(["pos",posi,"size",size])];
}
} else {
posi=$recv(posi).__plus((1));
if($core.assert($recv(c)._isBox())){
size=(1);
return size;
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($recv(size).__eq((0)))){
posi=(0);
posi;
}
return $globals.HashedCollection._newFromPairs_(["pos",posi,"size",size]);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstBox",{posi:posi,size:size})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstDones",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstDones\x0a\x09\x22I returns cells really dones (box separate by spaces)\x22\x0a\x09| done |\x0a\x09done := Cells new pos: pos.\x0a\x09cells do: [ :c |\x0a\x09\x09\x22if found a unknown cell, stop reading cells, remove last boxes\x22\x0a\x09\x09c isUnknown ifTrue: [ ^ done trimLast: Cell box ].\x0a\x09\x09done add: c ].\x0a\x09^ done",
referencedClasses: ["Cells", "Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pos:", "new", "do:", "ifTrue:", "isUnknown", "trimLast:", "box", "add:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var done;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
done=$recv($recv($globals.Cells)._new())._pos_($self.pos);
$recv($self.cells)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(c)._isUnknown())){
throw $early=[$recv(done)._trimLast_($recv($globals.Cell)._box())];
}
return $recv(done)._add_(c);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return done;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstDones",{done:done})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstFreeSpace",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstFreeSpace\x0a\x09\x22Return a tupple with index (starting at 1) of first free (without box) spaces if exists, and size\x22\x0a\x09| space size |\x0a\x09size := 0.\x0a\x09space := true.\x0a\x09cells withIndexDo: [ :c :apos |\x0a\x09\x09c isSpace ifTrue: [\x0a\x09\x09\x09space := true.\x0a\x09\x09\x09size > 0 ifTrue: [ ^ #{ #pos -> (apos-size). #size -> size } ]\x0a\x09\x09\x09].\x0a\x09\x09c isBox ifTrue: [\x0a\x09\x09\x09space := false.\x0a\x09\x09\x09size := 0\x0a\x09\x09\x09].\x0a\x09\x09c isUnknown ifTrue: [\x0a\x09\x09\x09space ifTrue: [ size := size + 1 ]\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09(space and: size>0) ifTrue: [ ^ #{ #pos -> (cells size-size+1). #size -> size } ].\x0a\x09^ #{ #pos -> 0. #size -> 0 }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "ifTrue:", "isSpace", ">", "-", "isBox", "isUnknown", "+", "and:", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var space,size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
size=(0);
space=true;
$recv($self.cells)._withIndexDo_((function(c,apos){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(c)._isSpace())){
space=true;
if($core.assert([$recv(size).__gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])){
throw $early=[$globals.HashedCollection._newFromPairs_(["pos",[$recv(apos).__minus(size)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],"size",size])];
}
}
if($core.assert($recv(c)._isBox())){
space=false;
size=(0);
size;
}
if($core.assert($recv(c)._isUnknown())){
if($core.assert(space)){
size=[$recv(size).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
return size;
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,apos:apos},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(space)._and_($recv(size).__gt((0)));
if($core.assert($1)){
return $globals.HashedCollection._newFromPairs_(["pos",$recv($recv($recv($self.cells)._size()).__minus(size)).__plus((1)),"size",size]);
}
return $globals.HashedCollection._newFromPairs_(["pos",(0),"size",(0)]);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstFreeSpace",{space:space,size:size})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstNotSpace",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstNotSpace\x0a\x09\x22Return first cells stopping at first space (not box, not unknown)\x22\x0a\x09| size |\x0a\x09size := 0.\x0a\x09cells withIndexDo: [ :c :i |\x0a\x09\x09c isSpace\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09size > 0 ifTrue: [ ^ self copyFrom: i-size to: i-1 ]\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09size := size + 1\x0a\x09\x09\x09\x09]\x0a\x09\x09].\x0a\x09size>0 ifTrue: [ ^ self copyFrom: cells size-size+1 ].\x0a\x09^ Cells new",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "ifTrue:ifFalse:", "isSpace", "ifTrue:", ">", "copyFrom:to:", "-", "+", "copyFrom:", "size", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
size=(0);
$recv($self.cells)._withIndexDo_((function(c,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(c)._isSpace())){
if($core.assert([$recv(size).__gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])){
throw $early=[$self._copyFrom_to_([$recv(i).__minus(size)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],[$recv(i).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0])];
}
} else {
size=[$recv(size).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
return size;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($recv(size).__gt((0)))){
return $self._copyFrom_($recv($recv($recv($self.cells)._size()).__minus(size)).__plus((1)));
}
return $recv($globals.Cells)._new();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstNotSpace",{size:size})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "firstSpace",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstSpace\x0a\x09\x22Returns position of first space, 0 if no spaces\x22\x0a\x09cells withIndexDo: [ :c :i |\x0a\x09\x09c isSpace ifTrue: [ ^ i ]\x0a\x09\x09].\x0a\x09^ 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "ifTrue:", "isSpace"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv($self.cells)._withIndexDo_((function(c,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(c)._isSpace())){
throw $early=[i];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return (0);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstSpace",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09pos := 1.\x0a\x09cells := { }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.pos=(1);
$self.cells=[];
return self;

}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "isBetter:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sol"],
source: "isBetter: sol\x0a\x09\x22I return true if sol bring something new in my cells\x22\x0a\x09sol withIndexDo: [ :c :i |\x0a\x09\x09(c isUnknown not and: (cells at: i) isUnknown) ifTrue: [ ^ true ]\x0a\x09\x09].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "ifTrue:", "and:", "not", "isUnknown", "at:"]
}, function ($methodClass){ return function (sol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(sol)._withIndexDo_((function(c,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv([$recv(c)._isUnknown()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isUnknown"]=1
//>>excludeEnd("ctx");
][0])._not())._and_($recv($recv($self.cells)._at_(i))._isUnknown());
if($core.assert($1)){
throw $early=[true];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBetter:",{sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ cells isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isEmpty"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "lastDones",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastDones\x0a\x09\x22I returns cells really dones (box separate by spaces) at end\x22\x0a\x09| done |\x0a\x09done := (self reversed firstDones) reversed.\x0a\x09^ done pos: pos + cells size - done size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reversed", "firstDones", "pos:", "-", "+", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var done;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
done=[$recv($recv($self._reversed())._firstDones())._reversed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["reversed"]=1
//>>excludeEnd("ctx");
][0];
return $recv(done)._pos_($recv($recv($self.pos).__plus([$recv($self.cells)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])).__minus($recv(done)._size()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastDones",{done:done})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "numbers",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numbers\x0a\x09\x22I return a list of number of group of box\x22\x0a\x09| numbers current |\x0a\x09numbers := { }.\x0a\x09current := 0.\x0a\x09cells do: [ :c |\x0a\x09\x09c isBox\x0a\x09\x09\x09ifTrue: [ current := current + 1 ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09current > 0 ifTrue: [ numbers add: current ].\x0a\x09\x09\x09\x09current := 0 ]\x0a\x09\x09].\x0a\x09\x22add the last one if exist\x22 \x0a\x09current > 0 ifTrue: [ numbers add: current ].\x0a\x09^ numbers",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifTrue:ifFalse:", "isBox", "+", "ifTrue:", ">", "add:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var numbers,current;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
numbers=[];
current=(0);
$recv($self.cells)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(c)._isBox())){
current=$recv(current).__plus((1));
return current;
} else {
if($core.assert([$recv(current).__gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])){
[$recv(numbers)._add_(current)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
}
current=(0);
return current;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($recv(current).__gt((0)))){
$recv(numbers)._add_(current);
}
return numbers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numbers",{numbers:numbers,current:current})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "pos",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pos\x0a\x09^ pos",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.pos;

}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "pos:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPos"],
source: "pos: aPos\x0a\x09pos := aPos",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPos){
var self=this,$self=this;
$self.pos=aPos;
return self;

}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '|'.\x0a\x09pos-1 timesRepeat: [ stream nextPutAll: '.|' ].\x0a\x09cells do: [ :c |\x0a\x09\x09\x09c printOn: stream.\x0a\x09\x09\x09stream nextPutAll: '|' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "timesRepeat:", "-", "do:", "printOn:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPutAll_("|")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv($self.pos).__minus((1)))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(stream)._nextPutAll_(".|")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($self.cells)._do_((function(c){
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
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09^ Cells new\x0a\x09\x09pos: pos;\x0a\x09\x09cells: cells reversed",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pos:", "new", "cells:", "reversed"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Cells)._new();
$recv($1)._pos_($self.pos);
return $recv($1)._cells_($recv($self.cells)._reversed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "s",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "s\x0a\x09self add: 1 cell: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "space"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_cell_((1),$recv($globals.Cell)._space());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"s",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "size",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ cells size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "size:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newSize"],
source: "size: newSize\x0a\x09(self size = newSize) ifTrue: [ ^ self ].\x0a\x09(self size > newSize)\x0a\x09\x09ifTrue: [ cells := cells\x0a\x09 \x09\x09\x09\x09removeFrom: newSize + 1\x0a\x09\x09\x09\x09\x09to: self size ]\x0a\x09\x09ifFalse: [ self addUnknowns: (newSize - self size) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "size", "ifTrue:ifFalse:", ">", "removeFrom:to:", "+", "addUnknowns:", "-"]
}, function ($methodClass){ return function (newSize){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq(newSize))){
return self;
}
if($core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__gt(newSize))){
$self.cells=$recv($self.cells)._removeFrom_to_($recv(newSize).__plus((1)),[$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=3
//>>excludeEnd("ctx");
][0]);
$self.cells;
} else {
$self._addUnknowns_($recv(newSize).__minus($self._size()));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size:",{newSize:newSize})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trim",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trim\x0a\x09\x22I return a list of cells without begining and ending spaces\x22\x0a\x09^ self trimFirst trimLast",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimLast", "trimFirst"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._trimFirst())._trimLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trim",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimFirst",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimFirst\x0a\x09\x22I return a list of cells without begining spaces\x22\x0a\x09^ self trimFirst: Cell space",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimFirst:", "space"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._trimFirst_($recv($globals.Cell)._space());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimFirst",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimFirst:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell"],
source: "trimFirst: cell\x0a\x09\x22I return a list of cells without begining spaces\x22\x0a\x09| add trimed |\x0a\x09add := false.\x0a\x09trimed := cells select: [ :c |\x0a\x09\x09c = cell ifFalse: [ add := true ].\x0a\x09\x09add\x09].\x0a\x09^ Cells new\x0a\x09\x09pos: pos + cells size - trimed size;\x0a\x09\x09cells: trimed",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "ifFalse:", "=", "pos:", "new", "-", "+", "size", "cells:"]
}, function ($methodClass){ return function (cell){
var self=this,$self=this;
var add,trimed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
add=false;
trimed=$recv($self.cells)._select_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($recv(c).__eq(cell))){
add=true;
add;
}
return add;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv($globals.Cells)._new();
$recv($1)._pos_($recv($recv($self.pos).__plus([$recv($self.cells)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])).__minus($recv(trimed)._size()));
return $recv($1)._cells_(trimed);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimFirst:",{cell:cell,add:add,trimed:trimed})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimLast",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimLast\x0a\x09\x22I return a list of cells without ending spaces\x22\x0a\x09^ self trimLast: Cell space",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimLast:", "space"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._trimLast_($recv($globals.Cell)._space());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "trimLast:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell"],
source: "trimLast: cell\x0a\x09\x22I return a list of cells without ending sort of cell, keep pos\x22\x0a\x09^ ((self reversed trimFirst: cell) reversed) pos: pos",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pos:", "reversed", "trimFirst:"]
}, function ($methodClass){ return function (cell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($recv($self._reversed())._trimFirst_(cell))._reversed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["reversed"]=1
//>>excludeEnd("ctx");
][0])._pos_($self.pos);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLast:",{cell:cell})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "u",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "u\x0a\x09self add: 1 cell: (Cell unknown)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "unknown"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_cell_((1),$recv($globals.Cell)._unknown());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"u",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09cells withIndexDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.cells)._withIndexDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells);


$core.addMethod(
$core.method({
selector: "boxes:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "boxes: n\x0a\x09^ self new add: n cell: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "new", "box"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._add_cell_(n,$recv($globals.Cell)._box());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boxes:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09^ self new: #( )",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._new_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells"],
source: "new: cells\x0a\x09^ super new cells: cells",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["cells:", "new"]
}, function ($methodClass){ return function (cells){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0])._cells_(cells);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{cells:cells})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells.a$cls);

$core.addMethod(
$core.method({
selector: "spaces:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "spaces: n\x0a\x09^ self new add: n cell: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "new", "space"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._add_cell_(n,$recv($globals.Cell)._space());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"spaces:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells.a$cls);

$core.addMethod(
$core.method({
selector: "unknowns:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "unknowns: n\x0a\x09^ self new add: n cell: (Cell unknown)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:cell:", "new", "unknown"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._add_cell_(n,$recv($globals.Cell)._unknown());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unknowns:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Cells.a$cls);


$core.addClass("Grid", $globals.Object, "Logimage");
$core.setSlots($globals.Grid, ["cells", "size"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Grid.comment="Image, with Cells";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "at: point\x0a\x09^ cells at: (self indexOf: point)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "indexOf:"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.cells)._at_($self._indexOf_(point));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point", "cell"],
source: "at: point put: cell\x0a\x09cells at: (self indexOf: point) put: cell",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "indexOf:"]
}, function ($methodClass){ return function (point,cell){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.cells)._at_put_($self._indexOf_(point),cell);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{point:point,cell:cell})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "box:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "box: point\x0a\x09self at: point put: (Cell box)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "box"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._at_put_(point,$recv($globals.Cell)._box());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"box:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "colAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colAt: index\x0a\x09| col |\x0a\x09col := Array new: size y.\x0a\x091 to: size y do: [ :y | | pt |\x0a\x09\x09pt := Point x: index y: y.\x0a\x09\x09col at: y put: (self at: pt) ].\x0a\x09^ Cells new: col",
referencedClasses: ["Array", "Point", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:", "y", "to:do:", "x:y:", "at:put:", "at:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
var col;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
col=[$recv($globals.Array)._new_([$recv($self.size)._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0];
(1)._to_do_($recv($self.size)._y(),(function(y){
var pt;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
pt=$recv($globals.Point)._x_y_(index,y);
return $recv(col)._at_put_(y,$self._at_(pt));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y,pt:pt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($globals.Cells)._new_(col);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colAt:",{index:index,col:col})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "indexOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "indexOf: point\x0a\x09^ (size x * (point y - 1)) + point x.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "*", "x", "-", "y"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv([$recv($self.size)._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__star($recv($recv(point)._y()).__minus((1)))).__plus($recv(point)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "newBox:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "newBox: point\x0a\x09(self at: point) isBox ifTrue: [ ^ self ].\x0a\x09(self at: point) isUnknown ifFalse: [ self error: 'try to set new cell on already set' ].\x0a\x09self at: point put: Cell newBox",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isBox", "at:", "ifFalse:", "isUnknown", "error:", "at:put:", "newBox"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._at_(point)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0])._isBox())){
return self;
}
if(!$core.assert($recv($self._at_(point))._isUnknown())){
$self._error_("try to set new cell on already set");
}
$self._at_put_(point,$recv($globals.Cell)._newBox());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBox:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "newSpace:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "newSpace: point\x0a\x09(self at: point) isSpace ifTrue: [ ^ self ].\x0a\x09(self at: point) isUnknown ifFalse: [ self error: 'try to set new cell on already set at ', point printString ].\x0a\x09self at: point put: Cell newSpace",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isSpace", "at:", "ifFalse:", "isUnknown", "error:", ",", "printString", "at:put:", "newSpace"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._at_(point)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0])._isSpace())){
return self;
}
if(!$core.assert($recv($self._at_(point))._isUnknown())){
$self._error_("try to set new cell on already set at ".__comma($recv(point)._printString()));
}
$self._at_put_(point,$recv($globals.Cell)._newSpace());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newSpace:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09self rowDo: [ :r |\x0a\x09\x09stream cr.\x0a\x09\x09r printOn: stream ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rowDo:", "cr", "printOn:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._rowDo_((function(r){
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
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "rowAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowAt: index\x0a\x09| start |\x0a\x09start := self indexOf: (Point x: 1 y: index).\x0a\x09^ Cells new: (cells copyFrom: start to: (start + size x - 1))",
referencedClasses: ["Point", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["indexOf:", "x:y:", "new:", "copyFrom:to:", "-", "+", "x"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
var start;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
start=$self._indexOf_($recv($globals.Point)._x_y_((1),index));
return $recv($globals.Cells)._new_($recv($self.cells)._copyFrom_to_(start,$recv($recv(start).__plus($recv($self.size)._x())).__minus((1))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index,start:start})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "rowDo:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "rowDo: aBlock\x0a\x091 to: size y do: [ :row |\x0a\x09\x09aBlock value:  (self rowAt: row) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["to:do:", "y", "value:", "rowAt:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(1)._to_do_($recv($self.size)._y(),(function(row){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($self._rowAt_(row));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "size",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09\x22I return a point with x and y sizes\x22\x0a\x09^ size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.size;

}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "size:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSize"],
source: "size: aSize\x0a\x09size := aSize.\x0a\x09cells := (1 to: (size x * size y)) collect: [ Cell unknown ]",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "to:", "*", "x", "y", "unknown"]
}, function ($methodClass){ return function (aSize){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.size=aSize;
$self.cells=$recv((1)._to_($recv($recv($self.size)._x()).__star($recv($self.size)._y())))._collect_((function(){
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
}, function($ctx1) {$ctx1.fill(self,"size:",{aSize:aSize})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "space:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "space: point\x0a\x09self at: point put: (Cell space)",
referencedClasses: ["Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "space"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._at_put_(point,$recv($globals.Cell)._space());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);

$core.addMethod(
$core.method({
selector: "toOld",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toOld\x0a\x09cells := cells collect: [ :cell | cell toOld ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "toOld"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.cells=$recv($self.cells)._collect_((function(cell){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(cell)._toOld();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toOld",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Grid);



$core.addClass("Hint", $globals.Object, "Logimage");
$core.setSlots($globals.Hint, ["numbers"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Hint.comment="List of numbers";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "= hint\x0a\x09^ numbers = hint numbers",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "numbers"]
}, function ($methodClass){ return function (hint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.numbers).__eq($recv(hint)._numbers());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{hint:hint})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "at:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "at: index\x0a\x09^ numbers at: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.numbers)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09numbers do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.numbers)._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "first",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x09^ numbers first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["first"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.numbers)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "firstRemoved:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "firstRemoved: n\x0a\x09^ Hint new: (numbers copyFrom: (n+1) to: numbers size)",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:", "copyFrom:to:", "+", "size"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Hint)._new_($recv($self.numbers)._copyFrom_to_($recv(n).__plus((1)),$recv($self.numbers)._size()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstRemoved:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09numbers = #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.numbers).__eq([]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ numbers isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isEmpty"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.numbers)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "lastRemoved:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "lastRemoved: n\x0a\x09^ Hint new: (numbers copyFrom: 1 to: numbers size - n)",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:", "copyFrom:to:", "-", "size"]
}, function ($methodClass){ return function (n){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Hint)._new_($recv($self.numbers)._copyFrom_to_((1),$recv($recv($self.numbers)._size()).__minus(n)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastRemoved:",{n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "max",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "max\x0a\x09^ numbers\x0a\x09\x09inject: 0\x0a\x09\x09into: [ :r :e | e > r ifTrue: [e] ifFalse: [r] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "ifTrue:ifFalse:", ">"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.numbers)._inject_into_((0),(function(r,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(e).__gt(r))){
return e;
} else {
return r;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"max",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "min",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "min\x0a\x09^ numbers\x0a\x09\x09inject: 1000\x0a\x09\x09into: [ :r :e | e < r ifTrue: [e] ifFalse: [r] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "ifTrue:ifFalse:", "<"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.numbers)._inject_into_((1000),(function(r,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(e).__lt(r))){
return e;
} else {
return r;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r,e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"min",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "numbers",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numbers\x0a\x09^ numbers",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.numbers;

}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "numbers:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["array"],
source: "numbers: array\x0a\x09array isString ifTrue: [\x0a\x09\x09numbers := (array tokenize: ' ') asArray collect: [ :e | e asNumber].\x0a\x09\x09^ self].\x0a\x09numbers := array",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isString", "collect:", "asArray", "tokenize:", "asNumber"]
}, function ($methodClass){ return function (array){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(array)._isString())){
$self.numbers=$recv($recv($recv(array)._tokenize_(" "))._asArray())._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
}
$self.numbers=array;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numbers:",{array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09stream nextPutAll: '[ '.\x0a\x09numbers do: [ :n |\x0a\x09\x09n printOn: stream.\x0a\x09\x09stream space ].\x0a\x09stream nextPutAll: ']'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "do:", "printOn:", "space"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPutAll_("[ ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv($self.numbers)._do_((function(n){
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
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09^ Hint new: numbers reversed",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:", "reversed"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Hint)._new_($recv($self.numbers)._reversed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);

$core.addMethod(
$core.method({
selector: "size",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ numbers size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.numbers)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["numbers"],
source: "new: numbers\x0a\x09^ self new numbers: numbers",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["numbers:", "new"]
}, function ($methodClass){ return function (numbers){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._numbers_(numbers);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{numbers:numbers})});
//>>excludeEnd("ctx");
}; }),
$globals.Hint.a$cls);


$core.addClass("Hints", $globals.Object, "Logimage");
$core.setSlots($globals.Hints, ["hints"]);
$core.addMethod(
$core.method({
selector: "add:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "add: hint\x0a\x09hints add: (\x0a\x09\x09(hint isKindOf: Hint)\x0a\x09\x09\x09ifTrue: [ hint ]\x0a\x09\x09\x09ifFalse: [ Hint new numbers: hint ])",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "ifTrue:ifFalse:", "isKindOf:", "numbers:", "new"]
}, function ($methodClass){ return function (hint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.hints;
if($core.assert($recv(hint)._isKindOf_($globals.Hint))){
$2=hint;
} else {
$2=$recv($recv($globals.Hint)._new())._numbers_(hint);
}
$recv($1)._add_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{hint:hint})});
//>>excludeEnd("ctx");
}; }),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "at:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "at: index\x0a\x09^ hints at: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.hints)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09hints do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.hints)._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09hints := {}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.hints=[];
return self;

}; }),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "maxSize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxSize\x0a\x09^ hints inject: 0 into: [:a :c | (a > c  numbers size) ifTrue: [a] ifFalse: [c numbers size]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "ifTrue:ifFalse:", ">", "size", "numbers"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.hints)._inject_into_((0),(function(a,c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(a).__gt([$recv([$recv(c)._numbers()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["numbers"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]))){
return a;
} else {
return $recv($recv(c)._numbers())._size();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxSize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09hints do: [ :hint |\x0a\x09\x09hint printOn: stream.\x0a\x09\x09stream cr ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "printOn:", "cr"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.hints)._do_((function(hint){
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
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Hints);

$core.addMethod(
$core.method({
selector: "size",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ hints size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.hints)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Hints);



$core.addClass("Line", $globals.Object, "Logimage");
$core.setSlots($globals.Line, ["hint", "cells"]);
$core.addMethod(
$core.method({
selector: "=",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "= line\x0a\x09^ (hint = line hint) and: (cells = line cells)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "=", "hint", "cells"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($self.hint).__eq($recv(line)._hint())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_($recv($self.cells).__eq($recv(line)._cells()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{line:line})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "cells",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cells\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.cells;

}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "cells:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cells: anObject\x0a\x09anObject isString ifTrue: [\x0a\x09\x09cells := Cells new: anObject.\x0a\x09\x09^ self].\x0a\x09cells := anObject",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isString", "new:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(anObject)._isString())){
$self.cells=$recv($globals.Cells)._new_(anObject);
return self;
}
$self.cells=anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cells:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "hint",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hint\x0a\x09^ hint",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.hint;

}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "hint:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "hint: anObject\x0a\x09anObject isString ifTrue: [\x0a\x09\x09hint := Hint new: anObject.\x0a\x09\x09^ self ].\x0a\x09hint := anObject",
referencedClasses: ["Hint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isString", "new:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(anObject)._isString())){
$self.hint=$recv($globals.Hint)._new_(anObject);
return self;
}
$self.hint=anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hint:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "isDone",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDone\x0a\x09^ False",
referencedClasses: ["False"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.False;

}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "line:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLine"],
source: "line: aLine\x0a\x09aLine isString ifTrue: [ | parts |\x0a\x09\x09parts := aLine tokenize: '|'.\x0a\x09\x09self hint:  (parts at: 1);\x0a\x09    \x09 cells: (parts at: 2).\x0a\x09\x09^ self ].\x0a\x09self hint:  aLine hint;\x0a\x09     cells: aLine cells",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isString", "tokenize:", "hint:", "at:", "cells:", "hint", "cells"]
}, function ($methodClass){ return function (aLine){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(aLine)._isString())){
var parts;
parts=$recv(aLine)._tokenize_("|");
[$self._hint_([$recv(parts)._at_((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint:"]=1
//>>excludeEnd("ctx");
][0];
[$self._cells_($recv(parts)._at_((2)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells:"]=1
//>>excludeEnd("ctx");
][0];
return self;
}
$self._hint_($recv(aLine)._hint());
$self._cells_($recv(aLine)._cells());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"line:",{aLine:aLine})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "printOn: stream\x0a\x09hint printOn: stream.\x0a\x09cells printOn: stream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:"]
}, function ($methodClass){ return function (stream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self.hint)._printOn_(stream)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printOn:"]=1
//>>excludeEnd("ctx");
][0];
$recv($self.cells)._printOn_(stream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "reducedFirst",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reducedFirst\x0a\x09| dones first |\x0a\x09dones := cells firstDones.\x0a\x09first := dones numbers.\x0a\x09first ifEmpty: [ ^ self trimFirst ].\x0a\x09^ Line\x0a\x09\x09hint: (hint firstRemoved: first size)\x0a\x09\x09cells: (cells copyFrom: (dones size)+1) \x22copy after dones\x22",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["firstDones", "numbers", "ifEmpty:", "trimFirst", "hint:cells:", "firstRemoved:", "size", "copyFrom:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var dones,first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
dones=$recv($self.cells)._firstDones();
first=$recv(dones)._numbers();
$recv(first)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$self._trimFirst()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($globals.Line)._hint_cells_($recv($self.hint)._firstRemoved_([$recv(first)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]),$recv($self.cells)._copyFrom_($recv($recv(dones)._size()).__plus((1))));
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reducedFirst",{dones:dones,first:first})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "reducedLast",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reducedLast\x0a\x09| dones last |\x0a\x09dones := cells lastDones.\x0a\x09last :=  dones numbers.\x0a\x09last ifEmpty: [ ^ self trimLast ].\x0a\x09\x22self assert: ((hint numbers) endsWith: last).\x22\x0a\x09^ Line\x0a\x09\x09hint: (hint lastRemoved: last size)\x0a\x09\x09cells: (cells copyFrom: 1 to: cells size - dones size)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lastDones", "numbers", "ifEmpty:", "trimLast", "hint:cells:", "lastRemoved:", "size", "copyFrom:to:", "-"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var dones,last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
dones=$recv($self.cells)._lastDones();
last=$recv(dones)._numbers();
$recv(last)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$self._trimLast()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($globals.Line)._hint_cells_($recv($self.hint)._lastRemoved_([$recv(last)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]),$recv($self.cells)._copyFrom_to_((1),$recv([$recv($self.cells)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__minus($recv(dones)._size())));
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reducedLast",{dones:dones,last:last})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09^ Line new hint: hint reversed; cells: cells reversed",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:", "new", "reversed", "cells:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Line)._new();
$recv($1)._hint_([$recv($self.hint)._reversed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["reversed"]=1
//>>excludeEnd("ctx");
][0]);
return $recv($1)._cells_($recv($self.cells)._reversed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "trim",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trim\x0a\x09^ Line hint: self hint cells: self cells trim",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:cells:", "hint", "trim", "cells"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_($self._hint(),$recv($self._cells())._trim());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trim",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "trimFirst",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimFirst\x0a\x09^ Line hint: self hint cells: self cells trimFirst",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:cells:", "hint", "trimFirst", "cells"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_($self._hint(),$recv($self._cells())._trimFirst());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimFirst",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);

$core.addMethod(
$core.method({
selector: "trimLast",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimLast\x0a\x09^ Line hint: self hint cells: self cells trimLast",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:cells:", "hint", "trimLast", "cells"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_($self._hint(),$recv($self._cells())._trimLast());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Line);


$core.addMethod(
$core.method({
selector: "hint:cells:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint", "cells"],
source: "hint: hint cells: cells\x0a\x09^ self new hint: hint; cells: cells",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:", "new", "cells:"]
}, function ($methodClass){ return function (hint,cells){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._hint_(hint);
return $recv($1)._cells_(cells);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hint:cells:",{hint:hint,cells:cells})});
//>>excludeEnd("ctx");
}; }),
$globals.Line.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "new: line\x0a\x09^ self new line: line",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["line:", "new"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._line_(line);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{line:line})});
//>>excludeEnd("ctx");
}; }),
$globals.Line.a$cls);


$core.addClass("Logimage", $globals.Object, "Logimage");
$core.setSlots($globals.Logimage, ["row", "col", "grid"]);
$core.addMethod(
$core.method({
selector: "addColHints:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hints"],
source: "addColHints: hints\x0a\x09col add: hints.\x0a\x09self resize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "resize"]
}, function ($methodClass){ return function (hints){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.col)._add_(hints);
$self._resize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addColHints:",{hints:hints})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "addRowHints:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hints"],
source: "addRowHints: hints\x0a\x09row add: hints.\x0a\x09self resize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "resize"]
}, function ($methodClass){ return function (hints){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.row)._add_(hints);
$self._resize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addRowHints:",{hints:hints})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "box:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "box: point\x0a\x09grid box: point",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["box:"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.grid)._box_(point);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"box:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colCellsAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colCellsAt: index\x0a\x09^ grid colAt: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["colAt:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.grid)._colAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colCellsAt:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colHintAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colHintAt: index\x0a\x09^ col at: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.col)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colHintAt:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colHints",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colHints\x0a\x09^ col",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.col;

}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colLineAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "colLineAt: index\x0a\x09^ Line\x0a\x09\x09hint: (self colHintAt: index)\x0a\x09\x09cells: (self colCellsAt: index)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:cells:", "colHintAt:", "colCellsAt:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_($self._colHintAt_(index),$self._colCellsAt_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colLineAt:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "colLines",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colLines\x0a\x09^ (1 to: col size) collect: [ :index |\x0a\x09\x09\x09self colLineAt: index ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "to:", "size", "colLineAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((1)._to_($recv($self.col)._size()))._collect_((function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._colLineAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colLines",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "grid",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "grid\x0a\x09^ grid",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.grid;

}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09row := Hints new.\x0a\x09col := Hints new.\x0a\x09grid := Grid new",
referencedClasses: ["Hints", "Grid"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.row=[$recv($globals.Hints)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$self.col=[$recv($globals.Hints)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$self.grid=$recv($globals.Grid)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "newBox:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "newBox: point\x0a\x09grid newBox: point",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newBox:"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.grid)._newBox_(point);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBox:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "newSpace:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "newSpace: point\x0a\x09grid newSpace: point",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newSpace:"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.grid)._newSpace_(point);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newSpace:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "reset",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09grid := Grid new.\x0a\x09self resize",
referencedClasses: ["Grid"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "resize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.grid=$recv($globals.Grid)._new();
$self._resize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "resize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resize\x0a\x09| newsize |\x0a\x09newsize := Point x: (col size) y: (row size).\x0a\x09grid size: newsize",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:", "size", "size:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var newsize;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newsize=$recv($globals.Point)._x_y_([$recv($self.col)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0],$recv($self.row)._size());
$recv($self.grid)._size_(newsize);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resize",{newsize:newsize})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowCellsAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowCellsAt: index\x0a\x09^ grid rowAt: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rowAt:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.grid)._rowAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowCellsAt:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowHintAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowHintAt: index\x0a\x09^ row at: index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.row)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowHintAt:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowHints",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rowHints\x0a\x09^ row",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.row;

}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowLineAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowLineAt: index\x0a\x09^ Line\x0a\x09\x09hint: (self rowHintAt: index)\x0a\x09\x09cells: (self rowCellsAt: index)",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hint:cells:", "rowHintAt:", "rowCellsAt:"]
}, function ($methodClass){ return function (index){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Line)._hint_cells_($self._rowHintAt_(index),$self._rowCellsAt_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowLineAt:",{index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "rowLines",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rowLines\x0a\x09^ (1 to: row size) collect: [ :index |\x0a\x09\x09\x09self rowLineAt: index ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "to:", "size", "rowLineAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((1)._to_($recv($self.row)._size()))._collect_((function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._rowLineAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowLines",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "space:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["point"],
source: "space: point\x0a\x09grid space: point",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["space:"]
}, function ($methodClass){ return function (point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.grid)._space_(point);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space:",{point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);

$core.addMethod(
$core.method({
selector: "toOld",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toOld\x0a\x09^ grid toOld",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["toOld"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.grid)._toOld();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toOld",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage);


$core.addMethod(
$core.method({
selector: "chat",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chat\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#(       7 2 1 2 1 )\x0a\x09\x09\x09#(   1 1 2 2 3 2 3 )\x0a\x09\x09\x09#(   1 1 3 3 3 3 3 )\x0a\x09\x09\x09#(   7 1 1 3 1 1 3 )\x0a\x09\x09\x09#( 1 1 1 3 3 1 2 2 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 1 1 3 3 3 1 1 )\x0a\x09\x09\x09#( 1 1 1 3 3 3 3 3 )\x0a\x09\x09\x09#( 1 1 1 3 3 3 3 3 )\x0a\x09\x09\x09#(     7 3 3 3 3 3 )\x0a\x09\x09\x09#(         9 3 3 3 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(        7 2 10 7 )\x0a\x09\x09\x09#(          7  1 14 )\x0a\x09\x09\x09#(       1 1 1 1 3 )\x0a\x09\x09\x09#(     1 1 1 3 2 1 )\x0a\x09\x09\x09#(   1 1 5 3 1 3 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(     1 1 9 5 3 1 )\x0a\x09\x09\x09#(          11 7 6 )\x0a\x09\x09\x09#(               29 )\x0a\x09\x09\x09#(             1 24 )\x0a\x09\x09\x09#(             3 26 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(          4 19 1 )\x0a\x09\x09\x09#(        1 5  7 2 )\x0a\x09\x09\x09#(        2 1 12 3 )\x0a\x09\x09\x09#(        1 1  3 12 )\x0a\x09\x09\x09#(      1 1 2  2 2 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(           4 1 4 2 2 1 )\x0a\x09\x09\x09#(       2 2 4 2 4 3 4 3 )\x0a\x09\x09\x09#( 1 3 1 4 1 2 1 5 1 1 1 )\x0a\x09\x09\x09#(   1 5 1 1 6 1 3 1 1 2 )\x0a\x09\x09\x09#(       2 3 1 3 1 3 1 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(     6 2 5 2 3 2 )\x0a\x09\x09\x09#(         6 6 3 4 )\x0a\x09\x09\x09#(   1 4 1 6 1 1 3 )\x0a\x09\x09\x09#( 1 4 1 7 1 1 3 1 )\x0a\x09\x09\x09#( 2 3 2 1 5 1 5 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 4 2 1 3 2 5 2 )\x0a\x09\x09\x09#(   1 3 1 2 4 6 1 )\x0a\x09\x09\x09#(   7 1 1 1 1 7 1 )\x0a\x09\x09\x09#(   6 1 2 2 2 9 1 )\x0a\x09\x09\x09#(         5 2 9 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 6 1 2 4 8 )\x0a\x09\x09\x09#(   6 2 4 9 )\x0a\x09\x09\x09#(     8 5 4 )\x0a\x09\x09\x09#(   2 2 3 2 )\x0a\x09\x09\x09#(   3 4 3 4 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 2 4 3 )\x0a\x09\x09\x09#( 9 6 4 3 2 5 )\x0a\x09\x09\x09#( 1 1 1 2 2 2 8 1 )\x0a\x09\x09\x09#( 1 1 1 2 3 1 2 1 11 1 )\x0a\x09\x09\x09#( 1 6 2 1 4 4 13 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 1 1 6 1 2 14 8 )\x0a\x09\x09\x09#( 1 1 1 2 1 2 6 4 3 )\x0a\x09\x09\x09#( 9 2 12 2 1 )\x0a\x09\x09\x09#( 5 2 1 1 5 3 1 )\x0a\x09\x09\x09#( 1 2 6 2 1 1 1 6 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 1 8 2 2 1 )\x0a\x09\x09\x09#( 2 6 7 1 1 2 4 1 )\x0a\x09\x09\x09#( 8 7 1 3 2 3 )\x0a\x09\x09\x09#( 1 7 6 1 2 3 )\x0a\x09\x09\x09#( 2 2 7 1 5 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 2 7 8 1 3 9 )\x0a\x09\x09\x09#( 9 8 2 2 1 7 1 )\x0a\x09\x09\x09#( 1 7 6 13 1 1 )\x0a\x09\x09\x09#( 2 2 4 10 4 2 )\x0a\x09\x09\x09#( 3 2 5 1 1 8 1 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 7 7 2 1 1 2 )\x0a\x09\x09\x09#( 10 6 1 3 2 )\x0a\x09\x09\x09#( 7 8 1 2 3 2 )\x0a\x09\x09\x09#( 1 1 8 1 4 3 3 )\x0a\x09\x09\x09#( 3 6 8 1 2 2 5 4 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 8 6 2 4 1 10 1 )\x0a\x09\x09\x09#( 1 3 6 5 7 2 9 )\x0a\x09\x09\x09#( 1 2 6 1 6 9 )\x0a\x09\x09\x09#( 4 6 7 2 12 )\x0a\x09\x09\x09#( 11 6 12 7 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 2 7 6 1 1 2 8 )\x0a\x09\x09\x09#( 2 5 2 1 1 1 3 5 )\x0a\x09\x09\x09#( 5 2 1 1 1 8 1 )\x0a\x09\x09\x09#( 1 2 1 1 1 )\x0a\x09\x09\x09#( 3 3 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rows:cols:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._rows_cols_([[(7), (2), (1), (2), (1)], [(1), (1), (2), (2), (3), (2), (3)], [(1), (1), (3), (3), (3), (3), (3)], [(7), (1), (1), (3), (1), (1), (3)], [(1), (1), (1), (3), (3), (1), (2), (2)], [(1), (1), (1), (3), (3), (3), (1), (1)], [(1), (1), (1), (3), (3), (3), (3), (3)], [(1), (1), (1), (3), (3), (3), (3), (3)], [(7), (3), (3), (3), (3), (3)], [(9), (3), (3), (3)], [(7), (2), (10), (7)], [(7), (1), (14)], [(1), (1), (1), (1), (3)], [(1), (1), (1), (3), (2), (1)], [(1), (1), (5), (3), (1), (3), (1)], [(1), (1), (9), (5), (3), (1)], [(11), (7), (6)], [(29)], [(1), (24)], [(3), (26)], [(4), (19), (1)], [(1), (5), (7), (2)], [(2), (1), (12), (3)], [(1), (1), (3), (12)], [(1), (1), (2), (2), (2)], [(4), (1), (4), (2), (2), (1)], [(2), (2), (4), (2), (4), (3), (4), (3)], [(1), (3), (1), (4), (1), (2), (1), (5), (1), (1), (1)], [(1), (5), (1), (1), (6), (1), (3), (1), (1), (2)], [(2), (3), (1), (3), (1), (3), (1), (1)], [(6), (2), (5), (2), (3), (2)], [(6), (6), (3), (4)], [(1), (4), (1), (6), (1), (1), (3)], [(1), (4), (1), (7), (1), (1), (3), (1)], [(2), (3), (2), (1), (5), (1), (5), (1)], [(1), (4), (2), (1), (3), (2), (5), (2)], [(1), (3), (1), (2), (4), (6), (1)], [(7), (1), (1), (1), (1), (7), (1)], [(6), (1), (2), (2), (2), (9), (1)], [(5), (2), (9), (1)], [(6), (1), (2), (4), (8)], [(6), (2), (4), (9)], [(8), (5), (4)], [(2), (2), (3), (2)], [(3), (4), (3), (4)]],[[(2), (4), (3)], [(9), (6), (4), (3), (2), (5)], [(1), (1), (1), (2), (2), (2), (8), (1)], [(1), (1), (1), (2), (3), (1), (2), (1), (11), (1)], [(1), (6), (2), (1), (4), (4), (13)], [(1), (1), (1), (6), (1), (2), (14), (8)], [(1), (1), (1), (2), (1), (2), (6), (4), (3)], [(9), (2), (12), (2), (1)], [(5), (2), (1), (1), (5), (3), (1)], [(1), (2), (6), (2), (1), (1), (1), (6)], [(3), (1), (8), (2), (2), (1)], [(2), (6), (7), (1), (1), (2), (4), (1)], [(8), (7), (1), (3), (2), (3)], [(1), (7), (6), (1), (2), (3)], [(2), (2), (7), (1), (5)], [(2), (7), (8), (1), (3), (9)], [(9), (8), (2), (2), (1), (7), (1)], [(1), (7), (6), (13), (1), (1)], [(2), (2), (4), (10), (4), (2)], [(3), (2), (5), (1), (1), (8), (1), (1)], [(3), (7), (7), (2), (1), (1), (2)], [(10), (6), (1), (3), (2)], [(7), (8), (1), (2), (3), (2)], [(1), (1), (8), (1), (4), (3), (3)], [(3), (6), (8), (1), (2), (2), (5), (4)], [(1), (8), (6), (2), (4), (1), (10), (1)], [(1), (3), (6), (5), (7), (2), (9)], [(1), (2), (6), (1), (6), (9)], [(4), (6), (7), (2), (12)], [(11), (6), (12), (7)], [(2), (7), (6), (1), (1), (2), (8)], [(2), (5), (2), (1), (1), (1), (3), (5)], [(5), (2), (1), (1), (1), (8), (1)], [(1), (2), (1), (1), (1)], [(3), (3)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chat",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);

$core.addMethod(
$core.method({
selector: "coureur",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "coureur\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 11 3 )\x0a\x09\x09\x09#( 3 3 2 3 3 4 )\x0a\x09\x09\x09#( 2 1 2 1 2 1 3 2 4 )\x0a\x09\x09\x09#( 3 3 3 2 10 )\x0a\x09\x09\x09#( 3 2 1 1 2 7 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 5 2 2 6 )\x0a\x09\x09\x09#( 1 2 2 2 4 )\x0a\x09\x09\x09#( 1 3 2 3 2 1 2 )\x0a\x09\x09\x09#( 3 1 2 2 1 1 2 )\x0a\x09\x09\x09#( 4 1 3 3 4 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 4 1 5 2 11 )\x0a\x09\x09\x09#( 2 1 1 3 5 2 5 )\x0a\x09\x09\x09#( 2 2 1 2 3 2 3 3 )\x0a\x09\x09\x09#( 2 1 3 2 2 3 2 2 2 2 )\x0a\x09\x09\x09#( 3 4 1 1 1 2 1 2 3 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 5 1 2 2 2 4 1 )\x0a\x09\x09\x09#( 4 5 5 3 1 4 1 )\x0a\x09\x09\x09#( 4 2 8 1 2 2 3 1 )\x0a\x09\x09\x09#( 2 1 1 3 4 2 2 2 3 1 )\x0a\x09\x09\x09#( 3 3 3 2 2 2 3 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 2 2 2 2 4 2 1 2 1 )\x0a\x09\x09\x09#( 2 1 2 5 1 1 3 2 )\x0a\x09\x09\x09#( 4 2 6 1 2 2 1 )\x0a\x09\x09\x09#( 2 2 2 3 4 2 2 2 1 )\x0a\x09\x09\x09#( 3 1 2 4 2 2 2 2 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 5 2 2 4 9 3 )\x0a\x09\x09\x09#( 4 1 4 10 3 )\x0a\x09\x09\x09#( 6 2 6 5 2 )\x0a\x09\x09\x09#( 5 3 9 5 2 )\x0a\x09\x09\x09#( 4 1 6 5 5 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 1 4 4 3 1 )\x0a\x09\x09\x09#( 4 4 3 1 1 )\x0a\x09\x09\x09#( 4 4 1 1 1 2 )\x0a\x09\x09\x09#( 1 4 4 1 1 1 1 1 )\x0a\x09\x09\x09#( 2 1 4 4 1 1 1 1 1 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 2 4 2 1 1 1 1 1 1 2 )\x0a\x09\x09\x09#( 3 4 1 1 2 1 1 1 2 2 )\x0a\x09\x09\x09#( 1 4 1 1 1 1 2 1 1 2 )\x0a\x09\x09\x09#( 1 3 1 1 2 2 1 1 2 2 )\x0a\x09\x09\x09#( 1 1 1 1 1 3 2 2 1 1 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 2 1 1 1 5 5 1 2 )\x0a\x09\x09\x09#( 2 2 1 2 5 5 2 )\x0a\x09\x09\x09#( 1 2 2 2 2 4 1 2 )\x0a\x09\x09\x09#( 1 5 5 3 2 )\x0a\x09\x09\x09#( 1 5 5 2 15 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 12 2 2 )\x0a\x09\x09\x09#( 3 9 6 3 4 )\x0a\x09\x09\x09#( 10 14 6 )\x0a\x09\x09\x09#( 1 3 4 5 1 5 2 1 1 )\x0a\x09\x09\x09#( 6 2 2 2 2 2 5 2 2 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 1 3 3 1 2 1 1 6 3 )\x0a\x09\x09\x09#( 4 3 3 6 4 )\x0a\x09\x09\x09#( 3 4 2 15 2 )\x0a\x09\x09\x09#( 2 1 2 4 2 2 8 2 )\x0a\x09\x09\x09#( 1 2 2 1 3 2 18 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 4 1 1 2 2 2 5 )\x0a\x09\x09\x09#( 2 2 2 1 7 1 2 1 )\x0a\x09\x09\x09#( 1 2 1 2 1 1 5 2 1 1 3 )\x0a\x09\x09\x09#( 3 3 2 3 2 2 7 4 )\x0a\x09\x09\x09#( 2 2 2 1 1 1 2 2 14 2 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 3 1 1 4 1 1 7 3 )\x0a\x09\x09\x09#( 1 2 4 2 19 )\x0a\x09\x09\x09#( 2 1 4 1 5 3 1 )\x0a\x09\x09\x09#( 1 2 3 9 4 2 )\x0a\x09\x09\x09#( 1 6 6 4 3 2 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 14 11 3 2 )\x0a\x09\x09\x09#( 1 1 4 6 7 2 1 )\x0a\x09\x09\x09#( 4 2 2 2 3 11 2 1 )\x0a\x09\x09\x09#( 4 2 5 4 4 1 )\x0a\x09\x09\x09#( 3 3 2 8 6 6 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 5 4 3 14 3 1 )\x0a\x09\x09\x09#( 4 4 2 9 2 1 )\x0a\x09\x09\x09#( 6 1 11 5 9 1 )\x0a\x09\x09\x09#( 6 1 2 3 9 1 )\x0a\x09\x09\x09#( 3 3 2 6 2 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#( 3 14 3 1 1 )\x0a\x09\x09\x09#( 3 2 9 5 3 2 )\x0a\x09\x09\x09#( 2 2 6 5 2 4 )\x0a\x09\x09\x09#( 3 6 8 1 )\x0a\x09\x09\x09#( 10 2 3 1 1 )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rows:cols:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._rows_cols_([[(11), (3)], [(3), (3), (2), (3), (3), (4)], [(2), (1), (2), (1), (2), (1), (3), (2), (4)], [(3), (3), (3), (2), (10)], [(3), (2), (1), (1), (2), (7)], [(1), (5), (2), (2), (6)], [(1), (2), (2), (2), (4)], [(1), (3), (2), (3), (2), (1), (2)], [(3), (1), (2), (2), (1), (1), (2)], [(4), (1), (3), (3), (4)], [(4), (1), (5), (2), (11)], [(2), (1), (1), (3), (5), (2), (5)], [(2), (2), (1), (2), (3), (2), (3), (3)], [(2), (1), (3), (2), (2), (3), (2), (2), (2), (2)], [(3), (4), (1), (1), (1), (2), (1), (2), (3), (1)], [(3), (5), (1), (2), (2), (2), (4), (1)], [(4), (5), (5), (3), (1), (4), (1)], [(4), (2), (8), (1), (2), (2), (3), (1)], [(2), (1), (1), (3), (4), (2), (2), (2), (3), (1)], [(3), (3), (3), (2), (2), (2), (3), (1)], [(2), (2), (2), (2), (4), (2), (1), (2), (1)], [(2), (1), (2), (5), (1), (1), (3), (2)], [(4), (2), (6), (1), (2), (2), (1)], [(2), (2), (2), (3), (4), (2), (2), (2), (1)], [(3), (1), (2), (4), (2), (2), (2), (2)], [(5), (2), (2), (4), (9), (3)], [(4), (1), (4), (10), (3)], [(6), (2), (6), (5), (2)], [(5), (3), (9), (5), (2)], [(4), (1), (6), (5), (5), (1)], [(3), (1), (4), (4), (3), (1)], [(4), (4), (3), (1), (1)], [(4), (4), (1), (1), (1), (2)], [(1), (4), (4), (1), (1), (1), (1), (1)], [(2), (1), (4), (4), (1), (1), (1), (1), (1), (1)], [(1), (2), (4), (2), (1), (1), (1), (1), (1), (1), (2)], [(3), (4), (1), (1), (2), (1), (1), (1), (2), (2)], [(1), (4), (1), (1), (1), (1), (2), (1), (1), (2)], [(1), (3), (1), (1), (2), (2), (1), (1), (2), (2)], [(1), (1), (1), (1), (1), (3), (2), (2), (1), (1), (1)], [(1), (2), (1), (1), (1), (5), (5), (1), (2)], [(2), (2), (1), (2), (5), (5), (2)], [(1), (2), (2), (2), (2), (4), (1), (2)], [(1), (5), (5), (3), (2)], [(1), (5), (5), (2), (15)]],[[(12), (2), (2)], [(3), (9), (6), (3), (4)], [(10), (14), (6)], [(1), (3), (4), (5), (1), (5), (2), (1), (1)], [(6), (2), (2), (2), (2), (2), (5), (2), (2)], [(1), (3), (3), (1), (2), (1), (1), (6), (3)], [(4), (3), (3), (6), (4)], [(3), (4), (2), (15), (2)], [(2), (1), (2), (4), (2), (2), (8), (2)], [(1), (2), (2), (1), (3), (2), (18)], [(4), (1), (1), (2), (2), (2), (5)], [(2), (2), (2), (1), (7), (1), (2), (1)], [(1), (2), (1), (2), (1), (1), (5), (2), (1), (1), (3)], [(3), (3), (2), (3), (2), (2), (7), (4)], [(2), (2), (2), (1), (1), (1), (2), (2), (14), (2)], [(3), (3), (1), (1), (4), (1), (1), (7), (3)], [(1), (2), (4), (2), (19)], [(2), (1), (4), (1), (5), (3), (1)], [(1), (2), (3), (9), (4), (2)], [(1), (6), (6), (4), (3), (2), (1)], [(3), (14), (11), (3), (2)], [(1), (1), (4), (6), (7), (2), (1)], [(4), (2), (2), (2), (3), (11), (2), (1)], [(4), (2), (5), (4), (4), (1)], [(3), (3), (2), (8), (6), (6), (1)], [(5), (4), (3), (14), (3), (1)], [(4), (4), (2), (9), (2), (1)], [(6), (1), (11), (5), (9), (1)], [(6), (1), (2), (3), (9), (1)], [(3), (3), (2), (6), (2), (1)], [(3), (14), (3), (1), (1)], [(3), (2), (9), (5), (3), (2)], [(2), (2), (6), (5), (2), (4)], [(3), (6), (8), (1)], [(10), (2), (3), (1), (1)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"coureur",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);

$core.addMethod(
$core.method({
selector: "grandVide",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "grandVide\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x09#(  )\x0a\x09\x09\x22--------------------------------\x22\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rows:cols:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._rows_cols_([[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"grandVide",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);

$core.addMethod(
$core.method({
selector: "joconde",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "joconde\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 4 )\x0a\x09\x09\x09#( 1 2 )\x0a\x09\x09\x09#( 1 2 )\x0a\x09\x09\x09#( 1 2 )\x0a\x09\x09\x09#( 1 2 )\x0a\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 1 1 )\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 3 3 )\x0a\x09\x09\x09#( 9 )\x0a\x0a\x09\x09\x09#( 9 )\x0a\x09\x09\x09#( 10 )\x0a\x09\x09\x09#( 1 1 1 2 )\x0a\x09\x09\x09#( 2 4 )\x0a\x09\x09\x09#( 3 4 ) )\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 4 )\x0a\x09\x09\x09#( 3 2 )\x0a\x09\x09\x09#( 6 1 )\x0a\x09\x09\x09#( 11 )\x0a\x09\x09\x09#( 1 1 4 )\x0a\x0a\x09\x09\x09#( 1 4 )\x0a\x09\x09\x09#( 1 3 2 )\x0a\x09\x09\x09#( 6 4 2 )\x0a\x09\x09\x09#( 14 )\x0a\x09\x09\x09#( 8 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rows:cols:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._rows_cols_([[(4)], [(1), (2)], [(1), (2)], [(1), (2)], [(1), (2)], [(2), (2)], [(1), (1)], [(2), (2)], [(3), (3)], [(9)], [(9)], [(10)], [(1), (1), (1), (2)], [(2), (4)], [(3), (4)]],[[(4)], [(3), (2)], [(6), (1)], [(11)], [(1), (1), (4)], [(1), (4)], [(1), (3), (2)], [(6), (4), (2)], [(14)], [(8)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"joconde",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);

$core.addMethod(
$core.method({
selector: "question",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "question\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 3 )\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 1 1 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( )\x0a\x09\x09\x09#( 1 )\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09\x09#( 1 3 1 )\x0a\x09\x09\x09#( 2 2 )\x0a\x09\x09\x09#( 3 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rows:cols:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._rows_cols_([[(3)], [(2), (2)], [(1), (1)], [(2)], [(2)], [(1)], [(1)], [], [(1)]],[[(2)], [(2)], [(1), (3), (1)], [(2), (2)], [(3)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"question",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);

$core.addMethod(
$core.method({
selector: "rows:cols:",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rows", "cols"],
source: "rows: rows cols: cols\x0a\x09| l |\x0a\x09l := self new.\x0a\x09rows do: [ :hint | l addRowHints: hint ].\x0a\x09cols do: [ :hint | l addColHints: hint ].\x0a\x09^ l",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "addRowHints:", "addColHints:"]
}, function ($methodClass){ return function (rows,cols){
var self=this,$self=this;
var l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
l=$self._new();
[$recv(rows)._do_((function(hint){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(l)._addRowHints_(hint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({hint:hint},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
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
}, function($ctx1) {$ctx1.fill(self,"rows:cols:",{rows:rows,cols:cols,l:l})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);

$core.addMethod(
$core.method({
selector: "simple",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "simple\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 1 )\x0a\x09\x09\x09#( 2 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rows:cols:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._rows_cols_([[(1)], [(2)]],[[(1)], [(2)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"simple",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);

$core.addMethod(
$core.method({
selector: "vainqueur",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vainqueur\x0a\x09^ self\x0a\x09\x09rows: #(\x0a\x09\x09\x09#( 5 )\x0a\x09\x09\x09#( 4 7 )\x0a\x09\x09\x09#( 2 1 9 2 )\x0a\x09\x09\x09#( 1 1 9 1 2)\x0a\x09\x09\x09#( 2 1 2 3 1 1 )\x0a\x0a\x09\x09\x09#( 2 1 1 1 1 1 2 1 )\x0a\x09\x09\x09#( 2 1 1 1 2 3 )\x0a\x09\x09\x09#( 6 1 1 1 2 2 )\x0a\x09\x09\x09#( 5 4 4 2 )\x0a\x09\x09\x09#( 6 1 5 )\x0a\x0a\x09\x09\x09#( 4 5 5 )\x0a\x09\x09\x09#( 4 6 5 )\x0a\x09\x09\x09#( 7 13 2 2 )\x0a\x09\x09\x09#( 2 12 2 4 )\x0a\x09\x09\x09#( 5 2 14 3 3 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 2 13 3 )\x0a\x09\x09\x09#( 3 3 )\x0a\x09\x09\x09#( 5 4 )\x0a\x09\x09\x09#( 17 )\x0a\x09\x09\x09#( 11 )\x0a\x0a\x09\x09\x09#( 7 2 )\x0a\x09\x09\x09#( 2 2 1 )\x0a\x09\x09\x09#( 7 1 )\x0a\x09\x09\x09#( 10 1 1 1 1 11 )\x0a\x09\x09\x09#( 5 2 1 1 1 1 2 2 2 5 )\x0a\x0a\x09\x09\x09#( 4 3 1 1 1 2 1 1 2 3 4 )\x0a\x09\x09\x09#( 3 4 1 1 1 2 1 2 4 3 )\x0a\x09\x09\x09#( 2 4 2 5 1 1 4 4 2 )\x0a\x09\x09\x09#( 1 5 2 1 1 4 4 5 1 )\x0a\x09\x09\x09#( 5 3 1 1 1 5 6 )\x0a\x0a\x09\x09\x09#( 6 3 1 1 5 5 6 )\x0a\x09\x09\x09#( 5 3 3 1 5 5 6 )\x0a\x09\x09\x09#( 5 3 6 5 5 6 )\x0a\x09\x09\x09#( 4 5 4 6 6 5 )\x0a\x09\x09\x09#( 4 6 8 6 5 )\x0a\x09\x09)\x0a\x09\x09cols: #(\x0a\x09\x09\x09#( 1 1 6 5 )\x0a\x09\x09\x09#( 1 1 5 6 )\x0a\x09\x09\x09#( 1 1 4 7 )\x0a\x09\x09\x09#( 3 1 1 3 8 )\x0a\x09\x09\x09#( 2 2 1 2 2 7 )\x0a\x0a\x09\x09\x09#( 1 2 1 2 1 6 2 )\x0a\x09\x09\x09#( 1 2 2 2 6 4 )\x0a\x09\x09\x09#( 3 3 2 3 4 6 )\x0a\x09\x09\x09#( 2 4 1 2 1 8 )\x0a\x09\x09\x09#( 6 1 2 8 2 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 6 1 2 2 1 )\x0a\x09\x09\x09#( 14 16 )\x0a\x09\x09\x09#( 4 1 5 5 1 3 )\x0a\x09\x09\x09#( 4 1 1 1 4 3 1 1 2 )\x0a\x09\x09\x09#( 4 1 1 4 3 1 1 3 )\x0a\x0a\x09\x09\x09#( 4 1 1 4 3 11 1 )\x0a\x09\x09\x09#( 4 1 1 1 4 3 1 2)\x0a\x09\x09\x09#( 5 2 1 4 3 4 6 )\x0a\x09\x09\x09#( 4 1 5 2 1 4 5 )\x0a\x09\x09\x09#( 7 6 2 1 1 1 5 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 8 4 1 1 5 )\x0a\x09\x09\x09#( 9 8 2 5 )\x0a\x09\x09\x09#( 9 2 3 1 )\x0a\x09\x09\x09#( 2 3 1 3 8 )\x0a\x09\x09\x09#( 2 2 1 1 12 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 1 2 1 2 12 )\x0a\x09\x09\x09#( 1 2 1 1 1 8 )\x0a\x09\x09\x09#( 2 1 1 2 4 5 )\x0a\x09\x09\x09#( 4 1 1 7 2 )\x0a\x09\x09\x09#( 1 2 1 8 )\x0a\x09\x09\x09\x0a\x09\x09\x09#( 1 1 2 9 )\x0a\x09\x09\x09#( 1 1 3 8 )\x0a\x09\x09\x09#( 1 2 4 7 )\x0a\x09\x09\x09#( 2 1 5 6 )\x0a\x09\x09\x09#( 1 1 6 5 )\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rows:cols:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._rows_cols_([[(5)], [(4), (7)], [(2), (1), (9), (2)], [(1), (1), (9), (1), (2)], [(2), (1), (2), (3), (1), (1)], [(2), (1), (1), (1), (1), (1), (2), (1)], [(2), (1), (1), (1), (2), (3)], [(6), (1), (1), (1), (2), (2)], [(5), (4), (4), (2)], [(6), (1), (5)], [(4), (5), (5)], [(4), (6), (5)], [(7), (13), (2), (2)], [(2), (12), (2), (4)], [(5), (2), (14), (3), (3)], [(2), (13), (3)], [(3), (3)], [(5), (4)], [(17)], [(11)], [(7), (2)], [(2), (2), (1)], [(7), (1)], [(10), (1), (1), (1), (1), (11)], [(5), (2), (1), (1), (1), (1), (2), (2), (2), (5)], [(4), (3), (1), (1), (1), (2), (1), (1), (2), (3), (4)], [(3), (4), (1), (1), (1), (2), (1), (2), (4), (3)], [(2), (4), (2), (5), (1), (1), (4), (4), (2)], [(1), (5), (2), (1), (1), (4), (4), (5), (1)], [(5), (3), (1), (1), (1), (5), (6)], [(6), (3), (1), (1), (5), (5), (6)], [(5), (3), (3), (1), (5), (5), (6)], [(5), (3), (6), (5), (5), (6)], [(4), (5), (4), (6), (6), (5)], [(4), (6), (8), (6), (5)]],[[(1), (1), (6), (5)], [(1), (1), (5), (6)], [(1), (1), (4), (7)], [(3), (1), (1), (3), (8)], [(2), (2), (1), (2), (2), (7)], [(1), (2), (1), (2), (1), (6), (2)], [(1), (2), (2), (2), (6), (4)], [(3), (3), (2), (3), (4), (6)], [(2), (4), (1), (2), (1), (8)], [(6), (1), (2), (8), (2)], [(6), (1), (2), (2), (1)], [(14), (16)], [(4), (1), (5), (5), (1), (3)], [(4), (1), (1), (1), (4), (3), (1), (1), (2)], [(4), (1), (1), (4), (3), (1), (1), (3)], [(4), (1), (1), (4), (3), (11), (1)], [(4), (1), (1), (1), (4), (3), (1), (2)], [(5), (2), (1), (4), (3), (4), (6)], [(4), (1), (5), (2), (1), (4), (5)], [(7), (6), (2), (1), (1), (1), (5)], [(8), (4), (1), (1), (5)], [(9), (8), (2), (5)], [(9), (2), (3), (1)], [(2), (3), (1), (3), (8)], [(2), (2), (1), (1), (12)], [(1), (2), (1), (2), (12)], [(1), (2), (1), (1), (1), (8)], [(2), (1), (1), (2), (4), (5)], [(4), (1), (1), (7), (2)], [(1), (2), (1), (8)], [(1), (1), (2), (9)], [(1), (1), (3), (8)], [(1), (2), (4), (7)], [(2), (1), (5), (6)], [(1), (1), (6), (5)]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vainqueur",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Logimage.a$cls);


$core.addClass("Strategies", $globals.Object, "Logimage");
$core.setSlots($globals.Strategies, ["list"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Strategies.comment="List of strategy";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name"],
source: "at: name\x0a\x09^ list at: name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (name){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.list)._at_(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{name:name})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategies);

$core.addMethod(
$core.method({
selector: "atRandom",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atRandom\x0a\x09^ list values atRandom",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["atRandom", "values"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self.list)._values())._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atRandom",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategies);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09list valuesDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valuesDo:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.list)._valuesDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategies);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22TODO should be autodeclared by each instance !\x22\x0a\x09list := #{\x0a\x09\x09#spacesonly -> StratSpacesOnly.\x0a\x09\x09#allhintdone -> StratAllHintDone.\x0a\x09\x09#countalldone -> StratCountAllDone.\x0a\x09\x09#recover -> StratRecover.\x0a\x09\x09#notreached -> StratNotReached.\x0a\x09\x09#firstcover -> StratFirstCover.\x0a\x09\x09#lastcover -> StratLastCover.\x0a\x09\x09#minspace -> StratMinSpace.\x0a\x09\x09#firstdone -> StratFirstDone.\x0a\x09\x09#lastdone -> StratLastDone.\x0a\x09\x09#testbox -> StratTestBox.\x0a\x09\x09#firstcutspace -> StratFirstCutSpace.\x0a\x09\x09#lastcutspace -> StratLastCutSpace.\x0a\x09\x09#firstmore -> StratFirstMore.\x0a\x09\x09#lastmore -> StratLastMore.\x0a\x09\x09#firstnotreachedmore -> StratFirstNotReachedMore.\x0a\x09\x09#lastnotreachedmore -> StratLastNotReachedMore.\x0a\x09\x09#firstposmore -> StratFirstPosMore.\x0a\x09\x09#lastposmore -> StratLastPosMore.\x0a\x09\x09#firstones -> StratFirstOnes.\x0a\x09\x09#lastones -> StratLastOnes.\x0a\x09\x09#firstspacesifnotfit -> StratFirstSpacesIfNotFit.\x0a\x09\x09#lastspacesifnotfit -> StratLastSpacesIfNotFit.\x0a\x09\x09}\x0a\x09\x09collect: [ :strat | strat new ]",
referencedClasses: ["StratSpacesOnly", "StratAllHintDone", "StratCountAllDone", "StratRecover", "StratNotReached", "StratFirstCover", "StratLastCover", "StratMinSpace", "StratFirstDone", "StratLastDone", "StratTestBox", "StratFirstCutSpace", "StratLastCutSpace", "StratFirstMore", "StratLastMore", "StratFirstNotReachedMore", "StratLastNotReachedMore", "StratFirstPosMore", "StratLastPosMore", "StratFirstOnes", "StratLastOnes", "StratFirstSpacesIfNotFit", "StratLastSpacesIfNotFit"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.list=$recv($globals.HashedCollection._newFromPairs_(["spacesonly",$globals.StratSpacesOnly,"allhintdone",$globals.StratAllHintDone,"countalldone",$globals.StratCountAllDone,"recover",$globals.StratRecover,"notreached",$globals.StratNotReached,"firstcover",$globals.StratFirstCover,"lastcover",$globals.StratLastCover,"minspace",$globals.StratMinSpace,"firstdone",$globals.StratFirstDone,"lastdone",$globals.StratLastDone,"testbox",$globals.StratTestBox,"firstcutspace",$globals.StratFirstCutSpace,"lastcutspace",$globals.StratLastCutSpace,"firstmore",$globals.StratFirstMore,"lastmore",$globals.StratLastMore,"firstnotreachedmore",$globals.StratFirstNotReachedMore,"lastnotreachedmore",$globals.StratLastNotReachedMore,"firstposmore",$globals.StratFirstPosMore,"lastposmore",$globals.StratLastPosMore,"firstones",$globals.StratFirstOnes,"lastones",$globals.StratLastOnes,"firstspacesifnotfit",$globals.StratFirstSpacesIfNotFit,"lastspacesifnotfit",$globals.StratLastSpacesIfNotFit]))._collect_((function(strat){
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
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategies);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09list keysAndValuesDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keysAndValuesDo:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.list)._keysAndValuesDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategies);


$core.setSlots($globals.Strategies.a$cls, ["instance"]);
$core.addMethod(
$core.method({
selector: "instance",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.instance;
if($1 == null || $1.a$nil){
$self.instance=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return $self.instance;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategies.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldNotImplement"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategies.a$cls);

$core.addMethod(
$core.method({
selector: "reset",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09instance := nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.instance=nil;
return self;

}; }),
$globals.Strategies.a$cls);


$core.addClass("Strategist", $globals.Object, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Strategist.comment="I apply (analyse, get a solution then apply) one or more strategies on a logimage, or a line.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "apply:on:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy on: logimage\x0a\x09self apply: strategy onRowOf: logimage.\x0a\x09self apply: strategy onColOf: logimage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["apply:onRowOf:", "apply:onColOf:"]
}, function ($methodClass){ return function (strategy,logimage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._apply_onRowOf_(strategy,logimage);
$self._apply_onColOf_(strategy,logimage);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:on:",{strategy:strategy,logimage:logimage})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:onColOf:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy onColOf: logimage\x0a\x091 to: logimage grid size x do: [ :x | | sol line reduced start |\x0a\x09\x09line := logimage colLineAt: x.\x0a\x22Transcript show: 'apply on col: '; show: x; show: ' => '; show: line; cr.\x22\x0a\x09\x09reduced := line reducedFirst.\x0a\x09\x09start := line cells size - reduced cells size.\x0a\x09\x09sol := strategy analyse: reduced reducedLast.\x0a\x09\x09self setSol: sol on: logimage atCol: x after: start ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["to:do:", "x", "size", "grid", "colLineAt:", "reducedFirst", "-", "cells", "analyse:", "reducedLast", "setSol:on:atCol:after:"]
}, function ($methodClass){ return function (strategy,logimage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(1)._to_do_($recv([$recv($recv(logimage)._grid())._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])._x(),(function(x){
var sol,line,reduced,start;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
line=$recv(logimage)._colLineAt_(x);
reduced=$recv(line)._reducedFirst();
start=$recv([$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__minus($recv($recv(reduced)._cells())._size());
sol=$recv(strategy)._analyse_($recv(reduced)._reducedLast());
return $self._setSol_on_atCol_after_(sol,logimage,x,start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,sol:sol,line:line,reduced:reduced,start:start},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:onColOf:",{strategy:strategy,logimage:logimage})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "apply:onRowOf:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strategy", "logimage"],
source: "apply: strategy onRowOf: logimage\x0a\x091 to: logimage grid size y do: [ :y | | sol line reduced start |\x0a\x09\x09line := logimage rowLineAt: y.\x0a\x22Transcript show: 'apply on row: '; show: y; show: ' => '; show: line; cr.\x22\x0a\x09\x09reduced := line reducedFirst.\x0a\x09\x09start := line cells size - reduced cells size.\x0a\x09\x09sol := strategy analyse: reduced reducedLast.\x0a\x09\x09self setSol: sol on: logimage atRow: y after: start ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["to:do:", "y", "size", "grid", "rowLineAt:", "reducedFirst", "-", "cells", "analyse:", "reducedLast", "setSol:on:atRow:after:"]
}, function ($methodClass){ return function (strategy,logimage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(1)._to_do_($recv([$recv($recv(logimage)._grid())._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])._y(),(function(y){
var sol,line,reduced,start;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
line=$recv(logimage)._rowLineAt_(y);
reduced=$recv(line)._reducedFirst();
start=$recv([$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__minus($recv($recv(reduced)._cells())._size());
sol=$recv(strategy)._analyse_($recv(reduced)._reducedLast());
return $self._setSol_on_atRow_after_(sol,logimage,y,start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y,sol:sol,line:line,reduced:reduced,start:start},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:onRowOf:",{strategy:strategy,logimage:logimage})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "setSol:on:at:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell", "logimage", "point"],
source: "setSol: cell on: logimage at: point\x0a\x09(point x > logimage grid size x) ifTrue: [ ^ self ].\x0a\x09(point y > logimage grid size y) ifTrue: [ ^ self ].\x0a\x09cell isBox ifTrue: [ logimage newBox: point. ^ self ].\x0a\x09cell isSpace ifTrue: [ logimage newSpace: point. ^ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", ">", "x", "size", "grid", "y", "isBox", "newBox:", "isSpace", "newSpace:"]
}, function ($methodClass){ return function (cell,logimage,point){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv(point)._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv([$recv([$recv(logimage)._grid()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["grid"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])){
return self;
}
if($core.assert($recv([$recv(point)._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv($recv($recv(logimage)._grid())._size())._y()))){
return self;
}
if($core.assert($recv(cell)._isBox())){
$recv(logimage)._newBox_(point);
return self;
}
if($core.assert($recv(cell)._isSpace())){
$recv(logimage)._newSpace_(point);
return self;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSol:on:at:",{cell:cell,logimage:logimage,point:point})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "setSol:on:atCol:after:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells", "logimage", "x", "start"],
source: "setSol: cells on: logimage atCol: x after: start\x0a\x09cells cells withIndexDo: [ :cell :y |\x0a\x09\x09self setSol: cell on: logimage at: x@(y+start) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "cells", "setSol:on:at:", "@", "+"]
}, function ($methodClass){ return function (cells,logimage,x,start){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(cells)._cells())._withIndexDo_((function(cell,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setSol_on_at_(cell,logimage,$recv(x).__at($recv(y).__plus(start)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSol:on:atCol:after:",{cells:cells,logimage:logimage,x:x,start:start})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "setSol:on:atRow:after:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells", "logimage", "y", "start"],
source: "setSol: cells on: logimage atRow: y after: start\x0a\x09cells cells withIndexDo: [ :cell :x |\x0a\x09\x09self setSol: cell on: logimage at: (x+start)@y ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "cells", "setSol:on:at:", "@", "+"]
}, function ($methodClass){ return function (cells,logimage,y,start){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(cells)._cells())._withIndexDo_((function(cell,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setSol_on_at_(cell,logimage,$recv($recv(x).__plus(start)).__at(y));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSol:on:atRow:after:",{cells:cells,logimage:logimage,y:y,start:start})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategist);

$core.addMethod(
$core.method({
selector: "solve:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["logimage"],
source: "solve: logimage\x0a\x09Strategies reset.\x0a\x0910 timesRepeat: [\x0a\x09\x09Strategies instance do: [ :strategy |\x0a\x09\x09\x09self apply: strategy on: logimage ]\x0a\x09\x09]\x0a\x2250 timesRepeat: [ | strategy |\x0a\x09strategy := Strategies instance atRandom.\x0a\x09Transcript show: strategy class name; cr.\x0a\x09self apply: strategy on: logimage ]\x22",
referencedClasses: ["Strategies"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reset", "timesRepeat:", "do:", "instance", "apply:on:"]
}, function ($methodClass){ return function (logimage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Strategies)._reset();
(10)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Strategies)._instance())._do_((function(strategy){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._apply_on_(strategy,logimage);
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
}, function($ctx1) {$ctx1.fill(self,"solve:",{logimage:logimage})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategist);



$core.addClass("Strategy", $globals.Object, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Strategy.comment="I analyse a line and returns a solution with spaces and boxes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09^ Cells new",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategy);

$core.addMethod(
$core.method({
selector: "id",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ self class id",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["id", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategy);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBidirectional",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategy);

$core.addMethod(
$core.method({
selector: "none",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "none\x0a\x09^ Cells new",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Cells)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"none",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategy);


$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09line isString ifTrue: [\x0a\x09\x09^ self new analyse: (Line new: line) ].\x0a\x09^ self new analyse: line",
referencedClasses: ["Line"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isString", "analyse:", "new", "new:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv(line)._isString())){
return [$recv([$self._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._analyse_($recv($globals.Line)._new_(line))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["analyse:"]=1
//>>excludeEnd("ctx");
][0];
}
return $recv($self._new())._analyse_(line);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategy.a$cls);

$core.addMethod(
$core.method({
selector: "id",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09| name |\x0a\x09name := self name.\x0a\x09name := name copyFrom: 6 to: (name size).\x0a\x09name := name asLowercase.\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name", "copyFrom:to:", "size", "asLowercase"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var name;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
name=$self._name();
name=$recv(name)._copyFrom_to_((6),$recv(name)._size());
name=$recv(name)._asLowercase();
return name;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{name:name})});
//>>excludeEnd("ctx");
}; }),
$globals.Strategy.a$cls);


$core.addClass("StratAllHintDone", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratAllHintDone.comment="If all hints are resolved, all cell are filled";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09(line hint) = (Hint new: (line cells numbers)) ifFalse: [ ^ self none ].\x0a\x09\x22If all hints are resolved, all cell are filled\x22\x0a\x09sol := Cells new.\x0a\x09\x22replace unknown by spaces\x22\x0a\x09line cells do: [ :c |\x0a\x09\x09c isUnknown\x0a\x09\x09\x09ifFalse: [ sol addUnknowns: 1 ]\x0a\x09\x09\x09ifTrue: [ sol addSpaces: 1 ] ].\x0a\x09^ sol",
referencedClasses: ["Hint", "Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "hint", "new:", "numbers", "cells", "none", "new", "do:", "ifFalse:ifTrue:", "isUnknown", "addUnknowns:", "addSpaces:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($recv(line)._hint()).__eq($recv($globals.Hint)._new_($recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._numbers())))){
return $self._none();
}
sol=$recv($globals.Cells)._new();
$recv($recv(line)._cells())._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(c)._isUnknown())){
return $recv(sol)._addSpaces_((1));
} else {
return $recv(sol)._addUnknowns_((1));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratAllHintDone);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.StratAllHintDone);



$core.addClass("StratCount", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratCount.comment="I am a helper to implement strategy.\x0aI give some messages to count different sort of cells.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "free:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "free: line\x0a\x09\x22I return the number of cells that are free to move\x22\x0a\x0a\x09\x22if no more hint, no free spaces\x22\x0a\x09(line hint size = 0) ifTrue: [ ^ 0 ].\x0a\x09^ (line cells size) - (self occupation: line hint)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "size", "hint", "-", "cells", "occupation:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq((0)))){
return (0);
}
return $recv($recv($recv(line)._cells())._size()).__minus($self._occupation_($recv(line)._hint()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"free:",{line:line})});
//>>excludeEnd("ctx");
}; }),
$globals.StratCount);

$core.addMethod(
$core.method({
selector: "occupation:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "occupation: hint\x0a\x09\x22I return the number of cells filled for all numbers in hint,\x0a\x09 with one space between each, minus one (the last)\x22\x0a\x09(hint size = 0) ifTrue: [ ^ 0 ].\x0a\x09^ (self sum: hint) + hint size - 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "size", "-", "+", "sum:"]
}, function ($methodClass){ return function (hint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(hint)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq((0)))){
return (0);
}
return $recv($recv($self._sum_(hint)).__plus($recv(hint)._size())).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"occupation:",{hint:hint})});
//>>excludeEnd("ctx");
}; }),
$globals.StratCount);

$core.addMethod(
$core.method({
selector: "sum:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "sum: hint\x0a\x09\x22I return the sum of all numbers, without spaces\x22\x0a\x09^ hint numbers inject: 0 into: [ :s :n | s+n ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "numbers", "+"]
}, function ($methodClass){ return function (hint){
var self=this,$self=this;
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
}, function($ctx1) {$ctx1.fill(self,"sum:",{hint:hint})});
//>>excludeEnd("ctx");
}; }),
$globals.StratCount);



$core.addClass("StratCountAllDone", $globals.StratCount, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratCountAllDone.comment="I try to detect if a line is filled with boxes and spaces, ie no more rooms.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09\x22If some space remaining, could not find solution\x22\x0a\x09(self free: line) = 0\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x09\x22If no space remaining, all cell are filled\x22\x0a\x09sol := Cells new.\x0a\x09line hint numbers do: [ :n |\x0a\x09\x09sol addBoxes: n;\x0a\x09\x09\x09addSpaces: 1 ].\x0a\x09\x22remove last space if line full\x22\x0a\x09^ sol size: (line cells size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "free:", "none", "new", "do:", "numbers", "hint", "addBoxes:", "addSpaces:", "size:", "size", "cells"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if(!$core.assert($recv($self._free_(line)).__eq((0)))){
return $self._none();
}
sol=$recv($globals.Cells)._new();
$recv($recv($recv(line)._hint())._numbers())._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=sol;
$recv($1)._addBoxes_(n);
return $recv($1)._addSpaces_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv(sol)._size_($recv($recv(line)._cells())._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratCountAllDone);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.StratCountAllDone);



$core.addClass("StratRecover", $globals.StratCount, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratRecover.comment="I calculate free available moves. I add box on hint that are bigger then free, then recovers.\x0aExample: hint: 3 on 4 spaces, give 1 free and then | ? X X ? |\x0aDuplicate 'StratAllDone' if free cells are  0 !";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| free sol |\x0a\x09free := self free: line.\x0a\x09sol := Cells new.\x0a\x09line hint do: [ :n |\x0a\x09\x09sol addUnknowns: (n min: free);\x0a\x09\x09\x09addBoxes: (n - free);\x0a\x09\x09\x09addUnknowns: 1 ].\x0a\x09\x22remove last unknown if line full\x22\x0a\x09sol := sol size: (line cells size).\x0a\x09(line cells isBetter: sol) ifFalse: [ ^ self none ].\x0a\x09^ sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["free:", "new", "do:", "hint", "addUnknowns:", "min:", "addBoxes:", "-", "size:", "size", "cells", "ifFalse:", "isBetter:", "none"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var free,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
free=$self._free_(line);
sol=$recv($globals.Cells)._new();
$recv($recv(line)._hint())._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=sol;
[$recv($1)._addUnknowns_($recv(n)._min_(free))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["addUnknowns:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._addBoxes_($recv(n).__minus(free));
return $recv($1)._addUnknowns_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
sol=$recv(sol)._size_($recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._size());
if(!$core.assert($recv($recv(line)._cells())._isBetter_(sol))){
return $self._none();
}
return sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,free:free,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratRecover);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.StratRecover);



$core.addClass("StratFirstBox", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstBox.comment="I am a base for strategy based on first box inside the first hint.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "firstBox:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "firstBox: line\x0a\x09\x22analyse a line to detect if a box is inside the first hint\x22\x0a\x09| first |\x0a\x09\x22check if one hint min\x22\x0a\x09line hint isEmpty ifTrue: [ ^ nil ].\x0a\x09\x22get first box\x22\x0a\x09first := line cells firstBox.\x0a\x09\x22no box, no sol\x22\x0a\x09(first at: #pos) > 0 ifFalse: [ ^ nil ].\x0a\x09\x22test hint over first box\x22\x0a\x09line hint first >= (first at: #pos) ifFalse: [ ^ nil ].\x0a\x09^ first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "hint", "firstBox", "cells", "ifFalse:", ">", "at:", ">=", "first"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=1
//>>excludeEnd("ctx");
][0])._isEmpty())){
return nil;
}
first=$recv($recv(line)._cells())._firstBox();
if(!$core.assert($recv([$recv(first)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__gt((0)))){
return nil;
}
if(!$core.assert($recv($recv($recv(line)._hint())._first()).__gt_eq($recv(first)._at_("pos")))){
return nil;
}
return first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstBox:",{line:line,first:first})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstBox);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.StratFirstBox);



$core.addClass("StratFirstCover", $globals.StratFirstBox, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstCover.comment="If a first hint crosses a box from the begining, all over crossed space are boxes until hint.\x0aExample: 3|?X?  give |?XX";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| first pos sol |\x0a\x09first := self firstBox: line.\x0a\x09first ifNil: [ ^ self none ].\x0a\x09\x22yes, first hint cross the first box, get sol\x22\x0a\x09pos := first at: #pos.\x0a\x09sol := Cells new\x0a\x09\x09addUnknowns: pos-1;\x0a\x09\x09addBoxes: line hint first-pos+1.\x0a\x09(line cells isBetter: sol) ifFalse: [ ^ self none ].\x0a\x09^ sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["firstBox:", "ifNil:", "none", "at:", "addUnknowns:", "new", "-", "addBoxes:", "+", "first", "hint", "ifFalse:", "isBetter:", "cells"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var first,pos,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
first=$self._firstBox_(line);
$1=first;
if($1 == null || $1.a$nil){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
} else {
$1;
}
pos=$recv(first)._at_("pos");
$2=$recv($globals.Cells)._new();
$recv($2)._addUnknowns_([$recv(pos).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0]);
sol=$recv($2)._addBoxes_($recv($recv($recv($recv(line)._hint())._first()).__minus(pos)).__plus((1)));
if(!$core.assert($recv($recv(line)._cells())._isBetter_(sol))){
return $self._none();
}
return sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,first:first,pos:pos,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstCover);



$core.addClass("StratFirstDone", $globals.StratFirstBox, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstDone.comment="I add a space after first boxes done (corresponding to first hint).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| first |\x0a\x09first := self firstBox: line.\x0a\x09first ifNil: [ ^ self none ].\x0a\x09\x22check that it is the first place\x22\x0a\x09(first at: #pos) = 1 ifFalse: [ ^ self none ].\x0a\x09\x22test if first hint is same as box\x22\x0a\x09line hint first = (first at: #size) ifFalse: [ ^ self none ].\x0a\x09\x22get solution, without space\x22\x0a\x09^ Cells new\x0a\x09\x09addBoxes: (first at: #size);\x0a\x09\x09addSpaces: 1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["firstBox:", "ifNil:", "none", "ifFalse:", "=", "at:", "first", "hint", "addBoxes:", "new", "addSpaces:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
first=$self._firstBox_(line);
$1=first;
if($1 == null || $1.a$nil){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
} else {
$1;
}
if(!$core.assert([$recv([$recv(first)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__eq((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=2
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($recv($recv($recv(line)._hint())._first()).__eq([$recv(first)._at_("size")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]))){
return $self._none();
}
$2=$recv($globals.Cells)._new();
$recv($2)._addBoxes_($recv(first)._at_("size"));
return $recv($2)._addSpaces_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,first:first})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstDone);



$core.addClass("StratFirstMore", $globals.StratFirstBox, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstMore.comment="If the first hint is over the first box, I test if first hint should be restrict to the left due to overlap on a more boxes for next hint.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| first pos size |\x0a\x09first := self firstBox: line.\x0a\x09first ifNil: [ ^ self none ].\x0a\x09\x22yes, first hint cross the first box, test if over\x22\x0a\x09\x22test if at least one extra box after last hint box\x22\x0a\x09size := line hint first.\x0a\x09pos := first at: #pos.\x0a\x09pos+size > line cells size ifTrue: [ ^ self none ].\x0a\x09(line cells at: pos+size) isBox\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x09\x22build a solution\x22\x0a\x09\x22find first non-box from over box downto start\x22\x0a\x09first := (pos+size-1 to: 1 by: -1)\x0a\x09\x09detect: [ :i |\x0a\x09\x09\x09(line cells at: i) isBox not ].\x0a\x09^  Cells new\x0a\x09\x09addUnknowns: first-size-1;\x0a\x09\x09addBoxes: pos+size-first",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["firstBox:", "ifNil:", "none", "first", "hint", "at:", "ifTrue:", ">", "+", "size", "cells", "ifFalse:", "isBox", "detect:", "to:by:", "-", "not", "addUnknowns:", "new", "addBoxes:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var first,pos,size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
first=$self._firstBox_(line);
$1=first;
if($1 == null || $1.a$nil){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
} else {
$1;
}
size=$recv($recv(line)._hint())._first();
pos=[$recv(first)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv([$recv(pos).__plus(size)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._size()))){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=2
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert([$recv([$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=2
//>>excludeEnd("ctx");
][0])._at_([$recv(pos).__plus(size)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0])._isBox()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isBox"]=1
//>>excludeEnd("ctx");
][0])){
return $self._none();
}
first=$recv($recv([$recv([$recv(pos).__plus(size)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=3
//>>excludeEnd("ctx");
][0]).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0])._to_by_((1),(-1)))._detect_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv($recv(line)._cells())._at_(i))._isBox())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$2=$recv($globals.Cells)._new();
$recv($2)._addUnknowns_([$recv([$recv(first).__minus(size)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=3
//>>excludeEnd("ctx");
][0]).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0]);
return $recv($2)._addBoxes_($recv($recv(pos).__plus(size)).__minus(first));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,first:first,pos:pos,size:size})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstMore);



$core.addClass("StratFirstCutSpace", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstCutSpace.comment="If a line contains a space, I cut in two parts and check if the first hint must be alone in the first part.\x0aIf so, try strategies on this part with first hint.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| firstcells firstline othercells otherline firstres otherres |\x0a\x09\x22check min hint size\x22\x0a\x09line hint isEmpty ifTrue: [ ^ self none ].\x0a\x0a\x09\x22get first cells and check some rules\x22\x0a\x09firstcells := line cells firstNotSpace.\x0a\x09\x22if no space, already done by other firstXXX\x22\x0a\x09firstcells isEmpty ifTrue: [ ^ self none ].\x0a\x09firstcells size = line cells size ifTrue: [ ^ self none ].\x0a\x0a\x09\x22check if only first number forced to be inside first cells\x22\x0a\x09(self isFirstForced: line hint on: firstcells)\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x0a\x09\x22analyse first cells\x22\x0a\x09firstline := Line\x0a\x09\x09hint: (Hint new: { line hint first })\x0a\x09\x09cells: firstcells.\x0a\x09firstres := self testStrategies: firstline.\x0a\x22Transcript show: 'first line:', firstline printString, ' first res', firstres printString; cr.\x22\x0a\x09\x22 complete first res if needed to the first cells size\x22\x0a\x09firstres addUnknowns: (firstcells size - firstres size).\x0a\x0a\x09othercells := (line cells copyFrom: firstcells size + 1) trimFirst.\x0a\x09otherline := Line\x0a\x09\x09hint: (line hint firstRemoved: 1)\x0a\x09\x09cells: othercells.\x0a\x09otherres := self testStrategies: otherline.\x0a\x09firstres addSpaces: (othercells pos - firstcells size - 1).\x0a\x09firstres addAll: otherres.\x0a\x0a\x09^ firstres",
referencedClasses: ["Line", "Hint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "hint", "none", "firstNotSpace", "cells", "=", "size", "ifFalse:", "isFirstForced:on:", "hint:cells:", "new:", "first", "testStrategies:", "addUnknowns:", "-", "trimFirst", "copyFrom:", "+", "firstRemoved:", "addSpaces:", "pos", "addAll:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var firstcells,firstline,othercells,otherline,firstres,otherres;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=1
//>>excludeEnd("ctx");
][0])._isEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isEmpty"]=1
//>>excludeEnd("ctx");
][0])){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
}
firstcells=$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._firstNotSpace();
if($core.assert($recv(firstcells)._isEmpty())){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=2
//>>excludeEnd("ctx");
][0];
}
if($core.assert($recv([$recv(firstcells)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq([$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=2
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]))){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=3
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($self._isFirstForced_on_([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=2
//>>excludeEnd("ctx");
][0],firstcells))){
return $self._none();
}
firstline=[$recv($globals.Line)._hint_cells_($recv($globals.Hint)._new_([$recv([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=3
//>>excludeEnd("ctx");
][0])._first()]),firstcells)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint:cells:"]=1
//>>excludeEnd("ctx");
][0];
firstres=[$self._testStrategies_(firstline)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["testStrategies:"]=1
//>>excludeEnd("ctx");
][0];
$recv(firstres)._addUnknowns_([$recv([$recv(firstcells)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=3
//>>excludeEnd("ctx");
][0]).__minus([$recv(firstres)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0]);
othercells=$recv($recv($recv(line)._cells())._copyFrom_($recv([$recv(firstcells)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=5
//>>excludeEnd("ctx");
][0]).__plus((1))))._trimFirst();
otherline=$recv($globals.Line)._hint_cells_($recv($recv(line)._hint())._firstRemoved_((1)),othercells);
otherres=$self._testStrategies_(otherline);
$recv(firstres)._addSpaces_([$recv($recv($recv(othercells)._pos()).__minus($recv(firstcells)._size())).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0]);
$recv(firstres)._addAll_(otherres);
return firstres;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,firstcells:firstcells,firstline:firstline,othercells:othercells,otherline:otherline,firstres:firstres,otherres:otherres})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstCutSpace);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.StratFirstCutSpace);

$core.addMethod(
$core.method({
selector: "isFirstForced:on:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint", "firstcells"],
source: "isFirstForced: hint on: firstcells\x0a\x09\x22check if only first number forced to be inside first cells\x22\x0a\x09\x22 hint contains at least one element, and cells one cell\x22\x0a\x09| firstbox |\x0a\x09firstbox := firstcells firstBox.\x0a\x09\x22check if one box min in first cells\x22\x0a\x09(firstbox at: #pos) > 0 ifFalse: [ ^ false ].\x0a\x0a\x09\x22check if only first number forced to be inside first cells\x22\x0a\x0a\x09\x22check for 2 or more hints\x22\x0a\x09hint size >= 2 ifTrue: [\x0a\x09\x09(hint at: 1) + (hint at: 2) + 1 > firstcells size\x0a\x09\x09\x09ifTrue: [ ^ true ]\x0a\x09\x09].\x0a\x09\x22check for 1 or more hints not work all case\x22\x0a\x09\x22 only one is already done by firstXXX or lastXXX stratgies\x22\x0a\x0a\x09\x22no good case, could not be sure that first hint is inside cells\x22\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["firstBox", "ifFalse:", ">", "at:", "ifTrue:", ">=", "size", "+"]
}, function ($methodClass){ return function (hint,firstcells){
var self=this,$self=this;
var firstbox;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
firstbox=$recv(firstcells)._firstBox();
if(!$core.assert([$recv([$recv(firstbox)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])){
return false;
}
if($core.assert($recv([$recv(hint)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__gt_eq((2)))){
if($core.assert($recv([$recv($recv([$recv(hint)._at_((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]).__plus($recv(hint)._at_((2)))).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv(firstcells)._size()))){
return true;
}
}
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFirstForced:on:",{hint:hint,firstcells:firstcells,firstbox:firstbox})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstCutSpace);

$core.addMethod(
$core.method({
selector: "testStrategies:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "testStrategies: line\x0a\x09Strategies instance do: [ :strategy | | res |\x0a\x09\x09res := strategy analyse: line.\x0a\x22Transcript show: ' - test strat: ', strategy printString, ' => ', res printString; cr.\x22\x0a\x09\x09res isEmpty ifFalse: [ ^ res] ].\x0a\x09^ self none",
referencedClasses: ["Strategies"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "instance", "analyse:", "ifFalse:", "isEmpty", "none"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv($recv($globals.Strategies)._instance())._do_((function(strategy){
var res;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
res=$recv(strategy)._analyse_(line);
if(!$core.assert($recv(res)._isEmpty())){
throw $early=[res];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({strategy:strategy,res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $self._none();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStrategies:",{line:line})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstCutSpace);



$core.addClass("StratFirstNotReachedMore", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstNotReachedMore.comment="Like not reached but by testing too more boxes for first hint if set at first position.\x0aExample: 2|??X => |-?X first cell should be space";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09\x22analyse a line to detect if a box just after the first hint\x22\x0a\x09| first |\x0a\x09\x22check if one hint min\x22\x0a\x09line hint isEmpty ifTrue: [ ^ self none ].\x0a\x09\x22test first box\x22\x0a\x09first := line cells firstBox.\x0a\x09\x22test if first box just after hint\x22\x0a\x09(first at: #pos) = (line hint first + 1) ifFalse: [ ^ self none ].\x0a\x09^ Cells new addSpaces: 1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "hint", "none", "firstBox", "cells", "ifFalse:", "=", "at:", "+", "first", "addSpaces:", "new"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=1
//>>excludeEnd("ctx");
][0])._isEmpty())){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
}
first=$recv($recv(line)._cells())._firstBox();
if(!$core.assert($recv($recv(first)._at_("pos")).__eq($recv($recv($recv(line)._hint())._first()).__plus((1))))){
return $self._none();
}
return $recv($recv($globals.Cells)._new())._addSpaces_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,first:first})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstNotReachedMore);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.StratFirstNotReachedMore);



$core.addClass("StratFirstOnes", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstOnes.comment="I try to detect ones at fist position to force spaces before and after it.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| n sol |\x0a\x09n := self nbOnesFor: line hint.\x0a\x09n=0 ifTrue: [ ^ self none ].\x0a\x09sol := Cells new size: ( n*2+1 min: (line cells size) ).\x0a\x09line cells withIndexDo: [ :c :i |\x0a\x09\x09i>(sol size) ifTrue: [ ^ sol ].\x0a\x09\x09c isBox ifTrue: [\x0a\x09\x09\x09i>1 ifTrue: [ sol at: (i-1) put: (Cell space) ].\x0a\x09\x09\x09sol at: (i+1) put: (Cell space)\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09^ sol",
referencedClasses: ["Cells", "Cell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nbOnesFor:", "hint", "ifTrue:", "=", "none", "size:", "new", "min:", "+", "*", "size", "cells", "withIndexDo:", ">", "isBox", "at:put:", "-", "space"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var n,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
n=$self._nbOnesFor_($recv(line)._hint());
if($core.assert($recv(n).__eq((0)))){
return $self._none();
}
sol=$recv($recv($globals.Cells)._new())._size_($recv([$recv($recv(n).__star((2))).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0])._min_([$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]));
$recv($recv(line)._cells())._withIndexDo_((function(c,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv(i).__gt($recv(sol)._size())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])){
throw $early=[sol];
}
if($core.assert($recv(c)._isBox())){
if($core.assert($recv(i).__gt((1)))){
[$recv(sol)._at_put_($recv(i).__minus((1)),[$recv($globals.Cell)._space()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["space"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
}
return $recv(sol)._at_put_($recv(i).__plus((1)),$recv($globals.Cell)._space());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c,i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return sol;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,n:n,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstOnes);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.StratFirstOnes);

$core.addMethod(
$core.method({
selector: "nbOnesFor:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "nbOnesFor: hint\x0a\x09\x22I return the number of consecutive 1 in hint\x22\x0a\x09| count |\x0a\x09count := 0.\x0a\x09hint do: [ :n |\x0a\x09\x09n=1 ifFalse: [ ^ count ].\x0a\x09\x09count := count + 1\x0a\x09].\x0a\x09^ count",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifFalse:", "=", "+"]
}, function ($methodClass){ return function (hint){
var self=this,$self=this;
var count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
count=(0);
$recv(hint)._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($recv(n).__eq((1)))){
throw $early=[count];
}
count=$recv(count).__plus((1));
return count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return count;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nbOnesFor:",{hint:hint,count:count})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstOnes);



$core.addClass("StratFirstPosMore", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstPosMore.comment="I try to set a box next to the first hint at first position, if the new first box number is too big for the first hint, I have a solution for at least one space at.\x0aIf it is more than first hint, I could place the the hint exactly.\x0aExamples:\x0a- 2|??TX =>|??-XX\x0a- 2|??TXXX =>|XX-XX";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09\x22analyse a line to detect if a box just after the first hint\x22\x0a\x09| first hint sol |\x0a\x09\x22check if one hint min\x22\x0a\x09line hint isEmpty ifTrue: [ ^ self none ].\x0a\x09hint := line hint first.\x0a\x09\x22test first box\x22\x0a\x09first := line cells firstBox.\x0a\x09\x22test if first box just after hint\x22\x0a\x09(first at: #pos) = (hint + 2)\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x09\x22it should be at least same size as first hint\x22\x0a\x09(first at: #size) >= hint\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x09\x22OK, one solution\x22\x0a\x09sol := Cells new.\x0a\x09(first at: #size) = hint\x0a\x09\x09ifTrue: [ sol addUnknowns: hint ]\x0a\x09\x09ifFalse: [ sol addBoxes: hint ].\x0a\x09sol addSpaces: 1.\x0a\x09^ sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isEmpty", "hint", "none", "first", "firstBox", "cells", "ifFalse:", "=", "at:", "+", ">=", "new", "ifTrue:ifFalse:", "addUnknowns:", "addBoxes:", "addSpaces:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var first,hint,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=1
//>>excludeEnd("ctx");
][0])._isEmpty())){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
}
hint=$recv($recv(line)._hint())._first();
first=$recv($recv(line)._cells())._firstBox();
if(!$core.assert([$recv([$recv(first)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(hint).__plus((2)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=2
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($recv([$recv(first)._at_("size")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]).__gt_eq(hint))){
return $self._none();
}
sol=$recv($globals.Cells)._new();
if($core.assert($recv($recv(first)._at_("size")).__eq(hint))){
$recv(sol)._addUnknowns_(hint);
} else {
$recv(sol)._addBoxes_(hint);
}
$recv(sol)._addSpaces_((1));
return sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,first:first,hint:hint,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstPosMore);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.StratFirstPosMore);



$core.addClass("StratFirstSpacesIfNotFit", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratFirstSpacesIfNotFit.comment="If first hint dont fit into first part delimited by a space, fill this part with spaces.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| n |\x0a\x09\x22get the first space position\x22\x0a\x09n := line cells firstSpace.\x0a\x09n < 2 ifTrue: [ ^ self none ].\x0a\x09\x22test if first hint could be set before this space\x22\x0a\x09line hint first < n ifTrue: [ ^ self none ].\x0a\x09^ Cells new addSpaces: n-1",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["firstSpace", "cells", "ifTrue:", "<", "none", "first", "hint", "addSpaces:", "new", "-"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var n;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
n=$recv($recv(line)._cells())._firstSpace();
if($core.assert([$recv(n).__lt((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<"]=1
//>>excludeEnd("ctx");
][0])){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
}
if($core.assert($recv($recv($recv(line)._hint())._first()).__lt(n))){
return $self._none();
}
return $recv($recv($globals.Cells)._new())._addSpaces_($recv(n).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,n:n})});
//>>excludeEnd("ctx");
}; }),
$globals.StratFirstSpacesIfNotFit);



$core.addClass("StratMinSpace", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratMinSpace.comment="I fill first cells with spaces when min hint are bigger than first holes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| min free |\x0a\x09\x22Get min hint, and check if more than only 1\x22\x0a\x09min := line hint min.\x0a\x09min > 1 ifFalse: [ ^ self none ].\x0a\x09\x22Get first cells that are free of boxes before space or end\x22\x0a\x09free := line cells firstFreeSpace.\x0a\x09(free at: #pos) > 0 ifFalse: [ ^ self none ].\x0a\x09min > (free at: #size) ifFalse: [ ^ self none ].\x0a\x09^ Cells new\x0a\x09\x09addUnknowns: (free at: #pos)-1;\x0a\x09\x09addSpaces: (free at: #size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["min", "hint", "ifFalse:", ">", "none", "firstFreeSpace", "cells", "at:", "addUnknowns:", "new", "-", "addSpaces:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var min,free;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
min=$recv($recv(line)._hint())._min();
if(!$core.assert([$recv(min).__gt((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
}
free=$recv($recv(line)._cells())._firstFreeSpace();
if(!$core.assert([$recv([$recv(free)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__gt((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[">"]=2
//>>excludeEnd("ctx");
][0])){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=2
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($recv(min).__gt([$recv(free)._at_("size")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]))){
return $self._none();
}
$1=$recv($globals.Cells)._new();
$recv($1)._addUnknowns_($recv([$recv(free)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=3
//>>excludeEnd("ctx");
][0]).__minus((1)));
return $recv($1)._addSpaces_($recv(free)._at_("size"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,min:min,free:free})});
//>>excludeEnd("ctx");
}; }),
$globals.StratMinSpace);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.StratMinSpace);



$core.addClass("StratNotReached", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratNotReached.comment="I fill with spaces, cells that can not be reached by boxes.\x0aUsed only if one hint.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09\x22only one hint is tested yet\x22\x0a\x09| n box sol |\x0a\x09\x22If only one hint and at least one box,returns other empty spaces\x22\x0a\x09(line hint size == 1)\x0a\x09\x09ifFalse: [ ^ self none ].\x0a\x09\x22get informations\x22\x0a\x09box := line cells firstBox.\x0a\x09(box at: #pos) = 0 ifTrue: [ ^ self none ].\x0a\x09n := line hint first.\x0a\x09\x22create solution\x22\x0a\x09sol := Cells new\x0a\x09\x09addSpaces: (0 max: ((box at: #pos)+(box at: #size)-1-n));\x0a\x09\x09addUnknowns: (2*n-(box at: #size));\x0a\x09\x09addSpaces: (0 max: (line cells size - (box at: #pos)-n+1)).\x0a\x09^ sol size: (line cells size)",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "==", "size", "hint", "none", "firstBox", "cells", "ifTrue:", "=", "at:", "first", "addSpaces:", "new", "max:", "-", "+", "addUnknowns:", "*", "size:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var n,box,sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if(!$core.assert($recv([$recv([$recv(line)._hint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hint"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq((1)))){
return [$self._none()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["none"]=1
//>>excludeEnd("ctx");
][0];
}
box=$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._firstBox();
if($core.assert($recv([$recv(box)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0]).__eq((0)))){
return $self._none();
}
n=$recv($recv(line)._hint())._first();
$1=$recv($globals.Cells)._new();
[$recv($1)._addSpaces_([(0)._max_([$recv([$recv([$recv([$recv(box)._at_("pos")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]).__plus([$recv(box)._at_("size")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0]).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0]).__minus(n)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["max:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["addSpaces:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._addUnknowns_([$recv((2).__star(n)).__minus([$recv(box)._at_("size")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=3
//>>excludeEnd("ctx");
][0]);
sol=$recv($1)._addSpaces_((0)._max_($recv([$recv($recv([$recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=2
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__minus($recv(box)._at_("pos"))).__minus(n)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=4
//>>excludeEnd("ctx");
][0]).__plus((1))));
return $recv(sol)._size_($recv($recv(line)._cells())._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,n:n,box:box,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratNotReached);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.StratNotReached);



$core.addClass("StratReverted", $globals.Strategy, "Logimage");
$core.setSlots($globals.StratReverted, ["strategy"]);
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09\x22Use strategy on reversed line, then reversed result\x22\x0a\x09sol := (strategy analyse: line reversed) reversed.\x0a\x09sol size = 0 ifTrue: [ ^ self none ].\x0a\x09^ Cells new\x0a\x09\x09\x22and add first unknown cells before\x22\x0a\x09\x09addUnknowns: line cells size - sol size;\x0a\x09\x09addAll: sol",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reversed", "analyse:", "ifTrue:", "=", "size", "none", "addUnknowns:", "new", "-", "cells", "addAll:"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
sol=[$recv($recv($self.strategy)._analyse_($recv(line)._reversed()))._reversed()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["reversed"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv([$recv(sol)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq((0)))){
return $self._none();
}
$1=$recv($globals.Cells)._new();
$recv($1)._addUnknowns_($recv([$recv($recv(line)._cells())._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__minus($recv(sol)._size()));
return $recv($1)._addAll_(sol);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratReverted);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.StratReverted);



$core.addClass("StratLastCover", $globals.StratReverted, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratLastCover.comment="Same as first cover but by other side (invert).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstCover new",
referencedClasses: ["StratFirstCover"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstCover)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastCover);



$core.addClass("StratLastCutSpace", $globals.StratReverted, "Logimage");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstCutSpace new",
referencedClasses: ["StratFirstCutSpace"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstCutSpace)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastCutSpace);



$core.addClass("StratLastDone", $globals.StratReverted, "Logimage");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstDone new",
referencedClasses: ["StratFirstDone"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstDone)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastDone);



$core.addClass("StratLastMore", $globals.StratReverted, "Logimage");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstMore new",
referencedClasses: ["StratFirstMore"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstMore)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastMore);



$core.addClass("StratLastNotReachedMore", $globals.StratReverted, "Logimage");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstNotReachedMore new",
referencedClasses: ["StratFirstNotReachedMore"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstNotReachedMore)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastNotReachedMore);



$core.addClass("StratLastOnes", $globals.StratReverted, "Logimage");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstOnes new",
referencedClasses: ["StratFirstOnes"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstOnes)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastOnes);



$core.addClass("StratLastPosMore", $globals.StratReverted, "Logimage");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstPosMore new",
referencedClasses: ["StratFirstPosMore"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstPosMore)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastPosMore);



$core.addClass("StratLastSpacesIfNotFit", $globals.StratReverted, "Logimage");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09strategy := StratFirstSpacesIfNotFit new",
referencedClasses: ["StratFirstSpacesIfNotFit"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.strategy=$recv($globals.StratFirstSpacesIfNotFit)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StratLastSpacesIfNotFit);



$core.addClass("StratSpacesOnly", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratSpacesOnly.comment="I fill spaces if no hints.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09\x22If no hint, returns a line with empty spaces\x22\x0a\x09(line hint size = 0)\x0a\x09\x09ifTrue: [ ^ Cells spaces: line cells size ].\x0a\x09^ self none",
referencedClasses: ["Cells"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "size", "hint", "spaces:", "cells", "none"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv($recv(line)._hint())._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq((0)))){
return $recv($globals.Cells)._spaces_($recv($recv(line)._cells())._size());
}
return $self._none();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line})});
//>>excludeEnd("ctx");
}; }),
$globals.StratSpacesOnly);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.StratSpacesOnly);



$core.addClass("StratTestBox", $globals.Strategy, "Logimage");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StratTestBox.comment="I test one box at each position, try to detect if it is possible, regarding if the number of contigus boxes are greater than hints.\x0aIf not, it is a space.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "analyse:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["line"],
source: "analyse: line\x0a\x09| sol |\x0a\x09sol := Cells new.\x0a\x091 to: line cells size do: [ :i | |l|\x0a\x22TODO test only unknown cells...\x22\x0a\x09\x09l := line cells deepCopy at: i put: Cell box; yourself.\x0a\x09\x09(Hint new: l numbers) max > line hint max\x0a\x09\x09\x09ifTrue: [ sol addSpaces: 1 ]\x0a\x09\x09\x09ifFalse: [ sol addUnknowns: 1 ]\x0a\x09\x09].\x0a\x09^ sol trimLast: Cell unknown",
referencedClasses: ["Cells", "Cell", "Hint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "to:do:", "size", "cells", "at:put:", "deepCopy", "box", "yourself", "ifTrue:ifFalse:", ">", "max", "new:", "numbers", "hint", "addSpaces:", "addUnknowns:", "trimLast:", "unknown"]
}, function ($methodClass){ return function (line){
var self=this,$self=this;
var sol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
sol=$recv($globals.Cells)._new();
(1)._to_do_($recv([$recv(line)._cells()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["cells"]=1
//>>excludeEnd("ctx");
][0])._size(),(function(i){
var l;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(line)._cells())._deepCopy();
$recv($1)._at_put_(i,$recv($globals.Cell)._box());
l=$recv($1)._yourself();
if($core.assert($recv([$recv($recv($globals.Hint)._new_($recv(l)._numbers()))._max()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["max"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv($recv(line)._hint())._max()))){
return $recv(sol)._addSpaces_((1));
} else {
return $recv(sol)._addUnknowns_((1));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i,l:l},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(sol)._trimLast_($recv($globals.Cell)._unknown());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"analyse:",{line:line,sol:sol})});
//>>excludeEnd("ctx");
}; }),
$globals.StratTestBox);

$core.addMethod(
$core.method({
selector: "isBidirectional",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBidirectional\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.StratTestBox);



$core.addClass("WidgetCell", $globals.Object, "Logimage");
$core.setSlots($globals.WidgetCell, ["div"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'cell' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.div=$recv($globals.Silk)._DIV_(["class".__minus_gt("cell")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetCell);

$core.addMethod(
$core.method({
selector: "limit",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "limit\x0a\x09div element\x0a\x09\x09className: (div element className), ' limit'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["className:", "element", ",", "className"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$recv($self.div)._element()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["element"]=1
//>>excludeEnd("ctx");
][0])._className_($recv($recv($recv($self.div)._element())._className()).__comma(" limit"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"limit",{})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetCell);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<"]
}, function ($methodClass){ return function (silk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt($self.div);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetCell);

$core.addMethod(
$core.method({
selector: "show:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell"],
source: "show: cell\x0a\x09| class |\x0a\x09div resetContents.\x0a\x09class := 'cell'.\x0a\x09cell isBox ifTrue: [ class := class,' box' ].\x0a\x09cell isSpace ifTrue: [ class := class,' space' ].\x0a\x09cell isNew ifTrue: [ class := class,' new' ].\x0a\x09div << { #class -> class }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "ifTrue:", "isBox", ",", "isSpace", "isNew", "<<", "->"]
}, function ($methodClass){ return function (cell){
var self=this,$self=this;
var class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.div)._resetContents();
class_="cell";
if($core.assert($recv(cell)._isBox())){
class_=[$recv(class_).__comma(" box")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
class_;
}
if($core.assert($recv(cell)._isSpace())){
class_=[$recv(class_).__comma(" space")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0];
class_;
}
if($core.assert($recv(cell)._isNew())){
class_=$recv(class_).__comma(" new");
class_;
}
$recv($self.div).__lt_lt(["class".__minus_gt(class_)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{cell:cell,class_:class_})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetCell);



$core.addClass("WidgetGrid", $globals.Object, "Logimage");
$core.setSlots($globals.WidgetGrid, ["div"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'grid' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.div=$recv($globals.Silk)._DIV_(["class".__minus_gt("grid")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetGrid);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<"]
}, function ($methodClass){ return function (silk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt($self.div);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetGrid);

$core.addMethod(
$core.method({
selector: "show:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["grid"],
source: "show: grid\x0a\x09| y |\x0a\x09y := 0.\x0a\x09div resetContents.\x0a\x09grid rowDo: [ :row | | line x |\x0a\x09\x09x := 0.\x0a\x09\x09y := y+1.\x0a\x09\x09line := div DIV: {\x0a\x09\x09\x09#class -> ('line',(y\x5c\x5c5=0\x0a\x09\x09\x09\x09ifTrue: [' gras']\x0a\x09\x09\x09\x09ifFalse: [''])) }.\x0a\x09\x09row do: [ :cell | | w |\x0a\x09\x09\x09x := x + 1.\x0a\x09\x09\x09w := WidgetCell new show: cell.\x0a\x09\x09\x09x\x5c\x5c5=0 ifTrue: [ w limit ].\x0a\x09\x09\x09line << w\x0a\x09\x09]\x0a\x09]",
referencedClasses: ["WidgetCell"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "rowDo:", "+", "DIV:", "->", ",", "ifTrue:ifFalse:", "=", "\x5c\x5c", "do:", "show:", "new", "ifTrue:", "limit", "<<"]
}, function ($methodClass){ return function (grid){
var self=this,$self=this;
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
y=(0);
$recv($self.div)._resetContents();
$recv(grid)._rowDo_((function(row){
var line,x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
x=(0);
y=[$recv(y).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
$1=$self.div;
if($core.assert([$recv([$recv(y).__backslash_backslash((5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["\x5c\x5c"]=1
//>>excludeEnd("ctx");
][0]).__eq((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
$2=" gras";
} else {
$2="";
}
line=$recv($1)._DIV_(["class".__minus_gt("line".__comma($2))]);
return $recv(row)._do_((function(cell){
var w;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
x=$recv(x).__plus((1));
w=$recv($recv($globals.WidgetCell)._new())._show_(cell);
if($core.assert($recv($recv(x).__backslash_backslash((5))).__eq((0)))){
$recv(w)._limit();
}
return $recv(line).__lt_lt(w);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cell:cell,w:w},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row,line:line,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{grid:grid,y:y})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetGrid);



$core.addClass("WidgetHint", $globals.Object, "Logimage");
$core.setSlots($globals.WidgetHint, ["div"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'hint' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.div=$recv($globals.Silk)._DIV_(["class".__minus_gt("hint")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetHint);

$core.addMethod(
$core.method({
selector: "limit",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "limit\x0a\x09div element\x0a\x09\x09className: (div element className), ' limit'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["className:", "element", ",", "className"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$recv($self.div)._element()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["element"]=1
//>>excludeEnd("ctx");
][0])._className_($recv($recv($recv($self.div)._element())._className()).__comma(" limit"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"limit",{})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetHint);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<"]
}, function ($methodClass){ return function (silk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt($self.div);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetHint);

$core.addMethod(
$core.method({
selector: "show:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hint"],
source: "show: hint\x0a\x09div resetContents.\x0a\x09hint do: [ :n |\x0a\x09\x09div DIV: { #class -> 'number'. n } ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "do:", "DIV:", "->"]
}, function ($methodClass){ return function (hint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.div)._resetContents();
$recv(hint)._do_((function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.div)._DIV_(["class".__minus_gt("number"),n]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{hint:hint})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetHint);



$core.addClass("WidgetHints", $globals.Object, "Logimage");
$core.setSlots($globals.WidgetHints, ["div"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09div := Silk DIV: { #class -> 'hints' }",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.div=$recv($globals.Silk)._DIV_(["class".__minus_gt("hints")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetHints);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["silk"],
source: "renderOnSilk: silk\x0a\x09silk << div",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<<"]
}, function ($methodClass){ return function (silk){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(silk).__lt_lt($self.div);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{silk:silk})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetHints);

$core.addMethod(
$core.method({
selector: "show:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["hints"],
source: "show: hints\x0a\x09| i |\x0a\x09div resetContents.\x0a\x09i := 1.\x0a\x09hints do: [ :hint | | w |\x0a\x09\x09w := WidgetHint new.\x0a\x09\x09w show: hint.\x0a\x09\x09i\x5c\x5c5=0 ifTrue: [ w limit ].\x0a\x09\x09div << w.\x0a\x09\x09i := i +1 ]",
referencedClasses: ["WidgetHint"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "do:", "new", "show:", "ifTrue:", "=", "\x5c\x5c", "limit", "<<", "+"]
}, function ($methodClass){ return function (hints){
var self=this,$self=this;
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.div)._resetContents();
i=(1);
$recv(hints)._do_((function(hint){
var w;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
w=$recv($globals.WidgetHint)._new();
$recv(w)._show_(hint);
if($core.assert($recv($recv(i).__backslash_backslash((5))).__eq((0)))){
$recv(w)._limit();
}
$recv($self.div).__lt_lt(w);
i=$recv(i).__plus((1));
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({hint:hint,w:w},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{hints:hints,i:i})});
//>>excludeEnd("ctx");
}; }),
$globals.WidgetHints);


});
