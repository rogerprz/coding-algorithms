/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(w) {
  let arr = w.split(" ")
  let result = arr.map(word =>{
    const revWord = reverseString(word)
    return revWord
  }) 
  return result.join(' ')
};

function reverseString(s) {
  s = s.split('')
  let l = 0, r = s.length - 1
    
  while (l < r ) {
    let temp = s[l]
    s[l] = s[r]
    s[r] = temp
    r--, l++
  }

  return s.join('')
};