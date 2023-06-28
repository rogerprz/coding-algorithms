/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // this a prefix and post fix algorithm
    // create a results array and fill it with 1 *nums.length
    const getArray = new Array(nums.length)
    let result = getArray.fill(1)
    console.log('RES:', result)
    let prefixNum = 1
    // we need to create a prefix and set it to 1.
    // [1][1,2,3,4]
    // loop through array where we set and multiple result[i] = result[i]*prefix
    for (let i = 0; i<nums.length;i++) {
    // prefix num = prefix num* currentNum
      result[i] = result[i]*prefixNum
      prefixNum = prefixNum*nums[i]
    }

    // we create a postfix == 1
    let postNum = 1
    for (let i = nums.length-1; i >= 0;i--){
      result[i] = result[i]*postNum
      postNum = postNum*nums[i]
    }



    // we do the same as initial loop except we start from top and go to bottom. 
    // [1,2,3,4][1]
    return result

};