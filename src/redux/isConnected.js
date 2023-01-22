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
  },
});

export default isConnectedSlice.reducer;
export const { connect } = isConnectedSlice.actions;
