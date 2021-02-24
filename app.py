from flask import Flask, render_template, request

app = Flask(__name__)
app.config["DEBUG"] = True


data = [
    (3),(4),(9)
]

@app.route("/", methods=["GET", "POST"])
def home():
    print(request.form)
    return render_template("index.html")

@app.route("/simple_chart")
def updatechart():
    legend = 'Monthly Data'
    labels = ["January", "February", "March", "April", "May", "June"]
    values = [10, 9, 8, 7, 6, 4]
    return render_template('index.html', values=values, labels=labels, legend=legend)
 