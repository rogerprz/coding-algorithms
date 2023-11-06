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
var swapPairs = function(head) {
    if (!head) return head 
    // head = [1,2,3,4]
    // Output: [2,1,4,3]
    let dummyNode = new ListNode(0, head) // [0, 1,2,3,4]
    let prev = dummyNode // [0, 1,2,3,4]

    while (prev.next && prev.next.next) {
        let nextNode = prev.next  // [1, 2,3,4]
        let swapNode = prev.next.next // 2 [2,3,4]

        prev.next = swapNode  // [0, 1,2,3,4] -> [0,2,3,4]
        nextNode.next = swapNode.next // [1, 2,3,4] -> [1, 3,4]
        swapNode.next = nextNode     //  [2,3,4] -> [2, 3,4]

        prev = prev.next.next

    }
    return dummyNode.next
};