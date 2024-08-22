import { createSlice } from "@reduxjs/toolkit";
import { jsonData } from "./constants";

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    data: jsonData,
    filterData: jsonData,
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
    addFilteredData: (state, action) => {
      state.filterData = action.payload;
    },
  },
});

export const { addData, addFilteredData } = dataSlice.actions;
export default dataSlice.reducer;
