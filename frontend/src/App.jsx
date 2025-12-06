import React, { useState } from "react";
import WeatherDashboard from "./components/WeatherDashboard";

export default function App() {
  const [city, setCity] = useState("Berlin");
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard city={city} onCityChange={setCity} />
    </div>
  );
}
