/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase()

    for (let i = 0; i <cleanStr.length/2;i++){
        const start = cleanStr[i]
        const end = cleanStr[s.length-1-i]
        console.log('S:', start, end)
        if (cleanStr[i] !== cleanStr[cleanStr.length-1-i]) {
            return false
        }
    }
    return true
};