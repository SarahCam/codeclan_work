require("pry")
require_relative("../models/pizza_order")
require_relative("../models/customer")

PizzaOrder.delete_all()
Customer.delete_all()

customer1 = Customer.new({ 'name' => 'Jeff Bridges' })
customer1.save()

order1 = PizzaOrder.new({
  'customer_id' => customer1.id,
  'topping' => 'All the meat',
  'quantity' => 2
  })

order1.save()

this_customer = order1.customer()
customer_pizza_orders = customer1.pizza_orders()

binding.pry
nil
