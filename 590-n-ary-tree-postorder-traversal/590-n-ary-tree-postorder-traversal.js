/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  return traverseTree(root, [])
  
  function traverseTree(node, list){
    if (!node) return list

   for(child of node.children) {
            traverseTree(child, list);
        }
        list.push(node.val);
    
    return list
  }
};