import React from "react";
import Patients from "../components/Patients";
import AdminDashboard from "./AdminDashboard";
import { Link } from "react-router-dom";
import "./styles.css"
import { Button, Grid } from "@mui/material";
import CountingData from "../components/Outreach/CountingData";
import DetailsData from "./DetailsData";
import ChartBar from "./ChartBar";
import ChartAnalytics from "./ChartAnalytics";

const Home = () => {
  return (
    <div style={{padding:"30px"}}>


      <DetailsData />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartBar />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartAnalytics />
        </Grid>
      </Grid>

    </div>
  );
};

export default Home;
