import os
from flask import Flask
from flask_sqlalchemy import sqlalchemy
 if os.path.exists("env.py"):
import env #noqa

#create instance of Flask
app = Flask(__name__)

app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")  #DB_URL is database location to be set up later

#ccreate an instance of imported SQLAlchemy class, which will be assigned to a variable of db and set to the instance of the Flask app:

db = SQLAlchemy(app)

from taskmanager import routes #noqa