const minimumIsland = (grid) => {
  const visited = new Set();
  let minIsland = Infinity;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      let total = explore(grid, rowIndex, colIndex, visited);
      if (total < minIsland && total !== 0) minIsland = total;
    }
  }
  return minIsland;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;
  if (grid[row][col] === 'W') return 0;
  const pos = `${row},${col}`;
  if (visited.has(pos)) return 0;

  visited.add(pos);
  let size = 1;
  size += explore(grid, row + 1, col, visited, size);
  size += explore(grid, row - 1, col, visited, size);
  size += explore(grid, row, col + 1, visited, size);
  size += explore(grid, row, col - 1, visited, size);
  return size;
};

console.log(
  'OUTPUT:2:',
  minimumIsland([
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
  ])
);

console.log(
  'OUTPUT:1:',
  minimumIsland([
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
  ])
);
console.log(
  'OUTPUT:9:',
  minimumIsland([
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L']
  ])
);
