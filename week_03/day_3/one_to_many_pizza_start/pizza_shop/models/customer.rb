require('pg')
require_relative('../db/sql_runner')
require_relative('./pizza_order')

class Customer

  attr_reader :id, :name

  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
  end

  def save()
    sql = "INSERT INTO customers (name) VALUES ($1) RETURNING id"
    values = [@name]
    save = SqlRunner.run(sql, values)
    @id = save[0]["id"].to_i
  end

  def self.delete_all()   # or Customer.delete_all()
    sql = "DELETE FROM customers"
    SqlRunner.run(sql)
  end

  def self.all()
    sql = "SELECT * FROM customers"
    customers = SqlRunner.run(sql)
    return customers.map{ |person| Customer.new(person)}
  end

  def pizza_orders()
    sql = "SELECT * FROM pizza_orders WHERE customer_id = $1"
    values = [@id]
    orders_details = SqlRunner.run(sql, values)
    return orders_details.map{ |order| PizzaOrder.new(order)}
  end



end
