const reverseWords = function (s) {
  const array = s.split(' ');
  const updateStr = array.map((word) => {
    const upWord = word.split('').reverse();
    return upWord.join('');
  });

  return updateStr.join(' ');
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
