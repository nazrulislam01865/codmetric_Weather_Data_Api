const express = require('express');
const router = express.Router();
const getWeather = require('../controllers/weatherController'); // ✅ Import the controller

router.get('/', getWeather);

module.exports = router;
