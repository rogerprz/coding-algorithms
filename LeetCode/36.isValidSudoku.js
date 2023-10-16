const isValidSudoku = function (board) {
  // we need to create a set to find if row has repeating value
  // we need to create a set to save column values
  // we need to get a set so we can detect box.

  // loop through first array
  for (let i = 0; i < board.length; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const currRowElem = board[i][j];
      const currColElem = board[j][i];

      const xIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const yIndex = ((i * 3) % 9) + (j % 3);
      console.log('X:', xIndex, 'Y:', yIndex);
      const currBoxElem = board[xIndex][yIndex];

      if (row.has(currRowElem)) return false;
      if (col.has(currColElem)) return false;
      if (box.has(currBoxElem)) return false;

      if (currRowElem !== '.') row.add(currRowElem);
      if (currColElem !== '.') col.add(currColElem);
      if (currBoxElem !== '.') box.add(currBoxElem);
    }
  }
  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
// Output: true

const boardTwo = [
  ['7', '.', '.', '.', '4', '.', '.', '.', '.'],
  ['.', '.', '.', '8', '6', '5', '.', '.', '.'],
  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '9', '.', '.', '.'],
  ['.', '.', '.', '.', '5', '.', '5', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.']
];
const boardThree = [
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.']
];

console.log('1:', isValidSudoku(board));
console.log('2:', isValidSudoku(boardTwo));
console.log('3:', isValidSudoku(boardThree));
