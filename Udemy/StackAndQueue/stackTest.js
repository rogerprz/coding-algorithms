class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackArray {
  constructor() {
    this.array = [];
  }

  peek() {
    const topElem = this.array[this.array.length - 1];
    console.log('PeekArray:', topElem);
    return topElem;
  }

  push(value) {
    this.array.push(value);

    console.log(this.array);
    return this;
  }

  pop() {
    const poppedElem = this.array.pop();

    console.log('PE:', poppedElem);
    return poppedElem;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log('PEEK:', this.top.value);
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const previousTop = this.top;
      this.top = newNode;
      this.top.next = previousTop;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const poppedTop = this.top;
    this.top = this.top.next;
    this.length--;

    return poppedTop;
  }
}

// const newStackList = new StackLinkedList();

// newStackList.push(2);
// newStackList.push(12);
// newStackList.push(23);
// newStackList.peek();
// console.log(newStackList);
// newStackList.pop();

// console.log(newStackList);
const newStackArray = new StackArray();

newStackArray.push(2);
newStackArray.push(12);
newStackArray.push(23);
newStackArray.peek();
console.log(newStackArray);
newStackArray.pop();

console.log(newStackArray);
