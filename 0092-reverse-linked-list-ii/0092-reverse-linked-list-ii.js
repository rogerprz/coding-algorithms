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
     if (!head || left === right) return head;
    const dummy = new ListNode(0, head);
    let prev = dummy;
    
    for (let i = 0; i < left - 1; ++i) {
        prev = prev.next;
    }
    
    let current = prev.next;
    
    for (let i = 0; i < right - left; ++i) {
        const nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }
    
    return dummy.next;
};

 const reverseList = (head, count)=>{
        let node = head 
        let prev = null 

        while (count > 0) {
            if (!node.next) return [prev, node]
            const next = node.next 

            node.next = prev
            prev = node
            node = next
            count--
        }
        return [prev, node]
    }