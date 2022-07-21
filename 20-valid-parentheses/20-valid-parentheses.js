/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length <= 1) return false
  
  let stack = [];
  let obj = {
    "{": "}", 
    "[": "]", 
    "(": ")"
  }
  let keys = ["{", "[", "("]
  
  for (let i = 0; i< s.length; i++){
    const elem = s[i]
    
    if (keys.includes(elem)){
      stack.push(elem)
    } 
    else {
      if (obj[stack.pop()] !== elem) return false
    }
  }
return stack.length === 0
};