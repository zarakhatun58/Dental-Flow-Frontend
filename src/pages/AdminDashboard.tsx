import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import StatsCards from "../components/Dashboard/StatsCards";
import AppointmentsTable from "../components/Dashboard/AppointmentsTable";
import NoShowChart from "../components/Dashboard/NoShowAnalytics";
import MessagingForm from "../components/Dashboard/MessagingForm";
import NoShowAnalytics from "../components/Dashboard/NoShowAnalytics";
import PatientTable from "../components/PatientTable/PatientTable";

const AdminDashboard = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <StatsCards />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <AppointmentsTable />
          </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <NoShowChart />
          </Grid>
         <Grid size={{ xs: 6}}>
            <MessagingForm />
          </Grid>
          <Box p={3}>
            <Typography variant="h4">Admin Dashboard</Typography>
            <NoShowAnalytics />
            <PatientTable />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminDashboard;
