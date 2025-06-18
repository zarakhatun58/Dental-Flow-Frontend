import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Paper,
} from "@mui/material";
import api from "../../services/Apis";

interface Payment {
  _id: string;
  amount: number;
  method: string;
  status: string;
  notes?: string;
  createdAt: string;
  patient: {
    name: string;
    email: string;
    phone: string;
  };
}

export default function PaymentList() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPayments = async () => {
    try {
      const response = await api.get("/api/payments");
      setPayments(response.data);
    } catch (error) {
      console.error("Failed to fetch payments", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "patientName",
      headerName: "Patient Name",
      flex: 1,
      valueGetter: (params: any) => params.row.patient?.name || "N/A",
    },
    {
      field: "amount",
      headerName: "Amount ($)",
      flex: 0.7,
    },
    {
      field: "method",
      headerName: "Method",
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.7,
    },
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
      valueFormatter: (params: any) =>
        new Date(params.value).toLocaleDateString("en-IN"),
    },
  ];

  return (
    <Container maxWidth="md"  style={{marginTop:"50px"}}>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Payments List
      </Typography>

      <Paper sx={{ height: 500, width: "100%", p: 2 }}>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={payments}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: 0 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
          />
        )}
      </Paper>
    </Container>
  );
}
