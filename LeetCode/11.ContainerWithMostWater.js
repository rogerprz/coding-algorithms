const maxArea = function (height) {
  // we will need a left and right pointer
  // we will need to add the sum of water
  // keep track of length j - i
  // max height if j < k ? j : k
  let mostWater = 0;

  for (let i = 0; i < height.length; i++) {
    const leftHeight = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const rightHeight = height[j];

      const length = j - i;
      const bestHeight = leftHeight < rightHeight ? leftHeight : rightHeight;
      const currentArea = bestHeight * length;

      mostWater = Math.max(currentArea, mostWater);
    }
  }

  return mostWater;
};

// Input:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49

console.log(maxArea(height));
