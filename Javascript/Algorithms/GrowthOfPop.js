function nbYear(p0, percent, aug, p, n = 0){
    if (p0 >= p){
      return n
    }
    else{
      n++
      p0+=(p0*(percent/100) + aug)
      return nbYear(p0, percent, aug, p, n)
    }
}





nbYear(1500, 5, 100, 5000) //15
nbYear(1500000, 2.5, 10000, 2000000) //10
nbYear(1500000, 0.25, 1000, 2000000, 0) //94

// function nbYear(p0, percent, aug, p, n = 0){
//     (p0 >= p) ? n : ((n++, p0+=(p0*(percent/100)) + aug, nbYear(p0, percent, aug, p, n))
//   }
