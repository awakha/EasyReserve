const express = require('express');
const router = express.Router();

const { City } = require('../../db/models');
const indexController = require('../controllers/indexController');

router.get('/', indexController.mainPage);

module.exports = router;
