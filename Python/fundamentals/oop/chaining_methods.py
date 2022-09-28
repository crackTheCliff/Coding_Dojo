class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f'First name: {self.first_name}\nLast name: {self.last_name}\nEmail: {self.email}\nAge: {self.age}\nMember: {self.is_rewards_member}\nCurrent points: {self.gold_card_points}')
        return self

    def enroll(self):
        if self.is_rewards_member == True:
            print("You are already enrolled!")
        else:
            self.gold_card_points += 200
            self.is_rewards_member = True
        return self

    def spend_points(self, amount):
        self.gold_card_points -= amount
        if self.gold_card_points < amount:
            print("Spending limit has been reached!")
            return self

    def current_member(self):
        if self.is_rewards_member == False:
            print("User is not yet a member.")
        else:
            print("User is already enrolled")
            return self

my_user = User("Cliff", "Helms", "chelms@email.com", 36)
user_2 = User("Matt", "Brown", "mBrown@email.com", 27)
user_3 = User("Chris", "Owen", "cOwen@email.com", 30)

database = [my_user, user_2, user_3]
for i in database:
    print(i.display_info())

my_user.enroll().spend_points(50)
print(my_user.current_member().display_info())
user_2.enroll().spend_points(80)
print(user_2.display_info())
print(user_3.display_info().spend_points(40))