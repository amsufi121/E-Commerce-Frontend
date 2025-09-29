import React, { useState } from "react";
import Signup from "../Signup/Signup";
import { MdEmail } from "react-icons/md"; // Material Design
import { RiLockPasswordFill } from "react-icons/ri"; // Remix Icon
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [credetials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { email, value } = e;
    setCredentials({
      ...credetials,
      [email]: value,
    });
  }

  function handleSubmit() {
    fetch("https://e-commerce-backend-1-roxr.onrender.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credetials),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.set("token", data.token);
      });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <form className="inputs" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <MdEmail className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            onChange={(e) => handleChange(e.target)}
          />
        </div>

        <div className="input">
          <RiLockPasswordFill className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            onChange={(e) => handleChange(e.target)}
          />
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
