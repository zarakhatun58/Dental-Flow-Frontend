import React from "react";
import aboutImg from "../assets/images/about-img.jpg";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="container">
          <Grid container spacing={2} className="row" style={{display:"flex", flexDirection:"row"}}>
            <Grid size={{md:6, xs:12}} >
              <img src={aboutImg} style={{width:"100%", margin:"20px"}}  alt="about" />
            </Grid>

            <Grid size={{md:6, xs:12}} className="content">
              <span>About Us</span>
              <h3>Genuine Family Healthcare</h3>
              <p>
                DentalClinic helps you achieve the quintessentially oriented
                smile you have always craved. Our product gets the job done
                without making you go through any hassle or discomfort.
              </p>
              <Link to="/appointmentBooking" >
             <Button className="link-btn">make appointment </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
