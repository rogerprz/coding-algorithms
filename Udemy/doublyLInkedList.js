class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    // this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(node) {
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;

    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      this.append(newNode);
    }

    let leaderNode = this.traverseToIndex(index - 1);

    let follower = leaderNode.next;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    newNode.next = follower;
    follower.prev = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    let leaderNode = this.traverseToIndex(index - 1);
    let removedNode = leaderNode.next;
    leaderNode.next = removedNode.next;
    leaderNode.next.prev = leaderNode;

    return this;
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

  printList() {
    const array = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);

      currentNode = currentNode.next;
    }
    console.log('A:', array);
    return array;
  }
}

const node = new Node('first');

const myLinkedList = new DoublyLinkedList(node);

myLinkedList.append('second');
myLinkedList.append('third');
myLinkedList.append('fourth');
myLinkedList.printList();
myLinkedList.reverse();
// myLinkedList.insert(1, 'inserted');

// myLinkedList.printList();

// myLinkedList.remove(1);
// myLinkedList.printList();

console.log(myLinkedList);
