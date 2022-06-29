/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    let mid = Math.floor((left+right)/2)
    while (left <= right ) {
      console.log('L:', left, 'R:', right)

      let mid = Math.floor((left+right)/2)
      // console.log('V:', nums[mid],'M:', mid)
      if (target > nums[mid] ) {
        left = mid + 1
      } else {
        right = mid -1
      }
    }
  return left
};