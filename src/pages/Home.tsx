import React from "react";
import "./styles.css"
import { Grid } from "@mui/material";
import DetailsData from "./DetailsData";
import ChartBar from "./ChartBar";
import ChartAnalytics from "./ChartAnalytics";
import Clinic from './../components/Clinics/Clinic';
import Hero from "../components/Hero/Hero";
import Orbit from "../components/Orbit/Orbit";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Grid container spacing={2}>
        <Grid size={{md:7, xs:12}}><Hero/></Grid>
        <Grid size={{md:5, xs:12}}><Orbit/></Grid>
      </Grid>
      <DetailsData />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartBar />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartAnalytics />
        </Grid>
      </Grid>
      <Grid>
        <Clinic />
      </Grid>
      <Grid>
        <Reviews/>
      </Grid>
      
    </div>
  );
};

export default Home;
