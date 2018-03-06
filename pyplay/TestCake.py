import unittest                 # import the unittest stuff
from Cake import Cake           # from Cake.py import Cake class

class TestCake(unittest.TestCase):      # inheritance, this class is like another class
    def setUp(self):                    # note: uppercase U in setUp!! self = instance of the class we are dealing with
        ingredients = ["Sugar", "Flour", "Chocolate"]
        self.cake = Cake("Brownie", ingredients)              # same as cake = Cake.new() in Ruby

    def test_cake_has_name(self):
        self.assertEquals("Brownie", self.cake.name)            # self makes it an instance variable, eg @cake, instead of local to the method

    def test_cake_has_three_ingredients(self):
        self.assertEquals(3, len(self.cake.ingredients))

    def test_cake_can_bake(self):
        self.assertEquals("We're baking a Brownie!", self.cake.bake())

unittest.main()     # will run all my tests in this file
