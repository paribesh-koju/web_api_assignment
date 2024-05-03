// IMPORTING express
const express = require('express'); 
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database/database');

// creating an express app
const app = express();

//configuration dotenv
dotenv.config();

//connecting to the database
// mongoose.connect(process.env.MONGODB_URL).then(()=>{
//     console.log("Database Connected Successfully")
// })
connectDB();
// Json Config
app.use(express.json());

// creating a test route or endpoint
app.get('/test', (req, res)=>{
    res.end("Test Api is Working!...")
})


// Configuring user routes
app.use('/api/user', require('./routes/userroutes'))
app.use('/api/reservation', require('./routes/reservationroutes'))
app.use('/api/appointment', require('./routes/appointmentroutes'))
// app.use('/api/product', require('./routes/productroutes'))

// API URL
//http://localhost:8080/api/user/create
// http://localhost:8080/test

// defining the port
const PORT = process.env.PORT;

// starting the server
app.listen(PORT, () => {
    console.log(`Server-app is running on port ${PORT}`)
})


//Task
//Controller - Routes - Index.js
// Make a product COntroller.js
// Make  a product routes.js
//link to index.js

//https://localhost:8080/api/product/create