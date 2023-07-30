import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: undefined,
  motherboard: undefined,
  ram: undefined,
  psu: undefined,
  storage: undefined,
  monitor: undefined,
};

const pcBuildSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    handlePcBuild: (state, action) => {
      if (action.payload.category === "cpu") {
        state.cpu = action.payload;
      } else if (action.payload.category === "motherboard") {
        state.motherboard = action.payload;
      } else if (action.payload.category === "ram") {
        state.ram = action.payload;
      } else if (action.payload.category === "psu") {
        state.psu = action.payload;
      } else if (action.payload.category === "storage") {
        state.storage = action.payload;
      } else if (action.payload.category === "monitor") {
        state.monitor = action.payload;
      }
    },
  },
});

export const { handlePcBuild } = pcBuildSlice.actions;

export default pcBuildSlice.reducer;
