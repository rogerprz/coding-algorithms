/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
  const logic = (left, right)=>{
    if (left<right) {
      [s[left], s[right]] = [s[right], s[left]]
      
      logic(left+1, right-1)
    }
  }
  
  return logic (0, s.length-1)
};