require('sinatra')
require('sinatra/contrib/all')   # Don't need to restart this app for changes to take effect


get '/hi' do
  "Howdy hi"
end

get '/bye' do
  "bye bye"
end

get '/roll_die' do
  rand(1..7).to_s
end

get '/roll_die2' do
  "Rolling the die... #{rand(1..7).to_s}"
end

get '/name/:first/:last' do     # http://localhost:4567/name/sarah/campbell
  return "Your name is #{params[:first]} #{params[:last]}"
end

get "/friends/:number" do
  friends = ["Joey", "Phoebe", "Monica", "Chandler", "Rachel", "Ross"]
  index = params[:number].to_i - 1
  return friends[index]
end

get "/square/:num" do
  num = params[:num].to_i
  return "Number is #{num * num}"   # Be careful to turn num back into a string for it to display ok
end

get "/pet/:hello" do
  "Hello pet"
end

get "/pet/name/:name" do   # Add extra /name to differentiate this from /pet/:hello above
  "Hello #{params[:name]}"
end








#
