from models.gene_pools import gene_pools

def parse_gene_pools(pools):
    genes = ""

    for pool in pools:
        if pool["checked"] == True:
            genes += gene_pools[pool["label"]]
    
    return genes