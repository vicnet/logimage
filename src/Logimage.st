Smalltalk createPackage: 'Logimage'!
Object subclass: #Cell
	instanceVariableNames: ''
	package: 'Logimage'!
!Cell commentStamp!
A simple cell or pixel.!

!Cell methodsFor: 'as yet unclassified'!

isBox
	^ false
!

isSpace
	^ false
!

isUnknown
	^ false
! !

Cell class instanceVariableNames: 'cells'!

!Cell class methodsFor: 'instance creation'!

at: symbol
	^ cells at: symbol
!

box
	^ cells at: #box
!

initialize
	| basesize |
	super initialize.
	cells := #{}.
	basesize := self name size + 1.
	self allSubclassesDo: [ :cls |
		| name |
		name := cls name.
		name := name copyFrom: basesize to: (name size).
		name := name asLowercase.
		cells at: name put: cls new
		]
!

space
	^ cells at: #space
!

unknown
	^ cells at: #unknown
! !

Cell subclass: #CellBox
	instanceVariableNames: ''
	package: 'Logimage'!

!CellBox methodsFor: 'printing'!

isBox
	^ true
!

printOn: stream
	stream nextPutAll: '@'
! !

Cell subclass: #CellSpace
	instanceVariableNames: ''
	package: 'Logimage'!

!CellSpace methodsFor: 'printing'!

isSpace
	^ true
!

printOn: stream
	stream nextPutAll: '-'
! !

Cell subclass: #CellUnknown
	instanceVariableNames: ''
	package: 'Logimage'!

!CellUnknown methodsFor: 'printing'!

isUnknown
	^ true
!

printOn: stream
	stream nextPutAll: ' '
! !

Object subclass: #Cells
	instanceVariableNames: 'cells'
	package: 'Logimage'!
!Cells commentStamp!
A line or a column of cells!

!Cells methodsFor: 'as yet unclassified'!

cells: theCells
	cells := theCells collect: [ :c |
			c isString
				ifTrue: [ Cell at: c ]
				ifFalse: [ c ]
		]
!

firstNumbers
	^ self numbersOf: cells
!

lastNumbers
	^ self numbersOf: cells reversed
! !

!Cells methodsFor: 'printing'!

printOn: stream
	stream nextPutAll: '|'.
	cells do: [ :c |
			c printOn: stream.
			stream nextPutAll: '|' ]
!

size
	^ cells size
! !

!Cells methodsFor: 'private'!

numbersOf: theCells
	| numbers current |
	numbers := { }.
	current := 0.
	theCells do: [ :c |
		c isBox
			ifTrue: [ current := current + 1 ]
			ifFalse: [ current > 0 ifTrue: [ numbers add: current ].
					   current := 0 ].
		c isUnknown ifTrue: [ ^ numbers ].
		].
	^ numbers
! !

!Cells class methodsFor: 'as yet unclassified'!

new: cells
	^ self new cells: cells
! !

Object subclass: #Grid
	instanceVariableNames: 'cells size'
	package: 'Logimage'!
!Grid commentStamp!
Image, with Cells!

!Grid methodsFor: 'accessing'!

colAt: index
	| col |
	col := Array new: size y.
	1 to: size y do: [ :y | | pt |
		pt := Point x: index y: y.
		col at: y put: (self at: pt) ].
	^ Cells new: col
!

rowAt: index
	| start |
	start := self indexOf: (Point x: 1 y: index).
	^ Cells new: (cells copyFrom: start to: (start + size x - 1))
! !

!Grid methodsFor: 'as yet unclassified'!

box: point
	self at: point put: (Cell box)
!

size: aSize
	size := aSize.
	cells := (1 to: (size x * size y)) collect: [ Cell unknown ]
!

space: point
	self at: point put: (Cell space)
! !

!Grid methodsFor: 'printing'!

printOn: stream
	1 to: size y do: [ :y |
		stream cr.
		(self rowAt: y) printOn: stream ]
! !

!Grid methodsFor: 'private'!

at: point
	^ cells at: (self indexOf: point)
!

at: point put: cell
	cells at: (self indexOf: point) put: cell
!

indexOf: point
	^ (size x * (point y - 1)) + point x.
! !

Object subclass: #Hint
	instanceVariableNames: 'numbers'
	package: 'Logimage'!
