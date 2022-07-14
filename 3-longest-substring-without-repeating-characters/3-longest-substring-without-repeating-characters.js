/**
 * @param {string} s
 * @return {number}
 */

// OLD SOLUTION 
var lengthOfLongestSubstring = function(s) {
  let result = []
  let max_str = 0
    
    s.split("").forEach((str)=>{
        if (result.includes(str)){
            if (max_str < result.length){
                max_str = result.length 
            }
            result.push(str)
            
            const strIndexOf = result.indexOf(str)
            
            result = result.slice(strIndexOf + 1)
        } else {
            result.push(str)
        }
    })
   
    if (result.length > max_str) max_str = result.length
    return max_str
  
};