

def majority_element(nums)
    obj = {}
    nums.each { |num| !obj.include?(num) ? obj[num] = 1 : obj[num]+=1 }
    result = obj.to_a.sort_by { |key, value| value}
    result[result.size-1][0]
end
