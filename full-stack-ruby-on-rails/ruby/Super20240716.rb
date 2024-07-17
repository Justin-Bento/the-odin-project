# Super Attribute In Classes.
# Date Made 2024-07-16.

class Animal
  def speak
    "Hello!"
  end
end
class GoodDog < Animal
  def speak
    super + " from GoodDog Class"
  end
end

sparky = GoodDog.new

puts sparky.speak
