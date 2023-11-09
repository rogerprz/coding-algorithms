/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let slow = head 
    let fast = head 

    for (let i = 1;i < k; i++) {
        fast = fast.next 
    }

    let current = fast 

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    let leftValTemp = current.val 
    current.val = slow.val // 2 -> 4
    slow.val = leftValTemp


    console.log("S:", slow, fast, current, head)

    return head
};