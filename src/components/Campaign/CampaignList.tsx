import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { BASE_URL } from "../../services/Apis";
import axios from "axios";


interface Campaign {
  _id: string;
  title: string;
  message: string;
  audience: string[];
  scheduledDate: string;
}

const CampaignList: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
         const res = await axios.get(`${BASE_URL}/api/campaigns`);
        setCampaigns(res.data);
      } catch (err) {
        console.error("Failed to fetch campaigns:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "message",
      headerName: "Message",
      flex: 2,
      renderCell: (params) => (
        <span style={{ whiteSpace: "pre-wrap" }}>{params.value}</span>
      ),
    },
    {
      field: "audienceCount",
      headerName: "Audience Count",
      flex: 1,
      valueGetter: (params:any) => params.row?.audience?.length || 0,
    },
    {
      field: "scheduledDate",
      headerName: "Scheduled Date",
      flex: 1,
      valueFormatter: (params: any) =>
      new Date(params.value as string).toLocaleDateString(),
  },
  ];

  const rows = campaigns.map((c) => ({
    ...c,
    id: c._id,
    audienceCount: c.audience.length,
  }));

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Campaign List
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2} sx={{ height: 200, width: "100%" }}>
          <Grid size={{md:6, xs:12}} style={{margin:"auto"}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5, page: 0 } },
            }}
            disableRowSelectionOnClick
          />
           </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CampaignList;
