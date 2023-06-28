var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    console.log('R:', result, 'I:', i);
    const currentNumber = nums[i];
    const currentResult = result[i];
    result[i] = currentResult * productBefore; // result[i] *= productBefore;
    console.log('AR:', result);
    productBefore = productBefore * currentNumber; // productBefore *= nums[i];
    console.log('APB:', productBefore);
  }
  console.log('___________________________');
  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    console.log('R:', result, 'I:', i);
    const currentNumber = nums[i];
    const currentResult = result[i];

    result[i] = currentResult * productAfter;
    console.log('AR:', result, result[i]);

    productAfter = currentNumber * productAfter;
    console.log('APB:', productAfter);
  }

  return result;
};

const case1 = [1, 2, 3, 4];
console.log('HERE:');
productExceptSelf(case1);
