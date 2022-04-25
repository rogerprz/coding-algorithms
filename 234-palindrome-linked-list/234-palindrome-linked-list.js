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
  
  if (!head.next ){
    return true
  }
  
  while (head){
    array.push(head.val)
    
    head = head.next
  }
  if (array.length < 2){
    return true
  }
  if (array.length === 2){
    if (array[0] === array[1]){
      return true
    }
    else {
      return false
    }
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