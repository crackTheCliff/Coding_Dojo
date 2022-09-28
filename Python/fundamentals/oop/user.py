class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current points: {self.gold_card_points}")

    def enroll(self):
        self.is_rewards_member = True

    def spend_points(self, amount):
        self.gold_card_points -= amount
        if self.gold_card_points < amount:
            return "Spending limit has been reached!"

    def current_member(self):
        if self.is_rewards_member == False:
            return "User is not yet a member."
        else:
            return "User is already enrolled"


my_user = User("Cliff", "Helms", "chelms@email.com", 36)
user_2 = User("Matt", "Brown", "mBrown@email.com", 27)
user_3 = User("Chris", "Owen", "cOwen@email.com", 30)

database = [my_user, user_2, user_3]

for i in database:
    # print(i)
    print(i.display_info())

print(my_user.current_member())
print(my_user.display_info())
my_user.enroll()
print(my_user.display_info())
my_user.spend_points(50)
print(my_user.display_info())
user_2.enroll()
print(user_2.display_info())
user_2.spend_points(80)
print(user_2.display_info())
# user_3.spend_points(40)
print(user_3.display_info())
print(user_3.spend_points(40))