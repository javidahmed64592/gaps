import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    value: {
      genes:
        "0123456789 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,!?",
      phrase: "",
      mutationRate: 3,
      populationSize: 200,
    },
  },
  reducers: {
    setGenes: (state, action) => {
      state.value.genes = action.payload;
    },
    setPhrase: (state, action) => {
      state.value.phrase = action.payload;
    },
    setMutationRate: (state, action) => {
      state.value.mutationRate = parseInt(action.payload);
    },
    setPopulationSize: (state, action) => {
      state.value.populationSize = parseInt(action.payload);
    },
    incrementPopulationSize: (state) => {
      state.value.populationSize += 1;
    },
    decrementPopulationSize: (state) => {
      state.value.populationSize = Math.max(0, state.value.populationSize - 1);
    },
    incrementMutationRate: (state) => {
      state.value.mutationRate += 1;
    },
    decrementMutationRate: (state) => {
      state.value.mutationRate = Math.max(0, state.value.mutationRate - 1);
    },
  },
});

export const {
  setGenes,
  setPhrase,
  setMutationRate,
  setPopulationSize,
  incrementPopulationSize,
  decrementPopulationSize,
  incrementMutationRate,
  decrementMutationRate,
} = formSlice.actions;

export const getGenes = (state) => state.form.value.genes;
export const getPhrase = (state) => state.form.value.phrase;
export const getMutationRate = (state) => state.form.value.mutationRate;
export const getPopulationSize = (state) => state.form.value.populationSize;

export default formSlice.reducer;
