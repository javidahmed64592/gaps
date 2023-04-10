from flask import Flask
import datetime

app = Flask(__name__, static_folder="../gaps/build/static", template_folder="../gaps/build")

@app.route('/data')
def get_time():
    return {
        "data": datetime.datetime.now()
        }

if __name__ == "__main__":
    app.run(debug=True)