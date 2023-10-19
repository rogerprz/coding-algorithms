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
var reverseList = function(head) {
    let list = head 
    let prev = null

    while (list ) {
        const tempNode = list.next // 2
        list.next = prev
        prev = list
        list = tempNode

    }
    return prev
};