import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import api from "../../services/Apis";

const PaymentForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { control, handleSubmit, reset } = useForm();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get("/api/patients")
      .then((res:any) => setPatients(res.data))
      .catch((err:any) => console.error("Failed to load patients", err));
  }, []);

  const onSubmit = async (data: any) => {
    try {
      await api.post("/api/payments", data);
      reset();
      onSuccess?.();
      alert("Payment created successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to create payment");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Create Payment</Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{margin:"auto", width:"500px"}}>
        <Stack spacing={2}>
          <Controller
            name="patient"
            control={control}
            defaultValue=""
            render={(field:any) => (
              <TextField select label="Patient" fullWidth {...field} required>
                {patients.map((p: any) => (
                  <MenuItem key={p._id} value={p._id}>
                    {p.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Controller
            name="amount"
            control={control}
            defaultValue=""
            render={(field:any) => (
              <TextField type="number" label="Amount" fullWidth {...field} required />
            )}
          />

          <Controller
            name="method"
            control={control}
            defaultValue=""
            render={(field:any) => (
              <TextField select label="Payment Method" fullWidth {...field} required>
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="Card">Card</MenuItem>
                <MenuItem value="UPI">UPI</MenuItem>
              </TextField>
            )}
          />

          <Controller
            name="status"
            control={control}
            defaultValue="Pending"
            render={(field:any) => (
              <TextField select label="Status" fullWidth {...field}>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
              </TextField>
            )}
          />

          <Controller
            name="notes"
            control={control}
            defaultValue=""
            render={(field:any) => (
              <TextField label="Notes" fullWidth multiline rows={3} {...field} />
            )}
          />

          <Button variant="contained" type="submit" style={{backgroundColor:"#18b1aa"}}>
            Submit Payment
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default PaymentForm;
