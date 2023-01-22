import { configureStore } from "@reduxjs/toolkit";
import portSlice from "./redux/portSlice";
import infoTypeSlice from "./redux/infoTypeSlice";

export const store = configureStore({
  reducer: {
    port: portSlice,
    infoType: infoTypeSlice,
  },
});
