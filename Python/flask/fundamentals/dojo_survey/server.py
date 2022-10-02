from flask import Flask, render_template, request
app = Flask(__name__)
app.secret_key = "the code"

@app.route('/')
def survey():
    return render_template("survey.html")

@app.route("/result", methods=["POST"])
def result():
    name = request.form["name"]
    dojo_location = request.form["dojo_location"]
    favLanguage = request.form["favLanguage"]
    comments = request.form["comments"]
    return render_template("return.html", name = name, dojo_location = dojo_location, favlanguage = favLanguage, comments = comments)

if __name__ == "__main__":
    app.run(debug = True)