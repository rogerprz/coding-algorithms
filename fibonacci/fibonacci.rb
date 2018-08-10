require 'pry-byebug'
# Pry is included in case you'd like to run this file and test it,
# but you may remove it if you like.

puts "enter value"
n = gets.chomp.to_i



def fibonacci(n)
  first = 1
  sec = 1
  count = 0

  n.times do |n|
    first = first + n
    sec = first + 1
  end
  final = first+sec

def fib_1(n)
  fibo = [0,1,1]
  return fib[n] if n < 3
  for num in (3..n)
    fib[num] = fib[num-1] + fib[num - 2]
  end
  return fib[n]
  #code
end

#dynamic programming solution
# def fib(n)
#   arr = [0,1]
#   for i in 2..n
#
#   #code
# end


# recursion
# def fib_rec(n)
#   puts "n: #{n}"
#   puts "n-1: #{fib_rec(n-1)}"
#   puts "n-2: #{fib_rec(n-1)}"
#
#   n <=1 ? n : (fib_rec(n - 1) + fib_rec(n - 2))
#
# end




  # if n == 1
  #   puts 1
  # elsif n == 2
  #   puts 1
  # else
  #   puts (n-1) + (n-2)
  # end
  # your code here :)
end
puts fibonacci(n).to_s + "Final"
# Pry.start
#Iterative Solution
# def fib(n)
#   fibo = [0, 1, 1]
#   return fib[n] if n < 3
#   for num in (3..n)
#     fib[num] = fib[num-1] + fib[num-2]
#     puts "fib[#{num}] is #{fib[num]}"
#   end
#   return fib[n]
# end
#
# # Dynamic Programming Solution (Refactor of iterative solution)
# def fib(n)
#   arr = [0, 1]
#   for i in 2..n do
#     arr << (arr[i - 2] + arr[i - 1])
#   end
#   return arr[n]
# end
#
# # Recursive Solution
# def fib(n)
#      n <= 1 ? n : (fib(n - 1) + fib(n - 2))
# end
#
# # Recursion w/ Memoization
# def fib(n)
#   return 0 if n == 0
#   return 1 if n <= 1
#   @fibo ||= {}
#   return @fibo[n] if @fibo[n]
#   @fibo[n] = fib(n - 1) + fib(n - 2)
# end
