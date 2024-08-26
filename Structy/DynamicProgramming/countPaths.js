const countPaths = (grid, row = 0, col = 0, memo = {}) => {
  const pos = `${row},${col}`;
  if (pos in memo) return memo[pos];
  if (row === grid.length || col === grid[0].length || grid[row][col] === 'X') return 0;
  if (row === grid.length - 1 && col === grid[0].length - 1) return 1;

  const downCount = countPaths(grid, row + 1, col, memo);
  const rightCount = countPaths(grid, row, col + 1, memo);
  memo[pos] = downCount + rightCount;
  return memo[pos];
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
