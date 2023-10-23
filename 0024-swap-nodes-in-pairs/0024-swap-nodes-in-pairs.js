/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  We define the function to implement as swap(head), where the input parameter head refers to the head of a linked list. The function should return the head of the new linked list that has any adjacent nodes swapped.

// Following the guidelines we lay out above, we can implement the function as follows:

// First, we swap the first two nodes in the list, i.e. head and head.next;
// Then, we call the function self as swap(head.next.next) to swap the rest of the list following the first two nodes.
// Finally, we attach the returned head of the sub-list in step (2) with the two nodes swapped in step (1) to form a new linked list.
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head
    }

    const firstNode = head 
    const secondNode = head.next

    firstNode.next = swapPairs(secondNode.next)
    secondNode.next = firstNode

    return secondNode
};