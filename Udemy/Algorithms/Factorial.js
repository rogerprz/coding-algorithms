function factorialIterative(value) {
  let result = value;

  if (value <= 2) {
    return value;
  }
  while (value > 1) {
    value = value - 1;
    console.log('RR:', result, value);

    result = result * value;
  }
  console.log('R:', result);
  return result;
}

function factorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorialRecursive(number - 1);
}

factorialIterative(5);

console.log('Recursive: ', factorialRecursive(5));
