import { useState } from "react";
import "./App.css";
import { addTodo, deleteTodo } from "./store/features/todoslice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const { todoapp } = useSelector((state) => state);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(todo);
    dispatch(addTodo({ id: uuidv4(), todo }));
    setTodo("");
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  console.log(todoapp);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your todo here !"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Add to do</button>
      </form>
      {todoapp && todoapp.length > 0 ? (
        todoapp.map((item, id) => (
          <div key={item.id}>
            {item.todo}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))
      ) : (
        <h1>No Todos yet !</h1>
      )}
    </div>
  );
}

export default App;
