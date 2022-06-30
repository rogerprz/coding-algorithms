/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const results = nums.map((num) => {

    return Math.abs(num) ** 2;
  });

  return results.sort((a, b) => a - b);
};