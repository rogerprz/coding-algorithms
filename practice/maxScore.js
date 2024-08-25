/*
Given an array of non-negative integers, the goal is to travel from the first index to the last index
with maximum possible score with as many jumps allowed.
Score of a jump is defined as the number of index jumped multiplied by the value on the jumped index.
e.g. [3,7,9,10]
      0,1,2,3
if the jump is from index0 to index2, the score is (2-0)*9 = 18

Sample input: [3,12,9,10]
               0,1,2,3
               (1-0) * 12 + (3-1) * 10 = 12 + 20 = 32
Sample output: 32
Explanation: jump from index0 to index1 and then to index3

What are the possible ways to approach this problem?
Can it be done in better than O(n^2)?
*/
function maxScore(nums) {
  const stack = [];

  // Monotonic decreasing stack.
  for (let i = 0; i < nums.length; i++) {
    // if stack > 0 and the top index in the stack is less than the current number
    // Alternate way of saying this:
    // if the current number is greater than the number at the top of the stack
    // we pop the top of the stack because we want to keep the stack in decreasing order
    // So 12 > 9, but 9 is not greater than 10, so we remove 9 from the stack
    const currentNumber = nums[i];
    while (stack.length > 0 && currentNumber > nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    stack.push(i);
  }

  // Compute the result
  let result = 0;
  while (stack.length > 0) {
    const index = stack.pop();
    const prevIndex = stack.length === 0 ? 0 : stack[stack.length - 1];
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
