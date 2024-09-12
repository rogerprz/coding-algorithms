const sayHello = (x) => console.log('My name is', this.name);

function debounce(func, wait) {
  let timeout = null;
  // console.log('TIME:', wait);

  return function (...args) {
    clearTimeout(timeout);
    // console.log('ARGS:', ...args);
    timeout = setTimeout(() => {
      console.log('In timeout');
      return func.apply(this, args);
    }, wait);
  };
}

const debouncedSayHello = debounce(sayHello, 2500);
debouncedSayHello('Hello');
debouncedSayHello('Second');
debouncedSayHello(3);
setTimeout(() => debouncedSayHello(4), 200);

const amy = {
  name: 'amy',
  speak: debounce(sayHello)
};

amy.speak();
