const express = require('express');
const router = express.Router();

const restController = require('../controllers/restController');

router.get('/main', restController.mainPage);
router.get('/schedule/:id/:date', restController.getScheduleByRestId);
router.get('/:id', restController.getOne);
router.get('/', restController.getAllRestaurants);

module.exports = router;
