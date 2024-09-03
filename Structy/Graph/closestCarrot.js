const deltas = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];
const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set(`${startRow},${startCol}`);
  const queue = [[startRow, startCol, 0]];

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (grid[row][col] === 'C') return distance;

    for (const delta of deltas) {
      let [deltaRow, deltaCol] = delta;
      deltaRow += row;
      deltaCol += col;

      const rowInbounds = deltaRow >= 0 && deltaRow < grid.length;
      const colInbounds = deltaCol >= 0 && deltaCol < grid[0].length;

      const pos = `${deltaRow},${deltaCol}`;

      if (rowInbounds && colInbounds && grid[row][col] !== 'X' && !visited.has(pos)) {
        queue.push([deltaRow, deltaCol, distance + 1]);
        visited.add(pos);
      }
    }
  }

  return -1;
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
