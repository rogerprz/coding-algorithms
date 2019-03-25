def search1(nums, target)
    left = 0
    right = nums.size-1
    mid = ((left + right)/2).floor
    
    while left <= right do 
        mid = ((left + right)/2).floor
        puts "MID: #{mid}, Nums[mid]: #{nums[mid]} T: #{target}"
        if left == right && nums[mid] == target
            return mid
        else 
            return mid = -1
        end 

        return mid if nums[mid-1]>nums[mid]
        if nums[mid-1] < nums[mid] && mid > nums[mid]
            right = mid-1
        else 
            left = mid+1
        end 
        
    end
    mid
end

def search2(nums, target)
    l = 0
    r = nums.size-1
    m = ((l + r)/2).floor
    
    while l <= r do 
        m = ((l + r)/2).floor
        return -1 if l == r && nums[m] != target
        return m if nums[m] == target
        if nums[m] > target && m < nums[m]
            l = m + 1
        else 
            r = m - 1
        end 
    end
    m
end