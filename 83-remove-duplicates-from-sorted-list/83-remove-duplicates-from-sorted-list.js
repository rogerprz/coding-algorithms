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
var deleteDuplicates = function(head) {
    let current = head
    
    while (current){
      if (current.next !== null && current.val === current.next.val){
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
  
  return head
};

//     console.log('H:', head)
  
//   return nonDuplicates(head)
  
//   function nonDuplicates(head){
//     console.log('HEAD:', head)
//      if(!head || head.next === null) return head
    
//     let currentNode = head.val
//     let nextNode = head.next
//     console.log('Curr:', currentNode)
//     console.log('next:', nextNode)
    
//     if (nextNode !== null && currentNode === nextNode.val){
//       head.next = head.next.next
//     } else {
//       head = head.next
//     }
//     nonDuplicates(head)2
    
//     return head