function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const deleteDuplicates = function (head) {
  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  let list = dummyNode;

  while (list.next && list.next.next) {
    // [1,2,3,3,4,4,5]
    if (list.next.val === list.next.next.val) {
      while (list.next && list.next.next && list.next.val === list.next.next.val) {
        list.next = list.next.next;
      }
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }
  return dummyNode.next;
};

console.log(deleteDuplicates([1, 2, 3, 3, 4, 4, 5]));
