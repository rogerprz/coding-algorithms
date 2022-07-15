/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) return false

  let isGoingUp = true
  let p1 = 0, p2 = 1
  
  for (let i = 0; i < arr.length - 1; i++) {
    let start = arr[p1], next = arr[p2]
    
    if (i > 0 && isGoingUp && start > next) isGoingUp = false
    if (start === next ) return false // 
    else if ((start < next && isGoingUp) || start > next && !isGoingUp) { // 
      p1++
      p2++
    }
    else {
      return false
    }
  }
  return isGoingUp ? false : true
};