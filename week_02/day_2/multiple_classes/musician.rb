class Musician

  attr_reader :name

  def initialize(name, instrument)
    @name  = name
    @instrument = instrument
  end

  def play_song(title)
    # return "I'm playing #{title}!"
    return @instrument.make_sound(title) + "I'm playing #{title}!"
  end

end
