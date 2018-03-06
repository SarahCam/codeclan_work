require 'minitest/autorun'
require 'minitest/rg'
require_relative '../mob'

class TddPractice < Minitest::Test

  def test_pig_latin()
    expected = "Hetay ieday siay astay"
    actual = "The die is cast"
    assert_equal(expected, actual)
end
