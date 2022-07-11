/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = ['a','e','i','o','u', 'A','E','I','O','U']
  let l = 0, r = s.length-1
  arr = s.split('')
  
  while (l < r ) {
    if (!vowels.includes(arr[l])) l++
    if (!vowels.includes(arr[r])) r--
    
    if (vowels.includes(arr[l]) && vowels.includes(arr[r])) {
      let temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
      l++, r--
    }
  
  }
  return arr.join('')
};