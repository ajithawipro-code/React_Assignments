import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import Navbar from "../components/Navbar";
import TodoModal from "../components/TodoModal";

import {
  addTodoService,
  getTodosService,
  toggleTodoStatusService,
  deleteTodoService,
  updateTodoService,
} from "../services/todo.service";

const Todos = () => {
  const { logout } = useContext(AuthContext);

  const [userId, setUserId] = useState(null);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  // filter state
  const [filter, setFilter] = useState("all");

  // modal + selection state
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // who is logged in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
    });

    return () => unsub();
  }, []);

  // fetch todos
  const fetchTodos = async () => {
    if (!userId) return;
    const data = await getTodosService(userId);
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, [userId]);

  // add todo
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      title,
      completed: false,
      userId,
      createdAt: new Date().toISOString(),
    };

    await addTodoService(newTodo);
    setTitle("");
    fetchTodos();
  };

  // toggle
  const handleToggle = async (id, status) => {
    await toggleTodoStatusService(id, status);
    fetchTodos();
  };

  // delete
  const handleDelete = async (id) => {
    await deleteTodoService(id);
    setSelectedTodo(null);
    fetchTodos();
  };

  // open modal to edit
  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setOpen(true);
  };

  // save edited title
  const handleSave = async (newTitle) => {
    await updateTodoService(selectedTodo.id, { title: newTitle });
    fetchTodos();
  };

  // filters
  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "completed"
      ? todos.filter((t) => t.completed)
      : todos.filter((t) => !t.completed);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* NAVBAR */}
      <Navbar currentFilter={filter} setFilter={setFilter} />

      {/* LAYOUT */}
      <main className="flex-1 grid grid-cols-3 gap-4 p-6">
        {/* SIDEBAR */}
        <aside className="bg-white shadow rounded p-4">
          <h2 className="font-medium mb-3">Your Todos</h2>

          <ul className="space-y-2">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => setSelectedTodo(todo)}
                className={`flex justify-between items-center border p-2 rounded cursor-pointer ${
                  selectedTodo?.id === todo.id ? "bg-gray-200" : ""
                }`}
              >
                <span
                  className={`${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.title}
                </span>

                <div className="space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(todo.id, todo.completed);
                    }}
                    className="text-blue-600"
                  >
                    Toggle
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(todo);
                    }}
                    className="text-green-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(todo.id);
                    }}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <section className="col-span-2 bg-white shadow rounded p-4">
          {!selectedTodo ? (
            <>
              <h2 className="font-medium mb-4">Add New Todo</h2>

              <form onSubmit={handleAdd} className="flex gap-2">
                <input
                  className="flex-1 border rounded px-3 py-2"
                  placeholder="Enter todo title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="font-medium mb-4">Todo Details</h2>

              <div className="space-y-3">
                <p>
                  <strong>Title:</strong> {selectedTodo.title}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {selectedTodo.completed ? "Completed" : "Pending"}
                </p>

                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(selectedTodo.createdAt).toLocaleString()}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      handleToggle(selectedTodo.id, selectedTodo.completed)
                    }
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Toggle Status
                  </button>

                  <button
                    onClick={() => handleEdit(selectedTodo)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(selectedTodo.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => setSelectedTodo(null)}
                    className="border px-3 py-1 rounded"
                  >
                    Back
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-200 text-center py-3 text-sm">
        Todos App — Built with React & Firebase
      </footer>

      {/* EDIT MODAL */}
      <TodoModal
        open={open}
        onClose={() => setOpen(false)}
        todo={selectedTodo}
        onSave={handleSave}
      />
    </div>
  );
};

export default Todos;
