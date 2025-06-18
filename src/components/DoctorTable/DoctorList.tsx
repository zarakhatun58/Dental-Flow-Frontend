import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import { BASE_URL } from "../../services/Apis";
import defaultPic from "../../assets/images/default-avatar.jpg"

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  image: string;
}


const DoctorList = () => {
const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/doctors`);
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    getDoctors();
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 4, mx: "auto", display: "block" }} />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Doctors
      </Typography>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid size={{ xs: 6, sm:6, md: 4 }} key={doctor._id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:5000${doctor.image}` || defaultPic}
                alt={doctor.name}
              />
              <CardContent>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography color="text.secondary">{doctor.specialty}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DoctorList;
