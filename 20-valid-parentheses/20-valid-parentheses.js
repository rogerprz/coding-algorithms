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
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  
  
  for (let i = 0; i< arr.length; i++){
    const elem = arr[i]
    
    if (keys.includes(elem)){
      stack.push(elem)
    } 
    if (values.includes(elem)){
      let stackKey = stack.pop()
      
      if (obj[stackKey] !== elem) return false
    }
  }
return stack.length === 0
};