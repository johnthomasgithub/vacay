import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planArr: [
    {
      id: 1,
      fromDate: "26/07/2023",
      toDate: "30/07/2023",
      designation: "Mumbai",
      description: "marine drive, gatway of India",
      title: "Holiday",
    },
    {
      id: 2,
      fromDate: "10/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      description: "Marina Beach and other areas",
      title: "Summar",
    },
    {
      id: 3,
      fromDate: "19/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Winter",
      description: "Water there park with adventures",
    },
    {
      id: 4,
      fromDate: "20/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      title: "Workation",
      description: "Marina Beach and other areas",
    },
    {
      id: 5,
      fromDate: "24/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Vacation",
      description: "Water theme park",
    },
    {
      id: 6,
      fromDate: "25/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      title: "Native visit",
      description: "food street at the evening",
    },
    {
      id: 7,
      fromDate: "12/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Business Trip",
      description: "marine drive, gatway of India",
    },
    {
      id: 8,
      fromDate: "11/07/2023",
      toDate: "26/07/2023",
      designation: "Beach",
      title: "Water park",
      description: "Bike ride on beach road",
    },
  ],
};

export const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    addPlan: (state, action) => {
      action.payload.id = state.planArr.length + 1;
      state.planArr.push(action.payload);
    },
    updatePlan: (state, action) => {
      state.planArr = action.payload;
    },
    deletePlan: (state, action) => {
      state.planArr = action.payload;
    },
  },
});

export const { addPlan, updatePlan, deletePlan } = plannerSlice.actions;

export default plannerSlice.reducer;
