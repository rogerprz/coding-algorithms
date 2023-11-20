// https://structy.net/problems/island-count

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      count += explore(grid, rowIndex, colIndex, visited);
    }
  }

  return count;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 <= row && row < grid.length;
  const colInbounds = col >= 0 && col < grid.length;
  if (!rowInbounds || !colInbounds) return 0;
  if (grid[row][col] === 'W') return 0;

  const pos = `${row},${col}`;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);

  return 1;
};

console.log(
  'OUTPUT: 3:',
  islandCount([
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
  ])
);

console.log(
  'OUTPUT: 4:',
  islandCount([
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
  ])
);
console.log(
  'OUTPUT: 1:',
  islandCount([
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L']
  ])
);
