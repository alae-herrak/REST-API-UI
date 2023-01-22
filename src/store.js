import { configureStore } from "@reduxjs/toolkit";
import portSlice from "./redux/portSlice";

export const store = configureStore({
  reducer: {
    port: portSlice,
  },
});
