import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planArr: [
    {
      id: 1,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Mumbai",
      description: "marine drive, gatway of India",
      title: "Summar",
    },
    {
      id: 2,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      description: "Marina Beach and other areas",
      title: "Summar",
    },
    {
      id: 3,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Summar",
      description: "Water there park with adventures",
    },
    {
      id: 4,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      title: "Summar",
      description: "Marina Beach and other areas",
    },
    {
      id: 5,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Summar",
      description: "Water theme park",
    },
    {
      id: 6,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      title: "Summar",
      description: "food street at the evening",
    },
    {
      id: 7,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Summar",
      description: "marine drive, gatway of India",
    },
    {
      id: 8,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      title: "Summar",
      description: "Bike ride on beach road",
    },
    {
      id: 9,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Summar",
      description: "Description of Item 3",
    },
    {
      id: 10,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Chennai",
      title: "Summar",
      description: "Description of Item 2",
    },
    {
      id: 11,
      fromDate: "26/07/2023",
      toDate: "26/07/2023",
      designation: "Madurai",
      title: "Summar",
      description: "Description of Item 3",
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
