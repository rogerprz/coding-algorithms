const radius = [1, 2, 3];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (const value of radius) {
    output.push(logic(value));
  }
  return output;
};

console.log('High R:', calculate(radius, area));
console.log('High D', calculate(radius, diameter));

// Not High Order Function
const calculateArea = function (radius) {
  const output = [];
  for (const value of radius) {
    output.push(Math.PI * value * value);
  }
  return output;
};

const calculateDiameter = function (radius) {
  const output = [];
  for (const value of radius) {
    output.push(2 * value);
  }
  return output;
};

console.log('Radius:', calculateArea(radius));
console.log('Diameter', calculateDiameter(radius));
// End of Non High Order Function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const logic = function (total, currentValue) {
  return total + currentValue;
};
const sum = numbers.reduce((total, currentValue) => total + currentValue, 0);
console.log('Sum:', sum);
