/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i]
      let secondNum = target-num
      console.log('T:', target, num, secondNum)
      if (secondNum in hash){
        return  [hash[secondNum], ++i]
          }
      else {
        hash[num] = i + 1
      }
    }
};