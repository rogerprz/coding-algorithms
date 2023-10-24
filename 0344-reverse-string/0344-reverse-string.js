/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
    const reverse = (left, right) => { 
        if (left<right) {
            [str[left], str[right]] = [str[right], str[left]]
            
            return reverse(left+1, right-1)
        }

       
    }

    return reverse(0, str.length-1)
};