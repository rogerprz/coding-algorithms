// Functions to be implemented
   // push(item)
   // pop()
   // peek()
   // isEmpty()
   // printStack()

class Stack {
  constructor() {
    this.items =[];
  }
  push(element){
    this.items.push(element)
  }

  pop(){
    if (this.items.length === 0) {
      return "Underflow"
    }
    return this.items.pop()
  }
  peek(){
    //returns top most element to view not delete
    return this.items[this.items.length-1]
  }
  // Helper methods
  isEmpty(){
    //true if stack is empty
    return this.items.length === 0;
  }
  printStack(){
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';

    }
    return str
  }

}//end of class


//TESTING THE STACK CLASS
// creating object for stack class
var stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());
// Some more functions of stack class
// Example :

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());

// returns 30
console.log(stack.peek());

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());
