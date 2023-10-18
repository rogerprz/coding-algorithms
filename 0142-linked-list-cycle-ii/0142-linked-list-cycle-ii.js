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
    let list = head
    const set = new Set()
    while (list) {
        if (set.has(list)){
            return list
        }
        set.add(list)
        list = list.next
    }

    return list
};