// Implementing Queue data structure in javascript.
// A Queue works on the FIFO(First in First Out) principle. Hence, it performs two basic operations that is addition of elements at the end of the queue and removal of elements from the front of the queue. Like Stack, Queue is also a linear data structure.

// What we will be Implementing:
// Functions to be implemented
   // enqueue(item)
   // dequeue()
   // front()
   // isEmpty()
   // printQueue()

class Queue {
  constructor() {
    this.items = [];

  }
  enqueue(elem){
    this.items.push(elem);
  }
  dequeue(){
    if (this.isEmpty()){
      return 'Underflow';
    }
    return this.items.shift()
  }
  front(){
    if (this.isEmpty()){
      return "No elements in the Queue"
    }
    return this.items[0]
  }
  // Helper methods
  isEmpty(){
    return this.items.length == 0
  }
  printQueue(){
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " "
    }
    return str
  }
}
