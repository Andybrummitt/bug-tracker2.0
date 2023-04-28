import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TicketState {
  title: string;
  description: string;
  type: "Bug" | "Feature";
  priority: "Low" | "Medium" | "High" | "Urgent";
  dateCreated: number | null;
  project: string;
}

const initialState: TicketState = {
  title: "",
  description: "",
  type: "Bug",
  priority: "Medium",
  dateCreated: null,
  project: "",
};

export const ticketSlice = createSlice({
  name: "createTicketSlice",
  initialState,
  reducers: {
    createTicket: (state, action: PayloadAction<TicketState>) => {
      return action.payload;
    },
  },
});

export const { createTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
