const express = require('express');
const cors = require('cors');
require('dotenv').config()

const connectDB = require('./config/connection')
const routes= require("./routes")
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({ 
    origin : process.env.CLIENT_URL,
    credentials : true
}
))
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = 3001 || process.env.PORT;

app.use('/api',routes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB")
        console.log(`🌍 Now listening on localhost:${PORT}`)  
    });
})
  

