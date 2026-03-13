import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "../components/Card";

export default function Workout() {
  const [plan, setPlan] = useState("");

  async function fetchPlan() {
    const res = await axios.get("http://localhost:8000/workout");
    setPlan(res.data.plan);
  }

  return (
    <div>
      <button
        onClick={fetchPlan}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Workout Plan
      </button>
      {plan && <Card title="Workout Plan" content={plan} />}
    </div>
  );
}