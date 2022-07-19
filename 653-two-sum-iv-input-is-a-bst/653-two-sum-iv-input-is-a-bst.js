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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let hash = {}
  let stack = []
  stack.push(root)
  
  while( stack.length ) {
    let node = stack.pop()
    
    let secondValue = k - node.val
    
    if (secondValue in hash) {
      return true
    } else {
      hash[node.val] = 1
    }
    
    if (node.right)  stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return false
};