/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
//   If nums is 1 or less we return it. No changes needed
  if (nums.length <= 1) return nums
// set position to 0 since we want to move all non-zero digits to the front 
// and pos keeps track of how many zeros there are.
  let pos = 0 
  
  for (let i = 0; i < nums.length; i++) {
//  if it's currentElement is 0 we continue
    if (nums[i] === 0) continue
//  change nums[pos] to == curreElem, nums[i] = 1
//  ex: [0,1,0,3,12] => [1,1,0,3,12]
    nums[pos] = nums[i]
    // increase position. Above, we can also do nums[pos++] = nums[i] since ++ happens after
    pos++
   }
//   We set i to pos and replace any remaining elems with zero
  for (let i = pos; i < nums.length; i ++){
    nums[i] = 0
  }
  return nums
};