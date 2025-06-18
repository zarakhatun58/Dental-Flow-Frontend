import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import api from "../../services/Apis";

interface Patient {
  _id: string;
  name: string;
}

const CampaignForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [scheduledDate, setScheduledDate] = useState<Dayjs | null>(dayjs());
  const [audience, setAudience] = useState<string[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await api.get("/api/patients");
        setPatients(res.data);
      } catch (err) {
        console.error("Failed to fetch patients", err);
      }
    };
    fetchPatients();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/api/campaigns", {
        title,
        message,
        scheduledDate,
        audience,
      });
      alert("Campaign created!");
      setTitle("");
      setMessage("");
      setAudience([]);
      setScheduledDate(dayjs());
    } catch (err) {
      console.error("Failed to create campaign", err);
    }
  };

  return (
    <Box p={3} maxWidth={600}>
      <Typography variant="h6" gutterBottom>
        Create Campaign
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label="Message"
            fullWidth
            required
            multiline
            minRows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <DateTimePicker
            label="Scheduled Date"
            value={scheduledDate}
            onChange={(newDate:any) => setScheduledDate(newDate)}
          />

          <TextField
            label="Select Audience"
            fullWidth
            required
            select
            SelectProps={{ multiple: true }}
            value={audience}
            onChange={(e) => setAudience(e.target.value.split(","))}
          >
            {patients.map((p) => (
              <MenuItem key={p._id} value={p._id}>
                {p.name}
              </MenuItem>
            ))}
          </TextField>

          <Button type="submit" variant="contained">
            Send Campaign
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CampaignForm;
