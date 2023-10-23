/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = {}

    for (let i=0; i < nums.length;i++) {
        const currNum = nums[i]
        if (currNum in hash && Math.abs(parseInt(hash[currNum].split(':')[1]) - i) <= k) {
            // const index = hash[currNum].split(':')[1]
            // const isResult = Math.abs(parseInt(index) - i)
            return true
        }
        hash[currNum] = `index:${i}`
    }
    return false
};