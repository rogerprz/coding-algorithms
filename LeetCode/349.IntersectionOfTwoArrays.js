const intersection = function (nums1, nums2) {
  const setNums = new Set(nums1);
  const setNumsTwo = new Set(nums2);
  const result = [];

  for (const number of setNumsTwo) {
    if (setNums.has(number)) result.push(number);
  }
  return result;
};

const intersectionOther = function (nums1, nums2) {
  const result = [];

  nums1.forEach((items) => {
    if (nums2.includes(items)) result.push(items);
  });
  return [...new Set(result)];
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersection(nums1, nums2));
console.log(intersectionOther(nums1, nums2));
