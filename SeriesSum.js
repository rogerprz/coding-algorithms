function SeriesSum(n){
  let sum = 0
  for (let i = 0; i<n;i++){
    sum += 1/(1+i*3)
  }
  return sum.toFixed(2)
}
SeriesSum(2)
console.log(SeriesSum(2));
