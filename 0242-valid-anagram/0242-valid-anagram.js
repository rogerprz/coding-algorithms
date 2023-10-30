/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const str = s.split('').sort()
    const tr = t.split('').sort()

    console.log(str, tr)
    return str.join('') === tr.join('')
};