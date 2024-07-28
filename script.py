import flask, seaborn, matplotlib, numpy

APP = flask.Flask(__name__)

@APP.route("/")
def index():


    return flask.render_template("index.html")

if __name__ == '__main__':
    APP.debug=True
    APP.run()