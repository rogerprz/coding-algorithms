function rowSumOddNumbers(n){
  let items = 1
  let odds = 1, temp
  if (n === 1){return n}
  let pos = sumAllOfN(n)
  debugger;
  for (let i = 1;i<=n;i++){
    odds+=2
  }
  // console.log("check odds: ",odds);
  let total = odds
  for (let j = 1; j<n; j++){
    temp = total
    odds+= 2
    total = temp + odds
  }
  return total
}

function sumAllOfN(n) {
  let total = n
  n-=1
  for (let i = 0; i < n; n--) {
    total+=n
  }
  return total
}


rowSumOddNumbers(4)

//1             1             === 1
//2          3     5          === 2-3
//3        7     9    11      === 4-6      27
//4     13    15    17    19  === 7-10     64
//5   21    23    25    27    29
