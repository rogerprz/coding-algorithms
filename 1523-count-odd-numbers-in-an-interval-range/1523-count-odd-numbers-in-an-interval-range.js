/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  result = []
  count = 0
  console.log('BL:', low)
  low = low % 2 === 0 ? low + 1 : low
  console.log('AL:', low)

    for (let i = low; i <= high; i=i+2) {
      
      count++
    }
  return count
};