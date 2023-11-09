/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let set = new Set(nums)
    const n = nums.length
    if(!nums.includes(n)) return n

    for (let i = 0; i<nums.length; i++){
        if (!(set.has(i))) return i 
    }
    return nums.length
};