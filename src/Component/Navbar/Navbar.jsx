import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Home from "../../Pages/Home/Home";

const Navbar = () => {
  const navigate = useNavigate();

  const auth_token = localStorage.getItem("auth-token")
    ? localStorage.getItem("auth-token")
    : null;

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        MyLogo
      </div>
      {/* <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-btn">🔍</button>
      </div> */}
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li style={{ display: auth_token ? "none" : "block" }}>
          <a href="/login">Login</a>
        </li>
        <li style={{ display: auth_token ? "none" : "block" }}>
          <a href="/signup">Register</a>
        </li>
        <li
          style={{ display: auth_token ? "block" : "none" }}
          onClick={() => localStorage.removeItem("auth-token")}
        >
          <a href="/login">Logout</a>
        </li>
        <span></span>
      </ul>
    </nav>
  );
};

export default Navbar;
