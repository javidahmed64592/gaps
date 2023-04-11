import { configureStore } from "@reduxjs/toolkit";
import colourReducer from "../state/ColourSlice";
import pageReducer from "../state/PageSlice";

export default configureStore({
  reducer: {
    colours: colourReducer,
    page: pageReducer,
  },
});
