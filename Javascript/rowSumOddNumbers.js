function rowSumOddNumbers(n){
  if (n === 1){return n}
  let items = 1, odds = 1, temp, arr = []
  let pos = sumAllOfN(n)
  for (let i = 1;i<=(pos);i++){
    if (i >(pos-n)){ arr.push(odds)}
    odds+=2
  }
  return reduceArr(arr)
}

function reduceArr(arr) {
  const reducer = (acc, currVal) => acc + currVal;
  return arr.reduce(reducer,0)
}

function sumAllOfN(n) {
  let total = n
  n-=1
  for (let i = 0; i < n; n--) {total+=n}
  return total
}


rowSumOddNumbers(4)

//1             1             === 1
//2          3     5          === 2-3
//3        7     9    11      === 4-6      27
//4     13    15    17    19  === 7-10     64
//5   21    23    25    27    29


// solution using Math
function rowSumOddNumbersPower(n) {
  return Math.pow(n, 3);
}
