// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {}
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('List:', array);
    return array;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      return this.append(newNode);
    }
    const leader = this.traverseToIndex(index - 1);
    const afterPointer = leader.next;

    leader.next = newNode;
    newNode.next = afterPointer;
    this.length++;

    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const removedNode = leader.next;
    leader.next = removedNode.next;

    this.length--;

    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;

    let second = first.next;

    while (second) {
      const thirdTemp = second.next;

      second.next = first;
      first = second;

      second = thirdTemp;
    }
    this.head.next = null;
    this.head = first;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const node = new Node('first');

const myLinkedList = new LinkedList(node);

myLinkedList.append('second');
myLinkedList.append('third');
myLinkedList.append('fourth');
myLinkedList.printList();
myLinkedList.reverse();
// myLinkedList.prepend(1);

myLinkedList.printList();
console.log('HERE-------');
myLinkedList.remove(2);

console.log(myLinkedList);
