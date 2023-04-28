import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  name: string;
  dateCreated: number | null;
}

const initialState: ProjectState = {
  name: "",
  dateCreated: null,
};

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    createProject: (state, action: PayloadAction<string>) => {
      (state.name = action.payload), (state.dateCreated = Date.now());
    },
  },
});

export const { createProject } = projectSlice.actions;

export default projectSlice.reducer;
