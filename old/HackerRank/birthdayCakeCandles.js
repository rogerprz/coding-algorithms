let ar = [ 3, 2, 1, 3 ]
let arr = [82, 49, 82, 82, 41, 82, 15, 63, 38, 25]
let arr2 =[18, 90, 90, 13, 90, 75, 90, 8, 90, 43]
function birthdayCakeCandles(ar) {
  let count = 0, tallest = Math.max(...ar)
  ar.forEach(num => {
    if (num === tallest){count+=1}
  })
  return count
}
birthdayCakeCandles(arr2)
