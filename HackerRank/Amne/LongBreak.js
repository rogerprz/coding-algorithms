function findBreakDuration(n, k, t, start, finish) {

    let newObj = {}
    let newArr = new Array(t)
    newArr.fill('free',0,t)
    count = 0
    pos = 0
    event = 1
    for (let i = 0; i< t;i++){
      // debugger
      // if (i > 3 && i < 8){
      //   console.log('newArr', newArr[i], i);
        console.log('count: ', count, 'what is i', i);
        // console.log('what is i', i)
      //   console.log('newArr', newArr);
      //   debugger }

      if (i >= start[event] && i <= finish[event]-1 ){
          newArr[i] = [event, i]
          console.log("i: ",i, "fin count: ",finish[count]);
          // debuggerx
          count+=1
        }
      else{
        newArr[i] = ['free', i]
        event+=1
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