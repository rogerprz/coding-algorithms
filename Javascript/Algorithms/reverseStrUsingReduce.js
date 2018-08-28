function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '')
}

// reverse("word")
