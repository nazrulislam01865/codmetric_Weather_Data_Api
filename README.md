# codmetric_Weather_Data_Api
# Weather Data API

## Description
A simple backend service to fetch and serve current weather data using OpenWeatherMap API. Supports caching of last 5 requests for performance.

## Setup
1. Clone this folder structure.
2. Run `npm install` to install dependencies (express, axios, dotenv).
3. Sign up for a free API key at https://openweathermap.org/api.
4. Create a `.env` file and add your `OPENWEATHER_API_KEY`.
5. Run `npm start` to start the server.

## Usage
- Endpoint: `GET /weather?city={cityName}` (e.g., http://localhost:3000/weather?city=London)
- Response: JSON with `city`, `temperature` (Celsius), `humidity` (%),
`conditions`.
- Error Handling: 400 for missing city, 404 for invalid city, 500 for API/server errors.
- Caching: Last 5 requests cached in memory (refreshes after 1 hour per city).

## Notes
- This uses in-memory caching (resets on server restart). For production, consider Redis.
- Rate limits: OpenWeatherMap free tier has limits; monitor usage.