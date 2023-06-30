const isValidSudoku = function (board) {
  const verticalMap = {};
  let horizontalMap = {};
  let isValid = true;
  let containsNumber = false;

  for (let vertIndex = 0; vertIndex < board.length; vertIndex++) {
    if (!isValid) return isValid;
    const currArray = board[vertIndex];
    horizontalMap = {};

    for (let horIndex = 0; horIndex < currArray.length; horIndex++) {
      const currentNum = currArray[horIndex];

      if (currentNum !== '.') {
        containsNumber = true;
        const isHorizontal = horizontalMap[horIndex] === currentNum;
        if (isHorizontal) {
          isValid = false;
          return isValid;
        }
        horizontalMap[currentNum] = true;

        const verticalArray = verticalMap[horIndex];
        if (verticalArray && verticalArray.includes(currentNum)) {
          isValid = false;
          return isValid;
        }
        if (horIndex in verticalMap) {
          verticalMap[horIndex].push(currentNum);
        } else {
          verticalMap[horIndex] = [];
          verticalMap[horIndex].push(currentNum);
        }
      }
    }
  }
  if (!containsNumber) return containsNumber;
  if (containsNumber) return true;

  return isValid;
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

isValidSudoku(board);
console.log('2:', isValidSudoku(boardTwo));
console.log('3:', isValidSudoku(boardThree));
