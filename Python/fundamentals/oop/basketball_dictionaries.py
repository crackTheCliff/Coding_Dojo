class Player:
    def __init__(self, data):
        self.name = data['name']
        self.age = data['age']
        self.position = data['position']
        self.team = data['team']

    @classmethod
    def get_team(cls, team_list):
        player_objects = []
        for dict in team_list:
            player_objects.append(cls(dict))
        return player_objects

    # Not required for the assignment but useful
    # __repr__(self) is a python system method that 
    # tells python how to handle representing that class 
    # when, for example the object is printed to the terminal.
    def __repr__(self):
        display = f"Player: {self.name}, Age: {self.age}, Pos: {self.position}, Team: {self.team}"
        return display

kevin = {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
}
jason = {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
}
kyrie = {
        "name": "Kyrie Irving", 
        "age":32, "position": "Point Guard", 
        "team": "Brooklyn Nets"
}

player_kevin = Player(kevin)
player_jason = Player(jason)
player_kyrie = Player(kyrie)
print(player_kevin)
print(player_jason)
print(player_kyrie)