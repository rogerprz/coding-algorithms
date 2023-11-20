// https://structy.net/problems/minimum-island
const minimumIsland = (grid) => {
  const visited = new Set();
  let minIsland = Infinity;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      const total = explore(grid, rowIndex, colIndex, visited);
      console.log('TOTAL:', total);
      if (total < minIsland && total !== 0) minIsland = total;
    }
  }
  return minIsland;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  console.log('COL:', col, row, grid.length);
  const colInbounds = col >= 0 && col < grid[0].length;

  if (!rowInbounds || !colInbounds) {
    return 0;
  }
  if (grid[row][col] === 'W') {
    console.log('WATER');
    return 0;
  }
  const pos = `${row},${col}`;
  if (visited.has(pos)) {
    console.log('HAS');
    return 0;
  }

  visited.add(pos);
  let size = 1;

  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row, col + 1, visited);
  size += explore(grid, row, col - 1, visited);
  console.log('SIZE:', size);
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
