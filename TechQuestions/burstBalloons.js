// You are selected to play a game with n balloons. Each balloon is painted with a number on it representing the score you can get by popping the balloon.
// But there is a rule that you can not pop adjacent balloons.
// Given a function of maxBalloonPoints an integer array nums representing the scores of each balloon,
// return the maximum score you can get without violating the rule.

// [ 1, 4, 10, 5 , 2, 12, 3 ]

const maxBalloonPoints = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length <= 2) return Math.max(...nums);
  let maxPoints = 0;

  const dp = (nums, index, points) => {
    if (index >= nums.length) {
      maxPoints = Math.max(maxPoints, points);
      return;
    }
    if (index === 0) {
      dp(nums, index + 2, points + nums[index]);
      dp(nums, index + 1, points);
    } else {
      dp(nums, index + 2, points + nums[index]);
      dp(nums, index + 1, points);
    }
  };
  dp(nums, 0, 0);
  return maxPoints;
};
console.log('Output:23:', maxBalloonPoints([1, 4, 10, 5, 2, 12, 3])); // 23
console.log('Output:37:', maxBalloonPoints([1, 14, 10, 5, 20, 12, 3])); // 37
console.log('Output: 304:', maxBalloonPoints([1, 4, 1, 2, 300])); // 304
console.log('Output: 303:', maxBalloonPoints([1, 1, 1, 302, 300])); // 303
