import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, MenuItem, Typography } from "@mui/material";
import api from "../../services/Apis";
import "../../pages/styles.css";
import dayjs from "dayjs";
import { Navigate, useNavigate } from "react-router-dom";

const AppointmentBooking = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    doctor: "",
    reason: "",
    appointmentDate: "",
    time: "",
  });

  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);

  // Fetch all doctors
  useEffect(() => {
    api
      .get("/api/doctors")
      .then((res: any) => setDoctors(res.data))
      .catch((err: any) => console.error(err));
  }, []);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Doctor changed
  if (name === "doctor") {
    const selectedDoctor = doctors.find((doc) => doc._id === value);
    const date = formData.appointmentDate;
    if (selectedDoctor && date) {
      const weekday = dayjs(date).format("dddd"); // e.g., "Monday"
      if (selectedDoctor.availableDays.includes(weekday)) {
        setAvailableSlots(selectedDoctor.availableSlots);
      } else {
        setAvailableSlots([]);
      }
    } else {
      setAvailableSlots([]);
    }
    setFormData((prev) => ({ ...prev, time: "" }));
  }

  // Date changed
  if (name === "appointmentDate") {
    const selectedDoctor = doctors.find((doc) => doc._id === formData.doctor);
    if (selectedDoctor) {
      const weekday = dayjs(value).format("dddd"); // e.g., "Monday"
      if (selectedDoctor.availableDays.includes(weekday)) {
        setAvailableSlots(selectedDoctor.availableSlots);
      } else {
        setAvailableSlots([]);
      }
    }
    setFormData((prev) => ({ ...prev, time: "" }));
  }
};

  const handleBook = () => {
    api
      .post("/api/appointments/book", formData)
      .then((res) => {
        alert(res.data.message || "Appointment booked!");
        navigate("/userDashboard");
        // Clear form
        setFormData({
          name: "",
          phone: "",
          address: "",
          doctor: "",
          reason: "",
          appointmentDate: "",
          time: "",
        });
        setAvailableSlots([]);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response?.data?.error || "Something went wrong.");
      });
  };

  return (
    <Grid container spacing={2} style={{ margin: "30px" }}>
      <Grid size={{ md: 5, xs: 12 }} className="book-form">
        <Typography variant="h5" gutterBottom>
          Book an Appointment
        </Typography>

        <TextField
          fullWidth
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          select
          fullWidth
          name="doctor"
          label="Doctor"
          value={formData.doctor}
          onChange={handleChange}
          margin="normal"
        >
          {doctors.map((doc) => (
            <MenuItem key={doc._id} value={doc._id}>
              {doc.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          name="reason"
          label="Reason"
          value={formData.reason}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          type="date"
          name="appointmentDate"
          label="Appointment Date"
          InputLabelProps={{ shrink: true }}
          value={formData.appointmentDate}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          select
          fullWidth
          name="time"
          label="Available Time"
          value={formData.time}
          onChange={handleChange}
          margin="normal"
          // disabled={!availableSlots.length}
        >
         {availableSlots.length === 0 ? (
            <MenuItem value="">No slots available</MenuItem>
          ) : (
            availableSlots.map((slot, index) => (
              <MenuItem key={index} value={slot}>
                {slot}
              </MenuItem>
            ))
          )}
        </TextField>

        <Button
          variant="contained"
          color="primary"
          onClick={handleBook}
          disabled={Object.values(formData).some((v) => !v)}
          style={{ marginTop: "16px" }}
          className="link-btn"
        >
          Book Appointment
        </Button>
      </Grid>
    </Grid>
  );
};

export default AppointmentBooking;
