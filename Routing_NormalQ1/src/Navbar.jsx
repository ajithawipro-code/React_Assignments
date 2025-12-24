import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home |</Link>
      <Link to="/aboutus">About Us |</Link>
      <Link to="/todos">Todos</Link>
    </nav>
  );
}

export default Navbar;
