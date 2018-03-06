sentence = "The die is cast"

def pigify (phrase)

  split_array = phrase.downcase().split(' ')
  p split_array
  pigified_words = []

  for word in split_array
    first_letter = word.slice!(0)
    # p first_letter
    # p word
    swapped_word = word + first_letter
    # p swapped_word

    pigified_word = swapped_word + "ay"
    # p pigified_word
    pigified_words << pigified_word
  end

  # p pigified_words

  pigified_words[0].capitalize!()

  # p pigified_words
  p pigified_words.join(' ')

  return pigified_words.join(' ')

end

pigify(sentence)
