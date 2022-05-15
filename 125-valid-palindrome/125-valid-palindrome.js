/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let testStr = s.toLowerCase().replace(/[\W_]/g, '')
  console.log('T:', testStr)
  let mid = Math.floor(testStr.length/2)
  console.log("M:", mid, 'S:', testStr.length)
  for (let i = 0; i < mid; i++){
    let right = testStr.length - 1 - i
    console.log('R:', right, testStr[i], testStr[right])
    if (testStr[i] !== testStr[right]){
      return false
    }
    
  }
  
  return true
};