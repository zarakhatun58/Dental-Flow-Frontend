import { Button, CircularProgress, Container, Typography } from "@mui/material";

import React, { useState } from "react";
import api from "../services/Apis";

interface Patient {
  _id: String;
  name: String;
  lastVisit: String;
}

const Patients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const res = await api.get("/patients"); 
      console.log(res.data)
      setPatients(res.data);
    } catch (error) {
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <Container>
        <Typography variant="h4" gutterBottom>
          DentalFlow - Lapsed Patients
        </Typography>
        <Button variant="contained" color="primary" onClick={fetchPatients}>
          Load Patients
        </Button>
        {loading 
        ? (
          <CircularProgress />
        ) : (
          patients.map((p: any) => (
            <Typography key={p._id}>
              {p.name} - Last Visit:{" "}
              {new Date(p.lastVisit).toLocaleDateString()}
            </Typography>
          ))
        )}
      </Container>
    </div>
  );
};

export default Patients;
