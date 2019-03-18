// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/
//   Binary Tree Preorder Traversal

var preorderTraversal1 = function(root, nodes=[]) {
    if(!root) return nodes
    
    nodes.push(root.val)
    root.left && preorderTraversal(root.left, nodes)
    root.right && preorderTraversal(root.right, nodes)
    
    return nodes
};

var preorderTraversal2 = function(root) {
    if (!root) return [];
    var result = [];
    var stack = [root];
    
    while(stack.length) {
      var node = stack.pop();
      result.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  };