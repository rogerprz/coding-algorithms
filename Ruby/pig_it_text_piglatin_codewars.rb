def pig_it text
  newArr = []
  text.split(" ").each do |word|
    newWord = word[1...word.size] + word[0] + "ay"
    if word.size > 1
      newArr << newWord
    elsif word =~ /[a-zA-Z]/
      newArr << newWord
    else
      newArr << word
    end
  end
  newArr.join(" ")
end


def alt_pig_it text
  text.gsub(/(\w)(\w+)*/, '\2\1ay')
end

#   text.split.map{|word| word =~ /\w/ ? "#{word[1..-1]}#{word[0]}ay" : word}.join(" ")
