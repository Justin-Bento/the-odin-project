# Write a program that prints a gretting method.
# This progam should contain a method called "greeting" that takes a 'name' as it's paramater and returns a string.
names = {
  male: ['John', 'Alex', 'Michael'],
  female: ['Sarah', 'Abby', 'Alex'],
}
def greeting(name)
  puts "Hello my name is #{name}"
end

random_name = names.values.flatten.sample

greeting(random_name)
