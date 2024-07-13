import { createContext, useContext } from "react";

//Creating a context
export const TodoContext = createContext({
  //A context contains the values and functions associated with it
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  //In context we just write the function definition not the functionality
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//useTodo will give access to everything present inside TodoContext
export const useTodo = () => {
  //useContext should be given the context that is created above
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
