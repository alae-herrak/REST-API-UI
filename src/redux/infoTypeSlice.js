import { createSlice } from "@reduxjs/toolkit";
const initalState = {
  infoType: "users",
};

const infoTypeSlice = createSlice({
  name: "infoType",
  initialState: initalState,
  reducers: {
    setInfoType: (state, action) => {
      state.infoType = action.payload;
    },
  },
});

export default infoTypeSlice.reducer;
export const { setInfoType } = infoTypeSlice.actions;
