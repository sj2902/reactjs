from flask import Flask,request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)



@app.route('/',methods=['GET','POST'])
def home():
    return request.args