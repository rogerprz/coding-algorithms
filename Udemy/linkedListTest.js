class Node {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
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
    return this;
  }

  printList() {
    const array = [];

    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.head.value);
      currentNode = currentNode.next;
    }
    console.log('L:', array);
    return array;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      this.append(newNode);
    }
    let pointLeader = this.head;
    let counter = 0;
    while (counter !== index) {
      pointLeader = this.head.next;
    }
  }
}

const node = new Node(2);

const myLinkedList = new LinkedList(node);

myLinkedList.append(5);
myLinkedList.append(7);
console.log(myLinkedList);
myLinkedList.prepend(11);
myLinkedList.printList();

console.log(myLinkedList);
