import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./styles.css";
import { BASE_URL } from "../services/Apis";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
      });

      alert("Sign up successful!");

    //   const role = result?.data?.role || "user"; 

    //   if (role === "admin") {
    //     navigate("/adminDashboard");
    //   } else {
    //     navigate("/userDashboard");
    //   }
    } catch (err) {
      console.error(err);
      alert("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="container-form">
      <div className="contact">
        <h2>
          <center>Sign Up</center>
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <p style={{ textAlign: "left" }}>Name :</p>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              className="box"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <p style={{ textAlign: "left" }}>Email :</p>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              className="box"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <p style={{ textAlign: "left" }}>Password :</p>
            <input
              type="password"
              placeholder="Enter Password"
              className="box"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
          <Button
            type="submit"
            style={{
              padding: "10px",
              width: "100px",
              marginTop: "10px",
              backgroundColor: "#18b1aa",
              color: "white",
            }}
          >
            Sign Up
          </Button>
        </form>

        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
