// Write a fn 'canSumTabulation(targetSum, numbers)' that takes in a targetSum and an array of numbers as args.
// The fn should return a boolean indicating whether or not
// it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

const canSumTabulation = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < targetSum; i++) {
    for (const num of numbers) {
      if (table[i]) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

console.log('Output: True', canSumTabulation(7, [2, 3])); // True
console.log('Output: True:', canSumTabulation(7, [5, 3, 4, 7])); // true
console.log('Output: False', canSumTabulation(7, [2, 4])); // false
console.log('Output: True', canSumTabulation(8, [2, 3, 5])); // false
console.log('Output: False', canSumTabulation(300, [7, 14])); // false
console.log('Output: True', canSumTabulation(210, [7, 14])); // True
