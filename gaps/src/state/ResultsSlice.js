import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    value: {
      resultsHistory: [],
      loading: false,
      display: "notLoadedDisplay",
    },
  },
  reducers: {
    setResults: (state, action) => {
      state.value.resultsHistory = action.payload.results;
      state.value.display = "loadedDisplay";
    },
    setLoading: (state, action) => {
      state.value.loading = action.payload;
      state.value.display = "loadingDisplay";
      if (action.payload) {
        state.value.display = "notLoadedDisplay";
        state.value.resultsHistory = [];
      }
    },
  },
});

export const { setResults, setLoading } = resultsSlice.actions;

export const getResults = (state) => state.results.value.resultsHistory;
export const getLoading = (state) => state.results.value.loading;
export const getDisplay = (state) => state.results.value.display;
export const getResultsLoaded = (state) =>
  state.results.value.bestChromosome === [];

export default resultsSlice.reducer;
