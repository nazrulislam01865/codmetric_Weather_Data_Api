


const axios = require('axios');

let cache = [];

const getWeather = async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ success: false, message: 'City is required' });
  }

  const cached = cache.find(c => c.city.toLowerCase() === city.toLowerCase());
  if (cached) {
    return res.json({ success: true, source: 'cache', data: cached.data });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);

    const data = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description
    };

    cache.unshift({ city, data });
    if (cache.length > 5) cache.pop();

    res.json({ success: true, source: 'api', data });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        message: error.response.data.message || 'Error from OpenWeather API',
        code: error.response.status
      });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = getWeather;

