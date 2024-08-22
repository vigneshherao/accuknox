import { createSlice } from "@reduxjs/toolkit";
import { jsonData } from "./constants";

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    data: jsonData,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
