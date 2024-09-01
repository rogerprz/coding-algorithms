const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set();

  const explore = (grid, row, col) => {
    const rowInbounds = row >= 0 && row < grid.length;
    const colInbounds = col >= 0 && col < grid[0].length;
    const pos = `${row},${col}`;
    if (!rowInbounds || !colInbounds) {
      return 0;
    }

    if (visited.has(pos)) {
      return 0;
    }
    if (grid[row][col] === 'C') {
      return 0;
    }
    visited.add(pos);
    if (grid[row][col] === 'X') {
      return null;
    }
    const theRow = [...grid];
    theRow[row][col] += ' !';
    console.log('P:', pos, 'V:', grid[row][col]);
    console.log(theRow);
    const distance = Infinity;
    const down = explore(grid, row + 1, col);
    if (!down) {
      return distance;
    }
    const up = explore(grid, row - 1, col);
    const right = explore(grid, row, col + 1);
    const left = explore(grid, row, col - 1);
    return distance;
  };

  explore(grid, startRow, startCol);

  return 'something';
};

const gridFour = [
  ['O', 'O', 'O', 'O', 'O'], // 0
  ['O', 'X', 'O', 'O', 'O'], // 1
  ['O', 'X', 'X', 'O', 'O'], // 2
  ['O', 'X', 'C', 'O', 'O'], // 3
  ['O', 'X', 'X', 'O', 'O'], // 4
  ['C', 'O', 'O', 'O', 'O'] // 5
];

console.log(closestCarrot(gridFour, 1, 2)); // -> 4

const gridFive = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O']
];

console.log(closestCarrot(gridFive, 0, 0)); // -> 5

const gridNine = [
  ['O', 'O', 'X', 'X', 'X'],
  ['O', 'X', 'X', 'X', 'C'],
  ['O', 'X', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'C', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O']
];

console.log(closestCarrot(gridNine, 3, 4)); // -> 9
