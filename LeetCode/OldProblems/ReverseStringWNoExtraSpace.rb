# Write a function that reverses a string. The input string is given as an array of characters char[].
# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
# You may assume all the characters consist of printable ascii characters.

def reverse_string(s)
    return [] if s.size == 0
    left = 0
    right = s.length - 1
    while left < right
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left+=1
        right-=1
    end
    s
end
