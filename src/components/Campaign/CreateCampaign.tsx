import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../services/Apis";



const CreateCampaign = () => {
  const [form, setForm] = useState({
    title: "",
    message: "",
    audience: [],
    scheduledDate: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/campaigns`, form);
      alert("Campaign created successfully!");
      console.log(res.data);
    } catch (err: any) {
      console.error("Failed to create campaign:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      {/* Add audience and date as needed */}
      <button type="submit">Create Campaign</button>
    </form>
  );
};

export default CreateCampaign;
