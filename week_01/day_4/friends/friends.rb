def get_name(person)
  return person[:name]
end

def get_favourite_tv_show(person)
  return person[:favourites][:tv_show]
end

def get_favourite_food(person, food)
  for favourite_food in person[:favourites][:things_to_eat]
    return true if food == favourite_food
  end
  return false
end

def add_new_friend(person, friend)
  person[:friends].push(friend)
end

def remove_friend(person, friend)
  person[:friends].delete(friend)
end

def get_total_money(people)
  total_money = 0
  for person in people
    total_money += person[:monies]
  end
  return total_money
end

def loan_money(lender, lendee, amount)
  # p lender[:monies]
  # p lendee[:monies]
  lender[:monies] -= amount
  lendee[:monies] += amount
end

def get_all_favourite_foods(people)
  all_food_array = Array.new
  for person in people
    all_food_array += person[:favourites][:things_to_eat]
  end
  return all_food_array
end

def who_has_no_friends(people)
  no_friends_array = Array.new
  for person in people
    if person[:friends].length() == 0
      no_friends_array.push(person[:name])
    end
  end
  return no_friends_array
end

# def same_favourite_tv_show(people)
#   same_tv_array = Array.new
#   friends_array = Array.new
#   for person in people
#     friends_array << person[:name]
#     same_tv_array << person[:favourites][:tv_show]
#     # for second_person in people
#     #   if person[:favourites][:tv_show] == second_person[:favourites][:tv_show]
#     #     same_tv_array.push(second_person[:name])
#     #   end
#     # end
#   end
#   compact_tv_array = same_tv_array.uniq()
#   diff_array = same_tv_array - compact_tv_array
#   p same_tv_array
#   p compact_tv_array
#   p diff_array
#   p friends_array
#   return friends_array
# end

def same_favourite_tv_show(people)
  tv_shows = []
  for person in people
    tv_shows.push(person[:favourites][:tv_show])
  end

  same_show = []
  count = 0

  for show in tv_shows
    if tv_shows.count(show) > 1
      same_show.push(count)
    end
    count += 1
  end

  result = []
  for index in same_show
    result.push(people[index][:name])
  end
  return result
end
