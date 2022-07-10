/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let test = {};

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    let secondValue = target - currentValue;
    if (secondValue in test) {
      let result = [test[secondValue], i + 1];
      return result;
    } else {
      test[currentValue] = i + 1;
    }
  }
};

// var twoSum = function(nums, target) {
//     let test = {};

//   for (let i = 0; i < nums.length; i++) {
//     let currentValue = nums[i];
//     let secondValue = target - currentValue;
//     if (secondValue in test) {
//       let result = [test[secondValue], i + 1];
//       return result;
//     } else {
//       test[currentValue] = i + 1;
//     }
//   }
// };