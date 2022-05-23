const { urlencoded } = require('express');
const express = require('express');
const connectDB = require('./config/db')
require('dotenv').config()
const router = require('./router/travelRouters.js')

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/travel', require('./router/travelRouters'))
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

