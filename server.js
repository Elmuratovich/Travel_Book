const express = require('express');
const connectDB = require('./config/db')
require('dotenv').config()

// Connect to database
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Makhmud');
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})