import { configureStore } from "@reduxjs/toolkit";
import colourReducer from "../state/ColourSlice";
import pageReducer from "../state/PageSlice";
import formReducer from "../state/FormSlice";
import resultsReducer from "../state/ResultsSlice";

export default configureStore({
  reducer: {
    colours: colourReducer,
    page: pageReducer,
    form: formReducer,
    results: resultsReducer,
  },
});
