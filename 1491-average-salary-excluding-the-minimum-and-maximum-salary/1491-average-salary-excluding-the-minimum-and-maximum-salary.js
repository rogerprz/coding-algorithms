/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  const sortedSalary = salary.sort((a,b) => a-b)
  sortedSalary.shift()
  sortedSalary.pop()
  const sum = sortedSalary.reduce((partialSum, a) => partialSum + a, 0)
  
  return sum/salary.length
};