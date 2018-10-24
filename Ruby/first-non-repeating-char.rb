# my solution
def  first_non_repeating_letter(s)
  ogArr = s.split("")
  arr = ogArr.map(&:downcase)
  first = ""
  arr.each_with_index do |elem, index|
    if arr.count(elem) === 1
      first = index
      break
    end
  end
   first === "" ? first : ogArr[first]
end

# def  first_non_repeating_letter(s)
#   s.chars.find {|i| s.downcase.count(i)==1 || s.upcase.count(i)==1} || ""
# end
# alt
# def  first_non_repeating_letter(s)
#   s.chars.find { |c| s.downcase.count(c.downcase) == 1 } || ""
# end
