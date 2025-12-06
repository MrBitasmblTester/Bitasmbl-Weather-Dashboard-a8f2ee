import React from "react";

export default function CurrentWeather({ data }) {
  if (!data) return <div>No data</div>;
  return (
    <div>
      <h2>{data.city}</h2>
      <p>Temp: {data.temp}°C</p>
    </div>
  );
}
