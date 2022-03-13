/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    let currentProfit = prices[i] - min
    if (maxProfit < currentProfit){
      maxProfit = currentProfit
    }
  }
  return maxProfit;
};