/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase()
  regex = /[\W_]/g
  let testStr = s.replace(regex, '')
  console.log('S:', testStr)
  
  
  return testStr === testStr.split("").reverse().join("")
};