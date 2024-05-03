const router = require('express').Router();
const userControllers = require('../controllers/reservationcontrollers')

//Makea  create user API
router.post('/reserve', userControllers.userReservation)


// exporitng
module.exports = router;