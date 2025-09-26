import React from "react";
import "./Signup.css";
import { FaUser } from "react-icons/fa"; // FontAwesome
import { MdEmail } from "react-icons/md"; // Material Design
import { RiLockPasswordFill } from "react-icons/ri"; // Remix Icon
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <form className="inputs">
        <div className="input">
          <FaUser className="icon" />
          <input type="text" placeholder="Enter Username" required />
        </div>
        <div className="input">
          <MdEmail className="icon" />
          <input type="email" placeholder="Enter Email" required />
        </div>
        <div className="input">
          <RiLockPasswordFill className="icon" />
          <input type="password" placeholder="Enter Password" required />
        </div>

        <div className="submit-container">
          <button type="submit" className="submit">
            Signup
          </button>
        </div>
        <div className="login-link">
          Already have an account?{" "}
          <span>
            {" "}
            <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
