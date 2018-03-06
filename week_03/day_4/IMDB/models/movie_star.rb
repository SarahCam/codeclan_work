require('pry')
require_relative('../db/sql_runner')

class MovieStar

  attr_reader :id
  attr_accessor :first_name, :last_name

  def initialize(options)
    @id = options['id'].to_i if options['id']
    @first_name = options['first_name']
    @last_name = options['last_name']
  end

  def save()
    sql = "INSERT INTO moviestars (first_name, last_name)
           VALUES ($1, $2)
           RETURNING id"
    values = [@first_name, @last_name]
    save = SqlRunner.run(sql, values)
    @id = save[0]['id'].to_i
  end

  def update()
    sql = "UPDATE moviestars SET first_name = $1, last_name = $2 WHERE id = $3"
    values = [@first_name, @last_name, @id]
    SqlRunner.run(sql, values)
  end

  def movies()
    sql = "SELECT movies.* FROM castings
             INNER JOIN moviestars ON moviestars.id = castings.moviestar_id
             INNER JOIN movies ON movies.id = castings.movie_id
             WHERE castings.moviestar_id = $1"
    values = [@id]
    movies = SqlRunner.run(sql, values)
    return movies.map { |movie| Movie.new(movie) }
  end

  def self.all()
    sql = "SELECT * FROM moviestars"
    all_moviestars = SqlRunner.run(sql)
    return all_moviestars.map{ |moviestar| MovieStar.new(moviestar)}
  end

  def self.delete_all()
    sql = "DELETE FROM moviestars"
    SqlRunner.run(sql)
  end

end
