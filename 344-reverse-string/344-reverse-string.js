/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0 
  let right = s.length - 1
  console.log('LEN:', s.length)
  
  while (left < right){
    console.log('L:', left, 'R:', right)
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
    console.log('AS:', s)

    left++
    right--
  }
  return s
};
