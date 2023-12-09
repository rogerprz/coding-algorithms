const gridTravelerTabulation = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let row = 0; row <= m; row++) {
    for (let col = 0; col <= n; col++) {
      const current = table[row][col];
      if (col + 1 <= n) table[row][col + 1] += current;
      if (row + 1 <= m) table[row + 1][col] += current;
    }
  }

  return table[m][n];
};

console.log('Output: 1:', gridTravelerTabulation(1, 1)); // 1
console.log('Output: 3:', gridTravelerTabulation(2, 3)); // 3
console.log('Output: 3:', gridTravelerTabulation(3, 2)); // 3
console.log('Output: 6:', gridTravelerTabulation(3, 3)); // 6
console.log('Output: 2333606220:', gridTravelerTabulation(18, 18)); // 2333606220
