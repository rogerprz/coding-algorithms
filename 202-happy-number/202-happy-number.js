/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let count = 0
    while (count < 15 ) {
      console.log('N:',n, 'Count:', count)

      const array = Array.from(String(n), Number)
      let squaredSum = 0
      for (digit in array){
        squaredSum = squaredSum + Math.pow(array[digit], 2)
      }
      n = squaredSum
      
      if(n === 1){
        return true
      }
      count++
      
    }
  return false
};