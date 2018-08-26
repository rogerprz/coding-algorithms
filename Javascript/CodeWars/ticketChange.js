function tickets(peopleInLine){
  let total = 0, noChange, change
  const cost = 25
  let count = 0
  peopleInLine.forEach(payment=>{
    mInHand = total
    console.log(`${count+=1}`,'payment', payment);
    console.log('mInHand',mInHand);
    console.log('total', total);
    debugger;
    if (payment === cost){
      noChange = 'YES'
      return total+=cost
    }
    else if (mInHand < payment){
      return noChange = "NO"
    }
    else if((payment - mInHand) === 25){

      noChange = "YES"
    }
  })
  return noChange
}

// console.log(tickets([50,50,100]));
console.log(tickets([25,25,25,25,25,100,100]));
