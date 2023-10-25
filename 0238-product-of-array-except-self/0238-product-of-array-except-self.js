/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    // nums =   0 [1,2,3,4] 
    //           [1,2,3,4] 0
    //                 j
    // Output:  [24,12,8,6]
    // [0,0,0,0]
    let result = Array(nums.length).fill(1);

    let preNum = 1;

    for (let i = 0;i<nums.length; i++) {
        // [1,1,1,1]
        result[i] = result[i]*preNum
        preNum = preNum*nums[i]
    }
    console.log(result)

    let postNum = 1
    for (let j=nums.length-1; j>=0;j--) {
         result[j] = result[j]*postNum
        postNum = postNum*nums[j]
    }

    return result
};