const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }

  for (const num of numbers) {
    const remainder = targetSum - num;

    const remainderResult = howSum(remainder, numbers, memo);
    console.log('RR:', remainderResult);
    if (remainderResult) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log('Output: True', howSum(7, [2, 3])); // True
// console.log('Output: [3,4], [7]:', howSum(7, [5, 3, 4, 7])); // true
// console.log('Output: False', howSum(7, [2, 4])); // false
// console.log('Output: True', howSum(8, [2, 3, 5])); // false
// console.log('Output: 300 False', howSum(300, [7, 14])); // false
// console.log('Output: 210 True', howSum(210, [7, 14])); // True
