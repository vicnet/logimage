Smalltalk createPackage: 'Logimage'!
(Smalltalk packageAt: 'Logimage') imports: {'silk/Silk'}!
Object subclass: #Application
	instanceVariableNames: 'rows cols grid logimage'
	package: 'Logimage'!

!Application methodsFor: 'as yet unclassified'!

initialize
	"Create items"
	cols := Silk TD: { #class -> 'cols' }.
	rows := Silk TD: { #class -> 'rows' }.
	grid := Silk TD: { #class -> 'center' }.
	"Filling body"
	Silk new << self
!

newButton: text onClick: action
	| btn |
	btn := Silk	A: { #class -> 'button'. text }.
	btn on: #click bind: action.
	^ btn
!

refresh
	cols resetContents.
	cols << (WidgetHints new show: logimage colHints).
	rows resetContents.
	rows << (WidgetHints new show: logimage rowHints).
	grid resetContents.
	grid << (WidgetGrid new show: logimage grid)
!

renderOnSilk: silk
	| menu btn list |
	silk resetContents.
	(silk DIV: { #class -> 'logimage' })
		TABLE
			<< (Silk TR << (Silk TD) << cols)
			<< (Silk TR << rows << grid).
	menu := silk DIV: { #class -> 'menu' }.
	list := menu DIV: { #class -> 'checkboxes' }.
	Strategies instance do: [ :strategy | | name |
		name := strategy id.
		(list DIV: { #class -> 'checkbox' })
			<< (Silk INPUT: { #type -> 'checkbox'.
							  #id -> name.
							  #checked -> 'checked' })
			<< (Silk LABEL: { #for -> name. name })
		].
	 menu << (self newButton: 'Step' onClick: [ | selected |
		selected :=	(list allAt: '.checkbox>input')
			select: [ :cb | cb element checked ]
			thenCollect: [ :cb | Strategies instance at: (cb element id) ].
		self stepWith: selected	]).
	 menu << (self newButton: 'Reset' onClick: [
		 self reset ])
!

reset
	logimage reset.
	self refresh
!

show: aLogimage
	logimage := aLogimage.
	self refresh
!

solve: logimage
	Strategist new solve: logimage.
	self show: logimage
!

step
	| strategist |
	strategist := Strategist new.
	logimage toOld.
	Strategies instance do: [ :strategy |
		strategist apply: strategy on: logimage ].
	self refresh
!

stepWith: strategies
	| strategist |
	strategist := Strategist new.
	logimage toOld.
	strategies do: [ :strategy |
		strategist apply: strategy on: logimage ].
	self refresh
! !

!Application class methodsFor: 'as yet unclassified'!

start
	^ Application new show: Logimage chat
! !

Object subclass: #Cell
	instanceVariableNames: ''
	package: 'Logimage'!
!Cell commentStamp!
A simple cell or pixel.!

!Cell methodsFor: 'as yet unclassified'!

* n
	^ Cells new add: n cell: self
!

= other
	^ false
!

alternative
	"I return list of alternative names or nothing"
	^ #()
!

isBox
	^ false
!

isNew
	^ false
!

isSpace
	^ false
!

isUnknown
	^ false
!

toNew
	^ self
!

toOld
	^ self
! !

Cell class instanceVariableNames: 'cells'!

!Cell class methodsFor: 'instance creation'!

at: symbol
	symbol isString ifTrue: [
		^ cells at: symbol ].
	^ symbol
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
		| name inst |
		name := cls name.
		name := name copyFrom: basesize to: (name size).
		name := name asLowercase.
		inst := cls new.
		cells at: name put: inst.
		cells at: inst asString put: inst.
		inst alternative do: [ :alt | cells at: alt put: inst ]
		]
!

newBox
	^ cells at: #boxnew
!

newSpace
	^ cells at: #spacenew
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

!CellBox methodsFor: 'as yet unclassified'!

toNew
	^ Cell at: #boxnew
! !

!CellBox methodsFor: 'printing'!

= other
	^ other isBox
!

alternative
	^ #('X')
!

isBox
	^ true
!

printOn: stream
	stream nextPutAll: '@'
! !

CellBox subclass: #CellBoxNew
	instanceVariableNames: ''
	package: 'Logimage'!

!CellBoxNew methodsFor: 'as yet unclassified'!

alternative
	^ #()
!

isNew
	^ true
!

printOn: stream
	stream nextPutAll: (String fromCharCode: 174)
!

toOld
	^ Cell at: #box
! !

Cell subclass: #CellSpace
	instanceVariableNames: ''
	package: 'Logimage'!

!CellSpace methodsFor: 'printing'!

= other
	^ other isSpace
!

alternative
	^ #()
!

isSpace
	^ true
!

printOn: stream
	stream nextPutAll: '-'
!

toNew
	^ Cell at: #spacenew
! !

CellSpace subclass: #CellSpaceNew
	instanceVariableNames: ''
	package: 'Logimage'!

!CellSpaceNew methodsFor: 'as yet unclassified'!

alternative
	^ #()
!

isNew
	^ true
!

printOn: stream
	stream nextPutAll: '+'
!

toOld
	^ Cell at: #space
! !

Cell subclass: #CellUnknown
	instanceVariableNames: ''
	package: 'Logimage'!

!CellUnknown methodsFor: 'printing'!

= other
	^ other isUnknown
!

alternative
	^ #('?' '_')
!

isUnknown
	^ true
!

printOn: stream
	stream nextPutAll: ' '
! !

Object subclass: #Cells
	instanceVariableNames: 'cells pos'
	package: 'Logimage'!
!Cells commentStamp!
A line or a column of cells!

!Cells methodsFor: 'as yet unclassified'!

= theCells
	^ (cells = theCells cells) and: (pos = theCells pos)
!

add: aCell
	cells add: (Cell at: aCell)
!

add: n cell: aCell
	n timesRepeat: [ self add: aCell ]
!

addAll: theCells
	cells addAll: theCells cells
!

addBoxes: n
	self add: n cell: (Cell box)
!

addSpaces: n
	self add: n cell: (Cell space)
!

addUnknowns: n
	self add: n cell: (Cell unknown)
!

asArray
	^ cells
!

asNew
	cells := cells collect: [ :c | c toNew ]
!

at: index
	^ cells at: index
!

at: index put: aCell
	^ cells at: index put: (Cell at: aCell)
!

b
	self add: 1 cell: (Cell box)
!

cells
	^ cells
!

cells: theCells
	cells := theCells asArray collect: [ :c | Cell at: c ]
!

do: aBlock
	cells do: aBlock
!

firstBox
	"Return a tupple with index (starting at 1) of first box if exists, and size"
	| posi size |
	posi := 0.
	size := 0.
	cells do: [ :c |
		(size>0)
			ifTrue: [
				c isBox
					ifTrue: [ size := size+1 ]
					ifFalse: [ ^ #{ #pos -> posi. #size -> size } ]
				]
			ifFalse: [
				posi := posi+1.
				c isBox
					ifTrue: [ size := 1 ]
				]
		].
	size=0 ifTrue: [ posi:=0 ].
	^ #{ #pos -> posi. #size -> size }
!

firstFreeSpace
	"Return a tupple with index (starting at 1) of first free (without box) spaces if exists, and size"
	| space size |
	size := 0.
	space := true.
	cells withIndexDo: [ :c :pos |
		c isSpace ifTrue: [
			space := true.
			size > 0 ifTrue: [ ^ #{ #pos -> (pos-size). #size -> size } ]
			].
		c isBox ifTrue: [
			space := false.
			size := 0
			].
		c isUnknown ifTrue: [
			space ifTrue: [ size := size + 1 ]
			]
		].
	(space and: size>0) ifTrue: [ ^ #{ #pos -> (cells size-size+1). #size -> size } ].
	^ #{ #pos -> 0. #size -> 0 }
!

firstNotSpace
	"Return first cells stopping at first space (not box, not unknown)"
	| size |
	size := 0.
	cells withIndexDo: [ :c :i |
		c isSpace
			ifTrue: [
				size > 0 ifTrue: [ ^ self copyFrom: i-size to: i-1 ]
				]
			ifFalse: [
				size := size + 1
				]
		].
	size>0 ifTrue: [ ^ self copyFrom: cells size-size+1 ].
	^ Cells new
!

initialize
	pos := 1.
	cells := { }
!

pos
	^ pos
!

pos: aPos
	pos := aPos
!

reversed
	^ Cells new
		pos: pos;
		cells: cells reversed
!

s
	self add: 1 cell: (Cell space)
!

u
	self add: 1 cell: (Cell unknown)
!

withIndexDo: aBlock
	cells withIndexDo: aBlock
! !

!Cells methodsFor: 'printing'!

copyFrom: ref
	| p1 p2 res |
	ref isNumber
		ifTrue: [ "it is a number where to begin"
			p1 := ref.
			p2 := cells size ]
		ifFalse: [ "is is a tuple where tobegin and size"
			p1 := ref at: #pos.
			p2 := (ref at: #pos) + (ref at: #size) - 1 ].
	^ Cells new
		cells: (cells copyFrom: p1 to: p2);
		pos: pos + p1 - 1
!

copyFrom: p1 to: p2
	^ Cells new
		cells: (cells copyFrom: p1 to: p2);
		pos: pos + p1 - 1
!

isEmpty
	^ cells isEmpty
!

printOn: stream
	stream nextPutAll: '|'.
	pos-1 timesRepeat: [ stream nextPutAll: '.|' ].
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
		ifFalse: [ self addUnknowns: (newSize - self size) ]
! !

!Cells methodsFor: 'private'!

firstDones
	"I returns cells really dones (box separate by spaces)"
	| done |
	done := Cells new pos: pos.
	cells do: [ :c |
		"if found a unknown cell, stop reading cells, remove last boxes"
		c isUnknown ifTrue: [ ^ done trimLast: Cell box ].
		done add: c ].
	^ done
!

isBetter: sol
	"I return true if sol bring something new in my cells"
	sol withIndexDo: [ :c :i |
		(c isUnknown not and: (cells at: i) isUnknown) ifTrue: [ ^ true ]
		].
	^ false
!

lastDones
	"I returns cells really dones (box separate by spaces) at end"
	| done |
	done := (self reversed firstDones) reversed.
	^ done pos: pos + cells size - done size
!

numbers
	"I return a list of number of group of box"
	| numbers current |
	numbers := { }.
	current := 0.
	cells do: [ :c |
		c isBox
			ifTrue: [ current := current + 1 ]
			ifFalse: [
				current > 0 ifTrue: [ numbers add: current ].
				current := 0 ]
		].
	"add the last one if exist" 
	current > 0 ifTrue: [ numbers add: current ].
	^ numbers
!

trim
	"I return a list of cells without begining and ending spaces"
	^ self trimFirst trimLast
!

trimFirst
	"I return a list of cells without begining spaces"
	^ self trimFirst: Cell space
!

trimFirst: cell
	"I return a list of cells without begining spaces"
	| add trimed |
	add := false.
	trimed := cells select: [ :c |
		c = cell ifFalse: [ add := true ].
		add	].
	^ Cells new
		pos: pos + cells size - trimed size;
		cells: trimed
!

trimLast
	"I return a list of cells without ending spaces"
	^ self trimLast: Cell space
!

trimLast: cell
	"I return a list of cells without ending sort of cell, keep pos"
	^ ((self reversed trimFirst: cell) reversed) pos: pos
! !

!Cells class methodsFor: 'as yet unclassified'!

boxes: n
	^ self new add: n cell: (Cell box)
!

new
	^ self new: #( )
!

new: cells
	^ super new cells: cells
!

spaces: n
	^ self new add: n cell: (Cell space)
!

unknowns: n
	^ self new add: n cell: (Cell unknown)
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
!

rowDo: aBlock
	1 to: size y do: [ :row |
		aBlock value:  (self rowAt: row) ]
! !

!Grid methodsFor: 'as yet unclassified'!

box: point
	self at: point put: (Cell box)
!

newBox: point
	(self at: point) isBox ifTrue: [ ^ self ].
	(self at: point) isUnknown ifFalse: [ self error: 'try to set new cell on already set' ].
	self at: point put: Cell newBox
!

newSpace: point
	(self at: point) isSpace ifTrue: [ ^ self ].
	(self at: point) isUnknown ifFalse: [ self error: 'try to set new cell on already set' ].
	self at: point put: Cell newSpace
!

size
	"I return a point with x and y sizes"
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
	self rowDo: [ :r |
		stream cr.
		r printOn: stream ]
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
!

toOld
	cells := cells collect: [ :cell | cell toOld ]
! !

Object subclass: #Hint
	instanceVariableNames: 'numbers'
	package: 'Logimage'!
!Hint commentStamp!
List of numbers!

!Hint methodsFor: 'as yet unclassified'!

= hint
	^ numbers = hint numbers
!

at: index
	^ numbers at: index
!

do: aBlock
	numbers do: aBlock
!

first
	^ numbers first
!

firstRemoved: n
	^ Hint new: (numbers copyFrom: (n+1) to: numbers size)
!

initialize
	numbers = #()
!

isEmpty
	^ numbers isEmpty
!

lastRemoved: n
	^ Hint new: (numbers copyFrom: 1 to: numbers size - n)
!

max
	^ numbers
		inject: 0
		into: [ :r :e | e > r ifTrue: [e] ifFalse: [r] ]
!

min
	^ numbers
		inject: 1000
		into: [ :r :e | e < r ifTrue: [e] ifFalse: [r] ]
!

numbers
	^ numbers
!

numbers: array
	array isString ifTrue: [
		numbers := (array tokenize: ' ') asArray collect: [ :e | e asNumber].
		^ self].
	numbers := array
!

reversed
	^ Hint new: numbers reversed
!

size
	^ numbers size
! !

!Hint methodsFor: 'printing'!

printOn: stream
	stream nextPutAll: '[ '.
	numbers do: [ :n |
		n printOn: stream.
		stream space ].
	stream nextPutAll: ']'
! !

!Hint class methodsFor: 'as yet unclassified'!

new: numbers
	^ self new numbers: numbers
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

do: aBlock
	hints do: aBlock
!

initialize
	hints := {}
!

maxSize
	^ hints inject: 0 into: [:a :c | (a > c  numbers size) ifTrue: [a] ifFalse: [c numbers size]]
!

printOn: stream
	hints do: [ :hint |
		hint printOn: stream.
		stream cr ]
!

size
	^ hints size
! !

Object subclass: #Line
	instanceVariableNames: 'hint cells'
	package: 'Logimage'!

!Line methodsFor: 'accessing'!

= line
	^ (hint = line hint) and: (cells = line cells)
!

cells
	^ cells
!

cells: anObject
	anObject isString ifTrue: [
		cells := Cells new: anObject.
		^ self].
	cells := anObject
!

hint
	^ hint
!

hint: anObject
	anObject isString ifTrue: [
		hint := Hint new: anObject.
		^ self ].
	hint := anObject
!

isDone
	^ False
!

line: aLine
	aLine isString ifTrue: [ | parts |
		parts := aLine tokenize: '|'.
		self hint:  (parts at: 1);
	    	 cells: (parts at: 2).
		^ self ].
	self hint:  aLine hint;
	     cells: aLine cells
!

reducedFirst
	| dones first |
	dones := cells firstDones.
	first := dones numbers.
	first ifEmpty: [ ^ self trimFirst ].
	^ Line
		hint: (hint firstRemoved: first size)
		cells: (cells copyFrom: (dones size)+1) "copy after dones"
!

reducedLast
	| dones last |
	dones := cells lastDones.
	last :=  dones numbers.
	last ifEmpty: [ ^ self trimLast ].
	"self assert: ((hint numbers) endsWith: last)."
	^ Line
		hint: (hint lastRemoved: last size)
		cells: (cells copyFrom: 1 to: cells size - dones size)
!

reversed
	^ Line new hint: hint reversed; cells: cells reversed
!

trim
	^ Line hint: self hint cells: self cells trim
!

trimFirst
	^ Line hint: self hint cells: self cells trimFirst
!

trimLast
	^ Line hint: self hint cells: self cells trimLast
! !

!Line methodsFor: 'printing'!

printOn: stream
	hint printOn: stream.
	cells printOn: stream
! !

!Line class methodsFor: 'as yet unclassified'!

hint: hint cells: cells
	^ self new hint: hint; cells: cells
!

new: line
	^ self new line: line
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
	^ Line
		hint: (self colHintAt: index)
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
	^ Line
		hint: (self rowHintAt: index)
		cells: (self rowCellsAt: index)
!

rowLines
	^ (1 to: row size) collect: [ :index |
			self rowLineAt: index ]
!

toOld
	^ grid toOld
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

newBox: point
	grid newBox: point
!

newSpace: point
	grid newSpace: point
!

reset
	grid := Grid new.
	self resize
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

chat
	^ self
		rows: #(
			#(       7 2 1 2 1 )
			#(   1 1 2 2 3 2 3 )
			#(   1 1 3 3 3 3 3 )
			#(   7 1 1 3 1 1 3 )
			#( 1 1 1 3 3 1 2 2 )
		"--------------------------------"
			#( 1 1 1 3 3 3 1 1 )
			#( 1 1 1 3 3 3 3 3 )
			#( 1 1 1 3 3 3 3 3 )
			#(     7 3 3 3 3 3 )
			#(         9 3 3 3 )
		"--------------------------------"
			#(        7 2 10 7 )
			#(          7  1 14 )
			#(       1 1 1 1 3 )
			#(     1 1 1 3 2 1 )
			#(   1 1 5 3 1 3 1 )
		"--------------------------------"
			#(     1 1 9 5 3 1 )
			#(          11 7 6 )
			#(               29 )
			#(             1 24 )
			#(             3 26 )
		"--------------------------------"
			#(          4 19 1 )
			#(        1 5  7 2 )
			#(        2 1 12 3 )
			#(        1 1  3 12 )
			#(      1 1 2  2 2 )
		"--------------------------------"
			#(           4 1 4 2 2 1 )
			#(       2 2 4 2 4 3 4 3 )
			#( 1 3 1 4 1 2 1 5 1 1 1 )
			#(   1 5 1 1 6 1 3 1 1 2 )
			#(       2 3 1 3 1 3 1 1 )
		"--------------------------------"
			#(     6 2 5 2 3 2 )
			#(         6 6 3 4 )
			#(   1 4 1 6 1 1 3 )
			#( 1 4 1 7 1 1 3 1 )
			#( 2 3 2 1 5 1 5 1 )
		"--------------------------------"
			#( 1 4 2 1 3 2 5 2 )
			#(   1 3 1 2 4 6 1 )
			#(   7 1 1 1 1 7 1 )
			#(   6 1 2 2 2 9 1 )
			#(         5 2 9 1 )
		"--------------------------------"
			#( 6 1 2 4 8 )
			#(   6 2 4 9 )
			#(     8 5 4 )
			#(   2 2 3 2 )
			#(   3 4 3 4 )
		"--------------------------------"
		)
		cols: #(
			#( 2 4 3 )
			#( 9 6 4 3 2 5 )
			#( 1 1 1 2 2 2 8 1 )
			#( 1 1 1 2 3 1 2 1 11 1 )
			#( 1 6 2 1 4 4 13 )
		"--------------------------------"
			#( 1 1 1 6 1 2 14 8 )
			#( 1 1 1 2 1 2 6 4 3 )
			#( 9 2 12 2 1 )
			#( 5 2 1 1 5 3 1 )
			#( 1 2 6 2 1 1 1 6 )
		"--------------------------------"
			#( 3 1 8 2 2 1 )
			#( 2 6 7 1 1 2 4 1 )
			#( 8 7 1 3 2 3 )
			#( 1 7 6 1 2 3 )
			#( 2 2 7 1 5 )
		"--------------------------------"
			#( 2 7 8 1 3 9 )
			#( 9 8 2 2 1 7 1 )
			#( 1 7 6 13 1 1 )
			#( 2 2 4 10 4 2 )
			#( 3 2 5 1 1 8 1 1 )
		"--------------------------------"
			#( 3 7 7 2 1 1 2 )
			#( 10 6 1 3 2 )
			#( 7 8 1 2 3 2 )
			#( 1 1 8 1 4 3 3 )
			#( 3 6 8 1 2 2 5 4 )
		"--------------------------------"
			#( 1 8 6 2 4 1 10 1 )
			#( 1 3 6 5 7 2 9 )
			#( 1 2 6 1 6 9 )
			#( 4 6 7 2 12 )
			#( 11 6 12 7 )
		"--------------------------------"
			#( 2 7 6 1 1 2 8 )
			#( 2 5 2 1 1 1 3 5 )
			#( 5 2 1 1 1 8 1 )
			#( 1 2 1 1 1 )
			#( 3 3 )
		"--------------------------------"
		)
!

joconde
	^ self
		rows: #(
			#( 4 )
			#( 1 2 )
			#( 1 2 )
			#( 1 2 )
			#( 1 2 )

			#( 2 2 )
			#( 1 1 )
			#( 2 2 )
			#( 3 3 )
			#( 9 )

			#( 9 )
			#( 10 )
			#( 1 1 1 2 )
			#( 2 4 )
			#( 3 4 ) )
		cols: #(
			#( 4 )
			#( 3 2 )
			#( 6 1 )
			#( 11 )
			#( 1 1 4 )

			#( 1 4 )
			#( 1 3 2 )
			#( 6 4 2 )
			#( 14 )
			#( 8 )
		)
!

question
	^ self
		rows: #(
			#( 3 )
			#( 2 2 )
			#( 1 1 )
			#( 2 )
			#( 2 )
			#( 1 )
			#( 1 )
			#( )
			#( 1 )
		)
		cols: #(
			#( 2 )
			#( 2 )
			#( 1 3 1 )
			#( 2 2 )
			#( 3 )
		)
!

rows: rows cols: cols
	| l |
	l := self new.
	rows do: [ :hint | l addRowHints: hint ].
	cols do: [ :hint | l addColHints: hint ].
	^ l
!

simple
	^ self
		rows: #(
			#( 1 )
			#( 2 )
		)
		cols: #(
			#( 1 )
			#( 2 )
		)
!

vainqueur
	^ self
		rows: #(
			#( 5 )
			#( 4 7 )
			#( 2 1 9 2 )
			#( 1 1 9 1 2)
			#( 2 1 2 3 1 1 )

			#( 2 1 1 1 1 1 2 1 )
			#( 2 1 1 1 2 3 )
			#( 6 1 1 1 2 2 )
			#( 5 4 4 2 )
			#( 6 1 5 )

			#( 4 5 5 )
			#( 4 6 5 )
			#( 7 13 2 2 )
			#( 2 12 2 4 )
			#( 5 2 14 3 3 )
			
			#( 2 13 3 )
			#( 3 3 )
			#( 5 4 )
			#( 17 )
			#( 11 )

			#( 7 2 )
			#( 2 2 1 )
			#( 7 1 )
			#( 10 1 1 1 1 11 )
			#( 5 2 1 1 1 1 2 2 2 5 )

			#( 4 3 1 1 1 2 1 1 2 3 4 )
			#( 3 4 1 1 1 2 1 2 4 3 )
			#( 2 4 2 5 1 1 4 4 2 )
			#( 1 5 2 1 1 4 4 5 1 )
			#( 5 3 1 1 1 5 6 )

			#( 6 3 1 1 5 5 6 )
			#( 5 3 3 1 5 5 6 )
			#( 5 3 6 5 5 6 )
			#( 4 5 4 6 6 5 )
			#( 4 6 8 6 5 )
		)
		cols: #(
			#( 1 1 6 5 )
			#( 1 1 5 6 )
			#( 1 1 4 7 )
			#( 3 1 1 3 8 )
			#( 2 2 1 2 2 7 )

			#( 1 2 1 2 1 6 2 )
			#( 1 2 2 2 6 4 )
			#( 3 3 2 3 4 6 )
			#( 2 4 1 2 1 8 )
			#( 6 1 2 8 2 )
			
			#( 6 1 2 2 1 )
			#( 14 16 )
			#( 4 1 5 5 1 3 )
			#( 4 1 1 1 4 3 1 1 2 )
			#( 4 1 1 4 3 1 1 3 )

			#( 4 1 1 4 3 11 1 )
			#( 4 1 1 1 4 3 1 2)
			#( 5 2 1 4 3 4 6 )
			#( 4 1 5 2 1 4 5 )
			#( 7 6 2 1 1 1 5 )
			
			#( 8 4 1 1 5 )
			#( 9 8 2 5 )
			#( 9 2 3 1 )
			#( 2 3 1 3 8 )
			#( 2 2 1 1 12 )
			
			#( 1 2 1 2 12 )
			#( 1 2 1 1 1 8 )
			#( 2 1 1 2 4 5 )
			#( 4 1 1 7 2 )
			#( 1 2 1 8 )
			
			#( 1 1 2 9 )
			#( 1 1 3 8 )
			#( 1 2 4 7 )
			#( 2 1 5 6 )
			#( 1 1 6 5 )
		)
! !

Object subclass: #Strategies
	instanceVariableNames: 'list'
	package: 'Logimage'!
!Strategies commentStamp!
List of strategy!

!Strategies methodsFor: 'as yet unclassified'!

at: name
	^ list at: name
!

atRandom
	^ list values atRandom
!

do: aBlock
	list valuesDo: aBlock
!

initialize
	"TODO should be autodeclared by each instance !!"
	list := #{
		#spacesonly -> StratSpacesOnly.
		#allhintdone -> StratAllHintDone.
		#countalldone -> StratCountAllDone.
		#recover -> StratRecover.
		#notreached -> StratNotReached.
		#firstcover -> StratFirstCover.
		#lastcover -> StratLastCover.
		#minspace -> StratMinSpace.
		#firstdone -> StratFirstDone.
		#lastdone -> StratLastDone.
		#testbox -> StratTestBox.
		#firstcutspace -> StratFirstCutSpace.
		#lastcutspace -> StratLastCutSpace.
		#firstmore -> StratFirstMore.
		#lastmore -> StratLastMore.
		}
		collect: [ :strat | strat new ]
!

keysAndValuesDo: aBlock
	list keysAndValuesDo: aBlock
! !

Strategies class instanceVariableNames: 'instance'!

!Strategies class methodsFor: 'as yet unclassified'!

instance
	^ instance ifNil: [ instance := super new ]
!

new
	self shouldNotImplement
!

reset
	instance := nil
! !

Object subclass: #Strategist
	instanceVariableNames: ''
	package: 'Logimage'!
!Strategist commentStamp!
I apply (analyse, get a solution then apply) one or more strategies on a logimage, or a line.!

!Strategist methodsFor: 'as yet unclassified'!

apply: strategy on: logimage
	self apply: strategy onRowOf: logimage.
	self apply: strategy onColOf: logimage
!

apply: strategy onColOf: logimage
	1 to: logimage grid size x do: [ :x | | sol line reduced start |
		line := logimage colLineAt: x.
"Transcript show: 'apply on col: '; show: x; show: ' => '; show: line; cr."
		reduced := line reducedFirst.
		start := line cells size - reduced cells size.
		sol := strategy analyse: reduced reducedLast.
		self setSol: sol on: logimage atCol: x after: start ]
!

apply: strategy onRowOf: logimage
	1 to: logimage grid size y do: [ :y | | sol line reduced start |
		line := logimage rowLineAt: y.
"Transcript show: 'apply on row: '; show: y; show: ' => '; show: line; cr."
		reduced := line reducedFirst.
		start := line cells size - reduced cells size.
		sol := strategy analyse: reduced reducedLast.
		self setSol: sol on: logimage atRow: y after: start ]
!

setSol: cell on: logimage at: point
	(point x > logimage grid size x) ifTrue: [ ^ self ].
	(point y > logimage grid size y) ifTrue: [ ^ self ].
	cell isBox ifTrue: [ logimage newBox: point. ^ self ].
	cell isSpace ifTrue: [ logimage newSpace: point. ^ self ]
!

setSol: cells on: logimage atCol: x after: start
	cells cells withIndexDo: [ :cell :y |
		self setSol: cell on: logimage at: x@(y+start) ]
!

setSol: cells on: logimage atRow: y after: start
	cells cells withIndexDo: [ :cell :x |
		self setSol: cell on: logimage at: (x+start)@y ]
!

solve: logimage
	Strategies reset.
	10 timesRepeat: [
		Strategies instance do: [ :strategy |
			self apply: strategy on: logimage ]
		]
"50 timesRepeat: [ | strategy |
	strategy := Strategies instance atRandom.
	Transcript show: strategy class name; cr.
	self apply: strategy on: logimage ]"
! !

Object subclass: #Strategy
	instanceVariableNames: ''
	package: 'Logimage'!
!Strategy commentStamp!
I analyse a line and returns a solution with spaces and boxes.!

!Strategy methodsFor: 'as yet unclassified'!

analyse: line
	^ Cells new
!

id
	^ self class id
!

isBidirectional
	self subclassResponsibility
!

none
	^ Cells new
! !

!Strategy class methodsFor: 'as yet unclassified'!

analyse: line
	line isString ifTrue: [
		^ self new analyse: (Line new: line) ].
	^ self new analyse: line
!

id
	| name |
	name := self name.
	name := name copyFrom: 6 to: (name size).
	name := name asLowercase.
	^ name
! !

Strategy subclass: #StratAllHintDone
	instanceVariableNames: ''
	package: 'Logimage'!

!StratAllHintDone methodsFor: 'as yet unclassified'!

analyse: line
	| sol |
	(line hint) = (Hint new: (line cells numbers)) ifFalse: [ ^ self none ].
	"If all hints are resolved, all cell are filled"
	sol := Cells new.
	"replace unknown by spaces"
	line cells do: [ :c |
		c isUnknown
			ifFalse: [ sol addUnknowns: 1 ]
			ifTrue: [ sol addSpaces: 1 ] ].
	^ sol
!

isBidirectional
	^ true
! !

Strategy subclass: #StratCount
	instanceVariableNames: ''
	package: 'Logimage'!
!StratCount commentStamp!
I am a helper to implement strategy.
I give some messages to count different sort of cells.!

!StratCount methodsFor: 'as yet unclassified'!

free: line
	"I return the number of cells that are free to move"

	"if no more hint, no free spaces"
	(line hint size = 0) ifTrue: [ ^ 0 ].
	^ (line cells size) - (self occupation: line hint)
!

occupation: hint
	"I return the number of cells filled for all numbers in hint,
	 with one space between each, minus one (the last)"
	(hint size = 0) ifTrue: [ ^ 0 ].
	^ (self sum: hint) + hint size - 1
!

sum: hint
	"I return the sum of all numbers, without spaces"
	^ hint numbers inject: 0 into: [ :s :n | s+n ]
! !

StratCount subclass: #StratCountAllDone
	instanceVariableNames: ''
	package: 'Logimage'!
!StratCountAllDone commentStamp!
I try to detect if a line is filled with boxes and spaces, ie no more rooms.!

!StratCountAllDone methodsFor: 'as yet unclassified'!

analyse: line
	| sol |
	"If some space remaining, could not find solution"
	(self free: line) = 0
		ifFalse: [ ^ self none ].
	"If no space remaining, all cell are filled"
	sol := Cells new.
	line hint numbers do: [ :n |
		sol addBoxes: n;
			addSpaces: 1 ].
	"remove last space if line full"
	^ sol size: (line cells size)
!

isBidirectional
	^ true
! !

StratCount subclass: #StratRecover
	instanceVariableNames: ''
	package: 'Logimage'!
!StratRecover commentStamp!
I calculate free available moves. I add box on hint that are bigger then free, then recovers.
Example: hint: 3 on 4 spaces, give 1 free and then | ? X X ? |
Duplicate 'StratAllDone' if free cells are  0 !!!

!StratRecover methodsFor: 'as yet unclassified'!

analyse: line
	| free sol |
	free := self free: line.
	sol := Cells new.
	line hint do: [ :n |
		sol addUnknowns: (n min: free);
			addBoxes: (n - free);
			addUnknowns: 1 ].
	"remove last unknown if line full"
	sol := sol size: (line cells size).
	(line cells isBetter: sol) ifFalse: [ ^ self none ].
	^ sol
!

isBidirectional
	^ true
! !

Strategy subclass: #StratFirstBox
	instanceVariableNames: ''
	package: 'Logimage'!
!StratFirstBox commentStamp!
I am a base for strategy base on first box inside the first hint.!

!StratFirstBox methodsFor: 'as yet unclassified'!

firstBox: line
	"analyse a line to detect if a box is inside the first hint"
	| first |
	"check if one hint min"
	line hint isEmpty ifTrue: [ ^ nil ].
	"get first box"
	first := line cells firstBox.
	"no box, no sol"
	(first at: #pos) > 0 ifFalse: [ ^ nil ].
	"test hint over first box"
	line hint first >= (first at: #pos) ifFalse: [ ^ nil ].
	^ first
!

isBidirectional
	^ false
! !

StratFirstBox subclass: #StratFirstCover
	instanceVariableNames: ''
	package: 'Logimage'!
!StratFirstCover commentStamp!
If a first hint crosses a box from the begining, all over crossed space are boxes until hint.
Example: 3|?X?  give |?XX!

!StratFirstCover methodsFor: 'as yet unclassified'!

analyse: line
	| first pos sol |
	first := self firstBox: line.
	first ifNil: [ ^ self none ].
	"yes, first hint cross the first box, get sol"
	pos := first at: #pos.
	sol := Cells new
		addUnknowns: pos-1;
		addBoxes: line hint first-pos+1.
	(line cells isBetter: sol) ifFalse: [ ^ self none ].
	^ sol
! !

StratFirstBox subclass: #StratFirstDone
	instanceVariableNames: ''
	package: 'Logimage'!
!StratFirstDone commentStamp!
I add a space after first boxes done (corresponding to first hint).!

!StratFirstDone methodsFor: 'as yet unclassified'!

analyse: line
	| first |
	first := self firstBox: line.
	first ifNil: [ ^ self none ].
	"check that it is the first place"
	(first at: #pos) = 1 ifFalse: [ ^ self none ].
	"test if first hint is same as box"
	line hint first = (first at: #size) ifFalse: [ ^ self none ].
	"get solution, without space"
	^ Cells new
		addBoxes: (first at: #size);
		addSpaces: 1
! !

StratFirstBox subclass: #StratFirstMore
	instanceVariableNames: ''
	package: 'Logimage'!

!StratFirstMore methodsFor: 'as yet unclassified'!

analyse: line
	| first pos size |
	first := self firstBox: line.
	first ifNil: [ ^ self none ].
	"yes, first hint cross the first box, test if over"
	"test if at least one extra box after last hint box"
	size := line hint first.
	pos := first at: #pos.
	pos+size > line cells size ifTrue: [ ^ self none ].
	(line cells at: pos+size) isBox
		ifFalse: [ ^ self none ].
	"build a solution"
	"find first non-box from over box downto start"
	first := (pos+size-1 to: 1 by: -1)
		detect: [ :i |
			(line cells at: i) isBox not ].
	^  Cells new
		addUnknowns: first-size-1;
		addBoxes: pos+size-first
! !

Strategy subclass: #StratFirstCutSpace
	instanceVariableNames: ''
	package: 'Logimage'!
!StratFirstCutSpace commentStamp!
If a line contains a space, I cut in two parts and check if the first hint must be alone in the first part.
If so, try strategies on this part with first hint.!

!StratFirstCutSpace methodsFor: 'as yet unclassified'!

analyse: line
	| firstcells firstline othercells otherline firstres otherres |
	"check min hint size"
	line hint isEmpty ifTrue: [ ^ self none ].

	"get first cells and check some rules"
	firstcells := line cells firstNotSpace.
	"if no space, already done by other firstXXX"
	firstcells isEmpty ifTrue: [ ^ self none ].
	firstcells size = line cells size ifTrue: [ ^ self none ].

	"check if only first number forced to be inside first cells"
	(self isFirstForced: line hint on: firstcells)
		ifFalse: [ ^ self none ].

	"analyse first cells"
	firstline := Line
		hint: (Hint new: { line hint first })
		cells: firstcells.
	firstres := self testStrategies: firstline.

	" complete first res if needed to the first cells size"
	firstres addUnknowns: (firstcells size - firstres size).
	
	othercells := (line cells copyFrom: firstcells size + 1) trimFirst.
	otherline := Line
		hint: (line hint firstRemoved: 1)
		cells: othercells.
	otherres := self testStrategies: otherline.
	firstres addSpaces: (othercells pos - firstcells size - 1).
	firstres addAll: otherres.

	^ firstres
!

isBidirectional
	^ false
!

isFirstForced: hint on: firstcells
	"check if only first number forced to be inside first cells"
	" hint contains at least one element, and cells one cell"
	| firstbox |
	firstbox := firstcells firstBox.
	"check if one box min in first cells"
	(firstbox at: #pos) > 0 ifFalse: [ ^ false ].

	"check if only first number forced to be inside first cells"

	"check for 2 or more hints"
	hint size >= 2 ifTrue: [
		(hint at: 1) + (hint at: 2) + 1 > firstcells size
			ifTrue: [ ^ true ]
		].
	"check for 1 or more hints not work all case"
	" only one is already done by firstXXX or lastXXX stratgies"

	"no good case, could not be sure that first hint is inside cells"
	^ false
!

testStrategies: line
	Strategies instance do: [ :strategy | | res |
		res := strategy analyse: line.
		res isEmpty ifFalse: [ ^ res] ].
	^ self none
! !

Strategy subclass: #StratMinSpace
	instanceVariableNames: ''
	package: 'Logimage'!
!StratMinSpace commentStamp!
I fill first cells with spaces when min hint are bigger than first holes.!

!StratMinSpace methodsFor: 'as yet unclassified'!

analyse: line
	| min free |
	"Get min hint, and check if more than only 1"
	min := line hint min.
	min > 1 ifFalse: [ ^ self none ].
	"Get first cells that are free of boxes before space or end"
	free := line cells firstFreeSpace.
	(free at: #pos) > 0 ifFalse: [ ^ self none ].
	min > (free at: #size) ifFalse: [ ^ self none ].
	^ Cells new
		addUnknowns: (free at: #pos)-1;
		addSpaces: (free at: #size)
!

isBidirectional
	^ true
! !

Strategy subclass: #StratNotReached
	instanceVariableNames: ''
	package: 'Logimage'!
!StratNotReached commentStamp!
I fill with spaces, cells that can not be reached by boxes.
Used only if one hint.!

!StratNotReached methodsFor: 'as yet unclassified'!

analyse: line
	"only one hint is tested yet"
	| n box sol |
	"If only one hint and at least one box,returns other empty spaces"
	(line hint size == 1)
		ifFalse: [ ^ self none ].
	"get informations"
	box := line cells firstBox.
	(box at: #pos) = 0 ifTrue: [ ^ self none ].
	n := line hint first.
	"create solution"
	sol := Cells new
		addSpaces: (0 max: ((box at: #pos)+(box at: #size)-1-n));
		addUnknowns: (2*n-(box at: #size));
		addSpaces: (0 max: (line cells size - (box at: #pos)-n+1)).
	^ sol
!

isBidirectional
	^ true
! !

Strategy subclass: #StratReverted
	instanceVariableNames: 'strategy'
	package: 'Logimage'!

!StratReverted methodsFor: 'as yet unclassified'!

analyse: line
	| sol |
	"Use strategy on reversed line, then reversed result"
	sol := (strategy analyse: line reversed) reversed.
	sol size = 0 ifTrue: [ ^ self none ].
	^ Cells new
		"and add first unknown cells before"
		addUnknowns: line cells size - sol size;
		addAll: sol
!

isBidirectional
	^ false
! !

StratReverted subclass: #StratLastCover
	instanceVariableNames: ''
	package: 'Logimage'!
!StratLastCover commentStamp!
Same as first cover but by other side (invert).!

!StratLastCover methodsFor: 'as yet unclassified'!

initialize
	strategy := StratFirstCover new
! !

StratReverted subclass: #StratLastCutSpace
	instanceVariableNames: ''
	package: 'Logimage'!

!StratLastCutSpace methodsFor: 'as yet unclassified'!

initialize
	strategy := StratFirstCutSpace new
! !

StratReverted subclass: #StratLastDone
	instanceVariableNames: 'strategy'
	package: 'Logimage'!

!StratLastDone methodsFor: 'as yet unclassified'!

initialize
	strategy := StratFirstDone new
! !

StratReverted subclass: #StratLastMore
	instanceVariableNames: 'strategy'
	package: 'Logimage'!

!StratLastMore methodsFor: 'as yet unclassified'!

initialize
	strategy := StratFirstMore new
! !

Strategy subclass: #StratSpacesOnly
	instanceVariableNames: ''
	package: 'Logimage'!
!StratSpacesOnly commentStamp!
I fill spaces if no hints.!

!StratSpacesOnly methodsFor: 'as yet unclassified'!

analyse: line
	"If no hint, returns a line with empty spaces"
	(line hint size = 0)
		ifTrue: [ ^ Cells spaces: line cells size ].
	^ self none
!

isBidirectional
	^ true
! !

Strategy subclass: #StratTestBox
	instanceVariableNames: ''
	package: 'Logimage'!
!StratTestBox commentStamp!
I test one box at each position, try to detect if it is possible, regarding if the number of contigus boxes are greater than hints.
If not, it is a space.!

!StratTestBox methodsFor: 'as yet unclassified'!

analyse: line
	| sol |
	sol := Cells new.
	1 to: line cells size do: [ :i | |l|
"TODO test only unknown cells..."
		l := line cells deepCopy at: i put: Cell box; yourself.
		(Hint new: l numbers) max > line hint max
			ifTrue: [ sol addSpaces: 1 ]
			ifFalse: [ sol addUnknowns: 1 ]
		].
	^ sol trimLast: Cell unknown
!

isBidirectional
	^ true
! !

Object subclass: #WidgetCell
	instanceVariableNames: 'div'
	package: 'Logimage'!

!WidgetCell methodsFor: 'as yet unclassified'!

initialize
	div := Silk DIV: { #class -> 'cell' }
!

renderOnSilk: silk
	silk << div
!

show: cell
	| class |
	div resetContents.
	class := 'cell'.
	cell isBox ifTrue: [ class := class,' box' ].
	cell isSpace ifTrue: [ class := class,' space' ].
	cell isNew ifTrue: [ class := class,' new' ].
	div << { #class -> class }
! !

Object subclass: #WidgetGrid
	instanceVariableNames: 'div'
	package: 'Logimage'!

!WidgetGrid methodsFor: 'as yet unclassified'!

initialize
	div := Silk DIV: { #class -> 'grid' }
!

renderOnSilk: silk
	silk << div
!

show: grid
	| y |
	y := 0.
	div resetContents.
	grid rowDo: [ :row | | line x |
		x := 0.
		y := y+1.
		line := div DIV: { #class -> ('line',(y\\5=0 ifTrue: [' gras'] ifFalse: [''])) }.
		row do: [ :cell |
			x := x + 1.
			line << (WidgetCell new show: cell)
		]
	]
! !

Object subclass: #WidgetHint
	instanceVariableNames: 'div'
	package: 'Logimage'!

!WidgetHint methodsFor: 'as yet unclassified'!

initialize
	div := Silk DIV: { #class -> 'hint' }
!

renderOnSilk: silk
	silk << div
!

show: hint
	div resetContents.
	hint do: [ :n |
		div DIV: { #class -> 'number'. n } ]
! !

Object subclass: #WidgetHints
	instanceVariableNames: 'div'
	package: 'Logimage'!

!WidgetHints methodsFor: 'as yet unclassified'!

initialize
	div := Silk DIV: { #class -> 'hints' }
!

renderOnSilk: silk
	silk << div
!

show: hints
	div resetContents.
	hints do: [ :hint |
		div << (WidgetHint new show: hint) ]
! !

