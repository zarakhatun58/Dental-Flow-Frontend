import React, { useEffect, useState } from "react";
import {  Button, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import api from "../../services/Apis";

interface Patient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  gender?: string;
  age?: number;
  address?: string;
}

const PatientTable = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
const [open, setOpen] = useState(false);
const [editMode, setEditMode] = useState(false);
const [formData, setFormData] = useState<Partial<Patient>>({});

  useEffect(() => {
    api.get("/api/patients")
      .then((res:any) => setPatients(res.data))
      .catch((err:any) => console.error("Error fetching patients", err));
  }, []);
  const fetchPatients = async () => {
  try {
    const res = await api.get("/api/patients");
    setPatients(res.data);
  } catch (err) {
    console.error("Error fetching patients", err);
  }
};

  const handleDelete = async (id: string) => {
  try {
    await api.delete(`/api/patients/${id}`);
    setPatients((prev) => prev.filter((p) => p._id !== id));
  } catch (error) {
    console.error("Error deleting patient:", error);
  }
};
const handleUpdate = async () => {
  try {
    await api.put(`/api/patients/${formData._id}`, formData);
    fetchPatients(); // Refresh list
    setOpen(false);
    setEditMode(false);
  } catch (err) {
    console.error("Update error:", err);
  }
};

const handleEdit = (patient: Patient) => {
  // You can set the patient in a modal or form for editing
  setFormData(patient);
  setEditMode(true);
  setOpen(true); // Open modal/form
};

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "gender", headerName: "Gender", flex: 1 },
  { field: "age", headerName: "Age", flex: 1, type: "number" },
  { field: "address", headerName: "Address", flex: 2 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => (
      <>
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleEdit(params.row)}
          style={{ marginRight: 8 }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </Button>
      </>
    ),
  },
];
  return (
    <Grid container spacing={2} sx={{ height: 200, width: "100%" }}>
          <Grid size={{md:8, xs:12}} style={{margin:"auto"}}>
      <Typography variant="h6" gutterBottom>Patient List</Typography>
      <DataGrid
        autoHeight
        rows={patients}
        columns={columns}
        getRowId={(row) => row._id}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
      />
    </Grid>
    </Grid>
  );
};



export default PatientTable;
