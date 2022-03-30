/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a, b) => a - b);
  
  let i = nums.length - 1;
  
  console.log('START:', nums)
  while(i >= 0){
    if (nums[i] < nums[i-1] + nums[i-2]){
      console.log('It is less:',nums[i] < nums[i-1] + nums[i-2] )
        return nums[i] + nums[i-1] + nums[i-2];
    } else {
      i--;
    }
  }
  return 0;
};