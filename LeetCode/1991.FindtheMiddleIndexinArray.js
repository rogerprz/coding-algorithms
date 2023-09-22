const findMiddleIndex = function (nums) {
  let rightSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];

    rightSum -= currVal;

    if (leftSum === rightSum) return i;

    leftSum += currVal;
  }
  return -1;
};

console.log(findMiddleIndex([2, 3, -1, 8, 4])); // 3
console.log(findMiddleIndex([1, -1, 4])); // 2
console.log(findMiddleIndex([2, 5])); // -1
