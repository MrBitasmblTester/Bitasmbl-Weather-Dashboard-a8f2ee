const BASE_URL = "/api/weather";

export async function fetchCurrent(city) {
  const res = await fetch(`${BASE_URL}/current?city=${encodeURIComponent(city)}`);
  if (!res.ok) throw new Error("Failed current");
  return res.json();
}
