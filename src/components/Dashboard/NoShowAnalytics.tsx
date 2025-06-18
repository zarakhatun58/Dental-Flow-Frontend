import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const NoShowAnalytics = () => {
  const [data, setData] = useState([]);

  const fetchNoShowData = async () => {
    try {
      const res = await axios.get("/api/analytics/no-shows");
      // Expecting: [{ name: "John Doe", noShowCount: 3 }, ...]
      setData(res.data.frequentNoShows || []);
    } catch (err:any) {
      console.error("Failed to fetch no-show data:", err.message);
    }
  };

  useEffect(() => {
    fetchNoShowData();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>No-Show Analytics</Typography>
      {data.length === 0 ? (
        <Typography variant="body2">No frequent no-show data found.</Typography>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="noShowCount" fill="#d32f2f" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};

export default NoShowAnalytics;
