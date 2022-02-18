var twoSum = function(nums, target) {
    for (v in nums){
        let secondNum = target-nums[v]
        for (j in nums){
            if (secondNum === nums[j] && v !== j){
                console.log(nums[j],nums[v])
                return [parseInt(v), parseInt(j)]
            }
        }
    }
};
