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
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
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
