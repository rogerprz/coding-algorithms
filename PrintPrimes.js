// function PrintPrimes(num){
//   let p = 2
//   let primesArray = new Array()
//   for (let i = 2; i< num;i++){
//     if (i === 2 || i === 3 || i === 5 || i === 7){
//       primesArray.push(i)
//       console.log(i);
//     } else if( (i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0)){
//
//     } else {
//       primesArray.push(i)
//       console.log(i);
//     }
//   }
//   return primesArray
// }
// console.log(PrintPrimes(100))


// function isPrime(num) {
//   console.log(num);
//   Math.abs(num)
//   console.log(num);
//   //i've tried num = Math.abs(num)
//   //  i've also renamed all num below this comment to number and
//   // reassigned let number = Math.abs(num)
//   (num === 0 || num === 1) ? false : null
//   if (num === 2 || num === 3 || num === 5 || num === 7){
//     return true
//   } else if( (num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0) || (num % 7 === 0)){
//     return false
//   } else {
//     return true
//   }
// }
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}
function isPrime(num) {
  console.log(num);
  num = (num < 0) ? (num *-1) : num
  console.log(num);
  (num === 0 || num === 1) ? false : null
  if (num === 2 || num === 3 || num === 5 || num === 7){
    return true
  } else if( (num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0) || (num % 7 === 0)){
    return false
  } else {
    return true
  }
}
// isPrime(-11)
console.log(isPrime(1))
// my solution
function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}
