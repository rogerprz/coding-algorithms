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

//JAVA SOLUTION

// let start = 0
// let end = nums.length - 1;
// let mid;
//        while (start < end) {
//            // We want the first element of the middle pair,
//            // which should be at an even index if the left part is sorted.
//            // Example:
//            // Index: 0 1 2 3 4 5 6
//            // Array: 1 1 3 3 4 8 8
//            //            ^
//            mid = (start + end) / 2;
//            if (mid % 2 == 1) {mid--}
//
//            // We didn't find a pair. The single element must be on the left.
//            // (pipes mean start & end)
//            // Example: |0 1 1 3 3 6 6|
//            //               ^ ^
//            // Next:    |0 1 1|3 3 6 6
//            if (nums[mid] != nums[mid + 1]) {
//              end = mid
//            }
//
//            // We found a pair. The single element must be on the right.
//            // Example: |1 1 3 3 5 6 6|
//            //               ^ ^
//            // Next:     1 1 3 3|5 6 6|
//            else {
//              start = mid + 2;
//            }
//        }
// 
//        // 'start' should always be at the beginning of a pair.
//        // When 'start > end', start must be the single element.
//        return nums[start];
//      }