!Hint commentStamp!
List of numbers!

!Hint methodsFor: 'as yet unclassified'!

numbers
	^ numbers
!

numbers: array
	numbers := array
!

size
	^ numbers size
! !

!Hint methodsFor: 'printing'!

printOn: stream
	stream nextPutAll: '| '.
	numbers do: [ :n |
		n printOn: stream.
		stream space ].
	stream nextPutAll: '|'
! !

Object subclass: #Hints
	instanceVariableNames: 'hints'
	package: 'Logimage'!

!Hints methodsFor: 'as yet unclassified'!

add: hint
	hints add: (
		(hint isKindOf: Hint)
			ifTrue: [ hint ]
			ifFalse: [ Hint new numbers: hint ])
!

at: index
	^ hints at: index
!

initialize
	hints := {}
!

size
	^ hints size
! !

Object subclass: #Line
	instanceVariableNames: 'hint cells'
	package: 'Logimage'!

!Line methodsFor: 'accessing'!

cells
	^ cells
!

cells: anObject
	cells := anObject
!

hint
	^ hint
!

hint: anObject
	hint := anObject
!

isDone
	^ False
! !

!Line methodsFor: 'printing'!

printOn: stream
	hint printOn: stream.
	cells printOn: stream
! !

!Line class methodsFor: 'as yet unclassified'!

new: hint cells: cells
	^ self new hint: hint; cells: cells
! !

Object subclass: #Logimage
	instanceVariableNames: 'row col grid'
	package: 'Logimage'!

!Logimage methodsFor: 'accessing'!

colCellsAt: index
	^ grid colAt: index
!

colHintAt: index
	^ col at: index
!

colLineAt: index
	^ Line new: (self colHintAt: index)
		 cells: (self colCellsAt: index)
!

grid
	^ grid
!

rowCellsAt: index
	^ grid rowAt: index
!

rowHintAt: index
	^ row at: index
!

rowLineAt: index
	^ Line new: (self rowHintAt: index)
		 cells: (self rowCellsAt: index)
! !

!Logimage methodsFor: 'as yet unclassified'!

addColHints: hints
	col add: hints.
	self resize
!

addRowHints: hints
	row add: hints.
	self resize
!

box: point
	grid box: point
!

initialize
	row := Hints new.
	col := Hints new.
	grid := Grid new
!

resize
	| newsize |
	newsize := Point x: (col size) y: (row size).
	grid size: newsize
!

space: point
	grid space: point
! !

!Logimage class methodsFor: 'examples'!

question
	^ self new
		addRowHints: #( 3 );
		addRowHints: #( 2 2 );
		addRowHints: #( 1 1 );
		addRowHints: #( 2 );
		addRowHints: #( 2 );
		addRowHints: #( 1 );
		addRowHints: #( 1 );
		addRowHints: #( 0 );
		addRowHints: #( 1 );

		addColHints: #( 2 );
		addColHints: #( 2 );
		addColHints: #( 1 3 1 );
		addColHints: #( 2 2 );
		addColHints: #( 3 )
!

simple
	^ self new
		addRowHints: #( 1 );
		addRowHints: #( 2 );
		addColHints: #( 1 );
		addColHints: #( 2 )
! !

Object subclass: #Strategy
	instanceVariableNames: ''
	package: 'Logimage'!

Strategy subclass: #StratRecover
	instanceVariableNames: ''
	package: 'Logimage'!

!StratRecover methodsFor: 'as yet unclassified'!

analyse: line
	| free sol |
	free := self free: line.
	sol := {}.
	line hint numbers do: [ :n |
		(n min: free) timesRepeat: [ sol add: #u ].
		free+1 to: n do: [ sol add: #b ].
		sol add: #u
		].
	"remove last unknown if line full"
	 sol := sol
	 	removeFrom: (line cells size) + 1
		to: sol size.
	"add unknown if nedeed"
	(sol size + 1) to: (line cells size) do: [ sol add: #u ].
	^ sol
!

free: line
	^ (line cells size) - (self occupation: line hint)
!

occupation: hint
	^ (self sum: hint) + hint size - 1
!

sum: hint
	^ hint numbers inject: 0 into: [ :s :n | s+n ]
! !

