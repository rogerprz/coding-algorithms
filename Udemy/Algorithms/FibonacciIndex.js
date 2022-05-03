function fibonacciIterative(n) {
  let array = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    array.push(arr[i - 2] + arr[i - 1]);
  }
  return [n];
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const result = fibonacciRecursive(6);
