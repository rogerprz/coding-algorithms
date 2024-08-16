function sayHello(x) {
  console.log(x);
}

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const debouncedSayHello = debounce(sayHello, 100);
debouncedSayHello(1);
debouncedSayHello(2);
debouncedSayHello(3);
setTimeout(() => debouncedSayHello(4), 200);
