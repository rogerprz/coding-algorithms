// function PrimeNumbers(num) {
//   for (let count = 1; count<= num; count++){
//     let isPrime = true
//     for (let j = 2; j < count; j++) {
//       if (count % j === 0){
//         isPrime = false
//       }
//     }
//     if (isPrime === true){
//       console.log(count);
//     }
//   }
// }
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

// function isPrime(num) {
//   console.log(num);
//   num = (num < 0) ? (num *-1) : num
//   console.log(num);
//   (num === 0 || num === 1) ? false : null
//   if (num === 2 || num === 3 || num === 5 || num === 7){
//     return true
//   } else if( (num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0) || (num % 7 === 0)){
//     return false
//   } else {
//     return true
//   }
// }

// my solution
// function isPrime(num) {
//   for (let i = 2; i < num; i++) if (num % i == 0) return false;
//   return num >= 2;
// }

// console.log(PrimeNumbers(55))

function recursionPrimeNum(num, i = 2) {
  if (num < 2 ){
    return num
  }
  if (i > num){
    return "done"
  }
  else if (num % /[2357]/ === 0){
    console.log("prime " + i);
    i++
     return recursionPrimeNum(num, i)
   }

}

console.log(recursionPrimeNum(20));


// function recursionPrimeNum(num, i = 2) {
//   if (num < 2 ){
//     return num
//   }
//   if (i > num){
//     return "done"
//   } else if (num % i === 0){
//     console.log("not prime " + i);
//     i++
//      return recursionPrimeNum(num, i)
//   } else if (i*i > num){
//     console.log("is Prime " + i);
//     i++
//
//     return recursionPrimeNum(num, i)
//   } else{
//     i++
//     return recursionPrimeNum(num, i)
//   }
// }
