const searchMatrix = function (matrix, target) {
  // matrix = [
  // [1,3,5,7],       0
  // [10,11,16,20],   1
  // [23,30,34,60]    2
  // ],
  // target = 3
  let left = 0;
  let right = matrix.length - 1;
  // we can start at the center sub array/
  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const testArr = matrix[midIndex];
    const startNum = testArr[0];
    const endNum = testArr[testArr.length - 1];

    if (target < startNum) right = midIndex - 1;
    else if (target > endNum) left = midIndex + 1;
    else {
      let subLeft = 0;
      let subRight = testArr.length - 1;
      while (subLeft <= subRight) {
        const subMidIndex = Math.floor((subLeft + subRight) / 2);
        const subMidNum = testArr[subMidIndex];

        if (subMidNum === target) {
          return true;
        }
        if (subMidNum < target) {
          subLeft = subMidIndex + 1;
        } else {
          subRight = subMidIndex - 1;
        }
      }
      break;
    }
  }
  // Check if target is within sub array range
  // if it is then we loop to find the target location
  // if it is not then wee return false
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    3
  )
);
// Output: true
