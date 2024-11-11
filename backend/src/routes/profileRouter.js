const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.getReservations);
router.get('/admin', profileController.getReservationsByAdmin);
router.post('/', profileController.postReview);
router.delete('/:reservationId', profileController.deleteReservation);

module.exports = router;
