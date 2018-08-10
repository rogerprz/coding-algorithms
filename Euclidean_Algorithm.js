// GCD Greatest common denominator
// When you take two numbers what is the largest common denominator.
let a = 270
let b = 192

function euclid_gcd(a,b) {
  if ( b === 0 ){
    return a
  } else {
    debugger
    return (euclid_gcd(b, a%b))
  }

}

// extended GCD

 function xgcd(a,b){
 if (b == 0)
   {return [1, 0, a]}
 else
   {
    temp = xgcd(b, a % b)
    x = temp[0]
    y = temp[1]
    d = temp[2]
    return [y, x-y*Math.floor(a/b), d]
   }
 }
