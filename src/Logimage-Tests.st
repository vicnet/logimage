Smalltalk createPackage: 'Logimage-Tests'!
TestCase subclass: #LogimageTest
	instanceVariableNames: 'logimage'
	package: 'Logimage-Tests'!

!LogimageTest methodsFor: 'running'!

setUp
	logimage := Logimage simple
! !

!LogimageTest methodsFor: 'tests'!

testCellAccesses
	self assert: (Cell at: #box) equals: (Cell at: #box).
	self assert: (Cell at: #box) equals: (Cell at: #boxnew).
	self assert: (Cell at: #space) equals: (Cell at: #space).
	self assert: (Cell at: #space) equals: (Cell at: #spacenew).
	self assert: (Cell at: #unknown) equals: (Cell at: #unknown).
	self assert: (Cell at: #box) = (Cell at: #box).
	self assert: (Cell at: #box) = (Cell at: #boxnew).
	self assert: (Cell at: #box) == (Cell at: #box).
	self assert: (Cell at: #box) ~~ (Cell at: #boxnew).
	self assert: (Cell at: #box) ~= (Cell at: #space).
!

testCellsAccesses
	| c |
	"test firstDones"
	self assert: (Cells new s; b; b; s; u) firstDones = (Cells new s; b; b; s).
	self assert: (Cells new s; b; s; b; u) firstDones = (Cells new s; b; s).
	self assert: (Cells new s; b; u) firstDones = (Cells new s).
	self assert: (Cells new s; b; b) firstDones = (Cells new s; b; b).
	"test last dones"
	self assert: (Cells new s; b; u; b; s) lastDones = (Cells new s; pos: 5).
	self assert: (Cells new s; u; s; b; b; s) lastDones = (Cells new s; b; b; s; pos: 3).
	"test copyFrom: with number"
	self assert: ((Cells new s; b; b) copyFrom: 1) = (Cells new s; b; b).
	self assert: ((Cells new s; b; b) copyFrom: 2) = (Cells new pos: 2; b; b).
	"test trim functions"
	c := Cells new s; s; b; s; u; b; s.
	self assert: c trimFirst = (Cells new b; s; u; b; s; pos: 3).
	self assert: c trimLast = (Cells new s; s; b; s; u; b).
	self assert: c trim = (Cells new b; s; u; b; pos: 3).
	self assert: c trim trimFirst = (Cells new b; s; u; b; pos: 3).
	self assert: c trim trimLast = (Cells new b; s; u; b; pos: 3).
	self assert: c trim trim = (Cells new b; s; u; b; pos: 3).
	"test firstNotSpace"
	self assert: (Cells new u; b; b; u) firstNotSpace = (Cells new u; b; b; u).
	self assert: (Cells new u; b; b; s) firstNotSpace = (Cells new u; b; b).
	self assert: (Cells new u; s; b; u) firstNotSpace = (Cells new u).
	self assert: (Cells new s; s; u; b; s; u) firstNotSpace = (Cells new u; b; pos: 3).
	self assert: (Cells new: '  X-') firstNotSpace equals: (Cells new: '  X').
	"
	c := Cells new s; b; b; s; u; b; s.
	self assert: c lastNumbers = { }.
	self assert: (Cells new s; b; b; s; s; b; s) lastNumbers = { 2. 1 }.
	self assert: c firstBox = #{ #pos -> 2. #size -> 2 }.
	self assert: c numbers = { 2. 1 }.
	self assert: ((Cells new u;s;u;b) firstFreeSpace) = #{ #pos -> 1. #size -> 1 }.
	self assert: ((Cells new b;s;u;u) firstFreeSpace) = #{ #pos -> 3. #size -> 2 }.
	self assert: ((Cells new s;u;s;u;b) firstNotSpace) = #{ #pos -> 2. #size -> 1 }.
	self assert: ((Cells new s;b;u;s;u;u) firstNotSpace) = #{ #pos -> 2. #size -> 2 }."
	self assert: (Cells new: '  X') firstBox equals: #{ #pos -> 3. #size -> 1 }.
!

testLineAccesses
	| l |
	l := Line
		hint:  ( Hint new: { 2 . 1 } )
		cells: ( Cells new s; b; b; s; u; b; s).
	self assert: l reversed =
		(Line new hint: (Hint new: { 1. 2}); cells: (Cells new s; b; u; s; b; b; s)).
	self assert: (Line hint: (Hint new: {2. 1}) cells: (Cells new s; b; b; u; s; b; s)) reducedLast =
		(Line hint: (Hint new: {2}) cells: (Cells new s; b; b; u)).
	self assert: (Line hint: (Hint new: {2. 1}) cells: (Cells new s; b; b; s; u; b; s)) reducedFirst =
		(Line hint: (Hint new: {1}) cells: (Cells new u; b; s; pos: 5)).
!

testLogimageAccesses
	self assert: (logimage colCellsAt: 1) notNil
!

testStratFirstCutSpace
	self assert: (StratFirstCutSpace analyse: '3 1|  X- ')
		 equals: (Cells new: 'XXX-X').
	self assert: (StratFirstCutSpace analyse: '3 1|  X-  ')
		 equals: (Cells new: 'XXX-').
!

testStratNotReached
	| l sol |
	l := Line new
		hint: (Hint new numbers: { 2 });
		cells: (Cells new u; u; u; b; u; u; u).
	sol := StratNotReached new analyse: l.
	self assert: sol = (Cells new s; s; u; u; u; s; s)
!

testStratXCover
	self assert: (StratFirstCover new analyse: (Line new: '2|X '))
		 equals: (Cells new: 'XX').
	self assert: (StratFirstCover new analyse: (Line new: '3|X  '))
		 equals: (Cells new: 'XXX').
	self assert: (StratFirstCover new analyse: (Line new: '3| X '))
		 equals: (Cells new: ' XX').
	self assert: (StratFirstCover new analyse: (Line new: '3|  X'))
		 equals: (Cells new: '').
	self assert: (StratFirstCover new analyse: (Line new: '3|   X'))
		 equals: (Cells new: '').
!

testStratXDone
	| l |
	l := Line new
		hint: (Hint new: {1. 2});
		cells: (Cells new b;u;b;b).
	self assert: (StratFirstDone new analyse: l) 
		 equals: (Cells new b;s).
	self assert: (StratLastDone new analyse: l)
		 equals: (Cells new u;s;b;b)
!

testStratXMore
	self assert: (StratFirstMore new analyse: (Line new: '3 2|  X XX'))
		 equals: (Cells new: 'XX').
	self assert: (StratFirstMore new analyse: (Line new: '3 2|  X  X'))
		 equals: (Cells new: ' X').
	self assert: (StratFirstMore new analyse: (Line new: '3 2|  X   X'))
		 equals: (Cells new: '').
	self assert: (StratFirstMore new analyse: (Line new: '4 2|   X XXX'))
		 equals: (Cells new: 'XXX').
! !

