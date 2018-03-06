require('pry')
require_relative('../db/sql_runner')

class Casting

  attr_reader :id
  attr_accessor :movie_id, :moviestar_id, :fee

  def initialize(options)
    @id = options['id'].to_i if options['id']
    @movie_id = options['movie_id']
    @moviestar_id = options['moviestar_id']
    @fee = options['fee']
  end

  def save()
    sql = "INSERT INTO castings (movie_id, moviestar_id, fee)
           VALUES ($1, $2, $3)
           RETURNING id"
    values = [@movie_id, @moviestar_id, @fee]
    save = SqlRunner.run(sql, values)
    @id = save[0]['id'].to_i
  end

  def update()
    sql = "UPDATE castings SET movie_id = $1, moviestar_id = $2, fee = $3 WHERE id = $4"
    values = [@movie_id, @moviestar_id, @fee, @id]
    SqlRunner.run(sql, values)
  end

  def self.read_all()
  end

  def self.delete_all()
    sql = "DELETE FROM castings"
    SqlRunner.run(sql)
  end

end
