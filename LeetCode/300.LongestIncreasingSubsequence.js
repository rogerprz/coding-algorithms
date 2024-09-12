// Can be done in DP O(n^2) and Binary search O(N log n)
/**
 * 300. Longest Increasing Subsequence
 * Given an integer array nums, return the length of the longest strictly increasing subsequence
Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 */
const lengthOfLisDP = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    for (let j = 0; j < i; j++) {
      if (nums[j] < currNum) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return Math.max(...dp);
};

const lengthOfLISBinarySearch = function (nums) {
  const stack = [];

  for (const currentNum of nums) {
    let left = 0;
    let right = stack.length;
    // [10,9,2,5,3,7,101,18]
    // [     2,  3,7,101   ]
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (currentNum > stack[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (right >= stack.length) {
      stack.push(currentNum);
    } else {
      stack[right] = currentNum;
    }
  }
  return stack.length;
};
const numsOne = [10, 9, 2, 5, 3, 7, 101, 18];
const nums = [0, 1, 0, 3, 2, 3];

console.log(lengthOfLISBinarySearch(numsOne)); // 4

console.log(lengthOfLisDP(nums)); // 4
