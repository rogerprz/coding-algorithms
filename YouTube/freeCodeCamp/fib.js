// To Run:
// node YouTube/freeCodeCamp/fib.js
const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(50));

// How to improve this solution?
// Memoization

// js object, keys will be arg to fn, value will be the return value
const fibWithMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  return memo[n];
};
console.log(fibWithMemo(6));
console.log(fibWithMemo(7));
console.log(fibWithMemo(8));
console.log(fibWithMemo(50));
