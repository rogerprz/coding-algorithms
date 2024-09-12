function maxScore(nums) {
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= num) {
      stack.pop();
    }
    stack.push(i);
  }

  let result = 0;
  while (stack.length > 0) {
    const index = stack.pop();
    const prevIndex = stack[stack.length - 1] ? stack[stack.length - 1] : 0;
    result += (index - prevIndex) * nums[index];
  }
  return result;
}

// Example usage:
const test1 = [3, 12, 9, 10];
console.log(maxScore(test1)); // 32

const test2 = [3, 7, 9, 10];
console.log(maxScore(test2)); // 30

const test3 = [4, 10, 6, 15, 5, 12]; // (3-0)* 15 + (5-3)*12 = 45 + 24 = 69
//             0, 1,  2, 3,  4 , 5
console.log(maxScore(test3)); // 69

const testCase1 = [1, 2, 3, 4, 5]; // 20 #you jump to ast position, so the score would be 5 * 4 = 20
console.log(maxScore(testCase1));
const testCase2 = [5, 4, 3, 2, 1]; // 10 #you jump one position from beginning to end, so the score would be 4+3+2+1=10
console.log(maxScore(testCase2));
const testCase3 = [2, 4, 6, 8, 10]; // 40
console.log(maxScore(testCase3));
const testCase4 = [3, 5, 2, 8, 1]; // 25
console.log(maxScore(testCase4));
const testCase5 = [1, 1, 1, 1, 1]; // 4
console.log(maxScore(testCase5));
const testCase6 = [5, 3, 5, 3, 5]; // 20
console.log(maxScore(testCase6));
