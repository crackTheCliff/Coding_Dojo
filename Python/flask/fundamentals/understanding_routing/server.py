from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<string:name>')
def hello_name(name):
    return f"Hi {name.capitalize()}!"

@app.route('/repeat/<int:num>/<string:name>')
def repeat(num, name):
    return f"{name}" * num

@app.errorhandler(404)
def not_found(error):
    return "Sorry! No response. Try again."

if __name__ == "__main__":
    app.run(debug=True)