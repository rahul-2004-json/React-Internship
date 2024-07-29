import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
