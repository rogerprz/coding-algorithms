const twoSum = (numbers, target) => {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[i];
    const missingNum = target - currNum;
    if (map.has(currNum)) {
      return [map.get(currNum), i + 1];
    }
    map.set(missingNum, i + 1);
  }

  return map;
};

const numbers = [2, 7, 11, 15];
const target = 9;

twoSum(numbers, target);
