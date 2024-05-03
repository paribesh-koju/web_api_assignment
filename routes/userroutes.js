const router = require('express').Router();
const userControllers = require('../controllers/usercontrollers')

//Makea  create user API
router.post('/create', userControllers.createUser)


// exporitng
module.exports = router;