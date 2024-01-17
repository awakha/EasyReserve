const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.getReservations);
router.delete("/:reservationId", profileController.deleteReservation);

module.exports = router;