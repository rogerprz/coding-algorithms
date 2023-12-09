// Write a function 'howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to exactly the targetSum.
// If there is no combination that adds up to the targetSum, then return null.

const howSumTabulation = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(0);
};

console.log('Output: [3,2,2]', howSumTabulation(7, [2, 3])); // True
console.log('Output: [3,4], [7]:', howSumTabulation(7, [5, 3, 4, 7])); // true
console.log('Output: False', howSumTabulation(7, [2, 4])); // false
console.log('Output: True', howSumTabulation(8, [2, 3, 5])); // false
console.log('Output: 300 False', howSumTabulation(300, [7, 14])); // false
console.log('Output: 210 True', howSumTabulation(210, [7, 14])); // True
