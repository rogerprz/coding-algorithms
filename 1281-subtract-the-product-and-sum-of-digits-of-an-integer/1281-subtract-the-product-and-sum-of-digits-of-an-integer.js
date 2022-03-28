/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const arrayOfDigits = Array.from(String(n), Number)
  let sum = arrayOfDigits.reduce((partialSum, a) => partialSum + a, 0)
  let product = arrayOfDigits.reduce((partialSum, a) => partialSum * a, 1)

  console.log('SUM:', arrayOfDigits, sum, product)
  return product - sum
};