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
    // NOT MY SOLUTION
    if (!head) return head

    const pseudoHead = new Node (null, null, head ,null)


    const flattenDfs = (prev, current) => {
        if (!current) return prev

        current.prev = prev
        prev.next = current

        const tempNext = current.next
        const tail = flattenDfs(current, current.child)
        current.child = null
        return flattenDfs(tail, tempNext)
    }
    flattenDfs(pseudoHead, head)

    pseudoHead.next.prev = null
    return pseudoHead.next
};