// p0 = population
//  percent increasing
//aut = additional people

let n = 0
function nbYear(p0, percent, aug, p) {
  console.log(n, p0);
    if (p0 >= p){
      return n
      }
    else {
      n++
      p0 = p0+(p0*(percent/100)) + aug
      // debugger
      return nbYear(p0, percent, aug, p)
      }
}

nbYear(1500, 5, 100, 5000) //15
nbYear(1500000, 2.5, 10000, 2000000) //10
nbYear(1500000, 0.25, 1000, 2000000) //94
