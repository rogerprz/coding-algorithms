const productExceptSelf = function (nums) {
  const { length } = nums;
  const result = new Array(length).fill(1);

  // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    const currentNumber = nums[i];
    const currentResult = result[i];

    result[i] = currentResult * productBefore; // result[i] *= productBefore;
    productBefore *= currentNumber; // productBefore *= nums[i];
  }
  console.log('___________________________');
  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    const currentNumber = nums[i];
    const currentResult = result[i];

    result[i] = currentResult * productAfter;
    productAfter *= currentNumber;
  }

  return result;
};

const case1 = [1, 2, 3, 4];
console.log('HERE:');
productExceptSelf(case1);
