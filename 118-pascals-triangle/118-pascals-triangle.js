/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = []
  
  for (let i = 0; i < numRows; i++) {
    if (i === 0) result.push([1])
    else if (i === 1) result.push([1, 1])
    
   else {
      let currentArray = [1]
      let lastArr = result[result.length-1] 

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