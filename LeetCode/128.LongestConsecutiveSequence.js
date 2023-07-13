const longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length;
  nums.sort((a, b) => a - b);
  let count = 0;
  let temp = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      temp++;
      count = Math.max(count, temp);
    } else if (nums[i] === nums[i + 1]) {
      count = Math.max(count, temp);
    } else {
      temp = 1;
      count = Math.max(count, temp);
    }
  }
  return count;
};

const nums = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [1, 2, 0, 1];
console.log(longestConsecutive(nums3));
// console.log(longestConsecutive(nums));

const longestConsecutiveSolution = function (nums) {
  if (nums.length <= 1) return nums.length;
  nums.sort((a, b) => a - b);
  let count = 0;
  let temp = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      temp++;
      count = Math.max(count, temp);
    } else if (nums[i] === nums[i + 1]) {
      count = Math.max(count, temp);
    } else {
      temp = 1;
      count = Math.max(count, temp);
    }
  }
  return count;
};

// FASTEST SOLUTION
const longestConsecutiveFastest = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);
  let max = 1;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      // Check if num is the start of a sequence
      let currNum = num;
      let currStreak = 1;

      while (numSet.has(currNum + 1)) {
        currNum++;
        currStreak++;
      }

      max = Math.max(max, currStreak);
    }
  }

  return max;
};
