// let a = 2
// let n = 5
let a = 48
let n = 101
// a * x = 1 mod [n]


// Your goal is to code a function inverseMod wich take a and n as parameters and return x.

let x = 0
// let modinv = function(a,n) { (((a * x) % n) === 1) ? x :(x++, modinv(a,n))}
let gcd = function(a,n){
  if (!n ){
    return a
  } else{
    return (gcd(n,a%n))
  }
}
let modinv = function(a,n) {

  console.log("what is gcd",gcd(a,n));
  let result = (a * x) % n
  console.log("result x", x);
  console.log(result);
  let checkA= a % 2
  let checkN = n % 2
  if ((checkA === 0 && checkN ===1) || (checkN === 0 && checkA === 1) ){
    console.log("check A",a );
    console.log("check N",n );
    console.log("check x",x );
    if (result === 1){
      console.log("what is x", x);
      return x
    }else{
      x++
      return modinv(a,n)
    }
  } else {
    debugger
    return null
  }

}

console.log(modinv(a,n));


// let x = 0
// let inverseMod = function(a,n) {
//   result = (a * x) % n
//   if (result === 1){
//     return x
//   }else {x++
//   return inverseMod(a,n)
//   }
//
// }


// ALTERNATE
// modinv = function(a,n) {
// console.log([a,n])
//   var x, y;
//   function exgcd(a,b){
//     if(b==0){
//       x = 1;
//       y = 0;
//       return a;
//     }
//     var r = exgcd(b, a%b, x, y);
//     var t = x;
//     x = y;
//     y = t - Math.floor(a/b)*y;
//     return r;
//   }
//   if(exgcd(a,n)!=1) return null;
//   else return x>0?x:n+x;
// }
