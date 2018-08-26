function tickets(peopleInLine){
  let total = 0, noChange, change
  const cost = 25
  let count = 0
  peopleInLine.forEach(money=>{
    if (money === cost){
      return total+=cost
    }
    console.log(`${count+=1}`,'money', money);
    change = money - (cost + total)
    total+=cost
    console.log('change',change);
    console.log('total', total);
    if (change < 0){
      noChange = "NO"
    } else {
      noChange = "YES"
    }
  })
  return noChange
}
console.log(tickets([25, 100])
);
