from fastapi import APIRouter, Query
import httpx, os, time

router = APIRouter()
CACHE = {}
API_KEY = os.getenv("WEATHER_API_KEY", "demo")

@router.get("/current")
async def current(city: str = Query(...)):
    # TODO: call external API and cache
    return {"city": city, "temp": 0}
