// Testing for promises
// const GITHUB_API = 'https://api.github.com/users/akshaymarch7';

// const user = fetch(GITHUB_API);
// console.log(user);
// user.then((response) => {
//   console.log('Response:', response);
//   return response.json();
// });

const cart = ['shoes', 'shirts', 'pants'];

createOrder(cart)
  .then((orderId) => {
    console.log('Order created:', orderId);
  })
  .catch((err) => {
    console.log('Error:', err.message);
  });

// PRoducer
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    // createOrder
    // validate card
    if (!validateCart(cart)) {
      const err = new Error('Card is invalid');
      reject(err);
    }
    const orderId = '1234';
    if (orderId) {
      setTimeout(() => {
        resolve({ orderId });
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}
