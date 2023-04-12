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
      state.value.mutationRate = action.payload;
    },
    setPopulationSize: (state, action) => {
      state.value.populationSize = action.payload;
    },
  },
});

export const { setGenes, setPhrase, setMutationRate, setPopulationSize } =
  formSlice.actions;

export const getGenes = (state) => state.form.value.genes;
export const getPhrase = (state) => state.form.value.phrase;
export const getMutationRate = (state) => state.form.value.mutationRate;
export const getPopulationSize = (state) => state.form.value.populationSize;

export default formSlice.reducer;
