var lengthOfLongestSubstring = function(s) {
    result = []
    max_str = 0
    
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

// var lengthOfLongestSubstring = function(s) {
//   var start = 0, maxLen = 0;
//   var map = new Map();

//   for(var i = 0; i < s.length; i++) {
//       var ch = s[i];
    
//       if(map.get(ch) >= start) start = map.get(ch) + 1;
//       map.set(ch, i);
    
//       if(i - start + 1 > maxLen) maxLen = i - start + 1;
//   }

//   return maxLen;
// };

// EDIT/IMPROVEMENT
// if (i - start + 1 > maxLen) maxLen = i - start + 1;

// replace with:

// maxLen = Math.max(maxLen, i - start + 1);
