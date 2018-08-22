function fibonacci(num) {
  let arr = []
  let a = 1, b = 0, temp
  for (let i = 0; i< num; i++){
    if (num === 0){
      return num
    } else if (num === 1){
      return [0,1]

    }
    else {
      temp = a
      a = a + b
      b = temp
      arr.push(b)
    }
  }
  return arr
}

fibonacci(5)


// added Memoization
// function fibonacci(num, memo) {
//   memo = memo || {};
//
//   if (memo[num]) return memo[num];
//   if (num <= 1) return 1;
//
//   return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
