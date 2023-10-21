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
    // dummyHead
    //     |
    //     1---2---3---4---5---6--NULL
    //             |
    //             7---8---9---10--NULL
    //                 |
    //                 11--12--NULL
    if (!head) return head

    const dummyHead = new Node (null, null, head ,null)
    let prev = dummyHead

    let stack = [];
    stack.push(head)

    while (!!stack.length) {
        let current = stack.pop();

        prev.next = current
        current.prev = prev

        if (current.next) {
            stack.push(current.next)
        }
        if (current.child) {
            stack.push(current.child)
            // don't forget to remove all child pointers.
            current.child = null
        }

        prev = current

    }

    dummyHead.next.prev = null 

    return dummyHead.next
};
