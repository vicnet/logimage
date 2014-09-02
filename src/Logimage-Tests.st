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
	| u s b c |
	u := Cell unknown.
	s := Cell space.
	b := Cell box.
	c := Cells new: { s. b. b. s. u. b. s }.
	self assert: c firstNumbers = { 2 }.
	self assert: c lastNumbers = { 1 }
!

testLineAccesses
	| u s b l |
	u := Cell unknown.
	s := Cell space.
	b := Cell box.
	l := Line
		new:   ( Hint new numbers: { 2 . 1 } )
		cells: ( Cells new: { s. b. b. s. u. b. s } ).
	"self assert: l isDone not"
!

testLogimageAccesses
	self assert: (logimage colCellsAt: 1) notNil
! !

