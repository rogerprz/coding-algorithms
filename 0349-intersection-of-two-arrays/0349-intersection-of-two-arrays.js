/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set(nums1)
    const setTwo = new Set(nums2)
    const result = [ ]
    set.forEach((value)=>{
        if (setTwo.has(value)) result.push(value)
    })
    return result
};