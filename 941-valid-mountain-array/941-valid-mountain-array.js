/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) return false

  let isGoingUp = true
  
  for (let i = 0; i < arr.length - 1; i++) {
    let start = arr[i], next = arr[i+1]
    
    if (i > 0 && isGoingUp && start > next) isGoingUp = false
    if (start === next ) return false
    else if ((start < next && isGoingUp) || start > next && !isGoingUp) { 
    }
    else {
      return false
    }
  }
  return isGoingUp ? false : true
};