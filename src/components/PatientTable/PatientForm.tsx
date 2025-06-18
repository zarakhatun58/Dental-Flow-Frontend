import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import api from "../../services/Apis";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  age: "",
  address: "",
};

const PatientForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/patients", formData);
      setMessage("Patient added successfully!");
      setFormData(initialFormData);
    } catch (err) {
      setMessage("Failed to add patient.");
      console.error(err);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>Add New Patient</Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="phone"
            label="Phone"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            name="gender"
            label="Gender"
            fullWidth
            value={formData.gender}
            onChange={handleChange}
          />
          <TextField
            name="age"
            label="Age"
            type="number"
            fullWidth
            value={formData.age}
            onChange={handleChange}
          />
          <TextField
            name="address"
            label="Address"
            fullWidth
            value={formData.address}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">Add Patient</Button>
        </Stack>
      </form>

      {message && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default PatientForm;
