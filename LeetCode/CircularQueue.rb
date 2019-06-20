class MyCircularQueue

=begin
    Initialize your data structure here. Set the size of the queue to be k.
    :type k: Integer
=end
    attr_accessor :size
    def initialize(k)
        @queue = Array.new(k)
        @head = @tail = -1
        @size = k
    end


=begin
    Insert an element into the circular queue. Return true if the operation is successful.
    :type value: Integer
    :rtype: Boolean
=end
    def en_queue(value)
       # condition if queue is full 
        if is_full()
           return false
        end
        if is_empty() 
            @head = 0
        end
        @tail = (@tail + 1) % @size
        @queue[@tail] = value
        return true
    end


=begin
    Delete an element from the circular queue. Return true if the operation is successful.
    :rtype: Boolean
=end
    def de_queue()
       if is_empty()
            return false
       end
        if @head == @tail
            @head = -1
            @tail = -1
            return true
        end
        
        @head = (@head + 1) % @size
        return true
    end


=begin
    Get the front item from the queue.
    :rtype: Integer
=end
    def front()
        if is_empty()
            return -1;
        end 
        return @queue[@head]
    end


=begin
    Get the last item from the queue.
    :rtype: Integer
=end
    def rear()
       if is_empty() 
            return -1
        end 
        return @queue[@tail]   
    end


=begin
    Checks whether the circular queue is empty or not.
    :rtype: Boolean
=end
    def is_empty()
        return @head == -1
    end


=begin
    Checks whether the circular queue is full or not.
    :rtype: Boolean
=end
    def is_full()
        return ((@tail + 1) % @size) == @head;
    end


end

# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue.new(k)
# param_1 = obj.en_queue(value)
# param_2 = obj.de_queue()
# param_3 = obj.front()
# param_4 = obj.rear()
# param_5 = obj.is_empty()
# param_6 = obj.is_full()
