import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Home from "../../Pages/Home/Home";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        MyLogo
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Register</a>
        </li>
        <span></span>
      </ul>
    </nav>
  );
};

export default Navbar;
