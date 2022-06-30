/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const results = nums.map((num) => {
    const value = Math.abs(num);
    return value ** 2;
  });

  // Output: [0,1,9,16,100]
  const sortedResults = results.sort((a, b) => a - b);
  return sortedResults;
};