function PrintPrimes(num){

  for (let i= 2; i < num; i++) {
    if (i === 2){
      console.log(i)
      i++
    }
    else {
      if (i-1 % 2 === 0 ){
        i++
        console.log(i)
      }
    }

  }
}
console.log(PrintPrimes(10))
