/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) return false
//     must be continously increasing cant be 2,3,3,5
//   Once it reaches a peak it can only be < than peek
//   two elems can't be ===
//   [2,1]  [3,5,5] [0,3,2,1]
  let isGoingUp = true
  let p1 = 0 // 1 
  let p2 = 1 // 2
  for (let i = 0; i < arr.length - 1; i++) {
    let start = arr[p1], next = arr[p2] // Start: 0, 3 Next: 3, 2
    console.log('I:',i, 'S:', start, 'N:', next)

    if (i > 0 && isGoingUp && start > next) {
      console.log('S:', start, 'N:', next)
      isGoingUp = false
    }
    if (start === next ) return false // 
    if ((start < next && isGoingUp) || start > next && !isGoingUp) { // 
      p1++
      p2++
    }

    else {
      return false
    }
  }
  return isGoingUp ? false : true
};