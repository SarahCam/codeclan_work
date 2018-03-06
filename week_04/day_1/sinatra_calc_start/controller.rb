# Gets parameters
# Calls model methods - never accesses db directly
# Returns results to the viewer (.erb)

require('sinatra')
require('sinatra/contrib/all')
require_relative('./models/calculator')

get '/' do
  erb(:home)
end

get '/about-us' do
  erb(:about)
end

get '/instructors' do
  @instructors = ["Alan", "Ally", "John", "Steve"]
  erb(:instructors)
end

get '/add/:num1/:num2' do
  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  calculator = Calculator.new(num1, num2)
  @calculation = calculator.add()   # Assign to global var that can be seen in .erb
  erb(:result)                 # Name of the .erb to use in views folder
end

get '/divide/:num1/:num2' do
  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  calculator = Calculator.new(num1, num2)
  @calculation = calculator.divide()
  erb(:result)
end

get '/subtract/:num1/:num2' do
  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  calculator = Calculator.new(num1, num2)
  @calculation = calculator.subtract()
  erb(:result)
end

get '/multiply/:num1/:num2' do
  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  calculator = Calculator.new(num1, num2)
  @calculation = calculator.multiply()
  erb(:result)
end

# get '/multiply/:num1/:num2' do
#   num1 = params[:num1].to_i
#   num2 = params[:num2].to_i
#   calculator = Calculator.new(num1, num2)
#   return "#{calculator.multiply()}"
# end
