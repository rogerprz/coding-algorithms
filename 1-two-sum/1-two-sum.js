/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length-1; i++){
        let currNum = nums[i]
        
        let up_nums = nums.slice(i+1)
        console.log('Curr:', currNum, 'INDEX:', i, 'T:', target)
        console.log('UN:', up_nums)
        
        const secNum = up_nums.indexOf(target - nums[i])
        console.log('SecNum:', secNum)
        
        if (secNum > -1){
            let changeIndex = secNum + i
            return [i, changeIndex + 1]
        }
    }

};