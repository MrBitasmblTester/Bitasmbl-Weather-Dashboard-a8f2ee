from fastapi import FastAPI
from routers import weather

app = FastAPI(title="Weather API")

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(weather.router, prefix="/api/weather", tags=["weather"])
