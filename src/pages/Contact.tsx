import React from "react";
import "./styles.css";
import { Button, Container } from "@mui/material";

const Contact = () => {
  return (
    <Container style={{marginBottom:"30px"}}>
      <div className="contact" id="contact">
        <h1 className="heading">Contact For Help</h1>
        <form>
          <p style={{textAlign:"left"}}>Enter your name :</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="box"
            required
          />
          <p>Enter your email :</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="box"
            required
          />
          <p>Enter your number :</p>
          <input
            type="number"
            name="number"
            placeholder="Enter your number"
            className="box"
            required
          />
          <p>Enter appointment date :</p>
          <input type="datetime-local" name="date" className="box" required />
         <Button  className="link-btn">Book Appointment</Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
