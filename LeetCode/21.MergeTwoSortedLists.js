/* eslint-disable no-param-reassign */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (l1, l2) {
  const list = new ListNode();
  let tail = list;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) tail.next = l1;
  else if (l2) tail.next = l2;

  return list.next;
};
const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));

const mergeTwoListsOptionTwo = function (l1, l2) {
  let list = new ListNode();
  const head = list;

  while (l1 || l2) {
    if (!l1 && l2) {
      list.next = l2;
      break;
    } else if (l1 && !l2) {
      list.next = l1;
      break;
    } else if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    list = list.next;
  }

  return head.next;
};

console.log(mergeTwoListsOptionTwo(list1, list2));
