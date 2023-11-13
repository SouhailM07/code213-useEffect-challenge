import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  coinId: "",
};

let coinSlice = createSlice({
  name: "coin id slicer",
  initialState,
  reducers: {
    addUuid: (state, action) => {
      state.coinId = action.payload;
    },
    reset: (state) => {
      state.coinId = "";
    },
  },
});

export const { addUuid, reset } = coinSlice.actions;
export default coinSlice.reducer;
