/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = s.split("")
  if (arr.length <= 1) return false
  
  let stack = [];
  let obj = {
    "{": "}", 
    "[": "]", 
    "(": ")"
  }
  let keys = ["{", "[", "("]
  let values = ["}", "]", ")"]
  
  
  for (let i = 0; i< arr.length; i++){
    const elem = arr[i]
    
    if (keys.includes(elem)){
      stack.push(elem)
    } 
    if (values.includes(elem)){
      
      if (obj[stack.pop()] !== elem) return false
    }
  }
return stack.length === 0
};