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
var postorderTraversal = function(root) {
    
  return traverseTree(root, [])
  
  function traverseTree(node, list){
    if (!node) return list
    
    if(node.left) traverseTree(node.left, list)
    if (node.right) traverseTree(node.right, list)
    
    list.push(node.val)
    
    return list
  }
};