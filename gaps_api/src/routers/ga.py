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
    max_gens = request.json["maxGens"]

    mypop = population(population_size, phrase, genes, mutation_rate, max_gens)
    mypop.run()

    results = mypop.results_history

    response = {
        "results": results,
    }

    return make_request("Success", response, 200)
