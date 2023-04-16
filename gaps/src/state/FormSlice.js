import { createSlice } from "@reduxjs/toolkit";
import { valueInRange, setPoolRequired } from "../utils/FormUtils";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    value: {
      lowerCaseLetters: {
        label: "Lower case letters",
        value: "abcdefghijklmnopqrstuvwxyz",
        checked: false,
        required: false,
      },
      upperCaseLetters: {
        label: "Upper case letters",
        value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        checked: false,
        required: false,
      },
      numbers: {
        label: "Numbers",
        value: "0123456789",
        checked: false,
        required: false,
      },
      punctuation: {
        label: "Punctuation",
        value: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ",
        checked: false,
        required: false,
      },
      phrase: "",
      populationSize: 200,
      populationSizeLower: 2,
      populationSizeUpper: 999,
      mutationRate: 3,
      mutationRateLower: 1,
      mutationRateUpper: 100,
    },
  },
  reducers: {
    setPhrase: (state, action) => {
      state.value.phrase = action.payload;
      state.value.lowerCaseLetters = setPoolRequired(
        state.value.phrase,
        state.value.lowerCaseLetters
      );
      state.value.upperCaseLetters = setPoolRequired(
        state.value.phrase,
        state.value.upperCaseLetters
      );
      state.value.numbers = setPoolRequired(
        state.value.phrase,
        state.value.numbers
      );
      state.value.punctuation = setPoolRequired(
        state.value.phrase,
        state.value.punctuation
      );
    },
    setPopulationSize: (state, action) => {
      state.value.populationSize = valueInRange(
        action.payload,
        state.value.populationSizeLower,
        state.value.populationSizeUpper
      );
    },
    incrementPopulationSize: (state) => {
      state.value.populationSize = valueInRange(
        state.value.populationSize + 1,
        state.value.populationSizeLower,
        state.value.populationSizeUpper
      );
    },
    decrementPopulationSize: (state) => {
      state.value.populationSize = valueInRange(
        state.value.populationSize - 1,
        state.value.populationSizeLower,
        state.value.populationSizeUpper
      );
    },
    setMutationRate: (state, action) => {
      state.value.mutationRate = valueInRange(
        action.payload,
        state.value.mutationRateLower,
        state.value.mutationRateUpper
      );
    },
    incrementMutationRate: (state) => {
      state.value.mutationRate = valueInRange(
        state.value.mutationRate + 1,
        state.value.mutationRateLower,
        state.value.mutationRateUpper
      );
    },
    decrementMutationRate: (state) => {
      state.value.mutationRate = valueInRange(
        state.value.mutationRate - 1,
        state.value.mutationRateLower,
        state.value.mutationRateUpper
      );
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
