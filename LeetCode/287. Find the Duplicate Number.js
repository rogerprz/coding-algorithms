//  Last Solved: Mon 10/16/23

const findDuplicate = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return false;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
