/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length <= 1) return nums.map(String)
  let results = []
  let currArr = [nums[0]]
  
  for (let i = 1; i < nums.length; i++) {
    const currElem = nums[i]
    const lastElem = currArr[currArr.length-1]
    
      if (lastElem + 1 === currElem){
        currArr.push(nums[i])
      } else if (currElem > lastElem + 1){
        if (currArr.length > 1){
          results.push(`${currArr[0]}->${currArr[currArr.length-1]}`)
        } else {
          results.push(`${currArr[0]}`)
        }
        currArr = [currElem]
      }
  }
  currArr.length === 1 ? 
    results.push(`${currArr[0]}`) : 
    results.push(`${currArr[0]}->${currArr[currArr.length-1]}`)

  return results
};

// Optimized solution
// function summaryRanges(nums) {
//   var res = [];
//   for (var i = 0, left = nums[0]; i < nums.length; i++) {
//     if (nums[i] + 1 !== nums[i + 1]) {
//       res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
//       left = nums[i + 1];
//     }
//   }
//   return res;
// }
