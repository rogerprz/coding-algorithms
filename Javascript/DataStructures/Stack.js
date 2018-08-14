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
  push(){
    this.items.push(element)
  }

  pop(){
    (this.items.length === 0) ? "Underflow" : this.items.pop()
  }
  peek(){
    //returns top most element to view not delete
    return this.items[this.items.length-1]
  }

}
