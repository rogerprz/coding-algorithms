const missingNumber = function (nums) {
  const set = new Set(nums);
  const n = nums.length;
  if (!nums.includes(n)) return n;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i)) return i;
  }
  return nums.length;
};

// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
const nums1 = [3, 0, 1];

// Output: 2
const nums2 = [0, 1];
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(missingNumber(nums1));
console.log(missingNumber(nums2));
console.log(missingNumber(nums3));
