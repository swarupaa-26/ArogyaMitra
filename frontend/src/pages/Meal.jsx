import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "../components/Card";

export default function Meal() {
  const [meal, setMeal] = useState("");

  async function fetchMeal() {
    const res = await axios.get("http://localhost:8000/meal");
    setMeal(res.data.meal);
  }

  return (
    <div>
      <button
        onClick={fetchMeal}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Generate Meal Plan
      </button>
      {meal && <Card title="Meal Plan" content={meal} />}
    </div>
  );
}