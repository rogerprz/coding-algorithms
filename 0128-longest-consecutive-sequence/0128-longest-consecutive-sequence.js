/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let temp = 1;
    if (nums.length <=1) return nums.length
   
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1] - 1) {
            temp++;
            count = Math.max(count, temp);
        } else if (nums[i] === nums[i + 1]) {
            count = Math.max(count, temp);
        } else {
            temp = 1;
            count = Math.max(count, temp);
        }
    }
    return count;
};