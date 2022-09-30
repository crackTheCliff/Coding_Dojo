from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def board():
    return render_template("checkerboard.html", input1 = 8, input2 = 8)

@app.route('/<int:y>')
def check_board(y):
    return render_template("checkerboard.html", input1 = 8, input2 = y)

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def check_board2(x,y,color1,color2):
    return render_template("checkerboard.html", input1 = x, input2 = y, color1=color1, color2=color2)

if __name__ == "__main__":
    app.run(debug=True)