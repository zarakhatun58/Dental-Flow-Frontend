import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import api from "../../services/Apis";

const AppointmentCalendar = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/api/appointments");
      const formatted = res.data.map((a:any) => ({
        id: a._id,
        title: `${a.doctor} - ${a.patient.name}`,
        start: `${a.appointmentDate.slice(0, 10)}T${a.time}`,
        extendedProps: {
          status: a.status,
          reason: a.reason,
        },
      }));
      setAppointments(formatted);
    } catch (err:any) {
      console.error("Error loading appointments:", err.message);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Appointment Calendar
      </Typography>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        events={appointments}
        height="auto"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </Box>
  );
};

export default AppointmentCalendar;
