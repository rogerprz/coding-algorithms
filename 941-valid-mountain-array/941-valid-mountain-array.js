/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) return false

  let isGoingUp = true
  let p1 = 0, p2 = 1
  
  for (let i = 0; i < arr.length - 1; i++) {
    let start = arr[i], next = arr[i+1]
    
//     Peek has been reached and we need to start going down
    if (i > 0 && isGoingUp && start > next) isGoingUp = false
//  We can't have equal values
    if (start === next ) return false // 
//  If we are going up the mountain isGoingUp = true, when we start going down we switch it to false
    else if ((start < next && isGoingUp) || start > next && !isGoingUp) { // 
      p1++
      p2++
    }
    else {
      return false
    }
  }
//   if we stayed going up and never went down then we return false, else true
  return isGoingUp ? false : true
};