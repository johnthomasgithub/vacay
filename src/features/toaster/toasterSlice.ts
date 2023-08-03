import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToaster: null,
};
export const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    showToaster: (state, action) => {
      state.showToaster = action.payload;
    },
    hideToaster: (state, action) => {
      state.showToaster = action.payload;
    },
  },
});

export const { showToaster, hideToaster } = toasterSlice.actions;

export default toasterSlice.reducer;
