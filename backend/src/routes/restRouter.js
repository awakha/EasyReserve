const express = require('express');
const router = express.Router();

const restController = require('../controllers/restController');

router.get('/:id', restController.getOne);
router.get('/schedule/:id', restController.getScheduleByRestId);
router.get('/', restController.getAllRestaurants);

module.exports = router;
