class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
// f -> e -> d -> c -> b -> a
// We want to reverse the list
// save head to current
// then we need a prev or start of new head

// we can do a while loop checking that we have a current and next available
//
function reverseList(head) {
  let current = head;
  let prev = null;

  while (current) {
    // we assign the current's next node to a next variable
    // then we re-assign the next pointer of current node to the prev
    const nextNode = current.next;

    current.next = prev;
    // we assign prev to the current
    prev = current;
    current = nextNode;
  }
  return prev;
}

const reverseListRecursive = (head, prev = null) => {
  // a -> b -> c -> d -> e -> f -> null
  if (head === null) {
    return prev;
  }
  const subNodes = head.next;
  head.next = prev;

  return reverseListRecursive(subNodes, head);
};
console.log(reverseListRecursive(a)); // f -> e -> d -> c -> b -> a
console.log(reverseList(a)); // f -> e -> d -> c -> b -> a
