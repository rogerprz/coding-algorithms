/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head 

    const dummyNode = new ListNode(0,head)
    let prev = dummyNode

    while (left-1 > 0) {
        prev = prev.next
        --left
        --right
    }

    let current = prev.next 
    
    for (let i = 0; i < right-1; ++i) {
        const nextNode = current.next
        current.next = nextNode.next
        nextNode.next = prev.next
        prev.next = nextNode 
    }

    return dummyNode.next
};