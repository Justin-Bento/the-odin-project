# Author: Justin Bento
# Start Date 2024-03-1
# Objective: create the cipher shift encryption and shift your message around.
# Purpose: help solidify your knowledge and get warmed up to working on small projects.

# Pseudo Code:
# -----------------------------------------------------------------------------------------
# Take a message from someone and change each letter to be a certain number of steps down the alphabet.
# When you get the message back, you shift each letter back by the same number of steps.
# For instance, if you shift each letter by 3, 'D' would turn into 'A', 'E' would become 'B', and so on."

def caesar_cipher(shift)
  # Define the alphabet
  lowercase_alphabet = ("a".."z").to_a
  uppercase_alphabet = ("A".."Z").to_a

  # Rotate the alphabets
  rotated_lowercase_alphabet = lowercase_alphabet.rotate(shift)
  rotated_uppercase_alphabet = uppercase_alphabet.rotate(shift)

  # Combine rotated alphabets into a single string
  rotated_alphabet = rotated_lowercase_alphabet.join + rotated_uppercase_alphabet.join

  return rotated_alphabet
end

puts caesar_cipher(2)
