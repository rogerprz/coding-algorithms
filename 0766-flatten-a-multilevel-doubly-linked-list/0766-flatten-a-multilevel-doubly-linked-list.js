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

    const prevHead = new Node (null, null, head ,null)
    flattenDfs(prevHead, head)

    prevHead.next.prev = null
    return prevHead.next
};
// prevHead
//     |
//     1---2---3---4---5---6--NULL
//             |
//             7---8---9---10--NULL
//                 |
//                 11--12--NULL
 const flattenDfs = (prev, currOrChild) => {
        if (!currOrChild){
             return prev // 1 
        }

        currOrChild.prev = prev
        prev.next = currOrChild

        const tempNext = currOrChild.next // 2
        const tail = flattenDfs(currOrChild, currOrChild.child) // [1 , null]
        currOrChild.child = null
        return flattenDfs(tail, tempNext)
    }