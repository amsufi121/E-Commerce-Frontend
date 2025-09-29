import React, { useState } from "react";
import "./Signup.css";
import { FaUser } from "react-icons/fa"; // FontAwesome
import { MdEmail } from "react-icons/md"; // Material Design
import { RiLockPasswordFill } from "react-icons/ri"; // Remix Icon
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e;
    setCredential({
      ...credential,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://e-commerce-backend-1-roxr.onrender.com/api/auth/register", {
      method: "POST",
      body: JSON.stringify(credential),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.set("token", data.token);
      });

    navigate("/login");
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <form className="inputs" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            required
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="input">
          <MdEmail className="icon" />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            onClick={(e) => handleChange(e.target)}
          />
        </div>
        <div className="input">
          <RiLockPasswordFill className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            onClick={(e) => handleChange(e.target)}
          />
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
