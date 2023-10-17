//  Last Solved: Mon 10/16/23

const findDuplicateIncorrect = (nums) => {
  // Does not meet constrains
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return false;
};

console.log(findDuplicateIncorrect([1, 3, 4, 2, 2]));

const findDuplicate = function (nums) {
  while (nums[0] !== nums[nums[0]]) {
    const temp = nums[0];
    nums[0] = nums[temp];
    nums[temp] = temp;
  }
  return nums[0];
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
