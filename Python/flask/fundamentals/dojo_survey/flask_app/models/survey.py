from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Survey:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated']

    @classmethod
    def save(cls,data):
        query = "INSERT into dojos (name,location,language,comment) VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"
        return connectToMySQL('dojo_survey_schema').query_db(query,data)

    @classmethod
    def get_last_survey(cls):
        query = "SELECT * FROM dojos ORDER BY id DESC LIMIT 1;"
        results = connectToMySQL('dojo_survey_schema').query_db(query)
        return results

    @staticmethod
    def is_valid(survey):
        is_valid = True
        if len(survey['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.")
        if survey['location'] == 'Select':
            is_valid = False
            flash("Must choose a location.")
        if survey['language'] == 'Select':
            is_valid = False
            flash("Must choose a favorite language.")
        if len(survey['comment']) < 3:
            is_valid = False
            flash("Comments must be at least 3 characters.")
        return is_valid