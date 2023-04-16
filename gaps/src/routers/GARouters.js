export const startAlgorithm = (
  phrase,
  genes,
  populationSize,
  mutationRate,
  maxGens
) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phrase: phrase,
      genes: genes,
      populationSize: populationSize,
      mutationRate: mutationRate,
      maxGens: maxGens,
    }),
  };

  return fetch("/start_algorithm", requestOptions)
    .then((response) => response)
    .catch((error) => console.log(error));
};
