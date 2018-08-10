# palindrome?("noon")
# palindrome?("five")
# palindrome?("radar")
# palindrome?("learnlovecode")
require "pry"


def palindrome?(string)
  altered = string.downcase.gsub(/[!?. ]/, "")
  altered == altered.reverse ? true : false

end


palindrome?("?Race car! ")

puts "hello"
