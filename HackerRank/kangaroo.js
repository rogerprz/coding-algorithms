function kangaroo(x1, v1, x2, v2) {
  console.log('x1: ',x1, ' x2: ', x2);
  let multiply = v1 * v2
  let checkMulti = multiply * 4
  if (x1 === x2){
    return "YES"
  }
  else if (v1 < v2 || x1 > x2){
    return "NO"
  }
  else{
    return kangaroo(x1+v1, v1, x2+v2, v2)
  }
}

kangaroo(0, 2 ,5 ,3)
console.log(kangaroo(0, 3 ,4 ,2));
