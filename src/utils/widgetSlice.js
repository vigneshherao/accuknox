import { createSlice } from "@reduxjs/toolkit";

const widgetSlice = createSlice({
  name: "widgetForm",
  initialState: {
    isAddWidget: false,
  },
  reducers: {
    openWidget: (state, action) => {
      state.isAddWidget = true;
    },
    closeWidget: (state) => {
      state.isAddWidget = false;
    },
  },
});

export const { openWidget, closeWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
