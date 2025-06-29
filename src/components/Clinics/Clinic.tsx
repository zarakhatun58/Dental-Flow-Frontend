// src/pages/Clinics.js
import React, { useEffect, useState } from 'react';
import api, { BASE_URL } from '../../services/Apis';
import { CircularProgress, Grid } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./styles.css"

interface Clinic {
    _id: string;
    name: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    schedule?: {
    [day: string]: {
      open: string;
      close: string;
    };
  };
}

const Clinic: React.FC = () => {
    const [clinics, setClinics] = useState<Clinic[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getClinics = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/clinics`);
                const data = await response.json();
                setClinics(data);
            } catch (err) {
                console.error("Error fetching doctors:", err);
            } finally {
                setLoading(false);
            }
        };

        getClinics();
    }, []);
    if (loading) return <CircularProgress sx={{ mt: 4, mx: "auto", display: "block" }} />;
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Clinics</h1>
            <Grid container spacing={2} className='main-container'>
                {clinics.map((clinic) => (
                    <Grid size={{md:3, xs:12}} key={clinic._id} className='clinic-card'>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" , }}>
                                <FiberManualRecordIcon style={{ color: "purple" }} />
                            </div>
                            <div style={{paddingLeft:"10px"}}>
                                <h2 style={{ color: "#18b1aa", fontWeight: "600", fontSize: "18px" }} >{clinic.name}</h2>
                                <h2 style={{ fontSize:"14px" }}>{clinic.address} {clinic.city}, {clinic.state} {clinic.zip}</h2>
                                <span className="font-semibold">Schedule:  
                                    <ul className="ml-4" style={{listStyleType: "none"}}>
                                    {clinic.schedule &&
                                        Object.entries(clinic.schedule).map(([day, time]) => (
                                            <li key={day} >
                                                {day.charAt(0).toUpperCase() + day.slice(1)}: {time.open} - {time.close}
                                            </li>
                                        ))}
                                </ul></span>
                               
                            </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Clinic;
