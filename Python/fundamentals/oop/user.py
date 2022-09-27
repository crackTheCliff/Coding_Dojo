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
        self.gold_card_points += amount


my_user = User("Cliff", "Helms", "chelms@email.com", 36)
print(my_user.display_info())
my_user.enroll()
print(my_user.display_info())
my_user.spend_points(100)
print(my_user.display_info())
my_user.spend_points(50)
print(my_user.display_info())