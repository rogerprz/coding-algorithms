function tickets(peopleInLine){

}

// console.log(tickets([50,50,100]));
console.log(tickets([25,25,25,25,25,100,100]));


function tickets(peopleInLine){
  let total = 0, noChange, change
  const cost = 25
  let count = 0
  peopleInLine.forEach(payment=>{
    mInHand = total
    console.log(`${count+=1}`,'payment', payment);
    console.log('mInHand',mInHand);
    // console.log('cost: ',cost,'total: ', total);

    // debugger;
    if (payment === cost){
      noChange = 'YES'
      return total+=cost
    }
    else if((payment - mInHand) === 25){
      noChange = "YES"
    }
    else if ((mInHand+cost) < payment){
      return noChange = "NO"
    }

  })
  return noChange
}
