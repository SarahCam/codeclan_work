require("pg")

class Bounty

  attr_accessor :name, :species, :bounty_value, :danger_level

  attr_reader :id

  def initialize(options)
    @name = options['name']
    @species = options['species']
    @bounty_value = options['bounty_value']
    @danger_level = options['danger_level']       # (e.g. low, medium, high...)
    @id = options['id'].to_i if options['id']
  end

  ####### CREATE #########################################################
  def save()
    db = PG.connect({ dbname: 'space_cowboys', host: 'localhost' })
    sql = "INSERT INTO bounty (name, species, bounty_value, danger_level)
             VALUES ($1, $2, $3, $4)
             RETURNING id"
    values = [@name, @species, @bounty_value, @danger_level]
    db.prepare("save", sql)
    @id = db.exec_prepared("save", values)[0]["id"].to_i
    db.close()
  end

  ####### READ ##########################################################
  def Bounty.read_all()
  end

  ####### UPDATE ########################################################
  def update()
    db = PG.connect({ dbname: 'space_cowboys', host: 'localhost' })
    sql = "UPDATE bounty
           SET (name, species, bounty_value, danger_level) = ($1, $2, $3, $4)
           WHERE id = $5"
    values = [@name, @species, @bounty_value, @danger_level, @id]
    db.prepare("update", sql)
    db.exec_prepared("update", values)
    db.close()
  end

  ####### DELETE ########################################################
  def Bounty.delete_all()
    db = PG.connect({ dbname: 'space_cowboys', host: 'localhost' })
    db.close()
  end

  def delete()
    db = PG.connect({ dbname: 'space_cowboys', host: 'localhost' })
    sql = "DELETE FROM bounty WHERE id = $1"
    values = [@id]
    db.prepare("delete", sql)
    db.exec_prepared("delete", values)
    db.close()
  end

  ####### FIND - ME - FOR THIS INSTANCE ##################################
  def find_me()
    db = PG.connect({ dbname: 'space_cowboys', host: 'localhost' })
    sql = "SELECT * FROM bounty WHERE id = $1"
    values = [@id]
    db.prepare("find_me", sql)
    bounty = db.exec_prepared("find_me", values)
    db.close()
    return bounty[0]          # returns a hash
  end

####### FIND - CLASS METHOD TO FIND SPECIFIC ID #########################
  def Bounty.find_id(id)
    db = PG.connect({ dbname: 'space_cowboys', host: 'localhost' })
    sql = "SELECT * FROM bounty WHERE id = $1"
    values = [id]
    db.prepare("find_id", sql)
    bounty = db.exec_prepared("find_id", values)
    db.close()
    return Bounty.new(bounty[0])   # returns a new instance
  end

  ####### FIND - CLASS METHOD TO FIND SPECIFIC first_name #########################
    def Bounty.find_name(name)
      db = PG.connect({ dbname: 'space_cowboys', host: 'localhost' })
      sql = "SELECT * FROM bounty WHERE name = $1"
      values = [name]
      db.prepare("find_name", sql)
      bounty = db.exec_prepared("find_name", values)
      db.close()
      return Bounty.new(bounty[0])   # returns a new instance
    end


end
