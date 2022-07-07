/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length <= 1) return nums
  
  let pos = 0 
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue
    // change nums[pos] to == curreElem
    nums[pos] = nums[i]
    // increase position. 
    pos++
   }
  
  for (let i = pos; i < nums.length; i ++){
    nums[i] = 0
  }
  return nums
};