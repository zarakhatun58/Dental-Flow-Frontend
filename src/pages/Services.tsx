import React from "react";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon4 from "../assets/images/icon-4.svg";
import icon5 from "../assets/images/icon-5.svg";
import icon6 from "../assets/images/icon-6.svg";
import "./styles.css";
import { Container, Grid } from "@mui/material";

const Services = () => {
  return (
    <div>
      <div className="services" id="services">
        <h1 className="heading">our services</h1>
        <Container>
          <Grid container spacing={2} className="box-container">
            <div className="box">
              <img src={icon1} alt="" />
              <h5 className="price">$50</h5>
              <h3>Alignment specialist</h3>
            </div>

            <div className="box">
              <img src={icon2} alt="" />
               <h5 className="price">$150</h5>
              <h3>Cosmetic dentistry</h3>
            </div>

            <div className="box">
              <img src={icon3} alt="" />
                <h5 className="price">$150</h5>
              <h3>Oral hygiene experts</h3>
            </div>

            <div className="box">
              <img src={icon4} alt="" />
              <h5 className="price">$100</h5>
              <h3>Root canal specialist</h3>
            </div>

            <div className="box">
              <img src={icon5} alt="" />
              <h5 className="price">$90</h5>
              <h3>Live dental advisory</h3>
            </div>

            <div className="box">
              <img src={icon6} alt="" />
              <h5 className="price">$230</h5>
              <h3>Cavity inspection</h3>
            </div>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Services;
