class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;

  }

}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

  }
  addToHead(value){
    const newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode
    }
    return this.head = newNode
  }
  addToTail(value){
    const newNode = new Node(value, null, this.tail);
    if (this.tail){
      this.tail.prev = newNode
    } else {
      this.tail = newNode
    }
    return this.tail = newNode
  }
  removeHead(){
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null
    else this.tail = null;
  }

}

const list = new LinkedList();
list.addToHead(100);
list.addToHead(200);
list.addToTail("Hi");

console.log(list);
