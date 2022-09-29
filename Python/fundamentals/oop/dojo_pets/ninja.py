from pets import Pet
from pets import my_pet

class Ninja:
# implement __init__( first_name , last_name , treats , pet_food , pet )   
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
# implement the following methods:
# walk() - walks the ninja's pet invoking the pet play() method
    def walk(self):
        self.pet.play()
        return self
# feed() - feeds the ninja's pet invoking the pet eat() method
    def feed(self):
        if len(self.pet_food) > 0:
            food = self.pet_food.pop()
            print(f'Feeding {self.pet.name} {food}!')
            self.pet.eat()
        else:
            print("Oh no! You need more pet food!")
        return self
# bathe() - cleans the ninja's pet invoking the pet noise() method
    def bathe(self):
        self.pet.noise()
        return self


my_treats = ["bacon", "trash", "sausage"]
my_pet_food = ["pizza", "lasagna", "fish"]

cliff = Ninja("Cliff", "Helms", my_treats, my_pet_food, my_pet)

cliff.feed().feed().feed()
