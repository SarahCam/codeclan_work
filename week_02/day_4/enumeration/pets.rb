pets = [
{
    name: "Sir Percy",
    pet_type: :cat,
    breed: "British Shorthair",
    price: 500
},
{
    name: "King Bagdemagus",
    pet_type: :cat,
    breed: "British Shorthair",
    price: 500
},
{
    name: "Sir Lancelot",
    pet_type: :dog,
    breed: "Pomsky",
    price: 1000,
},
{
    name: "Arthur",
    pet_type: :dog,
    breed: "Husky",
    price: 900,
},
{
    name: "Tristan",
    pet_type: :dog,
    breed: "Basset Hound",
    price: 800,
},
{
    name: "Merlin",
    pet_type: :cat,
    breed: "Egyptian Mau",
    price: 1500,
}
]

# # Print out all of the names using a loop
# for pet in pets
#   p pet[:name]
# end
#
# # Print out all of the names using an enumerable
# pets.each { |pet| p pet[:name] }
#
# # Find a pet using a loop and if statement
# for pet in pets
#   if pet[:name] == "Tristan"
#     p pet
#   end
# end
#
# # Find a pet using an enumerable
# pets.each do |pet|
#   if pet[:name] == "Tristan"
#     p pet
#   end
# end
#
# p pets.find { |pet| pet[:name] == "Tristan"}
#

## Task: using enumerable methods:
## 1. Find the pet which breed is Husky
# p pets.find { |pet| pet[:breed] == "Husky"}     # returns one back
# p pets.select { |pet| pet[:breed] == "Husky"}    # will return an array - good for many things
#
# ## 2. Make an array of all of the pets' names
# p pets.map { |pet| pet[:name] }
#
# ## 3. Find out if there are any pets of breed 'Dalmation' (true or false)
# p pets.any? { |pet| pet[:breed] == "Dalmation"}
# p pets.any? { |pet| pet[:breed] == "Husky"}
# p pets.include?("Dalmation")      # doesn't specify that you are looking for a breed specifically - so not so good
#
# ## 4. Find the most expensive pet i.e. pet with the highest/maximum price
# p pets.max { |pet| pet[:price]}
#
# ## 5. Find the total value (price) of all of the pets added together.
# p pets.reduce(0) { |total, pet| total + pet[:price]}
# p pets.inject(0) { |total, pet| total + pet[:price]}
#
# p pets.sum {|pet| pet[:price]}

## 6. Change each pet so their price is 50% cheaper
# p pets.each { |pet| pet[:price] = pet[:price] / 2}
# p pets.each { |pet| pet[:price] = pet[:price].div(2)}

pets.map! {|pet| pet[:price] /=2; pet}
puts pets
