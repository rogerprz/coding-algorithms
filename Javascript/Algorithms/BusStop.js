//code wars problem
// Number of People in the Bus

//[0] = number of people getting into bus.
//[1] = number of people getting off

let number = function(busStops){
  let total = 0
  console.log(busStops);
  for (let i in busStops) {
    console.log(busStops[i]);
    total += busStops[i][0];
    total -= busStops[i][1]
  }
  return total
}

number([[10,0],[3,5],[5,8]])
