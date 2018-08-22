function fibonacci(num) {
  let arr = []
  let a = 1, b = 0, temp
  for (let i = 0; i< num; i++){
    if (num === 0){
      return num
    } else if (num === 1){
      return [0,1]

    }
    else {
      temp = a
      a = a + b
      b = temp
      arr.push(b)
    }
  }
  return arr
}

fibonacci(5)
