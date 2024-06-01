function findBreakDuration(n, k, t, start, finish) {

    let newObj = {}
    let newArr = new Array(t)
    newArr.fill('free',0,t)
    count = 0
    pos = 0
    event = 1
    for (let i = 0; i< t;i++){
      console.log('what is start[count]', start[count])
      if (i>= 4){
        debugger
      }
      if (i >= start[count] && i <= finish[count]-1 ){
        newArr[i] = [event, i]

      } else if (i === finish[count-1]) {
        debugger;
        newArr[i] = [event, i]

        event+=1
        count+=1
      }
      else {
        newArr[i] = ['free', i]
         pos+=1
         event+=1
         count+=1
      }


    }
    console.log(newArr)


}
n = 3
k = 2
t = 15
start = [0, 6, 7]
finish = [5, 7, 8]
findBreakDuration(n, k, t, start, finish)
