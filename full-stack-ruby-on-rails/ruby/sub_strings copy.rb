# Author: Justin Bento
# Start Date: 2024-03-18
# End Date: 2024-04-05
# Assignment:
# -[x] Implement a method #substrings that takes a word as the first argument and have a diconary as a second argument.
# -[x]  The first argument should be an array of valid substrings which is your dictionary.
# -[x]  The 2nd argument returns a hash listing each substring that was found in the original string.
# -[x]  Figure out how many times each substring was found the original string .
# -[]  Lastly, make sure your method can handle multiple words:.
# -[]  Please note the order of your keys might be different.


def substrings(word, dictionary)
  result = []
  word.downcase!
  dictionary.each do |index|
    if word.include?(index)
      result << index
    end
  end
  result
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

puts substrings("below", dictionary)
