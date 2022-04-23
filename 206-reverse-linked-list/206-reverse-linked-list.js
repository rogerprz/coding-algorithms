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
  if(!head){
    return head
  }
  
  let first = head 
  let second = first.next 
  
  while (second){
    let thirdTemp = second.next
    
    second.next = first 
    first = second 
    second = thirdTemp
  }
  
  head.next = null
  head = first
  
  return first
};