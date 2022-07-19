/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
//          1  - level 0        1 Total: 1
//        1  1 - level 1        2 Total: 2
      // 1  2  1 - level 2      3 Total: 4
    // 1  3   3  1 - level 3    4 Total: 8
//   1  4   6 4   1 - level 4   5 Total: 16
//   At each level we add 1 number
//   aside from level 0 and 1 each level after that correspons with the 1 + previous level
  let result = []
  
  for (let i = 0; i < numRows; i++) {
    if (i === 0) result.push([1])
    else if (i === 1) result.push([1, 1])
    
   else {
      let currentArray = [1] // 1 3 3
      let lastArr = result[result.length-1] // last array in result

      for (let j = 0; j < i-1; j++){ 
        let sum = lastArr[j]+lastArr[j+1]
        currentArray.push(sum)
      }
      currentArray.push(1)
      result.push(currentArray)
     }
  }
  
  return result
};