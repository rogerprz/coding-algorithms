function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  const result = head;

  let valueCarried = 0;
  while (l1 || l2) {
    let leftVal = 0;
    let rightVal = 0;

    if (l1) leftVal = l1.val;
    if (l2) rightVal = l2.val;

    const total = leftVal + rightVal + valueCarried;

    valueCarried = 0;
    if (total >= 10) {
      const str = total.toString();
      const singleDigit = parseInt(str.charAt(1), 10);
      valueCarried = parseInt(str.charAt(0), 10);

      head.next = new ListNode(singleDigit);
    } else {
      head.next = new ListNode(total);
    }
    head = head.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (valueCarried > 0) head.next = new ListNode(valueCarried);

  return result.next;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8
