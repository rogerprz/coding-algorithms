function PrintPrimes(num){
  let p = 2
  let primesArray = new Array()
  for (let i = 2; i< num;i++){
    if (i === 2 || i === 3 || i === 5 || i === 7){
      primesArray.push(i)
      console.log(i);
    } else if( (i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0)){

    } else {
      primesArray.push(i)
      console.log(i);
    }
  }
  return primesArray
}
console.log(PrintPrimes(100))
