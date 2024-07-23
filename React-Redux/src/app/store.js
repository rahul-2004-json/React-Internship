import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice";

//create a store like this
export const store = configureStore({
  reducer: todoReducer,
});
