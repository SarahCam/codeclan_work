require('pry-byebug')
require_relative('models/pizza_order')

order1 = PizzaOrder.new({
  'first_name' => 'Luke',
  'last_name' => 'Skywalker',
  'quantity' => '1',
  'topping' => 'Ewok, extra Ewok'
  })

order2 = PizzaOrder.new({
  'first_name' => 'Darth',
  'last_name' => 'Vader',
  'quantity' => '1',
  'topping' => 'Hawaiian'
  })

order1.save()
order2.save()

order1.first_name = "Fred"      # only updates the object not the db too
order1.update()                 # so we now need to also update the db for this instance

orders = PizzaOrder.all()

# PizzaOrder.delete_all()

# order1.delete()

binding.pry
nil
