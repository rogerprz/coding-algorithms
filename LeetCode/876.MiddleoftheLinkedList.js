// Last Solved Date: 2021/10/15
// https://leetcode.com/problems/middle-of-the-linked-list/
// Difficulty: Easy

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleNode = function (head) {
  let list = head;
  let testList = head;
  let count = 0;

  while (testList) {
    testList = testList.next;
    count++;
  }
  count = Math.floor(count / 2);
  while (count) {
    list = list.next;
    count--;
  }

  return list;
};

// Sample Test case:
//   Input:
//     [1,2,3,4,5]
//   Output:
//     [3,4,5]
//
const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

console.log(middleNode(node));
