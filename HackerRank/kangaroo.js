function kangaroo(x1, v1, x2, v2) {
  let multiply = x1 * x2
  if (v1 < v2 || v1 >= multiply){
    return "NO"
  }
  else if (x1 === x2) {
    return "YES"
  }
  else{
    kangaroo(x1+v1, v1, x2+v2, v2)
  }
