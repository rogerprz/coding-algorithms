/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return head 

    const pseudoNode = new Node(null,null, head,null)
    let prev = pseudoNode

    const stack = [head]
    
    while (stack.length) {
        let node = stack.pop()

        prev.next = node 
        node.prev = prev

        if (node.next) {
            stack.push(node.next)
        }
        if (node.child) {
            stack.push(node.child)
            node.child = null
        }
        prev = node
    }

    pseudoNode.next.prev = null 

    return pseudoNode.next
};