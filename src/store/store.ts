import { configureStore } from "@reduxjs/toolkit";
import planReducer from "../features/plan/PlanSlice";
import toasterReducer from "../features/toaster/toasterSlice";
export const store = configureStore({
  reducer: {
    planner: planReducer,
    toaster: toasterReducer,
  },
});
