from flask import request
from __main__ import app
from utils.router_utils import make_request

@app.route("/start_algorithm", methods=["POST"])
def press():
    print(request.json["phrase"], request.json["genes"], request.json["populationSize"], request.json["mutationRate"])
    return make_request("Success", 200)