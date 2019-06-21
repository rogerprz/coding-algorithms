# Write a program that outputs the string representation of numbers from 1 to n.

# But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. 
#For numbers which are multiples of both three and five output “FizzBuzz”.

def fizz_buzz(n)
    count = 1
    result = []
    n.times do
        if (count % 3  == 0 && count % 5 == 0)
            result << "FizzBuzz"
        elsif count % 3  == 0
            result << "Fizz"
        elsif count % 5 == 0
            result << "Buzz"
        else 
            result << count.to_s
        end
        count+=1
    end 
    result
end
