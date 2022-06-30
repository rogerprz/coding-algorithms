/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const results = nums.map((num) => {
    const value = Math.abs(num);
    return value ** 2;
  });

  return results.sort((a, b) => a - b);
};