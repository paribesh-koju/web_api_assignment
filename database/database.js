// write a function
// importing packages 
// Always export the function

//importing the packages
const mongoose = require('mongoose');

//creating the function
const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Database Connected Successfully")
    })
}

//exporting the function
module.exports = connectDB;