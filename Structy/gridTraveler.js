// Travel from top left to bottom right
// can only move down or right
// how many ways can you travel to the goal on a grid w/
// dimension m * n

const gridTraveler = (m, n, memo = {}) => {
  const pos = `${m},${n}`;
  if (pos in memo) return memo[pos];
  if (m === 1 || n === 1) return 1;

  memo[pos] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[pos];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
