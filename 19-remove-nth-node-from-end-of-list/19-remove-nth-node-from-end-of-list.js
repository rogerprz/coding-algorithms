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
var removeNthFromEnd = function(head, n) {
    let node = head, count = 0;
  let nodeCount = node
  
  while ( nodeCount) {
    nodeCount = nodeCount.next
    count++
  }
  let nodeIndex = count - n;
  
  if (!nodeIndex) return head.next
  
  while (nodeIndex > 0) {
    if (nodeIndex === 1) node.next = node.next.next
    
    node = node.next
    nodeIndex--
  }
  console.log('H:', head)
  return head
};