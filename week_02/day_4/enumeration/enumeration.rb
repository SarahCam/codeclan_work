chickens = ["margaret", "Hetty", "Henrietta", "Audrey", "Mabel"]

# for chicken in chickens
#   p chicken
# end

# for chicken in 42       # calls method 'each' on an array, but 42 is int
#   p chicken
# end


# chickens.each { |chicken| p chicken }  # run this block of code for each element
#
# chickens.each do |chicken|
#   shouting_chicken = chicken.upcase()
#   p shouting_chicken
# end

# name_lengths = []
# for chicken in chickens
#   name_lengths << chicken.length()
# end
#
# name_lengths = chickens.map { |chicken| chicken.length()}  # map creates a new array of chicken lengths
#
# p name_lengths

# chickens.each_with_index { |chicken, index| p "#{chicken} is at index #{index}" }

# p chickens.find { |chicken| chicken[0] == "H"}    # finds first one only in chickens array
#
# # These do the same thing, i.e. find all chickens in chickens array that begin with H
# p chickens.find_all { |chicken| chicken[0] == "H"}
# p chickens.select { |chicken| chicken[0] == "H"}

# takes multiple items and adds it into a comma separated 'list' variable
p chickens.reduce {|list, chicken| list + ", " + chicken}

# takes each number and adds it to 'sum' variable
p [1,2,3,4,5].reduce {|sum, number| sum + number}

drinks = [
    {name: "Pepsi", quantity: 10, price: 1},
    {name: "Budweiser", quantity: 10, price: 3}
]

# the 0 parameter below will initialise total to be zero, before adding to it:

p drinks.reduce(0) {|total, drink| total + (drink[:quantity] * drink[:price]) }
p drinks.inject(0) {|total, drink| total + (drink[:quantity] * drink[:price]) }
