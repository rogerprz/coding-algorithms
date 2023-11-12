/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []
    const target = 0
    nums.sort((a,b) => a-b)
// [ -4, -1, -1, 0, 1, 2 ]
    for (let aIndex =0; aIndex <nums.length; aIndex++){
        if (aIndex > 0 && nums[aIndex] === nums[aIndex-1]) continue
        let bIndex = aIndex+1
        let cIndex = nums.length-1

        while (bIndex < cIndex) {
            const aNum = nums[aIndex]
            const bNum = nums[bIndex]
            const cNum = nums[cIndex]
            const total = aNum + bNum + cNum

            if (total === target) {
                results.push([aNum, bNum, cNum])

                while (bNum === nums[bIndex+1]) bIndex++
                bIndex++
                cIndex--
            } else if (total > target) {
                cIndex--
            } else {
                bIndex++
            }
        }

    }
    return results
};