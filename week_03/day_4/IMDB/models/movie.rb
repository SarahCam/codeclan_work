require('pry')
require_relative('../db/sql_runner')

class Movie

  attr_reader :id
  attr_accessor :title, :genre, :rating, :budget

  def initialize(options)
    @id = options['id'].to_i if options['id']
    @title = options['title']
    @genre = options['genre']
    @rating = options['rating']
    @budget = options['budget']
  end

  def save()
    sql = "INSERT INTO movies (title, genre, rating, budget)
           VALUES ($1, $2, $3, $4)
           RETURNING id"
    values = [@title, @genre, @rating, @budget]
    save = SqlRunner.run(sql, values)
    @id = save[0]['id'].to_i
  end

  def update()
    sql = "UPDATE movies SET title = $1, genre = $2, rating = $3 WHERE id = $4"
    values = [@title, @genre, @rating, @id]
    SqlRunner.run(sql, values)
  end

  def moviestars()
    sql = "SELECT moviestars.* FROM castings
             INNER JOIN moviestars ON moviestars.id = castings.moviestar_id
             INNER JOIN movies ON movies.id = castings.movie_id
             WHERE castings.movie_id = $1"
    values = [@id]
    moviestars = SqlRunner.run(sql, values)
    return moviestars.map { |moviestar| MovieStar.new(moviestar) }
  end

  # def total_fees()
  #   total_fee = 0
  #   star = moviestars().map { |star|   }
  #   return fees
  # end

  def self.all()
    sql = "SELECT * FROM movies"
    all_movies = SqlRunner.run(sql)
    return all_movies.map{ |movie| Movie.new(movie)}
  end

  def self.delete_all()
    sql = "DELETE FROM movies"
    SqlRunner.run(sql)
  end

end
