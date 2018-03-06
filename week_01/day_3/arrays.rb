fruits = ["apple", "bananas", "grape", "orange"]

p fruits[0]
p fruits[4]

# fruits.insert( 2, "pear" )
# p fruits

p fruits[-1]      #prints last one in the array
p fruits[-5]

p fruits.first()
p fruits.first(2) # prints first 2 array items
p fruits.last()
p fruits.last(2)  # prints last 2 array items



# def number_to_month_name(month)
#   months = ["january", "february", "march"]
#   return months[month - 1]
# end
#
# p number_to_month_name(1)
# p number_to_month_name(3)

my_array = []
my_array = Array.new()

p my_array

# fruits[4] = "strawberry"
# p fruits

fruits.push("strawberry") # push new item to end of array
p fruits

p fruits.pop()            # gets & removes last item in the array
p fruits

# p fruits.pop(2)

fruits << "lemon"
p fruits


fruits.shift()          # take off first element from Array
p fruits

fruits.unshift("apple") # add to first element of Array
p fruits

fruits.push("bananas")
p fruits

fruits.delete("bananas")  #deletes ALL elements called "bananas"
p fruits

fruits_and_numbers = ["apple", 1, "grape", 2]
p fruits_and_numbers

crazy_array = [1, 2, 3, 4, [5, 6, 7]]
p crazy_array [4][0]

apple = "apple"
banana = "banana"
new_fruits = [apple * 5, banana]
p new_fruits

fruits[10] = "pear"
p fruits.compact()    # show with removed nil entries
p fruits
p fruits.compact!()   # remove nils and reassign to fruits array
p fruits

p fruits.empty?()

p fruits.fetch(11, "Rubbish")

p fruits[100].nil?()

p fruits.drop(2)
p fruits

new_array = fruits.drop(2)
p new_array

p fruits.take(2)
 
