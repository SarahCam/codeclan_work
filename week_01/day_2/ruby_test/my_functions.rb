# def greet()
#   words = "Hey"
#   return words
# end
#
# def greet_two()
#   return words
# end
#
# puts greet_two()

#---------------------------------------
# string concatenation
#---------------------------------------

def greet(name, time_of_day)
  return "Good " + time_of_day + ", "+ name
end

puts greet("sarah", "morning")

#---------------------------------------
# string interpolation
#---------------------------------------

def greet(name, time_of_day)
  return "Good #{time_of_day}, #{name}"
end

puts greet("sarah", "morning")

#---------------------------------------
# capitalize
#---------------------------------------

def greet(name, time_of_day)
  return "Good #{time_of_day}, #{name.capitalize()}"
end

puts greet("sarah", "morning")

#---------------------------------------
# add
#---------------------------------------

def add(first_number, second_number)
  return first_number + second_number
end

puts add(2, 3)

#---------------------------------------
# population_density
#---------------------------------------

def population_density(population, area)
  return population / area
end

puts population_density(5373000, 77933)
