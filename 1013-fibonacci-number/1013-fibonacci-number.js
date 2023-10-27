/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    if (n <=1) {
        return n
    }
    if (n in memo) return memo[n]

    memo =  fib(n - 1) + fib(n-2)

    return memo
};