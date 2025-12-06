import React from "react";

export default function WeatherChart({ points }) {
  if (!points || !points.length) return <div>No chart data</div>;
  // TODO: render SVG or canvas chart
  return <div>Chart placeholder</div>;
}
