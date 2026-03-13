import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Meal from "./pages/Meal";
import Coach from "./pages/Coach";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav className="bg-blue-700 text-white p-4 flex gap-6">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("workout")}>Workout Plan</button>
        <button onClick={() => setPage("meal")}>Meal Plan</button>
        <button onClick={() => setPage("coach")}>Coach</button>
      </nav>

      <div className="p-6">
        {page === "home" && <Home />}
        {page === "workout" && <Workout />}
        {page === "meal" && <Meal />}
        {page === "coach" && <Coach />}
      </div>
    </div>
  );
}