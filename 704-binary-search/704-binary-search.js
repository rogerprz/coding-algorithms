/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    let count = 0
    while (l <= r ){

      let m = Math.floor((l+r)/2)
      let value = nums[m]
      console.log('L:', l , 'R:', r, 'M:', m, 'C:', count)
      console.log('V:',nums[m], '==',target )

      if (target === nums[m]) return m
      if (nums[m] < target){
        l = m + 1
      } else {
        r = m - 1
      }
    }
  return -1
};
//  0,1,2,3, 4,5
// [-1,0,3,5,9,12]
//   l 0 m 0 0 r