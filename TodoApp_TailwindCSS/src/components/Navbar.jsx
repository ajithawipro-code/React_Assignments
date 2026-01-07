import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ currentFilter, setFilter }) => {
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Todos Application</h1>

      <div className="flex items-center gap-4">

        {/* FILTER BUTTONS */}
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded border ${
              currentFilter === "all" ? "bg-gray-200" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`px-3 py-1 rounded border ${
              currentFilter === "completed" ? "bg-gray-200" : ""
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>

          <button
            className={`px-3 py-1 rounded border ${
              currentFilter === "pending" ? "bg-gray-200" : ""
            }`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
        </div>

        {/* AUTH BUTTON */}
        {isAuth && (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
