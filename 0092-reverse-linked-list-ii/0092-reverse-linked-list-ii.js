/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // if head is null return it
    // if left === right we are done, return
    if (!head || left === right) return head

    // We create a dummyNode as a previous node to get a better idea of when our reverse list starts
    const dummy = new ListNode(0, head)
    // We set it a prev since we will be keeping dummy as the main list and 
    // prev as the list that points to the changes
    let prev = dummy 

    // We want to move the left value n (left) nodes 
    // so we reach the lcoation where we start to reverse list
    // We use 1 as the number we are trying to reach since we offset our dummy/prev
    while (left > 1) {
        prev = prev.next
        left--
        right--
    }
    console.log("PREV:", prev)
    // As in other reverse node lists, we need to have a current
    // but we keep prev where it's at since current will need to point to prev.
    // prev = [1,2,3,4,5]
    let current = prev.next // [2,3,4,5]

    // we have to offset right by -1 as well
    for (let i = 0; i < right - 1; i++){
        // we save our temp nextNode
        const nextNode = current.next // [3,4,5]
        // We assign our current.next to our saved temp nextNode.next
        current.next = nextNode.next // In current [2 -> 4, 5] in nextNode
        nextNode.next = prev.next   // [3 -> [2,4,5]] 
        prev.next = nextNode        // [1, -> [3,2,4,5]]
    }
    
    return dummy.next
};