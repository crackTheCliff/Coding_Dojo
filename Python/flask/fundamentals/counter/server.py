from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'the force is with you'

@app.route('/')
def index():
    if "count" in session:
        session["count"] += 1
    else:    
        session["count"] = 1
    return render_template("counter.html")

@app.route("/count")
def view_count():
    if "count" in session:
        session["count"] += 1
    return redirect("/")

@app.route("/destroy")
def destroy():
    session.clear()
    return redirect("/")

if __name__ == "__main__":
    app.run(debug = True)
