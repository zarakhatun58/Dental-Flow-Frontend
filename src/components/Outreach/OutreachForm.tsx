import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import type { GridRowId } from "@mui/x-data-grid";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import api from "../../services/Apis";

interface Patient {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

const OutreachForm = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  // const [selectedIds, setSelectedIds] = useState<GridRowId[]>([]);
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>({
  type: 'include',
  ids: new Set<GridRowId>(),
});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, text: "" });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await api.get("/api/patients");
        setPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleSendOutreach = async () => {
    try {
      const res = await api.post("/api/outreach", {
        patientIds: selectedIds,
        message,
      });

      setSnackbar({ open: true, text: res.data.message });
      setMessage("");
     setSelectedIds({
  type: 'include',
  ids: new Set<GridRowId>(),
});
    } catch (err) {
      console.error("Error sending outreach", err);
      setSnackbar({ open: true, text: "Failed to send outreach." });
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
  ];

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Send Outreach Message
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            multiline
            minRows={4}
            margin="normal"
          />

          <Box style={{ height: 400, width: "100%", marginBottom: "1rem" }}>
            <DataGrid
              rows={patients}
              columns={columns}
              getRowId={(row) => row._id}
              checkboxSelection
              onRowSelectionModelChange={(newSelection) =>
                setSelectedIds(newSelection)
              }
              pageSizeOptions={[5, 10, 25]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5, page: 0 },
                },
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSendOutreach}
             disabled={selectedIds.ids.size === 0 || !message}
          >
            Send Message to Selected
          </Button>
        </>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        message={snackbar.text}
        onClose={() => setSnackbar({ open: false, text: "" })}
      />
    </Box>
  );
};

export default OutreachForm;
