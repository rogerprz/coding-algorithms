# https://leetcode.com/problems/group-anagrams/

def group_anagrams(strs)
    obj = {}
    strs.each do |word|
        w_sorted = word.split("").sort.join("")
       (!obj.include?(w_sorted)) ? obj[w_sorted] = [word] : obj[w_sorted].unshift(word)
    end
    obj.values.reverse
end
