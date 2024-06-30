const timer = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Start timer at ${time} ms`);
      resolve(time);
      console.log('Timer finished');
    }, time);
  });
};

const thirty = 30;

for (let i = 1; i < thirty; i++) {
  timer(3000 * i);
}
