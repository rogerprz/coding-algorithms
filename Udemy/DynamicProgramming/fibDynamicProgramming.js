let calculations = 0;
let calc2 = 0;
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(6);

// Uses memoization

function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    calculations++;

    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// Bottom up solution
// 0 1 2 3 4 5 6
// 1 1 2 3 5 8 13
function fibonacciMaster2(n) {
  let answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    calc2++;
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log('DP:', fasterFib(10));
console.log('C:', calculations);

console.log('DP2:', fibonacciMaster2(10));
console.log('C2:', calc2);
