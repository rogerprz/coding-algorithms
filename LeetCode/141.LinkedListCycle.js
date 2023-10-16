// Last Solved Date: 2021/10/15
// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

const node = new ListNode(3);
node.next = new ListNode(2);
node.next.next = new ListNode(0);
node.next.next.next = new ListNode(-4);

console.log(hasCycle(node));
