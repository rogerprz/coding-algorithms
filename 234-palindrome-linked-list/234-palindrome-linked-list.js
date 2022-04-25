/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const array = []
  
  if (head.next && !head.next.next){
    if (!head.next){
          return true
    } 
    if (head.val === head.next.val){
      return true
    } else {
      return false
    }
  }
  
  
  while (head){
    array.push(head.val)
    
    head = head.next
  }
  let left = 0
  let right = array.length-1
 
  for (let i = 0; i<= array.length/2; i++ ){
    if (array[left] !== array[right] ) {
        return false
    }
    left++
    right--
  }
  return true
};