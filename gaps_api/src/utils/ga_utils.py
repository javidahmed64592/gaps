from models.gene_pools import gene_pools


def parse_gene_pools(pools):
    genes = ""

    for pool in pools:
        if pool["checked"] == True:
            genes += gene_pools[pool["label"]]

    return genes


def normalise_fitness(fitness, phrase):
    return int((fitness / len(phrase)) * 100)
