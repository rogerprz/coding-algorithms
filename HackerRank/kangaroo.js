function kangaroo(x1, v1, x2, v2) {
  let multiply = x1 * x2
  let checkMulti = multiply * multiply
  if (v1 < v2 || v1 >= checkMulti){
    return "NO"
  }
  else if (x1 === x2) {
    return "YES"
  }
  else{
    return kangaroo(x1+v1, v1, x2+v2, v2)
  }
}

kangaroo(0, 2 ,5 ,3)
console.log(kangaroo(0, 2 ,5 ,3));
