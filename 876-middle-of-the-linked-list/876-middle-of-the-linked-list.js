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
var middleNode = function(head) {
    let fast = slow = head 
//     We want to set a fast and slow pointer
//     Fast moves twice as fast 
//     
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    } 
  
  return slow
};