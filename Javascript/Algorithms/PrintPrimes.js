function PrimeNumbers(num) {
  for (let count = 1; count<= num; count++){

    let isPrime = true
    for (let j = 2; j < count; j++) {
      if (count % j === 0){
        isPrime = false
      }
    }
    if (isPrime === true){
      console.log(count);
    }
  }

}


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
// console.log(isPrime(1))
// my solution
function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}

// console.log(PrimeNumbers(55))
console.log("hi");
function recursionPrimeNum(count = 2, num) {
  if (num === 0 || num === 1 ){
    return num
  } else {
    if (num % count === 1){
      console.log(count);
      count++
      return recursionPrimeNum(count, num)
    }
  }

}

console.log(recursionPrimeNum(20));
