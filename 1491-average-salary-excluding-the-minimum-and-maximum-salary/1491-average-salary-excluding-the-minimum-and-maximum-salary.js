/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sortedSalary = salary.sort((a,b) => a-b)
  sortedSalary.shift()
  sortedSalary.pop()
  console.log('S:',sortedSalary)

  let sum = sortedSalary.reduce((partialSum, a) => partialSum + a, 0)

  return sum/sortedSalary.length
};