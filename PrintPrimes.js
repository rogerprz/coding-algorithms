let i = 2
function PrintPrimes(num){
  while (i < num) {
    if (i === 2){
      console.log(num)
      i++
    } else if ((i-1) % 2 === 0 ){
      console.log(i)
      i++
    }

  }
}
console.log(PrintPrimes(10))
