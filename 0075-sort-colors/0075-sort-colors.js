/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0
    let curr = 0
    let end = nums.length-1

    while (curr <= end) {
        if (nums[curr] === 0) {
            [nums[curr], nums[start]] = [nums[start], nums[curr]]
            curr++
            start++
        } else if (nums[curr] === 2) {
            [nums[curr], nums[end]] = [nums[end], nums[curr]]
            end--
        } else {
            curr++
        }
    }

    return nums
};