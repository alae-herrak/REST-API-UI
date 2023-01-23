import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isConnected: false,
};

const isConnectedSlice = createSlice({
  name: "isConnected",
  initialState: initialState,
  reducers: {
    connect: (state) => {
      state.isConnected = true;
    },
    disconnect: (state) => {
      state.isConnected = false;
    },
  },
});

export default isConnectedSlice.reducer;
export const { connect, disconnect } = isConnectedSlice.actions;
