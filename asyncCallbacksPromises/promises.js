const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!!');
  }, 8000);
});
// async function getData() {
//   return promise;
// }

// const dataPromise = getData();
// console.log(dataPromise); // Promise { 'New data' }
// dataPromise.then((res) => console.log(res)); // New data
// async and await are used to handle promises in a more elegant way.

// async function handlePromise() {
//   const data = await promise;
//   console.log(data);
// }
// handlePromise(); // New data
function getNormalData() {
  promise.then((res) => {
    console.log(res);
  });
  console.log('Normal log');
}
getNormalData(); // New data
