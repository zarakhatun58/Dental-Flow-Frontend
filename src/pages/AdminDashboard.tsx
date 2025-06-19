import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import NoShowAnalytics from '../components/Dashboard/NoShowAnalytics';
import DoctorTable from '../components/DoctorTable/DoctorTable';
import CampaignList from '../components/Campaign/CampaignList';
import PatientTable from '../components/PatientTable/PatientTable';
import Reviews from './Reviews';
import PaymentList from "../components/Payment/PaymentList";
import SidebarMenu from "./SidebarMenu";

const AdminDashboard = () => {
 const [activeSection, setActiveSection] = useState('doctor');

    const renderContent = () => {
        switch (activeSection) {
            case 'doctor':
                return <DoctorTable />;
            case 'patient':
                return <PatientTable />;
            case 'payment':
                return <PaymentList/>; // You may want a real Payment component here
            case 'campaign':
                return <CampaignList />;
            case 'analytics':
                return <NoShowAnalytics />;
            case 'review':
                return <Reviews />;
            case 'noShow':
                return <NoShowAnalytics />;
            case 'signin':
                return <div>Sign In Page Placeholder</div>;
            default:
                return <DoctorTable />;
        }
    };
    return (
        <div style={{ height: "800px" }}>
            <Grid container spacing={2} >
                <Grid size={{ xs: 12, md: 2 }}>
                    <SidebarMenu onSelect={setActiveSection} />
                </Grid>
                <Grid size={{ xs: 12, md: 10 }} >
                    {renderContent()}
                </Grid>
            </Grid>
        </div>
    );
};

export default AdminDashboard;
