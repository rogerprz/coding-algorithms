const maxPathSum = (grid) => {
  const explore = (grid, row = 0, col = 0, memo = {}) => {
    const pos = `${row},${col}`;
    if (pos in memo) return memo[pos];
    if (row === grid.length || col === grid[0].length) {
      return -Infinity;
    }
    if (row === grid.length - 1 && col === grid[0].length - 1) {
      return grid[row][col];
    }

    const down = explore(grid, row + 1, col, memo);
    const right = explore(grid, row, col + 1, memo);

    memo[pos] = grid[row][col] + Math.max(down, right);
    return memo[pos];
  };

  return explore(grid);
};

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1]
];
console.log(maxPathSum(grid)); // -> 18
