import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: {
      page: "mainPage",
      navbarHeader: "Phrase Solver",
    },
  },
  reducers: {
    goMainPage: (state) => {
      state.value.page = "mainPage";
      state.value.navbarHeader = "Phrase Solver";
    },
    setNavbarHeader: (state, action) => {
      state.value.navbarHeader = action.payload;
    },
  },
});

export const { goLoginPage, goMainPage, setNavbarHeader } = pageSlice.actions;

export const getPage = (state) => state.page.value.page;
export const getNavbarHeader = (state) => state.page.value.navbarHeader;

export default pageSlice.reducer;
