import { createSlice } from "@reduxjs/toolkit";

export const searchBarReducer = createSlice({
  name: "search",
  initialState: {
    value: "",
    page: 1,
  },
  reducers: {
    set: (state, { payload }) => {
      state.value = payload;
      state.page= payload.page
    },
    setP: (state, { payload }) => {
      state.page = payload.page;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, setP } = searchBarReducer.actions;

export default searchBarReducer.reducer;
