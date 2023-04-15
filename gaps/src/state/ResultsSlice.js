import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    value: {
      avgFitness: [],
      maxFitness: [],
      bestChromosome: [],
      loading: false,
      display: "notLoadedDisplay",
    },
  },
  reducers: {
    setResults: (state, action) => {
      state.value.avgFitness = action.payload.avg_fitness;
      state.value.maxFitness = action.payload.max_fitness;
      state.value.bestChromosome = action.payload.best_chromosome;
      state.value.display = "loadedDisplay";
    },
    setLoading: (state, action) => {
      state.value.loading = action.payload;
      state.value.display = "loadingDisplay";
      if (action.payload) {
        state.value.display = "notLoadedDisplay";
        state.value.avgFitness = [];
        state.value.maxFitness = [];
        state.value.bestChromosome = [];
      }
    },
  },
});

export const { setResults, setLoading } = resultsSlice.actions;

export const getResults = (state) => {
  return {
    avgFitness: state.results.value.avgFitness,
    maxFitness: state.results.value.maxFitness,
    bestChromosome: state.results.value.bestChromosome,
  };
};
export const getLoading = (state) => state.results.value.loading;
export const getDisplay = (state) => state.results.value.display;
export const getResultsLoaded = (state) =>
  state.results.value.bestChromosome === [];

export default resultsSlice.reducer;
