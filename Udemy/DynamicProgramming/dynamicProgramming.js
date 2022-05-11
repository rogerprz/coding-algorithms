function addTo80(n) {
  return n + 80;
}

function memoizeAddTo80(n) {
  let cache = {};

  return function (n) {
    if (n in cache) {
      // cache.n
      return cache[n];
    } else {
      cache[n] = n + 80;
      console.log('long time', cache[n]);

      return cache[n];
    }
  };
}
const memoized = memoizeAddTo80();

console.log('1', memoized(5));
console.log('2', memoized(5));
console.log('3', memoized(5));
