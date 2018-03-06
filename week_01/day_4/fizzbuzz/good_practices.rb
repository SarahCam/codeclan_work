def manipulate(integer)
  integer += 10
  p integer
  integer /= 2
  p integer
end

def defined_method()
  p "success"
end

defined_method

def add(num1, num2, num3)
  return num1 + num2 + num3
end

add(2,4,5)

fruits = ["apple", "orange", "pear", "plums"]

def missing(array
  for fruit in array
    if(fruit == "grape")
      p "Plums!!"
    end
    if(fruit == "apple" || fruit == "orange" || fruit == "pear")
      p "Meh"
    end
  end
end

missing(fruits)
