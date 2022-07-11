/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// NEED TO REDO ANSWER
var removeNthFromEnd = function(head, n) {
   let slow = head 
   let fast = head 
   
   while(n--){
     fast = fast.next
    
   }
  
  while (fast && fast.next ){
    slow = slow.next
    fast = fast.next
  }
  
  if (!fast){
    head = head.next
  } else {
    slow.next = slow.next.next
  }
  return head
};