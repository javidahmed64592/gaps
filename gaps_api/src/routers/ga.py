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

    max_fitness = mypop.max_fitness_history
    avg_fitness = mypop.avg_fitness_history
    best_chromosome = mypop.best_chromosome_history

    response = {
        "max_fitness": max_fitness,
        "avg_fitness": avg_fitness,
        "best_chromosome": best_chromosome,
    }

    return make_request("Success", response, 200)
