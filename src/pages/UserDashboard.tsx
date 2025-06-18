import React from 'react';
import AppointmentsTable from '../components/Dashboard/AppointmentsTable';
import NoShowAnalytics from '../components/Dashboard/NoShowAnalytics';
import DoctorTable from '../components/DoctorTable/DoctorTable';
import CampaignList from '../components/Campaign/CampaignList';
import PatientTable from '../components/PatientTable/PatientTable';
import Reviews from './Reviews';

const UserDashboard = () => {
    return (
        <div>
            <AppointmentsTable/>
            <DoctorTable/>
            <NoShowAnalytics/>
            <CampaignList/>
            <PatientTable/>
            
            <Reviews/>
        </div>
    );
};

export default UserDashboard;