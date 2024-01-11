const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.createBooking);
router.delete('/', bookingController.cancelBooking);

module.exports = router;
