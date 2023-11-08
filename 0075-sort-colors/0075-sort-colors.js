/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // NOT MY SOLUTION
    let p0 = 0
    let curr = 0
        // # for all idx > p2 : nums[idx > p2] = 2
    let p2 = nums.length - 1

    while (curr <= p2){
        if (nums[curr] === 0) {
            [nums[p0], nums[curr]]= [nums[curr], nums[p0]]
            p0++
            curr++
        } else if (nums[curr] === 2) {
            [nums[curr], nums[p2]] = [nums[p2], nums[curr]]
            p2-=1
        } else {
            curr+=1
        }
    }
    return nums
};