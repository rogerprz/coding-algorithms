const productExceptSelf = function (nums) {
  const results = [];

  let preNum = 1;
  for (let i = 0; i < nums.length; i++) {
    results[i] = 1;
    results[i] *= preNum;
    preNum *= nums[i];
  }

  let postNum = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] *= postNum;
    postNum *= nums[i];
  }

  return results;
};

const case1 = [1, 2, 3, 4];
console.log(productExceptSelf(case1));
