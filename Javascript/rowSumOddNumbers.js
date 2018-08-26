function rowSumOddNumbers(n){
  let odds = 1, temp
  for (let i = 1;i<=n;i++){
    odds+=2
  }
  console.log("odds before 2nd", odds);
  let total = odds
  for (let j = 1; j<n; j++){
    // console.log("loop temp",temp);
    temp = total
    // console.log("temp",temp);
    odds+= 2
    // console.log("odds",odds);
    total = temp + odds
    // console.log("total",total);
    // debugger;
  }
  console.log('what is total',total);
  return total
}


rowSumOddNumbers(3)

//1             1
//2          3     5
//3        7     9    11
//4     13    15    17    19
//5   21    23    25    27    29
