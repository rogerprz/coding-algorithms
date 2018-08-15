class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value){
   this.root === null ? this.root = new Node(value) : this.root.insert(value)
  }
  treeSearch(value, node = this.root){
    if (node === null){
      return null
    }
    if (value < node.key){
      return treeSearch(value, node.left)
    } else if (value > node.key) {
      return treeSearch( value, node.righ)
    } else {
      return node
    }
  }
}

class Node {
  constructor(key = null) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  insert(newValue){
    if (newValue <= this.key) {
      (this.left === null) ? this.left = new Node(newValue) : this.left.insert(newValue)
    } else if (newValue > this.key) {
      (this.right === null) ? this.right = new Node(newValue) : this.right.insert(newValue)
    }
  }
}
start = new BinarySearchTree()
start.insert(25)
start.insert(33)
start.insert(44)
start.insert(10)
console.log(start);
