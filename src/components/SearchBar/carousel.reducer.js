import { createSlice } from "@reduxjs/toolkit";

export const carouselReducer = createSlice({
  name: "carouselStore",
  initialState: {
    popular: [],
  },
  reducers: {
    stock: (state, { payload }) => {
      state.popular = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { stock } = carouselReducer.actions;

export default carouselReducer.reducer;
