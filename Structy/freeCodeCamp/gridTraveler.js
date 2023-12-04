/* eslint-disable prefer-template */

const gridTraveler = (m, n, memo = {}) => {
  const pos = `${m},${n}`;
  if (pos in memo) return memo[pos];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 1;

  memo[pos] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[pos];
};

// const gridTraveler = (m, n, memo = {}) => {
//   const key = m + ',' + n;
//   // are the arguments in my memo?
//   if (key in memo) return memo[key];
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;

//   memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
//   return memo[key];
// };

console.log(gridTraveler(1, 1)); // 1
// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(3, 2)); // 3
// console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2333606220

const gridTravelerTwo = (m, n, memo = {}) => {
  const key = m + ',' + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTravelerTwo(m - 1, n, memo) + gridTravelerTwo(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerTwo(1, 1)); // 1
console.log(gridTravelerTwo(2, 3)); // 3
console.log(gridTravelerTwo(3, 2)); // 3
console.log(gridTravelerTwo(3, 3)); // 6
console.log(gridTravelerTwo(18, 18)); // 2333606220
