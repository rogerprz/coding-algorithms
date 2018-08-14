let a = 270
let b = 192

function gcd(a,b){
  // console.log(a, b);
  if (b === 0){
    console.log('what is a', a);
    return a
  } else {
    return gcd(b, a%b)
  }
}

gcd(a,b);
