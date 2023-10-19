/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return head
    const set = new Set()
    let list = head 
    while (list) {

       if (set.has(list)) return list
       else {
           set.add(list)
           list = list.next
       }
    }

    return null
};