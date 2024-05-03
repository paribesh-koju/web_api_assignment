const ReservationModel = require('../models/reservationmodels');

// Creating user function
const userReservation = async (req, res) => {
 
    console.log(req.body);
    // Destructuring
    const { userId, eventDate, numberOfGuests } = req.body;
    
    // Validation
    if (!userId || !eventDate || !numberOfGuests) {
        return res.json({
            "success": false,
            "message": "Please enter all required fields."
        });
    }

    // Ensure numberOfGuests is a positive number
    if (numberOfGuests <= 0) {
        return res.json({
            "success": false,
            "message": "Number of guests must be a positive number."
        });
    }

    // Ensure the eventDate is in the future
    const currentDate = new Date();
    const inputDate = new Date(eventDate);
    if (inputDate <= currentDate) {
        return res.json({
            "success": false,
            "message": "Event date must be in the future."
        });
    }

    // Try-Catch (Error handling)
    try {
        // Check if a user is already booked for that date
        const existingUser = await ReservationModel.findOne({
            userId: userId,
            eventDate: eventDate
        });
        
        if (existingUser) {
            return res.json({
                "success": false,
                "message": "User already exists for that date."
            });
        }
        
        // If not, save in the database
        const newUser = new ReservationModel({
            userId: userId,
            eventDate: eventDate,
            numberOfGuests: numberOfGuests
        });
        
        // Actually save to the database
        await newUser.save();
        
        // Send the success response
        res.json({
            "success": true,
            "message": "User created successfully!"
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            "success": false,
            "message": "Internal Server Error"
        });
    }
};

// Exporting
module.exports = {
    userReservation
};
