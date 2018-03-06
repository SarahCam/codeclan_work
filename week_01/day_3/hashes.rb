# meals = ["yoghurt", "roll", "steak"]
# p meals[0]

# hashes: key - value pairs, stored in {} brackets

# my_first_hash = Hash.new()
# my_first_hash = Hash.new("breakfast" => "yoghurt")
# # p my_first_hash["anything"]
# # my_second_hash = {}
#
# meals = {"breakfast" => "yoghurt", "lunch" => "roll", "dinner" => "steak"}
# # p meals["breakfast"]    # prints "yoghurt"
# # p meals["supper"]       # prints nil
#
# silly_hash = {1 => "2", 2 => 3, 4 => false}
# # p silly_hash
# # p silly_hash[4]
#
# meals["supper"] = "toast"
# # p meals
#
# meals["supper"] = "tea and toast"
# # p meals
#
# p meals.keys()    # prints out an array of all the keys for the hash 'meals'
# p meals.values()  # prints out an array of all the values for the hash 'meals'
#
# inverted = meals.invert()   # inverts key - values
# p inverted
#
# meals.default = "hungry"
# p meals["brunch"]
# meals.delete("supper")
# p meals
#
# a = "a"
# b = "b".freeze()
#
# new_hash = Hash["a", 1, "b", 2]
# new_hash[b] = "c"
# p new_hash
#
# # new_hash.slice(a)
#
# p new_hash.merge(meals)

# p :my_symbol
# p :my_symbol + :hello   # can't do this!

# meals = {:breakfast => "yoghurt", :lunch => "roll"}
# meals = {breakfast: "yoghurt", lunch: "roll"}
# p meals[:lunch]

# countries = {
#   uk: "London",
#   germany: "Berlin"
# }

countries = {
  uk: {
    capital: "London",
    population: 6000000,
    languages: ["English", "Gaelic", "Welsh"]
  },
  germany: {
    capital: "Berlin",
    population: 3470000,
    languages: ["German", "German Deutsch", "Turkish"]
  }
}

# p countries[:uk]
# p countries[:uk][:population]
# p countries[:uk][:pop_density]

# p countries[:uk].key(countries[:uk][:population])
#
# population_string = countries[:uk][:population].to_s()
# p "Population #{population_string}"
#
# population_string = countries[:germany][:population].to_s()
# p "Population #{population_string}"

# p countries[:germany][:capital]

p countries[:uk][:languages].first()
p countries[:uk][:languages][0]

p countries[:germany][:languages].first()
p countries[:germany][:languages][0]

p countries[:germany][:languages][-1]
p countries[:germany][:languages].last()

p countries[:germany][:capital]





























##
