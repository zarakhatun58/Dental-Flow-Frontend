import React, { useEffect, useState } from "react";
import {  Grid, Typography } from "@mui/material";
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

  useEffect(() => {
    api.get("/api/patients")
      .then((res:any) => setPatients(res.data))
      .catch((err:any) => console.error("Error fetching patients", err));
  }, []);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "age", headerName: "Age", flex: 1, type: "number" },
    { field: "address", headerName: "Address", flex: 2 },
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
