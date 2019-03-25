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