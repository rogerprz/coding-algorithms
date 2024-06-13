function fetchAllCalls() {
  return Promise.all([fetch('https://jsonplaceholder.typicode.com/posts'), fetch('https://json')]);
}
