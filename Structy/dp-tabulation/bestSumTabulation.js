// Write a fn "bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as args.
// The fn should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
// If there is a tie for the shortest combination, you may return any one of the shortest.

const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        const currentBest = [...table[i], num];
        const futureSpot = table[i + num];
        if (!futureSpot || futureSpot.length > currentBest.length) {
          table[i + num] = currentBest;
        }
      }
    }
  }
  return table[targetSum];
};
console.log('Output: 7', bestSum(7, [5, 4, 7, 3])); // [7]
console.log('Output: [3,5]', bestSum(8, [5, 2, 3])); // [3,5]
console.log('Output: [4,4]', bestSum(8, [1, 4, 5])); // [4,4]
console.log('Output: [25x4]', bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
