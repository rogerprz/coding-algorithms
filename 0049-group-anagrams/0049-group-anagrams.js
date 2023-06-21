/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// if strs len === 1 then we return an array of arrays with that single elem. 
if (strs.length === 1) return [strs]
// array of words, where we want to group the words together if they have the same wording.
// create a hash where the key is a sorted word, ex: eat => aet, {aet: [eat]}
const map = {}
// loop through the array
    for (let i = 0; i<strs.length; i++){
        // split word, sort word, 
        const word = strs[i]
        const sortedWord = word.split("").sort().join('')
        // if word in hash then we push it to array
        if (sortedWord in map){
            map[sortedWord].push(word)
        } else {
        // else we create key and new array. push word
            map[sortedWord] = [word]
        }
    }
// return the values as an array
return Object.values(map)

};