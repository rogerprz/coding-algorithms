function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let result = head;

  let valueCarried = 0;
  while (l1 || l2) {
    let leftVal = 0;
    let rightVal = 0;

    if (l1) leftVal = l1.val;
    if (l2) rightVal = l2.val;

    let total = leftVal + rightVal + valueCarried;

    valueCarried = 0;
    if (total >= 10) {
      const str = total.toString();
      const singleDigit = parseInt(str.charAt(1));
      valueCarried = parseInt(str.charAt(0));

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
