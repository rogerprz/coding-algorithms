function factorialIterative(value) {
  let result = value;
  while (value > 1) {
    value = value - 1;
    console.log('RR:', result, value);

    result = result * value;
  }
  console.log('R:', result);
  return result;
}

function factorialRecursive(value) {
  return value;
}

factorialIterative(5);
