import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CountUp from 'react-countup';
import api, { BASE_URL } from '../services/Apis';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import axios from 'axios';
import dayjs from 'dayjs';

const DetailsData = () => {
   const [patientCount, setPatientCount] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);
  const [apointmentCount, setApointmentCount] = useState(0);
  const [campaignCount, setCampaignCount] = useState(0);

  const [patientChange, setPatientChange] = useState(0);
  const [paymentChange, setPaymentChange] = useState(0);
  const [appointmentChange, setAppointmentChange] = useState(0);
  const [campaignChange, setCampaignChange] = useState(0);

const fetchPatientData = async () => {
  const thisMonth = dayjs().format("YYYY-MM");
  const lastMonth = dayjs().subtract(1, 'month').format("YYYY-MM");

  const thisMonthRes = await axios.get(`${BASE_URL}/api/patients?month=${thisMonth}`);
  const lastMonthRes = await axios.get(`${BASE_URL}/api/patients?month=${lastMonth}`);

  const thisCount = thisMonthRes.data.length;
  const lastCount = lastMonthRes.data.length;

  setPatientCount(thisCount);
};

const fetchPaymentData = async () => {
  const thisMonth = dayjs().format("YYYY-MM");
  const res = await axios.get(`${BASE_URL}/api/payments?month=${thisMonth}`);
  setPaymentCount(res.data.length);
};
const fetchAppointmentData = async () => {
  const thisMonth = dayjs().format("YYYY-MM");
  const res = await axios.get(`${BASE_URL}/api/appointments?month=${thisMonth}`);
  setApointmentCount(res.data.length);
};
const fetchCampaignData = async () => {
  const thisMonth = dayjs().format("YYYY-MM");
  const res = await axios.get(`${BASE_URL}/api/campaigns?month=${thisMonth}`);
  setCampaignCount(res.data.length);
};

useEffect(() => {
  const fetchAll = async () => {
    try {
      await Promise.all([
        fetchPatientData(),
        fetchPaymentData(),
        fetchAppointmentData(),
        fetchCampaignData()
      ]);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
  };

  fetchAll();
}, []);

const renderChange = (change: number) => {
    if (change > 0) {
      return (
        <Typography style={{ color: 'green', display: 'flex', alignItems: 'center' }}>
          <TrendingUpIcon style={{ marginRight: '4px' }} />
          {change.toFixed(1)}% increase
        </Typography>
      );
    } else if (change < 0) {
      return (
        <Typography style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
          <TrendingDownIcon style={{ marginRight: '4px' }} />
          {Math.abs(change).toFixed(1)}% decrease
        </Typography>
      );
    } else {
      return <Typography>No Change</Typography>;
    }
  };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", borderRadius: "10px", padding: "20px", margin: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#18b1aa" }}>Patients</Typography>
                            <Typography><Diversity3Icon style={{ color: "#18b1aa" }} /></Typography>
                        </div>
                        <Typography variant="h4" sx={{ color: 'orange', fontWeight: 700 }}>
                            <CountUp end={patientCount} duration={1.5} />
                        </Typography>
                        <Typography >
                            <TrendingUpIcon style={{ paddingTop: "3px", color: "green" }} />{patientChange}%{" "}
                            {patientChange > 0 ? <TrendingUpIcon /> : patientChange < 0 ? <TrendingDownIcon /> : "➖ No Change"}
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", borderRadius: "10px", padding: "20px", margin: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#18b1aa" }}>Payments</Typography>
                            <Typography><MonetizationOnIcon style={{ color: "#18b1aa" }} /></Typography>
                        </div>
                         <Typography variant="h4" sx={{ color: 'green', fontWeight: 700 }}>
              <CountUp end={paymentCount} duration={1.5} />
            </Typography>
                        <Typography >
                            <TrendingUpIcon style={{ paddingTop: "3px", color: "green" }} />{paymentChange}%{" "}
                            {paymentChange > 0 ? <TrendingUpIcon /> : paymentChange < 0 ? <TrendingDownIcon /> : "➖ No Change"}
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", borderRadius: "10px", padding: "20px", margin: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#18b1aa" }}>Appointments</Typography>
                            <Typography><LeaderboardIcon style={{ color: "#18b1aa" }} /></Typography>
                        </div>
                        <Typography variant="h4" sx={{ color: 'blue', fontWeight: 700 }}> <CountUp start={0} end={apointmentCount} duration={1.5} /></Typography>
                        <Typography >
                            <TrendingUpIcon style={{ paddingTop: "3px", color: "green" }} />{appointmentChange}%{" "}
                            {appointmentChange > 0 ? <TrendingUpIcon /> : appointmentChange < 0 ? <TrendingDownIcon /> : "➖ No Change"}
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", borderRadius: "10px", padding: "20px", margin: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#18b1aa" }}>Campaign</Typography>
                            <Typography><FilterFramesIcon style={{ color: "#18b1aa" }} /></Typography>
                        </div>
                        <Typography variant="h4" sx={{ color: 'purple', fontWeight: 700 }}> <CountUp start={0} end={campaignCount} duration={1.5} /></Typography>
                        <Typography >
                            <TrendingUpIcon style={{ paddingTop: "3px", color: "green" }} />{campaignChange}%{" "}
                            {campaignChange > 0 ? <TrendingUpIcon /> : campaignChange < 0 ? <TrendingDownIcon /> : "➖ No Change"}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DetailsData;

function StatCard({
    title,
    count,
    change,
}: {
    title: string;
    count: number;
    change?: string;
}) {
    const isPositive = change && parseFloat(change) >= 0;

    return (
        <div className="bg-white rounded-2xl shadow p-4 text-center">
            <h3 className="text-lg font-medium text-gray-500">{title}</h3>
            <div className="text-3xl font-bold text-blue-600 mt-2">
                <CountUp end={count} duration={1.5} />
            </div>
            {change !== undefined && (
                <p
                    className={`text-sm mt-1 font-medium ${isPositive ? "text-green-600" : "text-red-600"
                        }`}
                >
                    {isPositive ? "📈" : "📉"} {Math.abs(Number(change))}%{" "}
                    {isPositive ? "increase" : "decrease"}
                </p>
            )}
        </div>
    );
}