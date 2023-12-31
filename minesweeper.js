document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
const board = {
  cells: [
    { row: 0, col: 0, isMine: false, hidden: true, isMarked: false },
    { row: 0, col: 1, isMine: false, hidden: true, isMarked: false },
    // { row: 0, col: 2, isMine: true, hidden: true,  isMarked: false,},
    // { row: 0, col: 3, isMine: false, hidden: true,  isMarked: false,},
    { row: 1, col: 0, isMine: true, hidden: true, isMarked: false },
    { row: 1, col: 1, isMine: false, hidden: true, isMarked: false },
    // { row: 1, col: 2, isMine: false, hidden: true,  isMarked: false,},
    // { row: 1, col: 3, isMine: true, hidden: true,  isMarked: false,},
    // { row: 2, col: 0, isMine: true, hidden: true,  isMarked: false, },
    // { row: 2, col: 1, isMine: false, hidden: true,  isMarked: false,},
    // { row: 2, col: 2, isMine: true, hidden: true,  isMarked: false,},
    // { row: 2, col: 3, isMine: false, hidden: true,  isMarked: false,},
    // { row: 3, col: 0, isMine: false, hidden: true,  isMarked: false,},
    // { row: 3, col: 1, isMine: false, hidden: true,  isMarked: false,},
    // { row: 3, col: 2, isMine: false, hidden: true,  isMarked: false,},
    // { row: 3, col: 3, isMine: false, hidden: true,  isMarked: false,},
  ],
}

function startGame() {
  for (const cell of board.cells) {
    cell.surroundingMines = countSurroundingMines(cell)
  }
  console.log(board)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  checkForWin()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  let allNonMineCellsVisible = true
  let allMinesMarked = true

  for (const cell of board.cells) {
   
    if (cell.isMine && !cell.isMarked) {
      allMinesMarked = false
    }

    if (!cell.isMine && cell.hidden) {
      allNonMineCellsVisible = false
    }

  if (allNonMineCellsVisible && allMinesMarked) {
    lib.displayMessage('You win!')
  }
}
}


// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   const surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  const surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0

  for (const surroundingCell of surrounding) {
    if (surroundingCell.isMine) {
      count++
    }
  }

  return count
}
