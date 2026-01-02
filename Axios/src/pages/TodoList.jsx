import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);

  return (
    <div>
      <h2>All Todos</h2>

      <ul>
        {todos.slice(0, 20).map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} — {todo.completed ? "Completed" : "Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
