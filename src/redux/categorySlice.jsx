import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  initilized: false,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categorySlice.reducer;

export const { setCategories } = categorySlice.actions;
