import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../services/Apis";



const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/patients`);
        setPatients(res.data);
        console.log(res.data)
      } catch (err:any) {
        console.error("Failed to fetch patients:", err.message);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map((p: any) => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
