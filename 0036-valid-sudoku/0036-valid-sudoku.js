/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = new Set();
  const cols = new Set();
  const boxes = new Set();
  let curRowElem;
  let curColElem;
  let curBoxElem;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      curRowElem = board[i][j];
      curColElem = board[j][i];
      curBoxElem = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)];

      if (rows.has(curRowElem)) return false;
      if (curRowElem !== '.') rows.add(curRowElem);

      if (cols.has(curColElem)) return false;
      if (curColElem !== '.') cols.add(curColElem);

      if (boxes.has(curBoxElem)) return false;
      if (curBoxElem !== '.') boxes.add(curBoxElem);
    }

    rows.clear();
    cols.clear();
    boxes.clear();
  }

  return true;
};