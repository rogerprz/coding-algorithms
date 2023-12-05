const gridTraveler = (m, n, memo = {}) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  const pos = `${m},${n}`;
  if (pos in memo) return memo[pos];

  memo[pos] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[pos];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
