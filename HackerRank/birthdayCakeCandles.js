let ar = [ 3, 2, 1, 3 ]
let arr = [82, 49, 82, 82, 41, 82, 15, 63, 38, 25]
function birthdayCakeCandles(ar) {
  let count = 0, tallest, current
  ar.forEach(num => {

    if (num >= tallest){
      tallest = num
      count+=1
    }
  })
  return count

}
birthdayCakeCandles(arr)
