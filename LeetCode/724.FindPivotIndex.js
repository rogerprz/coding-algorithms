// Last tried: 09/21/23 (Easy)
// https://leetcode.com/problems/find-pivot-index/

const pivotIndex = function (nums) {
  let rightSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentVal = nums[i];
    rightSum -= currentVal;

    if (leftSum === rightSum) return i;

    leftSum += currentVal;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
