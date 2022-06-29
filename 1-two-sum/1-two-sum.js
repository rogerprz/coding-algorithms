/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // nums = [2,7,11,15], target = 9
    let hash = {}
    
    for (let i = 0; i < nums.length; i++) {
      let number = nums[i]
      let testKey = target - nums[i]
      
      if (testKey in hash){
        return [hash[testKey], i]
      } else {
        hash[number] = i
      }
    }
};
