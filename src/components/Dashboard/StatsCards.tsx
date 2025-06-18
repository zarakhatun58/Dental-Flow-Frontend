import { Grid, Paper, Typography } from "@mui/material";

const stats = [
  { label: "Total Patients", value: 134 },
  { label: "Upcoming Appointments", value: 12 },
  { label: "Revenue This Month", value: "$1,420" },
];

const StatsCards = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {stats.map((s, idx) => (
        <Grid size={{ xs: 6, md: 4 }} key={idx}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">{s.label}</Typography>
            <Typography variant="h4">{s.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;
