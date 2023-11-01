/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length <=1) return [strs]
    const hash = {}

    for (let i = 0; i <strs.length; i++) {
        const currElem = strs[i]
    
        const sortedElem = currElem.split("").sort()
        const joinElem = sortedElem.join('')

        if (joinElem in hash){
            hash[joinElem].push(currElem)
        }  else {
            hash[joinElem] = [currElem]
        }
        // }
      
    }
    console.log("VAL:", Object.values(hash))
    return Object.values(hash)
};