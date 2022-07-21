/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return dfs(p,q)
  
  function dfs(firstNode, secNode) {
    if (!firstNode && !secNode) return true 
    
    if (!firstNode || !secNode || firstNode.val !== secNode.val) return false
   
    return dfs(firstNode.left, secNode.left) && dfs(firstNode.right, secNode.right)
  }
};
