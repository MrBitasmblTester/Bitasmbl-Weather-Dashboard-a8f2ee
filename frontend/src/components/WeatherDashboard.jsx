import React from "react";

export default function WeatherDashboard({ city, onCityChange }) {
  return (
    <section>
      <input value={city} onChange={e => onCityChange(e.target.value)} />
      {/* TODO: show current, forecast, charts */}
    </section>
  );
}
