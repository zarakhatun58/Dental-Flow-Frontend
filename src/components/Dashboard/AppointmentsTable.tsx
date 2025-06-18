import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Chip, Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../services/Apis";



interface Appointment {
  _id: string;
  name?: string; // patient name if not nested
  patient?: {
    name: string;
  };
  doctor: string | { name: string };
  appointmentDate: string;
  time: string;
  status: "Scheduled" | "Completed" | "Cancelled";
}

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/appointments`);
      setAppointments(res.data);
      console.log(res.data, "appointment")
    } catch (err: any) {
      console.error("Failed to fetch appointments:", err.message);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await axios.patch(`${BASE_URL}/api/appointments/${id}/status`, { status });
      fetchAppointments(); // refresh list
    } catch (err: any) {
      console.error("Failed to update status:", err.message);
    }
  };

const columns = [
  { field: "id", headerName: "ID", width: 80 },

  {
     field: "name",
    headerName: "Patient",
    width: 150,
    valueGetter: (params: any) =>
      params?.row?.patient?.name || params?.row?.name || "N/A",
  },

  {
    field: "doctor",
    headerName: "Doctor",
    width: 160,
    valueGetter: (params: any) =>
  params?.row?.doctor?.name
    ? `${params.row.doctor.name} (${params.row.doctor.specialty})`
    : "N/A"
  },

  {
    field: "appointmentDate",
    headerName: "Date",
    width: 130,
    valueGetter: (params: any) =>
      params?.row?.appointmentDate
        ? new Date(params.row.appointmentDate).toLocaleDateString()
        : "N/A",
  },

  { field: "time", headerName: "Time", width: 100 },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params: any) => (
      <Chip
        label={params?.value}
        color={
          params?.value === "Completed"
            ? "success"
            : params?.value === "Cancelled"
            ? "error"
            : "warning"
        }
      />
    ),
  },

  {
    field: "action",
    headerName: "Action",
    width: 180,
    renderCell: (params: any) => (
      <>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={() => updateStatus(params.row._id, "Completed")}
          disabled={params.row.status !== "Scheduled"}
        >
          Complete
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => updateStatus(params.row._id, "Cancelled")}
          sx={{ ml: 1 }}
          disabled={params.row.status !== "Scheduled"}
        >
          Cancel
        </Button>
      </>
    ),
  },
];


  return (
    <Box sx={{ height: 450, width: "65%" , margin:"auto"}}>
      <Typography variant="h6" gutterBottom  sx={{m:4}}>
        Appointments
      </Typography>

      <DataGrid
        rows={appointments.map((a, i) => ({ ...a, id: a._id || i }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
};

export default AppointmentsTable;
