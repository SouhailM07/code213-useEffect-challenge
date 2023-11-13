import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./slices/coinSlice";

const store = configureStore({
  reducer: {
    coinId: coinSlice,
  },
});

export default store;
