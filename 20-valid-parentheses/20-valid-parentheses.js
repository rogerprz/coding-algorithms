/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  let arr = s.split("")
  if (arr.length <= 1) return false
  console.log('A:', arr)
  let stack = [];
  let obj = {
    "{": "}", 
    "[": "]", 
    "(": ")"
  }
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  console.log("Keys:", keys, 'V:', values)
  
  for (let i = 0; i< arr.length; i++){
    const elem = arr[i]
    
    if (keys.includes(elem)){
      stack.push(elem)
    } else if (values.includes(elem)){
      let stackKey = stack.pop()
      
      if (obj[stackKey] !== elem) return false
    }
  }
return stack.length === 0
};