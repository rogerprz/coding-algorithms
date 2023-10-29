/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i< nums.length; i++) {
        const currentNum = nums[i]
        const missingNum = target - currentNum 

        if (map.has(currentNum)){
            return [map.get(currentNum), i]
        } else {
            map.set(missingNum, i)
        }
    }
};