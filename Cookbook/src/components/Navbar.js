import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cook Book</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
