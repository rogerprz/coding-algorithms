/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let lowestBuyPrice = prices[0]
    for (let i = 0; i < prices.length; i++) {
      const currBestPrice = prices[i]
      if (lowestBuyPrice > currBestPrice) {
        lowestBuyPrice = currBestPrice
      }
      const currentProfit = currBestPrice - lowestBuyPrice
      if (maxProfit < currentProfit) {
        maxProfit = currentProfit
      }
    }
    return maxProfit
};