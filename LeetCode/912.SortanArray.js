/* eslint-disable no-shadow */
// Last updated: August 07, 2023
const sortArray = function (nums) {
  // NOT MY SOLUTION - mergeSort
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  function merge(left, right) {
    const result = [];
    const lLen = left.length;
    const rLen = right.length;
    let l = 0;
    let r = 0;

    while (l < lLen && r < rLen) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

  return merge(sortArray(left), sortArray(right));
};

console.log(sortArray([5, 2, 3, 1]));
