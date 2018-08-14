function Factorial(num, total = 1) {
  if (num === 1){
    return total
  } else {
    total = total * num
    return Factorial(num-1, total)
  }
}
console.log(Factorial(5));
