const longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length;
  const sortedNums = nums.sort((a, b) => a - b);

  let previousPointer = sortedNums[0];
  let leftIndex = 0;
  let rightIndex = 0;
  let maxLen = 0;

  for (let i = 1; i < sortedNums.length; i++) {
    const currentNum = sortedNums[i];
    if (previousPointer + 1 === currentNum) {
      rightIndex = i;
      previousPointer = currentNum;
    } else {
      const newMaxLen = rightIndex + 1 - leftIndex;
      if (newMaxLen > maxLen) {
        maxLen = newMaxLen;
      }
      leftIndex = i;
    }
  }

  return maxLen;
};

const nums = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums2));
// console.log(longestConsecutive(nums));
