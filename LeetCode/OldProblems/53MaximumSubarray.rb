# Given an integer array nums, find the contiguous subarray (containing at least one number) 
# which has the largest sum and return its sum.

# Example:

# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:

# If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, 
 #which is more subtle.

def max_sub_array(nums)
    return 0 if nums.nil?
    i = 0 
    max = nums[i]
    res = max
    while nums[i+1]
        if max + nums[i+1]> nums[i+1]
            max+=nums[i+1]
        else
            max = nums[i+1]
        end
        if max > res
            res = max 
        end
        i+=1
    end
    res
end
