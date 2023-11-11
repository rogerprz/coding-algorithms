/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const result = new ListNode(0)
    let list = result
    while (l1 && l2) {
        if (l1.val > l2.val) {
            list.next = l2
            list = list.next
            l2 = l2.next
        } else {
            list.next = l1
            list = list.next
            l1 = l1.next
        }
    }
    if (l1) list.next = l1
    if (l2) list.next = l2

    return result.next
};