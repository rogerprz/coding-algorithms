/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1
  let finalArea = 0 
  
  while(left < right){
    let width = right - left
    let maxHeight = Math.min(height[left], height[right])
    let currentArea = maxHeight * width
    if (finalArea < currentArea) {
      finalArea = currentArea
    }
   if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return finalArea
};