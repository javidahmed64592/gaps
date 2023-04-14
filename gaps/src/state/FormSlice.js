import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    value: {
      lowerCaseLetters: {
        label: "Lower case letters",
        checked: true,
      },
      upperCaseLetters: {
        label: "Upper case letters",
        checked: true,
      },
      numbers: {
        label: "Numbers",
        checked: true,
      },
      punctuation: {
        label: "Punctuation",
        checked: true,
      },
      phrase: "",
      mutationRate: 3,
      populationSize: 200,
    },
  },
  reducers: {
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
    toggleLowerLetters: (state) => {
      state.value.lowerCaseLetters = {
        ...state.value.lowerCaseLetters,
        checked: !state.value.lowerCaseLetters.checked,
      };
    },
    toggleUpperLetters: (state) => {
      state.value.upperCaseLetters = {
        ...state.value.upperCaseLetters,
        checked: !state.value.upperCaseLetters.checked,
      };
    },
    toggleNumbers: (state) => {
      state.value.numbers = {
        ...state.value.numbers,
        checked: !state.value.numbers.checked,
      };
    },
    togglePunctuation: (state) => {
      state.value.punctuation = {
        ...state.value.punctuation,
        checked: !state.value.punctuation.checked,
      };
    },
  },
});

export const {
  setPhrase,
  setMutationRate,
  setPopulationSize,
  incrementPopulationSize,
  decrementPopulationSize,
  incrementMutationRate,
  decrementMutationRate,
  toggleLowerLetters,
  toggleUpperLetters,
  toggleNumbers,
  togglePunctuation,
} = formSlice.actions;

export const getPhrase = (state) => state.form.value.phrase;
export const getMutationRate = (state) => state.form.value.mutationRate;
export const getPopulationSize = (state) => state.form.value.populationSize;
export const getLowerLetters = (state) => state.form.value.lowerCaseLetters;
export const getUpperLetters = (state) => state.form.value.upperCaseLetters;
export const getNumbers = (state) => state.form.value.numbers;
export const getPunctuation = (state) => state.form.value.punctuation;
export const getPools = (state) => {
  return [
    state.form.value.lowerCaseLetters,
    state.form.value.upperCaseLetters,
    state.form.value.numbers,
    state.form.value.punctuation,
  ].map((pool) => {
    return {
      label: pool.label,
      checked: pool.checked,
    };
  });
};

export default formSlice.reducer;
