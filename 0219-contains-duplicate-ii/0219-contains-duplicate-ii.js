/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // if (!!nums) return false 

    const hash = {}
    const isValid = false
    for (let i=0; i < nums.length;i++) {
        const currNum = nums[i]
        if (currNum in hash) {
            const index = hash[currNum].split(':')[1]
            const isResult = Math.abs(parseInt(index) - i)
            if (isResult <= k) {
                return true
            } 
            hash[currNum] = `index:${i}`
        }
        else {
            hash[currNum] = `index:${i}`
        }
    }
    return isValid
};