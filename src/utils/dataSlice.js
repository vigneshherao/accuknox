import { createSlice } from "@reduxjs/toolkit";
import { jsonData } from "./constants";

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    data: jsonData,
  },
  reducers: {
    addData: (state, action) => {
      const { categoryName, widget } = action.payload;

      const category = state.data.categories.find(
        (cat) => cat.name === categoryName
      );

      if (category) {
        category.widgets.push(widget);
      } else {
        console.error(`Category "${categoryName}" not found.`);
      }
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
