/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  
  let list = []
    return traverseTree(root, list)
  
  function traverseTree(root, list){
    let currentNode = root
    if (!currentNode) return list
    if (currentNode.left) traverseTree(currentNode.left, list)
    
    list.push(currentNode.val)
    
    if (currentNode.right) traverseTree(currentNode.right, list)
    
    return list
  }
};