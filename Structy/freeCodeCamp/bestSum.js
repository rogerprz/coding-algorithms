//  The function should return an array containing the shortest combo of numbers that
// add up to exactly the targetSum.
// If there is a tie for the shortest combo, you may return any of one of the shortest

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainCombo = bestSum(remainder, numbers, memo);

    if (remainCombo !== null) {
      const combo = [...remainCombo, num];
      if (!shortestCombo || combo.length < shortestCombo.length) {
        shortestCombo = combo;
      }
    }
  }
  memo[targetSum] = shortestCombo;
  return shortestCombo;
};
console.log('Output: 7', bestSum(7, [5, 4, 7, 3])); // [7]
console.log('Output: 3/5', bestSum(8, [5, 2, 3])); // [3,5]
console.log('Output: 3/5', bestSum(8, [1, 4, 5])); // [4,4]
console.log('Output: [25x4]', bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
