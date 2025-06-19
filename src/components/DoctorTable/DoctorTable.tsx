import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Grid,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"; // Update path as per your structure
import { BASE_URL } from "../../services/Apis";
import axios from "axios";
import "../../pages/styles.css"

interface Doctor {
  _id: string;
  name: string;
  specialty: string; // Match the key from your backend ("specialty")
}

const DoctorTable = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", specialty: "" });

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/doctors`);
      setDoctors(res.data);
      console.log(res.data, "doctors");
    } catch (err: any) {
      console.error("Failed to fetch doctors:", err.message);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post(`${BASE_URL}/api/doctors`, form);
      setForm({ name: "", specialty: "" });
      setOpen(false);
      fetchDoctors();
    } catch (err: any) {
      console.error("Add doctor failed:", err.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/api/doctors/${id}`);
      fetchDoctors();
    } catch (err: any) {
      console.error("Delete failed:", err.message);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "specialty", headerName: "Specialty", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params: any) => (
        <Button color="error" onClick={() => handleDelete(params.row._id)}>
          Delete
        </Button>
      ),
    },
  ];

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <Box >
      <Typography variant="h6" gutterBottom>
        Manage Doctors
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }} onClick={() => setOpen(true)} className="link-btn">
        Add Doctor
      </Button>
      <Grid container spacing={2} sx={{ margin:"auto"}}> 
      <Grid size={{ md: 9, xs: 12 }} style={{margin:"auto",}}>
        <DataGrid
          rows={doctors.map((d) => ({ ...d, id: d._id }))}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          autoHeight
        />
      </Grid>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Doctor</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            label="Specialty"
            fullWidth
            margin="dense"
            value={form.specialty}
            onChange={(e) => setForm({ ...form, specialty: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DoctorTable;
