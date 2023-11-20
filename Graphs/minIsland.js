const minimumIsland = (grid) => {
  const visited = new Set();
  let minIsland = Infinity;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let col = 0; col < row.length; col++) {
      let total = explore(grid, row, col, visited, minIsland);

      if (total < minIsland) minIsland = total;
    }
  }
  return minIsland;
};

const explore = (grid, row, col, visited, count) => {
  const pos = `${row},${col}`;
  if (grid[row][col] === 'W') return 0;
  if (visited.has(pos)) return 0;

  visited.add(pos);

  explore(grid, row + 1, col, visited, count + 1);
  explore(grid, row - 1, col, visited, count + 1);
  explore(grid, row, col + 1, visited, count + 1);
  explore(grid, row, col + 1, visited, count + 1);
  return count;
};
