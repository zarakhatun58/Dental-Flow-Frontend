import { Button, Container } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post("https://dental-ai-backend-d4es.onrender.com/api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);

        if (res.data.status === "Success") {
          const userRole = res.data.user?.role;

          alert("Login successful!");

          if (userRole === "admin") {
            navigate("/adminDashboard");
          } else if (userRole === "user") {
            navigate("/userDashboard");
          } else {
            alert("Unknown role! Redirecting to home.");
            navigate("/home");
          }
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="container-form">
      <div className="contact">
        <h2>
          <center>Login</center>
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <p style={{ textAlign: "left" }}>Email :</p>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="box"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p style={{ textAlign: "left" }}>Password :</p>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="box"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <Button
            style={{
              padding: "10px",
              width: "100px",
              backgroundColor: "#18b1aa",
              color: "white",
            }}
          >
            Login
          </Button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
