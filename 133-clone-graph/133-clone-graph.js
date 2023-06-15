/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if(!node) return 

  let map = new Map()
  let newGraph = new Node()
  
  const queue = [node]
  
  map.set(node, new Node(node.val));
  
  while (queue.length) {
    const currentNode = queue.shift();
    
    for (let neighbor of currentNode.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val))
        queue.push(neighbor);
      }
      map.get(currentNode).neighbors.push(map.get(neighbor));
    }
  }
  return map.get(node);
};