const userModel = require('../models/appointmentmodels')

// Creating user function
const userAppointment = async (req, res) => {
    console.log(req.body);
    // Destructuring
    const { date, time } = req.body;
    
    // Validation
    if (!date || !time) {
        return res.json({
            "success": false,
            "message": "Please enter all fields!"
        });
    }

    // Further validation for date format and future date
    const appointmentDate = new Date(date);
    const currentDate = new Date();
    if (isNaN(appointmentDate.getTime()) || appointmentDate < currentDate) {
        return res.json({
            "success": false,
            "message": "Invalid or past date provided!"
        });
    }

    // Check time slot availability
    if (time === "15:00") {
        return res.json({
            "success": false,
            "message": "Time slot at 15:00 is unavailable!"
        });
    }

    // try - Catch (Error handling)
    try {
        // Check existing user 
        const existingUser = await userModel.findOne({
            date: date,
            time: time
        });

        if (existingUser) {
            return res.json({
                "success": false,
                "message": "User Already Exist!"
            });
        }

        // Save new user in the database
        const newUser = new userModel({
            date: date,
            time: time
        });

        // Actually save to the database
        await newUser.save();

        // Send the success response 
        res.json({
            "success": true,
            "message": "User Created Successfully!"
        });
    } catch (error) {
        console.log(error);
        res.json({
            "success": false,
            "message": "Internal Server Error"
        });
    }
}

module.exports = {
    userAppointment
}
