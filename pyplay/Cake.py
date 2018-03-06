class Cake:
    def __init__(self, name, ingredients):      # Note: pass in myself (self) first, then the properties
        self.name = name
        self.ingredients = ingredients

    def bake(self):
        return("We're baking a " + self.name + "!")
