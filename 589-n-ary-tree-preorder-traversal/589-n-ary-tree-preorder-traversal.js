/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  return traverseTree(root, [])
  
  function traverseTree(node, list) {
    if (!node) return list
    
    list.push(node.val)

    for (child of node.children) {
      traverseTree(child, list)
    }
    
    return list
  }
};
