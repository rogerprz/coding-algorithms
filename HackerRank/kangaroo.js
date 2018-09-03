function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2){
    return "NO"
  }
  else if (x1 === x2) {
    return "YES"
  }
  else{
    kangaroo(x1+v1, v1, x2+v2, v2)
  }
