// Write a function that take in a targetSum and an array of numbers as arguments
// The function should return a boolean indicating  whether or not it is
// possile to generate the targetSum using numbers from the array

// Use an element of the array as many times as needed
// All numbers are > 0

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log('Output: True', canSum(7, [2, 3])); // True
console.log('Output: True:', canSum(7, [5, 3, 4, 7])); // true
console.log('Output: False', canSum(7, [2, 4])); // false
console.log('Output: True', canSum(8, [2, 3, 5])); // false
console.log('Output: 300 False', canSum(300, [7, 14])); // false
console.log('Output: 210 True', canSum(210, [7, 14])); // True
