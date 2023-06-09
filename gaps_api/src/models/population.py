import numpy as np
from models.population_member import population_member
from utils.ga_utils import normalise_fitness


class population:
    """
    This class creates a population of members that will be trying to guess a
    provided phrase. The number of members in this population is determined by the
    population size. The members can select genes from the provided genes,
    and these genes in their chromosomes randomly mutate according to a
    specified mutation rate.
    """

    def __init__(
        self, population_size, phrase, mem_genes, mutation_rate=10, max_gens=500
    ):
        """
        Initialise a population of members of a specified size. The population uses
        a phrase for the members to calculate their fitness.

        Inputs:
          population_size: int, number of members for the population
          phrase: str, the phrase to be guessed by the members
          mem_genes: list, possible genes to be used by the members' chromosomes
          mutation_rate: int, probability for members' chromosomes to mutate
        """
        self.population = np.array(
            [
                population_member(len(phrase), mem_genes, mutation_rate)
                for _ in range(population_size)
            ]
        )
        self.population_size = population_size
        self.phrase = phrase
        self.mem_genes = mem_genes
        self.max_gens = max_gens

        self.results_history = []

    def calculate_population_fitness(self):
        """
        Calculates the fitnesses of each member in the population.
        """
        return np.array(
            [member.calculate_fitness(self.phrase) for member in self.population]
        )

    def evaluate(self):
        """
        Calculate the fitnesses of each member in the population and add the max
        and average fitness to lists.
        """
        # Calculate population fitness
        self.population_fitness = self.calculate_population_fitness()
        sorted = self.population[np.argsort(self.population_fitness)]

        # Find the member with the highest fitness
        best = sorted[-1]
        self.best_chromosome = best.chromosome
        self.max_fitness = best.fitness

        # Add fitness data to lists
        self.results_history.append(
            {
                "generation": self.generation,
                "best_chromosome": self.best_chromosome,
                "max_fitness": normalise_fitness(self.max_fitness, self.phrase),
                "avg_fitness": normalise_fitness(
                    np.average(self.population_fitness), self.phrase
                ),
            }
        )

    def select_parent(self, parent):
        """
        Uses the Rejection Sampling technique to choose whether or not to use the
        provided parent for crossover.

        Inputs:
          parent: population_member, potential parent to use for crossover
        """
        if self.max_fitness == 0:
            return parent

        if np.random.uniform(0, 1) < (parent.fitness / self.max_fitness) ** 2:
            return parent
        return None

    def evolve(self):
        """
        Crossover the chromosomes of the members and overwrite their existing
        chromosomes.
        """
        # Select parents for crossover
        for member in self.population:
            parentA = None
            parentB = None

            while parentA is None:
                potential_parent = self.population[
                    np.random.randint(self.population_size)
                ]
                if potential_parent != member:
                    parentA = self.select_parent(potential_parent)

            while parentB is None:
                potential_parent = self.population[
                    np.random.randint(self.population_size)
                ]
                if potential_parent != parentA and potential_parent != member:
                    parentB = self.select_parent(potential_parent)

            member.crossover(parentA, parentB)

        # Overwrite the chromosome with the new chromosome
        for member in self.population:
            member.apply_new_chromosome()

        # Increase generation
        self.generation += 1

    def run(self):
        """
        Run the evolution process.
        """
        self.generation = 1

        while True and self.generation <= self.max_gens:
            # Evaluate the population
            self.evaluate()

            # Correct phrase found so break out of the loop
            if self.best_chromosome == self.phrase:
                break

            self.evolve()
