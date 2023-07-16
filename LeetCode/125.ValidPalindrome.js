const isPalindrome = function (s) {
  const cleanS = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const strLen = cleanS.length;
  if (strLen <= 1) return true;

  for (let i = 0; i < strLen; i++) {
    const leftP = cleanS[i];
    const rightP = cleanS[strLen - 1 - i];
    if (leftP !== rightP) return false;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
