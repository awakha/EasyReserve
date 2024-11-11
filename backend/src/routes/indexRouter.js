const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.mainPage);
router.get('/test', indexController.test);

module.exports = router;
