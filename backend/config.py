import os

class Settings:
    weather_api_key: str = os.getenv("WEATHER_API_KEY", "demo")
    base_url: str = "https://api.open-meteo.com/v1/forecast"

settings = Settings()
