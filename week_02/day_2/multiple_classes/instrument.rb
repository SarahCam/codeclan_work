class Instrument

  attr_reader :name, :type

  def initialize(name, type)
    @name = name
    @type = type
  end

  def make_sound(title)
    if @type == "piano"
      return "Plink plonk... "
    else
      return ""
    end
  end

end
