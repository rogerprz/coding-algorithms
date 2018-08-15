function PrimeNumbers(num) {
  for (let count = 1; count<= num; count++){

    let isPrime = true
    for (let j = 2; j < count; j++) {
      if (count % j === 0 && j !== 0){
        isPrime = false
      }
    }
    if (isPrime === true){
      console.log(count);
    }
  }

}



console.log(PrimeNumbers(55))
