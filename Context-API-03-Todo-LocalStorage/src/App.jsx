import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts"; //this is being imported from index.js file that is created in contexts folder
import { TodoForm, TodoItem } from "./components";

function App() {
  //This contains all the todos
  const [todos, setTodos] = useState([]);

  //Now we define the functionality of each methods here that were only declared in TodoContext
  //Name of methods should be same as defined in the context
  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //One drawback of localStorage is that it stores and returns everything in string format so we will have to convert it first into JSON
  //Getting todos from localStorage as soon as the application loads
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //Setting todos inside the localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    //TodoProvider is providing us something and that something is taken in value={{}} basically in this we get everything defined inside a context
    <TodoProvider
      value={{ todos, updateTodo, addTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
