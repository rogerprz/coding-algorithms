/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i ++){
      let currElem = nums[i]
      let testArr = nums.slice(i+1)
      
      if (testArr.indexOf(currElem) > -1){
        return true
      }
    }
  return false
};