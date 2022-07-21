/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  //   NOT MY SOLUTION
  if (!head || !head.next || !head.next.next) return head;
  
  // Step 1: use a fase and slow pointer to move to the middle of the linked list
  // in case list is even, then move to the middle left node 
  let fast = head.next, slow = head;

  while (fast && fast.next) {
    fast = fast.next.next; 
    slow = slow.next;
    // console.log('WHILE:', 'F', fast, 'S:', slow)
  }
  // Get the second half of the list
  let secondHalf = slow.next;

  // break the list 
  slow.next = null
  
  // Step 2: reverse the second half 
  let curr = secondHalf, prev = null, tmp;
  
  while (curr) {
    tmp = curr.next;
    curr.next = prev;
    prev = curr
    curr = tmp
  }
  // Step 3: interweave the first half with the second half 
  let first = head, second = prev;
  
  while (second){
    tmp = first.next 
    first.next = second 
    second = second.next 
    first.next.next = tmp
    first = tmp  
  }
};