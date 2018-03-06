# print("hello world!")
# len("hello world!")

# def say_hello(name):
#     my_number = 47             # use tabs and keep everything aligned
#     return "Hello " + name     # don't need end keyword or }
#
# my_name = "Sarah"
# print(say_hello(my_name))

# def greet(name):
#     if (name == "John"):
#         print("hi, " + name)
#     elif(name == "Sarah"):
#         print("hello, " + name)
#     else:
#         print("Sorry, I don't recognise you!")
#     print("I get printed at the end of the function")
#
# print("I get printed before my greet method runs")
#
# greet("John")
# greet("Sarah")
# greet("WHO")

# my_list = ["Spam", "Ham", "Eggs"]
# my_list.append("Jam")
# my_list.remove("Ham")
# print(my_list)
# print(my_list.pop())        # prints last entry fromm list
# print(my_list.pop(1))       # prints entry at index 1 from list
# print(len(my_list))

# my_tuple = ("Spam", "Ham", "Eggs")
# my_tuple.append("Jam")    # won't work for a tuple
# print(my_tuple)

### LISTS AND LOOPS

# favourite_foods = ["Pizza", "Doughnuts", "Tofu"]
# for food in favourite_foods:
#     print(food)
#
# #### LISTS & COMPREHENSIONS
#
# numbers = [1,2,3,4,5]
# multiplied_numbers = [number * 2 for number in numbers]     # comprehension way (could just use loops)
#
# even_multiplied_numbers = [number * 2 for number in numbers if number % 2 == 0] #comprehension way
#
# print(multiplied_numbers)
# print(even_multiplied_numbers)

### HASHES

person = {
    "name": "John",
    "favourite_foods": ["Pizza", "Doughnuts", "Tofu"]
}

print(person)
print(person["name"])
print(person.keys())        # returns an array of top level elements
print(person.values())      # returns array of top level elements plus their inner array of values














#
