/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length === 1) {return nums[0]}


    let left = 0;
    let middle = determineMiddle(left, nums.length)
    let right = nums.length -1;
    let count = 0
    // console.log("NUMS: ",nums)

    while ((left < right) || count < 8){
        console.log("NUMS: ",nums)
        console.log("LEFT  : ", left, "ELEM:", nums[left])
        console.log("MID  : ", middle, "ELEM:", nums[middle])
        console.log("RIGHT:", right, "ELEM:", nums[right])
        console.log(" ");
        if (nums[middle] !== nums[middle+1] && nums[middle] !== nums[middle-1]){
          return nums[middle]
        }
        else if (nums.length === 3 || (right - left) === 2 ) {
          if (nums[middle] === nums[middle+1]){
            return nums[left];
          }
          else {
            return nums[right];
          }
        }
        else if (nums[middle] === nums[middle+1]){
            right = middle
            middle = determineMiddle(left, right)
        }
        else if (nums[middle] == nums[middle-1]){
            left = middle
            middle = determineMiddle(left, right)
        }
        else if (nums[middle] != nums[middle+1]){
            return nums[middle];
        }
        count+=1;
    }
};

function determineMiddle(left, right){
    return (Math.floor((right+left)/2))
    // return (right % 2 === 0) ?  ((left+right)/2): (Math.floor((right+left)/2))
}

let arr = [1,1,2];
let arr2 = [1,1,2,2,4,4,5,5,9]; // len: 9
console.log(singleNonDuplicate(arr))
console.log(singleNonDuplicate(arr2));




//
// var singleNonDuplicate = function(nums) {
//     if (nums.length === 1) {return nums[0]}
//     if (nums.length === 0 ) { return []}
//     let left = 0;
//     let right = nums.length -1;
//     let middle;
//     // console.log("NUMS: ",nums)
//
//     while (left < right){
//         middle = Math.floor((left+ right)/2)
//         console.log("NUMS: ",nums)
//         console.log("LEFT  : ", left, "ELEM:", nums[left])
//         console.log("MID  : ", middle, "ELEM:", nums[middle])
//         console.log("RIGHT:", right, "ELEM:", nums[right])
//         console.log(" ");
//
//        if ((middle - left) % 2 === 0 ){
//            if (nums[middle] == nums[middle-1]){
//                right = middle - 2
//            }
//            else {
//                if (nums[middle] !== nums[middle+1]){
//                    return nums[middle]
//                }
//            }
//        }
//         else {
//             if (nums[middle] === nums[middle -1]){
//                 left = middle + 1
//
//             }
//             else {
//                 right = middle - 1
//             }
//         }
//         return nums[right];
//     }
// };
//
//
