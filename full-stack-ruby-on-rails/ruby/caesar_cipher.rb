# Author: Justin Bento
# Start Date 2024-03-1 - 2024-03-18
# Objective: create the cipher shift encryption and shift your message around.
# Purpose: help solidify your knowledge and get warmed up to working on small projects.

# Pseudo Code:
# -----------------------------------------------------------------------------------------
# Take a message from someone and change each letter to be a certain number of steps down the alphabet.
# When you get the message back, you shift each letter back by the same number of steps.
# For instance, if you shift each letter by 3, 'D' would turn into 'A', 'E' would become 'B', and so on."

# Method to clear the console screen
def clear_screen
  system "clear" or system "cls"
end

def caesar_cipher(message, shift)
  ciphered_message = ""

  message.each_char do |char|
    if char.match(/[a-zA-Z]/)
      base = char.match(/[a-z]/) ? 'a' : 'A'
      shifted_char = ((char.ord - base.ord + shift) % 26 + base.ord).chr
      ciphered_message << shifted_char
    else
      ciphered_message << char
    end
  end

  return ciphered_message
end

puts "What's your message?"
secret_msg = gets.chomp

# Clear the screen after submitting the message
clear_screen

puts "Enter the shift value:"
shift = gets.chomp.to_i

encrypted_msg = caesar_cipher(secret_msg, shift)
puts "Encrypted message: #{encrypted_msg}"
