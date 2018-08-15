// function PrimeNumbers(num) {
//   console.log(num);
//   for (let count = 0; count<= num; count++){
//     let isPrime = true
//     for (let j = 2; j < count; j++) {
//       if (count % j === 0 && j % 2 !== 0){
//         isPrime = false
//       }
//     }
//     if (isPrime === true){
//       console.log(count);
//     }
//   }
//
// }
function PrimeNumbers(num){
  for (let counter = 1; counter <= num; counter++) {

      let notPrime = false;
      for (let i = 2; i <= counter; i++) {
          if (counter%i===0 && i!==counter) {
              notPrime = true;
          }
      }
      if (notPrime === false) {
                  console.log(counter);
      }
  }
}


console.log(PrimeNumbers(20))
