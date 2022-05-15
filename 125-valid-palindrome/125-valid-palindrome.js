/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase().replace(/[\W_]/g, '')
  let mid = Math.floor(str.length/2)
  

  for (let i = 0; i < mid; i++){
    let right = str.length - 1 - i

    if (str[i] !== str[right]) return false
  }
  
  return true
};