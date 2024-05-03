const mongoose = require('mongoose');

// Making schema
const reservationSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    numberOfGuests: {  // Updated field name to match the input data
        type: Number,
        required: true
    },
});

const Reservation = mongoose.model('reservation', reservationSchema);
module.exports = Reservation;
