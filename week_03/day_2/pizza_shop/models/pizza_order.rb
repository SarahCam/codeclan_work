require("pg")

class PizzaOrder

  attr_accessor :first_name, :last_name, :quantity, :topping

  attr_reader :id

  def initialize( options )                 # options is a hash; avoids ordering issues
    @first_name = options['first_name']     # so need to pull out the key:value from db
    @last_name = options['last_name']
    @quantity = options['quantity'].to_i
    @topping = options['topping']
    @id = options['id'].to_i if options['id']   # i.e. if an id exists, i.e. it is in db, as the db creates the id, when it is stored in db
  end                                           # one without an id may have been created by user and therefore has no id yet assigned to it

  def save()
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' })
    sql = "INSERT INTO pizza_orders (
            first_name,
            last_name,
            quantity,
            topping)
            VALUES ($1, $2, $3, $4)
            RETURNING *"       # $1 etc avoids sql injection, and RETURNING returns that row
                               # RETURNING * -- this returns all columns in an array format
                               # RETURNING id -- this would return just the IDs in an array
    values = [@first_name, @last_name, @quantity, @topping]
    db.prepare("save", sql)               # puts the sql into "save"
    @id = db.exec_prepared("save", values)[0]["id"].to_i     # inserts/runs the values into "save" sql
    db.close()                                                # and id is our first hash entry in our returned object, now it is saved
  end

  def PizzaOrder.all()                    # this is a static method, hence camelcase, applies to all instances - i.e. the whole class
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost'})
    sql = "SELECT * FROM pizza_orders"
    db.prepare("all", sql)
    orders = db.exec_prepared("all")      # orders is return as an array of hashes
    db.close()
    return orders.map{|order|             # for each order, return it as a PizzaOrder object
      PizzaOrder.new(order)}
  end

  def PizzaOrder.delete_all()
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' })
    sql = "DELETE FROM pizza_orders"
    db.prepare("delete_all", sql)
    db.exec_prepared("delete_all")
    db.close()
  end

  def delete()                            # ONLY deletes the current instance (by id)
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' })
    sql = "DELETE FROM pizza_orders WHERE id = $1"
    values = [@id]
    db.prepare("delete_one", sql)
    db.exec_prepared("delete_one", values)
    db.close()
  end

  def update()
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' })
    sql = "UPDATE pizza_orders
           SET (first_name, last_name, quantity, topping) = ($1, $2, $3, $4)
           WHERE id = $5"
    values = [@first_name, @last_name, @quantity, @topping, @id]
    db.prepare("update", sql)
    db.exec_prepared("update", values)
    db.close()
  end

end
