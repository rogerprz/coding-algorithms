const countPaths = (grid) => {
  const explore = (grid, row, col, memo = {}) => {
    const rowInbounds = row < grid.length;
    const colInbounds = col < grid[0].length;

    if (!rowInbounds || !colInbounds) {
      return 0;
    }
    if (grid[row][col] === 'X') {
      return 0;
    }
    const pos = `${row},${col}`;
    if (pos in memo) return memo[pos];

    explore(grid, row + 1, col, memo);
    explore(grid, row, col + 1, memo);

    memo[pos] = 1;
    return 1;
  };
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const value = grid[row][col];
      if (value === 'O') {
        count += explore(grid, row, col);
      }
    }
  }
  return count;
};

const grid = [
  ['O', 'O'],
  ['O', 'O']
];
console.log(countPaths(grid)); // -> 2

const grid2 = [
  ['O', 'O', 'X'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(countPaths(grid2)); // -> 5
