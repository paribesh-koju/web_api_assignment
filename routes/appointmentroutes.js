const router = require('express').Router();
const userControllers = require('../controllers/appointmentcontrollers')

//Makea  create user API
router.post('/appoint', userControllers.userAppointment)


// exporitng
module.exports = router;