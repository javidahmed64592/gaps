from flask import request
from __main__ import app
from utils.router_utils import make_request
from utils.ga_utils import parse_gene_pools

@app.route("/start_algorithm", methods=["POST"])
def press():
    print(request.json["phrase"], parse_gene_pools(request.json["genes"]), request.json["populationSize"], request.json["mutationRate"])
    return make_request("Success", 200)