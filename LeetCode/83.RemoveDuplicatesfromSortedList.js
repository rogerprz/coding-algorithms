class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const deleteDuplicates = function (head) {
  let list = head;
  while (list && list.next) {
    if (list.val === list.next?.val) {
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }

  return head;
};

// Sample Test case:
const node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(2);
node.next.next.next = new ListNode(3);

console.log(deleteDuplicates(node));
