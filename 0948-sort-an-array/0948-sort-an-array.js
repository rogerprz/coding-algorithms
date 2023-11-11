/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // NOT MY SOLUTION 
    // MERGE SORT, const nums = [5,2,3,1]
    if (nums.length < 2) return nums 

    // Find the mid index
    let mid = Math.floor(nums.length/2)
    // Get left half 
    let left = nums.slice(0,mid)
    // Get the right half
    let right = nums.slice(mid)

    // Here we use recursion to to reduce the size of the array from each side. 
    return merge(sortArray(left), sortArray(right))
};

const merge = function(arrLeft, arrRight) {
    let sortedArray = []
    while (arrLeft.length > 0 && arrRight.length > 0) {
        if (arrLeft[0] <= arrRight[0]) {
            sortedArray.push(arrLeft.shift())
        } else {
            sortedArray.push(arrRight.shift())
        }
    }

    return [...sortedArray, ...arrLeft, ...arrRight]
}