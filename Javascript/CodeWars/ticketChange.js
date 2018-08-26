let registerArr = []
let total = 0, check4Change = 0, changeAvail
const cost = 25
let countMoney = 0
function tickets(peopleInLine){
  console.log(peopleInLine);
    if (peopleInLine[0] === cost ){
      registerArr.push(peopleInLine.shift())
      // console.log('peopleInLine arr', peopleInLine, 'size: ', peopleInLine.length);
      // console.log('registerArr', registerArr);
      total+=cost
      changeAvail = "NO"
      tickets(peopleInLine)
    } else {
      check4Change = peopleInLine[0]
      // console.log('check4Change assign:', check4Change );
      let arrCount = registerArr.length
      while(arrCount >=0){
        check4Change -= registerArr[countMoney]

        // if (check4Change <= 0){
        //   console.log('regCash',registerArr[countMoney]);
        //   console.log('peopleInLine', peopleInLine);
        // }

        console.log('check4Change', check4Change);

        if (check4Change < 0) {
          countMoney = 0
          arrCount-=1
          return changeAvail = "NO"
        }
        else if (check4Change === 0 || check4Change > 25){
          changeAvail = "YES"
        } 
        arrCount-=1
        countMoney+=1

      }
      console.log('countMoney', countMoney);
      console.log('registerArr', registerArr);
      for (let i = 0; i < countMoney; i++) {

        registerArr.shift()
      }
      registerArr.pop(peopleInLine[0])
    }
    // console.log('registerArr',registerArr);
    // console.log('final changeAvail', changeAvail);
    return changeAvail
}

// console.log(tickets([50,50,100]));
// console.log(tickets([25,25,25,25,25,100,100]));
console.log(tickets([25,100]));






function Othertickets(peopleInLine){
  let total = 0, noChange, change
  const cost = 25
  let count = 0
  peopleInLine.forEach(payment=>{
    mInHand = total
    console.log(`${count+=1}`,'payment', payment);
    console.log('mInHand',mInHand);
    // console.log('cost: ',cost,'total: ', total);


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



// 2nd alternate
// let cost = 25, changeAvail, total = 0
// let cashInHand = {
//   25 : 0,
//   50 : 0,
//   100 : 0,
// }
// peopleInLine.forEach(payment=>{
//   if (payment === cost ){
//     total+=cost
//     cashInHand[payment]+=1
//     return changeAvail = "YES"
//   } else if ((payment - cost) > total ) {
//
//   }
//
// })
