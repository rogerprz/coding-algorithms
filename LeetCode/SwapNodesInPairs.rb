# Given a linked list, swap every two adjacent nodes and return its head.
# You may not modify the values in the list's nodes, only nodes itself may be changed.

# Example:
# Given 1->2->3->4, you should return the list as 2->1->4->3.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def swap_pairs(head)
    return head if !head
    
  h = ListNode.new(0)
    h.next = head
    node = h
    while node.next != nil && node.next.next !=nil
        t1 = node
        node = node.next
        t1.next = node.next

        t2 = node.next.next
        node.next.next = node
        node.next = t2
        
    end
    h.next
end
