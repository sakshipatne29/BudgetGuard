# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, jsonify
from flask_cors import CORS

# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
CORS(app)

# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
def hello_world():
	return jsonify({'Hello World': 1})

@app.route('/registeration')
def registeration():
	return 'Hello World, This the Home endpoint'

# main driver function
if __name__ == '__main__':

	# run() method of Flask class runs the application
	# on the local development server.
	app.run(debug=True)
