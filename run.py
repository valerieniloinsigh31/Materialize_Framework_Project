import os
from taskmanager import app

if __name__== "__main__": #checking if name class is equal to default main string 
    app.run(
        host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=os.environ.get("DEBUG")
    )