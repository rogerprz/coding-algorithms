/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // we can create a new array
    const leftArr = []
    const rightArr = []
    const results = []

    let left = 1
    let right = 1
    const len = nums.length - 1
    let rIndex = nums.length -2 // we dont need to mess with the last elem, lIndex will
    let lIndex = -1;

    for (let i = 0; i< nums.length; i++){
        left = left * nums[i]
        leftArr.push(left)
    }

    for (let i = len; i > -1;i--) {
        right = right * nums[i]
        rightArr.push(right)
    }
    console.log("S:", leftArr, rightArr)

    for (let i = 0; i<nums.length; i++) {
        const lElem = leftArr[lIndex];
        const rElem = rightArr[rIndex];
        // console.log('_____________________________')
        // console.log('L:', lElem, leftArr)
        // console.log('R:', rElem, rightArr)
        const res = 
            (lIndex == -1 ? 1 : lElem) *
            (rIndex == -1 ? 1 : rElem);

        results.push(res)
        rIndex--;
        lIndex++;
    }

    return results;
    
};
