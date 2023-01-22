import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  port: 5000,
};

const portSlice = createSlice({
  name: "port",
  initialState: initialState,
  reducers: {
    setPort: (state, action) => {
      state.port = action.payload;
    },
    resetPort: (state) => {
      state.port = 5000;
    },
  },
});

export default portSlice.reducer;
export const { setPort, resetPort } = portSlice.actions;
