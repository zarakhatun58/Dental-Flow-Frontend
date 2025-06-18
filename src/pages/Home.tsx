import React from "react";
import Patients from "../components/Patients";
import AdminDashboard from "./AdminDashboard";
import { Link } from "react-router-dom";
import "./styles.css"
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="container">
          <div style={{ display:"flex", flexDirection:"row", height:"100vh", alignItems:"center"}}>
            <div className="content" style={{textAlign:"left"}}>
              <h4>Allow us to <br/> make your smile brighter.</h4>
              <p>
                DentalClinic Can Help You Get the Smile You've Always Wanted. We
                offer cosmetic dentistry, root canal therapy, cavity
                inspections, and more.
              </p>
              <Link to="/appointmentBooking" >
                <Button className="link-btn">make appointment </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
