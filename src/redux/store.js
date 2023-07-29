import { configureStore } from "@reduxjs/toolkit";
import pcBuildReducer from "./features/pcBuild/pcBuildSlice";

export default configureStore({
  reducer: {
    pcBuild: pcBuildReducer,
  },
});
