import React from "react";
import Signup from "../Signup/Signup";
import { MdEmail } from "react-icons/md"; // Material Design
import { RiLockPasswordFill } from "react-icons/ri"; // Remix Icon
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <form className="inputs">
        <div className="input">
          <MdEmail className="icon" />
          <input type="email" placeholder="Enter Email" required />
        </div>

        <div className="input">
          <RiLockPasswordFill className="icon" />
          <input type="password" placeholder="Enter Password" required />
        </div>

        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit">
            Login
          </button>
        </div>

        <div className="login-link">
          Don’t have an account?{" "}
          <span>
            <Link to="/signup">Signup</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
