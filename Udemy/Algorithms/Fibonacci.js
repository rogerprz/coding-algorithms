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
console.log(result);
function makechange(amount, coins) {
  let change = [];
  let currentCoin = coins[0];
  let currentCoinCount = 0;
  let remainingAmount = amount;
  while (remainingAmount > 0) {
    if (remainingAmount >= currentCoin) {
      currentCoinCount = Math.floor(remainingAmount / currentCoin);
      remainingAmount = remainingAmount % currentCoin;
    }
    change.push([currentCoin, currentCoinCount]);
    currentCoin = coins[coins.indexOf(currentCoin) + 1];
  }
  return change;
}

// function optimalCoinsThatAddToTarget(target, coins) {
//   let results = [];
//   let currentCoin = coins[0];
//   let currentCoinCount = 0;
//   let remainingTarget = target;
//   while (remainingTarget > 0) {
//     if (remainingTarget >= currentCoin) {
//       currentCoinCount = Math.floor(remainingTarget / currentCoin);
//       remainingTarget = remainingTarget % currentCoin;
//     }
//     results.push([currentCoin, currentCoinCount]);
//     currentCoin = coins[coins.indexOf(currentCoin) + 1];
//   }
//   return results;
// }
// function dynamicMakeChange(amount, coins) {
//   let change = [];
//   let currentCoin = coins[0];
//   let currentCoinCount = 0;
//   let remainingAmount = amount;
//   while (remainingAmount > 0) {
//     if (remainingAmount >= currentCoin) {
//       currentCoinCount = Math.floor(remainingAmount / currentCoin);
//       remainingAmount = remainingAmount % currentCoin;
//     }
//     change.push([currentCoin, currentCoinCount]);
//     currentCoin = coins[coins.indexOf(currentCoin) + 1];
//   }
//   return change;
// }
