class Bank_Account:
    all_instances = []

    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        Bank_Account.all_instances.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if (self.balance - amount) > 0:
            self.balance -= amount
        else:
            print(
                f'Sorry, but you do not have enough funds to withdraw money. Your balance: {self.balance}')
        return self

    def display_account_info(self):
        print(f'Balance: {self.balance}')
        print(f'Interest Rate: {self.int_rate}')
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        else:
            print('Your account balance is negative!')
        return self

    @classmethod
    def print_instances(cls):
        for account in cls.all_instances:
            account.display_account_info()

class User:
    def __init__(self, first_name, last_name, age, email, new_balance = 0):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.email = email
        self.account = Bank_Account(0.02, new_balance)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def yield_interest(self):
        self.account.yield_interest()
        return self

    def display_user_info(self):
        print(f'First name: {self.first_name}\nLast name: {self.last_name}\nEmail: {self.email}\nAge: {self.age}')
        self.account.display_account_info()
        return self

cliff_helms = User("Cliff", "Helms", 36, "cHelms@email.com", 500)
kevin_owens = User("Kevin", "Owens", 28, "kOwens@email.com", 300)

Bank_Account.print_instances()

cliff_helms.make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawal(
    200).display_user_info()

kevin_owens.make_deposit(200).make_deposit(200).make_withdrawal(50).make_withdrawal(
    50).make_withdrawal(20).make_withdrawal(20).yield_interest().display_user_info()