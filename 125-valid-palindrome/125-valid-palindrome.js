/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length <=1) return true
  
  s = s.toLowerCase()
  regex = /[\W_]/g
  let testStr = s.replace(regex, '')
  console.log('S:', testStr)
  
  
  return testStr === testStr.split("").reverse().join("")
};