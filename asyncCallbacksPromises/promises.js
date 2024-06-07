const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!!');
  }, 20000);
});
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!!');
  }, 40000);
});
// async function getData() {
//   return promise;
// }

// const dataPromise = getData();
// console.log(dataPromise); // Promise { 'New data' }
// dataPromise.then((res) => console.log(res)); // New data
// async and await are used to handle promises in a more elegant way.

async function handlePromise() {
  console.log('First log');
  const val = await promise;
  console.log('First Promise');
  console.log(val);
  const val2 = await prom2;
  console.log('Javascript 2');
  console.log(val2);
}
handlePromise(); // New val

/*
 * OLD WAY
 */

// function getNormalData() {
//   promise.then((res) => {
//     console.log(res);
//   });
//   console.log('Normal log');
// }
// getNormalData(); // New val
