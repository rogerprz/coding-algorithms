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
var swapPairs = function(head) {
    // head = [1,2,3,4]
    // res =  [2,1,4,3]
    const dummyNode = new ListNode(0, head)
    let prev = dummyNode

    while (prev.next && prev.next.next) {
        let firstNode = prev.next 
        let secondNode = prev.next.next

        firstNode.next = secondNode.next
        prev.next = secondNode
        secondNode.next = firstNode

        prev = prev.next.next
    }
    
    return dummyNode.next
};