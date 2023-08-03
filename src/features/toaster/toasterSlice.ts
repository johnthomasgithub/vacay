import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToaster: null,
}; //setting state for the toaster
export const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    showToaster: (state, action) => {
      state.showToaster = action.payload;
    }, //for showing the toaster
    hideToaster: (state, action) => {
      state.showToaster = action.payload;
    }, //hiding toaster
  },
});

export const { showToaster, hideToaster } = toasterSlice.actions;

export default toasterSlice.reducer;
