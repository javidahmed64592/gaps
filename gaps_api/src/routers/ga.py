from flask import request
from __main__ import app
from utils.router_utils import make_request
from utils.ga_utils import parse_gene_pools
from models.population import population


@app.route("/start_algorithm", methods=["POST"])
def start_algorithm():
    phrase = request.json["phrase"]
    genes = parse_gene_pools(request.json["genes"])
    population_size = request.json["populationSize"]
    mutation_rate = request.json["mutationRate"]
    mypop = population(population_size, phrase, genes, mutation_rate)
    mypop.run()

    return make_request("Success", 200)
