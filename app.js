const express = require('express');
const router = express.Router();
require('dotenv').config();

const weatherRoute = require('./routes/weatherRoute');

const app = express();
app.use(express.json());

app.use('/api/weather', weatherRoute);

app.use((res, req, next)=>{
    res.status(404).json({error: 'Not Found'});
    next();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});