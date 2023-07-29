import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: {},
  motherboard: {},
  ram: {},
  psu: {},
  storage: {},
  monitor: {},
  others: {},
};

const pcBuildSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});
