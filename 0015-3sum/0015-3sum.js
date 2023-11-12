/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [] 
    // sort in order for us to be able to find the best total to add.
    nums.sort((a,b) => a-b)

    for (let a = 0; a<nums.length; a++) {
        // index a is > than 0 and 
        // the current num is == to next num we skip the check.
        if (a > 0 && nums[a] === nums[a-1]) continue 
        // we always want to get the num in front of a
        let b = a+1
        // get the last num in the array since this is our max
        let c = nums.length-1
        // we iterate at index b and c since a,b,c need to add to total.
        while (b < c) {
            // get the num's at each position.
            const aNum = nums[a]
            const bNum = nums[b]
            const cNum = nums[c]
            const total = aNum + bNum + cNum
            // If the total is == 0 then we found a match
            if (total === 0) {
                // push the nums into the results
                results.push([aNum, bNum, cNum])
                // Now that we found a pair we want to move up the b/mid pointer as to not have duplicates.
                while (bNum === nums[b+1]) b++ 
                // once we are past it, then we increase as normal. 
                b++
            } else if (total > 0) {
                // if total > 0 then the last num is too high, we need to lower it. 
                c--
            }
            else {
                // we increase mid pointer since no matches found.
                b++
            }
        }
    }
    return results
};