class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value){
   this.root === null ? this.root = Node.new(value) : this.root.insert(value)
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
    
  }
}
