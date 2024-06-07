const url = 'https://api.github.com/users/akshaymarch7';
async function handlePromise() {
  try {
    const data = await fetch(url);

    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log('Error:', error);
  }
}

handlePromise();
