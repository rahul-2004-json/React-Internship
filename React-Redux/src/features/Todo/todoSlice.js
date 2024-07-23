import { createSlice, nanoid } from "@reduxjs/toolkit";

//1.Initial state for our slice
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

//Note: Most of the things in redux toolkit takes object

//2.Now create a slice and export it
export const todoSlice = createSlice({
  name: "todo", //This name will be visible in redux dev tools
  initialState,
  //3.Reducers contain the properties and functions
  reducers: {
    //Inside the reducers we should give whole function definition
    //we will get access of two things always (state and action) while declaring a function.
    //state provides the current status of initialState
    //action provides the values to act upon inside the function declaration
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is simply an object that can have id and text , here it will automatically take text out of payload.
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//4.Now export the individual functionalities through which we will be updating the states inside the store
export const { addTodo, removeTodo } = todoSlice.actions;

//5.Now to give awareness to the store we will export the reducer
export default todoSlice.reducer;
