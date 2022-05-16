/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l= 0, r = nums.length-1
    
    while (l<=r){
//       get a middle point

      let m = Math.floor((l+r)/2)
      let num = nums[m]
      
//       mid === target return mid index
      if (num === target) return m
      
      if (num < target){
        l = m +1
      } else {
        r = m - 1
      }
    }
  return -1
};