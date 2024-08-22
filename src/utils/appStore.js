import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widgetSlice";
import dataReducer from "./dataSlice";

const appStore = configureStore({
  reducer: {
    widget: widgetReducer,
    jsonData: dataReducer,
  },
});

export default appStore;
