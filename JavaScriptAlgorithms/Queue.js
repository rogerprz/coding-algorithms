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

// creating object for queue class
var queue = new Queue();


// Testing dequeue and pop on an empty queue
// returns Underflow
console.log("What is dequeue",queue.dequeue());

// returns true
console.log(queue.isEmpty());

// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

// returns 10
console.log(queue.front());

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(queue.dequeue());

// returns 20
console.log(queue.front());

// removes 20
// queue contains [30, 40, 50, 60]
console.log(queue.dequeue());

// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(queue.printQueue());
