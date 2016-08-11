Smalltalk createPackage: 'Logimage-Tests'!
TestCase subclass: #LogimageTest
	instanceVariableNames: 'logimage'
	package: 'Logimage-Tests'!

!LogimageTest methodsFor: 'running'!

setUp
	logimage := Logimage simple
! !

!LogimageTest methodsFor: 'tests'!

testCellsAccesses
	| c |
	c := Cells new s; b; b; s; u; b; s.
	self assert: c firstNumbers = { 2 }.
	self assert: c lastNumbers = { }.
	self assert: (Cells new s; b; b; s; s; b; s) lastNumbers = { 2. 1 }.
	self assert: c firstBox = #{ #pos -> 2. #size -> 2 }.
	self assert: c trimFirst = (Cells new b; b; s; u; b; s).
	self assert: c trimLast = (Cells new s; b; b; s; u; b).
	self assert: c trim = (Cells new b; b; s; u; b).
!

testLineAccesses
	| l |
	l := Line
		new:   ( Hint new numbers: { 2 . 1 } )
		cells: ( Cells new s; b; b; s; u; b; s).
	"self assert: l isDone not"
	self assert: l reversed =
		(Line new hint: (Hint new: { 1. 2}); cells: (Cells new s; b; u; s; b; b; s))
!

testLogimageAccesses
	self assert: (logimage colCellsAt: 1) notNil
!

testStratNotReached
	| l sol |
	l := Line new
		hint: (Hint new numbers: { 2 });
		cells: (Cells new u; u; u; b; u; u; u).
	sol := StratNotReached new analyse: l.
	self assert: sol = (Cells new s; s; u; u; u; s; s)
! !

