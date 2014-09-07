Smalltalk createPackage: 'Logimage'!
Object subclass: #Cell
	instanceVariableNames: ''
	package: 'Logimage'!
!Cell commentStamp!
A simple cell or pixel.!

!Cell methodsFor: 'as yet unclassified'!

* n
	^ Cells new add: n cell: self
!

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

add: aCell
	cells add: (self cellFrom: aCell)
!

add: n cell: aCell
	n timesRepeat: [ self add: aCell ]
!

at: index
	^ cells at: index
!

cellFrom: aCell
	aCell isString
		ifTrue: [ ^ Cell at: aCell ].
	^ aCell
!

cells: theCells
	cells := theCells collect: [ :c |
			self cellFrom: c ]
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
!

size: newSize
	(self size = newSize) ifTrue: [ ^ self ].
	(self size > newSize)
		ifTrue: [ cells := cells
	 				removeFrom: newSize + 1
					to: self size ]
		ifFalse: [ self
					add: (newSize - self size)
					cell: #unknown ]
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

new
	^ self new: #( )
!

new: cells
	^ super new cells: cells
!

spaces: n
	^ self new add: n cell: #space
!

unknowns: n
	^ self new add: n cell: #unknown
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

size
	^ size
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

printOn: stream
	hints do: [ :hint |
		stream cr.
		hint printOn: stream ]
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

colHints
	^ col
!

colLineAt: index
	^ Line new: (self colHintAt: index)
		 cells: (self colCellsAt: index)
!

colLines
	^ (1 to: col size) collect: [ :index |
			self colLineAt: index ]
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

rowHints
	^ row
!

rowLineAt: index
	^ Line new: (self rowHintAt: index)
		 cells: (self rowCellsAt: index)
!

rowLines
	^ (1 to: row size) collect: [ :index |
			self rowLineAt: index ]
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
		addRowHints: #( );
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

Object subclass: #Strategist
	instanceVariableNames: ''
	package: 'Logimage'!

!Strategist methodsFor: 'as yet unclassified'!

apply: strategy on: logimage
	self apply: strategy onRowOf: logimage.
	self apply: strategy onColOf: logimage
!

apply: cell on: logimage at: point
	cell isBox ifTrue: [ logimage box: point. ^ self ].
	cell isSpace ifTrue: [ logimage space: point. ^ self ]
!

apply: cells on: logimage atCol: x
	1 to: cells size do: [ :y |
		self apply: (cells at: y) on: logimage at: x@y ]
!

apply: cells on: logimage atRow: y
	1 to: cells size do: [ :x |
		self apply: (cells at: x) on: logimage at: x@y ]
!

apply: strategy onColOf: logimage
	1 to: logimage grid size x do: [ :x | | sol |
		sol := strategy analyse: (logimage colLineAt: x).
		self apply: sol on: logimage atCol: x ]
!

apply: strategy onRowOf: logimage
	1 to: logimage grid size y do: [ :y | | sol |
		sol := strategy analyse: (logimage rowLineAt: y).
		self apply: sol on: logimage atRow: y ]
!

solve: logimage
	{ StratSpaces new. StratDone new. StratRecover new } do: [ :strategy |
		self apply: strategy on: logimage ]
! !

Object subclass: #Strategy
	instanceVariableNames: ''
	package: 'Logimage'!

!Strategy methodsFor: 'as yet unclassified'!

analyse: line
	^ Cells new
! !

Strategy subclass: #StratCount
	instanceVariableNames: ''
	package: 'Logimage'!

!StratCount methodsFor: 'as yet unclassified'!

free: line
	"I return the number of cells that are free to move a number"
	^ (line cells size) - (self occupation: line hint)
!

occupation: hint
	"I return the number of cell all numbers fill, with one space between each"
	^ (self sum: hint) + hint size - 1
!

sum: hint
	"I return the sum of all number, without spaces"
	^ hint numbers inject: 0 into: [ :s :n | s+n ]
! !

StratCount subclass: #StratDone
	instanceVariableNames: ''
	package: 'Logimage'!

!StratDone methodsFor: 'as yet unclassified'!

analyse: line
	| sol |
	(self free: line) = 0
		ifFalse: [ ^ super analyse: line ].
	sol := Cells new.
	line hint numbers do: [ :n |
		sol add: n cell: #box ;
			add: #space ].
	"remove last unknown if line full"
	^ sol size: (line cells size)
! !

StratCount subclass: #StratRecover
	instanceVariableNames: ''
	package: 'Logimage'!

!StratRecover methodsFor: 'as yet unclassified'!

analyse: line
	| free sol |
	free := self free: line.
	sol := Cells new.
	line hint numbers do: [ :n |
		sol add: (n min: free) cell: #unknown ;
			add: (n - free) cell: #box ;
			add: #unknown ].
	"remove last unknown if line full"
	^ sol size: (line cells size)
! !

StratCount subclass: #StratSpaces
	instanceVariableNames: ''
	package: 'Logimage'!

!StratSpaces methodsFor: 'as yet unclassified'!

analyse: line
	(line hint size = 0)
		ifTrue: [ ^ Cells spaces: line cells size ].
	^ super analyse: line
! !

