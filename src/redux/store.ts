import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/project/projectSlice";
import ticketReducer from "./features/ticket/ticketSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    ticket: ticketReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectName = (state: RootState) => state.project.name;
