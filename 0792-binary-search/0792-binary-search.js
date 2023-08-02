/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let l = 0 
  let r = nums.length-1

  while (l <= r) {
    const mid = Math.floor((l + r)/ 2)
    const midNum = nums[mid]
    
    if (midNum === target) return mid

    if (midNum < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
};