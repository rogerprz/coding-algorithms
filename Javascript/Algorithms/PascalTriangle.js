function PascalTriangle(num) {
  let pTriangle =[]

  for (let i = 0; i<num;i++){
    pTriangle[i] = new Array(i+1)
    for (let j=0;j<i+1;j++){
      console.log('pTriangle', pTriangle);

      if (j === 0 || j === i) {
        pTriangle[i][j] = 1;
      } else{
        pTriangle[i][j] = pTriangle[i-1][j-1] + pTriangle[i-1][j]
      }
    }
  }
  return pTriangle
}
// PascalTriangle(num)
console.log(PascalTriangle(7));
