const express = require('express');
const router = express.Router();

const restController = require('../controllers/restController');

router.get('/', restController.mainPage);

module.exports = router;
