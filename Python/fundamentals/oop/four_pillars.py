#Encapsulation
#methods and attributes are contained within the class
class Human:
    def __init__(self, name, health, strength):
        self.name = name
        self.health = health
        self.strength = strength

    #Abstraction
    # We keep the inner workings of our class contained
    def take_damage(self, amt):
        self.health -= amt

    def Punch(self, target):
        print(f"{self.name} punches {target.name}!")
        target.take_damage(10)
        return self

# Inhertance
# We can take methods and attributes from a parent class.
class Salesman(Human):
    def __init__(self, name):
        #We can use super() to refer to the parent class!
        super().__init__(name, 50, 2)

    #Polymophism
    #Reliable method names that behave differently
    def Punch(self, target):
        print(f"{self.name} gets passive aggressive towards {target.name}!")
        return self

    #We actually still have access to parent functions we override!
    def SuperPunch(self):
        super().Punch()

class Biker(Human):
    def __init__(self, name):
        #We can use super() to refer to the parent class!
        super().__init__(name, 150, 15)

    # A good example of polymorphism and abstraction. 
    #Polymorphism: We can override take_damage, and still reliably call it, like we would for a human.
    #Abstraction: By using a function to change health, we have much more control over how our attributes are modified!
    def take_damage(self, amt):
        self.health -= amt/2

    def Punch(self, target):
        print(f"{self.name} absolutely decks {target.name}!")
        target.take_damage(20)
        return self

sellme = Salesman("Ricky")
person = Biker("Jane")

sellme.Punch(person)
person.Punch(sellme)