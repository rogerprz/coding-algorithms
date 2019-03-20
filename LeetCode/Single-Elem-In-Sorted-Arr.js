console.log("HERE!!!");
var singleNonDuplicate = function(nums) {
    if (nums.length === 1) {return nums[0]}


    let left = 0;
    let right = nums.length -1;
    let middle = determineMiddle(left, right)
    console.log(nums)
    while (left < right){

        console.log("LEFT:", left)
        console.log("RIGHT:", right)
        console.log("MID: ", middle)
        debugger
        if (nums[middle] == nums[middle+1]){
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
    }
};

function determineMiddle(left, right){
    return (right % 2 === 0) ?  ((left+right)/2): (Math.floor((right+left)/2))
}

let arr = [1,1,2];

singleNonDuplicate(arr)
