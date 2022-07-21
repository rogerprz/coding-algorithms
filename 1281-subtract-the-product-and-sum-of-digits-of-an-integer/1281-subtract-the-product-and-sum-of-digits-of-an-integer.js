/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const arrayOfDigits = Array.from(String(n), Number)
  let sum = 0
  let product = 1
  for (const digit in arrayOfDigits){
    sum = sum + arrayOfDigits[digit]
    product = product * arrayOfDigits[digit]
  }
  // let sum = arrayOfDigits.reduce((partialSum, a) => partialSum + a, 0)
  // let product = arrayOfDigits.reduce((partialSum, a) => partialSum * a, 1)

  return product - sum
};