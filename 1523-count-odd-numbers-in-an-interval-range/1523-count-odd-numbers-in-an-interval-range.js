/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  if (low % 2 === 0) { low++ } 
  if (high % 2 === 0) { high-- } 
  return (high - low) / 2 + 1
//   count = 0
//   low = low % 2 === 0 ? low + 1 : low

//   for (let i = low; i <= high; i=i+2) {
//       count++
//   }
//   return count
};

// if (low % 2 === 0) { low++ } 
// if (high % 2 === 0) { high-- } 
// return (high - low) / 2 + 1