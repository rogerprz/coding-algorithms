const isSubsequence = function (s, t) {
  // Not my solution
  let left = 0;
  let right = 0;

  // Not my solution
  // Not my solution

  // Create a loop that checkes both lengths are greter than their pointers
  while (left < s.length && right < t.length) {
    const leftNum = s[left];
    const rightNum = t[right];
    // if lefNum === rightNum increase leftIndex
    if (leftNum === rightNum) {
      left++;
    }
    right++;
  }

  return left === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
