# ----
# case
# ----

# puts "Enter a number"
# score = gets.chomp
#
# result = case score.to_i()
#   when 10
#     "Genius"
#   when 8..9, 11..12
#     "Merit"
#   when 5..7
#     "Pass"
#   else
#     "Fail"
#   end
#
# puts result

# -----
# guard
# -----

# score = 6
# result = "fail" if (score < 6)
# result = "pass" if (score >= 6)
# puts result

# -----
# ternary
# -------

# score = 6
# result = score > 5 ? "pass" : "fail"
# puts result

# -----------------
# AND /OR operators
# -----------------

craig_hungry = true
craig_tired = true

puts "Craig is hangry" if craig_hungry && craig_tired

craig_tired = false

puts "Craig is grumpy" if craig_hungry || craig_tired
