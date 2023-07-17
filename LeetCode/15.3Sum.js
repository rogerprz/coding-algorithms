const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  const target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    if (nums[i] > target) break;
    if (i > 0 && num === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const total = num + nums[j] + nums[k];

      if (total === target) {
        results.push([num, nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;

        j++;
        k--;
      } else {
        if (total < target) j++;
        if (total > target) k--;
      }
    }
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
