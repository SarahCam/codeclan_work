require('pry')
require_relative('models/movie')
require_relative('models/movie_star')
require_relative('models/casting')

# EMPTY ALL TABLES
Movie.delete_all()
MovieStar.delete_all()
Casting.delete_all()

# ADD NEW MOVIES & SAVE TO DATABASE

movie1 = Movie.new( {
  'title' => 'MOVIE 1',
  'genre' => 'DRAMA',
  'rating' => 5,
  'budget' => 10000
  } )

movie2 = Movie.new( {
  'title' => 'MOVIE 2',
  'genre' => 'COMEDY',
  'rating' => 7,
  'budget' => 20000
  } )

movie3 = Movie.new( {
  'title' => 'MOVIE 3',
  'genre' => 'HORROR',
  'rating' => 10,
  'budget' => 30000
  } )

  movie1.save()
  movie2.save()
  movie3.save()

# ADD NEW MOVIESTARS & SAVE TO DATABASE

moviestar1 = MovieStar.new( {
  'first_name' => 'John',
  'last_name' => 'Smith'
  } )

moviestar2 = MovieStar.new( {
  'first_name' => 'Sue',
  'last_name' => 'Brown'
  } )

moviestar3 = MovieStar.new( {
  'first_name' => 'Jim',
  'last_name' => 'Dodds'
  } )

moviestar1.save()
moviestar2.save()
moviestar3.save()

# ADD NEW CASTINGS & SAVE TO DATABASE

casting1 = Casting.new( {
  'movie_id' => movie1.id,
  'moviestar_id' => moviestar1.id,
  'fee' => 1000
  } )

casting2 = Casting.new( {
  'movie_id' => movie1.id,
  'moviestar_id' => moviestar2.id,
  'fee' => 2000
  } )


casting3 = Casting.new( {
  'movie_id' => movie1.id,
  'moviestar_id' => moviestar3.id,
  'fee' => 3000
  } )

casting4 = Casting.new( {
  'movie_id' => movie2.id,
  'moviestar_id' => moviestar1.id,
  'fee' => 1500
  } )

casting1.save()
casting2.save()
casting3.save()
casting4.save()

# UPDATE TABLE movies

movie1.title = "STUFF"
movie1.update()

# UPDATE TABLE moviestars

moviestar1.first_name = "HARRY"
moviestar1.update()

# UPDATE TABLE castings

casting3.movie_id = movie2.id
casting3.fee = 7000
casting3.update()

# DISPLAY ALL TABLES

all_movies = Movie.all()
all_moviestars = MovieStar.all()

# DISPLAY ALL MOVIES FOR GIVEN MOVIESTAR

star1_movies = moviestar1.movies()
star2_movies = moviestar2.movies()
star3_movies = moviestar3.movies()

# DISPLAY ALL MOVIESTARS FOR GIVEN MOVIE

movie1_stars = movie1.moviestars()
movie2_stars = movie2.moviestars()
movie3_stars = movie3.moviestars()

binding.pry
nil
